import React from 'react';
import { TouchableOpacity, StyleSheet,Text } from 'react-native';

import AppIcon from './AppIcon';
import AppText from './AppText';


function AppPickerItem({onPress, label, icon, backgroundColor}) {
        return (
            <TouchableOpacity onPress={onPress} style={styles.container}>
                <AppIcon name={icon} iconColor="white" backgroundColor={backgroundColor}/>
                <Text style={styles.label}> {label} </Text>
            </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        paddingVertical: 20,
        width:"33%",
        alignItems:"center",
    },
    label:{
        fontSize:16,

    }
})

export default AppPickerItem;