import { Box, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import First from "../assets/footer/image 6.png";
import Second from "../assets/footer/image 7.png";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import HelpIcon from "@mui/icons-material/Help";
import ArticleIcon from "@mui/icons-material/Article";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CheckIcon from "@mui/icons-material/Check";
import "../styles/Footer.css";

const Global = {
  display: "flex",
  gap: 4,
};

const Social = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const List = {
  mt: 5,
  display: "flex",
  justifyContent: "space-evenly",
};

const Final = {
  display: "flex",
  m: 5,
  justifyContent: "space-evenly",
};

const FooterText = {
  display: "flex",
  flexDirection: "column",
  gap: 3,
  width: "450px",
};

const Footer = () => {
  return (
    <Box>
      <Box sx={Social}>
        <p>Unase a nuestra comunidad</p>
        <Box>
          <IconButton color="primary">
            <FacebookIcon />
          </IconButton>
          <IconButton color="primary">
            <InstagramIcon />
          </IconButton>
          <IconButton color="primary">
            <TwitterIcon />
          </IconButton>
          <IconButton color="primary">
            <LinkedInIcon />
          </IconButton>
          <IconButton color="primary">
            <YouTubeIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={List}>
        <Box>
          <ul class="list1">
            <li>Acerca de Nosotros</li>
            <li>FAQ</li>
            <li>Contactenos</li>
            <li>Sucursales Aviatur</li>
            <li>Organizacion Aviatur</li>
            <li>Trabaje con nosotros</li>
            <li>Premios y certificaciones</li>
            <li>Declaracion viajero responsable</li>
          </ul>
        </Box>
        <Box>
        <ul className="list1">
            <li>Servicio al cliente</li>
            <li>Evalue nuestro sitio</li>
            <li>Contactenos</li>
            <li>Reclamos</li>
            <li>Problemas tecnicos</li>
            <li>Escriba a Jean Claud Bessudo</li>
          </ul>
        </Box>
        <Box>
        <ul>
            <li>Servicio al cliente</li>
            <li>Evalue nuestro sitio</li>
            <li>Contactenos</li>
            <li>Reclamos</li>
            <li>Problemas tecnicos</li>
            <li>Escriba a Jean Claud Bessudo</li>
          </ul>
        </Box>
      </Box>
      <Box sx={Final}>
        <Box sx={FooterText}>
          <p className="p">
            Derechos del pasajero y/o deberes del transportador - SIC -
            www.rues.org.co - Aerocivil - Contra la pornografía infantil -
            Denuncie situaciones que afectan a menores de 18 años
          </p>
          <p className="p">
            Términos y condiciones del sitio - Política de privacidad y
            tratamiento de los datos personales - Formulario de reversión de
            pagos - Todos los derechos reservados Derecho de retracto y
            desistimiento, según Resolución 1209 del 5/25/2015 de la UAEAC.
          </p>
          <p>
            AVIATUR apoya el trabajo de UNICEF comprometiéndose con la
            protección de los derechos de las niñas, niños y adolescentes en
            Colombia y el mundo. Necesitamos también su compromiso. Invierta en
            el poder de los niños, el valor más rentable de Colombia.
          </p>
          <p className="p">
            Aviatur.com 2016 Aviatur INC. - 6316 NW AVE DORAL, FL 33178 - 01
            8000 911 555
          </p>
        </Box>
        <Box>
          <ul class="list">
            <li>
              <AddLocationIcon color="primary"/>
              <p>Avenida 19 No. 4 - 62, Bogotá, Colombia</p>
            </li>
            <li>
              <EmailIcon color="primary"/>
              <p>cliente.com@aviatur.com.co</p>
            </li>
            <li>
              <LocalPhoneIcon color="primary"/>
              <p>Bogotá 3821616 - 5879640</p>
            </li>
            <li>
              <WhatsAppIcon color="primary"/>
              <p>5713821616</p>
            </li>
            <li>
              <HelpIcon color="primary"/>
              <p>018000911555</p>
            </li>
            <li>
              <ArticleIcon color="primary"/>
              <p>NIT: 860.000.018-2.</p>
            </li>
            <li>
              <ApartmentIcon color="primary"/>
              <p>Agencia de viajes Aviatur SAS</p>
            </li>
            <li>
              <CheckIcon color="primary"/>
              <p>Registro Nacional de Turismo No. 438.</p>
            </li>
          </ul>
        </Box>
        <Box>
          <img src={First} alt="" />
          <img src={Second} alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
