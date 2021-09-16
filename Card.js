import React from 'react';
import { Text, View, Inage } from 'react-native';

const Card = ({...props}) => {
    return( 
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center', 
                marginTop: 10,
                backgroundColor: '#777',
            }}>
            <Text style-{...{fontsize: 24}}>{props.object.name}</Text>
        </View>
    );
};

export default Card;