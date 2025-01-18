import PropTypes from "prop-types";
export const CarDetails = ({ brand, year, price, title, isPremium }) => {
    return (
        <>
            <div>
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-gray-600">Brand: {brand}</p>
                <p className="text-gray-600">Year: {year}</p>
                <p className="text-gray-600">Price: {price}</p>
                <p className="text-gray-600">Premium: {isPremium ? 'Yes' : 'No'}</p>
            </div>
        </>
    )
}
CarDetails.propTypes = {
    brand: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired
}