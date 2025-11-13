import logo from './logo.svg';
import './App.css';
import HeroSection from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import ForthScreen from './screens/ForthScreen';
import FifthScreen from './screens/FifthScreen';
import SixthScreen from './screens/SixthScreen';
import ByMe from './components/ByMe/ByMe';
import NavBarNew from './components/CourseNav/NavBarNew';
import AboutMe from './components/me/Me';
import MusicPlayer from './screens/Sound';
import Button from './components/button/Button';
import FloatingButton from './components/FloatButton/FloatButton';

function App() {
  return <>
  <NavBarNew/>
  <HeroSection/>
  <SecondScreen/>
  <ThirdScreen/>
  <ForthScreen/>
  <FifthScreen/>
  <AboutMe/>
  <SixthScreen/>
  {/* <MusicPlayer/> */}
  <FloatingButton/>
  <ByMe/>
  </>
}

export default App;
