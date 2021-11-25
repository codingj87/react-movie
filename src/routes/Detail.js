import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  console.log(id);
  const [movie, setMovie] = useState([]);

  const getMovieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(1, json);
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovieDetail();
  }, []);
  return (
    <>
      <div>detail</div>
      <div>{movie.title}</div>
    </>
  );
}

export default Detail;
