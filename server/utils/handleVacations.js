const moment = require("moment")

module.exports = (array) => {
    const result = array.reduce((obj, current) => {

        let { id, image_url, check_out, check_in } = current;
        image_url = { url: image_url }
        current.check_in = moment(check_in).format("MM/DD/YY")
        current.check_out = moment(check_out).format("MM/DD/YY")
        current.is_following = 1 ? true : false
        return {
            ...obj,
            [id]: {
                ...current,
                images: [...((obj[id] && obj[id].images) || []), image_url]
            }
        };
    }, {})
    return Object.values(result)
}
