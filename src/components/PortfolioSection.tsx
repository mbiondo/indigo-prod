'use client';

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { 
  SlideUp, 
  StaggerContainer, 
  StaggerItem,
  HoverCard,
  ScaleIn 
} from "@/components/animations/ScrollAnimations";
import { motion } from "framer-motion";

export function PortfolioSection() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('portfolio.projects.indieAlbum.title'),
      category: t('portfolio.projects.indieAlbum.category'),
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&auto=format",
      color: "from-blue-500 to-blue-700",
    },
    {
      title: t('portfolio.projects.latinSingle.title'),
      category: t('portfolio.projects.latinSingle.category'),
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=300&fit=crop&auto=format",
      color: "from-purple-500 to-purple-700",
    },
    {
      title: t('portfolio.projects.electronicEP.title'),
      category: t('portfolio.projects.electronicEP.category'),
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop&auto=format&q=80",
      color: "from-indigo-500 to-indigo-700",
    },
    {
      title: t('portfolio.projects.podcast.title'),
      category: t('portfolio.projects.podcast.category'),
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=300&fit=crop&auto=format",
      color: "from-green-500 to-green-700",
    },
    {
      title: t('portfolio.projects.musicVideo.title'),
      category: t('portfolio.projects.musicVideo.category'),
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop&auto=format",
      color: "from-red-500 to-red-700",
    },
    {
      title: t('portfolio.projects.photoSession.title'),
      category: t('portfolio.projects.photoSession.category'),
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&auto=format",
      color: "from-amber-500 to-amber-700",
    },
    {
      title: t('portfolio.projects.soundtrack.title'),
      category: t('portfolio.projects.soundtrack.category'),
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&auto=format",
      color: "from-orange-500 to-orange-700",
    },
    {
      title: t('portfolio.projects.commercial.title'),
      category: t('portfolio.projects.commercial.category'),
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop&auto=format",
      color: "from-teal-500 to-teal-700",
    },
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        {/* Título con animación */}
        <SlideUp className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">{t('portfolio.title')}</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            {t('portfolio.description')}
          </p>
        </SlideUp>
        
        {/* Grid de proyectos con animaciones escalonadas - Optimizado para móvil */}
        <StaggerContainer 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          staggerDelay={0.15}
        >
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <motion.div 
                className="group relative overflow-hidden rounded-xl cursor-pointer"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="aspect-[4/3] bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay gradiente animado */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Contenido que aparece en hover/touch */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 mb-2 text-xs">
                    {project.category}
                  </Badge>
                  <h3 className="text-lg sm:text-xl font-semibold">{project.title}</h3>
                </motion.div>
                
                {/* Efecto de brillo en hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}