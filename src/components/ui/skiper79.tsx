import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

type Person = { name: string; role: string; src: string };

const PEOPLE: Person[] = Array.from({ length: 17 }).map((_, i) => ({
  src: `https://skiper-ui.com/images/oct25Coll/portraits/p_${i + 1}.png`,
  name: [
    "Alex Johnson","Sarah Chen","Marcus Rivera","Emily Watson","David Kim",
    "Lisa Thompson","James Wilson","Rachel Green","Michael Brown","Anna Davis",
    "Tom Anderson","Sophie Lee","Chris Taylor","Maya Patel","Ryan O'Connor",
    "Zoe Martinez","Jordan Smith",
  ][i],
  role: [
    "CEO & Founder","CTO","Lead Designer","Product Manager","Senior Developer",
    "Marketing Director","UX Researcher","Data Scientist","DevOps Engineer",
    "Content Strategist","Sales Manager","QA Lead","Backend Developer",
    "Frontend Developer","Mobile Developer","Design Systems","Product Analyst",
  ][i],
}));

const Tile = ({
  person,
  progress,
  start,
  end,
  fromScale = 0.4,
}: {
  person: Person;
  progress: MotionValue<number>;
  start: number;
  end: number;
  fromScale?: number;
}) => {
  const scale = useTransform(progress, [start, end], [fromScale, 1]);
  const opacity = useTransform(progress, [start, Math.min(end, start + 0.15)], [0, 1]);

  return (
    <motion.figure
      style={{ scale, opacity }}
      className="relative overflow-hidden rounded-xl bg-neutral-900 aspect-[3/4] group"
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

export const Skiper79 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Cols pattern across rows for variation
  const cols = ["grid-cols-2", "grid-cols-3", "grid-cols-4", "grid-cols-3", "grid-cols-5"];

  // Distribute people into rows
  const rows: Person[][] = [];
  let i = 0;
  const sizes = [2, 3, 4, 3, 5];
  sizes.forEach((s) => {
    rows.push(PEOPLE.slice(i, i + s));
    i += s;
  });

  return (
    <section ref={ref} className="relative bg-black text-white py-24 md:py-32 px-4 md:px-8 overflow-hidden">
      <div className="sticky top-1/3 z-10 pointer-events-none text-center mb-12">
        <h2
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight"
          style={{ mixBlendMode: "exclusion", color: "#fff" }}
        >
          Speakers
        </h2>
        <p className="mt-3 text-xs sm:text-sm uppercase tracking-[0.3em] text-white/60">
          Oct 22, 2025
        </p>
      </div>

      <div className="relative z-0 max-w-7xl mx-auto flex flex-col gap-4 md:gap-6">
        {rows.map((row, r) => {
          const rowStart = r / rows.length;
          const rowEnd = (r + 1) / rows.length;
          return (
            <div key={r} className={`grid gap-4 md:gap-6 ${cols[r % cols.length]}`}>
              {row.map((p, c) => {
                const localStart = rowStart + (c / row.length) * (rowEnd - rowStart) * 0.6;
                const localEnd = localStart + 0.25;
                return (
                  <Tile
                    key={p.name}
                    person={p}
                    progress={scrollYProgress}
                    start={localStart}
                    end={localEnd}
                    fromScale={0.3 + (c % 3) * 0.1}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skiper79;
