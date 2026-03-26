"use client";

import { useState, useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// 🎵 EDIT YOUR TRACKS HERE
// Drop your .mp3 files in /public/music/ and update the src + metadata below
// ─────────────────────────────────────────────────────────────────────────────
const TRACKS = [
    { src: "/music/space_cadet.mp3", title: "Space Cadet", artist: "The Technicolors" },
    { src: "/music/feels_like_summer.mp3", title: "Feels like Summer", artist: "Childish Gambino" },
    { src: "/music/help_herself.mp3", title: "Help Herself", artist: "bbno$" },
    { src: "/music/me_and_your_mama.mp3", title: "Me and your Mama", artist: "Childish Gambino" },
    { src: "/music/dracula.mp3", title: "Dracula", artist: "Tame Impala" },
  { src: "/music/tailwhip.mp3", title: "Tailwhip", artist: "Men I Trust" },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function MusicPlayer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying]       = useState(false);
  const [progress, setProgress]         = useState(0); // 0–1
  const audioRef = useRef(null);

  const track = TRACKS[currentIndex];

  // ── swap src whenever track changes ────────────────────────────────────────
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = track.src;
    audio.load();
    audio.volume = 0.1;
    setProgress(0);
    if (isPlaying) audio.play().catch(() => {});
  }, [currentIndex]);

  // ── audio event handlers ───────────────────────────────────────────────────
  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    setProgress(audio.currentTime / audio.duration);
  };

  const handleEnded = () => {
    setCurrentIndex((i) => (i + 1) % TRACKS.length);
  };

  // ── controls ───────────────────────────────────────────────────────────────
  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handlePrev = () => {
    setIsPlaying(true);
    setCurrentIndex((i) => (i - 1 + TRACKS.length) % TRACKS.length);
  };

  const handleNext = () => {
    setIsPlaying(true);
    setCurrentIndex((i) => (i + 1) % TRACKS.length);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect  = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * audio.duration;
    setProgress(ratio);
  };

  return (
    <>
      <style>{`

        .mp-root {
          font-family: 'Trispace', monospace;
          top: 0; left: 0; right: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          padding: 14px 28px;
          padding-bottom: 0;
          user-select: none;
        }

        .mp-icon {
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.85;
        }

        .mp-center {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          min-width: 0;
        }

        .mp-title {
          font-size: 15px;
          font-weight: 400;
          letter-spacing: 0.08em;
          color: #e8e8e8;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
        }

        .mp-bar-wrap {
          width: 100%;
          max-width: 420px;
        }

        .mp-bar-track {
          width: 100%;
          height: 5px;
          background: rgba(255,255,255,0.15);
          border-radius: 3px;
          cursor: pointer;
          position: relative;
        }

        .mp-bar-fill {
          height: 100%;
          border-radius: 3px;
          background: #e8e8e8;
          pointer-events: none;
        }

        .mp-controls {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 2px;
        }

        .mp-btn {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: color 0.15s, transform 0.1s;
        }
        .mp-btn:hover  { color: #fff; transform: scale(1.15); }
        .mp-btn:active { transform: scale(0.95); }

        .mp-btn-play {
          width: 23px;
          height: 23px;
          border-radius: 50%;
          color: #fff;
          justify-content: center;
        }
        .mp-btn-play:hover { transform: scale(1.1); }
      `}</style>

      <div className="mp-root">

        {/* ── LEFT ICON — replace with your mushroom image ── */}
        <div className="mp-icon">
          <MushroomPlaceholder />
        </div>

        <div className="mp-center">
          <span className="mp-title">
            {track.artist} — {track.title}
          </span>

          <div className="mp-bar-wrap">
            <div className="mp-bar-track" onClick={handleSeek}>
              <div className="mp-bar-fill" style={{ width: `${progress * 100}%` }} />
            </div>
          </div>

          <div className="mp-controls">
            <button className="mp-btn" onClick={handlePrev} aria-label="Previous">
              <RewindIcon />
            </button>
            <button className="mp-btn mp-btn-play" onClick={handlePlayPause} aria-label={isPlaying ? "Pause" : "Play"}>
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
            <button className="mp-btn" onClick={handleNext} aria-label="Next">
              <FastForwardIcon />
            </button>
          </div>
        </div>

        {/* ── RIGHT ICON — replace with your mushroom image ── */}
        <div className="mp-icon">
          <MushroomPlaceholder />
        </div>
      </div>

      <audio
        ref={audioRef}
        src={track.src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </>
  );
}

// ─── Placeholder icons ────────────────────────────────────────────────────────
// REPLACE each with: <img src="/icons/your-icon.png" alt="" width={36} height={36} />

function MushroomPlaceholder() {
  return (
    <img src="/mushroom.svg" alt="mushroom" width={36} height={36} />
  );
}

function PlayIcon() {
   return (
    <img src="/play.svg" alt="mushroom" width={36} height={36} />
  );
}

function PauseIcon() {
   return (
    <img src="/resume.svg" alt="mushroom" width={36} height={36} />
  );
}

function RewindIcon() {
   return (
    <img src="/playback.svg" alt="mushroom" width={23} height={23} />
  );
}

function FastForwardIcon() {
   return (
    <img src="/playnext.svg" alt="mushroom" width={23} height={23} />
  );
}