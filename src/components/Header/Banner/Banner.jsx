

const Banner = () => {
    return (
        <div>
            <div className="h-[77vh] flex flex-col justify-center items-center text-center">
                <h1 className="text-[#0B0B0B] text-5xl font-bold mb-10">I Grow By Helping People In Need</h1>
                <div className="flex items-center justify-center">
                    <input className="px-4 py-2 border-2 rounded-l-lg w-96" type="search" name="" id="" placeholder="Search here...." />
                    <button className="bg-[#FF444A] py-2 px-7 border-2 border-[#FF444A] rounded-r-lg text-white font-semibold text-base hover:font-bold">Search</button>
                </div>
            </div>
        </div >
    );
};

export default Banner;