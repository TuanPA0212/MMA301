import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import MenuItemsSectionList from './components/MenuItemsSectionList';
import LoginScreen from './components/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler'

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <>
    <NavigationContainer >
      <View
        style={styles.container}>
        {/* <LittleLemonHeader /> */}
        {/* <MenuItems/> */}
        {/* <WelcomeScreen/> */}
        {/* <MenuItemsSectionList/> */}
        {/* <LoginScreen/> */}

        <Drawer.Navigator 
        useLegacyImplementation 
        screenOptions={{drawerPosition: 'right'}}
        >
          <Drawer.Screen name='Welcome' component={WelcomeScreen}/>
          <Drawer.Screen name='Menu' component={MenuItemsSectionList}/>
        </Drawer.Navigator>
        

        {/* ---------------Tab Navigation--------------- */}

        {/* <Tab.Navigator screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Welcome') {
              iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
            } else if (route.name === 'Menu') {
              iconName = 'ios-list';
            }
            return <Ionicons name={iconName} size={size} color={color}/>
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        })}>
          <Tab.Screen name='Welcome' component={WelcomeScreen}/>
          <Tab.Screen name='Menu' component={MenuItemsSectionList}/>
        </Tab.Navigator> */}

        {/* ---------------Stack Navigation ---------------*/}
        {/* <Stack.Navigator initialRouteName='Login'
         screenOptions={{
          headerStyle: {
            backgroundColor: '#FBDABB',
          },
        }}>
          <Stack.Screen 
            name='Login' 
            component={LoginScreen}
            options={{title: 'Login'}} 
          />
          <Stack.Screen 
            name='Welcome' 
            component={WelcomeScreen}
            options={{title: 'Home'}} 
          />
          <Stack.Screen name='Menu' component={MenuItemsSectionList}/>
        </Stack.Navigator> */}
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </NavigationContainer>
  </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: {backgroundColor: '#ff7675'},
});


