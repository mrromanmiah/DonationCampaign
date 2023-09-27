import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const StatisticsPie = () => {
    const [donation, setDonation] = useState([]);

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donation'));
        if (donationItems) {
            setDonation(donationItems);
        }
    }, []);

    const yourDonation = donation.length || 0;
    const totalDonation = 12 - yourDonation;

    const data = [
        ["Task", "Hours per Day"],
        ["Your Donation", yourDonation],
        ["Total Donation", totalDonation]
    ];

    const options = {
        colors: ['#00C49F', '#FF444A'],
        legend: 'bottom'
    };

    return (
        <div>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />
        </div>
    );
};

export default StatisticsPie;
