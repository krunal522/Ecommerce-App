import { createAppContainer } from 'react-navigation';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import MensCategory from '../screen/MensCategory';
import MensDetails from '../screen/MensDetails';
import PaymentDetails from '../screen/PaymentDetails';
import LocationMapScreen from '../screen/LocationMapScreen';

const Navigator = createStackNavigator({
    Home: MensCategory,
    Details: {
        screen: MensDetails
    },
    Payment: PaymentDetails,
    Location: LocationMapScreen
});
const DrawerNavigation = createDrawerNavigator({
    Home: {
        screen: Navigator,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name="ios-home" color={tintColor} size={25} />
            )
        }
    },
    Payment: {
        screen: Navigator,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <MaterialIcons name="details" size={24} color="black" />
            )
        }
    },
    Location: {
        screen: Navigator,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Entypo name="location" size={24} color="black" />
            )
        }
    },
},
);
export default createAppContainer(DrawerNavigation);