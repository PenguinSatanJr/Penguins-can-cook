import { Grow, Paper, Typography, useTheme } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import RecipeList from './recipe-list';
import { Menu, WeekDay } from 'types';

type DailyMenuProps = { menu: Menu; weekday: WeekDay; timeout?: number };

const DailyMenu = ({ menu, weekday, timeout = 500 }: DailyMenuProps) => {
  const {
    palette: { primary },
  } = useTheme();

  return (
    <Grow in timeout={timeout}>
      <Paper
        sx={{
          backgroundColor: primary.main,
          maxWidth: '300px',
          height: 'fit-content',
        }}
      >
        <Typography variant="h4" textAlign={'center'} paddingY={1.75}>
          <FormattedMessage id="dailyMenu.weekday" defaultMessage={weekday} />
        </Typography>

        <RecipeList menu={menu} />
      </Paper>
    </Grow>
  );
};

export default DailyMenu;
