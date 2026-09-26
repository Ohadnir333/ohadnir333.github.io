// Runs after `react-scripts build`. GitHub Pages only serves real files, so every
// route gets its own copy of index.html (with its own title, description and share
// image). That lets clean URLs like ohadn.com/videos/Bowly load with a 200, and lets
// Google and WhatsApp see a proper page for each video.
const fs = require("fs");
const path = require("path");
const videos = require("../src/videos/videos.json");

const SITE = "https://ohadn.com";
const BUILD = path.join(__dirname, "..", "build");
const TAGLINE = "director and cinematographer for bike, outdoor and action sports";

const base = fs.readFileSync(path.join(BUILD, "index.html"), "utf8");

const escape = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// Same rules as src/components/videoLabels.js.
const isEmpty = (s) => !s || ["—", "-"].includes(s.trim());
const same = (a, b) => a.trim().toLowerCase() === b.trim().toLowerCase();
function labels(v) {
  const category = isEmpty(v.category) || same(v.category, v.title) ? null : v.category;
  const client =
    isEmpty(v.client) || same(v.client, v.title) || (category && same(v.client, category))
      ? null
      : v.client;
  return { client, category };
}

function page({ route, title, description, image }) {
  const url = `${SITE}${route}`;
  let html = base
    .replace(/<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${escape(description)}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${escape(title)}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${escape(description)}`)
    .replace("</head>", `<link rel="canonical" href="${url}"/></head>`);
  if (image) {
    html = html.replace(/(<meta property="og:image" content=")[^"]*/, `$1${image}`);
  }
  const dir = path.join(BUILD, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
  return url;
}

const urls = [page({ route: "/", title: "Ohad Nir", description: `Ohad Nir – ${TAGLINE}. Commercials, documentaries and full production, from concept to final cut.` })];

urls.push(page({ route: "/about/", title: "About – Ohad Nir", description: `About Ohad Nir, ${TAGLINE}. Full production services, from concept to final cut.` }));
urls.push(page({ route: "/stills/", title: "Stills – Ohad Nir", description: `Photography by Ohad Nir, ${TAGLINE}.` }));
page({ route: "/videosil/", title: "Ohad Nir", description: `Ohad Nir – ${TAGLINE}.` });

for (const v of videos) {
  const { client, category } = labels(v);
  const parts = [client && `for ${client}`, category].filter(Boolean).join(" · ");
  urls.push(
    page({
      route: `/videos/${v.url}/`,
      title: `${v.title} – Ohad Nir`,
      description: `${v.title}${parts ? ` (${parts})` : ""}. A film by Ohad Nir, ${TAGLINE}.`,
      image: `${SITE}/${encodeURI(v.thumbnailFile)}`,
    })
  );
}

// Unknown paths: GitHub Pages serves 404.html, and the app shows its Not Found page.
fs.writeFileSync(path.join(BUILD, "404.html"), base);

fs.writeFileSync(
  path.join(BUILD, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${u}</loc></url>`)
    .join("\n")}\n</urlset>\n`
);

console.log(`static-pages: wrote ${urls.length + 1} pages, 404.html and sitemap.xml`);
