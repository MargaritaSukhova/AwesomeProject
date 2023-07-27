import { ImageBackground, StyleSheet } from "react-native";

export default function BackGroundImage(props) {
	return (
		<ImageBackground source={props.source} resizeMode="cover" style={styles.image}>
			{props.children}
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	image: {
		flex: 1,
		justifyContent: "center",
	},
});
