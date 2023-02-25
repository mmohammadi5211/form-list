import { Box, Stack } from '@mui/material';
import { CardType } from '../App';
import Card from '../components/cards/Card';

interface Props {
  cards: CardType[];
}
const ListSection = (props: Props) => {
  return (
    <>
      <Box
        sx={{
          border: props.cards.length !== 0 ? '1px solid gray' : '',
          p: '1rem',
          borderRadius: '10px',
        }}>
        <Stack spacing={1}>
          {props.cards.map((card, key) => (
            <Card
              key={card.age}
              cardInfo={card}
            />
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default ListSection;
