import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet.js";

const Details = () => {
  const { id } = useParams();
  const result = useQuery(["details", id], fetchPet);

  if (result.isLoading)
    return (
      <div className="loading-pane">
        <h2 className="loader">Loading...</h2>
      </div>
    );

  // return <h2>{id}</h2>;
  const Pet = result.data.pets[0];
  return (
    <div className="details">
      <div>
        <h1>{Pet.name}</h1>
        <h2>
          {Pet.animal} - {Pet.breed} - {Pet.city}, {Pet.state}
          <button>Adopt {Pet.name}</button>
          <p>{Pet.description}</p>
        </h2>
      </div>
    </div>
  );
};

export default Details;
