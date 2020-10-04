import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import MyComponent from './components/MyComponent';

// HTML'de style=""
// React'da style={}, attribute={}
// Inline style: <View style={{  backgroundColor: 'purple',  padding:20,  margin:20,}}>

const App = () => {
  const my_name = 'Harun';
  const isAdmin = true;

  // function myFunction() {
  //   return (
  //     <>
  //       <Text style={styles.hello}>Selam Clarusway!</Text>
  //       <Text style={styles.hello}>Selam Clarusway!</Text>
  //     </>
  //   );
  // }
  // function myFunction() {
  //   const isAdmin = false;

  //   if(isAdmin)
  //     return <Text>Admin kullanıcısı</Text>;

  //   return <Text>Üye kullanıcısı</Text>;
    
  // }

  function myFunction() {
    const myArray = ['İzmir', 'İstanbul', 'Ankara', 'Gaziantep']


    return myArray.map((city) => {
      return <Text style={{fontSize:20}}>{city} Şehri</Text>;
    })

    //  return isAdmin ? <Text style={{fontSize:40}}>Admin kullanıcısı</Text>: null
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>CLARUSWAY!</Text>
      </View>

      <MyComponent />

      
      
      {/* {isAdmin ? <Text style={{fontSize:40}}>Admin kullanıcısı</Text>: null} */}

      {isAdmin && <Text style={{fontSize:30}}>Admin kullanıcısı</Text>}

      {/* <Text style={styles.hello}>Hoşgeldin {my_name}</Text>
      <Text style={styles.hello}>Yaşım: {10+20}</Text> */}

      {myFunction()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    padding: 10,
    margin: 20,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  hello: {
    color: 'blue',
    padding: 5,
    margin: 5,
    fontSize: 25,
  },
});

export default App;
