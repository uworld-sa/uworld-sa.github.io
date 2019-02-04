// foodModel.js
var mongoose = require('mongoose');
// Setup schema
var foodSchema = mongoose.Schema({
    name: String,
    calories: Number
});
// Export food model
var food = module.exports = mongoose.model('food', foodSchema)
module.exports.get = function (callback, limit) {
    food.find(callback).limit(limit);
}