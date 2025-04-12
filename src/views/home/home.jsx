import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { AppContext } from "../../AppContext";


export default function Home() {

    const [categories, setCategories] = useState([]);
    const [topProducts, setTopProducts] = useState([]);
    const {request} = useContext(AppContext);

    useEffect (() => {
        request("/api/category")
        .then(data => setCategories(data))
        .catch(j => console.error(j));
    }, []);

    useEffect (() => {
        request("/api/topProducts")
        .then(data => setTopProducts(data))
        .catch(j => console.error(j));
    }, []);
    
    return(
    <>
      <h1>Shop</h1>
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {categories.map(ctg => <div key={ctg.id} className="col">
            <Link to={"/category/" + ctg.slug} className="nav-link text-dark h-100">
                <div className="card h-100">
                    <img src={ctg.imageUrl} className="card-img-top" alt="Image"/>
                    <div className="card-body">
                        <h5 className="card-title">{ctg.name}</h5>
                        <p className="card-text">{ctg.description}</p>
                    </div>
                </div>
            </Link>
        </div>)}
      </div><br/><br/>
      <h2>Most viewed products:</h2>
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {topProducts.map(tpr => <div key={tpr.id} className="col">
            <Link to={"/product/" + tpr.id} className="nav-link text-dark h-100">
                <div className="card h-100">
                    <img src={tpr.imagesCsv} className="card-img-top" alt="Image"/>
                    <div className="card-body">
                        <h5 className="card-title">{tpr.name}</h5>
                        <p className="card-text">{tpr.description}</p>
                        <p className="card-text">{tpr.price} $</p>
                    </div>
                </div>
            </Link>
        </div>)}
      </div>
      </>)   
  }