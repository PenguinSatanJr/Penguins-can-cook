import { List as MuiList } from '@mui/material';
import { Recipe } from '../types';
import RecipeListItem from './recipe-list-item';

type RecipeListProps = {
  items: Recipe[];
  isEditing: boolean;
};

const RecipeList = ({ items, isEditing }: RecipeListProps) => (
  <MuiList sx={{ width: '100%', bgcolor: 'background.paper', paddingY: 0 }}>
    {items.map((item, index, items) => (
      <RecipeListItem
        key={item.id}
        divider={index !== items.length - 1}
        isEditing={isEditing}
        {...item}
      />
    ))}
  </MuiList>
);

export default RecipeList;
