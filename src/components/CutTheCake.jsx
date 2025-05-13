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
import ToolTip from './ToolTip';
import {useRef} from 'react';

export default function CutTheCake()
{
    const [cakeCut, setCakeCut] = useState(null);
    const audioRef = useRef(null);
    const modalInfo = {
        animation: cakeCutAnimation,
        title: "Happy Birthday To You!",
        description: "Wishing you the very very beautiful year, and may this birthday bring you even more confidence, laughter and joy. You deserve the sweetest things in life - and this cake is the first slice 🍰. (You still owe me a real party) Birthdays come and go, but awesome people like you stays in the heart forever.",
    }
    const handleCutTheCake = () => {
        
        console.log("Cake Cut!");
        setCakeCut(modalInfo);
        if(audioRef.current)
        {
            audioRef.current.play();
        }
    }
    const closeModal = () => {
        setCakeCut(null);
        if(audioRef.current)
        {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    }
    return (
        <section>
            <audio ref={audioRef} src='../music/Namrata.mp3' preload="auto"></audio>
            <h3 className={TextStyles.sectionTitle}>Here's The Sweet Cake For You</h3>
            <ToolTip tip={"Hope Your Day Is As Sweet As This Cake!"}></ToolTip>
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