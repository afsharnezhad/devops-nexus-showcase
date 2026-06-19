import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface WordsPullUpProps {
  text: string;
  className?: string;
  wordClassName?: string;
  showAsterisk?: boolean;
  delay?: number;
}

export const WordsPullUp = ({
  text,
  className = "",
  wordClassName = "",
  showAsterisk = false,
  delay = 0,
}: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <div key={i} className="overflow-hidden inline-block">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: delay + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`inline-block relative ${wordClassName}`}
              style={{ marginInlineEnd: "0.25em" }}
            >
              {word}
              {showAsterisk && isLast && (
                <span
                  className="absolute"
                  style={{
                    top: "0.65em",
                    insetInlineEnd: "-0.3em",
                    fontSize: "0.31em",
                  }}
                >
                  *
                </span>
              )}
            </motion.span>
          </div>
        );
      })}
    </div>
  );
};

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  delay?: number;
}

export const WordsPullUpMultiStyle = ({
  segments,
  className = "",
  delay = 0,
}: WordsPullUpMultiStyleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const allWords = segments.flatMap((s) =>
    s.text.split(" ").map((w) => ({ word: w, className: s.className || "" }))
  );

  return (
    <div
      ref={ref}
      className={`inline-flex flex-wrap justify-center ${className}`}
    >
      {allWords.map((item, i) => (
        <div key={i} className="overflow-hidden inline-block">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`inline-block ${item.className}`}
            style={{ marginInlineEnd: "0.25em" }}
          >
            {item.word}
          </motion.span>
        </div>
      ))}
    </div>
  );
};
