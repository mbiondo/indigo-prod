import { Metadata } from 'next';

export interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  locale?: string;
  type?: 'website' | 'article' | 'profile';
  noIndex?: boolean;
}

export const defaultSEO = {
  siteName: 'INDIGO PRODUXION',
  domain: 'https://indigoprod.com', // Cambia por tu dominio real
  defaultTitle: 'INDIGO PRODUXION - Estudio de Producción Musical Profesional',
  defaultDescription: 'Estudio profesional de producción musical. Servicios de grabación, mezcla, masterización y producción musical con equipos de alta gama.',
  defaultImage: '/images/og-image.jpg',
  twitterHandle: '@indigoprod', // Cambia por tu handle real
  keywords: [
    'estudio de grabación',
    'producción musical',
    'mezcla y masterización',
    'grabación profesional',
    'estudio musical',
    'productor musical',
    'audio profesional',
    'música'
  ]
};

export const translations = {
  es: {
    title: 'INDIGO PRODUXION - Estudio de Producción Musical Profesional',
    description: 'Estudio profesional de producción musical. Servicios de grabación, mezcla, masterización y producción musical con equipos de alta gama y productores experimentados.',
    keywords: [
      'estudio de grabación',
      'producción musical',
      'mezcla y masterización',
      'grabación profesional',
      'estudio musical',
      'productor musical',
      'audio profesional',
      'música',
      'estudio grabación España',
      'masterización profesional'
    ]
  },
  en: {
    title: 'INDIGO PRODUXION - Professional Music Production Studio',
    description: 'Professional music production studio. Recording, mixing, mastering and music production services with high-end equipment and experienced producers.',
    keywords: [
      'recording studio',
      'music production',
      'mixing and mastering',
      'professional recording',
      'music studio',
      'music producer',
      'professional audio',
      'music',
      'recording studio Spain',
      'professional mastering'
    ]
  }
};

export function generateMetadata(config: SEOConfig = {}): Metadata {
  const {
    title = defaultSEO.defaultTitle,
    description = defaultSEO.defaultDescription,
    keywords = defaultSEO.keywords,
    image = defaultSEO.defaultImage,
    url = defaultSEO.domain,
    locale = 'es',
    type = 'website',
    noIndex = false
  } = config;

  const localeData = translations[locale as keyof typeof translations] || translations.es;
  const finalTitle = title || localeData.title;
  const finalDescription = description || localeData.description;
  const finalKeywords = keywords.length > 0 ? keywords : localeData.keywords;

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: finalKeywords,
    openGraph: {
      type,
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      url,
      siteName: defaultSEO.siteName,
      title: finalTitle,
      description: finalDescription,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: finalDescription,
      images: [image],
      creator: defaultSEO.twitterHandle,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: url,
      languages: {
        'es': `${defaultSEO.domain}/es`,
        'en': `${defaultSEO.domain}/en`,
      },
    },
  };
}

// Función para generar datos estructurados JSON-LD
export function generateJsonLd(locale: string = 'es') {
  const localeData = translations[locale as keyof typeof translations] || translations.es;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${defaultSEO.domain}#business`,
    name: defaultSEO.siteName,
    description: localeData.description,
    url: defaultSEO.domain,
    image: `${defaultSEO.domain}${defaultSEO.defaultImage}`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Tu dirección aquí', // Actualizar con dirección real
      addressLocality: 'Tu ciudad',
      addressRegion: 'Tu región',
      postalCode: 'Tu código postal',
      addressCountry: 'ES'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.4168, // Actualizar con coordenadas reales
      longitude: -3.7038
    },
    telephone: '+34-xxx-xxx-xxx', // Actualizar con teléfono real
    email: 'info@indigoprod.com', // Actualizar con email real
    openingHours: [
      'Mo-Fr 09:00-20:00',
      'Sa 10:00-18:00'
    ],
    sameAs: [
      'https://www.facebook.com/indigoprod', // Actualizar con redes sociales reales
      'https://www.instagram.com/indigoprod',
      'https://www.youtube.com/indigoprod',
      'https://www.linkedin.com/company/indigoprod'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: locale === 'es' ? 'Servicios de Producción Musical' : 'Music Production Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'es' ? 'Grabación Musical' : 'Music Recording',
            description: locale === 'es' 
              ? 'Servicios profesionales de grabación en estudio con equipos de alta gama'
              : 'Professional studio recording services with high-end equipment'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'es' ? 'Mezcla y Masterización' : 'Mixing and Mastering',
            description: locale === 'es'
              ? 'Servicios profesionales de mezcla y masterización para música'
              : 'Professional mixing and mastering services for music'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'es' ? 'Producción Musical' : 'Music Production',
            description: locale === 'es'
              ? 'Servicios completos de producción musical desde la composición hasta el master final'
              : 'Complete music production services from composition to final master'
          }
        }
      ]
    }
  };
}