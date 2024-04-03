import { Paper, Typography, useTheme } from '@mui/material';
import { Menu } from '../types';
import RecipeListItem from './recipe-list-item';
import { useIntl } from 'react-intl';

type RecipeListProps = {
  menu: Menu;
};

const RecipeList = ({ menu }: RecipeListProps) => {
  const intl = useIntl();

  const {
    palette: { secondary },
  } = useTheme();

  return menu.map(({ mealTime, recipes }, menuIndex) => (
    <Paper
      key={mealTime}
      sx={{
        backgroundColor: secondary.main,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      }}
    >
      <Typography variant="h5" paddingY={1} textAlign={'center'}>
        {intl.formatMessage({
          id: `recipeList.${mealTime}`,
          defaultMessage: mealTime,
        })}
      </Typography>
      {recipes.map((recipe, recipeIndex, recipes) => (
        <RecipeListItem
          key={recipe.id}
          title={recipe.title}
          description={recipe.description}
          square={
            !(
              menuIndex === menu.length - 1 &&
              recipeIndex === recipes.length - 1
            )
          }
        />
      ))}
    </Paper>
  ));
};

export default RecipeList;
