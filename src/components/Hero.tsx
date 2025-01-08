import { useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totoalVideos = 4;
  const nextVideoRef = useRef(null);
  const upccomingVideoIndex = (currentIndex % totoalVideos) + 1;

  const handleVideoLoaded = () => {
    setLoadedVideos((prev) => prev + 1);
  };
  const handleMiniVideoClick = () => {
    setHasClicked(true);
    setCurrentIndex(upccomingVideoIndex);
  };
  const getVideoSrc = (index: number) => {
    return `/videos/hero-${index}.mp4`;
  };

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="vide-frame"
        className="relative z-10 w-screen h-dvh overflow-hidden rounded-lg blue75
      "
      >
        <div>
          <div className="mask-clip-path absolute absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            {/* HOVER VIDEO  */}
            <div
              onClick={handleMiniVideoClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                src={getVideoSrc(currentIndex)}
                ref={nextVideoRef}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoaded}
              />
            </div>
          </div>
          {/* PRIMARY VIDEO BACKGROUND */}
          <video
            src={getVideoSrc(currentIndex)}
            ref={nextVideoRef}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoaded}
          />

          <video
            src={getVideoSrc(
              currentIndex === totoalVideos - 1 ? 1 : currentIndex
            )}
            // autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoaded}
          />
        </div>
        {/* CALL TO ACTION */}
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>a</b>ming
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10 ">
            <h1 className="special-font hero-heading text-blue-100">
              redefi <b>n</b>e
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame layer
              <br />
              Unleash the Play Economy
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              className="bg-white text-black px-5 py-2 rounded-lg"
            >
              Hello
            </Button>
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-black">
        G<b>a</b>ming
      </h1>
    </div>
  );
};
export default Hero;
