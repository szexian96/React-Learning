import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Select,
  Typography,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();https://visme.co/blog/website-color-schemes/

  return (
    //header transparent and position static just normally put at there
    <AppBar color="transparent" position="static">
      {/*To make our website responsive*/}
      <Container>
        <Toolbar>
          {/*Use className to apply style in Typography*/}
          <Typography
            /*when you click the classname it will link back to homepage*/
            onClick={() => history.push("/")}
            className={classes.title}
          >
            CRYPTO-T
          </Typography>

          <Select
            variant="outlined"
            style={{
              width: 100,
              height: 40,
              marginLeft: 15,
            }}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>RM</MenuItem>
            <MenuItem value={"JPY"}>JPY</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
