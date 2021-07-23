/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 module.exports = {
  proxy: {
    prefix: "/api",
    url: "http://localhost:3001",
  },

  plugins: ["gatsby-plugin-react-helmet"],
}
