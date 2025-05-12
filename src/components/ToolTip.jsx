import SpecialStyles from '../css/SpecialStyles.module.css';


export default function ToolTip({tip})
{
    return (
        <div
        className={SpecialStyles.toolTip}>
            <strong>{tip}</strong>
            {/* <span className={SpecialStyles.toolTipArrow}></span> */}
        </div>
    );
}