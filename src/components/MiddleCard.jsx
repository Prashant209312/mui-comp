import {
  Box,
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import InfoIcon from "@mui/icons-material/Info";
import LockIcon from "@mui/icons-material/Lock";
import StarsIcon from "@mui/icons-material/Stars";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import DeleteIcon from "@mui/icons-material/Delete";
function MidcardComp() {
  return (
    <Box>
      <Card sx={{ maxWidth: 300, ml: 35, m: 1 }}>
        <List dense>
          <ListItem disablePadding>
            <ListItemButton>
              <PersonIcon sx={{ fontSize: "15px", mr: 1 }} />
              <ListItemText primary="Profile" sx={{ fontSize: "3px" }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <InfoIcon sx={{ fontSize: "15px", mr: 1 }} />
              <ListItemText primary="Basic Info" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <LockIcon sx={{ fontSize: "15px", mr: 1 }} />
              <ListItemText primary="Change Password" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <StarsIcon sx={{ fontSize: "15px", mr: 1 }} />
              <ListItemText primary="2FA" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <AccountBoxIcon sx={{ fontSize: "15px", mr: 1 }} />
              <ListItemText primary="Accounts" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <NotificationsIcon sx={{ fontSize: "15px", mr: 1 }} />
              <ListItemText primary="Notification" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <SettingsApplicationsIcon sx={{ fontSize: "15px", mr: 1 }} />
              <ListItemText primary="Session" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <DeleteIcon sx={{ fontSize: "15px", mr: 1 }} />
              <ListItemText primary="Delete Account" />
            </ListItemButton>
          </ListItem>
        </List>
      </Card>
    </Box>
  );
}

export default MidcardComp;
