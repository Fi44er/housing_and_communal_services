const NewsService = require("../service/newsService")

class NewsController {
    async addNews(req, res, next) {
        try{
            if(req.file) {
                const { heading, text } = req.body
                const userData = await NewsService.addNews(
                    req.file,
                    heading,
                    text
                )
            }
            return res.json(userData)
        }catch(e){
            next(e)
        }
    }
}

module.exports = new NewsController()
