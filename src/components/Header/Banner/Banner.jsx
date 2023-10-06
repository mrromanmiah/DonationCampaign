/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Banner = ({ handleSearch }) => {
    const [search, setSearch] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const handleSearchClick = () => {
        if (isSearching) {
            setSearch("");
            handleSearch("");
        } else {
            handleSearch(search);
        }
        setIsSearching(!isSearching);
    };
    const handleSearchChange = (event) => {
        const data = event.target.value;
        setSearch(data);
    };

    return (
        <div>
            <div className="h-[77vh] flex flex-col justify-center items-center text-center">
                <h1 className="text-[#0B0B0B] lg:text-5xl md:text-3xl text-lg font-bold mb-10">
                    I Grow By Helping People In Need
                </h1>
                <div className="flex items-center justify-center">
                    <input
                        className="px-4 py-2 border-2 rounded-l-lg lg:w-96"
                        type="text"
                        name=""
                        id=""
                        placeholder="Search here...."
                        value={search}
                        onChange={handleSearchChange}
                    />
                    <button
                        className={`bg-[#FF444A] py-2 px-7 border-2 border-[#FF444A] rounded-r-lg text-white font-semibold text-base hover:font-bold`}
                        onClick={handleSearchClick}
                    >
                        {isSearching ? "Clear" : "Search"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
