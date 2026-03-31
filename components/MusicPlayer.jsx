"use client";

import { useState, useEffect, useRef } from "react";

const TRACKS = [
  { src: "/music/space_cadet.mp3", title: "Space Cadet", artist: "The Technicolors" },
  { src: "/music/feels_like_summer.mp3", title: "Feels like Summer", artist: "Childish Gambino" },
  { src: "/music/help_herself.mp3", title: "Help Herself", artist: "bbno$" },
  { src: "/music/me_and_your_mama.mp3", title: "Me and your Mama", artist: "Childish Gambino" },
  { src: "/music/dracula.mp3", title: "Dracula", artist: "Tame Impala" },
  { src: "/music/tailwhip.mp3", title: "Tailwhip", artist: "Men I Trust" },
];

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function MusicPlayer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);
  const hasInitialized = useRef(false);

  const track = TRACKS[currentIndex];

  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    const randomIndex = getRandom(0, TRACKS.length - 1);
    setCurrentIndex(randomIndex);

    const audio = audioRef.current;
    if (!audio) return;
    audio.src = TRACKS[randomIndex].src;
    audio.load();
    audio.volume = 0.1;

    audio.play().then(() => setIsPlaying(true)).catch(() => {});
  }, []);

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    setProgress(audio.currentTime / audio.duration);
  };

  const handleEnded = () => {
    setCurrentIndex((i) => (i + 1) % TRACKS.length);
  };

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
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * audio.duration;
    setProgress(ratio);
  };

  return (
    <>
      <div className="z-[9999] select-none pointer-events-auto flex items-center justify-center gap-3 sm:gap-5 px-4 sm:px-7 pt-3 sm:pt-4 pb-0">

        {/* left mushroom */}
        <div className="w-7 h-7 sm:w-11 sm:h-11 shrink-0 flex items-center justify-center opacity-85">
          <MushroomPlaceholder />
        </div>

        {/* center */}
        <div className="flex flex-col items-center gap-2 min-w-0">

          {/* track title */}
          <span className="text-[11px] sm:text-[15px] font-normal tracking-widest text-white/90 whitespace-nowrap overflow-hidden text-ellipsis max-w-[180px] sm:max-w-[420px]">
            {track.artist} — {track.title}
          </span>

          {/* progress bar */}
          <div className="w-[180px] sm:w-[420px]">
            <div
              className="w-full h-[5px] bg-white/15 rounded-full cursor-pointer"
              onClick={handleSeek}
            >
              <div
                className="h-full rounded-full bg-white/90 pointer-events-none"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </div>

          {/* controls */}
          <div className="flex items-center gap-4 sm:gap-5 mt-0.5">
            <button onClick={handlePrev} aria-label="Previous"
              className="bg-transparent border-none p-0 cursor-pointer flex items-center hover:scale-110 active:scale-95 transition-transform duration-100">
              <RewindIcon />
            </button>

            <button onClick={handlePlayPause} aria-label={isPlaying ? "Pause" : "Play"}
              className="bg-transparent border-none p-0 cursor-pointer flex items-center justify-center w-6 h-6 text-white hover:scale-110 active:scale-95 transition-transform duration-100">
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>

            <button onClick={handleNext} aria-label="Next"
              className="bg-transparent border-none p-0 cursor-pointer flex items-center hover:scale-110 active:scale-95 transition-transform duration-100">
              <FastForwardIcon />
            </button>
          </div>
        </div>

        {/* right mushroom */}
        <div className="w-7 h-7 sm:w-11 sm:h-11 shrink-0 flex items-center justify-center opacity-85">
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

function MushroomPlaceholder() {
  return <img src="/icons/mushroom.svg" alt="mushroom" width={36} height={36} />;
}
function PlayIcon() {
  return <img src="/icons/play.svg" alt="play" width={36} height={36} />;
}
function PauseIcon() {
  return <img src="/icons/resume.svg" alt="pause" width={36} height={36} />;
}
function RewindIcon() {
  return <img src="/icons/playback.svg" alt="previous" width={23} height={23} />;
}
function FastForwardIcon() {
  return <img src="/icons/playnext.svg" alt="next" width={23} height={23} />;
}