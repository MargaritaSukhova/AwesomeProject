import { TextInput, StyleSheet } from 'react-native';

export default function Input({ placeholder }) {
  return <TextInput placeholder={placeholder} style={styles.textInput} />;
}

const styles = StyleSheet.create({
  textInput: {
    width: "100%",
		height: 50,
    padding: 16,
    fontSize: 16,
		borderColor: "#E8E8E8",
		backgroundColor: "#F6F6F6",
		borderWidth: 1,
		borderRadius: 8,
	},
});