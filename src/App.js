import "./App.css";
import {Routes, Route} from 'react-router-dom'
import Player from '../src/components/Player/Player';
import OnBoarding from './components/OnBoarding/OnBoarding';
import Personalize from './components/Personalize/Personalize';
import Welcome from './components/Welcome/Welcome';
import Finish from './components/Finish/Finish';
import LibraryPage from './components/LibraryPage/LibraryPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<OnBoarding />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/preferences" element={<Personalize />} />
      <Route path="/ready" element={<Finish />} />
      <Route path="/library" element={<LibraryPage />} />
      <Route path="/player" element={<Player />} />
    </Routes>
  );
}

export default App;
