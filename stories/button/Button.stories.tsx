import Button from "../../components/button/Button";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {COLOR_NAMES} from "../../constants";
import {AiOutlinePlus} from "react-icons/all";

export default {
    title: 'Button',
    component: Button,
    parameters: { controls: { sort: 'requiredFirst' } },
    argTypes: {
        color: {
            control: 'inline-radio',
            options: [COLOR_NAMES.PURPLE, COLOR_NAMES.WHITE, COLOR_NAMES.BLACK],
        },
        primary: {
            control: 'boolean',
        },
        flat: {
            control: 'boolean',
            if: { arg: 'primary', truthy: false },
        },
        label: {
            control: 'text',
        },
        circled: {
            control: 'boolean',
            if: { arg: 'label', truthy: false },
        },
        loading: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        icon: {
            table: {
                disable: true,
            },
        },
        iconTitle: {
            table: {
                disable: true,
            },
        },
        onClick: {
            table: {
                disable: true,
            },
        },
    },
    args: {
        color: COLOR_NAMES.PURPLE,
        primary: true,
        flat: false,
        label: 'Button Label',
        circled: false,
        loading: false,
        disabled: false,
        icon: undefined,
        iconTitle: undefined,
        onClick: () => console.log('Button Clicked'),
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

/*
    * Primary Buttons
 */
export const PrimaryLabelPurple = Template.bind({});

PrimaryLabelPurple.args = {
    label: 'Primary Label Purple',
    color: COLOR_NAMES.PURPLE,
}

export const PrimaryIconPurple = Template.bind({});

PrimaryIconPurple.args = {
    icon: AiOutlinePlus,
    iconTitle: 'plus icon',
    color: COLOR_NAMES.PURPLE,
    circled: true,
}

export const PrimaryIconWhite = Template.bind({});

PrimaryIconWhite.args = {
    icon: AiOutlinePlus,
    iconTitle: 'plus icon',
    color: COLOR_NAMES.WHITE,
    circled: true,
}

export const PrimaryLabelWhite = Template.bind({});

PrimaryLabelWhite.args = {
    label: 'Primary Label White',
    color: COLOR_NAMES.WHITE,
}

PrimaryLabelWhite.parameters = {
    backgrounds: {
        default: COLOR_NAMES.PURPLE,
    }
}


/*
    * Secondary Buttons
 */
export const SecondaryLabelPurple = Template.bind({});

SecondaryLabelPurple.args = {
    primary: false,
    label: 'Secondary Label Purple',
    color: COLOR_NAMES.PURPLE,
}

export const SecondaryLabelWhite = Template.bind({});

SecondaryLabelWhite.args = {
    primary: false,
    label: 'Secondary Label White',
    color: COLOR_NAMES.WHITE,
}

SecondaryLabelWhite.parameters = {
    backgrounds: {
        default: COLOR_NAMES.PURPLE,
    }
}

export const SecondaryLabelBlack = Template.bind({});

SecondaryLabelBlack.args = {
    label: 'Primary Label Black',
    color: COLOR_NAMES.BLACK,
}


/*
    * Flat Buttons
 */

export const FlatLabelPurple = Template.bind({});

FlatLabelPurple.args = {
    primary: false,
    label: 'Flat Label Purple',
    color: COLOR_NAMES.PURPLE,
    flat: true,
}

export const FlatLabelWhite = Template.bind({});

FlatLabelWhite.args = {
    primary: false,
    label: 'Flat Label White',
    color: COLOR_NAMES.WHITE,
    flat: true,
}

FlatLabelWhite.parameters = {
    backgrounds: {
        default: COLOR_NAMES.PURPLE,
    }
}

export const FlatIconWhite = Template.bind({});

FlatIconWhite.args = {
    primary: false,
    icon: AiOutlinePlus,
    iconTitle: 'plus icon',
    color: COLOR_NAMES.WHITE,
    flat: true,
}

FlatIconWhite.parameters = {
    backgrounds: {
        default: COLOR_NAMES.PURPLE,
    }
}

export const PrimaryLabelIconPurple = Template.bind({});

PrimaryLabelIconPurple.args = {
    primary: true,
    color: COLOR_NAMES.PURPLE,
    label: 'Primary Label Icon Purple',
    icon: AiOutlinePlus,
    iconTitle: 'plus icon',
}
