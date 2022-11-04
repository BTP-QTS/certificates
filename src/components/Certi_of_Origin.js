import React from "react";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography";
function Certi_of_Origin() {
  const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body1,
    padding: theme.spacing(1),
  }));

  return (
    <Box>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Certificate Of origin
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
            1. Goods consigned from (Exporter's business name, address, country)
          </Item>
          <Item>
            <TextField
              fullWidth
              label="Exporter Business Name"
              id="fullWidth"
            />
          </Item>
          <Item>
            <TextField
              id="fullWidth"
              label="Exporter Business Address"
              fullWidth
            />
          </Item>
          <Item>
            <TextField
              id="fullWidth"
              label="Exporter Business Country"
              fullWidth
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            2. Goods consigned to (Consignee's name, address, country)
          </Item>
          <Item>
            <TextField
              fullWidth
              label="Consignee's Business Name"
              id="fullWidth"
            />
          </Item>
          <Item>
            <TextField
              id="fullWidth"
              label="Consignee's Business Address"
              fullWidth
            />
          </Item>
          <Item>
            <TextField
              id="fullWidth"
              label="Consignee's Business Country"
              fullWidth
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>3. Means of transport and route (as far as known)</Item>
          <Item>
            <TextField id="fullWidth" label="Means of Transport" fullWidth />
          </Item>
          <Item>
            <TextField id="fullWidth" label="Route" fullWidth />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4. For official use</Item>
          <Item>
            <TextField id="fullWidth" label="details" fullWidth />
          </Item>

          <Item>5. Item number</Item>
          <Item>
            <TextField id="fullWidth" label="Item Number" fullWidth />
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item>6. Marks and number of packages</Item>
          <Item>
            <TextField id="fullWidth" label="Marks" fullWidth />
          </Item>
          <Item>
            <TextField id="fullWidth" label="Number of packages" fullWidth />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>7. Number and kind of packages, description of goods</Item>
          <Item>
            <TextField id="fullWidth" label="Number of packages" fullWidth />
          </Item>
          <Item>
            <TextField id="fullWidth" label="Kind of packages" fullWidth />
          </Item>
          <Item>
            <TextField id="fullWidth" label="description of goods" fullWidth />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>8. Origin criterion (see Notes overleaf)</Item>
          <Item>
            <TextField id="fullWidth" label="Origin Criterion" fullWidth />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>9. Gross weight or other quantity</Item>
          <Item>
            <TextField
              id="fullWidth"
              label="Gross weight"
              fullWidth
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>10. Number
and date of
invoices</Item>
          <Item>
            <TextField
              id="fullWidth"
              label="Number"
              fullWidth
            />
          </Item>
          <Item>
            <TextField
              id="fullWidth"
              label="Date of Invoice"
              fullWidth
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>11. Certification
It is hereby certified, on the basis of control
carried out, that the declaration by the exporter is
correct.</Item>
          <Item>
          <Button
  variant="contained"
  component="label"
>
  Upload File
  <input
    type="file"
    hidden
  />
</Button>
          </Item>
          <Item>12. Declaration by the exporter</Item>
          <Item>
          <Button
  variant="contained"
  component="label"
>
  Upload Declaration
  <input
    type="file"
    hidden
  />
</Button>
          </Item>
        </Grid>
      

      </Grid>
    </Box>
  );
}

export default Certi_of_Origin;
