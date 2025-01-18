import { CarRow } from "./CarRow"

export const CarList = () => {
    const Cars = [

        { id: 1, title: "Luxury Sedan", brand: "Mercedes", year: 2023, price: 80000, isPremium: true },
        { id: 2, title: "Family SUV", brand: "Toyota", year: 2022, price: 45000, isPremium: false },
        { id: 3, title: "Sports Car", brand: "Porsche", year: 2023, price: 120000, isPremium: true },
        { id: 4, title: "Electric Hatchback", brand: "Nissan", year: 2022, price: 35000, isPremium: false },
        { id: 5, title: "Luxury SUV", brand: "BMW", year: 2023, price: 90000, isPremium: true },

    ]
    return (
        <><div>
            <ul className="flex flex-wrap space-y-4">
                {Cars.map((car) => (
                    <li
                        key={car.id}
                        className="basis-1/3 items-center bg-white shadow rounded-lg p-4"
                    >
                        <CarRow car={car} />
                    </li>
                ))}
            </ul>
            </div>
        </>
    )
}