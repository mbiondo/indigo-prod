'use client';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Music } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-sm bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-indigo-200 shadow-sm">
                {t('hero.badge')}
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold text-balance leading-tight">
                {t('hero.title')}{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">
                  {t('hero.titleHighlight')}
                </span>{" "}
                {t('hero.titleEnd')}
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-lg leading-relaxed">
                {t('hero.description')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                {t('hero.playDemo')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-indigo-300 text-indigo-700 hover:bg-indigo-50 bg-transparent font-semibold shadow-sm hover:shadow-md transition-all duration-200"
              >
                {t('hero.bookStudio')}
              </Button>
            </div>
          </div>
          <div className="relative">
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
            <div className="absolute -bottom-6 -left-6 bg-background border border-gray-200 rounded-xl p-4 shadow-lg backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12  bg-background rounded-full flex items-center justify-center">
                  <Music className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{t('hero.tracksProduced')}</p>
                  <p className="text-xs text-muted-foreground">{t('hero.produced')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}