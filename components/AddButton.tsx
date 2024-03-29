import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export type AddButtonProps = {
  onPress: () => void;
}

const AddButton = (props: AddButtonProps) => {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
        <Ionicons name="ios-add" size={24} color="#fff" />
        <Text style={styles.title}>Add new item</Text>
    </Pressable>
  )
}

export default AddButton

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#3D2C8D",
        width: "90%",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        padding: 10,
        borderRadius: 10,
        marginBottom: 20
    },
    title:{
        color: "#E4DCCF",
        fontSize: 20,
        fontWeight: "700",
        marginLeft: 5
    }
})