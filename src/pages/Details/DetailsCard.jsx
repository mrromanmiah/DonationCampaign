

const DetailsCard = ({ card }) => {
    const {title} = card || {}

    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default DetailsCard;