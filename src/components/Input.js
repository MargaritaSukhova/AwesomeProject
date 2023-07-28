import { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function Input({ placeholder }) {
	const [isFocused, setIsFocused] = useState(false);

	if (placeholder === "Пароль") {
		return (
			<TextInput
				placeholder={placeholder}
				secureTextEntry
				style={isFocused ? [styles.textInput, styles.focus] : styles.textInput}
				onBlur={() => setIsFocused(false)}
				onFocus={() => setIsFocused(true)}
			/>
		);
	}
	
	return (
		<TextInput
			placeholder={placeholder}
			style={isFocused ? [styles.textInput, styles.focus] : styles.textInput}
			onBlur={() => setIsFocused(false)}
			onFocus={() => setIsFocused(true)}
		/>
	);
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
	focus: {
		borderColor: "#FF6C00",
		backgroundColor: "#FFF",
		color: "#212121",
	},
});