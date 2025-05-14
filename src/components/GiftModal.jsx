import ModalStyles from '../css/ModalStyles.module.css';
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import Lottie from "lottie-react";
import { useWindowSize } from "@react-hook/window-size";
import Divider from './Divider';
// import Divider from './Divider';
//import "../css/Modal.css"; // additional optional styles

export default function GiftModal({ gift, onClose, isSpecialMessage=false}) {
    const [width, height] = useWindowSize();

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.6 },
        visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200 } },
    };
    const handleBackdropClick = (e) => {
        if (e.target.className.includes("modalBackdrop")) {
            onClose();
        }
    };
    return (
        <AnimatePresence>
            <motion.div
                className={ModalStyles.modalBackdrop}
                onClick={handleBackdropClick}
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                <Confetti width={width} height={height} numberOfPieces={350} recycle={false}   colors={['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd']} />
                <motion.div className={ModalStyles.modalContent} variants={modalVariants}>
                    {gift.animation && (
                        <Lottie animationData={gift.animation} loop={true} style={{ height: 200 }} />
                    )}
                    <h2 className={ModalStyles.modalTitle}>{gift.title}</h2>
                    {!isSpecialMessage && <p className={ModalStyles.modalDescriptionSpecial}>{gift.description}</p>}
                    {isSpecialMessage && <p className={ModalStyles.modalDescriptionSpecial}>{gift.description1}</p>}
                    <Divider></Divider>
                    {isSpecialMessage && <p className={ModalStyles.modalDescriptionSpecial}>{gift.description2}</p>}
                                        <Divider></Divider>
                    {isSpecialMessage && <p className={ModalStyles.modalDescriptionSpecial}>{gift.description3}</p>}
                                        <Divider></Divider>
                    {isSpecialMessage && <p className={ModalStyles.modalDescriptionSpecial}>{gift.description4}</p>}
                                        <Divider></Divider>
                    {isSpecialMessage && <p className={ModalStyles.modalDescriptionSpecial}>{gift.description5}</p>}
                                        <Divider></Divider>
                    {isSpecialMessage && <p className={ModalStyles.modalDescriptionSpecial}>{gift.description6}</p>}
                                        <Divider></Divider>
                    {isSpecialMessage && <p className={ModalStyles.modalDescriptionSpecial}>{gift.description7}</p>}
                    <button className={ModalStyles.modalCloseBtn} onClick={onClose}>Close</button>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}