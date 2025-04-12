import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../../AppContext";
import { useEffect } from "react";

export default function Category() {
    const {id} = useParams();
    const {request} = useContext(AppContext);
    const [category, setCategory] = useState({products:[]})

        useEffect (() => {
            request("/api/category/" + id)
            .then(data => setCategory(data))
            .catch(j => console.error(j));
        }, [id]);

    return(
        <>
            <h1>Category {category.name}</h1>
            {category.products.map(p => <div key={p.id}>
                <Link to={"/product/" + p.id} className="nav-link text-dark h-100">
                    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                        <div className="card h-100">
                            <img src={p.imagesCsv} className="card-img-top" alt="Image"/>
                            <div className="card-body">
                                <h5 className="card-title">{p.name}</h5>
                                <p className="card-text">{p.description}</p>
                                <p className="card-text">{p.price} $</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>)}
        </>
    )
}