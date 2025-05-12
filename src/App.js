import './App.css';
import BackgroundStyles from './css/BackgroundStyles.module.css';
import GeneralStyles from './css/GeneralStyles.module.css';
import WishText from './components/WishText';
import GiftSection from './components/GiftSection';
import MemoryLane from './components/MemoryLane';
import Divider from './components/Divider';
import CutTheCake from './components/CutTheCake';
import FinalMessage from './components/FinalMessage';

function App() {
  return (
    <div className={BackgroundStyles.backgroundPrimaryGradient + " " + GeneralStyles.rootSize}>
      <WishText></WishText>
      <Divider></Divider>
      <MemoryLane></MemoryLane>
      <Divider></Divider>
      <CutTheCake></CutTheCake>
      <Divider></Divider>
      <GiftSection></GiftSection>
      <Divider></Divider>
      <FinalMessage></FinalMessage>
    </div>
  );
}

export default App;
