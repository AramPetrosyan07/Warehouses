const orangeColors = {
  orange10:  "#FDF0EA",
  orange20:  "#F9D0BF",
  orange30:  "#F6B99F",
  orange40:  "#F29974",
  orange50:  "#EF8559",
  orange60:  "#EB672F",
  orange70:  "#EA581A",
  orange80:  "#B04416",
  orange90:  "#8E350F",
  orange100: "#632B14"
};

const darkBlueColors = {
  blue10:  "#E9EAED",
  blue20:  "#B9BEC6",
  blue30:  "#989FAB",
  blue40:  "#687384",
  blue50:  "#4B586D",
  blue60:  "#1B2A42",
  blue70:  "#152133",
  blue80:  "#111928",
  blue90:  "#0D131E"
};

const grayColors = {
  gray10:  "#FBFBFC",
  gray20:  "#F9F9FA",
  gray30:  "#F2F3F4",
  gray35:  "#E6E8EA", 
  gray40:  "#D5D8DC",
  gray50:  "#C0C2C6",
  gray60:  "#A0A2A5",
  gray70:  "#808284",
  gray80:  "#606163",
  gray90:  "#4B4C4D",
  gray100: "#232229"
};

const redColors = {
  red10: "#FEE9E9",
  red20: "#FDCECE",
  red30: "#FBA5A5",
  red40: "#F98080",
  red50: "#F74949",
  red60: "#F52424",
  red70: "#AC1919",
  red80: "#951616"
};

const greenColors = {
  green10: "#ECF5EB",
  green20: "#CFE5CC",
  green30: "#B2D6AE",
  green40: "#91C48D",
  green50: "#62AB5B",
  green60: "#429A3A",
  green70: "#2E6C29",
  green80: "#285E23"
};

const yellowColors = {
  yellow10: "#FEFAED",
  yellow20: "#FCF2D4",
  yellow30: "#FAE9B6",
  yellow40: "#F7E097",
  yellow50: "#F4D26A",
  yellow60: "#F2C94C",
  yellow70: "#CC9E0F",
  yellow80: "#947B2E"
};

const blueColors = {
  blue10: "#ECEBFC",
  blue20: "#B2ACF2",
  blue30: "#9289ED",
  blue40: "#6357E5",
  blue50: "#4334E0",
  blue60: "#2F249D",
  blue70: "#292089"
};

interface ColorShades {
  [shade: string]: string;
}

interface IColors {
  orange: ColorShades;
  darkBlue: ColorShades;
  gray: ColorShades;
  red: ColorShades;
  green: ColorShades;
  yellow: ColorShades;
  blue: ColorShades;
}

export const COLOR: IColors = {
  orange: orangeColors,
  darkBlue: darkBlueColors,
  gray: grayColors,
  red: redColors,
  green: greenColors,
  yellow: yellowColors,
  blue: blueColors,
};