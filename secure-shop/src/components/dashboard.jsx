import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Appbar from "./appbar";
import Dashboard_Styles from "../styles/material_styles/dashboard_style";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Papa from "papaparse";
import img1 from "./photos/1.jpeg"

import img2 from "./photos/2.jpeg"

import img3 from "./photos/3.jpeg"

import img4 from "./photos/4.jpeg"

import img5 from "./photos/5.jpeg"
import img6 from "./photos/6.jpeg"
import img7 from "./photos/7.jpeg"
import img8 from "./photos/8.jpeg"
import img9 from "./photos/9.jpeg"
import img10 from "./photos/10.jpeg"

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

// const tileData = [];
// function GetData() {
//   // const data_temp = Papa.parse(await fetchCsv());
//   // console.log("data here", data);
//   // var data = data_temp.data;
//   // console.log("data", data);
//   var data = []
//   for (var i = 1; i < 2; i++) {
//     // console.log(data[i][0], data[i][1]);
//     data.push({
//       img: img1,
//       title: "shirts",
//       author: "adidas",
//       cols: 4,
//     });
//   }
//   // console.log(data);

//   return data;
// }

// async function fetchCsv() {
//   const response = await fetch("data/data.csv");
//   const reader = response.body.getReader();
//   const result = await reader.read();
//   const decoder = new TextDecoder("utf-8");
//   const csv = await decoder.decode(result.value);
//   return csv;
// }

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }



  // componentWillMount() {
  //   // this.state.data;
  //   var data = GetData();
  //   this.setState({ data: data });
  //   console.log("data ---->", data)
  // }

  render() {
    const { classes } = this.props;
    const data = [
      {
        img: img1,
        title: "shirts",
        author: "adidas",
        cols: 4,
      },
      {
        img: img2,
        title: "shirts",
        author: "Reebok",
        cols: 4,
      },
      {
        img: img3,
        title: "shirts",
        author: "Vans",
        cols: 4,
      },
      {
        img: img4,
        title: "Pants",
        author: "Polo",
        cols: 4,
      },
      {
        img: img5,
        title: "Pants",
        author: "Levis",
        cols: 4,
      },
      {
        img: img6,
        title: "Shoes",
        author: "Woodlands",
        cols: 4,
      },
      {
        img: img7,
        title: "Shoes",
        author: "Nike",
        cols: 4,
      },
      {
        img: img8,
        title: "Tees",
        author: "Hilfiger",
        cols: 4,
      },
      {
        img: img9,
        title: "Joggers",
        author: "Lululemon",
        cols: 4,
      },
      {
        img: img10,
        title: "Shoes",
        author: "adidas",
        cols: 4,
      },
      {
        img: img7,
        title: "shirts",
        author: "adidas",
        cols: 4,
      },
      {
        img: img4,
        title: "shirts",
        author: "adidas",
        cols: 4,
      },
      {
        img: img9,
        title: "shirts",
        author: "adidas",
        cols: 4,
      },
      {
        img: img1,
        title: "shirts",
        author: "adidas",
        cols: 4,
      },
      {
        img: img5,
        title: "shirts",
        author: "adidas",
        cols: 4,
      },
      {
        img: img10,
        title: "shirts",
        author: "adidas",
        cols: 4,
      },
      {
        img: img7,
        title: "shirts",
        author: "adidas",
        cols: 4,
      },
      {
        img: img4,
        title: "shirts",
        author: "adidas",
        cols: 4,
      },
      {
        img: img2,
        title: "shirts",
        author: "adidas",
        cols: 4,
      },
      {
        img: img1,
        title: "shirts",
        author: "adidas",
        cols: 4,
      },
      // {
      //   img: img1,
      //   title: "shirts",
      //   author: "adidas",
      //   cols: 4,
      // },
      // {
      //   img: img2,
      //   title: "shirts",
      //   author: "adidas",
      //   cols: 4,
      // },
      // {
      //   img: img3,
      //   title: "shirts",
      //   author: "adidas",
      //   cols: 4,
      // },
      // {
      //   img: img4,
      //   title: "shirts",
      //   author: "adidas",
      //   cols: 4,
      // },
      // {
      //   img: img5,
      //   title: "shirts",
      //   author: "adidas",
      //   cols: 4,
      // },
      // {
      //   img: img6,
      //   title: "shirts",
      //   author: "adidas",
      //   cols: 4,
      // },
      // {
      //   img: img7,
      //   title: "shirts",
      //   author: "adidas",
      //   cols: 4,
      // },
      // {
      //   img: img8,
      //   title: "shirts",
      //   author: "adidas",
      //   cols: 4,
      // },
      // {
      //   img: img9,
      //   title: "shirts",
      //   author: "adidas",
      //   cols: 4,
      // },
      // {
      //   img: img10,
      //   title: "shirts",
      //   author: "adidas",
      //   cols: 4,
      // },
      // {
      //   img: img1,
      //   title: "shirts",
      //   author: "adidas",
      //   cols: 4,
      // },
      // {
      //   img: img2,
      //   title: "shirts",
      //   author: "adidas",
      //   cols: 4,
      // },
      // {
      //   img: img3,
      //   title: "shirts",
      //   author: "adidas",
      //   cols: 4,
      // },
      // {
      //   img: img4,
      //   title: "shirts",
      //   author: "adidas",
      //   cols: 4,
      // },
      // {
      //   img: img5,
      //   title: "shirts",
      //   author: "adidas",
      //   cols: 4,
      // },
      // {
      //   img: img6,
      //   title: "shirts",
      //   author: "adidas",
      //   cols: 4,
      // },
      // {
      //   img: img7,
      //   title: "shirts",
      //   author: "adidas",
      //   cols: 4,
      // },
      // {
      //   img: img8,
      //   title: "shirts",
      //   author: "adidas",
      //   cols: 4,
      // },
      // {
      //   img: img9,
      //   title: "shirts",
      //   author: "adidas",
      //   cols: 4,
      // },
      // {
      //   img: img10,
      //   title: "shirts",
      //   author: "adidas",
      //   cols: 4,
      // },

    ]
    return (
      <div>
        <div>
          <Appbar />
        </div>

        <div style={{ marginTop: "100px" }}>
          <GridList cellHeight={300} cols={10}>
            {data.map((tile) => (
              <GridListTile key={tile.img} cols={1}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  subtitle={<span>by: {tile.author}</span>}
                  actionIcon={
                    <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div >
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
