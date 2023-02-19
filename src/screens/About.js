import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const About = () => {
  return (
    <View style={styles.mainContainer}>
        <Text>
        National Polymer is one of the premier conglomerates in Bangladesh. With headquarters in NPOLY HOUSE, Pragati Shoroni, Middle Badda, Badda, Dhaka. We conduct business countrywide, driven by the passion to be the best and with a team of unique professionals.
        </Text>
        <View>
            <Text>
              National Polymer started its business officially in June 1987 and now it is growing up successfully in multiple sectors. Striving to implement the practical initiatives required for achieving its vision and guided by a relentless focus on values, the group maintains close relations with its target customer thereby guaranteeing quality uPVC, PP-R, CPVC pipes and fittings, PVC Doors, Sheet, Ceiling also Plastic Household and Furniture products and efficient service to their valued customers. National Polymer believes in delivering operational excellence to meet commitments. For the progression of its mission, it has diversified products and growing to be one of the largest industrial conglomerates of the country. With diversification and a rich variation of products, it has earned the reputation among Bangladeshi people and abroad as a manufacturer of premium and quality products and services.
            </Text>
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

export default About;





