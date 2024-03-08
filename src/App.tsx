import { IntlProvider } from 'react-intl';
import MenuPage from './components/menu-page';

const App = () => (
  <IntlProvider locale="en" defaultLocale="en">
    <MenuPage />
  </IntlProvider>
);

export default App;
