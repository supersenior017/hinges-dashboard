module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'zh', 'tr', 'fr', 'es', 'pt', 'ko', 'ar', 'de', 'ja'],
  },
  // this will download the translations from locize directly, in client (browser) and server (node.js)
  // DO NOT USE THIS if having a serverless environment => this will generate too much download requests
  //   => https://github.com/locize/i18next-locize-backend#important-advice-for-serverless-environments---aws-lambda-google-cloud-functions-azure-functions-etc
  backend: {
    projectId: '68921e0b-b375-4717-8465-b6655bde8291',
    // apiKey: 'myApiKey', // to not add the api-key in production, used for saveMissing feature
    referenceLng: 'en'
  },
  use: [
    require('i18next-locize-backend/cjs')
  ],
  ns: ['common'], // the namespaces needs to be listed here, to make sure they got preloaded
  serializeConfig: false, // because of the custom use i18next plugin
  // debug: true,
  // saveMissing: true, // do not saveMissing to true for production
}