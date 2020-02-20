module.exports = {
    devServer: {
        overlay: {
            warnings: false,
            errors: false
        }
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/css/global.scss";`
            }
        }
    }
};
