import { WeekDay } from 'types';
import DailyMenu from './daily-menu';
import PageContainer from './page-container';
import { Stack } from '@mui/material';
import { menu } from 'test-data';

const MenuPage = () => {
  const weekdays = Object.values(WeekDay);

  const menuList = weekdays.map((weekday) => ({
    weekday,
    menu,
  }));

  return (
    <PageContainer>
      <Stack
        direction="row"
        spacing={4}
        useFlexGap
        flexWrap="wrap"
        justifyContent={'center'}
      >
        {menuList.map(({ weekday, menu }, index) => (
          <DailyMenu
            key={weekday}
            weekday={weekday}
            menu={menu}
            timeout={(index + 1) * 300}
          />
        ))}
      </Stack>
    </PageContainer>
  );
};

export default MenuPage;
