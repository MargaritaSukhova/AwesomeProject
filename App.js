import { StatusBar } from "expo-status-bar";

import {
	StyleSheet,
	Text,
	View,

} from "react-native";

import { useFonts } from "expo-font";

import BackGroundImage from "./src/components/BackGroundImage";
import SigInForm from "./src/components/SignInForm";

import BackGround from "./src/assets/images/background.png";

export default function App() {
	const [fontsLoaded] = useFonts({
		"Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
		"Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
		"Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={styles.container}>
			<BackGroundImage source={BackGround}>
			{/* <View style={styles.form}> */}
				<SigInForm />
			{/* </View> */}
			</BackGroundImage>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	// container: {
	// 	flex: 1,
	// 	backgroundColor: "#fff",
	// 	alignItems: "center",
	// 	justifyContent: "center",
	// },
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
  // form: {
	// 	flex: 1,
	// 	width: 1,
	// 	heigh: 400,
	// 	backgroundColor: "#fff",
	// },
});

// import {
// 	View,
// 	KeyboardAvoidingView,
// 	TextInput,
// 	StyleSheet,
// 	Text,
// 	Platform,
// 	TouchableWithoutFeedback,
// 	Button,
// 	Keyboard,
// } from "react-native";

// const KeyboardAvoidingComponent = () => {
// 	return (
// 		<KeyboardAvoidingView
// 			behavior={Platform.OS === "ios" ? "padding" : "height"}
// 			style={styles.container}
// 		>
// 			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
// 				<View style={styles.inner}>
// 					<Text style={styles.header}>Header</Text>
// 					<TextInput placeholder="Username" style={styles.textInput} />
// 					<View style={styles.btnContainer}>
// 						<Button title="Submit" onPress={() => null} />
// 					</View>
// 				</View>
// 			</TouchableWithoutFeedback>
// 		</KeyboardAvoidingView>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 	},
// 	inner: {
// 		padding: 24,
// 		flex: 1,
// 		justifyContent: "space-around",
// 	},
// 	header: {
// 		fontSize: 36,
// 		marginBottom: 48,
// 	},
// 	textInput: {
// 		height: 40,
// 		borderColor: "#000000",
// 		borderBottomWidth: 1,
// 		marginBottom: 36,
// 	},
// 	btnContainer: {
// 		backgroundColor: "white",
// 		marginTop: 12,
// 	},
// });

// export default KeyboardAvoidingComponent;
