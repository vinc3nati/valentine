import { useWindowSize } from "@/hooks";
import { CONVEY_MESSAGE } from "@/utils";
import { useState } from "react";
import Confetti from "react-confetti";

export const Valentine = () => {
  const initialValue = {
    noBtnCount: 0,
    yesButtonCount: 0,
  };
  const [buttonCount, setButtonCount] = useState(initialValue);
  const { width, height } = useWindowSize();

  const handleNoBtnCount = () => {
    setButtonCount((prev) => ({ ...prev, noBtnCount: prev.noBtnCount + 1 }));
  };

  const handleYesButtonCount = () => {
    setButtonCount((prev) => ({ ...prev, yesButtonCount: 1 }));
  };

  const isChosen = buttonCount.yesButtonCount > 0;

  const RenderText = () => {
    if (isChosen) return "Hurray, can't wait to see you! Ping me, please! 🎉";
    if (buttonCount.noBtnCount >= CONVEY_MESSAGE.length) return "Let's go 🥳";

    return CONVEY_MESSAGE[buttonCount.noBtnCount];
  };

  return (
    <section
      className={`w-full h-full flex flex-col justify-center items-center text-center`}
    >
      {isChosen && <Confetti width={width} height={height} />}
      <h1 className="text-2xl">Would You be my Valentine ?</h1>
      <p className="text-red-600 text-center text-xl font-bold tracking-wider leading-6 my-5">
        <RenderText />
      </p>

      <div className={`globe ${isChosen ? "active" : ""}`}>
        <span className="drop-shadow-sm">Thank You for choosing me!</span>
      </div>

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
