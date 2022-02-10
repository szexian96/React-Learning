import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Select,
  Typography,
  MenuItem,
  makeStyles,
  createTheme,
  ThemeProvider,
  FormControl,
} from "@material-ui/core";
import { useHistory } from "react-router-dom"; //move a function from this file
import { CryptoState } from "../CryptoContext";
import createPalette from "@material-ui/core/styles/createPalette";

//style for header
const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "#66fcf1",
    fontFamily: "Roboto",
    fontWeight: "bold",
    cursor: "pointer",
    letterSpacing: 10,
  },
}));

const Header = () => {
  const classes = useStyles(); //use the style in this function classes as useStyles Function

  const history = useHistory(); //for Routing

  const { currency, setCurrency } = CryptoState();

  const darkTheme = createTheme({
    //create an object
    palette: {
      primary: {
        main: "#66fcf1",
      },
      text: {
        primary: "#66fcf1",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      {/* header transparent and position static just normally put at there */}
      <AppBar color="transparent" position="static">
        {/*To make our website responsive so if you dont want also can*/}
        {/* <Container> */}
        <Toolbar>
          {/*Use className to apply style in Typography*/}
          <Typography
            /*when you click the classname it will link back to homepage*/
            onClick={() => history.push("/")}
            className={classes.title}
            variant="h6"
          >
            CRYPTO-T
          </Typography>
          <FormControl>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)} //fetch the target value from setCurrency
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"RM"}>RM</MenuItem>
              <MenuItem value={"JPY"}>JPY</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
        {/* </Container> */}
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;