import React from 'react';
import { useState } from 'react';
import { View, Text, Image, ImageBackground, SafeAreaView, Animated } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';



const slides = [
    {
        key: "1",
        title: 'Jedi Leide',
        text: 'Professora linda e maravilhosa, mas que se deleita com a dor e sofrimento de seus alunos\n  Sua caneca está cheia das lagrimas de seus alunos!',
        image: require('./img/leide.png'),
        backgroundColor: '#59b2ab',
    },
    {
        key: "2",
        title: 'Jedi Filipe',
        text: 'Professor amigo e extremamente dedicado a fazer você aprender, ser incrivel\n  Não se iluda, rostinho bonito, mas é o demoninho no ombro!',
        image: require('./img/Filipe.png'),
        backgroundColor: '#59b2ab',
    },
    {
        key: "3",
        title: 'Jedi Almir',
        text: 'Professor legal e muito prestativo, se importa em fazer você aprender, e não ser só um copia e cola\n Odeia variáveis Globais, cuidado, extremamente perigoso, e tira ponto, é serio!!',
        image: require('./img/Almir.png'),
        backgroundColor: '#22bcb5',
    },
    {
        key: "4",
        title: 'Chris',
        text: 'Aluna prestativa e educada, que sofreu com tabelas, chorou por não conseguir entregar um trabalho no prazo e quase saiu em um fight por pontos.\n Mas hoje é uma JEDI PROGRAMADORA, não teria sido nada sem a ajuda de seus incriveis Jedis Professores',
        image: require('./img/Chris.png'),
        backgroundColor: '#22bcb5',
    },
    {
        key: "5",
        title: 'Amigos',
        text: 'Alunos dispostos a fazer você entender a disciplina, nem que seja entre tapas e xingos.\n Fazem você rir nos momentos que não é para rir, principalmente com camera ligada, te ameaça se você pensa em desistir e estão ao seu lado realmente em tudo',
        image: require('./img/Amigos.png'),
        backgroundColor: '#22bcb5',
    }
];

export default function Infor() {
    const [showHome, setShowHome] = useState(false);
    function renderSlides({ item }) {
        return (
            <View >
                <Image
                    source={item.image}
                    style={{
                        resizeMode: "cover",
                        height: 400,
                        width: 300,
                        alignSelf: 'center'
                    }}
                />
                <Text
                    style={{
                        paddingTop: 25,
                        paddingBottom: 10,
                        fontSize: 23,
                        fontWeight: 'bold',
                        color: '#22bcb5',
                        textAlign: 'center'
                    }}
                >
                    {item.title}
                </Text>
                <Text
                    style={{
                        paddingTop: 25,
                        paddingBottom: 10,
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: '#22bcb5',
                        textAlign: 'center'
                    }}
                >
                    {item.text}
                </Text>
            </View>
        )
    }

    if (showHome) {
        return <Text>Entrou</Text>
    } else {
        return (
            <AppIntroSlider
                renderItem={renderSlides}
                data={slides}
                activeDotStyle={{
                    // width: 10,
                }}
                renderNextButton={() => <Text>Next</Text>}
                renderDoneButton={()=> <Text>End</Text>}
                onDone={() => alert('Que a força esteja com vocês!')}
            />
        )
    }




}