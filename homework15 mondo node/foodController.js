// contactController.js
// Import contact model
Food = require('./foodModel');
// Handle index actions
exports.index = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    Food.get(function (err, foods) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Foods retrieved successfully111",
            data: foods
        });
    });
};
// Handle create food actions
exports.new = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    let food = new Food();
    food.name = req.body.name ? req.body.name : food.name;
    food.calories = req.body.calories;
// save the food and check for errors
    food.save(function (err) {
         if (err)
             res.json(err);
        res.json({
            message: 'New food created!',
            data: food
        });
    });
};
// Handle view food info
exports.view = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    let food = new Food();
    food.findById(req.params.food_id, function (err, food) {
        if (err)
            res.send(err);
        res.json({
            message: 'food details loading..',
            data: food
        });
    });
};
// Handle update food info
exports.update = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    let food = new Food();
    food.findById(req.params.food_id, function (err, food) {
        if (err)
            res.send(err);
        food.name = req.body.name ? req.body.name : food.name;
        food.gender = req.body.gender;
        food.email = req.body.email;
        food.phone = req.body.phone;
// save the food and check for errors
        food.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'food Info updated',
                data: food
            });
        });
    });
};
// Handle delete food
exports.delete = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    let food = new Food();
    food.remove({
        _id: req.params.food_id
    }, function (err, food) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'food deleted'
        });
    });
};
// Handle find food info
exports.findDish = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    let food = Food;

    food.
    find({
        name: { $regex: '.*' + req.params.string + '.*' }
    }).
    limit(10).
    sort({ name: -1 }).
    select({ name: 1, calories: 1 }).
    exec(function (err, docs) {
        if (err)
            res.send(err);
        res.json({
            message: 'food details loaded',
            data: docs
        });
    });
};