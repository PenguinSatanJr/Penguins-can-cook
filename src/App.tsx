import { IntlProvider } from 'react-intl';
import MenuPage from './components/menu-page';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <IntlProvider locale="en" defaultLocale="en">
      <MenuPage />
    </IntlProvider>
  </ThemeProvider>
);

export default App;
