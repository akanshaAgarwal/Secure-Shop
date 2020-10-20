import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Appbar from "./appbar";
import Dashboard_Styles from "../styles/material_styles/dashboard_style";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Papa from "papaparse";

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

// 0: "id"
// 1: "gender"
// 2: "masterCategory"
// 3: "subCategory"
// 4: "articleType"
// 5: "baseColour"
// 6: "season"
// 7: "year"
// 8: "usage"
// 9: "productDisplayName"

const tileData = [];
async function GetData() {
  const data_temp = Papa.parse(await fetchCsv());
  // console.log("data here", data);
  var data = data_temp.data;
  // console.log("data", data);
  for (var i = 1; i < 10; i++) {
    // console.log(data[i][0], data[i][1]);
    tileData[i] = {
      img: `./data/images/${data[i][0]}.jpg`,
      title: data[i][9],
      author: data[i][3],
      cols: 3,
    };
  }
  console.log(tileData);

  return data;
}

async function fetchCsv() {
  const response = await fetch("data/data.csv");
  const reader = response.body.getReader();
  const result = await reader.read();
  const decoder = new TextDecoder("utf-8");
  const csv = await decoder.decode(result.value);
  return csv;
}

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: GetData(),
    };
  }

  async componentWillMount() {
    // this.state.data;
    var data = await GetData();
    this.setState(data);
  }

  render() {
    const { classes } = this.props;
    console.log("tile data", tileData, this.state.data);
    return (
      <div>
        <div>
          <Appbar />
        </div>

        <div className={classes.root}>
          <GridList cellHeight={160} className={classes.gridList} cols={4}>
            {tileData.map((tile) => (
              <GridListTile key={tile.img} cols={tile.cols || 1}>
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}
// map the state using redux to the props of this component
// we can use the state here then in form of props
Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(withStyles(Dashboard_Styles)(Dashboard));
