import {useColorScheme} from 'react-native';

const colorBgDark = 'rgba(50, 50, 50, 1.0)';
const colorBgLight = 'rgba(225, 225, 225, 1.0)';

const colorDark = 'rgba(225, 225, 225, 1.0)';
const colorLight = 'rgba(25, 25, 25, 1.0)';

const barDark = 'dark-content';
const barLight = 'light-content';

type TypeScreen = {
  darkMode: boolean;
  color: string;
  backgroundColor: string;
  barStyle: 'dark-content' | 'light-content';
};

export const useScreen = (): TypeScreen => {
  const darkMode = useColorScheme() === 'dark';
  const color = darkMode ? colorDark : colorLight;
  const backgroundColor = darkMode ? colorBgDark : colorBgLight;
  const barStyle = darkMode ? barLight : barDark;
  return {darkMode, color, backgroundColor, barStyle};
};
