import { Box, Button, FormLabel, Stack, TextField } from '@mui/material';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import BasicModal from '../components/modals/Modal';

interface Props {
  addCard: (params: { name: string; age: string }) => void;
  // showModal: Dispatch<SetStateAction<boolean>>;
}
const FormSection = (props: Props) => {
  const [name, setName] = React.useState<string>('');
  const [age, setAge] = React.useState<string>('');
  const [showModal, setShowModal] = React.useState(false);

  const handleForm = (e: any) => {
    e.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      setShowModal(true);
      return;
    }

    const setForm = {
      name: name,
      age: age,
    };
    props.addCard(setForm);
    setAge('');
    setName('');
  };

  return (
    <>
      <form onSubmit={handleForm}>
        {showModal && (
          <BasicModal
            openModal={showModal}
            close={setShowModal}
          />
        )}

        <Stack
          spacing={1}
          alignItems={'baseline'}
          justifyContent={'center'}>
          <TextField
            label='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label='Age'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <Button
            type='submit'
            variant='contained'
            fullWidth
            // onClick={handleForm}
          >
            Add
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default FormSection;
