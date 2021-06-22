import React, { useEffect, useState } from 'react'
import DisplayData from '../components/DisplayData';
function FetchCovidData() {
    const [countryName,setCountryName]= useState("");
    const [data,setData]= useState([]);
    const [countryData, setCountryData]= useState([]);
    useEffect(()=>{

        fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort")
        .then((response)=> response.json())
        .then(setData)
        .catch((err)=>{
            console.log(err);
        })
        // console.log(data[0].active);
        // console.log(data[0].country);
    },[])
    // const {country}= data[0];
    
    

// console.log(data)
const selectHandler=(country)=>{
    console.log(country)
    fetch(`https://corona.lmao.ninja/v2/countries/${country}`)
    .then(response => response.json())
    .then(setCountryData)
    
}
console.log(countryData)

    return (
        <div>
            <select  onChange={(e)=>{
                selectHandler(e.target.value, e.id)
            }}>
          {
              data && data.map((data,indx)=>(
                  
                      <option key={indx} value={data.country}>{data.country}</option>
                    //   <DisplayData/>
                    //   {/* <div>{[post.body]}</div> */}
                    //   {console.log(data)}
                  
                //   console.log(data)
              ))
              
          }
          </select>
          <br/>
          <div>
          <DisplayData countryData={countryData}/>
          </div>
        </div>
    )
}

export default FetchCovidData
