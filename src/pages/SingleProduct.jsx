import { Link } from "react-router-dom";
import {  useState, useEffect} from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
    const { id } = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchData = () => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => { setProducts(data); setLoading(false) })
    }
    useEffect(fetchData, [id])

    const prodotto = products.find(p => p.id == id)
    if (loading) {
        return <div className="p-5 text-center"><h3>Caricamento dati...</h3></div>;
    }
    if (!prodotto) {
        return <div className="p-5 text-center"><h3>Prodotto non trovato!</h3></div>;
    }
    return (
        <div className="d-flex justify-content-center">

            <div className="card bg-info-subtle text-info-emphasis" style={{ width: "40rem" }}>
                <img src={prodotto.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{prodotto.title}</h5>
                    <p className="card-subtitle mb-2 text-muted">{prodotto.category}</p>
                    <p className="card-text">{prodotto.description}</p>
                    <p className="card-text">Il prezzo è {prodotto.price} $</p>
                    <p className="card-text">
                        Il voto è {prodotto.rating?.rate} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <br />
                        N° recensioni: {prodotto.rating?.count}
                    </p>
                    <Link to='/products' className="btn btn-primary">Torna alla lista prodotti</Link>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;