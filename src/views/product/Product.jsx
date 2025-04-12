import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../AppContext";
import { useEffect } from "react";

export default function Product() {
    const {id} = useParams();
    const {request} = useContext(AppContext);
    const [product, setProduct] = useState([])
    

    useEffect (() => {
        request("/api/product/" + id)
        .then(data => setProduct(data))
        .catch(j => console.error(j));
    }, [id]);

    return(
        <>
            <h1>Category {product.name}</h1>
            <div className="card h-100">
                <img src={product.imagesCsv} className="card-img-top" alt="Image"/>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">{product.price} $</p>
                </div>
            </div>
        </>
    )
}