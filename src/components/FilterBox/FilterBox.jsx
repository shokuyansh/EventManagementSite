import { dataRender,months,years } from "../../utils/DataRender";
import { useEffect, useState } from "react";
const FilterBox = ({getMonthYear}) =>{
    const [selectedMonth,setSelectedMonth]  = useState("Jan")
    const [selectedYear,setSelectedYear] = useState(2023)
    const MonthToRender = () =>{
        
        return dataRender(months);
    }
    const YearToRender = () =>{
        
        return dataRender(years);
    }
    const handleMonthChange = (e) =>{
        setSelectedMonth(e.target.value)
    }
    const handleYearChange = (e) =>{
        setSelectedYear(Number(e.target.value))
    }
    const updateParent=()=>{
        getMonthYear(selectedMonth,selectedYear)
    }
    const submitDetails=(e)=>{
        e.preventDefault()
        updateParent()
    }
    useEffect(()=>{
        updateParent()
    },[])

    
    return (
        
            <div>
                <form onSubmit={submitDetails}>
                    <label htmlFor="month">Month:</label>
                    <select value={selectedMonth} onChange={handleMonthChange}>
                        {MonthToRender()}
                    </select >
                    <label htmlFor="year">Year:</label>
                    <select value={selectedYear} onChange={handleYearChange}>
                        {YearToRender()}
                    </select>
                    <button type="submit">Search events</button>   
                </form>
            </div>
       
    )
}
export default FilterBox