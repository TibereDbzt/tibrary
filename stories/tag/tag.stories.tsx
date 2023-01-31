import Tag from "../../components/tag/Tag";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {useState} from "react";

export default {
    title: 'Tag',
    component: Tag,
    parameters: {controls: {sort: 'requiredFirst'}},
    decorators: [
        (Story, context) => {
            const [isActive, setIsActive] = useState(true);

            return (
                isActive ? <Story args={{
                    ...context.args,
                    onClickRemove: () => setIsActive(false),
                }}/>
                : <span>Tag was removed</span>
            );
        }
    ],
    argTypes: {
        label: {
            control: 'text',
        },
        color: {
            control: 'inline-radio',
            options: ['purple', 'white'],
        },
        size: {
            control: 'inline-radio',
            options: ['medium', 'small'],
        },
        onClickRemove: {
            table: {
                disable: true,
            }
        }
    },
    args: {
        label: undefined,
        size: 'medium',
        color: 'purple',
        onClickRemove: () => {},
    }
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const DefaultTag = Template.bind({});
DefaultTag.args = {
    label: 'Tag Item',
}
