"use client";
import Image from "next/image";
import { useState } from "react";
// import PauseIcon from "@/public/assets/icons/fi_pause-circle.svg";
// import PlayIcon from "@/public/assets/icons/fi_play-circle.svg";

interface MarqueeImageScrollerProps {
  images: { id: string; filename: string; alt: string }[];
  speed?: number; // Add optional speed prop (default will be handled in the component)
}

const MarqueeImageScroller = ({
  images,
  speed = 50,
}: MarqueeImageScrollerProps) => {
  const [isPaused, setIsPaused] = useState(false);

  const marqueeStyle = {
    animation: `scroll ${speed}s linear infinite`, // Use the speed prop
    animationPlayState: isPaused ? "paused" : "running",
  };

  const togglePause = () => setIsPaused((prev) => !prev);

  return (
    <div
      aria-label="Scrolling image gallery"
      className="w-full overflow-hidden"
    >
      <div className="flex flex-col items-end gap-2 md:flex-row md:items-center md:gap-6 relative  before:content-[''] before:absolute before:top-0 before:left-0 before:w-[100px] before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:z-10 after:content-[''] after:absolute after:top-0 after:right-0 after:w-[100px] after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:z-10">
        <div
          className="relative flex w-full select-none overflow-hidden"
          role="region"
          aria-live="polite"
          aria-label={isPaused ? "Paused scrolling" : "Active scrolling"}
        >
          <ul
            className="marquee__content m-0 flex  min-w-[709px] flex-shrink-0 justify-around p-0 md:min-w-full"
            style={marqueeStyle}
          >
            {images.map((image, index) => (
              <li
                key={`${image.id}-${index}`}
                className="flex max-w-72 grow items-center justify-center px-4"
              >
                <Image
                  src={image.filename}
                  alt={image.alt || ""}
                  width={300}
                  height={144}
                  className="h-[144px] object-contain"
                />
              </li>
            ))}
          </ul>

          <ul
            className="marquee__content m-0 flex min-w-[709px] flex-shrink-0 justify-around p-0 md:min-w-full"
            aria-hidden="true"
            style={marqueeStyle}
          >
            {images.map((image, index) => (
              <li
                key={`${image.id}-duplicate-${index}`}
                className="flex max-w-72 grow items-center justify-center px-4"
              >
                <Image
                  src={image.filename}
                  alt={image.alt || ""}
                  width={300}
                  height={144}
                  className="h-[144px] object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
        {/* <button
          className="md:absolute md:right-0 md:p-4 flex cursor-pointer items-center bg-white p-2"
          onClick={togglePause}
          aria-pressed={isPaused}
          aria-label={isPaused ? "Resume scrolling" : "Pause scrolling"}
        >
          {isPaused ? (
            <PlayIcon alt="" className="h-12 w-12" />
          ) : (
            <PauseIcon alt="" className="h-12 w-12" />
          )}
          <span className="sr-only">{isPaused ? "Resume" : "Pause"}</span>
        </button> */}
      </div>
    </div>
  );
};

export default MarqueeImageScroller;
