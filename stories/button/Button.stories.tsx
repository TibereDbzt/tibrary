import Button from "../../components/button/Button";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {COLOR_NAMES} from "../../constants";
import {AiOutlinePlus} from "react-icons/all";
import {fireEvent, within} from "@testing-library/dom";

export default {
    title: 'Button',
    component: Button,
    parameters: {controls: {sort: 'requiredFirst'}},
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
            if: {arg: 'primary', truthy: false},
        },
        label: {
            control: 'text',
        },
        circled: {
            control: 'boolean',
            if: {arg: 'label', truthy: false},
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
        label: undefined,
        circled: false,
        loading: false,
        disabled: false,
        icon: undefined,
        iconTitle: undefined,
        onClick: () => {},
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

/*
    * Button containing a label
 */
export const LabelButton = Template.bind({});
LabelButton.args = {
    color: COLOR_NAMES.PURPLE,
    label: 'Primary Label Purple',
}

/*
    * Button containing an icon
 */
export const IconButton = Template.bind({});
IconButton.args = {
    color: COLOR_NAMES.PURPLE,
    icon: AiOutlinePlus,
    iconTitle: 'plus icon',
}

/*
    * Button containing a label and an icon
 */
export const LabelIconButton = Template.bind({});
LabelIconButton.args = {
    color: COLOR_NAMES.PURPLE,
    label: 'Primary Label Icon Purple',
    icon: AiOutlinePlus,
    iconTitle: 'plus icon',
}

/*
    * Button containing a label and responding to a click callback
 */
export const ClickLabelButton = Template.bind({});
ClickLabelButton.args = {
    color: COLOR_NAMES.PURPLE,
    label: 'Button Action',
    onClick: () => console.log('Button clicked'),
}
ClickLabelButton.play = async ({canvasElement}) => {
    const canvas = within(canvasElement);
    fireEvent.click(canvas.getByRole('button', {name: 'Button Action'}));
}
