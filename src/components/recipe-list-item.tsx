import React from 'react';
import {
  Avatar,
  IconButton,
  ListItemAvatar,
  ListItemText,
  ListItem as MuiListItem,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type RecipeListItemProps = {
  title: string;
  description: string;
  image?: string;
  divider?: boolean;
  isEditing?: boolean;
};

const RecipeListItem = ({
  title,
  description,
  image = 'icons/default-dish.svg',
  divider = true,
  isEditing = true,
}: RecipeListItemProps) => (
  <Stack direction="row" spacing={2}>
    <MuiListItem divider={divider}>
      <ListItemAvatar>
        <Avatar
          sx={{ height: '60px', width: '60px' }}
          variant="rounded"
          alt={title}
          src={image}
        />
      </ListItemAvatar>
      <ListItemText secondary={description} sx={{ marginLeft: 1 }}>
        {title}
      </ListItemText>
      {isEditing && (
        <IconButton aria-label="edit" disableRipple>
          <CloseIcon />
        </IconButton>
      )}
    </MuiListItem>
  </Stack>
);

export default RecipeListItem;
