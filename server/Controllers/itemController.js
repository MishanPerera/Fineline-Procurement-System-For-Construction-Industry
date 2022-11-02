const asyncHandler = require("express-async-handler");
const Item = require("../Models/itemModel");

const addItem = asyncHandler(async (req, res) => {
    const itemcode= req.body.itemcode;
    const item= req.body.item;
    const unitPrice= Number(req.body.unitPrice);
  
    const newItem = new Item({
        itemcode,
        item,
        unitPrice
    });
  
    newItem
      .save()
      .then(() => {
        res.json("The Item is added to the system successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  });

module.exports = {
    addItem,
};