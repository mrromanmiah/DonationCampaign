import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const Details = () => {
    const [details, setDetails] = useState()
    const { id } = useParams();
    const cards = useLoaderData();
    const idInt = parseInt(id);
    useEffect(() => {
        const findDetails = cards?.find(card => card.id === idInt);
        setDetails(findDetails);
    }, [idInt, cards])

    return (
        <div>
            <DetailsCard card={details}></DetailsCard>
        </div>
    );
};

export default Details;