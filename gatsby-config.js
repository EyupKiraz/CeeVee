module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Simplefolio`,
        short_name: `Simplefolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: 'AIzaSyDoT3u0yvsP8otS_vBNxsjdQ8Fs7v2XlIM',
          authDomain: 'eyup-kiraz-portfolio-f9862.firebaseapp.com',
          databaseURL: 'https://eyup-kiraz-portfolio-f9862.firebaseio.com',
          projectId: 'eyup-kiraz-portfolio-f9862',
          storageBucket: 'eyup-kiraz-portfolio-f9862.appspot.com',
          messagingSenderId: '548247623',
          appId: '1:548247623:web:07741869f26fce854cb962',
          measurementId: 'G-9T22QLNKV5',
        },
      },
    },
  ],
  pathPrefix: '/eyup-kiraz-portfolio',
};
