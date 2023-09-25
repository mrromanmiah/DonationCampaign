import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Header/Banner/Banner";



const Home = () => {

    const cards = useLoaderData()

    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/4NB4zB2/Banner-10.png')] bg-no-repeat bg-cover bg-center">
            <Banner></Banner>
            </div>
            
            <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;