import React, { Component, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, StatusBar, Button } from 'react-native';
import * as Progress from 'react-native-progress';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import InfinitePager, { Preset } from 'react-native-infinite-pager';

const NUM_ITEMS = 15;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];


const Item = ({ title } : any) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
//-------------//
const renderItem2 = ({item} : any) => {
  const myId = item?.id;
  const categoryTitle = item?.title;
  const doneVideos = item.doneVideos;
  const totalVideos = item.totalVideos;
  const rate = (doneVideos/ totalVideos) * 100;
  console.log(rate);

  return (
    <View style={styles.item2}>
      <TouchableOpacity
        style={{}}
        activeOpacity={0.5}
        onPress={()=> {

        }}        
      >
        <Text style={{fontWeight: 'bold', color: '#2323dd'}}>
          {myId} : {categoryTitle}
        </Text>
      </TouchableOpacity>
      <View style={{marginTop: 10}}>
        <Progress.Bar progress={rate / 100} width={null} height={10} color={'#FF0044'} />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', color: '#2b2525'}}>
          진행율 {rate.toFixed(2)} %
        </Text>
      </View>
    </View>
  );
};

interface Props {}
type Data = {
  id: string,
  title: string,
  doneVideos: number,
  totalVideos: number,
}
interface State {
  
}

class Home extends React.PureComponent<Props, State> {
  //pagerRef = React.createRef();
  isLoading = false as boolean
  constructor(Props: any) {
    super(Props);
    this.state = {
      
    };
  }

  renderItem1 = ({ item }:any) => (
    <Item title={item.title} />
  );
  
  goToInfiniteScroll = () => {
    this.props.navigation.navigate('InfinScroll')
  }

  render() {
    const { preset } : any = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flex: 3}}>
          <View style={{flex: 1}}>
            <FlatList
              data={DATA}
              renderItem={this.renderItem1}
              keyExtractor={item => item.id}
            />
          </View>     
        </View>
        <View style={{flex: 2}}>
          <Text> 여유공간 </Text>
          <View style={{marginHorizontal: 30}}>
            <Button title='무한 스크롤' onPress={this.goToInfiniteScroll}></Button>
          </View>          
        </View> 
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  item2: {
    backgroundColor: '#00f9f9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Home;