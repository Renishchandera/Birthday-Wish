import TextStyles from '../css/TextStyles.module.css';
import Lottie from 'lottie-react';
import cakeAnimation from '../animations/cake';
import celebrationAnimation from '../animations/celebration.json';
import SpecialStyles from '../css/SpecialStyles.module.css';
import GeneralStyles from '../css/GeneralStyles.module.css';
export default function CutTheCake()
{
    
    const handleCutTheCake = () => {
        console.log("Cake Cut!");
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
            <div className={SpecialStyles.cutTheCakeBtn} onClick={handleCutTheCake}>Cut The Cake</div>
        </section>
    );
}