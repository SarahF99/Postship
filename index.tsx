import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/build/esm/styles.css';
import Dashboard from './Dashboard';

const App = () => (
  <AppProvider i18n={enTranslations}>
    <Dashboard />
  </AppProvider>
);

export default App;
