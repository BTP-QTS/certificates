import React from "react";
import { Divider, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
function Phytosanitary() {
  const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body1,
    padding: theme.spacing(1),
  }));

  return (
    <Box>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Phytosanitary Certificate
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>Certificate No.</Item>
          <Item>
            <TextField fullWidth label="Certificate Number" id="fullWidth" />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Place of origin and code</Item>
          <Item>
            <TextField label="Place of origin" id="fullWidth" />
            <TextField label="Code" id="fullWidth" />
          </Item>
          <Item>Country of final destination and code</Item>
          <Item>
            <TextField label="Country of final destination" id="fullWidth" />
            <TextField label="Code" id="fullWidth" />
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item>To: Plant Protection Organisation of</Item>
          <Item>
            <TextField fullWidth label="Organization Name" id="fullWidth" />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Import Permit Number</Item>
          <Item>
            <TextField fullWidth label="Permit Number" id="fullWidth" />
          </Item>
        </Grid>
      </Grid>
      <Divider style={{ paddingBottom: "20px" }} />
      <br></br>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>Name and address of exporter</Item>
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
        </Grid>
        <Grid item xs={6}>
          <Item>Declared name and address of consignee</Item>
          <Item>
            <TextField fullWidth label="Consignee's  Name" id="fullWidth" />
          </Item>
          <Item>
            <TextField id="fullWidth" label="Consignee's  Address" fullWidth />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Declared means of conveyance</Item>
          <Item>
            <TextField id="fullWidth" label="Means of Transport" fullWidth />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Declared point of entry</Item>
          <Item>
            <TextField
              id="fullWidth"
              label="Declared point of entry"
              fullWidth
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Distinguishing marks and container numbers</Item>
          <Item>
            <TextField id="fullWidth" label="Distinguishing marks" fullWidth />
          </Item>
          <Item>
            <TextField id="fullWidth" label="container numbers" fullWidth />
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item>Number and description of packages</Item>
          <Item>
            <TextField
              id="fullWidth"
              label="Number
of packages"
              fullWidth
            />
          </Item>
          <Item>
            <TextField
              id="fullWidth"
              label="description
of packages"
              fullWidth
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Name of produce / Quantity declared</Item>
          <Item>
            <TextField id="fullWidth" label="Number of produce" fullWidth />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Botanical name of plants</Item>
          <Item>
            <TextField
              id="fullWidth"
              label="Botanical name of plants"
              fullWidth
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Commodity codes</Item>
          <Item>
            <TextField id="fullWidth" label="Commodity codes" fullWidth />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Number of packages (total)</Item>
          <Item>
            <TextField
              id="fullWidth"
              label="Number of packages
(total)"
              fullWidth
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Mass (total) kgs</Item>
          <Item>
            <TextField id="fullWidth" label="Mass (total) kgs" fullWidth />
          </Item>
        </Grid>
        <Grid item>
          <Item>
            <Typography variant="h6" component="h2" gutterBottom align="left">
              This is to certify that the plants, plant products or other
              regulated articles described herein have been inspected and/or
              tested according to appropriate official procedures and are
              considered to be free from the quarantine pests specified by the
              importing contracting party and to conform with the current
              phytosanitary requirements of the importing contracting party,
              including those for regulated nonquarantine pests.
            </Typography>
          </Item>

          <Item>
            <Typography variant="h7" component="h2" gutterBottom align="left">
              Disinfestation and/or disinfection treatment details
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Date</Item>
          <Item>
            <TextField id="fullWidth" label="Date" fullWidth />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Treatment</Item>
          <Item>
            <TextField id="fullWidth" label="Treatment" fullWidth />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Chemical</Item>
          <Item>
            <TextField id="fullWidth" label="Chemical" fullWidth />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Concentration</Item>
          <Item>
            <TextField id="fullWidth" label="Concentration" fullWidth />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Duration and Temperature</Item>
          <Item>
            <TextField id="fullWidth" label="Duration " />
            <TextField id="fullWidth" label="Temperature" />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Additional declaration</Item>
          <Item>
            <TextField
              id="fullWidth"
              label="Additional declaration "
              fullWidth
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Place of issue and code</Item>
          <Item>
            <TextField label="Place of issue" id="fullWidth" />
            <TextField label="Code" id="fullWidth" />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Date of issue</Item>
          <Item>
            <TextField id="fullWidth" label="Date of issue" fullWidth />
          </Item>
        </Grid>
        
      </Grid>
                
<Button variant="contained" component="label" fullWidth>
  Submit
</Button>
    </Box>
  );
}

export default Phytosanitary;

