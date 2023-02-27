import {StyleSheet, Text, View} from "react-native";
import React from "react";

const Card = ({ title, data1, data2, data3 }:{title:string, data1:string, data2:string, data3:string }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.dataContainer}>
                <Text style={styles.data}>{data1}</Text>
                <Text style={styles.data}>{data2}</Text>
                <Text style={styles.data}>{data3}</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 20,
        margin: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    dataContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    data: {
        fontSize: 16,
        marginBottom: 5,
    },
});
export default Card;