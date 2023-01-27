import { COLOR_NAMES, COLOR_CODES } from '../constants';
import { IconContext } from "react-icons";

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    backgrounds: {
        values: [
            {
                name: COLOR_NAMES.WHITE,
                value: COLOR_CODES[COLOR_NAMES.WHITE],
            },
            {
                name: COLOR_NAMES.PURPLE,
                value: COLOR_CODES[COLOR_NAMES.PURPLE],
            },
        ],
    },
};
