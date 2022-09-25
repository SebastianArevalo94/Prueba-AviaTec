import { Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import example from "../assets/cities/Medellin, Colombia.png";
import "../styles/Recomended.css";
import { RecomendedData } from "../data/Recomended";
import { useState, useEffect } from "react";

const RecomendedStyles = {
  mt: 15,
  mr: 15,
  ml: 15,
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Recomended = () => {
  const [recomended, setRecomended] = useState([]);
  useEffect(() => {
    setRecomended(RecomendedData);
  });
  return (
    <Box sx={RecomendedStyles}>
      <h2>Vuelos Recomendados</h2>
      <Carousel responsive={responsive}>
        {recomended.map((city, index) => {
          return (
            <div className="cardInfo" key={index}>
              <img className="cardImg" src={city.image} alt={city.city}/>
              <p>{city.city}</p>
              <p className="cardPrice">{city.price}</p>
            </div>
          );
        })} 
      </Carousel>
    </Box>
  );
};

export default Recomended;
