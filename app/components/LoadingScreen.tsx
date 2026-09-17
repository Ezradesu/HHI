"use client";

import { useEffect, useState } from "react";

const brandNames = ["Hidayat,", "Hendiry", "&", "Indrawan"];

const assets = [
  "/hero-video/video_sebuah_kelompok_orang_se.mp4",
  "/logo/sinarmas.png",
  "/logo/pertamina.png",
  "/logo/indika.png",
  "/logo/astra.png",
  "/logo/ocbc.png",
  "/logo/ciputra.png",
  "/service/service holder.png",
];

function wait(duration: number) {
  return new Promise<void>((resolve) => window.setTimeout(resolve, duration));
}

function preloadAsset(src: string) {
  if (src.endsWith(".mp4")) {
    return new Promise<void>((resolve) => {
      const video = document.createElement("video");
      const finish = () => {
        video.onloadeddata = null;
        video.onerror = null;
        resolve();
      };

      video.preload = "metadata";
      video.onloadeddata = finish;
      video.onerror = finish;
      video.src = src;
      video.load();
    });
  }

  return new Promise<void>((resolve) => {
    const image = new window.Image();
    image.onload = () => resolve();
    image.onerror = () => resolve();
    image.src = src;
  });
}

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "welcome" | "exiting">(
    "loading",
  );
  const [isVisible, setIsVisible] = useState(true);
  const [namesVisible, setNamesVisible] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const startedAt = performance.now();

    const updateProgress = (loaded: number) => {
      if (!cancelled) {
        setProgress(Math.min(94, Math.round((loaded / assets.length) * 94)));
      }
    };

    const loadEverything = async () => {
      setNamesVisible(true);

      let loaded = 0;
      await Promise.all(
        assets.map(async (asset) => {
          await preloadAsset(asset);
          loaded += 1;
          updateProgress(loaded);
        }),
      );

      await document.fonts.ready;

      const remainingTime = Math.max(0, 1500 - (performance.now() - startedAt));
      await wait(remainingTime);

      if (cancelled) return;

      setProgress(100);
      setPhase("welcome");
      await wait(850);

      if (cancelled) return;

      setPhase("exiting");
      await wait(1050);

      if (!cancelled) setIsVisible(false);
    };

    void loadEverything();

    return () => {
      cancelled = true;
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      aria-label="Loading Hidayat, Hendiry & Indrawan"
      aria-live="polite"
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={progress}
      role="progressbar"
      className={`fixed inset-0 z-[100] flex min-h-dvh items-center justify-center bg-[#cd0303] px-6 text-[#fff5f5] transition-transform duration-[1050ms] ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none ${phase === "exiting" ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="w-full max-w-[1218px]">
        <div className="flex flex-wrap gap-x-4 gap-y-1 overflow-hidden text-[clamp(42px,8vw,112px)] font-normal leading-[0.9] tracking-[-0.045em]">
          {brandNames.map((name, index) => (
            <span
              key={name}
              className={`inline-block transition-[transform,opacity] duration-700 ease-out motion-reduce:transition-none ${namesVisible ? "translate-y-0 opacity-100" : "translate-y-[110%] opacity-0"}`}
              style={{ transitionDelay: `${index * 110}ms` }}
            >
              {name}
            </span>
          ))}
        </div>

        <div className="mt-16 max-w-[520px] max-md:mt-12">
          <p
            className={`text-[clamp(28px,4vw,52px)] font-light leading-none transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none ${phase === "welcome" || phase === "exiting" ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
          >
            Welcome
          </p>
          <div className="mt-8 h-[2px] w-full bg-white/30">
            <div
              className="h-full bg-[#fff5f5] transition-[width] duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 flex justify-between text-[14px] font-medium uppercase tracking-[0.12em] text-white/75">
            <span>Preparing your counsel</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
