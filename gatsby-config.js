module.exports = {
  siteMetadata: {
      title: 'GatsbyWP',
      subtitle: `Fetch Data From Wordpress`,
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-netlify-cms',
      'gatsby-transformer-sharp',
      {
          resolve: "gatsby-source-wordpress",
          options: {
              baseUrl: "gatsbywp.server1.hrj.fi",
              protocol: "https",
              hostingWPCOM: false,
              useACF: false,
              verboseOutput: true,
          }
      }
  ],
};