import { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

function App() {


 

  
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  function handleSearch() {
    if (search.trim() === "") {
      setError("Please enter a movie title.");
      return;
    }
    setError("")
    setLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`)
    .then((response) => response.json())
    .then((data) => {
      
      if(data.Response === "True") {
        setMovies(data.Search);
      setError("")
      
} else {
  setMovies([])
  setError(data.Error);
  
}
    })
.catch(() => {
        setMovies([]);
        setError("Something went wrong. Please try again");
})
      
 .finally(() => {
        setLoading(false);
     
    });

    
  }

  return (


<div>
    <h1>Movie Search</h1>

    <SearchBar
  search={search}
  setSearch={setSearch}
  handleSearch={handleSearch}
  loading={loading}
/>

<MovieList movies={movies} />
   

      {loading && (
  <p>Loading...</p>
)}
      {error && ( <p>{error}</p>
      )}
      
      {movies.length > 0 && (
         <p>{movies.length} movies found</p>
      )}
     
      
     
     </div>

     
  



    
    
  );
}

export default App;
