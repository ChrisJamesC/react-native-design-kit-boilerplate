import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface MyButtonProps {
  onPress: () => void;
  text: string;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    position: 'relative',
    width: 352,
    height: 48,

    /* Light/Neutral/G1000 */

    backgroundColor: '#000000',
    borderRadius: 24,
  },
  text: {
    /* label */

    // position: "static",
    width: 39,
    left: 'calc(50% - 39px/2)',
    top: 0,
    bottom: 0,

    /* ButtonLabel/Default */

    fontFamily: 'Lab Grotesque',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    /* identical to box height, or 150% */

    display: 'flex',
    alignItems: 'center',

    /* Light/Neutral/G000 */

    color: '#FFFFFF',

    /* Inside Auto Layout */

    // flex: "none",
    // order: 1,
    flexGrow: 0,
    margin: '0px 8px',
  },
});

const MyButton = ({ onPress, text }: MyButtonProps) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export default MyButton;
