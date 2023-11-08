import React, { useState } from "react";
import MovieCard from "./MoviesCards";

const MovieList = ({ movies }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [data, setData] = useState();

  // const addMovie = () => {
  //   if (newMovie.title && newMovie.rating) {
  //     movies.push(newMovie);
  //     setFilteredMovies([...movies]);
  //     setNewMovie({ title: "", description: "", posterURL: "", rating: "" });
  //   }
  // };

  // const handleFilter = (filterType, filterValue) => {
  //   if (filterType === "title") {
  //     setFilteredMovies(
  //       movies.filter((movie) =>
  //         movie.title.toLowerCase().includes(filterValue.toLowerCase())
  //       )
  //     );
  //   } else if (filterType === "rating") {
  //     setFilteredMovies(movies.filter((movie) => movie.rating >= filterValue));
  //   }
  // };

console.log(movies)

  return (
    <div className="movie-list">
      <div className="filter">
        <input
          type="text"
          placeholder="Filter by title"
          onChange={(e) => handleFilter("title", e.target.value)}
        />
        <input
          type="number"
          placeholder="Filter by rating"
          onChange={(e) => handleFilter("rating", parseFloat(e.target.value))}
        />
      </div>
      <div className="movies  items-center  justify-center gap-5 grid grid-cols-4">
        {movies?.map((movie, index) => (
          <MovieCard key={index} title={movie.title} posterURL={movie.posterURL} description={movie.description} rating={movie.rating} />
        ))}
      </div>
      {/* <div className="add-movie">
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) =>
            setNewMovie({ ...newMovie, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={(e) =>
            setNewMovie({ ...newMovie, posterURL: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) =>
            setNewMovie({ ...newMovie, rating: parseFloat(e.target.value) })
          }
        />
        <button onClick={addMovie}>Add Movie</button>
      </div> */}
    </div>
  );
};

export default MovieList;
