import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Movie.css"
function Movie() {
  const { movieId } = useParams();
  const url = `https://imdb-api.com/en/API/Title/k_vj3yw331/${movieId}`;
  const url1=`https://imdb-api.com/API/Trailer/k_vj3yw331/${movieId}`;
  const [data, setData] = useState();
  const[trailer,settrailer]=useState();
  useEffect(() => {
    async function func1() {
      const response = await axios.get(url);
      console.log(response);
      setData(response.data);
    }
    func1();
  }, [url]);
  useEffect(() => {
    async function func1() {
      const response = await axios.get(url1);
      console.log(response);
      settrailer(response.data);
    }
    func1();
  }, [url1]);
  return (
    <div>
      <div className="coverImg">
        <img src={trailer?.thumbnailUrl}alt="cover" className="coverMainImg" />
      </div>
      <div className="movieBody">
        <div className="movieContainer">
          <div className="movieRating">
            <img  src={data?.image} alt="displayPic" />
            <p>
              <span>imdbRating</span>/10{" "}
            </p>
          </div>
          <div className="movieDescription">
            <h1>{data?.title}</h1>
            <p>{data?.year}</p>
            <p>{data?.genre}</p>
            <p>{data?.plot}</p>
          </div>
        </div>
        <div className="cast">
          <div className="castHeading">
            <h1>Cast:-</h1>
          </div>
          <div className="castName">
            {data?.actorList?.map((actor)=>(
            <div>
              <Link className="actorLink" to={ `/actor/${actor.id}`}>
                <div className="castActors">
                  <div className="castCircle">
                    <img src={actor.image } className="cardImg" />
                  </div>
                  <div className="castActorName">
                    <h2>{actor.name}</h2>
                    <p>{actor.ascharacter}</p>
                  </div>
                </div>
              </Link>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Movie;
