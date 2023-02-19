import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Contact = () => {
  return (
    <View style={styles.mainContainer}>
        <Text>GA-99/3, Pragati Shoroni, Middle Badda,Dhaka-1212, Bangladesh.</Text>
        <View>
            <Text>+88 09610100001</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        paddingHorizontal: 30,
        backgroundColor: "#fff",
    }
});

export default Contact;





