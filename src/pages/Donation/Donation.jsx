import React, { useEffect, useState } from 'react';
import DonationCard from './DonationCard';

const Donation = () => {

    const [donation, setDonation] = useState([])
    const [notFound, setNotFound] = useState(false)
    const [dataLength, setDataLength] = useState(4)
    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donation'));
        if (donationItems) {
            setDonation(donationItems);
        }
        else {
            setNotFound("No Donation Found!");
        }

    }, []);
    const handleClear = () => {
        localStorage.clear();
        setDonation([]);
        setNotFound("No Donation Found!");
    };

    return (
        <div>
            {notFound ? <h1 className="h-[76vh] flex justify-center items-center text-6xl font-extrabold text-[#FF444A]">{notFound}</h1> :
                <div>

                    {donation.length > 0 && <button onClick={handleClear}
                        className="px-4 py-2 rounded-lg bg-[#FF444A] block mx-auto font-semibold text-white"
                    >
                        Clear All
                    </button>}
                    <div className="grid grid-cols-2 gap-5 px-16 pb-8 pt-8">
                        {
                            donation.slice(0, dataLength).map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                        }
                    </div>
                    <div className={dataLength === donation.length && 'hidden'} >
                        <button onClick={() => setDataLength(donation.length)}
                            className="px-4 py-2 rounded-lg bg-[#009444] block mx-auto font-semibold text-white mb-16"
                        >
                            See All
                        </button>
                    </div>

                </div>
            }
        </div>
    );
};

export default Donation;