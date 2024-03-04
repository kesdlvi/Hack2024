import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import '../(styles)/randomize.css';
import continentGpt from '../continentgpt.mjs';
import gptTrip from '../gpt.mjs';
import styles from '../(styles)/Home.modules.css'


const randomize = () => {
    const [continent, setContinent] = useState("");
    const [response, setResponse] = useState(null);
    const [showSelector, setShowSelector] = useState(true);
    const [showPlan, setShowPlan] = useState(false);
    const [getInfo, setGetInfo] = useState(false);
    const [info, setShowInfo] = useState(false);
    const [travelTips, setTravelTips] = useState(false);
    const [country, setCountry] = useState('')

    //States for arrays
    const [infoArray, setInfoArray] = useState(null);
    const [travelArray, setTravelArray] = useState(null);
    const [foodArray, setFoodArray] = useState(null);

    const planTrip = async () => {
        const country = await continentGpt(continent)
        setCountry(country)
        const tripResponse = await gptTrip(country, "less than"); // Call gptTrip function
        setResponse(tripResponse); // Set the response to state
        console.log(response)
        setGetInfo(true); // Set loading state to false
    };
    if(response && getInfo) {
        setInfoArray(response[1].split(/\d+\./).filter(Boolean));
        setTravelArray(response[2].split(/\d+\./).filter(Boolean));
        setFoodArray(response[3].split(/\d+\./).filter(Boolean));
        setGetInfo(false)
      }

    return ( 
    <>
    {showSelector && (
        <div>
            <h1 className='page-title'>Choose A Region</h1>
        
        <div className='names'>
        <h2>Anywhere</h2>
        </div>
        <div className='top-region'>
            <button 
                className= {"btn btn-shadow-drop btn-shadow-drop--black"}
                onClick={() => {setContinent("Anywhere"); setShowSelector(false); setShowPlan(true); planTrip();}}
                >
                    <img className='all'  src="https://t4.ftcdn.net/jpg/03/06/49/25/360_F_306492512_Cnv1Ie8ZZ1qWMhtFJAupzafY9DGf5Bi8.jpg" alt="" />
            </button>
        </div>
        <div className='names'>
        <h2>Africa</h2>
        <div className='space1'> <h2>Asia</h2> </div>
        <div className='space1'> <h2>Austrailia</h2> </div>
        </div>
        {/* <div className='names'>
        </div>
        <div className='names'>
        </div> */}
        <div className='middle-region'>
                <button className= {"btn btn-shadow-drop btn-shadow-drop--black"} onClick={() => {setContinent("Africa"); setShowSelector(false); setShowPlan(true); planTrip();}}><img className='img' src="https://static.vecteezy.com/system/resources/previews/003/087/809/non_2x/outline-simple-map-of-africa-free-vector.jpg" alt="" /></button>
            <div className='dropimg'>
                <button className= {"btn btn-shadow-drop btn-shadow-drop--black"} onClick={() => {setContinent("Asia"); setShowSelector(false); setShowPlan(true); planTrip();}}><img className='img' src="https://gisgeography.com/wp-content/uploads/2023/12/Asia-Countries-Blank-Map.jpg" alt="" /></button>
            </div>
            <div className='dropimg'>
                <button className= {"btn btn-shadow-drop btn-shadow-drop--black"} onClick={() => {setContinent("Austrailia"); setShowSelector(false); setShowPlan(true); planTrip()}}><img className='img' src="https://i.pinimg.com/564x/55/a0/1f/55a01f624fbd1036b4090d2f6a846ea5.jpg" alt="" /></button>
            </div>
        </div>
        <div className='names'>

            
        <h2>Europe</h2>
        <div className='space3'> <h2>North America</h2> </div>
        <div className='space4'> <h2>South America</h2> </div>
        </div>
        <div className='names'>
        </div>
        <div className='names'>
        </div>
        <div className='bottom-region'>
                <button className= {"btn btn-shadow-drop btn-shadow-drop--black"} onClick={() => {setContinent("Europe"); setShowSelector(false); setShowPlan(true); planTrip()}}><img className='img' src="https://static.vecteezy.com/system/resources/previews/003/087/855/original/outline-simple-map-of-europe-free-vector.jpg" alt="" /></button>
            <div className='dropimg'>
                <button className= {"btn btn-shadow-drop btn-shadow-drop--black"} onClick={() => {setContinent("North America"); setShowSelector(false); setShowPlan(true); planTrip();}}><img className='img' src="https://upload.wikimedia.org/wikipedia/commons/4/49/Outline_North_America_%28PSF%29.png" alt="" /></button>
            </div>
            <div className='dropimg'>
                <button className= {"btn btn-shadow-drop btn-shadow-drop--black"} onClick={() => {setContinent("South America"); setShowSelector(false); setShowPlan(true); planTrip();}}><img className='img' src="https://static.vecteezy.com/system/resources/previews/003/087/842/original/outline-simple-map-of-south-america-free-vector.jpg" alt="" /></button>
            </div>
        </div>
        </div>
    )}
    {response && showPlan && (
            
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
        
    </>
    
    );
  }
  
  export default randomize;