import React, { useEffect, useState } from "react";

function Stills() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const on = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  const gap = isMobile ? "7px" : "15px";
  const rowStyle = { display: "flex", width: "100%", gap, alignItems: "flex-start" };
  const cell = { flex: "1 1 0", minWidth: 0 };
  const img = { width: "100%", height: "auto", display: "block" };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap }}>
      {/* --- NEW first: WIDE rows --- */}
      <div style={rowStyle}>
        <div style={cell}><img style={img} src={`${process.env.PUBLIC_URL}/DSC04938.jpg`} alt="" /></div>
        <div style={cell}><img style={img} src={`${process.env.PUBLIC_URL}/DSC04975.jpg`} alt="" /></div>
        <div style={cell}><img style={img} src={`${process.env.PUBLIC_URL}/DSC05053.jpg`} alt="" /></div>
      </div>

      <div style={rowStyle}>
        <div style={cell}><img style={img} src={`${process.env.PUBLIC_URL}/DSC05999.jpg`} alt="" /></div>
        <div style={cell}><img style={img} src={`${process.env.PUBLIC_URL}/DSC06749.jpg`} alt="" /></div>
        <div style={cell}><img style={img} src={`${process.env.PUBLIC_URL}/DSC00288.jpg`} alt="" /></div>
      </div>

      {/* TALL row (all portrait) */}
      <div style={rowStyle}>
        <div style={cell}><img style={img} src={`${process.env.PUBLIC_URL}/DSC04585.jpg`} alt="" /></div>
        <div style={cell}><img style={img} src={`${process.env.PUBLIC_URL}/DSC04908-2.jpg`} alt="" /></div>
        <div style={cell}><img style={img} src={`${process.env.PUBLIC_URL}/DSC04273.jpg`} alt="" /></div>
      </div>

      {/* HERO: super wide */}
      <img style={img} src={`${process.env.PUBLIC_URL}/DSC09077.jpg`} alt="" />

      {/* HERO: the wide one you used full width before */}
      <img style={img} src={`${process.env.PUBLIC_URL}/DSC09248.jpg`} alt="" />

      {/* WIDE rows (originals) */}
      <div style={rowStyle}>
        <div style={cell}><img style={img} src={`${process.env.PUBLIC_URL}/DSC00410.jpg`} alt="" /></div>
        <div style={cell}><img style={img} src={`${process.env.PUBLIC_URL}/DSC00464.jpg`} alt="" /></div>
        <div style={cell}><img style={img} src={`${process.env.PUBLIC_URL}/DSC01662.jpg`} alt="" /></div>
      </div>

      <div style={rowStyle}>
        <div style={cell}><img style={img} src={`${process.env.PUBLIC_URL}/DSC03042.jpg`} alt="" /></div>
        <div style={cell}><img style={img} src={`${process.env.PUBLIC_URL}/DSC03940 copy.jpg`} alt="" /></div>
        <div style={imgCell(cell)}><img style={img} src={`${process.env.PUBLIC_URL}/DSC05089.jpg`} alt="" /></div>
      </div>

      {/* Special 1–2–1 row you had before: tall, wide (double), tall */}
      <div style={rowStyle}>
        <div style={cell}>
          <img
            style={{ ...img, objectFit: "cover", aspectRatio: "2 / 3" }}
            src={`${process.env.PUBLIC_URL}/DSC08484.jpg`}
            alt=""
          />
        </div>
        <div style={{ ...cell, flex: "2 1 0" }}>
          <img style={img} src={`${process.env.PUBLIC_URL}/DSC08142.jpg`} alt="" />
        </div>
        <div style={cell}>
          <img style={img} src={`${process.env.PUBLIC_URL}/DSC03352.jpg`} alt="" />
        </div>
      </div>

      {/* More WIDE rows */}
      <div style={rowStyle}>
        <div style={cell}><img style={img} src={`${process.env.PUBLIC_URL}/DSC06633.jpg`} alt="" /></div>
        <div style={cell}><img style={img} src={`${process.env.PUBLIC_URL}/DSC07714-2.jpg`} alt="" /></div>
        <div style={cell}><img style={img} src={`${process.env.PUBLIC_URL}/DSC08155.jpg`} alt="" /></div>
      </div>

      {/* Final row (2-across, both wide) */}
      <div style={rowStyle}>
        <div style={cell}><img style={img} src={`${process.env.PUBLIC_URL}/DSC08158.jpg`} alt="" /></div>
        <div style={cell}>
          {/* keep natural, or uncomment next line to crop this one as in your old code */}
          {/* <img style={{ ...img, objectFit: "cover", aspectRatio: "4 / 3" }} src={`${process.env.PUBLIC_URL}/DSC07136.jpg`} alt="" /> */}
          <img style={img} src={`${process.env.PUBLIC_URL}/DSC07136.jpg`} alt="" />
        </div>
      </div>
    </div>
  );
}

/* tiny helper so that future special cells can be customized if needed */
function imgCell(base) { return base; }

export default Stills;
