"use client";

import * as React from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Grid";
import styled from "@mui/system/styled";

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
          <Grid size={8}>
            <Item>size=8</Item>
          </Grid>
          <Grid size={4}>
            <Item>size=4</Item>
          </Grid>
          <Grid size={4}>
            <Item>size=4</Item>
          </Grid>
          <Grid size={8}>
            <Item>size=8</Item>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 8 }}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid size={{ xs: 6, md: 8 }}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={6}>
          <Item>1</Item>
        </Grid>
        <Grid size={6}>
          <Item>2</Item>
        </Grid>
        <Grid size={6}>
          <Item>3</Item>
        </Grid>
        <Grid size={6}>
          <Item>4</Item>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid key={index} size={{ xs: 2, sm: 4 }}>
            <Item>{index + 1}</Item>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid size="grow">
          <Item>size=grow</Item>
        </Grid>
        <Grid size={6}>
          <Item>size=6</Item>
        </Grid>
        <Grid size="grow">
          <Item>size=grow</Item>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid size="auto">
          <Item>size=auto</Item>
        </Grid>
        <Grid size={6}>
          <Item>size=6</Item>
        </Grid>
        <Grid size="grow">
          <Item>size=grow</Item>
        </Grid>
      </Grid>
      <Grid container spacing={2} columns={16}>
        <Grid size={8}>
          <Item>size=8</Item>
        </Grid>
        <Grid size={8}>
          <Item>size=8</Item>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ flexGrow: 1 }}>
        <Grid size={{ xs: 6, md: 2 }} offset={{ xs: 3, md: 0 }}>
          <Item>1</Item>
        </Grid>
        <Grid size={{ xs: 4, md: 2 }} offset={{ md: "auto" }}>
          <Item>2</Item>
        </Grid>
        <Grid size={{ xs: 4, md: 2 }} offset={{ xs: 4, md: 0 }}>
          <Item>3</Item>
        </Grid>
        <Grid size={{ xs: "grow", md: 6 }} offset={{ md: 2 }}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </div>
  );
}
