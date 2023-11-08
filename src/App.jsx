import "./App.css";
import MoviesList from "./Component/MoviesList";
import MoviesCards from "./Component/MoviesCards";
import data from "./assets/data.json";
import Filter from "./Component/Filter";
function App() {
  return (
    <>
    
      <MoviesList movies={data} />
      <MoviesCards/>
      {/* <Filter /> */}
    </>
  );
}

export default App;
