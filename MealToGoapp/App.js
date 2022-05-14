import { StatusBar as ExpoStatusbar } from 'expo-status-bar';
import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import SearchBar from './src/compnents/SearchBar';
import { Provider as PaperProvider } from 'react-native-paper';
import {
  useFonts as useOswald,
  Oswald_400Regular
} from '@expo-google-fonts/oswald'
import {
  useFonts as useLato,
  Lato_400Regular
} from '@expo-google-fonts/lato'
import Restaurant from './src/features/restaurants/screens/Restaurant';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';



export default function App() {

  const [oswaldLoaded] = useOswald({Oswald_400Regular});
  const [latoLoaded] = useLato({Lato_400Regular});

  if( !oswaldLoaded || !latoLoaded){
    return null;
  }
  
  return (
    <ThemeProvider theme={theme}>
        <Restaurant />
        <ExpoStatusbar style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({});
