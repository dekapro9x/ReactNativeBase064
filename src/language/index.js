import I18n from 'react-native-i18n';

import Eng from './i18n/en';
import Vi from './i18n/vi';
import China from "./i18n/china";

I18n.translations = {
    Eng,
    Vi,
    China
};
export const listLanguageSelect = [
    {
        name: 'Language',
        id: 0,
        children: [
            {
                name: 'Vi',
                id: 1,
            },
            {
                name: 'Eng',
                id: 2,
            },
            {
                name: 'China',
                id: 3,
            },
        ],
    },
];
export default I18n;