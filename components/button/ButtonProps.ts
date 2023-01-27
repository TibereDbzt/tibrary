import {COLOR_NAMES} from "../../constants";
import {IconType} from "react-icons/lib/cjs/iconBase";

type BaseButtonProps = {
    /**
     * The color of the button.
     */
    color: COLOR_NAMES.PURPLE | COLOR_NAMES.WHITE | COLOR_NAMES.BLACK,
    /**
     * Is the button can be clicked ?
     */
    disabled?: boolean,
    /**
     * Is the button waiting for something ?
     */
    loading?: boolean,
    /**
     * Callback when clicking the button
     */
    onClick?: () => void,
} & ({
    /**
     * Is the button the first Call To Action ?
     */
    primary?: true,
    /**
     * Is the button the last Call To Action ?
     */
    flat?: false,
} | {
    primary?: false,
    flat?: boolean,
})

type ButtonLabelProps = BaseButtonProps & {
    /**
     * The text describing the action.
     */
    label: string,
    /**
     * The icon illustrating the action.
     */
    icon?: null,
    /**
     * Text describing the icon (accessibility purpose).
     */
    iconTitle?: null,
    /**
     * Is the button is a circle ?
     * Only works with icon only Button (no label).
     */
    circled?: false,
}

type ButtonIconProps = BaseButtonProps & {
    /**
     * The text describing the action.
     */
    label?: null,
    /**
     * The icon illustrating the action.
     */
    icon: IconType,
    /**
     * Text describing the icon (accessibility purpose).
     */
    iconTitle: string,
    /**
     * Is the button is a circle ?
     * Only works with icon only Button (no label).
     */
    circled?: boolean,
}

type ButtonLabelIconProps = BaseButtonProps & {
    /**
     * The text describing the action.
     */
    label: string,
    /**
     * The icon illustrating the action.
     */
    icon: IconType,
    /**
     * Text describing the icon (accessibility purpose).
     */
    iconTitle: string,
    /**
     * Is the button is a circle ?
     * Only works with icon only Button (no label).
     */
    circled?: false,
}

export type ButtonProps = ButtonLabelProps | ButtonIconProps | ButtonLabelIconProps;
