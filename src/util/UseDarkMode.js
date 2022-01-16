import { Appearance } from 'react-native';
export function useDarkMode() {
    const colorScheme = Appearance.getColorScheme();
    //Chế độ darkMode:
    if (colorScheme === 'dark') {
    // Chế độ lightMode:
    } else {

    }
}