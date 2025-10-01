import { GradientHeading } from "@/components/ui/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { useTranslation } from "@/hooks/useTranslation";
import type { SVGProps } from "react";

function DockerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
      <path fill="#2496ED" d="M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"/>
    </svg>
  );
}

function KubernetesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 722.5 701.1" {...props}>
      <path fill="#326CE5" d="M371.3 0c-8.1 0-14.6 6.5-14.6 14.6v32.5c0 2.6.7 5.1 2 7.3l68.9 119.5c2.6 4.5 8.3 6 12.8 3.4 4.5-2.6 6-8.3 3.4-12.8L374.9 45c-.1-.2-.2-.4-.4-.6-1.3-2.2-2-4.7-2-7.3V14.6c0-8.1-6.5-14.6-14.6-14.6h-1.2z"/>
      <path fill="#326CE5" d="M361.2 73.3c-164.5 0-298 133.5-298 298s133.5 298 298 298 298-133.5 298-298-133.5-298-298-298zm0 47.8c138.1 0 250.2 112.1 250.2 250.2S499.3 621.5 361.2 621.5 111 509.4 111 371.3s112.1-250.2 250.2-250.2z"/>
      <path fill="#FFF" d="M361.2 154.8c-119.5 0-216.5 97-216.5 216.5s97 216.5 216.5 216.5 216.5-97 216.5-216.5-97-216.5-216.5-216.5zm86.3 130.9l-54.7 94.8h109.4l-54.7-94.8zm-172.6 0l54.7 94.8H220.2l54.7-94.8zm86.3-75.1l54.7 94.8h-109.4l54.7-94.8zm0 225.1l-54.7-94.8h109.4l-54.7 94.8z"/>
    </svg>
  );
}

function AWSIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 304 182" {...props}>
      <path fill="#FF9900" d="M86.4 66.4c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3l-6.3 4.2c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2-4.9-4.8-7.4-11.2-7.4-19.2 0-8.5 3-15.4 9.1-20.6 6.1-5.2 14.2-7.8 24.5-7.8 3.4 0 6.9.3 10.6.8 3.7.5 7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3-3.7.9-7.3 2-10.8 3.4-1.6.7-2.8 1.1-3.5 1.3-.7.2-1.2.3-1.6.3-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5.5-.7 1.4-1.4 2.8-2.1 3.5-1.8 7.7-3.3 12.6-4.5 4.9-1.3 10.1-1.9 15.6-1.9 11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4zm-40.6 15.2c3.3 0 6.7-.6 10.3-1.8 3.6-1.2 6.8-3.4 9.5-6.4 1.6-1.9 2.8-4 3.4-6.4.6-2.4 1-5.3 1-8.7v-4.2c-2.9-.7-6-1.3-9.2-1.7-3.2-.4-6.3-.6-9.4-.6-6.7 0-11.6 1.3-14.9 4-3.3 2.7-4.9 6.5-4.9 11.5 0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.7 10.5 3.7zm80.3 10.8c-1.8 0-3-.3-3.8-1-.8-.6-1.5-2-2.1-3.9L96.7 10.2c-.6-2-.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 3.9 1 .8.6 1.4 2 2 3.9l16.8 66.2 15.6-66.2c.5-2 1.1-3.3 1.9-3.9.8-.6 2.2-1 4-1h8c1.9 0 3.2.3 4 1 .8.6 1.5 2 1.9 3.9l15.8 67 17.3-67c.6-2 1.3-3.3 2-3.9.8-.6 2.1-1 3.9-1h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6-.1.6-.3 1.4-.7 2.5l-24.1 77.3c-.6 2-1.3 3.3-2.1 3.9-.8.6-2.1 1-3.8 1h-8.6c-1.9 0-3.2-.3-4-1-.8-.7-1.5-2-1.9-4L156 23l-15.4 64.4c-.5 2-1.1 3.3-1.9 4-.8.7-2.2 1-4 1h-8.6zm128.5 2.7c-5.2 0-10.4-.6-15.4-1.8-5-1.2-8.9-2.5-11.5-4-1.6-.9-2.7-1.9-3.1-2.8-.4-.9-.6-1.9-.6-2.8v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3.6.2 1.5.6 2.5 1 3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3 3.4-2.2 5.2-5.4 5.2-9.5 0-2.8-.9-5.1-2.7-7-1.8-1.9-5.2-3.6-10.1-5.2L246 52c-7.3-2.3-12.7-5.7-16-10.2-3.3-4.4-5-9.3-5-14.5 0-4.2.9-7.9 2.7-11.1 1.8-3.2 4.2-6 7.2-8.2 3-2.3 6.4-4 10.4-5.2 4-1.2 8.2-1.7 12.6-1.7 2.2 0 4.5.1 6.7.4 2.3.3 4.4.7 6.5 1.1 2 .5 3.9 1 5.7 1.6 1.8.6 3.2 1.2 4.2 1.8 1.4.8 2.4 1.6 3 2.5.6.8.9 1.9.9 3.3v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2.9-13.3 2.8-3.1 1.9-4.7 4.8-4.7 8.9 0 2.8 1 5.2 3 7.1 2 1.9 5.7 3.8 11 5.5l14.2 4.5c7.2 2.3 12.4 5.5 15.5 9.6 3.1 4.1 4.6 8.8 4.6 14 0 4.3-.9 8.2-2.6 11.6-1.8 3.4-4.2 6.4-7.3 8.8-3.1 2.5-6.8 4.3-11.1 5.6-4.5 1.4-9.2 2.1-14.3 2.1z"/>
      <path fill="#FF9900" d="M273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6z"/>
      <path fill="#FF9900" d="M287.2 128.1c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z"/>
    </svg>
  );
}

function LinuxIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <path fill="#FCC624" d="M128 0C57.307 0 0 57.307 0 128s57.307 128 128 128 128-57.307 128-128S198.693 0 128 0zm0 240C62.144 240 8 185.856 8 120S62.144 0 128 0s120 54.144 120 120-54.144 120-120 120z"/>
      <path fill="#000" d="M128 16C71.776 16 26 61.776 26 118c0 42.4 26 78.688 63 93.5 5.632 2.256 12-2.496 12-8.688V183.5c0-3.968-2.064-7.664-5.44-9.872-11.008-7.184-18.304-19.68-18.304-33.872 0-22.528 18.368-40.896 40.896-40.896 22.528 0 40.896 18.368 40.896 40.896 0 14.192-7.296 26.688-18.304 33.872-3.376 2.208-5.44 5.904-5.44 9.872v19.312c0 6.192 6.368 10.944 12 8.688 37-14.812 63-51.1 63-93.5 0-56.224-45.776-102-102-102z"/>
    </svg>
  );
}

function TerraformIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <path fill="#5C4EE5" d="M89.2 0L0 51.5v103L89.2 206V103L0 51.5M177.5 51.5L89.2 103v103l88.3-51.5v-103M256 51.5l-88.3 51.5v103L256 154.5v-103"/>
    </svg>
  );
}

function GitIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <path fill="#F05032" d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21 29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693 5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657 7.663 7.66 7.663 20.075 0 27.74-7.665 7.666-20.08 7.666-27.749 0-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462-.003 69.637a19.82 19.82 0 015.188 3.71c7.663 7.66 7.663 20.076 0 27.747-7.665 7.662-20.086 7.662-27.74 0-7.663-7.671-7.663-20.086 0-27.746a19.654 19.654 0 016.421-4.281V94.196a19.378 19.378 0 01-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442l-76.64 76.635c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324"/>
    </svg>
  );
}

function PrometheusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <circle cx="128" cy="128" r="116" fill="#E6522C"/>
      <path fill="#FFF" d="M128 30c54.13 0 98 43.87 98 98s-43.87 98-98 98-98-43.87-98-98 43.87-98 98-98m0-10C68.23 20 20 68.23 20 128s48.23 108 108 108 108-48.23 108-108S187.77 20 128 20z"/>
      <circle cx="128" cy="128" r="20" fill="#FFF"/>
      <path fill="#FFF" d="M128 108c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 30c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10z"/>
    </svg>
  );
}

function JenkinsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <path fill="#D24939" d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm0 240C62.1 240 8 185.9 8 120S62.1 0 128 0s120 54.1 120 120-54.1 120-120 120z"/>
      <path fill="#335061" d="M166.5 72.9c-8.8 0-15.9 7.1-15.9 15.9v54.4c0 8.8 7.1 15.9 15.9 15.9s15.9-7.1 15.9-15.9V88.8c0-8.8-7.1-15.9-15.9-15.9z"/>
      <circle cx="166.5" cy="56" r="12" fill="#335061"/>
    </svg>
  );
}

function BashIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" rx="55" fill="#293138"/>
      <path fill="#4EAA25" d="M200 52L56 128l144 76V52z"/>
      <path fill="#FFF" d="M90 160l12 12 24-24-24-24-12 12 12 12-12 12zm40 8h32v8h-32v-8z"/>
    </svg>
  );
}

function DatabaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <ellipse cx="128" cy="40" rx="100" ry="40" fill="#0078D4"/>
      <path fill="#0078D4" d="M28 40v50c0 22.1 44.8 40 100 40s100-17.9 100-40V40"/>
      <ellipse cx="128" cy="90" rx="100" ry="40" fill="#50E6FF" opacity="0.3"/>
      <path fill="#0078D4" d="M28 90v50c0 22.1 44.8 40 100 40s100-17.9 100-40V90"/>
      <ellipse cx="128" cy="140" rx="100" ry="40" fill="#50E6FF" opacity="0.3"/>
      <path fill="#0078D4" d="M28 140v50c0 22.1 44.8 40 100 40s100-17.9 100-40v-50"/>
      <ellipse cx="128" cy="190" rx="100" ry="40" fill="#50E6FF" opacity="0.3"/>
    </svg>
  );
}

function AnsibleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <circle cx="128" cy="128" r="128" fill="#000"/>
      <path fill="#FFF" d="M128 32c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 176c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"/>
      <path fill="#FFF" d="M164 128l-36-60-36 60h24v40h24v-40h24z"/>
    </svg>
  );
}

function AzureIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <defs>
        <linearGradient id="azure-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#114A8B"/>
          <stop offset="100%" stopColor="#0669BC"/>
        </linearGradient>
      </defs>
      <path fill="url(#azure-grad)" d="M128 0L0 128l128 128L256 128 128 0zm0 224L32 128 128 32l96 96-96 96z"/>
      <path fill="url(#azure-grad)" d="M128 64l-64 64 64 64 64-64-64-64z"/>
    </svg>
  );
}

const TechStack = () => {
  const { t } = useTranslation();
  
  const techLogos = [
    { name: "Docker", id: 1, img: DockerIcon },
    { name: "Kubernetes", id: 2, img: KubernetesIcon },
    { name: "AWS", id: 3, img: AWSIcon },
    { name: "Azure", id: 4, img: AzureIcon },
    { name: "Linux", id: 5, img: LinuxIcon },
    { name: "Terraform", id: 6, img: TerraformIcon },
    { name: "Ansible", id: 7, img: AnsibleIcon },
    { name: "Git", id: 8, img: GitIcon },
    { name: "Prometheus", id: 9, img: PrometheusIcon },
    { name: "Jenkins", id: 10, img: JenkinsIcon },
    { name: "Bash", id: 11, img: BashIcon },
    { name: "Database", id: 12, img: DatabaseIcon },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <GradientHeading variant="secondary" size="sm">
            {t('techStackTitle')}
          </GradientHeading>
          <div className="w-24 h-1 bg-gradient-button mx-auto rounded-full mb-6"></div>
          <GradientHeading size="xl" className="mb-4">
            Technologies I Work With
          </GradientHeading>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t('techStackSubtitle')}
          </p>
        </div>

        {/* Logo Carousel */}
        <div className="flex justify-center">
          <LogoCarousel columnCount={4} logos={techLogos} />
        </div>
      </div>
    </section>
  );
};

export default TechStack;