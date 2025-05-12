import Lottie from 'lottie-react';
import TextStyles from '../css/TextStyles.module.css';
import giftAnimation from '../animations/Animation - 1746979755212.json'; 

export default function Gift({onClick}) {
    return (
        <div onClick={onClick}>
            <Lottie
                animationData={giftAnimation}
                loop={true}
                style={{ width: 100, margin: '0 auto', height: 80 }}
            />
            <h4 className={TextStyles.clickInstruction}>Click On Gift To Open</h4>
        </div>
    );
}