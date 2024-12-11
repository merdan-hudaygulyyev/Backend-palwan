const joi = require("joi")
const APIError = require("../../utils/errors")

class authValidation {
    constructor() {}
    static register = async (req, res, next) => {
        try {

            await joi.object({
                name: joi.string().trim().min(3).max(100).required().messages({
                    "string.base": "Adyňyz ýönekeý şrift bolmaly",
                    "string.empty": "Adyňyzy giriziň !",
                    "string.min": "Adyňyz azyndan 3 simbol bolmaly",
                    "string.max": "Adyňyz 100 simboldan köp bolmaly däl",
                    "string.required": "Adyňyzy giriziň !"
                }),
                lastname: joi.string().trim().min(3).max(100).required().messages({
                    "string.base": "Familiýaňyz ýönekeý şrift bolmaly",
                    "string.empty": "Familiýaňyzy giriziň !",
                    "string.min": "Familiýaňyz azyndan 3 simbol bolmaly",
                    "string.max": "Familiýaňyz 100 simboldan köp bolmaly däl",
                    "string.required": "Familiýaňyzy giriziň !"
                }),
                email: joi.string().email().trim().min(3).max(100).required().messages({
                    "string.base": "Emailiňiz ýönekeý şrift bolmaly",
                    "string.empty": "Emailiňizi giriziň !",
                    "string.min": "Emailiňiz azyndan 3 simbol bolmaly",
                    "string.email": "Dogry Email giriziň",
                    "string.max": "Emailiňiz 100 simboldan köp bolmaly däl",
                    "string.required": "Emailiňizi giriziň !"
                }),
                password: joi.string().trim().min(6).max(36).required().messages({
                    "string.base": "Parolyňyz ýönekeý şrift bolmaly",
                    "string.empty": "Parolyňyzy giriziň !",
                    "string.min": "Parolyňyz azyndan 6 simbol bolmaly",
                    "string.max": "Parolyňyz 36 simboldan köp bolmaly däl",
                    "string.required": "Parolyňyzy giriziň !"
                })
            }).validateAsync(req.body)
        } catch (error) {
            if (error.details && error?.details[0].message) 
                throw new APIError(error.details[0].message, 400)
            else throw new APIError("Agza bolmak üçin maglumatlaryňyzy dogry giriziň", 400)
        }
        next()
    }

    static login = async (req, res, next) => {
        try {
            await joi.object({
                email: joi.string().email().trim().min(3).max(100).required().messages({
                    "string.base": "Emailiňiz ýönekeý şrift bolmaly",
                    "string.empty": "Emailiňizi giriziň !",
                    "string.min": "Emailiňiz azyndan 3 simbol bolmaly",
                    "string.email": "Dogry Email giriziň",
                    "string.max": "Emailiňiz 100 simboldan köp bolmaly däl",
                    "string.required": "Emailiňizi giriziň !"
                }),
                password: joi.string().trim().min(6).max(36).required().messages({
                    "string.base": "Parolyňyz ýönekeý şrift bolmaly",
                    "string.empty": "Parolyňyzy giriziň !",
                    "string.min": "Parolyňyz azyndan 6 simbol bolmaly",
                    "string.max": "Parolyňyz 36 simboldan köp bolmaly däl",
                    "string.required": "Parolyňyzy giriziň !"
                })
            }).validateAsync(req.body)
        } catch (error) {
            if (error.details && error?.details[0].message) 
                throw new APIError(error.details[0].message, 400)
            else throw new APIError("Agza bolmak üçin maglumatlaryňyzy dogry giriziň", 400)
        }
        next();
    }
}

module.exports = authValidation