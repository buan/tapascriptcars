import PropTypes from "prop-types"

export const IsPremium = ({ issPremium, onSetIsPremium }) => {
    return (
        <>
            <div className="basis-1/8">Is Premium <input type="checkbox" checked={issPremium} onChange={(e) => onSetIsPremium(e.target.checked)} /></div>
        </>
    )
}

IsPremium.propTypes = {
    issPremium: PropTypes.bool.isRequired,
    onSetIsPremium: PropTypes.func.isRequired,
}