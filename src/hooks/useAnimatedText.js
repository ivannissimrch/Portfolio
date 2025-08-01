import { animate } from "framer-motion";
import { useEffect, useState } from "react";
const delimiter = "";

export default function useAnimatedText(text) {
  const [cursor, setCursor] = useState(0);
  const [startingCursor, setStartingCursor] = useState(0);
  const [prevText, setPrevText] = useState(text);

  if (prevText !== text) {
    setPrevText(text);
    setStartingCursor(text.startsWith(prevText) ? cursor : 0);
  }

  useEffect(() => {
    const controls = animate(startingCursor, text.split(delimiter).length, {
      duration: 1,
      ease: "easeOut",
      onUpdate(latest) {
        setCursor(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [startingCursor, text]);

  return text.split(delimiter).slice(0, cursor).join(delimiter);
}
