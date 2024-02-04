import { useAudio, useWindowSize } from "@/hooks";
import { AUDIO_URL, CONVEY_MESSAGE } from "@/utils";
import Image from "next/image";
import { useState } from "react";
import Confetti from "react-confetti";

const PlayButton = ({
  playing,
  togglePlayback,
}: {
  playing: boolean;
  togglePlayback: () => void;
}) => (
  <button
    className={`fixed top-2 right-2 text-xl p-2 border border-gray-400 rounded-md ${
      !playing && "line-through"
    }`}
    title={playing ? "stop" : "play"}
    onClick={togglePlayback}
  >
    &#127925;
  </button>
);

const Question = () => (
  <h1 className="text-2xl mb-5">Would you be my Valentine?</h1>
);

const ResponseText = ({
  isChosen,
  noBtnCount,
}: {
  isChosen: boolean;
  noBtnCount: number;
}) => {
  const getText = () => {
    if (isChosen) return "Hurray, can't wait to see you! Ping me, please! 🎉";
    if (noBtnCount >= CONVEY_MESSAGE.length) return "Let's go 🥳";
    return CONVEY_MESSAGE[noBtnCount];
  };

  return (
    <p className="text-red-600 text-center text-xl font-bold tracking-wider leading-6 mb-5">
      {getText()}
    </p>
  );
};

const Valentine = () => {
  const [buttonCount, setButtonCount] = useState({
    noBtnCount: 0,
    yesButtonCount: 0,
  });
  const { width, height } = useWindowSize();
  const { playing, togglePlayback } = useAudio(AUDIO_URL);

  const incrementNoBtnCount = () =>
    setButtonCount((prev) => ({ ...prev, noBtnCount: prev.noBtnCount + 1 }));
  const setYesButtonCount = () => {
    setButtonCount((prev) => ({ ...prev, yesButtonCount: 1 }));
    togglePlayback();
  };

  const isChosen = buttonCount.yesButtonCount > 0;

  return (
    <section className="w-full h-full flex flex-col justify-center pt-4 md:pt-0 items-center text-center transition-all">
      {isChosen && <Confetti width={width} height={height} />}
      {isChosen && (
        <PlayButton playing={playing} togglePlayback={togglePlayback} />
      )}
      {!isChosen && <Question />}
      <ResponseText isChosen={isChosen} noBtnCount={buttonCount.noBtnCount} />
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
            onClick={setYesButtonCount}
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
            onClick={incrementNoBtnCount}
          >
            No
          </button>
        </div>
      )}
    </section>
  );
};

export default Valentine;
