"use client";

import * as React from "react";
import Box from "@mui/material/Box"; // Change from @mui/system to @mui/material
import Grid from "@mui/material/Grid"; // Change from @mui/system to @mui/material
import styled from "@mui/system/styled"; // Keep styled as is

// Styled component remains the same
const Item = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  border: "1px solid",
  borderColor: "#ced7e0",
  padding: theme.spacing(1),
  borderRadius: "4px",
  textAlign: "center",
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
    borderColor: "#444d58",
  }),
}));

export default function Home() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}> {/* Change `size` to `item xs={8}` */}
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={4}> {/* Change `size` to `item xs={4}` */}
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}> {/* Change `size` to `item xs={4}` */}
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={8}> {/* Change `size` to `item xs={8}` */}
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={6} md={8}> {/* Change `size` to `item xs={6} md={8}` */}
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={6} md={4}> {/* Change `size` to `item xs={6} md={4}` */}
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={4}> {/* Change `size` to `item xs={6} md={4}` */}
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={8}> {/* Change `size` to `item xs={6} md={8}` */}
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}> {/* Change `size` to `item xs={6}` */}
          <Item>1</Item>
        </Grid>
        <Grid item xs={6}> {/* Change `size` to `item xs={6}` */}
          <Item>2</Item>
        </Grid>
        <Grid item xs={6}> {/* Change `size` to `item xs={6}` */}
          <Item>3</Item>
        </Grid>
        <Grid item xs={6}> {/* Change `size` to `item xs={6}` */}
          <Item>4</Item>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} key={index}> {/* Change `size` to `item xs={2} sm={4}` */}
            <Item>{index + 1}</Item>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item sx={{ flexGrow: 1 }}> {/* Correct `size="grow"` */}
          <Item>size=grow</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>size=6</Item>
        </Grid>
        <Grid item sx={{ flexGrow: 1 }}>
          <Item>size=grow</Item>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs="auto"> {/* Correct `size="auto"` */}
          <Item>size=auto</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>size=6</Item>
        </Grid>
        <Grid item sx={{ flexGrow: 1 }}>
          <Item>size=grow</Item>
        </Grid>
      </Grid>

      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}> {/* Correct `size` to `item xs={8}` */}
          <Item>size=8</Item>
        </Grid>
        <Grid item xs={8}> {/* Correct `size` to `item xs={8}` */}
          <Item>size=8</Item>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ flexGrow: 1 }}>
        <Grid item xs={6} md={2} offset={{ xs: 3, md: 0 }}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={4} md={2} offset={{ md: "auto" }}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={4} md={2} offset={{ xs: 4, md: 0 }}>
          <Item>3</Item>
        </Grid>
        <Grid item xs="grow" md={6} offset={{ md: 2 }}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </div>
  );
}
