import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
// import { set } from 'react-native-reanimated';
import { HeaderButtons } from 'react-navigation-header-buttons';
// import { SwiperFlatList } from 'react-native-swiper-flatlist';


const MensDetails = (props) => {

    const [num, setNum] = useState(0);

    const onPressIncrement = () => {
        setNum(num + 1);
    }

    const onPressDecrement = () => {

        if (num > 0)
            setNum(num - 1);
    }



    let Details = props.navigation.getParam('itemDetails');

    return (
        <View style={styles.container}>

            <View style={styles.linestyle}>
                {/* <SwiperFlatList autoplay autoplayDelay={2} autoplayLoop index={2} showPagination>  */}
                    <Image source={{ uri: Details.image }} style={{ height: 200, width: 210 }} />
                   {/* <Image source={{ uri: Details.image }} style={{ height: 200, width: 210 }} />  */}
                 {/* </SwiperFlatList>  */}
            </View>


            <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', margin: 2, marginBottom: 1 }}>{Details.title}</Text>
                <View>
                    <Text style={{ textAlign: 'center', fontSize: 18, marginBottom: 1, }}>{Details.brand}</Text>
                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginTop: 1 }}>{Details.price}</Text>
                </View>
            </View>

            <View style={{ flex: 1, display: 'flex', flexDirection: 'row', borderTopWidth: 1, }}>
                <View style={{ width: 50, margin: 15, display: 'flex', flex: 1, flexDirection: 'row' }}>
                    <View style={{ display: 'flex', paddingRight: 30 }}>
                        <Text style={{ fontWeight: 'bold', marginTop: 12, fontSize: 18 }}>Size</Text>
                    </View>

                    {/* <View style={{ margin: 10, width: 45 }}>
                        <Button title='S' color="black" ></Button>
                    </View> */}

                    <TouchableOpacity style={{ margin: 8, width: 50, backgroundColor: 'white', padding: 15, borderWidth: 1, justifyContent: 'center' }} >
                        <Text style={{ color: 'black', }}>M</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={{ margin: 8, width: 45, backgroundColor: 'white', padding: 15, borderWidth: 1, justifyContent: 'center' }} >
                        <Text style={{ color: 'black' }}>L</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ margin: 8, backgroundColor: 'white', padding: 15, borderWidth: 1, justifyContent: 'center' }} >
                        <Text style={{ color: 'black', }}>XL</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ margin: 8, backgroundColor: 'white', padding: 15, borderWidth: 1, justifyContent: 'center' }} >
                        <Text style={{ color: 'black', }}>XXL</Text>
                    </TouchableOpacity>

                </View>
            </View>
            {/* 

            <View style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', marginTop: 12, fontSize: 18, marginTop: 40 }}>Kit</Text>
                <View style={{ margin: 8, width: 70 }}>
                    <Button title='HOME' color="black" ></Button>
                </View>
                
            </View> */}

            <View style={{ margin: 15, display: 'flex', flex: 1, flexDirection: 'row', marginBottom: 2 }}>
                <View style={{ display: 'flex', paddingRight: 30 }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 12, fontSize: 18 }}>Kit</Text>
                </View>

                <TouchableOpacity style={{ margin: 10, width: 70 }}>
                    <Text style={{ borderWidth: 1, padding: 5, alignSelf: 'center', }}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ margin: 10, }}>
                    <Text style={{ borderWidth: 1, padding: 5, alignSelf: 'center', }}>AWAY</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ margin: 10, width: 70 }}>
                    <Text style={{ borderWidth: 1, padding: 5, alignSelf: 'center' }}>THIRD</Text>
                </TouchableOpacity>


            </View>
            <View style={{ display: 'flex', flex: 1, flexDirection: 'row', paddingBottom: 2 }}>
                <View style={{ margin: 15, display: 'flex', flex: 1, flexDirection: 'row', }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, }}>Qty</Text>
                    <View style={{ display: 'flex', flex: 1, flexDirection: 'row', paddingHorizontal: 45, }}>
                        <TouchableOpacity onPress={onPressDecrement}>
                            <AntDesign name="minussquareo" size={28} color="black" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 22, marginHorizontal: 10, fontWeight: 'bold' }}>{num}</Text>

                        <TouchableOpacity onPress={onPressIncrement}>
                            <AntDesign name="plussquareo" size={28} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>










            {/* web Design */}
            {/* <View style={{ marginBottom: '100%', marginTop: 1 }}>
                <View style={{ margin: 15, display: 'flex', flex: 1, flexDirection: 'row', }}>
                    <View style={{ display: 'flex', paddingRight: 30 }}>
                        <Text style={{ fontWeight: 'bold', marginTop: 12, fontSize: 18 }}>Kit</Text>
                    </View>

                //     <View style={{ margin: 10, width: 70 }}>
                //         <Button title='HOME' ></Button>
                //     </View>
                //     <View style={{ margin: 10, width: 70 }}>
                //         <Button title='AWAY'></Button>
                //     </View>
                //     <View style={{ margin: 10, width: 70 }}>
                //         <Button title='THIRD'></Button>
                //     </View>
                // </View>

                <View style={{ margin: 15 }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 12, fontSize: 18 }}>QTY</Text>
                </View>
            </View> */}
        </View>
    );
}
MensDetails.navigationOptions = (navData) => {
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
        flex: 1,
        backgroundColor: 'white',
    },
    linestyle: {
        alignSelf: 'center',
        margin: 10,
    },

});
export default MensDetails;