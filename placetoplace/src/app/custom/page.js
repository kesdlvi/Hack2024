import { useState } from "react";
import gptTrip from "../gpt.mjs";
const CustomPage = () => {
    const [response, setResponse] = useState(null);
    const [country, setCountry] = useState("");
    const [tripTime, setTripTime] = useState(null);
    const [isLoading, setIsLoading] = useState(false); 

    // Function to handle planning trip
    const planTrip = async () => {
        setIsLoading(true); // Set loading state to true
        const tripResponse = await gptTrip(country); // Call gptTrip function
        setResponse(tripResponse); // Set the response to state
        setIsLoading(false); // Set loading state to false
    };

    const handleCountryChange = (event) => {
        setCountry(event.target.value); // Update the country state with input value
    };
    const renderData = (data) => {
        return Object.entries(data).map(([key, value]) => {
          if (typeof value === 'object') {
            return (
              <div key={key}>
                <h3>{key}</h3>
                {renderData(value)}
              </div>
            );
          } else {
            return (
              <div key={key}>
                <strong>{key}:</strong> {value}
              </div>
            );
          }
        });
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
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold">City?</h3>
                        <input type="text" className="mt-2 p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Length of trip</h3>
                        <select 
                            className="mt-2 p-2 border border-gray-300 rounded-md"
                            style={{color: "black"}}
                        >
                            <option value="1">Less than a week</option>
                            <option value="1">A week</option>
                            <option value="1">More than a week</option> 
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
                        <h1>Your Trip to {country}</h1>
                        {response[0]}
                    </div>
                    <div>
                        <h1>Information</h1>
                        {response[1]}
                    </div>
                    <div>
                        <h1>Make the most of your trip</h1>
                        {response[2]}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CustomPage;
