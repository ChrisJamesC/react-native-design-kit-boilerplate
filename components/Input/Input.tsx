import React from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';

interface InputProps extends TextInputProps {
  label?: string;
  finePrint?: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  const inputRef = React.useRef<TextInput>(null);

  const [active, setActive] = React.useState<boolean>(false);
  const filled = Boolean(props.value?.length);

  //   React.useEffect(() => {
  //     setFocused(inputRef.current?.isFocused() || false);
  //   }, [inputRef]);
  //   const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) =>
  //     console.log(e.nativeEvent);

  return (
    <View>
      {label && (filled || active) && <Text>{label}</Text>}

      <TextInput
        ref={inputRef}
        onBlur={() => setActive(false)}
        onFocus={() => setActive(true)}
        {...props}
      />
      <TextInput value="hello" />
    </View>
  );
};

export default Input;
