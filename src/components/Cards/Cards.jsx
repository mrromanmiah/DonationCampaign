import Card from "./Card";


const Cards = ({ cards }) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-16 gap-6 py-16">
            {
                cards?.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;