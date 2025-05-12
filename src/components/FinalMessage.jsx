import SpecialStyles from '../css/SpecialStyles.module.css';
import TextStyles from '../css/TextStyles.module.css';
import Divider from './Divider';
import {useState} from 'react';
import SpecialMessageModal from '../components/GiftModal';

export default function FinalMessage()
{
    const [modalContent, setModalContent] = useState(null);

    const modalInfo = {
        title: "Title message",
        description: "Special Message Original Long❤️❤️"
    }
    const handleClickSpecialMessage = () => {
        console.log("Special message clicked");
        setModalContent(modalInfo);
    }
    const closeSpecialMessage = () => {
        setModalContent(null);
    }
    return (
        <section>
            <div className={SpecialStyles.specialMessageBtn} onClick={handleClickSpecialMessage}>Tap Here For Special Message ❤️</div>
            <Divider></Divider>
            <h1 className={TextStyles.mainWish}>Happy Birthday Again,</h1>
             <h1 className={TextStyles.personName}>Namrata</h1>
            {modalContent && <SpecialMessageModal gift={modalContent} onClose={closeSpecialMessage}></SpecialMessageModal>}
        </section>
    );
}