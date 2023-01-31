import style from './Tag.module.sass';
import {TagProps} from "./TagProps";
import classNames from "classnames";
import {IoClose} from "react-icons/all";
import {useState} from "react";

export default function Tag({
                                label,
                                size = 'medium',
                                color = 'purple',
                                onClickRemove = () => {},
                            }: TagProps) {

    const [mouseOverDeleteButton, setMouseOverDeleteButton] = useState(false);

    const tagClassName = classNames(style.tag, {
        [style.medium]: size === 'medium',
        [style.small]: size === 'small',
        [style.purple]: color === 'purple',
        [style.white]: color === 'white',
        [style.overDeleteButton]: mouseOverDeleteButton,
    });

    const handleClick = () => {
        onClickRemove();
    };

    return (
        <div className={tagClassName}>
            <span className={style.labelText}>{label}</span>
            <IoClose size={18} title="delete icon" className={style.deleteButton} onClick={handleClick}
                     onMouseEnter={() => setMouseOverDeleteButton(true)}
                     onMouseLeave={() => setMouseOverDeleteButton(false)}/>
        </div>
    );
}
