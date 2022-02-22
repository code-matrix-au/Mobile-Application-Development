import React, {useState} from 'react';

import { View, StyleSheet, Modal, Button, TouchableWithoutFeedback, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppText from './AppText';
import AppScreen from './AppScreen';
import AppPickerItem from './AppPickerItem';
import DataManager from '../config/DataManager';


const getHotels = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    return commonData.getHotels(user);
    
}
const handleDelete = (author) => {
    const newAuthorList =  authors.filter (item => item.id !== author.id);
    setAuthors(newAuthorList);
}

function AppPicker({data, icon, placeholder, numColumns, selectedItem, onSelectedItem}) {
    const[modalVisible,setModalVisible] =useState(false);
    const hotelList = getHotels();
    return (
        <>

            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={35}/>}
                    <AppText style={styles.text}> {selectedItem? selectedItem.label : placeholder} </AppText>
                    <MaterialCommunityIcons name="chevron-down" size={35}/>
                </View>
            </TouchableWithoutFeedback>
            
            <Modal visible={modalVisible} animationType="slide">
                <AppScreen>
                    <Button title="Close" onPress={() => setModalVisible(false)}/>
                    <FlatList
                        numColumns={numColumns}
                        data={data}
                        keyExtractor={item => item.value.toString()}
                        renderItem = {({item}) => 
                        <AppPickerItem
                            onPress={()=> {
                                setModalVisible(false);
                                onSelectItem(item);
                                    }
                                }
                            label={item.label}
                            icon={item.icon}
                            backgroundColor={item.backgroundColor}
                            />}
                    />
                    <FlatList 
                         data={hotelList}
                         keyExtractor = {book => book.bookid.toString()}
                          renderItem = {({item}) => 
                        <AppCard
                            title={item.title}
                            subtitle={item.subtitle}
                            image={item.image}
                            category={item.category}
                            onSwipeLeft={()=>(
                                console.log("heyyy")
                              //  <View style={styles.deleteView}>
                               //     <TouchableOpacity onPress={() => handleDelete(item)}>
                                //      <AppIcon name="trash-can" iconColor={AppColors.otherColor} backgroundColor={AppColors.primaryColor}/> 
                                //    </TouchableOpacity>
                               // </View>)}
                            )}
                                
                          
                        />}
                />
                </AppScreen> 
            </Modal>
    </>
    
    );
}

const styles = StyleSheet.create({
container:{
    alignItems:"center",
    justifyContent:"center",
    justifyContent:"space-evenly",
    backgroundColor:"#e0e0eb",
    flexDirection: 'row',
    borderRadius: 25, 
    padding: 10,
    marginVertical: 20,
    width:'100%',
},
text:{
    flex:1,
},
})

export default AppPicker;