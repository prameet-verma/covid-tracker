import React from 'react'
import './display.css';
function DisplayData({countryData}) {
    // console.log("From Display",countryData)
    return (
        <div>
             <br/>
           { 
               countryData.country&&
                    <div className="details-container">
                         <img src={countryData.countryInfo.flag}/>
                        <div className="details" >
                       
                        <h2>Country: {countryData.country} </h2>
                        <h3 >Total cases: {countryData.cases}</h3>
                        <h3 style={{color: "orange"}}>Active cases: {countryData.active}</h3>
                        <h3 style={{color: "green"}}>Recovered cases: {countryData.recovered}</h3>
                        <h3
                        style={{color: "red"}}
                        >Deaths: {countryData.deaths}</h3>
                        </div>
                    </div>
           }
        </div>
    )
}

export default DisplayData
