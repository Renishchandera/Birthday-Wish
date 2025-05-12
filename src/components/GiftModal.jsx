import ModalStyles from '../css/ModalStyles.module.css';
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import Lottie from "lottie-react";
import { useWindowSize } from "@react-hook/window-size";
//import "../css/Modal.css"; // additional optional styles

export default function GiftModal({ gift, onClose }) {
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
                <Confetti width={width} height={height} numberOfPieces={250} recycle={false} />
                <motion.div className={ModalStyles.modalContent} variants={modalVariants}>
                    {gift.animation && (
                        <Lottie animationData={gift.animation} loop={true} style={{ height: 200 }} />
                    )}
                    <h2 className={ModalStyles.modalTitle}>{gift.title}</h2>
                    <p className={ModalStyles.modalDescription}>{gift.description}</p>
                    <button className={ModalStyles.modalCloseBtn} onClick={onClose}>Close</button>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}