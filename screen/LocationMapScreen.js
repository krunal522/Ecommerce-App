import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, FlatList, Dimensions, Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';


const LocationMapScreen = () => {

    //map start
    // const [errorMsg, setErrorMsg] = useState([]);
    const [location, setLocation] = useState(null);


    useEffect(() => {
        (async () => {
            if (Platform.OS === 'android' && !Constants.isDevice) {
                setErrorMsg(
                    'Try it on your device!'
                );
                return;
            }
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Not granted');
                return;
            }
            let location = await Location.getCurrentPositionAsync();
            console.log('Location LOG........', location.coords.longitude);
            setLocation(<MapView style={styles.map} region={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}>
                <Marker
                    coordinate={
                        {
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude
                        }
                    }
                    // 
                     // any color
                    title={"title"}
                    description={"description"}
                />

            </MapView>);
            // console.log(location);

        })();
    }, []);
    return (
        <View>
            <Text>{location}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
});
export default LocationMapScreen;