import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title }) {
  return (
      <Text style={styles.header}>{title}</Text>
	);
}

const styles = StyleSheet.create({
	header: {
		textAlign: "center",
		color: "#212121",
		fontSize: 30,
		fontWeight: 500,
		letterSpacing: 0.3,
	},
});