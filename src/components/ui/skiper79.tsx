import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import ehsan1 from "@/assets/ehsan-1.jpg.asset.json";
import ehsan2 from "@/assets/ehsan-2.jpg.asset.json";
import ehsan3 from "@/assets/ehsan-3.jpg.asset.json";
import ehsan4 from "@/assets/ehsan-4.jpg.asset.json";
import ehsan5 from "@/assets/ehsan-5.jpg.asset.json";

export type Person = { name: string; role: string; src: string };

const DEFAULT_PEOPLE: Person[] = [
  { name: "Ehsan", role: "DevOps Engineer", src: ehsan1.url },
  { name: "Ehsan", role: "Cloud Architect", src: ehsan2.url },
  { name: "Ehsan", role: "Infrastructure", src: ehsan5.url },
  { name: "Ehsan", role: "Automation", src: ehsan3.url },
  { name: "Ehsan", role: "Platform", src: ehsan4.url },
];

const Tile = ({
  person,
  progress,
  start,
  end,
  fromScale = 0.4,
  className = "",
}: {
  person: Person;
  progress: MotionValue<number>;
  start: number;
  end: number;
  fromScale?: number;
  className?: string;
}) => {
  const scale = useTransform(progress, [start, end], [fromScale, 1]);
  const opacity = useTransform(progress, [start, Math.min(end, start + 0.15)], [0, 1]);

  return (
    <motion.figure
      style={{ scale, opacity }}
      className={`relative overflow-hidden rounded-xl bg-neutral-900 group ${className}`}
    >
      <img
        src={person.src}
        alt={person.name}
        loading="lazy"
        className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
      />
      <figcaption className="absolute inset-x-0 bottom-0 p-3 text-[11px] sm:text-xs text-white/90 bg-gradient-to-t from-black/70 to-transparent">
        <div className="font-medium">{person.name}</div>
        <div className="opacity-70">({person.role})</div>
      </figcaption>
    </motion.figure>
  );
};

export const Skiper79 = ({
  people = DEFAULT_PEOPLE,
  heading,
  subheading,
}: {
  people?: Person[];
  heading?: React.ReactNode;
  subheading?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const list = people.slice(0, 5);

  // Asymmetric bento layout for up to 5 tiles
  const layouts = [
    "col-span-2 row-span-2 aspect-square",
    "col-span-1 row-span-1 aspect-[3/4]",
    "col-span-1 row-span-1 aspect-[3/4]",
    "col-span-1 row-span-1 aspect-[3/4]",
    "col-span-1 row-span-1 aspect-[3/4]",
  ];

  return (
    <section ref={ref} className="relative bg-black text-white py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      {(heading || subheading) && (
        <div className="sticky top-1/3 z-10 pointer-events-none text-center mb-12">
          {heading && (
            <h2
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight"
              style={{ mixBlendMode: "exclusion", color: "#fff" }}
            >
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="mt-3 text-xs sm:text-sm uppercase tracking-[0.3em] text-white/60">
              {subheading}
            </p>
          )}
        </div>
      )}

      <div className="relative z-0 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[200px] gap-3 md:gap-4">
        {list.map((p, i) => {
          const start = (i / list.length) * 0.6;
          const end = start + 0.25;
          return (
            <Tile
              key={i}
              person={p}
              progress={scrollYProgress}
              start={start}
              end={end}
              fromScale={0.3 + (i % 3) * 0.1}
              className={layouts[i]}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Skiper79;
