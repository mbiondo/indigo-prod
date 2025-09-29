'use client';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Music } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { 
  FadeIn, 
  SlideUp, 
  SlideInLeft, 
  SlideInRight, 
  StaggerContainer, 
  StaggerItem,
  ScaleIn 
} from "@/components/animations/ScrollAnimations";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contenido de texto con animaciones escalonadas */}
          <StaggerContainer className="space-y-6 sm:space-y-8">
            <StaggerItem>
              <div className="space-y-4 sm:space-y-6">
                <FadeIn delay={0.2}>
                  <Badge variant="secondary" className="text-xs sm:text-sm bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-indigo-200 shadow-sm">
                    {t('hero.badge')}
                  </Badge>
                </FadeIn>
                
                <SlideUp delay={0.4}>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-balance leading-tight">
                    {t('hero.title')}{" "}
                    <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">
                      {t('hero.titleHighlight')}
                    </span>{" "}
                    {t('hero.titleEnd')}
                  </h1>
                </SlideUp>
                
                <SlideUp delay={0.6}>
                  <p className="text-base sm:text-lg lg:text-xl text-muted-foreground text-pretty max-w-lg leading-relaxed">
                    {t('hero.description')}
                  </p>
                </SlideUp>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <SlideUp delay={0.8}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group w-full sm:w-auto"
                  >
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                    {t('hero.playDemo')}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-indigo-300 text-indigo-700 hover:bg-indigo-50 bg-transparent font-semibold shadow-sm hover:shadow-md transition-all duration-200 w-full sm:w-auto"
                  >
                    {t('hero.bookStudio')}
                  </Button>
                </div>
              </SlideUp>
            </StaggerItem>
          </StaggerContainer>
          
          {/* Imagen con animaciones desde la derecha */}
          <SlideInRight delay={0.5} className="relative order-first lg:order-last">
            <ScaleIn delay={0.7}>
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04"
                  alt="Estudio de grabación profesional"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </ScaleIn>
            
            <SlideUp delay={1.0}>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-background border border-gray-200 rounded-xl p-3 sm:p-4 shadow-lg backdrop-blur-sm">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-background rounded-full flex items-center justify-center">
                    <Music className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-xs sm:text-sm text-foreground">{t('hero.tracksProduced')}</p>
                    <p className="text-xs text-muted-foreground">{t('hero.produced')}</p>
                  </div>
                </div>
              </div>
            </SlideUp>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
}