import React, { useEffect, useState } from 'react';
import DetailsCard from '../Details/DetailsCard';
import DonationCard from './DonationCard';

const Donation = () => {

    const [donation, setDonation] = useState([])
    const [notFound, setNotFound] = useState("")
    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donation'));
        if (donationItems) {
            setDonation(donationItems);
        }
        else {
            setNotFound("No Donation Found!");
        }

    }, [])
    return (
        <div>
            {notFound ? <h1 className="h-[76vh] flex justify-center items-center text-6xl font-extrabold text-[#FF444A]">{notFound}</h1> :
                <div className="grid grid-cols-2 gap-5 p-16">
                    {
                        donation.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                    }






                </div>}
        </div>
    );
};

export default Donation;