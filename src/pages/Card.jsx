import { Link } from "react-router-dom";

function SingleCard({ id, title, price, description, category, imgURL, rating }) {

    return (
        <div className="card bg-info-subtle text-info-emphasis" style={{ width: "18rem" }}>
            <img src={imgURL} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>

                <Link to={`/products/${id}`} className="btn btn-primary"> Dettaglio prodotto</Link>
            </div>
        </div>
    )
}

export default SingleCard;