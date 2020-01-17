function registerQuery() {
    return "INSERT INTO `vacations`.`users` (`first_name`, `last_name`, `email`, `password`) VALUES (?, ?, ?, ?);"
}
function checkIfUserExistsQuery() {
    return "select *, concat(first_name, ' ', last_name) as name from Vacations.users where email = ?"
}
function getVacationDetailsQuery() {
    return "SELECT VD.*,VI.image_url, (SELECT COUNT(vacation_id) FROM vacations.users_followes WHERE vacation_id = VD.id AND is_followed = 1) AS followers_count, CASE WHEN EXISTS (SELECT 1 FROM users_followes AS UF WHERE vacation_id = VD.id AND user_id = ?) THEN 1 ELSE 0 END AS is_following FROM vacation_details AS VD inner join vacations_images as VI on VI.vacation_id = VD.id"
}
function addFollowQuery() {
    return "INSERT INTO `vacations`.`users_followes` (`vacation_id`, `user_id`) VALUES (?, ?);"
}
function removeFollowQuery() {
    return "delete from users_followes where (vacation_id = ?) and (user_id = ?);"
}

function addVacationQuery() {
    return "INSERT INTO `vacations`.`vacation_details` (`description`, `destination`, `check_in`, `check_out`, `price` ) VALUES ( ?, ?, ?, ?,?)"
}
function addImageQuery() {
    return 'INSERT INTO `vacations`.`vacations_images` (`vacation_id`, `image_url`) VALUES (?, ?);'
}


module.exports = { registerQuery, addImageQuery, addVacationQuery, checkIfUserExistsQuery, getVacationDetailsQuery, addFollowQuery, removeFollowQuery }
