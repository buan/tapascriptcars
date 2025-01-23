import PropTypes from "prop-types"
import { IsPremium } from "./IsPremium"
import { SearchBar } from "./SearchBar"

export const Search = ({searchCar,onSearchCars,issPremium,onSetIsPremium}) => {
    return (
        <>
            <div className="flex flex-row">
                <SearchBar searchTerm onSearchCars={onSearchCars} searchCar={searchCar}/>
                <IsPremium issPremium={issPremium} onSetIsPremium={onSetIsPremium}/>
            </div>
        </>
    )
}

Search.propTypes = {
    searchCar: PropTypes.string.isRequired,
    onSearchCars: PropTypes.func.isRequired,
    issPremium: PropTypes.bool.isRequired,
    onSetIsPremium: PropTypes.func.isRequired,
}