import { useParams } from "react-router-dom";

export default function Category() {
    const {id} = useParams();

    return(
        <>
            <h1>Category {id}</h1>
        </>
    )
}