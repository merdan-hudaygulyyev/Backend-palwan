class Response {
    constructor(data = null, message = null) {
        this.data = data
        this.message = message
    } 

    success(res) {
        return res.status(200).json({
            success: true,
            data: this.data,
            message: this.message ?? "Ýerine ýetirildi"
        })
    }

    created(res) {
        return res.status(201).json({
            success: true,
            data: this.data,
            message: this.message ?? "Ýerine ýetirildi"
        })
    }

    error500(res) {
        return res.status(500).json({
            success: false,
            data: this.data,
            message: this.message ?? "Ýerine ýetirilmedi !"
        })
    }

    error400(res) {
        return res.status(400).json({
            success: false,
            data: this.data,
            message: this.message ?? "Ýerine ýetirilmedi !"
        })
    }

    error401(res) {
        return res.status(401).json({
            success: false,
            data: this.data,
            message: this.message ?? "Ulgama agza boluň !"
        })
    }

    error404(res) {
        return res.status(404).json({
            success: false,
            data: this.data,
            message: this.message ?? "Ýerine ýetirilmedi !"
        })
    }

    error429(res) {
        return res.status(429).json({
            success: false,
            data: this.data,
            message: this.message ?? "Köp isleg bildirdiňiz !"
        })
    }

}

module.exports = Response