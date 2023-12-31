import {
	StyleSheet,
	View,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";

import BackGroundImage from "./BackGroundImage";
import Avatar from "./Avatar";
import Header from "./Header";
import Input from "./Input";
import Button from "./Button";
import ShowPasswordButton from "./ShowPasswordButton";
import Link from "./Link";

import BackGround from "../assets/images/background.png";

export default function RegistrationScreen() {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.container}>
				<BackGroundImage source={BackGround}>
					<KeyboardAvoidingView
						keyboardVerticalOffset={-200}
						behavior={Platform.OS === "ios" ? "padding" : "height"}
						style={styles.formContainer}
					>
						<View style={styles.inner}>
							<Avatar />
							<View style={styles.headerContainer}>
								<Header title="Реєстрація"></Header>
							</View>
							<View style={styles.inputContainer}>
								<Input value="login" placeholder="Логін" />
								<Input value="email" placeholder="Адреса електронної пошти" />
								<View value="password" style={styles.passwordContainer}>
									<Input placeholder="Пароль" secureTextEntry="true" />
									<ShowPasswordButton title="Показати" />
								</View>
							</View>
							<View style={styles.btnContainer}>
								<Button title="Зареєстуватися" />
								<Link title="Вже є акаунт? Увійти" />
							</View>
						</View>
					</KeyboardAvoidingView>
				</BackGroundImage>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	formContainer: {
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
