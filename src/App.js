import './App.css';
import BackgroundStyles from './css/BackgroundStyles.module.css';
import GeneralStyles from './css/GeneralStyles.module.css';
import WishText from './components/WishText';
import GiftSection from './components/GiftSection';
import MemoryLane from './components/MemoryLane';
import Divider from './components/Divider';
import CutTheCake from './components/CutTheCake';
import { motion } from 'framer-motion';
import FinalMessage from './components/FinalMessage';

function App() {
  return (
    <div className={BackgroundStyles.backgroundPrimaryGradient + " " + GeneralStyles.rootSize}>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <WishText />
      </motion.div>

      <Divider></Divider>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: 'spring', stiffness: 50 }}
        viewport={{ once: true }}
      >
        <MemoryLane />
      </motion.div>

      <Divider></Divider>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, type: 'spring', bounce: 0.4 }}
        viewport={{ once: true , amount: 0.5}}
      >
        <CutTheCake />
      </motion.div>

      <Divider></Divider>
      <motion.div
        initial={{ rotate: -60, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 3, ease: 'backOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <GiftSection />
      </motion.div>

      <Divider></Divider>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <FinalMessage />
      </motion.div>

      <Divider></Divider>
      {/* Copy right reserved symbol below with name and details of developer*/}
      <p className={GeneralStyles.copyRightSection}>
        &copy; 2025 - Renish Chandera
      </p>
    </div>
  );
}

export default App;
