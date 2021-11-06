import React from 'react';
import { useEffect, useState, } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { styles } from './style/main'

export default function Header() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);

    if(loading){
            return(
                <View style={styles.viewHeader}>
                    <Image
                         style={styles.imgLogo2}
                         source={require('./img/dart.gif')}
                    /> 
                </View>
            );
    }
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