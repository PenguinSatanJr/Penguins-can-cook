import { IconButton, Paper, Stack, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import PageContainer from './page-container';
import RecipeList from './recipe-list';
import { FormattedMessage, defineMessages, useIntl } from 'react-intl';
import { exampleData } from '../test-data';

const messages = defineMessages({
  editButtonLabel: {
    id: 'recipePage.editButtonLabel',
    defaultMessage: 'Edit',
  },
});

const recipesExamples = exampleData.results;

const MenuPage = () => {
  const intl = useIntl();

  const [isEditing, setIsEditing] = useState(false);

  const [recipes, setRecipes] = useState([
    {
      id: recipesExamples[0].id,
      title: recipesExamples[0].title,
      image: recipesExamples[0].image,
      description:
        'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ',
      ingredients: ['test'],
    },
    {
      id: recipesExamples[1].id,
      title: recipesExamples[1].title,
      image: recipesExamples[1].image,
      description:
        'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ',
      ingredients: ['test'],
    },
  ]);

  const onEditButtonClick = () => setIsEditing(!isEditing);

  return (
    <PageContainer maxWidth={'sm'}>
      <Paper>
        <Stack
          direction="row"
          sx={{ paddingTop: 1, paddingLeft: 2 }}
          justifyContent="center"
          spacing={2}
        >
          <Typography variant="h4">
            <FormattedMessage id="recipePage.title" defaultMessage={'Menu'} />
          </Typography>
          <IconButton
            aria-label={intl.formatMessage(messages.editButtonLabel)}
            onClick={onEditButtonClick}
            disabled={recipes.length === 0}
          >
            <EditIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Stack>
        <RecipeList items={recipes} isEditing={isEditing} />
      </Paper>
    </PageContainer>
  );
};

export default MenuPage;
