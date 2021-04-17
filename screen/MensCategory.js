import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, ImageBackground, ScrollView, Button ,Image} from 'react-native';
import { HeaderButtons } from 'react-navigation-header-buttons';
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import loading from '../assets/loading-icon-animated-gif-19.jpg';

import CATEGORIES from '../data/dummy-catergorys';


const MensCategory = (props) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);



    const loadAllProducts = async () => {
        setIsLoading(true);
        let myProducts = await fetch('https://fakestoreapi.com/products');
        let productJson = await myProducts.json();
        // console.log(productJson);
        console.clear();
        setIsLoading(false);
        setProducts(productJson);
    }

    useEffect(() => {
        loadAllProducts();
    }, []);


    const gotoMensList = (Item) => {
        props.navigation.navigate('Details', { itemDetails: Item });
    }

    const noDataAvailble = () => {
        return (
            <View>
                <Text>Not data Available </Text>
            </View>
        );
    }

    const Loading = () => {
        return (
            <View>
                
                <Text style={{justifyContent:'center',alignContent:'center',textAlign:'center',fontSize:25}}>
                      <ImageBackground source={loading } style={{width:380,height:440,backgroundColor:'white'}} /> 

                      {/* Loading........... */}
        
                </Text>
            </View>
        );
    }

    const renderMensCategory = ({ item }) => {
        return (
            <View style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
                <View style={styles.imagepick}>
                    <TouchableOpacity
                        style={[styles.categoryItem, { backgroundColor: item.color }]}
                        onPress={() => gotoMensList(item)}>
                        <ImageBackground source={{ uri: item.image }} style={styles.image}>
                        </ImageBackground>
                    </TouchableOpacity>
                    <View style={{ margin: 10, backgroundColor: 'white' }}>
                        <View style={styles.titledes}>
                            <Text style={{ fontWeight: 'bold' }}>{item.title.substring(0, 10)}</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                                <Text style={{ margin: 1, fontFamily: 'RobotoSlab-light' }}>
                                    {item.description.substring(0, 20)}...
                                </Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                                <Text style={{ margin: 1, fontWeight: 'bold', marginTop: 5 }}>₹.{item.price}</Text>
                                <TouchableOpacity>
                                    <Text style={{ color: 'dodgerblue', paddingLeft: 30, marginTop: 5 }}>ADD TO CART...</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
    return (
        <View>
            <ScrollView>
                <View style={styles.screen}>
                    <View>
                        <Text style={{ margin: 15, fontSize: 18, fontFamily: 'Courgette-Regular' }}>Authentic World Cup Kits</Text>
                        <View style={{ margin: 20, paddingRight: 10, display: 'flex', flex: 1, flexDirection: 'row', marginTop: 10 }}>
                            <View style={{ borderWidth: 1, padding: 10, width: 310, alignSelf: 'center', flex: 1, flexDirection: 'row', }}>
                                <EvilIcons name="search" size={24} color="black" />
                                <TextInput style={styles.searchkit} placeholder="Search Kits"></TextInput>
                            </View>
                        </View>
                    </View>

                    {isLoading ? <Loading /> : <FlatList
                        data={products}
                        renderItem={renderMensCategory}
                        numColumns={2}
                        ListEmptyComponent={noDataAvailble}
                    />}
                </View>
            </ScrollView>
        </View>
    )

}

MensCategory.navigationOptions = (navData) => {
    return {
        headerTitle: 'FIFA world cup kits',

        headerStyle: {
            backgroundColor: 'white',
            height: 80,
        },
        headerTintColor: 'black',
        headerTitleAlign: 'center',

        headerLeft: <HeaderButtons>
            <FontAwesome name="bars" style={{ padding: 20, }} size={30} color="black"
                onPress={() => {
                    navData.navigation.toggleDrawer()
                }}></FontAwesome>
        </HeaderButtons>,


        headerRight: <HeaderButtons>
            <TouchableOpacity>
                <View style={{ padding: 10 }}>
                    <AntDesign name="shoppingcart" size={24} color="black" />
                </View>
            </TouchableOpacity>

        </HeaderButtons>


    };
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    imagepick: {

        // borderRadius: 20,
        // justifyContent: 'center',
        // marginTop: 5,
        // paddingTop: 15,

    },
    titledes: {
        height: 70,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    screen: {
        marginRight: 10,
    },
    searchkit: {
        marginLeft: 8,
        width: '100%',
        height: 20,
    },
    categoryItem: {
        height: 180,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 2,
    },
    image: {
        resizeMode: 'stretch',
        flex: 1,
        height: 200,
        width: 165,
        paddingHorizontal: 30

    },
   

});


export default MensCategory;