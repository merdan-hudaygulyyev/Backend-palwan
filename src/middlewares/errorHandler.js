const APIError = require("../utils/errors")

const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof APIError) {
        return res.status(err.statusCode || 400)
            .json({
                success: false,
                message: err.message
            })
    }

    console.log(err);

    return res.status(500).json({
        success: false,
        message: "Ulgamda ýalňyşlyklar bar. API-ňizi barlaň !"
    })
}

module.exports = errorHandlerMiddleware