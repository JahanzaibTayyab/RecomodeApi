var setRegular = "";
var setPlusSize = "";
var error = "";
const height_5_1 = (weight) => {
  if (weight <= 130) {
    setRegular = "XS";
  } else if (weight >= 131 && weight <= 140) {
    setRegular = "S";
  } else {
    error = "Invalid Weight or Height";
  }
};
const height_5_2_3_4 = (weight) => {
  if (weight <= 130) {
    setRegular = "XS";
  } else if (weight >= 131 && weight <= 140) {
    setRegular = "S";
  } else if (weight >= 141 && weight <= 150) {
    setRegular = "S";
  } else {
    error = "Invalid Weight or Height";
  }
};
const height_5_5 = (weight) => {
  if (weight <= 130) {
    setRegular = "S";
  } else if (weight >= 131 && weight <= 150) {
    setRegular = "S";
  } else if (weight >= 151 && weight <= 176) {
    setRegular = "M";
  } else if (weight >= 177 && weight <= 187) {
    setRegular = "M";
    setPlusSize = "Large";
  } else if (weight >= 188 && weight <= 204) {
    setRegular = "L";
  } else {
    error = "Invalid Weight or Height";
  }
};
const height_5_6 = (weight) => {
  if (weight <= 130) {
    setRegular = "S";
  } else if (weight >= 131 && weight <= 150) {
    setRegular = "S";
  } else if (weight >= 151 && weight <= 176) {
    setRegula = "M";
  } else if (weight >= 177 && weight <= 182) {
    setRegular = "M";
  } else if (weight >= 183 && weight <= 187) {
    setRegular = "M";
    setPlusSize = "Large";
  } else if (weight >= 188 && weight <= 204) {
    setRegular = "L";
  } else {
    error = "Invalid Weight or Height";
  }
};
const height_5_7 = (weight) => {
  if (weight <= 130) {
    setRegular = "S";
  } else if (weight >= 131 && weight <= 150) {
    setRegular = "S";
    setPlusSize = "Long";
  } else if (weight >= 151 && weight <= 182) {
    setRegular = "M";
  } else if (weight >= 183 && weight <= 194) {
    setRegular = "M";
    setPlusSize = "Large";
  } else if (weight >= 195 && weight <= 204) {
    setRegular = "L";
  } else if (weight >= 205 && weight <= 214) {
    setRegular = "XL";
  } else {
    error = "Invalid Weight or Height";
  }
};
const height_5_8 = (weight) => {
  if (weight <= 130) {
    setRegular = "S";
  } else if (weight >= 131 && weight <= 160) {
    setRegular = "S";
    setPlusSize = "Long";
  } else if (weight >= 161 && weight <= 182) {
    setRegular = "M";
  } else if (weight >= 183 && weight <= 187) {
    setRegular = "M";
    setPlusSize = "Large";
  } else if (weight >= 188 && weight <= 194) {
    setRegular = "M";
    setPlusSize = "L";
  } else if (weight >= 195 && weight <= 204) {
    setRegular = "L";
  } else if (weight >= 205 && weight <= 214) {
    setRegular = "XL";
  } else if (weight >= 215 && weight <= 229) {
    setRegular = "XXL";
  } else {
    error = "Invalid Weight or Height";
  }
};
const height_5_9 = (weight) => {
  if (weight <= 130) {
    setRegular = "S";
  } else if (weight >= 131 && weight <= 150) {
    setRegular = "S";
    setPlusSize = "Long";
  } else if (weight >= 151 && weight <= 160) {
    setRegular = "S";
    setPlusSize = "Long";
  } else if (weight >= 161 && weight <= 187) {
    setRegular = "M";
  } else if (weight >= 188 && weight <= 194) {
    setRegular = "M";
    setPlusSize = "Large";
  } else if (weight >= 195 && weight <= 204) {
    setRegular = "L";
  } else if (weight >= 205 && weight <= 214) {
    setRegular = "XL";
  } else if (weight >= 215 && weight <= 229) {
    setRegular = "XXL";
  } else if (weight >= 230) {
    setRegular = "XXL";
  } else {
    error = "Invalid Weight or Height";
  }
};
const height_5_10 = (weight) => {
  if (weight <= 130) {
    setRegular = "S";
  } else if (weight >= 131 && weight <= 160) {
    setRegular = "S";
    setPlusSize = "Long";
  } else if (weight >= 161 && weight <= 187) {
    setRegular = "M";
  } else if (weight >= 188 && weight <= 194) {
    setRegular = "M";
    setPlusSize = "Large";
  } else if (weight >= 195 && weight <= 204) {
    setRegular = "L";
  } else if (weight >= 205 && weight <= 214) {
    setRegular = "XL";
  } else if (weight >= 215 && weight <= 229) {
    setRegular = "XXL";
  } else if (weight >= 230) {
    setRegular = "XXL";
  } else {
    error = "Invalid Weight or Height";
  }
};
const height_5_11 = (weight) => {
  if (weight >= 131 && weight <= 160) {
    setRegular = "S";
    setPlusSize = "Long";
  } else if (weight >= 161 && weight <= 176) {
    setRegular = "M";
  } else if (weight >= 177 && weight <= 194) {
    setRegular = "M";
    setPlusSize = "Large";
  } else if (weight >= 195 && weight <= 204) {
    setRegular = "L";
  } else if (weight >= 205 && weight <= 229) {
    setRegular = "XL";
  } else if (weight >= 230) {
    setRegular = "XXL";
  } else {
    error = "Invalid Weight or Height";
  }
};
const height_6 = (weight) => {
  if (weight >= 131 && weight <= 160) {
    setRegular = "S";
    setPlusSize = "Long";
  } else if (weight >= 161 && weight <= 170) {
    setRegular = "S";
  } else if (weight >= 171 && weight <= 176) {
    setRegular = "M";
    setPlusSize = "Long";
  } else if (weight >= 177 && weight <= 194) {
    setRegular = "M";
    setPlusSize = "Large";
  } else if (weight >= 195 && weight <= 214) {
    setRegular = "L";
  } else if (weight >= 215 && weight <= 229) {
    setRegular = "XL";
  } else if (weight >= 230) {
    setRegular = "XXL";
  }
};
const height_6_1 = (weight) => {
  if (weight >= 141 && weight <= 160) {
    setRegular = "S";
    setPlusSize = "Long";
  } else if (weight >= 161 && weight <= 170) {
    setRegular = "S";
  } else if (weight >= 171 && weight <= 176) {
    setRegular = "M";
    setPlusSize = "Long";
  } else if (weight >= 177 && weight <= 194) {
    setRegular = "M";
    setPlusSize = "Large";
  } else if (weight >= 195 && weight <= 214) {
    setRegular = "L";
  } else if (weight >= 215 && weight <= 229) {
    setRegular = "XL";
  } else if (weight >= 230) {
    setRegular = "XXL";
  } else {
    error = "Invalid Weight or Height";
  }
};
const height_6_2 = (weight) => {
  if (weight >= 141 && weight <= 170) {
    setRegular = "S";
    setPlusSize = "Long";
  } else if (weight >= 171 && weight <= 176) {
    setRegular = "M";
    setPlusSize = "Long";
  } else if (weight >= 177 && weight <= 187) {
    setRegular = "M";
    setPlusSize = "Large";
  } else if (weight >= 188 && weight <= 214) {
    setRegular = "L";
  } else if (weight >= 215 && weight <= 229) {
    setRegular = "XL";
  } else if (weight >= 230) {
    setRegular = "XXL";
  }
};
const height_6_3 = (weight) => {
  if (weight >= 141 && weight <= 176) {
    setRegular = "M";
    setPlusSize = "Long";
  } else if (weight >= 177 && weight <= 187) {
    setRegular = "M";
    setPlusSize = "Large";
  } else if (weight >= 188 && weight <= 214) {
    setRegular = "L";
  } else if (weight >= 215 && weight <= 229) {
    setRegular = "XL";
  } else if (weight >= 230) {
    setRegular = "XXL";
  }
};
const height_6_4 = (weight) => {
  if (weight >= 151 && weight <= 182) {
    setRegular = "M";
    setPlusSize = "Long";
  } else if (weight >= 183 && weight <= 187) {
    setRegular = "M";
    setPlusSize = "Large";
  } else if (weight >= 188 && weight <= 204) {
    setRegular = "L";
  } else if (weight >= 205 && weight <= 214) {
    setRegular = "XL";
  } else if (weight >= 215 && weight <= 229) {
    setRegular = "XXL";
  } else if (weight >= 230) {
    setRegular = "XXL";
  }
};
const height_6_5 = (weight) => {
  if (weight >= 151 && weight <= 182) {
    setRegular = "M";
    setPlusSize = "Long";
  } else if (weight >= 183 && weight <= 187) {
    setRegular = "M";
    setPlusSize = "Large";
  } else if (weight >= 188 && weight <= 204) {
    setRegular = "L";
  } else if (weight >= 205 && weight <= 214) {
    setRegular = "XL";
  } else if (weight >= 215 && weight <= 229) {
    setRegular = "XXL";
  } else if (weight >= 230) {
    setRegular = "XXL";
  }
};
var setSmartFit = "";
var setLoseFit = "";
const size = ["XS", "S", "M", "L", "XL", "XXL"];
const setSizes = (reg_size) => {
  for (var i = 0; i < size.length; i++) {
    if (reg_size == size[i]) {
      if (i == 0) {
        setSmartFit = reg_size;
        setLoseFit = size[i + 1];
      }
      if (i == size.length) {
        setSmartFit = size[i - 1];
        setLoseFit = reg_size;
      } else {
        setSmartFit = size[i - 1];
        setLoseFit = size[i + 1];
      }
      break;
    }
  }
};

