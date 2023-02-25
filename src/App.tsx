import { Box, Stack } from '@mui/material';
import FormSection from './sections/FormSection';
import ListSection from './sections/ListSection';
import React from 'react';
import { type } from 'os';
import BasicModal from './components/modals/Modal';
type Value = {
  name: string;
  age: string;
};
export type CardType = {
  id: number;
  name: string;
  age: string;
};
function App() {
  const [cards, setCards] = React.useState<CardType[]>([]);

  const addCard = (value: Value) => {
    setCards((perv) => [
      {
        id: Math.random(),
        name: value.name,
        age: value.age,
      },
      ...perv,
    ]);
  };
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          my: '3rem',
        }}>
        <Stack spacing={3}>
          <FormSection
            addCard={addCard}
            // showModal={setShowModal}
          />
          <ListSection cards={cards} />
        </Stack>
      </Box>
    </>
  );
}

export default App;
