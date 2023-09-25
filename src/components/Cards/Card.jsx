import { Link } from "react-router-dom";


const Card = ({ card }) => {

    const { id, cardimage, category, title, primarycolor, cardbg, categorybg } = card || {}

    return (
        <div>
            <Link to={`/cards/${id}`}>
                <div className="card card-compact rounded-lg" style={{ backgroundColor: cardbg }}>
                    <figure><img src={cardimage} alt="Donation card image" /></figure>
                    <div className="card-body">
                        <div>
                            <p className="rounded px-3 py-1" style={{ color: primarycolor, backgroundColor: categorybg, display: 'inline-block' }}>{category}</p>
                        </div>

                        <h2 className="card-title text-lg" style={{ color: primarycolor }}>{title}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;