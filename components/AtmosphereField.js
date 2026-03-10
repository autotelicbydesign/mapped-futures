"use client";

import { useEffect } from "react";

const DEFAULTS = {
  x: 18,
  y: 18,
  xPrimary: 15,
  yPrimary: 16,
  xSecondary: 84,
  ySecondary: 14,
  shiftX: 0,
  shiftY: 0,
};

function applyAtmosphere(root, values) {
  root.style.setProperty("--pointer-x", `${values.x.toFixed(2)}%`);
  root.style.setProperty("--pointer-y", `${values.y.toFixed(2)}%`);
  root.style.setProperty("--pointer-x-primary", `${values.xPrimary.toFixed(2)}%`);
  root.style.setProperty("--pointer-y-primary", `${values.yPrimary.toFixed(2)}%`);
  root.style.setProperty("--pointer-x-secondary", `${values.xSecondary.toFixed(2)}%`);
  root.style.setProperty("--pointer-y-secondary", `${values.ySecondary.toFixed(2)}%`);
  root.style.setProperty("--pointer-shift-x", `${values.shiftX.toFixed(2)}px`);
  root.style.setProperty("--pointer-shift-y", `${values.shiftY.toFixed(2)}px`);
}

export function AtmosphereField() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");

    applyAtmosphere(root, DEFAULTS);

    if (reducedMotion.matches || !finePointer.matches) {
      return undefined;
    }

    let frameId = null;
    let latestValues = DEFAULTS;

    function commit() {
      frameId = null;
      applyAtmosphere(root, latestValues);
    }

    function queue(values) {
      latestValues = values;

      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(commit);
    }

    function handlePointerMove(event) {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;

      queue({
        x: 10 + x * 0.82,
        y: 8 + y * 0.76,
        xPrimary: 8 + x * 0.68,
        yPrimary: 10 + y * 0.6,
        xSecondary: 88 - x * 0.22,
        ySecondary: 12 + y * 0.16,
        shiftX: ((x - 50) / 50) * 22,
        shiftY: ((y - 50) / 50) * 18,
      });
    }

    function reset() {
      queue(DEFAULTS);
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("blur", reset);
    document.addEventListener("mouseleave", reset);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", reset);
      document.removeEventListener("mouseleave", reset);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      applyAtmosphere(root, DEFAULTS);
    };
  }, []);

  return null;
}
