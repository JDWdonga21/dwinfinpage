import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
    Home: undefined;
    Loading: undefined;
};

type LoadingProps = NativeStackNavigationProp<RootStackParamList, 'Loading'>;


interface State {}

class Loading extends React.PureComponent<LoadingProps, State>{
    timer = null as null | NodeJS.Timeout;
    componentDidMount(): void {
        this.timer = setTimeout(() => this.goToHome(), 5000)
    }
    componentWillUnmount(): void {
        console.log("hi")
        if(this.timer){
            clearInterval(this.timer)
        }
    }

    goToHome = () => {
        console.log("이동")
        this.props.navigation.navigate('Home');
    }

    render() {
        return(
            <View style={{flex: 1, flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
                <Text onPress={this.goToHome} style={{fontSize: 20, color: 'black'}}>loading~~~</Text>
            </View>
        )
    }
}

export default Loading;
