import { ReactNode } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

interface SectionGlowProps {
  children: ReactNode;
  className?: string;
  rounded?: string;
}

/**
 * Wraps a section with the animated glowing border effect
 * used on the Clients cards, applied to the whole section edge.
 */
const SectionGlow = ({ children, className, rounded = "rounded-2xl" }: SectionGlowProps) => {
  return (
    <div className={cn("relative", rounded, className)}>
      <GlowingEffect
        spread={60}
        glow={true}
        disabled={false}
        proximity={120}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div className={cn("relative overflow-hidden", rounded)}>{children}</div>
    </div>
  );
};

export default SectionGlow;
