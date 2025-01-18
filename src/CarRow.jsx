import PropTypes from "prop-types";
import { CarDetails } from "./CarDetails"

export const CarRow = ({car}) => {
    return (
        <>
             <CarDetails brand={car.brand} year={car.year} price={car.price} premium={car.premium} title={car.title} isPremium={car.isPremium}/>
        </>
    )
}

CarRow.propTypes = {
    car: PropTypes.object.isRequired,
};  