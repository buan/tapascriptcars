import PropTypes from "prop-types"

export const SearchBar = ({ searchCar, onSearchCars }) => {
    return (
        <>
            <div className="basis-1/8 border border-black-500/50 bg-white rounded-lg mb-3 mr-3">
                <input type="text" className=""
                    placeholder="Search Cars..."
                    value={searchCar}
                    onChange={(e) => onSearchCars(e.target.value)}
                />
            </div>
        </>
    )
}
SearchBar.propTypes = {
    searchCar: PropTypes.string.isRequired,
    onSearchCars: PropTypes.func.isRequired,
}