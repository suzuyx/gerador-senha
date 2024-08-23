import HomeScreen from "./pages/home";
import Passwords from "./pages/passwords";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="home" size={size} color={color} />
                        } else {
                            return <Ionicons name="home-outline" size={size} color={color} />
                        }
                    }
                }}
            />
            <Tab.Screen
                name="Passwords"
                component={Passwords}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="key" size={size} color={color} />
                        } else {
                            return <Ionicons name="key-outline" size={size} color={color} />
                        }
                    }
                }}
            />
        </Tab.Navigator>
    );
}