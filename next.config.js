const path = require('path')

const { BLOG_URL, DOCS_URL, DOCS_SHORT_URL } = process.env

const nextTranslate = require('next-translate');

const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'deny'
  },
]
module.exports = nextTranslate({
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/blog',
        destination: `${BLOG_URL}/blog`,
      },
      {
        source: '/blog/:path*',
        destination: `${BLOG_URL}/blog/:path*`,
      },
      {
        source: '/docs',
        destination: `${DOCS_URL}`,
      },
      {
        source: '/docs/:path*',
        destination: `${DOCS_SHORT_URL}/:path*`,
      }
    ]
  },
});


// module.exports = {
//   reactStrictMode: true,
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   i18n,
//   images: {
//     formats: ["image/avif", "image/webp"],
//   },
//   async headers() {
//     return [
//       {
//         // Apply these headers to all routes in your application.
//         source: '/(.*)',
//         headers: securityHeaders,
//       },
//     ]
//   },
//   async rewrites() {
//     return [
//       {
//         source: '/:path*',
//         destination: `/:path*`,
//       },
//       {
//         source: '/blog',
//         destination: `${BLOG_URL}/blog`,
//       },
//       {
//         source: '/blog/:path*',
//         destination: `${BLOG_URL}/blog/:path*`,
//       },
//       {
//         source: '/docs',
//         destination: `${DOCS_URL}`,
//       },
//       {
//         source: '/docs/:path*',
//         destination: `${DOCS_SHORT_URL}/:path*`,
//       }
//     ]
//   },
// }