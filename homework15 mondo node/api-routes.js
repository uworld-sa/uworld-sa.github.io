// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import food controller
var foodController = require('./foodController');
// food routes
router.route('/foods')
    .get(foodController.index)
    .post(foodController.new);
router.route('/foods/:food_id')
    .get(foodController.view)
    .patch(foodController.update)
    .put(foodController.update)
    .delete(foodController.delete);
router.route('/foods/find/:string')
    .get(foodController.findDish);
// Export API routes
module.exports = router;