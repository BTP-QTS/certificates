import React, {useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography";
function Certi_of_Origin() {
  
  const [exporterName,setExporterName] = useState("");
  const [exporterAddress,setExporterAddress] = useState("");
  const [exporterCountry,setExporterCountry] = useState("");
  const [consigneeName,setConsigneeName] = useState("");
  const [consigneeAddress,setConsigneeAddress] = useState("");
  const [consigneeCountry,setConsigneeCountry] = useState("");
  const [meansOfTransport,setMeansOfTransport] = useState("");
  const [routeOfTransport,setRouteOfTransport] = useState("");
  const [officialDetails,setOfficialDetails] = useState("");
  const [itemNumber,setItemNumber] = useState("");
  const [marksPackage,setMarksPackage] = useState("");
  const [numberOfPackages,setNumberOfPackages] = useState("");
  const [kindOfPackages,setKindOfPackages] = useState("");
  const [descOfPackages,setDescOfPackages] = useState("");
  const [originCriteria,setOriginCriteria] = useState("");
  const [grossWeight,setgrossWeight] = useState("");
  const [numberOfInvoice,setNumberOfInvoice] = useState("");
  const [dateOfInvoice,setDateOfInvoice] = useState("");


  function handleSubmit()
  {
    let data = {
      "exporter_name":exporterName,
      "exporter_address":exporterAddress,
      "exporter_country":exporterCountry,
      "consignee_name":consigneeName,
      "consignee_address":consigneeAddress,
      "consignee_country":consigneeCountry,
      "means_of_transport":meansOfTransport,
      "route_of_transport":routeOfTransport,
      "official_details":officialDetails,
      "item_number":itemNumber,
      "marks_package":marksPackage,
      "number_of_packages":numberOfPackages,
      "kind_of_packages":kindOfPackages,
      "desc_of_packages":descOfPackages,
      "origin_Criteria":originCriteria,
      "gross_weigth":grossWeight,
      "number_of_invoice":numberOfInvoice,
      "date_of_invoice":dateOfInvoice
    }
    console.log(data);
  }

  // const Item = styled(Box)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body1,
  //   padding: theme.spacing(1),
  // }));

  return (
    <Box>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Certificate Of origin
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Grid>
            1. Goods consigned from (Exporter's business name, address, country)
          </Grid>
          <Grid item p={2}>
            <TextField
              fullWidth
              label="Exporter Business Name"
              id="fullWidth"
              value={exporterName}
              onChange={event => setExporterName(event.target.value)}
            />
          </Grid>
          <Grid item p={2}>
            <TextField
              id="fullWidth"
              label="Exporter Business Address"
              fullWidth
              value={exporterAddress}
              onChange={event => setExporterAddress(event.target.value)}
            />
          </Grid>
          <Grid item p={2}>
            <TextField
              id="fullWidth"
              label="Exporter Business Country"
              fullWidth
              value={exporterCountry}
              onChange={event => setExporterCountry(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item p={2}>
            2. Goods consigned to (Consignee's name, address, country)
          </Grid>
          <Grid item p={2}>
            <TextField
              fullWidth
              label="Consignee's Business Name"
              id="fullWidth"
              value={consigneeName}
              onChange={event => setConsigneeName(event.target.value)}
            />
          </Grid>
          <Grid item p={2}>
            <TextField
              id="fullWidth"
              label="Consignee's Business Address"
              fullWidth
              value={consigneeAddress}
              onChange={event => setConsigneeAddress(event.target.value)}
            />
          </Grid>
          <Grid item p={2}>
            <TextField
              id="fullWidth"
              label="Consignee's Business Country"
              fullWidth
              value={consigneeCountry}
              onChange={event => setConsigneeCountry(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item p={2}>3. Means of transport and route (as far as known)</Grid>
          <Grid item p={2}>
            <TextField 
              id="fullWidth" 
              label="Means of Transport" 
              fullWidth 
              value={meansOfTransport}
              onChange={event => setMeansOfTransport(event.target.value)}/>
          </Grid>
          <Grid item p={2}>
            <TextField 
            id="fullWidth" 
            label="Route" 
            fullWidth 
            value={routeOfTransport}
            onChange={event => setRouteOfTransport(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item p={2}>4. For official use</Grid>
          <Grid item p={2}>
            <TextField 
            id="fullWidth" 
            label="details" 
            fullWidth 
            value={officialDetails}
            onChange={event => setOfficialDetails(event.target.value)}
            />
          </Grid>

          <Grid item p={2}>5. Item number</Grid>
          <Grid item p={2}>
            <TextField 
            id="fullWidth"
            label="Item Number" 
            fullWidth 
            value={itemNumber}
            onChange={event => setItemNumber(event.target.value)}
            />
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Grid item p={2}>6. Marks and number of packages</Grid>
          <Grid item p={2}>
            <TextField 
            id="fullWidth" 
            label="Marks" 
            fullWidth 
            value={marksPackage}
            onChange={event => setMarksPackage(event.target.value)}/>
          </Grid>
          <Grid item p={2}>
            <TextField 
            id="fullWidth" 
            label="Number of packages" 
            fullWidth 
            value={numberOfPackages}
            onChange={event => setNumberOfPackages(event.target.value)}/>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item p={2}>7. Number and kind of packages, description of goods</Grid>
          <Grid item p={2}>
            <TextField 
            id="fullWidth" 
            label="Number of packages" 
            fullWidth 
            value={numberOfPackages}
            onChange={event => setNumberOfPackages(event.target.value)}
            />
          </Grid>
          <Grid item p={2}>
            <TextField 
            id="fullWidth" 
            label="Kind of packages" 
            fullWidth 
            value={kindOfPackages}
            onChange={event => setKindOfPackages(event.target.value)}
            />
          </Grid>
          <Grid item p={2}>
            <TextField 
            id="fullWidth" 
            label="description of goods" 
            fullWidth 
            value={descOfPackages}
            onChange={event => setDescOfPackages(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item p={2}>8. Origin criterion (see Notes overleaf)</Grid>
          <Grid item p={2}>
            <TextField 
            id="fullWidth" 
            label="Origin Criterion" 
            fullWidth 
            value={originCriteria}
            onChange={event => setOriginCriteria(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item p={2}>9. Gross weight or other quantity</Grid>
          <Grid item p={2}>
            <TextField
              id="fullWidth"
              label="Gross weight"
              fullWidth
              value={grossWeight}
              onChange={event => setgrossWeight(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item p={2}>10. Number
and date of
invoices</Grid>
          <Grid item p={2}>
            <TextField
              id="fullWidth"
              label="Number"
              fullWidth
              value={numberOfInvoice}
              onChange={event => setNumberOfInvoice(event.target.value)}
            />
          </Grid>
          <Grid item p={2}>
            <TextField
              id="fullWidth"
              label="Date of Invoice"
              fullWidth
              value={dateOfInvoice}
              onChange={event => setDateOfInvoice(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item p={2}>11. Certification
It is hereby certified, on the basis of control
carried out, that the declaration by the exporter is
correct.</Grid>
          <Grid item p={2}>
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
          </Grid>
          <Grid item p={2}>12. Declaration by the exporter</Grid>
          <Grid item p={2}>
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
          </Grid>
        </Grid>
      

      </Grid>
      <Button variant="contained" component="label" fullWidth onClick={handleSubmit}>
  Submit
</Button>
    </Box>
  );
}

export default Certi_of_Origin;
