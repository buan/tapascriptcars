import PropTypes from "prop-types"
import { CarRow } from "./CarRow"

export const CarList = ({ Cars, searchCar, issPremium }) => {
    const rows = [];

    Cars.forEach((car) => {
        if (car.title.toLowerCase().indexOf(searchCar.toLowerCase()) === -1) {
            return;
        }

        if(!car.isPremium && issPremium == !car.isPremium) {
            return;
        }
        rows.push(
            <li key={car.id} className="basis-1/3 items-center bg-white shadow rounded-lg p-4">
                <CarRow car={car} />
            </li>

        );
    }
    );
    return (
        <>
            <ul className="flex flex-wrap space-y-4">
                {rows}
            </ul>
        </>
    )
}

CarList.propTypes = {
    Cars: PropTypes.array.isRequired,
    searchCar: PropTypes.string.isRequired,
    issPremium: PropTypes.bool.isRequired,
}