const moment = require("moment")

module.exports = (array) => {
    let images = []
    return array.reduce((p, c) => {
        let { id, destination, description, check_in, check_out, price, image_url, followers_count, is_following } = c
        const exists = p.find((vacation) => {
            return vacation.id === id
        })
        images.push({ url: image_url })
        if (!exists) {
            check_in = moment(check_in).format("MM/DD/YY")
            check_out = moment(check_out).format("MM/DD/YY")
            return [...p, { id, destination, description, check_in, check_out, price, images, followers_count, is_following }]
        }
        else {
            if (images.length === 5) {
                images = []
            }
            return p
        }

    }, [])

}