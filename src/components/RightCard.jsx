import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Switch,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import MiddleCard from "./MiddleCard";

function RightCard() {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={3} sx={{ bgcolor: "#f2f2f2" }}>
          <MiddleCard />
        </Grid>
        <Grid item xs={9} sx={{ bgcolor: "#ccc" }}>
          <Card sx={{ p: 1 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex" }}>
                <Avatar />
                <Stack ml={1}>
                  <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>
                    Alex Thompson
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "GrayText" }}>
                    CEO/ Co-Founder
                  </Typography>
                </Stack>
              </Box>
              <Stack direction="row" m={1}>
                <Typography>Switch to invisible</Typography>
                <Switch size="small" defaultChecked />
              </Stack>
            </Box>
          </Card>
          <Card>
            <CardContent>
              <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>
                Basic Info
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default RightCard;
