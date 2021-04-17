import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { HeaderButtons } from 'react-navigation-header-buttons';
import { AntDesign } from '@expo/vector-icons';

const PaymentDetails = (props) => {

    const loadProduct = async () => {
        setIsLoading(true);

        let respone = await fetch('https://fakestoreapi.com/products')
        let productJson = await respone.json();
        console.log(productJson);
        console.clear();
        setIsLoading(false);
        setProducts(productJson);
    }

    const product = (item) => {
        return (
            <View>
                <Text>{item.item.price}</Text>
            </View>
        );
    }

    const notAvailable = () => {
        return (
            <View>
                <Text>No Products Available</Text>
            </View>
        )
    }
    const Loading = () => {
        return (
            <View>
                <Text>Loading....</Text>
            </View>
        );
    }

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <View style={styles.container}>

            <Button title="Add product" onPress={loadProduct}></Button>
            { isLoading ? <Loading /> : <FlatList
                // keyExtractor={(record) => record.id.toString}
                data={products}
                renderItem={product}
                ListEmptyComponent={notAvailable}
            />}
        </View>
    )
}
PaymentDetails.navigationOptions = (navData) => {
    return {
        headerTitle: 'FIFA world cup kits',

        headerStyle: {
            backgroundColor: 'white',
            height: 80,
        },
        headerTintColor: 'black',
        headerTitleAlign: 'center',

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
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
});
export default PaymentDetails;
