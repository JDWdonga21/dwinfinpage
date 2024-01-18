import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Screens/Home";
import Loading from "../Screens/Loading";

const Stack = createNativeStackNavigator();


interface Props {}
interface State {}

class Router extends React.PureComponent<Props, State> {
    render(): React.ReactNode {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={"Loading"}
                >
                    <Stack.Screen name="Loading" component={Loading}/>
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Router