// import deleteCart  from "../database/queries/cart/deleteCartItem.js";
const { deleteCart } = require("../database/queries/cart/deleteCartItem.js")

exports.deleteCartController = (req, res) => {
    const { id } = req.params;
    deleteCart(id)
        .then((data) => res.json({ error:false , message: "done" }))
        .catch((err) => res.send(err));
}