const selection = (height, weight) => {
  switch (height) {
    case 5.1:
      height_5_1(weight);
      break;
    case 5.2:
      height_5_2_3_4(weight);
      break;
    case 5.3:
      height_5_2_3_4(weight);
      break;
    case 5.4:
      height_5_2_3_4(weight);
      break;
    case 5.5:
      height_5_5(weight);
      break;
    case 5.6:
      height_5_6(weight);
      break;
    case 5.7:
      height_5_7(weight);
      break;
    case 5.8:
      height_5_8(weight);
      break;
    case 5.9:
      height_5_9(weight);
      break;
    case 5.1:
      height_5_10(weight);
      break;
    case 5.11:
      height_5_11(weight);
      break;
    case 6.0:
      height_6(weight);
      break;
    case 6.1:
      height_6_1(weight);
      break;
    case 6.2:
      height_6_2(weight);
      break;
    case 6.3:
      height_6_3(weight);
      break;
    case 6.4:
      height_6_4(weight);
      break;
    case 6.5:
      height_6_5(weight);
      break;
    default:
      console.log("Invalid Size!");
      break;
  }
};
const HeightAndWeight = (height, weight) => {
  selection(height, weight);
  setSizes(setRegular);
  let data = {
    regular_Size: setRegular,
    smartFit_Size: setSmartFit,
    losseFit_Size: setLoseFit,
    plus_Size: setPlusSize,
    error: error,
  };
  return data;
};
module.exports = HeightAndWeight;
