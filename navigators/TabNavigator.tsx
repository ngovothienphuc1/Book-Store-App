import {} from "react"
import {StyleSheet} from "react-native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { COLORS } from "../theme/theme"
import Home from "../screens/Home"
import Cart from "../screens/Cart"
import Favorite from "../screens/Favorite"
import History from "../screens/History"

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Cart" component={Cart}/>
        <Tab.Screen name="Favorite" component={Favorite}/>
        <Tab.Screen name="History" component={History}/>
    </Tab.Navigator>
  )
}
