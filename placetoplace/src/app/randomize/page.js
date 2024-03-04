import '../(styles)/randomize.css';

const randomize = () => {
    return ( 
    <>
        <h1 className='page-title'>Choose A Region</h1>
        
        <div className='names'>
        <h2>Anywhere</h2>
        </div>
        <div className='top-region'>
            <button className= {"btn btn-shadow-drop btn-shadow-drop--black"}><img className='all'  src="https://t4.ftcdn.net/jpg/03/06/49/25/360_F_306492512_Cnv1Ie8ZZ1qWMhtFJAupzafY9DGf5Bi8.jpg" alt="" /></button>
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
                <button className= {"btn btn-shadow-drop btn-shadow-drop--black"}><img className='img' src="https://static.vecteezy.com/system/resources/previews/003/087/809/non_2x/outline-simple-map-of-africa-free-vector.jpg" alt="" /></button>
            <div className='dropimg'>
                <button className= {"btn btn-shadow-drop btn-shadow-drop--black"}><img className='img' src="https://gisgeography.com/wp-content/uploads/2023/12/Asia-Countries-Blank-Map.jpg" alt="" /></button>
            </div>
            <div className='dropimg'>
                <button className= {"btn btn-shadow-drop btn-shadow-drop--black"}><img className='img' src="https://i.pinimg.com/564x/55/a0/1f/55a01f624fbd1036b4090d2f6a846ea5.jpg" alt="" /></button>
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
                <button className= {"btn btn-shadow-drop btn-shadow-drop--black"}><img className='img' src="https://static.vecteezy.com/system/resources/previews/003/087/855/original/outline-simple-map-of-europe-free-vector.jpg" alt="" /></button>
            <div className='dropimg'>
                <button className= {"btn btn-shadow-drop btn-shadow-drop--black"}><img className='img' src="https://upload.wikimedia.org/wikipedia/commons/4/49/Outline_North_America_%28PSF%29.png" alt="" /></button>
            </div>
            <div className='dropimg'>
                <button className= {"btn btn-shadow-drop btn-shadow-drop--black"}><img className='img' src="https://static.vecteezy.com/system/resources/previews/003/087/842/original/outline-simple-map-of-south-america-free-vector.jpg" alt="" /></button>
            </div>
        </div>
      
    </>
    
    );
  }
  
  export default randomize;