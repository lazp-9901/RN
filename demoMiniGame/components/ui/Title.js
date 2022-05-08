import React from "react";

import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

const Title = ({children}) =>{
    return <Text style={styles.title}>{children}</Text>
}

export default Title

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'Opensans-Bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12
    }
})