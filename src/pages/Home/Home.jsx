import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Header/Banner/Banner";

const Home = () => {
    const cards = useLoaderData();
    const [filteredCards, setFilteredCards] = useState(cards);
    const handleSearch = (search) => {
        if (search === "") {
            setFilteredCards(cards);
        } else {
            const newFilteredCards = cards.filter((card) =>
                card.category.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredCards(newFilteredCards);
        }
    };

    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/4NB4zB2/Banner-10.png')] bg-no-repeat bg-cover bg-center">
                <Banner handleSearch={handleSearch}></Banner>
            </div>
            <Cards cards={filteredCards}></Cards>
        </div>
    );
};

export default Home;
