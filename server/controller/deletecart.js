import deleteCart  from "../database/queries/cart/deleteCartItem.js";


export const deleteCartController = (req, res) => {
    const { id } = req.params;
    deleteCart(id)
        .then((data) => res.json({ error:false , message: "done" }))
        .catch((err) => res.send(err));
}