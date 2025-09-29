'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./theme-toggle";

export function Navigation() {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
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
            <span className="text-xl font-bold text-foreground">INDIGO PRODUXION</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-muted-foreground hover:text-indigo-600 transition-colors duration-200 font-medium">
              {t('navigation.services')}
            </a>
            <a href="#portfolio" className="text-muted-foreground hover:text-indigo-600 transition-colors duration-200 font-medium">
              {t('navigation.portfolio')}
            </a>
            <a href="#contacto" className="text-muted-foreground hover:text-indigo-600 transition-colors duration-200 font-medium">
              {t('navigation.contact')}
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <LanguageSwitcher />
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
              {t('navigation.bookSession')}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}