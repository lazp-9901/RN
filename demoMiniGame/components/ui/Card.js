import React from "react"
import { View, StyleSheet } from 'react-native'


import Colors from "../../constants/colors"

const Card = ({children}) =>{
    return <View style={styles.Card}>{children}</View>
}

export default Card

const styles = StyleSheet.create({
    Card:{
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
        marginTop: 36,
        padding: 16,
        borderRadius: 8,
        backgroundColor: Colors.primary700,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width:0, height:2},
        shadowRadius: 6,
        shadowRadius: 0.25,
    },
})