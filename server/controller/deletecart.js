import deleteCart  from "../database/queries/cart/deleteCartItem.js";


export const deleteCartController = (req, res) => {
    const { product_id } = req.params;
    deleteCart(product_id)
        .then((data) => res.json({ error:false , message: "done" }))
        .catch((err) => res.send(err));
}