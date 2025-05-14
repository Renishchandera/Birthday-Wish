import TextStyles from '../css/TextStyles.module.css';
import Confetti from 'react-confetti';
// import Lottie from 'lottie-react';
// import birthdayAnimation from '../animations/Animation - 1746978299430.json'; 
import { useWindowSize } from '@react-hook/window-size'; 

export default function Wish() {
  const [width, height] = useWindowSize();
    return (
        <>
            {/* <h1 className={TextStyles.mainWish}>Happy Birthday</h1>
            <h1 className={TextStyles.personName}>Namrata!</h1> */}
      <h1 className={TextStyles.mainWish}>
        Happy Birthday,
      </h1>
      <h1 className={TextStyles.personName}>
        Namrata!
      {/* <Lottie
        animationData={birthdayAnimation}
        loop={true}
        style={{ width: "100%", margin: '0 auto', height: 200, position: 'absolute', top: 2, zIndex: 2 }}
      /> */}
      </h1>
  
            <h3></h3>
            <Confetti
                width={width}
                height={height}
                numberOfPieces={600}
                gravity={0.1}
                wind={0.01}
                recycle={false}
                colors={['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd']}
            ></Confetti>
        </>);
}