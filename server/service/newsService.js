const connection = require('../database/db')
const ApiError = require('../exceptions/apiError')


class NewsService {
    async addNews(img, heading, text) {
        const connect = await connection
        if(img.lenght != 0 && heading.lenght != 0 && text.lenght != 0) {
            await connect.execute("INSERT INTO `news`(`img`, `heading`, `text`) VALUES(?,?,?)", [img, heading, text])
        }else {
            throw ApiError.BadRequest(`Не все  поля заполнены`)
        }
    }
}