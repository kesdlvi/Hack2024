const Home = () => {
  return (
    <div>
      <div className="bg-blue-500 text-white p-4">
        Place to Place
      </div>
      <div className="container mx-auto px-4">
        <div className="text-lg font-bold mt-4">
          Where to?
        </div>
        <div className="mt-4">
          <input type="text" className="border border-gray-300 rounded-lg p-2 w-full" placeholder="Enter your search..." />
        </div>
        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            Pick for me
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Find
          </button>
        </div>
      </div>  
    </div>
  );
}


export default Home;