import axios from 'axios'

const apiurl = 'https://covid19.mathdro.id/api'

export const fetchdata = async () =>{
    try {
        const { data: {deaths,recovered,confirmed,lastUpdate} } 
        = await axios.get(apiurl);
        return {deaths,recovered,confirmed,lastUpdate}
    } catch (error) {
        
    }
}
export const fetchcountrydata = async (country) =>{
    let changedUrl = apiurl;
    if(country){
        changedUrl=`${apiurl}/countries/${country}`
    }
    try {
        const { data: {deaths,recovered,confirmed,lastUpdate} } 
        = await axios.get(changedUrl);
        return {deaths,recovered,confirmed,lastUpdate}
    } catch (error) {
        console.log(error)
        
    }
}

export const fetchCounrty = async () =>{
    try {
        const {data : {countries}}  =await axios.get(`${apiurl}/countries`)
        console.log(countries)
        return countries.map((country) => country.name)
    } catch (error) {
        
    }
}

export const fetchDailyData = async ()=>{
    try {
        const {data} = await axios.get(`${apiurl}/daily`)
        const modifyData=data.map((DailyData)=>({
            confirmed:DailyData.confirmed.total,
            recovered:DailyData.recovered.total,
            deaths:DailyData.deaths.total,
            date:DailyData.reportDate,
        }));
        return modifyData; 
    } catch (error) {
        
    }

}


//     try {
//         const { data } = await axios.get(apiurl);
//         const modifieddata{
//             deaths: data.datrhs,
//             recovered:data.recovered,
//             infected:data.infected,
//             lastUpdate:data.
//         }
//         return response;
