var express = require('express');
var router = express.Router();
var ctrl_food = require('../controllers/food');

router.get('/', ctrl_food.homelist);
router.get('/food/delete/:id', ctrl_food.delete_Food);
router.get('/create_edit', ctrl_food.create_food);
router.get('/create_edit/:id', ctrl_food.load_Edited_Data);

router.post('/create_edit', ctrl_food.create_food_items);
router.post('/create_edit/:id', ctrl_food.put_Item);

module.exports = router;
