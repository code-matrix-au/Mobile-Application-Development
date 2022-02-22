import React from 'react';
import { View, Image, StyleSheet ,Text} from 'react-native';


import AppColors from '../config/AppColors';
import AppText from '../components/AppText';

function AppCard({category, title, subtitle, image}) {
    return (
        <View style={styles.container}>
            {isFinite(image)? <Image source={image} style={styles.image}/> :<Image source={{uri: image}} style={styles.image}/>}
            <Text style={styles.title}> {title} </Text>
            <Text style={styles.subtitle}> {subtitle} </Text>  
            <AppText style={styles.subtitle}> {category} </AppText> 
        </View>
    );
}



const styles = StyleSheet.create({
    container:{
        backgroundColor:AppColors.otherColorLite,
        borderRadius:20,
        overflow:"hidden",
        marginBottom: 25,
    }, 
    image:{
        height: 150,
        width: "100%",
    },
    title:{
        fontSize: 30,
        fontFamily: "Avenir-Roman",
        fontWeight: "400",
    },
    subtitle:{
        fontSize: 10,
        fontFamily: "Avenir-Roman",
        fontWeight: "400",
    },
    text: {
        
      },
})

export default AppCard;