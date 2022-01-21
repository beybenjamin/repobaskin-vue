module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/scss/Foundation/vars.scss";
                    @import "@/scss/styles.scss";     
                `
            }
        }
    }
};