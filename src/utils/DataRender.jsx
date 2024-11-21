export const dataRender = (dataArray) =>{
    return dataArray.map((data,index)=>{
        return (
        <option key={index} value={data}>
            {data}
        </option>
        )
    })
}
export const months = [
    "Jan","Feb","March","April","May","June","July","August","September","October","November","December"
]
export const years = [
    2023,2024
]