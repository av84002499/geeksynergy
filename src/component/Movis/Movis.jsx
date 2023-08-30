import React, { useEffect, useState } from 'react'

const Movis = () => {
  const [movies, setMovies] = useState([])
  const fetchMoviehandler = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "category": "movies",
      "language": "kannada",
      "genre": "all"
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://hoblist.com/api/movieList", requestOptions)
      .then(response => response.text())
      .then(data => JSON.parse(data))
      .then(result => {
        let movies = result.result;
        const sortedMovies = [...movies].sort((a, b) => b.voting - a.voting);
        console.log("sortedMovies", sortedMovies)
        setMovies(sortedMovies); // Assuming you have a state variable named 'movies' to store the sorted movies
      })
      .catch(error => console.log('error', error));
  }


  useEffect(() => {
    fetchMoviehandler()
  }, [])
  // console.log("movies",movies)

  return (
    <>
      <div>
        {movies && movies.map((item) => (
          <div class="card d-flex m-3 border-primary mb-3  " style={{ width: "38rem" }} key={item._id}>
            <div class="row no-gutters">

              <div class="voting-component col-md-2 d-flex flex-column align-items-center justify-content-center">
                <i class="bi bi-caret-up-fill"></i>
                <span>{item.totalVoted}</span>
                <i class="bi bi-caret-down-fill"></i>
                <span>Votes</span>
              </div>

              <div class="col-md-4">
                <img class="card-img m-3 d-flex flex-column" src={item.poster} alt="Card image" style={{ width: "10rem", height: "18rem" }} />
              </div>

              <div class="col-md-6">
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                  <p class="card-text">Genre: {item.genre}</p>
                  <p class="card-text">Director: {item.director[0]}</p>
                  <p class="card-text">Starring: {item.stars}</p>
                  <p class="card-text">Language: {item.language} | data: {item.releasedDate}</p>
                  <p class="card-text">Views: {item.voting} | Voted by people: {item.totalVoted}</p>

                </div>
              </div>
              <div class="d-grid gap-2">

                <button class="btn btn-primary" type="button">watch Trailer</button>
              </div>
            </div>
          </div>

        ))}
      </div>

    </>
  )
}

export default Movis