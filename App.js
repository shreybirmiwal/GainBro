import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from "styled-components/native";
import {theme} from "./Elements/theme"
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { PictureScreen } from './PictureUpload/screens/picture.screen';
import { PictureContextProvider } from './services/pictures.context';

export default function App() {
  
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <PictureContextProvider>
        <PictureScreen/>
      </PictureContextProvider>
    </ThemeProvider>
  );
}
