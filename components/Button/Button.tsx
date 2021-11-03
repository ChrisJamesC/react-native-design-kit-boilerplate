import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export interface MyButtonProps {
  onPress: () => void;
  text: string;
  secondary: boolean;
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    position: "relative",
    width: 352,
    height: 48,

    /* Light/Neutral/G1000 */

    backgroundColor: "green",
    borderRadius: 12,
  },
  containerSecondary: {
    backgroundColor: "red",
  },
  text: {
    top: 0,
    bottom: 0,
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 24,
    display: "flex",
    alignItems: "center",
    color: "#FFFFFF",
    flexGrow: 0,
    marginHorizontal: 8,
    marginVertical: 0,
  },
});

const MyButton: React.FC<MyButtonProps> = ({
  onPress,
  text,
  secondary = false,
}: MyButtonProps) => (
  <TouchableOpacity
    style={[styles.container, secondary ? styles.containerSecondary : false]}
    onPress={onPress}
  >
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export default MyButton;
