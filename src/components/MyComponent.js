import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyComponent = () => {
    return(
        <View style={styles.container}>
            <Text>Selamlar!</Text>
            <Text>Clarusway App'e hoşgeldiniz!</Text>

            <View>
                <Text>Fullstack Developer olmaya hazır ol!</Text>
            </View>
        </View>
    )
};

export default MyComponent;

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#e0e0e0',
    }
})