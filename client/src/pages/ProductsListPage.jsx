import { Filter } from "./Filter"
import CardList from "../components/CardList/CardList"
import { ToastContainer, toast } from 'react-toastify';

export const ProductsPage = () => {
    return (
        <div className="products-container">
            <Filter />
            <CardList />
            <ToastContainer/>
        </div>
    )
}