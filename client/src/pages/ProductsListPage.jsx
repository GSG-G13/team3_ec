import { Filter } from "./Filter"
import CardList from "../components/CardList/CardList"

export const ProductsPage = () => {
    return (
        <div className="products-container">
            <Filter />
            <CardList />
        </div>
    )
}