const swatches = require("./Colors");

const shirtGroup1 = [
  "sapphire Blue",
  "red",
  "orange",
  "eggplant",
  "gray",
  "khaki",
  "pink",
  "light Blue",
  "mint Green",
  "white",
];
const shirtGroup2 = [
    "black",
    "gray",
    "navy Blue",
    "crimson",
    "brown",
    "yellow",
    "orange",
    "green",
    "cream",
    "khaki",
  ],
  shirtGroup3 = [
    "black",
    "light Yellow",
    "khaki",
    "coral Pink",
    "blush Pink",
    "peach",
    "light Sky Blue",
    "seafoam Green",
    "mint Green",
  ];
const ShirtColors = (color) => {
  const DarkSkin = {
    cocoaBean: "#4a221a",
    ironStone: "#75483b",
    leather: "#9d6e5b",
  };
  const BrownSkin = {
    pentitOrchid: "#d9a38e",
    fair: "#f3c6a5",
    olive: "#edb98a",
  };
  const FairSkin = {
    mandysPink: "#f3cfba",
    veryFair: "#f8ebdb",
  };
  if (
    color == DarkSkin.cocoaBean ||
    color == DarkSkin.ironStone ||
    color == DarkSkin.leather
  ) {
    let data = {
      colors: shirtGroup1,
      hexValue: swatches.shirtColors.colors1,
    };
    return data;
  }
  if (
    color == BrownSkin.fair ||
    color == BrownSkin.olive ||
    color == BrownSkin.pentitOrchid
  )
    if (Object.values(BrownSkin).indexOf(color) > -1) {
      let data = {
        colors: shirtGroup2,
        hexValue: swatches.shirtColors.colors2,
      };
      return data;
    }
  if (color == FairSkin.mandysPink || color == FairSkin.veryFair) {
    let data = {
      colors: shirtGroup3,
      hexValue: swatches.shirtColors.colors3,
    };
    return data;
  }
};

module.exports = ShirtColors;
