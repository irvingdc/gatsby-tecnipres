module.exports = {
    plugins: [
      {
        resolve: "gatsby-plugin-antd",
        options: {
          style: true
        }
      },
      {
        resolve: "gatsby-plugin-less",
        options: {
          javascriptEnabled: true,
          modifyVars: {
            "primary-color": "#26475F",
            "link-color": "#0088B7"
          }
        }
      }
    ]
  };
  