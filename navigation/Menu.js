import * as React from 'react';
import { StyleSheet, Button, View, Text, Dimensions } from 'react-native';
import { createDrawerNavigator, DrawerContent, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import MenuIcon from "react-native-bootstrap-icons/icons/three-dots";
import MapScreen from '../screens/MapScreen';
import AddBathroomScreen from '../screens/AddBathroomScreen';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';
import DetailsScreen from '../screens/DetailsScreen';
import LoginScreen from '../screens/LoginScreen';
import NavigationScreen from '../screens/NavigationScreen';
import ReviewsScreen from '../screens/ReviewsScreen';
import SettingsScreen from '../screens/SettingsScreen';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>HOME</Text>
            <Button
                onPress={() => navigation.navigate('Map')}
                title="Go to maps"
            />
            <Button
                onPress={() => navigation.navigate('Add A Bathroom')}
                title="Add a bathroom"
            />
            <Button
                onPress={() => navigation.navigate('About')}
                title="Go to about us"
            />
            <Button
                onPress={() => navigation.navigate('Contact')}
                title="Go to contacts"
            />
            <Button
                onPress={() => navigation.navigate('Details')}
                title="Go to details"
            />
            <Button
                onPress={() => navigation.navigate('Login')}
                title="Login"
            />
            <Button
                onPress={() => navigation.navigate('Navigation')}
                title="Go to navigation"
            />
            <Button
                onPress={() => navigation.navigate('Reviews')}
                title="Go to reviews"
            />
            <Button
                onPress={() => navigation.navigate('Settings')}
                title="Go to settings"
            />
        </View>
    );
}

const Drawer = createDrawerNavigator();

export default function Menu() {
    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={props => <MenuContent {...props} />}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Map" component={MapScreen} />
            <Drawer.Screen name="Add A Bathroom" component={AddBathroomScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />
            <Drawer.Screen name="Contact" component={ContactScreen} />
            <Drawer.Screen name="Details" component={DetailsScreen} />
            <Drawer.Screen name="Login" component={LoginScreen} />
            <Drawer.Screen name="Navigation" component={NavigationScreen} />
            <Drawer.Screen name="Reviews" component={ReviewsScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

function MenuContent({ navigation, ...props }) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="TEST"></DrawerItem>
            <View style={styles.menuButton} >
                <MenuIcon onPress={() => navigation.toggleDrawer()} width="20" height="20" fill="rgb(142, 142, 142)" />
            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    menuButton: {
        position: 'absolute',
        marginTop: 35,
        marginLeft: Dimensions.get('window').width * .65, // fix later
        padding: 10,
        backgroundColor: '#FFFFFF',
    },
});