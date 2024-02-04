import { useAudio, useWindowSize } from "@/hooks";
import { AUDIO_URL, CONVEY_MESSAGE } from "@/utils";
import Image from "next/image";
import { useState } from "react";
import Confetti from "react-confetti";

export const Valentine = () => {
  const [buttonCount, setButtonCount] = useState({
    noBtnCount: 0,
    yesButtonCount: 0,
  });
  const { width, height } = useWindowSize();
  const { playing, togglePlayback } = useAudio(AUDIO_URL);

  const handleNoBtnCount = () => {
    setButtonCount((prev) => ({ ...prev, noBtnCount: prev.noBtnCount + 1 }));
  };

  const handleYesButtonCount = () => {
    setButtonCount((prev) => ({ ...prev, yesButtonCount: 1 }));
    togglePlayback();
  };

  const isChosen = buttonCount.yesButtonCount > 0;

  const RenderText = () => {
    if (isChosen) return "Hurray, can't wait to see you! Ping me, please! 🎉";
    if (buttonCount.noBtnCount >= CONVEY_MESSAGE.length) return "Let's go 🥳";
    return CONVEY_MESSAGE[buttonCount.noBtnCount];
  };

  return (
    <section
      className={`w-full h-full flex flex-col justify-center items-center text-center transition-all`}
    >
      {isChosen && <Confetti width={width} height={height} />}
      {isChosen && (
        <button
          className={`fixed top-2 right-2 text-xl p-2 border border-gray-400 rounded-md ${
            !playing && "line-through"
          }`}
          title={playing ? "stop" : "play"}
          onClick={togglePlayback}
        >
          &#127925;
        </button>
      )}
      {!isChosen && (
        <h1 className="text-2xl mb-5">Would you be my Valentine?</h1>
      )}
      <p className="text-red-600 text-center text-xl font-bold tracking-wider leading-6 mb-5">
        <RenderText />
      </p>
      <div className={`globe ${isChosen ? "active" : ""}`}>
        <span className="drop-shadow-sm">Yayyyyy 🤩</span>
      </div>
      <Image
        src="https://res.cloudinary.com/randomwave45/image/upload/v1706987299/tenor_srrarh.gif"
        width="350"
        height="350"
        alt="cheek pinch gif"
        className={`${isChosen ? "inline-block" : "hidden"}`}
      />

      {!isChosen && (
        <div className="flex gap-2 items-center flex-wrap justify-center">
          <button
            className="px-4 py-2 bg-green-500 rounded select-none"
            onClick={handleYesButtonCount}
            style={{
              padding: `${0.5 * (buttonCount.noBtnCount + 1)}rem ${
                1 * (buttonCount.noBtnCount + 1)
              }rem`,
            }}
          >
            Yes
          </button>
          <button
            className="px-4 py-2 bg-red-300 rounded select-none"
            onClick={handleNoBtnCount}
          >
            No
          </button>
        </div>
      )}
    </section>
  );
};
