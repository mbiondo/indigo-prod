'use client';

import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo y nombre */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/logo.jpg"
                alt="INDIGO PRODUXION Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover rounded-lg"
                priority
                unoptimized
              />
            </div>
            <span className="text-lg font-bold text-foreground">INDIGO PRODUXION</span>
          </div>
          
          {/* Links de navegación */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a href="#servicios" className="text-muted-foreground hover:text-indigo-600 transition-colors">
              {t('navigation.services')}
            </a>
            <a href="#portfolio" className="text-muted-foreground hover:text-indigo-600 transition-colors">
              {t('navigation.portfolio')}
            </a>
            <a href="mailto:info@indigoproduxion.com" className="text-muted-foreground hover:text-indigo-600 transition-colors">
              {t('navigation.contact')}
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            {t('footer.copyright')}
          </div>
        </div>
      </div>
    </footer>
  );
}