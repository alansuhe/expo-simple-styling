import { ThemeProvider } from 'expo-simple-styling';
import TestPage from './TestPage';

export default function App() {
  return (
    <ThemeProvider settingsKey="example_app_theme">
      <TestPage />
    </ThemeProvider>
  );
}
