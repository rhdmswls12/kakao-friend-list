import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "./src/Header";
import {
  getStatusBarHeight,
  getBottomSpace,
} from "react-native-iphone-x-helper";

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
    backgroundColor: "#fff",
  },
});
