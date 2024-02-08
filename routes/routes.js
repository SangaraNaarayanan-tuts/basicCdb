
const { addUser } = require ('../controllers/userController');
let cors = require('cors');

module.exports = function (app) {
    app.route('/addUser').get( addUser, cors()); 
}