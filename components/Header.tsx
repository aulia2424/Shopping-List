import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export type HeaderProps = {
    total: number;
    onAllList: () => void;
    onDeleteAll: () => void;
}


const Header = (props: HeaderProps) => {
    // store today's date
    const [date,setDate] = useState(new Date());

  return (
    <View style={styles.container}>
        <Pressable style={styles.topContainer} onPress={props.onAllList}>
            {/* heading */}
            <Ionicons name="cart-outline" size={35} color="#ffff"></Ionicons>
            <Text style={styles.heading}>ShoppingList:</Text>
            {/* total items in the list */}
            <Text style={styles.totalItems}>({props.total})</Text>
            {/* delete button to delete all items */}
            <Pressable style={styles.delete} onPress={props.onDeleteAll}>
                <MaterialIcons name="delete" size={25} color="#F15A59" />
            </Pressable>
        </Pressable>
        {/* date */}
        <Text style={styles.date}>Date: {date.toISOString().substring(0,30)} </Text>
    </View>
  )
}


export default Header
const styles = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor: "#3D2C8D",
        width: "100%",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginBottom: 20
    },
    topContainer:{
        flexDirection: "row",
        marginTop: Platform.OS === "android" ? 50 : 0,
        alignItems: "center"
    },
    heading:{
        color: "#fff",
        fontSize: 24,
        marginLeft: 10,
        
    },
    totalItems:{
        color: "#ffff",
        fontSize: 24,
        marginLeft: 10
    },
    delete:{
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        marginLeft: 10
      },
    date:{
        color: "#ECE8DD",
        fontSize: 15,
        marginTop: 15,
        marginLeft: 10
    }
})