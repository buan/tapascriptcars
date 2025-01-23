import { useState } from "react"
import { CarList } from "./CarList"
import { Header } from "./Header"
import { Search } from "./Search"

export const TapascriptCars = () => {
    const [searchCar, setSearchCar] = useState('');
    const [issPremium, setIssPremium] = useState(false);
    const onSearchCars = (car) => {
        setSearchCar(car);
    }

    const onSetIsPremium = (val) => {
        setIssPremium(val);
    }

    const Cars = [
        { id: 1, title: "Luxury Sedan", brand: "Mercedes", year: 2023, price: 80000, isPremium: true },
        { id: 2, title: "Family SUV", brand: "Toyota", year: 2022, price: 45000, isPremium: false },
        { id: 3, title: "Sports Car", brand: "Porsche", year: 2023, price: 120000, isPremium: true },
        { id: 4, title: "Electric Hatchback", brand: "Nissan", year: 2022, price: 35000, isPremium: false },
        { id: 5, title: "Luxury SUV", brand: "BMW", year: 2023, price: 90000, isPremium: true },

    ]

    return (
        <>
            <Header />
            <Search onSearchCars={setSearchCar} searchCar={searchCar} issPremium={issPremium} onSetIsPremium={setIssPremium} />
            <CarList searchCar={searchCar} Cars={Cars} issPremium={issPremium} />
        </>
    )
}