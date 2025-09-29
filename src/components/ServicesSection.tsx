'use client';

import { Card } from "@/components/ui/card";
import { Headphones, Mic, Music, Volume2, Radio, Users, Video, Film, Camera, Edit, Waves } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { 
  SlideUp, 
  StaggerContainer, 
  StaggerItem,
  HoverCard 
} from "@/components/animations/ScrollAnimations";

export function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: t('services.recording.title'),
      description: t('services.recording.description'),
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: t('services.mixing.title'),
      description: t('services.mixing.description'),
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: t('services.production.title'),
      description: t('services.production.description'),
      gradient: "from-indigo-500 to-indigo-600",
    },
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: t('services.postAudio.title'),
      description: t('services.postAudio.description'),
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: t('services.podcast.title'),
      description: t('services.podcast.description'),
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('services.collaborative.title'),
      description: t('services.collaborative.description'),
      gradient: "from-pink-500 to-pink-600",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: t('services.videoRecording.title'),
      description: t('services.videoRecording.description'),
      gradient: "from-red-500 to-red-600",
    },
    {
      icon: <Edit className="w-8 h-8" />,
      title: t('services.videoEditing.title'),
      description: t('services.videoEditing.description'),
      gradient: "from-teal-500 to-teal-600",
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: t('services.audiovisualProduction.title'),
      description: t('services.audiovisualProduction.description'),
      gradient: "from-violet-500 to-violet-600",
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: t('services.photography.title'),
      description: t('services.photography.description'),
      gradient: "from-amber-500 to-amber-600",
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: t('services.liveAudio.title'),
      description: t('services.liveAudio.description'),
      gradient: "from-cyan-500 to-cyan-600",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto">
        {/* Título con animación */}
        <SlideUp className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">{t('services.title')}</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            {t('services.description')}
          </p>
        </SlideUp>
        
        {/* Grid de servicios con animaciones escalonadas - Optimizado para móvil */}
        <StaggerContainer 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          staggerDelay={0.1}
        >
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <HoverCard 
                hoverScale={1.02}
                className="h-full"
              >
                <Card className="p-4 sm:p-6 h-full bg-card border border-border group transition-all duration-300 hover:shadow-xl">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-3 sm:mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="scale-75 sm:scale-100">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 group-hover:text-indigo-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}