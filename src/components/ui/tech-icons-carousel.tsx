import React from "react";
import { SiLinux, SiDocker, SiKubernetes, SiAmazonwebservices, SiGooglecloud, SiTerraform, SiAnsible, SiJenkins, SiGitlab, SiPrometheus, SiGrafana } from "react-icons/si";

const ICONS_ROW1 = [SiLinux, SiDocker, SiKubernetes, SiAmazonwebservices, SiGooglecloud, SiTerraform];
const ICONS_ROW2 = [SiAnsible, SiJenkins, SiGitlab, SiPrometheus, SiGrafana, SiDocker];

const repeatedIcons = (icons: any[], repeat = 3) => Array.from({ length: repeat }).flatMap(() => icons);

export default function TechIconsCarousel() {
  return (
    <div className="w-full overflow-hidden relative mt-8">
      {/* Row 1 */}
      <div className="flex gap-6 whitespace-nowrap animate-scroll-left mb-4">
        {repeatedIcons(ICONS_ROW1, 3).map((Icon, i) => (
          <div 
            key={i} 
            className="h-12 w-12 flex-shrink-0 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-600/20 backdrop-blur-sm border border-amber-400/30 shadow-lg shadow-amber-900/20 flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Icon className="h-6 w-6 text-amber-400" />
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex gap-6 whitespace-nowrap animate-scroll-right">
        {repeatedIcons(ICONS_ROW2, 3).map((Icon, i) => (
          <div 
            key={i} 
            className="h-12 w-12 flex-shrink-0 rounded-full bg-gradient-to-br from-orange-500/20 to-yellow-600/20 backdrop-blur-sm border border-orange-400/30 shadow-lg shadow-orange-900/20 flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Icon className="h-6 w-6 text-orange-400" />
          </div>
        ))}
      </div>

      {/* Fade overlays */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none" />
    </div>
  );
}
