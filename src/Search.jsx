import { IsPremium } from "./IsPremium"
import { SearchBar } from "./SearchBar"

export const Search = () => {
    return (
        <>
            <div className="flex flex-row">
                <SearchBar />
                <IsPremium />
            </div>
        </>
    )
}