import React from 'react';
import { View,Text ,StyleSheet} from 'react-native';


const FavoiretsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Favoirets Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
    flex:1,
    justifyContent:'center',
    alignContent:'center'
    }
});

export default FavoiretsScreen;