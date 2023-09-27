import { Link } from "react-router-dom";

const DonationCard = ({ card }) => {
    const { id, listimage, category, title, primarycolor, cardbg, categorybg, amount } = card || {}
    return (
        <div>
            <div className="flex rounded-lg lg:gap-6 md:gap-6 gap-2" style={{ backgroundColor: cardbg }}>
                <img src={listimage} alt="Donated" />
                <div className="lg:py-6 md:py-6 py-10 space-y-1">
                    <div>
                        <p className="lg:text-base md:text-base text-xs rounded px-3 py-1" style={{ color: primarycolor, backgroundColor: categorybg, display: 'inline-block' }}>{category}</p>
                    </div>
                    <h2 className="lg:text-2xl md:text-2xl text-xs text-[#0B0B0B] lg:font-semibold md:font-semibold font-extrabold">{title}</h2>
                    <h3 className="font-semibold lg:text-base md:text-base text-xs" style={{ color: primarycolor }}>${amount}.00</h3>
                    <Link to={`/cards/${id}`}>
                        <div className="mt-3">
                            <button className="text-white lg:text-lg md:text-lg text-xs font-semibold lg:px-4 md:px-4 px-2 lg:py-2 md:py-2 py-1 rounded" style={{ background: primarycolor }}>View Details</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;