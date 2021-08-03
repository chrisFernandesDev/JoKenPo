import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { styles } from './style/main'

export default function Header() {
    return (
        <View style={styles.viewHeader}>
            <ImageBackground
                style={styles.imgLogo}
                source={require('./img/contentImg.png')}
            >
            </ImageBackground>

        </View>
    )
}