import { Pressable, Text, StyleSheet } from "react-native";

export default function Button({ title }) {
  return (
		<Pressable style={styles.button} onPress={() => alert("Press")}>
			<Text style={styles.title}>{title}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#FF6C00",
		padding: 16,
		borderRadius: 100,
	},
	title: {
		color: "#FFF",
		textAlign: "center",
		fontSize: 16,
		fontWeight: 400,
	},
});
