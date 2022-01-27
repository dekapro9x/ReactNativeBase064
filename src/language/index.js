import I18n from 'react-native-i18n';

import Eng from './i18n/en';
import Vi from './i18n/vi';

I18n.translations = {
    Eng,
    Vi
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
        ],
    },
];
export default I18n;