import { View, Image, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Avatar({source}) {
  return (
		<View style={styles.container}>
			<Image source={source} />
			<Pressable style={styles.button} onPress={()=>alert('click')}>
				<AntDesign name="pluscircleo" size={24} color="#FF6C00" />
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 120,
		height: 120,
		position: "absolute",
		alignSelf: "center",
		top: -60,
		borderRadius: 16,
		backgroundColor: "#F6F6F6",
	},
	button: {
		position: "absolute",
    alignSelf: "center",
    right: -12,
    bottom: 9,
	},
});
