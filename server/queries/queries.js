module.exports = {
    registerQuery: "INSERT INTO `vacations`.`users` (`first_name`, `last_name`, `email`, `password`) VALUES (?, ?, ?, ?);",
    checkIfUserExistsQuery: "select *, concat(first_name, ' ', last_name) as name from Vacations.users where email = ?",
    getVacationDetailsQuery: "SELECT VD.*,VI.image_url, (SELECT COUNT(vacation_id) FROM vacations.users_followes WHERE vacation_id = VD.id AND is_followed = 1) AS followers_count, CASE WHEN EXISTS (SELECT 1 FROM users_followes AS UF WHERE vacation_id = VD.id AND user_id = ?) THEN 1 ELSE 0 END AS is_following FROM vacation_details AS VD inner join vacations_images as VI on VI.vacation_id = VD.id",
    addFollowQuery: "INSERT INTO `vacations`.`users_followes` (`vacation_id`, `user_id`) VALUES (?, ?);",
    removeFollowQuery: "DELETE FROM users_followes WHERE (vacation_id = ?) AND (user_id = ?);",
    addVacationQuery: "INSERT INTO `vacations`.`vacation_details` (`description`, `destination`, `check_in`, `check_out`, `price` ) VALUES ( ?, ?, ?, ?,?)",
    addImageQuery: "INSERT INTO `vacations`.`vacations_images` (`vacation_id`, `image_url`) VALUES (?, ?);",
    deleteVacationDetailsQuery: "DELETE FROM vacation_details WHERE id = ?",
    deleteVacationFollowersQuery: "DELETE FROM users_followes WHERE vacation_id = ?",
    deleteVacationImagesQuery: "DELETE FROM vacations_images WHERE vacation_id = ?",
    editVacationQuery: "UPDATE `vacations`.`vacation_details` SET `description` = ?, `destination` = ?, `check_in` = ?, `check_out` = ?, `price` = ? WHERE (`id` = ?)",
}
