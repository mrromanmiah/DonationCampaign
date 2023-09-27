import Swal from 'sweetalert2';

const DetailsCard = ({ card }) => {
    const { id, detailsimage, primarycolor, amount, title, description } = card || {}

    const handleAddToDonation = () => {
        const addedDonationItems = [];
        const donationItems = JSON.parse(localStorage.getItem('donation'));
        if (!donationItems) {
            addedDonationItems.push(card);
            localStorage.setItem('donation', JSON.stringify(addedDonationItems));
            Swal.fire(
                'Thanks!',
                'Grateful for your generous support.',
                'success'
            )
        }
        else {
            const isExist = donationItems.find(card => card.id === id)
            if (!isExist) {
                addedDonationItems.push(...donationItems, card);
                localStorage.setItem('donation', JSON.stringify(addedDonationItems));
                Swal.fire(
                    'Thanks!',
                    'Grateful for your generous support.',
                    'success'
                )
            }
            else {
                Swal.fire(
                    'Oops!',
                    'This item is already in your donation list.',
                    'error'
                )
            }

        }
    };

    return (
        <div className="px-16 py-8">
            <div className="relative">
                <div className="rounded-lg overflow-hidden">
                    <img src={detailsimage} alt="" className="w-full" />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-[#0B0B0B80] lg:h-[19%] h-[30%] rounded-b-lg"></div>
                <button onClick={handleAddToDonation} className="absolute lg:-mt-[90px] md:-mt-[80px] -mt-[35px] lg:ml-7 ml-3 text-white lg:text-xl md:text-lg text-xs font-semibold lg:px-6 lg:py-4 md:px-6 md:py-4 px-3 py-1 rounded" style={{ background: primarycolor }}>Donate ${amount}</button>
            </div>
            <div>
                <h1 className="text-[#0B0B0B] text-4xl font-bold pt-14">{title}</h1>
                <p className="text-[#0b0b0bb3] text-justify pt-8 pb-14">{description}</p>
            </div>
        </div>
    );
};

export default DetailsCard;