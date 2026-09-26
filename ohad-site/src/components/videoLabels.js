// Hide placeholder labels ("—", "-") and labels that just repeat the title or each other.
const isEmpty = (s) => !s || ["—", "-"].includes(s.trim());
const same = (a, b) => a.trim().toLowerCase() === b.trim().toLowerCase();

export function videoLabels(video) {
  const category =
    isEmpty(video.category) || same(video.category, video.title) ? null : video.category;
  const client =
    isEmpty(video.client) ||
    same(video.client, video.title) ||
    (category && same(video.client, category))
      ? null
      : video.client;
  return { client, category };
}
