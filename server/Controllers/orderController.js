const asyncHandler = require("express-async-handler");

const Order = require("../Models/orderModel");

const addOrder = asyncHandler(async (req, res) => {
    const refNo= req.body.refNo;
    const site= req.body.site;
    const items= req.body.items;
    const totalAmount= Number(req.body.totalAmount);
    const supplier= req.body.supplier;
    const buyer = req.body.buyer;
    const email= req.body.email;
    const address= req.body.address;
    const requiredDate= req.body.requiredDate;
    const contactNo= req.body.contactNo;
    const comment= req.body.comment;
  
    const newOrder = new Order({
        refNo,
        site,
        items,
        totalAmount,
        supplier,
        buyer,
        email,
        address,
        requiredDate,
        contactNo,
        comment

    });
  
    newOrder
      .save()
      .then(() => {
        res.json("The Order request is added to the system successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  });

module.exports = {
    addOrder,
};