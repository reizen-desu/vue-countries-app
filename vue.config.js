module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: `
          @import "@/assets/scss/main.scss";
        `,
			},
		},
	},
	publicPath: "/vue-countries-app",
};
