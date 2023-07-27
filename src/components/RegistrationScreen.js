import {
	StyleSheet,
	View,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";

import Header from "./Header";
import Input from "./Input";
import Button from "./Button";
import ShowPasswordButton from "./ShowPasswordButton";
import Link from "./Link";

export default function SigInForm() {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAvoidingView
				// keyboardVerticalOffset={100}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={styles.container}
			>
				<View style={styles.inner}>
					<View style={styles.headerContainer}>
						<Header title="Реєстрація"></Header>
					</View>
					<View style={styles.inputContainer}>
						<Input placeholder="Логін" />
						<Input placeholder="Адреса електронної пошти" />
						<View style={styles.passwordContainer}>
							<Input placeholder="Пароль" />
							<ShowPasswordButton title="Показати" />
						</View>
					</View>
					<View style={styles.btnContainer}>
						<Button title="Зареєстуватися" />
						<Link title="Вже є акаунт? Увійти" />
					</View>
				</View>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 263,
		flex: 1,
		backgroundColor: "#fff",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},
	inner: {
		padding: 16,
		flex: 1,
		justifyContent: "space-around",
	},
	headerContainer: {
		marginTop: 76,
		marginBottom: 33,
	},
	inputContainer: {
		gap: 13,
		marginBottom: 43,
	},
  passwordContainer: {
    width: "100%",
		flexDirection: "row",
	},
	btnContainer: {
		marginBottom: 50,
	},
});
