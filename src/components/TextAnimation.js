"use client";

import { animate, AnimatePresence, motion } from "framer-motion";
export default function TextAnimation({ text }) {
  const rotateValue = Math.floor(Math.random() * 201) - 100;
  const first = text.split("").indexOf("A");
  return (
    <AnimatePresence>
      <h1 id="title" className="ff-sans-normal hero-title">
        {text.split("").map((letter, index) => {
          const textBlue =
            index >= 24 && index < text.split("").length ? "text-blue" : "";
          return (
            <motion.span
              initial={{ opacity: 0, y: 100, rotate: rotateValue }}
              animate={{ opacity: 1, y: 0, rotate: 0 }} //
              exit={{
                opacity: 0,
                y: 100,
                transition: {
                  duration: 0.4,
                },
                rotate: rotateValue,
              }}
              transition={{
                duration: 0.2,
                ease: "easeIn",
                delay: index * 0.05,
              }}
              key={index}
              className={
                letter !== "\n"
                  ? `inline-block mr-0.5 ${textBlue}`
                  : `inline  ${textBlue}`
              }
            >
              {letter}
            </motion.span>
          );
        })}
      </h1>
    </AnimatePresence>
  );
}
