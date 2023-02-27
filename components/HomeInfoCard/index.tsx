import {StyleSheet, Text, View} from "react-native";
import React from "react";

const HomeInfoCard = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>Contractos</Text>
            <View style={styles.dataContainer}>
                <Text style={styles.data}>Abertos: {`2`}</Text>
                <Text style={styles.data}>Fechados: {`2`}</Text>
                <Text style={styles.data}>Pedidos: {`2`}</Text>
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
export default HomeInfoCard;