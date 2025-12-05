// next.config.js
/** @type {import('next').NextConfig} */
const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';

const securityHeaders = [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

const nextConfig = {
  // Empty Turbopack config to silence warning
  turbopack: {},
  
  // Use webpack instead of Turbopack for custom configuration
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '.'),
    };
    return config;
  },

  // Keep your existing image configurations
  images: {
    domains: [
      'images.unsplash.com',
      'plus.unsplash.com'
    ],
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders.concat([
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 
                'self' 
                'unsafe-inline' 
                'unsafe-eval' 
                https://www.googletagmanager.com 
                https://www.google-analytics.com 
                https://cdn.vercel-insights.com;
              style-src 
                'self' 
                'unsafe-inline' 
                https://fonts.googleapis.com;
              img-src 
                'self' 
                data: 
                https: 
                https://images.unsplash.com 
                https://plus.unsplash.com 
                https://www.google-analytics.com;
              font-src 
                'self' 
                data: 
                https://fonts.gstatic.com;
              connect-src 
                'self' 
                https://vitals.vercel-insights.com 
                https://www.google-analytics.com;
              frame-src 
                'self' 
                https://www.youtube.com 
                https://www.google.com;
              media-src 'self' https:;
              object-src 'none';
              base-uri 'self';
              form-action 'self';
              frame-ancestors 'none';
              upgrade-insecure-requests;
              block-all-mixed-content;
            `.replace(/\s+/g, ' ').trim()
          }
        ])
      }
    ];
  }
};

module.exports = nextConfig;