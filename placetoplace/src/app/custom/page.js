import { useState } from "react";
import Typewriter from 'typewriter-effect';
import gptTrip from "../gpt.mjs";
import styles from '../(styles)/Home.modules.css'

const CustomPage = () => {
    const [response, setResponse] = useState(null);
    const [country, setCountry] = useState("");
    const [tripTime, setTripTime] = useState(null);
    const [isLoading, setIsLoading] = useState(false); 
    const [itinerary, showItinerary] = useState(false);
    const [info, setShowInfo] = useState(false);
    const [travelTips, setTravelTips] = useState(false);
    const [getInfo, setGetInfo] = useState(false);
    
    //States for arrays
    const [infoArray, setInfoArray] = useState(null);
    const [travelArray, setTravelArray] = useState(null);
    const [foodArray, setFoodArray] = useState(null);

    // Function to handle planning trip
    const planTrip = async () => {
        setIsLoading(true); // Set loading state to true
        const tripResponse = await gptTrip(country, tripTime); // Call gptTrip function
        setResponse(tripResponse); // Set the response to state
        setIsLoading(false); // Set loading state to false
        setGetInfo(true); // Set loading state to false
    };

    const handleCountryChange = (event) => {
        setCountry(event.target.value); // Update the country state with input value
    };
    
      if(response && getInfo) {
        setInfoArray(response[1].split(/\d+\./).filter(Boolean));
        setTravelArray(response[2].split(/\d+\./).filter(Boolean));
        setFoodArray(response[3].split(/\d+\./).filter(Boolean));
        setGetInfo(false)
      }
      const handleTripTimeChange = (event) => {
        setTripTime(event.target.value); // Update the trip time state with selected value
    };

    return (
        <div className="container mx-auto px-4 flex flex-col items-center">
            {!response && (
                <div>
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold">Enter a Country</h2>
                        <input 
                            type="text" 
                            className="mt-2 p-2 border border-gray-300 rounded-md" 
                            value={country}
                            onChange={handleCountryChange}
                            style={{color: "black"}}
                        />
                        
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Length of trip</h3>
                        <select 
                            className="mt-2 p-2 border border-gray-300 rounded-md"
                            style={{color: "black"}}
                            value={tripTime} 
                            onChange={handleTripTimeChange} 
                        >
                            <option value="Less">Less than a week</option>
                            <option value="Exact">A week</option>
                            <option value="More">More than a week</option> 
                        </select>
                    </div>
                    <button 
                        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={planTrip}
                    >
                        {isLoading ? "Loading..." : "Plan Trip"}
                    </button>
                </div>
            )}
            {response && (
                <div>
                    <div>
                        <h1 className={`text-lg font-bold mt-4 title ${styles.fade}`}>Your Trip to {country}</h1>
                            <div>
                                <Typewriter
                                    options={{
                                    strings: response[0],
                                    autoStart: true,
                                    loop: false,
                                    }}
                                />
                            </div>
                        
                    </div>
                    <div>
                        <h1 
                            className={`text-lg font-bold mt-4 title title-color ${styles.fade}`}
                            onClick={()=> setShowInfo(!info)}
                            style={{cursor:"pointer"}}
                        >
                            Information
                        </h1>
                        {info && (
                            <div>
                                <ul>
                                    {infoArray.map((sentence, index) => (
                                    <li key={index} className="mb-2">{sentence.trim()}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                            
                    </div>
                    <div>
                        <h1 
                            className={`text-lg font-bold mt-4 title title-color ${styles.fade}`}
                            onClick={()=> setTravelTips(!travelTips)}
                            style={{cursor:"pointer"}}
                        >
                            Make the most of your trip
                        </h1>
                        
                        {travelTips && (
                            <div>
                                <h1 style={{fontSize:"2rem"}}>Travel Tips</h1>
                                    <div>
                                        <ul>
                                            {travelArray.map((sentence, index) => (
                                            <li key={index} className="mb-2">{sentence.trim()}</li>
                                            ))}
                                        </ul>
                                    </div>
                                <h1 style={{fontSize:"2rem"}} >Food Recccomendations</h1>
                                    <div>
                                        <ul>
                                            {foodArray.map((sentence, index) => (
                                            <li key={index} className="mb-2">{sentence.trim()}</li>
                                            ))}
                                        </ul>
                                    </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CustomPage;
