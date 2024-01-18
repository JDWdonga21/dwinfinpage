import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, StatusBar } from 'react-native';
import * as Progress from 'react-native-progress';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import InfinitePager, { Preset } from 'react-native-infinite-pager';

const NUM_ITEMS = 15;

// function getColor(i: number ) {
//   const multiplier = 255 / (NUM_ITEMS - 1);
//   const colorVal = Math.abs(i) * multiplier;
//   return `rgb(${colorVal}, ${Math.abs(128 - colorVal)}, ${255 - colorVal})`;
// }

// const Page = ({ index } : any) => {
//   return (
//     <View
//       style={[
//         styles.flex,
//         {
//           alignItems: 'center',
//           justifyContent: 'center',
//           backgroundColor: getColor(index),
//         },
//       ]}>
//       <Text style={{ color: 'white', fontSize: 80, fontWeight: 'bold' }}>
//         {index}
//       </Text>
//     </View>
//   );
// };
//---------------//
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
  {
    id: '4',
    title: '4 th Item',
  },
  {
    id: '5',
    title: '5 th Item',
  },
  {
    id: '6',
    title: '6 th Item',
  },
];

const DATA1 = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    doneVideos: 10,
    totalVideos: 40,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    doneVideos: 10,
    totalVideos: 40,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    doneVideos: 10,
    totalVideos: 40,
  },
  {
    id: '4',
    title: '4 th Item',
    doneVideos: 10,
    totalVideos: 40,
  },
  {
    id: '5',
    title: '5 th Item',
    doneVideos: 10,
    totalVideos: 40,
  },
  {
    id: '6',
    title: '6 th Item',
    doneVideos: 10,
    totalVideos: 40,
  },
];

const Item = ({ title } : any) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
//-------------//
const renderItem2 = ({item} : any) => {
  const categoryTitle = item?.title;
  const doneVideos = item.doneVideos;
  const totalVideos = item.totalVideos;
  const rate = (doneVideos/ totalVideos) * 100;
  console.log(rate);

  return (
    <View style={styles.item}>
      <TouchableOpacity
        style={{}}
        activeOpacity={0.5}
        onPress={()=> {

        }}        
      >
        <Text style={{fontWeight: 'bold', color: '#2323dd'}}>
          {categoryTitle}
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
//-------------//

interface Props {}
interface State {}

class Home extends React.PureComponent<Props, State> {
    //pagerRef = React.createRef();
    constructor(Props: any) {
        super(Props);
        this.state = {
          //preset: Preset.SLIDE
        };
    }

  // renderPage = ({ index } : any) => {
  //   return (
  //     <Page index={index} />
  //   );
  // }

  renderItem1 = ({ item }:any) => (
    <Item title={item.title} />
  );
  render() {
    const { preset } : any = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={this.renderItem1}
          keyExtractor={item => item.id}
        />
        <FlatList
          data={DATA1}
          renderItem={renderItem2}
          keyExtractor={item => item.id}
        />
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
  title: {
    fontSize: 32,
  },
});

export default Home;