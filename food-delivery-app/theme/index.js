const opacity = 1;
const lowOpacity = 0.2;
export const pallete = [
  {
    // orange
    text: "#f97316",
    bgColor: `rgba(251, 146, 60, ${opacity})`,
    lowBgColor: `rgba(251, 146, 60, ${lowOpacity})`,
  },
  {
    // dark gray
    text: "#334155",
    bgColor: `rgba(30, 41, 59, ${opacity})`,
    lowBgColor: `rgba(30, 41, 59, ${lowOpacity})`,
  },
  {
    // purple
    text: "#7c3aed",
    bgColor: `rgba(124, 62, 237, ${opacity})`,
    lowBgColor: `rgba(124, 62, 237, ${lowOpacity})`,
  },
  {
    // green
    text: "#009950",
    bgColor: `rgba(0, 153, 80, ${opacity})`,
    lowBgColor: `rgba(0, 153, 80, ${lowOpacity})`,
  },
  {
    // teal
    text: "#14b8a6",
    bgColor: `rgba(20, 184, 166, ${opacity})`,
    lowBgColor: `rgba(20, 184, 166, ${lowOpacity})`,
  },
  {
    // red
    text: "#dc2626",
    bgColor: `rgba(220, 38, 38, ${opacity})`,
    lowBgColor: `rgba(220, 38, 38, ${lowOpacity})`,
  },
];
export const themeColors = {
  ...pallete[0],
};
