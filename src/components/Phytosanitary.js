import React, { useState } from "react";
import { Divider, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
function Phytosanitary() {

  // const Item = styled(Box)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body1,
  //   padding: theme.spacing(1),
  // }));

  const [certificateNumber,setCertificateNumber] = useState("");
	const [placeOfOrigin,setPlaceOfOrigin] = useState("");
	const [codeOfOrigin,setCodeOfOrigin] = useState("");
	const [placeOfDest,setPlaceOfDest] = useState("");
	const [codeOfDest,setCodeOfDest] = useState("");
	const [certOrg,setCertOrg] = useState("");
	const [permitNumber,setPermitNumber] = useState("");

  const [nameExporter,setNameExporter] = useState("");
  const [addressExporter,setAddressExporter] = useState("");
  const [nameConsignee,setNameConsignee] = useState("");
  const [addressConsignee,setAddressConsignee] = useState("");
  const [meansOfConveyance,setMeansOfConveyance] = useState("");
  const [pointOfEntry,setPointOfEntry] = useState("");
  const [distMarks,setDistMarks] = useState("");
  const [containerUnits,setContainerUnits] = useState("");
  const [numberPackages,setNumberPackages] = useState("");
  const [descPackages,setDescPackages] = useState("");
  const [qtyProduce,setQtyProduce] = useState("");
  const [botanicalName,setBotanicalName] = useState("");
  const [commodityCode,setCommodityCode] = useState("");
  const [numOfPackages,setNumOfPackages] = useState("");
  const [massTot,setMassTot] = useState("");

  const [dateTreat,setDateTreat] = useState("");
  const [nameTreat,setNameTreat] = useState("");
  const [chemicalTreat,setChemicalTreat] = useState("");
  const [concentrationTreat,setConcentrationTreat] = useState("");
  const [durationTreat,setDurationTreat] = useState("");
  const [temperatureTreat,setTemperatureTreat] = useState("");
  const [additionDecTreat,setAdditionDecTreat] = useState("");
  const [placeOfIssueTreat,setPlaceOfIssueTreat] = useState("");
  const [codeOfIssueTreat,setCodeOfIssueTreat] = useState("");
  const [dateOfIssueTreat,setDateOfIssueTreat] = useState("");

  function handleSubmit()
  {
    let data = {
      "certificate_number":certificateNumber,
      "place_of_origin":placeOfOrigin,
      "code_of_origin":codeOfOrigin,
      "place_of_dest":placeOfDest,
      "code_of_dest":codeOfDest,
      "cert_org":certOrg,
      "permit_number":permitNumber,

      "name_exporter":nameExporter,
      "address_exporter":addressExporter,
      "name_consignee":nameConsignee,
      "address_consignee":addressConsignee,
      "means_of_conveyance":meansOfConveyance,
      "point_of_entry":pointOfEntry,
      "dist_marks":distMarks,
      "container_units":containerUnits,
      "number_packages":numberPackages,
      "desc_packages":descPackages,
      "qty_produce":qtyProduce,
      "botanical_name":botanicalName,
      "commodity_code":commodityCode,
      "num_of_packages":numOfPackages,
      "mass_tot":massTot,

      "date_treat":dateTreat,
      "name_treat":nameTreat,
      "chemical_treat":chemicalTreat,
      "concentration_treat":concentrationTreat,
      "duration_treat":durationTreat,
      "temperature_treat":temperatureTreat,
      "addition_dec_treat":additionDecTreat,
      "place_of_issue_treat":placeOfIssueTreat,
      "code_of_issue_treat":codeOfIssueTreat,
      "date_of_issue_treat":dateOfIssueTreat,

    }
    console.log(data);
  }

  return (
    <Box>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Phytosanitary Certificate
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Grid item padding={2}>Certificate No.</Grid>
          <Grid item padding={2}>
            <TextField 
            fullWidth 
            label="Certificate Number" 
            id="fullWidth" 
            value={certificateNumber}
            onChange={event => setCertificateNumber(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item padding={2}>Place of origin and code</Grid>
          <Grid item padding={2}>
            <TextField 
            label="Place of origin" 
            id="fullWidth" 
            value={placeOfOrigin}
            onChange={event => setPlaceOfOrigin(event.target.value)}
            />
            <TextField 
            label="Code" 
            id="fullWidth" 
            value={codeOfOrigin}
            onChange={event => setCodeOfOrigin(event.target.value)}
            />
          </Grid>
          <Grid item padding={2}>Country of final destination and code</Grid>
          <Grid item padding={2}>
            <TextField 
            label="Country of final destination" 
            id="fullWidth" 
            value={placeOfDest}
            onChange={event => setPlaceOfDest(event.target.value)}
            />
            <TextField 
            label="Code" 
            id="fullWidth" 
            value={codeOfDest}
            onChange={event => setCodeOfDest(event.target.value)}
            />
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Grid item padding={2}>To: Plant Protection Organisation of</Grid>
          <Grid item padding={2}>
            <TextField 
            fullWidth 
            label="Organization Name" 
            id="fullWidth" 
            value={certOrg}
            onChange={event => setCertOrg(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item padding={2}>Import Permit Number</Grid>
          <Grid item padding={2}>
            <TextField 
            fullWidth 
            label="Permit Number" 
            id="fullWidth" 
            value={permitNumber}
            onChange={event => setPermitNumber(event.target.value)}
            />
          </Grid>
        </Grid>
      </Grid>
      <Divider style={{ paddingBottom: "20px" }} />
      <br></br>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Grid item padding={2}>Name and address of exporter</Grid>
          <Grid item padding={2}>
            <TextField
              fullWidth
              label="Exporter Business Name"
              id="fullWidth"
              value={nameExporter}
              onChange={event => setNameExporter(event.target.value)}
            />
          </Grid>
          <Grid item padding={2}>
            <TextField
              id="fullWidth"
              label="Exporter Business Address"
              fullWidth
              value={addressExporter}
              onChange={event => setAddressExporter(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item padding={2}>Declared name and address of consignee</Grid>
          <Grid item padding={2}>
            <TextField 
            fullWidth 
            label="Consignee's Name" 
            id="fullWidth" 
            value={nameConsignee}
            onChange={event => setNameConsignee(event.target.value)}
            />
          </Grid>
          <Grid item padding={2}>
            <TextField 
            id="fullWidth" 
            label="Consignee's Address" 
            fullWidth 
            value={addressConsignee}
            onChange={event => setAddressConsignee(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item padding={2}>Declared means of conveyance</Grid>
          <Grid item padding={2}>
            <TextField 
            id="fullWidth" 
            label="Means of Transport" 
            fullWidth 
            value={meansOfConveyance}
            onChange={event => setMeansOfConveyance(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item padding={2}>Declared point of entry</Grid>
          <Grid item padding={2}>
            <TextField
              id="fullWidth"
              label="Declared point of entry"
              fullWidth
              value={pointOfEntry}
              onChange={event => setPointOfEntry(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item padding={2}>Distinguishing marks and container numbers</Grid>
          <Grid item padding={2}>
            <TextField 
            id="fullWidth" 
            label="Distinguishing marks" 
            fullWidth 
            value={distMarks}
            onChange={event => setDistMarks(event.target.value)}
            />
          </Grid>
          <Grid item padding={2}>
            <TextField 
            id="fullWidth" 
            label="container numbers" 
            fullWidth 
            value={containerUnits}
            onChange={event => setContainerUnits(event.target.value)}
            />
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Grid item padding={2}>Number and description of packages</Grid>
          <Grid item padding={2}>
            <TextField
              id="fullWidth"
              label="Number of packages"
              fullWidth
              value={numberPackages}
              onChange={event => setNumberPackages(event.target.value)}
            />
          </Grid>
          <Grid item padding={2}>
            <TextField
              id="fullWidth"
              label="description of packages"
              fullWidth
              value={descPackages}
              onChange={event => setDescPackages(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item padding={2}>Name of produce / Quantity declared</Grid>
          <Grid item padding={2}>
            <TextField 
            id="fullWidth" 
            label="Number of produce" 
            fullWidth 
            value={qtyProduce}
            onChange={event => setQtyProduce(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item padding={2}>Botanical name of plants</Grid>
          <Grid item padding={2}>
            <TextField
              id="fullWidth"
              label="Botanical name of plants"
              fullWidth
              value={botanicalName}
              onChange={event => setBotanicalName(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item padding={2}>Commodity codes</Grid>
          <Grid item padding={2}>
            <TextField 
            id="fullWidth" 
            label="Commodity codes" 
            fullWidth 
            value={commodityCode}
            onChange={event => setCommodityCode(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item padding={2}>Number of packages (total)</Grid>
          <Grid item padding={2}>
            <TextField
              id="fullWidth"
              label="Number of packages (total)"
              fullWidth
              value={numOfPackages}
              onChange={event => setNumOfPackages(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item padding={2}>Mass (total) kgs</Grid>
          <Grid item padding={2}>
            <TextField 
            id="fullWidth" 
            label="Mass (total) kgs" 
            fullWidth 
            value={massTot}
            onChange={event => setMassTot(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item padding={2}>
          <Grid item padding={2}>
            <Typography variant="h6" component="h2" gutterBottom align="left">
              This is to certify that the plants, plant products or other
              regulated articles described herein have been inspected and/or
              tested according to appropriate official procedures and are
              considered to be free from the quarantine pests specified by the
              importing contracting party and to conform with the current
              phytosanitary requirements of the importing contracting party,
              including those for regulated nonquarantine pests.
            </Typography>
          </Grid>

          <Grid item padding={2}>
            <Typography variant="h7" component="h2" gutterBottom align="left">
              Disinfestation and/or disinfection treatment details
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item padding={2}>Date</Grid>
          <Grid item padding={2}>
            <TextField 
            id="fullWidth" 
            label="Date" 
            fullWidth
            value={dateTreat}
            onChange={event => setDateTreat(event.target.value)} 
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item padding={2}>Treatment</Grid>
          <Grid item padding={2}>
            <TextField 
            id="fullWidth" 
            label="Treatment" 
            fullWidth 
            value={nameTreat}
            onChange={event => setNameTreat(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item padding={2}>Chemical</Grid>
          <Grid item padding={2}>
            <TextField 
            id="fullWidth" 
            label="Chemical" 
            fullWidth 
            value={chemicalTreat}
            onChange={event => setChemicalTreat(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item padding={2}>Concentration</Grid>
          <Grid item padding={2}>
            <TextField 
            id="fullWidth" 
            label="Concentration" 
            fullWidth 
            value={concentrationTreat}
            onChange={event => setConcentrationTreat(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item padding={2}>Duration and Temperature</Grid>
          <Grid item padding={2}>
            <TextField 
            id="fullWidth" 
            label="Duration " 
            value={durationTreat}
            onChange={event => setDurationTreat(event.target.value)}
            />
            <TextField 
            id="fullWidth" 
            label="Temperature" 
            value={temperatureTreat}
            onChange={event => setTemperatureTreat(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item padding={2}>Additional declaration</Grid>
          <Grid item padding={2}>
            <TextField
              id="fullWidth"
              label="Additional declaration "
              fullWidth
              value={additionDecTreat}
              onChange={event => setAdditionDecTreat(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item padding={2}>Place of issue and code</Grid>
          <Grid item padding={2}>
            <TextField 
            label="Place of issue" 
            id="fullWidth" 
            value={placeOfIssueTreat}
            onChange={event => setPlaceOfIssueTreat(event.target.value)}
            />
            <TextField 
            label="Code" 
            id="fullWidth" 
            value={codeOfIssueTreat}
            onChange={event => setCodeOfIssueTreat(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item padding={2}>Date of issue</Grid>
          <Grid item padding={2}>
            <TextField 
            id="fullWidth" 
            label="Date of issue" 
            fullWidth 
            value={dateOfIssueTreat}
            onChange={event => setDateOfIssueTreat(event.target.value)}
            />
          </Grid>
        </Grid>
        
      </Grid>
                
<Button variant="contained" component="label" fullWidth onClick={handleSubmit}>
  Submit
</Button>
    </Box>
  );
}

export default Phytosanitary;

