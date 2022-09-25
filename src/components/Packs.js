import { Box } from "@mui/material";
import "../styles/Packs.css";
import Miami from "../assets/packs/Miami.png";
import Cartagena from "../assets/packs/Cartagena.png";
import MachuPichu from "../assets/packs/MachuPichu.png";
import BuenosAires from "../assets/packs/BuenosAires.png";

const PackStyles = {
  m: 15,
};

const Images = {
  display: "flex",
  gap: 3,
  justifyContent: 'center',
  mt: 5
};

const MiamiStyles = {
    position: 'relative'
};

const FinalImage = {
    mt:1.5,
    display: "flex",
    gap: 2
  };

const Packs = () => {
  return (
    <Box sx={PackStyles}>
      <h2>Paquetes Imperdibles</h2>
      <Box sx={Images}>
        <Box sx={{position:'relative'}}>
          <img src={Miami} alt="" />
          <p>Miami, Estados Unidos</p>
        </Box>
        <Box>
          <Box>
            <img src={Cartagena} alt="" />
          </Box>
          <Box sx={FinalImage}>
            <Box>
              <img src={MachuPichu} alt="" />
            </Box>
            <Box>
              <img src={BuenosAires} alt="" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Packs;
