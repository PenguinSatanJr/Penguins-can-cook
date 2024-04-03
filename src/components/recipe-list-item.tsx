import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useIntl } from 'react-intl';

type RecipeListItemProps = {
  title: string;
  description: string;
  color?: string;
  square?: boolean;
};

const RecipeListItem = ({
  title,
  description,
  color,
  square = false,
}: RecipeListItemProps) => {
  const intl = useIntl();

  return (
    <Accordion sx={{ backgroundColor: color }} elevation={0} square={square}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {intl.formatMessage({
          id: 'recipeListItem.title',
          defaultMessage: title,
        })}
      </AccordionSummary>
      <AccordionDetails>
        {intl.formatMessage({
          id: 'recipeListItem.description',
          defaultMessage: description,
        })}
      </AccordionDetails>
    </Accordion>
  );
};

export default RecipeListItem;
