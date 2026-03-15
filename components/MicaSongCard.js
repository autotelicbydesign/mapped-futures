"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { MicaHeatmap } from "./MicaHeatmap";

const waveformPattern = [42, 68, 52, 74, 36, 58, 84, 46, 72, 54, 66, 38, 78, 49, 63, 44, 70, 56];

export function MicaSongCard({
  songLabel,
  songUrl,
  previewUrl,
}) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(30);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return undefined;
    }

    function handleLoadedMetadata() {
      setDuration(audio.duration || 30);
    }

    function handleTimeUpdate() {
      setCurrentTime(audio.currentTime || 0);
    }

    function handleEnded() {
      setIsPlaying(false);
      setCurrentTime(0);
      audio.currentTime = 0;
    }

    function handlePause() {
      setIsPlaying(false);
    }

    function handlePlay() {
      setIsPlaying(true);
    }

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("play", handlePlay);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("play", handlePlay);
    };
  }, []);

  const progress = useMemo(() => {
    if (!duration) {
      return 0;
    }

    return Math.max(0, Math.min(100, (currentTime / duration) * 100));
  }, [currentTime, duration]);

  async function playSong() {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    try {
      await audio.play();
    } catch {
      setIsPlaying(false);
    }
  }

  function pauseSong() {
    audioRef.current?.pause();
  }

  function stopSong() {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    audio.pause();
    audio.currentTime = 0;
    setCurrentTime(0);
    setIsPlaying(false);
  }

  function toggleSong() {
    if (isPlaying) {
      pauseSong();
      return;
    }

    playSong();
  }

  return (
    <div className="mica-image-card">
      <div className={`mica-image mica-song-surface${isPlaying ? " is-playing" : ""}`}>
        <audio ref={audioRef} preload="metadata" src={previewUrl} />

        <div className="mica-song-player">
          <div className="mica-song-player-top">
            <div className="mica-song-meta">
              <p className="mica-song-kicker">Mica is listening</p>
              <p className="mica-song-title">{songLabel}</p>
              <p className="mica-song-caption">30-second preview via Apple Music</p>
            </div>
          </div>

          <div className="mica-song-visuals" aria-hidden="true">
            <div className={`mica-song-wave${isPlaying ? " is-playing" : ""}`}>
              {waveformPattern.map((height, index) => (
                <span
                  key={`${height}-${index}`}
                  style={{
                    "--mica-wave-height": `${height}%`,
                    "--mica-wave-delay": `${index * 65}ms`,
                  }}
                />
              ))}
            </div>
            <div className="mica-song-progress">
              <span style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="mica-song-controls">
            <button
              type="button"
              className="mica-song-icon-button primary"
              onClick={toggleSong}
              aria-pressed={isPlaying}
              aria-label={isPlaying ? "Pause song preview" : "Play song preview"}
            >
              <span
                className={`mica-song-control-icon ${isPlaying ? "pause" : "play"}`}
                aria-hidden="true"
              />
            </button>
            <button
              type="button"
              className="mica-song-icon-button ghost"
              onClick={stopSong}
              aria-label="Stop song preview"
            >
              <span className="mica-song-control-icon stop" aria-hidden="true" />
            </button>
            <a
              href={songUrl}
              className="mica-song-link"
              target="_blank"
              rel="noreferrer"
            >
              Open track
            </a>
          </div>
        </div>

        <MicaHeatmap className="hero-heatmap" colorBack="#1538a7" />
      </div>
    </div>
  );
}
