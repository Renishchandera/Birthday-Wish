import TextStyles from '../css/TextStyles.module.css';
import Gift from './Gift';
import GeneralStyles from '../css/GeneralStyles.module.css';
import gifts from '../util/gifts';
import GiftModal from '../components/GiftModal';
import {useState} from 'react';

export default function GiftSection() {
    const [selectedGift, setSelectedGift] = useState(null);
    const handleGiftClick = (gift) => {
       setSelectedGift(gift);
    }
    const closeModal = () => {
        setSelectedGift(null);
    }
    return (
        <section>
            <h3 className={TextStyles.sectionTitle}>Here's Your GIFTs 🎁</h3>
            <h4 className={TextStyles.clickInstruction}>(Tap On Gift To Open)</h4>
            {/* map torugh gifts */}
            <div className={GeneralStyles.giftSectionDiv}>
            {gifts.map((gift, index) => (
                 <Gift
                key={index}
                onClick={() => handleGiftClick(gift)}
                 />
             ))}
            </div>
             {selectedGift && <GiftModal gift={selectedGift} onClose={closeModal} />}
        </section>
    );
}