// MemorySection.jsx
import { motion } from 'framer-motion';
import MemoryPoint from '../components/MemoryPoint';
import GeneralStyles from '../css/GeneralStyles.module.css';
import TextStyles from '../css/TextStyles.module.css';
//import { useInView } from 'react-intersection-observer';

const MemorySection = ({ title, description, image, animation}) => {

  return (
    <section>
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        transition={animation.transition}
        className={GeneralStyles.memorySectionDiv}
      >
        <span className={GeneralStyles.memoryTitle + ' ' + TextStyles.memoryTitle}>{title}</span>
        <MemoryPoint></MemoryPoint>
        <p className={GeneralStyles.memoryDescription + ' ' + TextStyles.memoryDescription}> {image && <img src={image} alt={title} style={{
          width: '3rem',
          height: '3rem',
          margin: '1rem'
        }}/>}&nbsp;&nbsp;{description}</p>
      </motion.div>
    </section>
  );
};

export default MemorySection;
