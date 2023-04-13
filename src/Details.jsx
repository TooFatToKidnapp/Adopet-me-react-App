import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet.js";
import Carousel from "./Carousel.jsx";
import ErrorBoundry from "./ErrorBoundry.jsx";

const Details = () => {
  const { id } = useParams();
  const result = useQuery(["details", id], fetchPet);

  if (result.isLoading)
    return (
      <div className="loading-pane">
        <h2 className="loader">Loading...</h2>
      </div>
    );

  const Pet = result.data.pets[0];
  return (
    <div className="details">
      <Carousel images={Pet.images} />
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

function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundry>
      <Details {...props} />
    </ErrorBoundry>
  );
}

export default DetailsErrorBoundary;
