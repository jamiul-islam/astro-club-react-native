import * as Font from "expo-font";

export default useFonts = async () => {
  await Font.loadAsync({
    "Antonio-Medium": require("../assets/fonts/Antonio-Medium.ttf"),
    "Spartan-Bold": require("../assets/fonts/Spartan-Bold.ttf"),
    "Spartan-Regular": require("../assets/fonts/Spartan-Regular.ttf"),
  });
};
