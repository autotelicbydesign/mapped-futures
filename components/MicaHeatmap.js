"use client";

import dynamic from "next/dynamic";

const HeatmapShader = dynamic(
  () => import("@paper-design/shaders-react").then((mod) => mod.Heatmap),
  { ssr: false }
);

const heatmapColors = [
  "#11206a",
  "#1f3ba2",
  "#2f63e7",
  "#6bd7ff",
  "#ffe679",
  "#ff991e",
  "#ff4c00",
];

export function MicaHeatmap({
  className = "",
  colorBack = "#122a8d",
}) {
  return (
    <HeatmapShader
      className={["mica-heatmap", className].filter(Boolean).join(" ")}
      width="100%"
      height="100%"
      image="/mica-heatmap-shape.svg"
      fit="contain"
      scale={0.75}
      speed={1}
      contour={0.5}
      angle={0}
      noise={0}
      innerGlow={0.5}
      outerGlow={0.5}
      colorBack={colorBack}
      colors={heatmapColors}
      aria-hidden="true"
    />
  );
}
