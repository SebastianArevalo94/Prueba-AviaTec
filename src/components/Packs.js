import { Box, Paper } from "@mui/material";
import "../styles/Packs.css";
import Miami from "../assets/packs/Miami.png";
import Cartagena from "../assets/packs/Cartagena.png";
import MachuPichu from "../assets/packs/MachuPichu.png";
import BuenosAires from "../assets/packs/BuenosAires.png";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

const PackStyles = {
  m: 15,
};

const Images = {
  display: "flex",
  gap: 3,
  justifyContent: "center",
  mt: 5,
};

const MiamiStyles = {
  position: "relative",
};

const FinalImage = {
  mt: 1.5,
  display: "flex",
  gap: 2,
};

const IconStyles = {
  display: "flex",
  width: "fit-content",
  position: "absolute",
  top: 35,
  right: 0,
  padding: 1,
  gap: 1,
};

const Packs = () => {
  return (
    <Box sx={PackStyles}>
      <h2>Paquetes Imperdibles</h2>
      <Box sx={Images}>
        <Box sx={{ position: "relative" }}>
          <img src={Miami} alt="" />
          <p class="cityName">Miami, Estados Unidos</p>
          <Paper sx={IconStyles}>
            <AirplanemodeActiveIcon color="primary" />
            <DirectionsCarIcon color="primary" />
          </Paper>
        </Box>
        <Box>
          <Box sx={{ position: "relative" }}>
            <img src={Cartagena} alt="" />
            <p class="cityName2">Cartagena, Colombia</p>
            <Paper sx={IconStyles}>
              <AirplanemodeActiveIcon color="primary" />
              <DirectionsCarIcon color="primary" />
            </Paper>
          </Box>
          <Box sx={FinalImage}>
            <Box sx={{ position: "relative" }}>
              <img src={MachuPichu} alt="" />
              <p class="cityName3">Machu Pichu, Peru</p>
              <Paper sx={IconStyles}>
                <AirplanemodeActiveIcon color="primary" />
                <DirectionsCarIcon color="primary" />
              </Paper>
            </Box>
            <Box sx={{ position: "relative" }}>
              <img src={BuenosAires} alt="" />
              <p class="cityName4">Buenos Aires, Argentina</p>
              <Paper sx={IconStyles}>
                <AirplanemodeActiveIcon color="primary" />
                <DirectionsCarIcon color="primary" />
              </Paper>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Packs;
