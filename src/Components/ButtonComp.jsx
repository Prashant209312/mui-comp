import { IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
function Button() {
  return (
    <div>
      <Typography variant="h6">Button With Icon</Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" startIcon={<SendIcon />}>
          Start
        </Button>
        <Button variant="outlined" endIcon={<DeleteIcon />}>
          End
        </Button>
      </Stack>
      <Typography variant="h6">Icon Button</Typography>
      <Stack direction="row" spacing={2}>
        <IconButton>
          <DeleteIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
        <IconButton>
          <AlarmIcon />
        </IconButton>
        <IconButton>
          <AddShoppingCartIcon />
        </IconButton>
      </Stack>
    </div>
  );
}

export default Button;
