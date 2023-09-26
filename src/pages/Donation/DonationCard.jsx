

const DonationCard = ({ card }) => {
    const { listimage, category, title, primarycolor, cardbg, categorybg, amount } = card || {}
    return (
        <div>
            <div className="flex rounded-lg overflow-hidden" style={{ backgroundColor: cardbg }}>
                <img src={listimage} alt="Movie" />
                <div className="card-body">
                    <div>
                        <p className="rounded px-3 py-1" style={{ color: primarycolor, backgroundColor: categorybg, display: 'inline-block' }}>{category}</p>
                    </div>

                    <h2 className="card-title text-xl text-[#0B0B0B]">{title}</h2>
                    <h3 className="font-semibold" style={{ color: primarycolor }}>${amount}</h3>
                    <div className="card-actions justify-start">
                        <button className="text-white text-lg font-semibold px-4 py-2 rounded" style={{ background: primarycolor }}>View Details</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DonationCard;