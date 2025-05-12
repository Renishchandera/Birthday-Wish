import TextStyles from '../css/TextStyles.module.css';
import Lottie from 'lottie-react';
import {motion} from 'framer-motion';
import cakeAnimation from '../animations/cake';
import cakeCutAnimation from '../animations/cakecut.json';
import celebrationAnimation from '../animations/celebration.json';
import SpecialStyles from '../css/SpecialStyles.module.css';
import GeneralStyles from '../css/GeneralStyles.module.css';
import GiftModal from '../components/GiftModal';
import { useState } from 'react';

export default function CutTheCake()
{
    const [cakeCut, setCakeCut] = useState(null);
    const modalInfo = {
        animation: cakeCutAnimation,
        title: "Happy Birthday To You!",
        description: "Wishing you the very very beautiful year, and may all your dream come true.",
    }
    const handleCutTheCake = () => {
        
        console.log("Cake Cut!");
        setCakeCut(modalInfo);
    }
    const closeModal = () => {
        setCakeCut(null);
    }
    return (
        <section>
            <h3 className={TextStyles.sectionTitle}>Here's The Sweet Cake For You</h3>
            <div className={GeneralStyles.cutTheCakeSectionDiv}>
                 <Lottie
                animationData={celebrationAnimation}
                loop={true}
                style={{ width: 100, margin: '0 auto', height: 80 }}     
            ></Lottie>
            <Lottie
                animationData={cakeAnimation}
                loop={true}
                style={{ width: 200, margin: '0 auto', height: 100 }}     
            ></Lottie>
              <Lottie
                animationData={celebrationAnimation}
                loop={true}
                style={{ width: 100, margin: '0 auto', height: 80, transform: 'scaleX(-1)'}}     
            ></Lottie>
            </div>
            <div 
                initial={{padding: 0}}
                animate={{padding: '1rem'}}
                transition={{duration: 0.5}}
            className={SpecialStyles.cutTheCakeBtn} onClick={handleCutTheCake}>Cut The Cake</div>
            {cakeCut && <GiftModal gift={modalInfo} onClose={closeModal}></GiftModal>}
        </section>
    );
}