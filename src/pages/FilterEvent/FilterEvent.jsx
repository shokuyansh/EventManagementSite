import { useState } from "react";
import FilterBox from "../../components/FilterBox/FilterBox"
import SearchEventList from "../../components/SearchEventList/SearchEventList"
import Navigation from "../../components/Navigation/Navigation";

const FilterEvent = ()=>{
    const [monthYear,setMonthYear] = useState({
        selectedMonth:null,
        selectedYear:null
    })
    const getMonthYear = (selectedMonth,selectedYear) =>{
        console.log(selectedMonth,selectedYear)
        setMonthYear(
            {selectedMonth,selectedYear}
        )
    }
    return (
        <div>
        <Navigation></Navigation>
        <FilterBox getMonthYear={getMonthYear}></FilterBox>
        <SearchEventList monthYear={monthYear}></SearchEventList>
        </div>
    )
}
export default FilterEvent