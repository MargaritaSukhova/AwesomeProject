import { Pressable, Text, StyleSheet } from "react-native";

export default function ShowPasswordButton({ title }) {
  return (
   
		<Pressable style={styles.button} onPress={() => alert("Show password")}>
			<Text style={styles.title}>{title}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		position: "absolute",
		alignSelf: "center",
    right: 0,
    padding: 16,
	},
	title: {
		color: "#1B4371",
		fontSize: 16,
		textAlign: "right",
	},
});
