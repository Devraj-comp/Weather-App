import React from "react";
const api = {
  key: "d723f3bc8772316f4b3fc146a3d9beb5",
  base: "https://api.openweathermap.org/data/2.5/"
}



function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
      </main>

    </div>
  );
}

export default App;
