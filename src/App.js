import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { Box, Icon, IconButton, Typography } from '@mui/material';

import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function App() {
  return (
    <Box m={2}>
      <Typography variant='h6'>Button With Icon</Typography>
      <Stack direction='row' spacing={2}>
        <Button variant='outlined' startIcon={<SendIcon />}>Start</Button>
        <Button variant='outlined' endIcon={<DeleteIcon />}> End</Button>
      </Stack>
      <Typography variant='h6'>Icon Button</Typography>
      <Stack direction='row' spacing={2}>
        <IconButton >
          <DeleteIcon />
        </IconButton>
        <IconButton >
          <DeleteIcon />
        </IconButton>
        <IconButton >
          <AlarmIcon />
        </IconButton>
        <IconButton >
          <AddShoppingCartIcon />
        </IconButton>
      </Stack>

    </Box>
  );
}

export default App;
