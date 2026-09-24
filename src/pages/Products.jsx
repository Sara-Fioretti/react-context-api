import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { BudgetProvider, useBudgetMode } from "../contexts/BudgetContext";
import { useContext } from "react";
import Card from "./Card";

function Products() {
    const [products, setProducts] = useState([])
    const fetchData = () => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }
    useEffect(fetchData, [])

    const { budgetMode, maxPrice } = useBudgetMode()



    return (
        <div className="d-flex flex-wrap gap-2 p-5">

            {
                products
                    .filter((product) => {
                        return product.price <= maxPrice;
                    })
                    .map((product) => (
                        <Card
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            description={product.description}
                            category={product.category}
                            imgURL={product.image}
                            rating={product.rating}
                        >
                        </Card>
                    ))
            }

        </div>
    )
}
export default Products