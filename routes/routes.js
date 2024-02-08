
const { addUser, getUser } = require ('../controllers/userController');
let cors = require('cors');

module.exports = function (app) {
    app.route('/addUser').post( addUser, cors()); 
    app.route('/getUser').get( getUser, cors()); 
}