import SpecialStyles from '../css/SpecialStyles.module.css';
import TextStyles from '../css/TextStyles.module.css';
import Divider from './Divider';
import {useState} from 'react';
import SpecialMessageModal from '../components/GiftModal';

export default function FinalMessage()
{
    const [modalContent, setModalContent] = useState(null);

    const modalInfo = {
        title: "Just a Few Words I’ve Been Meaning to Say...💕",
        description1: "Even after all these years of silence and hundreds of kilometers between us, one random Instagram follow brought back all the warmth — the fun, the arguments, and those endless midnight conversations.",
        description2: "I don’t say this often, but talking to you genuinely makes my day better, Every Single Time.",
        description3: "You’ve still got that same confidence and chaos I remember from 6th class… and honestly, I enjoy it even more now.",
        description4: "From 6th-class silence to Insta nonsense, somehow, you’ve become the best part of my most random days.",
        description5: "I don’t know how much you miss our chats — but I miss annoying you way more than I should.😅",
        description6: "Once again, Happiest Birthday, Namrata❤️",
        description7: "Always stay as confident, crazy, and amazing as you are.",
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
            {modalContent && <SpecialMessageModal gift={modalContent} onClose={closeSpecialMessage} isSpecialMessage={true}></SpecialMessageModal>}
        </section>
    );
}