import logo from './logo.svg';
import Top from './components/Top';
import Recomended from './components/Recomended';
import Packs from './components/Packs';
import Footer from './components/Footer';
import { Box } from '@mui/material';

function App() {
  return (
    <Box>
      <Top/>
      <Recomended/>
      <Packs/>
      <Footer/>
    </Box>
  );
}

export default App;
