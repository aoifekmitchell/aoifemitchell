import { useEffect, useState } from "react";
import get from "axios";


const Forecast = () => {
    const [posts, setPosts] = useState<any>([]); 
    const [cityName, setCityName] = useState<any>("");
    const [countryName, setCountryName] = useState<any>("");
    // const [types, setTypes] = useState<any>([])
     const [types, setTypes] = useState<any>([])
     const [minT, setMinTemp] = useState<any>([])
     const [maxT, setMaxTemp] = useState<any>([])
     const [weather, setWeather] = useState<any>([])
     const [dates, setDates] = useState<any>("");

    
    const fetchData = async() => {
        // use curly brackets to go into the object that is returned and access data
        const {data} = await get("https://api.openweathermap.org/data/2.5/forecast?q=" +cityName+"&units=metric&appid=3e2d927d4f28b456c6bc662f34350957")
        setPosts(data)
        GetForecast(data)
        setCityName(cityName)
        // console.log(data.list)
        console.log(posts)
        // console.log(types)
    }
    // useEffect(()=> {
    //     fetchData();
    // },[]);
 

    const GetForecast = (data: any) => {
        console.log (data.list)
        // let minTemp = [];
        // let maxTemp = [];
        const minTemp: number[] = []
        const maxTemp: number[] = []
        const wtypes : string[] = []
        const wDates : string[] = []
        const weather : string[] = [] 
        const country : string = data.city.country
        var index = 0 
        data.list.forEach((item : any) => {
            // get max/min temperatures for each day
            // minTemp.push(item.main.temp_min);
            // maxTemp.push(item.main.temp_max);
            // wDates.push(item.dt_txt);

            // 2023-02-09 15:00:00
            if ((item.dt_txt.substr(11,2)== 15 && item.dt_txt != wDates[0] )|| index == 0 ){
                console.log(item.dt_txt)
                index +=1 
                minTemp.push(item.main.temp_min);
                maxTemp.push(item.main.temp_max);
                wDates.push(item.dt_txt.substring(0,10));
                weather.push(item.weather[0].description);
                console.log(item.main.temp_min)
                console.log(item.main.temp_max)
                // get weather types for each day
                if(item.weather[0].main.toLowerCase() === "rainy" || item.weather[0].main.toLowerCase() === "rain") {
                    // let date = Object.keys(this.weatherDays).find(key => this.weatherDays[key] === val);
                    wtypes.push("Pack an umbrella!");
                }

                if(item.weather[0].main.toLowerCase() === "snow") {
                    // let date = Object.keys(this.weatherDays).find(key => this.weatherDays[key] === val);
                    wtypes.push("Don't forget your gloves!");
                }

                if(item.weather[0].main.toLowerCase() === "clear") {
                    // let date = Object.keys(this.weatherDays).find(key => this.weatherDays[key] === val);
                    wtypes.push("Pack some sunglasses!");
                }
                if(item.weather[0].main.toLowerCase() === "clouds") {
                    // let date = Object.keys(this.weatherDays).find(key => this.weatherDays[key] === val);
                    wtypes.push("Bring a jumper!");
                }
            }
            
        }

    )
    // console.log(wtypes)
    setTypes(wtypes)
    setMinTemp(minTemp)
    setMaxTemp(maxTemp)
    setDates(wDates)
    setWeather(weather)
    setCountryName(country)
}
  
    
return (
    <div>

            {/* <!-- enter a city to lookup --> */}
            <h3> Weather Forecast </h3>
            Please enter the name of a city <br />
            City: <input type="text" value={cityName} onChange={e => setCityName(e.target.value)}></input>
            <button onClick={fetchData}> Get Forecast </button>

             {/* <h2> { JSON.stringify(posts.list)}</h2> 
              <h2> { JSON.stringify(posts.city.name)}</h2>  
             <h2> {types[0]} </h2> */}
             {/* <h2> {posts.data}</h2>  */}

             <h3 className="table_header"> {cityName}</h3>
             <table>
               <tbody> 
                    <tr>
                        <th scope="col">Day</th>
                        <th scope="col">Min Temp</th>
                        <th scope="col">Max Temp</th>
                        <th scope="col">Weather</th>
                        <th scope="col">Suggestion</th>
                    </tr>
                    <tr>
                        <td>{dates[0]}</td>
                        <td>{minT[0]}</td>
                        <td>{maxT[0]}</td>
                        <td>{weather[0]}</td>
                        <td>{types[0]}</td>
                    </tr>
                    <tr>
                        <td>{dates[1]}</td>
                        <td>{minT[1]}</td>
                        <td>{maxT[1]}</td>
                        <td>{weather[1]}</td>
                        <td>{types[1]}</td>
                    </tr>
                    <tr>
                        <td>{dates[2]}</td>
                        <td>{minT[2]}</td>
                        <td>{maxT[2]}</td>
                        <td>{weather[2]}</td>
                        <td>{types[2]}</td>
                    </tr>
                    <tr>
                        <td>{dates[3]}</td>
                        <td>{minT[3]}</td>
                        <td>{maxT[3]}</td>
                        <td>{weather[3]}</td>
                        <td>{types[3]}</td>
                    </tr>
                    <tr>
                        <td>{dates[4]}</td>
                        <td>{minT[4]}</td>
                        <td>{maxT[4]}</td>
                        <td>{weather[4]}</td>
                        <td>{types[4]}</td>
                    </tr>
             </tbody>
             </table>


    </div>
)
}

    export default Forecast; 