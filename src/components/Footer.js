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
            <li class="title">Acerca de Nosotros</li>
            <li class="subtitle">FAQ</li>
            <li class="subtitle">Contactenos</li>
            <li class="subtitle">Sucursales Aviatur</li>
            <li class="subtitle">Organizacion Aviatur</li>
            <li class="subtitle">Trabaje con nosotros</li>
            <li class="subtitle">Premios y certificaciones</li>
            <li class="subtitle">Declaracion viajero responsable</li>
          </ul>
        </Box>
        <Box>
          <ul className="list1">
            <li class="title">Servicio al cliente</li>
            <li class="subtitle">Evalue nuestro sitio</li>
            <li class="subtitle">Contactenos</li>
            <li class="subtitle">Reclamos</li>
            <li class="subtitle">Problemas tecnicos</li>
            <li class="subtitle">Escriba a Jean Claud Bessudo</li>
          </ul>
        </Box>
        <Box>
          <ul className="list1">
            <li class="title">Otros Productos</li>
            <li class="subtitle">Viajes Corporativos</li>
            <li class="subtitle">Consolidador de agentres/agencias</li>
            <li class="subtitle">Portal de Facturacion Electronica</li>
            <li class="subtitle">Caso Navegante</li>
            <li class="subtitle">Tiquetes baratos</li>
            <li class="subtitle">Hoteles baratos</li>
            <li class="subtitle">Contenidos Aviatur</li>
            <li class="subtitle">Revista Horizontes</li>
          </ul>
        </Box>
        <Box>
          <ul className="list1">
            <li class="title">Otros Servicios</li>
            <li class="subtitle">Avia Tecnologia</li>
            <li class="subtitle">Avia Legal</li>
            <li class="subtitle">Avia Seguros</li>
            <li class="subtitle">Avia Soluciones Hoteleras</li>
            <li class="subtitle">Carga y logistica</li>
            <li class="subtitle">Contratos de transporte aerolineas</li>
            <li class="subtitle">Canal de contenidos RSS</li>
            <li class="subtitle">Blog Aviatur</li>
            <li class="subtitle">Sistemas de credito</li>
            <li class="subtitle">Informacion de aerolineas</li>
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
          <p className="p">
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
              <p class="final-list">Avenida 19 No. 4 - 62, Bogotá, Colombia</p>
            </li>
            <li>
              <EmailIcon color="primary"/>
              <p class="final-list">cliente.com@aviatur.com.co</p>
            </li>
            <li>
              <LocalPhoneIcon color="primary"/>
              <p class="final-list">Bogotá 3821616 - 5879640</p>
            </li>
            <li>
              <WhatsAppIcon color="primary"/>
              <p class="final-list">5713821616</p>
            </li>
            <li>
              <HelpIcon color="primary"/>
              <p class="final-list">018000911555</p>
            </li>
            <li>
              <ArticleIcon color="primary"/>
              <p class="final-list">NIT: 860.000.018-2.</p>
            </li>
            <li>
              <ApartmentIcon color="primary"/>
              <p class="final-list">Agencia de viajes Aviatur SAS</p>
            </li>
            <li>
              <CheckIcon color="primary"/>
              <p class="final-list">Registro Nacional de Turismo No. 438.</p>
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
