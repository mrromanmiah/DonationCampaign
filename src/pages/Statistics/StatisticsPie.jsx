
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const StatisticsPie = () => {

    const [donation, setDonation] = useState([])

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donation'));
    setDonation(donationItems);
    

    }, []);
    const yourDonation = donation.length;
    const totalDonation = 12 - yourDonation
    

    const data = [
        ["Task", "Hours per Day"],
        ["Your Donation", yourDonation],
        ["Total Donation", totalDonation]
    ];

    const options = {
        title: "My Daily Activities",
    };

    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
        />
    );
};

export default StatisticsPie;