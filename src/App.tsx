import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  const dataApi = async () => {
    const api = await fetch(
      "https://rickandmortyapi.com/api/character/?page=2"
    );
    const { results } = await api.json();
    setData(results);
  };

  console.log(data);
  return (
    <>
      <header className="App-Header">
        <h1 className="title"> App Rick and Morty</h1>
        <button className="btn-search" onClick={dataApi}>
          Buscar
        </button>
      </header>
    </>
  );
}

export default App;
