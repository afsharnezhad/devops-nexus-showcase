import React from "react";
import { SiLinux, SiDocker, SiKubernetes, SiAmazonwebservices, SiGooglecloud, SiTerraform, SiAnsible, SiJenkins, SiGitlab, SiPrometheus, SiGrafana } from "react-icons/si";

const ICONS_ROW1 = [SiLinux, SiDocker, SiKubernetes, SiAmazonwebservices, SiGooglecloud, SiTerraform];
const ICONS_ROW2 = [SiAnsible, SiJenkins, SiGitlab, SiPrometheus, SiGrafana, SiDocker];

const repeatedIcons = (icons: any[], repeat = 3) => Array.from({ length: repeat }).flatMap(() => icons);

export default function TechIconsCarousel() {
  return (
    <div className="w-full overflow-hidden relative">
      {/* Row 1 */}
      <div className="flex gap-4 sm:gap-6 whitespace-nowrap animate-scroll-left mb-3">
        {repeatedIcons(ICONS_ROW1, 3).map((Icon, i) => (
          <div 
            key={i} 
            className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-600/20 backdrop-blur-sm border border-amber-400/30 shadow-lg shadow-amber-900/20 flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400" />
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex gap-4 sm:gap-6 whitespace-nowrap animate-scroll-right">
        {repeatedIcons(ICONS_ROW2, 3).map((Icon, i) => (
          <div 
            key={i} 
            className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 rounded-full bg-gradient-to-br from-orange-500/20 to-yellow-600/20 backdrop-blur-sm border border-orange-400/30 shadow-lg shadow-orange-900/20 flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-orange-400" />
          </div>
        ))}
      </div>

    </div>
  );
}
