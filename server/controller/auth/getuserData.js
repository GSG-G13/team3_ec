import { getUserQuery } from "../../database/queries/auth/userquery.js";

 const getuserDataController = (req,res) => {
    getUserQuery()
        .then((data) => {
            res.json({
                    error: false,
                    data: data.rows,
                })
            
        })
}
export default getuserDataController;