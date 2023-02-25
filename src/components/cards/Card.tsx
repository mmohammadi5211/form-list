import { Box, Stack, Typography } from '@mui/material';
import { CardType } from '../../App';

interface Props {
  cardInfo: CardType;
}

const Card = (props: Props) => {
  const name = props.cardInfo.name;
  const age = props.cardInfo.age;
  return (
    <>
      <Box
        sx={{
          //   border: '1px solid #444',
          borderRadius: '20px',
          backgroundColor: ' #EDF1D6',
          p: '1rem',
        }}>
        <Stack
          direction={'row'}
          spacing={1.5}>
          <Typography>{name}</Typography>
          <Typography>{age} years old</Typography>
        </Stack>
      </Box>
    </>
  );
};

export default Card;
