import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const [details, setDetails] = useState({})

    const { id } = useParams()
    const cards = useLoaderData()
    useEffect(() => {
        const findCards = cards?.find(card => card.id === id)
        setDetails(findCards)
    }, [id, cards])

    return (
        <div>
            roman
        </div>
    );
};

export default Details;