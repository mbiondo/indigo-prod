'use client';

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

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
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('portfolio.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            {t('portfolio.description')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <div className="aspect-[4/3] bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <Badge className="bg-accent text-accent-foreground border-none mb-2">
                  {project.category}
                </Badge>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}