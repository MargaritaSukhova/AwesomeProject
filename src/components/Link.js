import { Pressable, Text, StyleSheet } from "react-native";

export default function Link({ title }) {
	return (
    <Pressable style={styles.link} onPress={() => alert("PressLink")}>
			<Text style={styles.title}>{title}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
  link: {
    padding: 16,
  },
	title: {
    color: "#1B4371",
    fontSize: 16,
    textAlign: "center",
	},
});
