
module.exports = {
    devServer:{
        proxy:{
            "/abc":{
                target:"https://api.geekmaker.com",
                changeOrigin:true,
                pathRewrite:{
                    "^/abc":""
                }
            }
        }
    }
}
//http://m.maoyan.com/ajax/filterCinemas?ci=359