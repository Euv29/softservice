import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SoftService Angola - Soluções Tecnológicas Empresariais',
    short_name: 'SoftService AO',
    description: 'Empresa angolana especializada em videovigilância, controlo biométrico, desenvolvimento web e sistema CACIMBO de gestão empresarial.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0066CC',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'technology', 'security'],
    lang: 'pt-AO',
  }
}
