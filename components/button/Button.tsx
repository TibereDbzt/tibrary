import style from './Button.module.sass';
import classNames from "classnames";
import {ButtonProps} from "./ButtonProps";
import {AiOutlineLoading3Quarters} from "react-icons/all";
import {COLOR_NAMES} from "../../constants";

export default function Button({
                                   color,
                                   primary = true,
                                   flat = false,
                                   label,
                                   icon: Icon,
                                   iconTitle,
                                   circled = false,
                                   loading = false,
                                   disabled = false,
                                   onClick = () => {},
                               }: ButtonProps) {

    const buttonClassName = classNames(style.button, {
        [style.purple]: color === COLOR_NAMES.PURPLE,
        [style.white]: color === COLOR_NAMES.WHITE,
        [style.black]: color === COLOR_NAMES.BLACK,
        [style.primary]: primary && !flat,
        [style.secondary]: !primary && !flat,
        [style.flat]: flat && !primary,
        [style.label]: label,
        [style.icon]: Icon,
        [style.circled]: Icon && !label && circled,
        [style.loading]: loading,
        [style.disabled]: disabled,
    });

    const handleClick = () => {
        if (loading || disabled) return;
        onClick();
    };

    return (
        <button onClick={handleClick} className={buttonClassName}>
            { loading
                ? <AiOutlineLoading3Quarters size={24} title="loading icon" className={style.loadingIcon}/>
                : <>
                    {Icon ? <Icon size={24} title={iconTitle} /> : <></>}
                    { label && <span className={style.labelText}>{label}</span> }
                </>
            }
        </button>
);
}
