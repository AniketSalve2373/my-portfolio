import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/layout/Layout';

export function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
