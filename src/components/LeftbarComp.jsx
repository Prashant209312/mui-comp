import {
  Avatar,
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ImageIcon from "@mui/icons-material/Image";
import AppsIcon from "@mui/icons-material/Apps";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ChangeHistoryOutlinedIcon from "@mui/icons-material/ChangeHistoryOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";

function LeftbarComp() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box
      sx={{
        m: 1,
        bgcolor: "#000",
        p: 2,
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 3,
      }}
    >
      <Stack direction="row" spacing={2}>
        <GridViewIcon sx={{ fontSize: "15px", color: "#fff" }} />
        <Typography sx={{ fontSize: "10px", color: "#fff" }}>
          Material dashboard PRO
        </Typography>
      </Stack>

      <Divider color="gray" variant="middle" sx={{ height: 1, mt: 2, mb: 1 }} />
      <List
        sx={{ width: "100%", maxWidth: 360, color: "#fff" }}
        component="nav"
        dense
        disablePadding
      >
        <ListItemButton onClick={handleClick} disableGutters sx={{ px: 1 }}>
          <Avatar sx={{ width: "20px", height: "20px", mr: 4 }} />

          <ListItemText
            primary="Brooklyn Alice"
            disablePadding
            primaryTypographyProps={{ fontSize: "10px", color: "gray" }}
          />
          {open ? (
            <ExpandLess sx={{ fontSize: "20px" }} />
          ) : (
            <ExpandMore sx={{ fontSize: "20px" }} />
          )}
        </ListItemButton>
        <ListItemButton onClick={handleClick} disableGutters sx={{ px: 1.5 }}>
          <ListItemIcon sx={{ fontSize: "11px", color: "gray" }}>
            M
          </ListItemIcon>

          <ListItemText
            primary="My Profile"
            primaryTypographyProps={{ fontSize: "10px", color: "gray" }}
          />
        </ListItemButton>
        <ListItemButton onClick={handleClick} disableGutters sx={{ px: 1.5 }}>
          <ListItemIcon sx={{ fontSize: "11px", color: "gray" }}>
            S
          </ListItemIcon>

          <ListItemText
            primary="Settings"
            primaryTypographyProps={{ fontSize: "10px", color: "gray" }}
          />
        </ListItemButton>
        <ListItemButton onClick={handleClick} disableGutters sx={{ px: 1.5 }}>
          <ListItemIcon sx={{ fontSize: "11px", color: "gray" }}>
            L
          </ListItemIcon>

          <ListItemText
            primary="Logout"
            primaryTypographyProps={{ fontSize: "10px", color: "gray" }}
          />
        </ListItemButton>
        <Divider color="gray" variant="middle" sx={{ height: 1 }} />
        <ListItemButton onClick={handleClick} disableGutters sx={{ px: 1 }}>
          <ListItemIcon disablePadding>
            <DashboardIcon sx={{ fontSize: "15px", color: "#fff" }} />
          </ListItemIcon>

          <ListItemText
            primary="Dashboards"
            primaryTypographyProps={{ fontSize: "10px", color: "gray" }}
          />
          {open ? (
            <ExpandLess sx={{ fontSize: "20px" }} />
          ) : (
            <ExpandMore sx={{ fontSize: "20px" }} />
          )}
        </ListItemButton>
      </List>
      <Typography sx={{ color: "#fff", fontSize: "8px", fontWeight: 600 }}>
        PAGES
      </Typography>
      <List
        sx={{ width: "100%", maxWidth: 360, color: "#fff", bgcolor: "#000" }}
        component="nav"
        dense
        disablePadding
      >
        <ListItemButton
          onClick={handleClick}
          disableGutters
          sx={{ px: 1, bgcolor: "gray", borderRadius: 1 }}
        >
          <ListItemIcon disablePadding>
            <ImageIcon sx={{ fontSize: "15px", color: "#fff" }} />
          </ListItemIcon>

          <ListItemText
            primary="Pages"
            primaryTypographyProps={{ fontSize: "10px" }}
          />
          {open ? (
            <ExpandLess sx={{ fontSize: "20px" }} />
          ) : (
            <ExpandMore sx={{ fontSize: "20px" }} />
          )}
        </ListItemButton>
        <ListItemButton onClick={handleClick} disableGutters sx={{ px: 1 }}>
          <ListItemIcon disablePadding>
            <GridViewIcon sx={{ fontSize: "15px", color: "#fff" }} />
          </ListItemIcon>

          <ListItemText
            primary="Applications"
            primaryTypographyProps={{ fontSize: "10px", color: "gray" }}
          />
          {open ? (
            <ExpandLess sx={{ fontSize: "20px" }} />
          ) : (
            <ExpandMore sx={{ fontSize: "20px" }} />
          )}
        </ListItemButton>
        <ListItemButton
          onClick={handleClick}
          disableGutters
          sx={{ p: 0.3, px: 1 }}
        >
          <ListItemIcon disablePadding>
            <AppsIcon sx={{ fontSize: "15px", color: "#fff" }} />
          </ListItemIcon>

          <ListItemText
            primary="Ecommerce"
            primaryTypographyProps={{ fontSize: "10px", color: "gray" }}
          />
          {open ? (
            <ExpandLess sx={{ fontSize: "20px" }} />
          ) : (
            <ExpandMore sx={{ fontSize: "20px" }} />
          )}
        </ListItemButton>

        <ListItemButton onClick={handleClick} disableGutters sx={{ px: 1 }}>
          <ListItemIcon disablePadding>
            <ArticleOutlinedIcon sx={{ fontSize: "15px", color: "#fff" }} />
          </ListItemIcon>

          <ListItemText
            primary="Authentication"
            primaryTypographyProps={{ fontSize: "10px", color: "gray" }}
          />
          {open ? (
            <ExpandLess sx={{ fontSize: "20px" }} />
          ) : (
            <ExpandMore sx={{ fontSize: "20px" }} />
          )}
        </ListItemButton>
      </List>

      <Divider
        color="gray"
        variant="middle"
        sx={{ height: 1, mt: 0.5, mb: 1 }}
      />
      <Typography sx={{ color: "#fff", fontSize: "8px", fontWeight: 600 }}>
        DOCS
      </Typography>

      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          color: "#fff",
          bgcolor: "#000",
          mb: 9,
        }}
        component="nav"
        dense
        disablePadding
      >
        <ListItemButton onClick={handleClick} disableGutters sx={{ px: 1 }}>
          <ListItemIcon disablePadding>
            <ChangeHistoryOutlinedIcon
              sx={{ fontSize: "15px", color: "#fff" }}
            />
          </ListItemIcon>

          <ListItemText
            primary="Basics"
            primaryTypographyProps={{ fontSize: "10px", color: "gray" }}
          />
          {open ? (
            <ExpandLess sx={{ fontSize: "20px" }} />
          ) : (
            <ExpandMore sx={{ fontSize: "20px" }} />
          )}
        </ListItemButton>
        <ListItemButton onClick={handleClick} disableGutters sx={{ px: 1 }}>
          <ListItemIcon disablePadding>
            <TrackChangesOutlinedIcon
              sx={{ fontSize: "15px", color: "#fff" }}
            />
          </ListItemIcon>

          <ListItemText
            primary="Components"
            primaryTypographyProps={{ fontSize: "10px", color: "gray" }}
          />
          {open ? (
            <ExpandLess sx={{ fontSize: "20px" }} />
          ) : (
            <ExpandMore sx={{ fontSize: "20px" }} />
          )}
        </ListItemButton>
        <ListItemButton onClick={handleClick} disableGutters sx={{ px: 1 }}>
          <ListItemIcon disablePadding>
            <PieChartOutlineOutlinedIcon
              sx={{ fontSize: "15px", color: "#fff" }}
            />
          </ListItemIcon>

          <ListItemText
            primary="Change Log"
            primaryTypographyProps={{ fontSize: "10px", color: "gray" }}
          />
        </ListItemButton>
      </List>
    </Box>
  );
}

export default LeftbarComp;
