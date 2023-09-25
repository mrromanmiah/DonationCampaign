

const DetailsCard = ({ card }) => {
    const { detailsimage, primarycolor, amount, title, description } = card || {}

    return (
        <div className="px-16 py-8">
            <div className="relative">
                <div className="rounded-lg overflow-hidden">
                    <img src={detailsimage} alt="" className="w-full" />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-[#0B0B0B80] h-[19%] rounded-b-lg"></div>
                <button className="absolute -mt-[85px] ml-7 text-white text-xl font-semibold px-6 py-4 rounded" style={{ background: primarycolor }}>Donate ${amount}</button>
            </div>
            <div>
                <h1 className="text-[#0B0B0B] text-4xl font-bold pt-14">{title}</h1>
                <p className="text-[#0b0b0bb3] text-justify pt-8 pb-14">{description}</p>
            </div>
        </div>
    );
};

export default DetailsCard;