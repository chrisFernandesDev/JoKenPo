import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { styles } from './style/main'

export default class Jogo extends React.Component {

    constructor(props) {
        super(props);
        this.state = { escolhaUser: '', escolhaApp: '', resultado: '' }
    }

    escolhaUser = (escolhaUser) => {
        var escolhaApp = "";
        const aleatorio = Math.floor(Math.random() * 5);
        switch (aleatorio) {
            case 0:
                escolhaApp = "spock"; break;
            case 1:
                escolhaApp = "lagarto"; break;
            case 2:
                escolhaApp = "papel"; break;
            case 3:
                escolhaApp = "pedra"; break;
            case 4:
                escolhaApp = "tesoura"; break;
            default: "error";
                break;
        }

        let resultado = "";
        if (escolhaApp == "pedra") {
            if (escolhaUser == "pedra") {
                resultado = "Empate";
                // alert(
                //     <Image
                //         source={require('./img/empate.png')}
                //     />
                // )
            }
            if (escolhaUser == "papel") {
                resultado = "User Ganhou";
            }
            if (escolhaUser == "tesoura") {
                resultado = "APP Ganhou";
            }
            if (escolhaUser == "spock") {
                resultado = "User Ganhou";
            }
            if (escolhaUser == "lagarto") {
                resultado = "APP Ganhou";
            }
        }
        if (escolhaApp == "papel") {
            if (escolhaUser == "pedra") {
                resultado = "APP Ganhou";
            }
            if (escolhaUser == "papel") {
                resultado = "Empate";
            }
            if (escolhaUser == "tesoura") {
                resultado = "User Ganhou";
            }
            if (escolhaUser == "spock") {
                resultado = "APP Ganhou";
            }
            if (escolhaUser == "lagarto") {
                resultado = "User Ganhou";
            }
        }
        if (escolhaApp == "tesoura") {
            if (escolhaUser == "pedra") {
                resultado = "User Ganhou";
            }
            if (escolhaUser == "papel") {
                resultado = "APP Ganhou";
            }
            if (escolhaUser == "tesoura") {
                resultado = "Empate";
            }
            if (escolhaUser == "spock") {
                resultado = "APP Ganhou";
            }
            if (escolhaUser == "lagarto") {
                resultado = "User Ganhou";
            }
        }
        if (escolhaApp == "spock") {
            if (escolhaUser == "pedra") {
                resultado = "User Ganhou";
            }
            if (escolhaUser == "papel") {
                resultado = "APP Ganhou";
            }
            if (escolhaUser == "tesoura") {
                resultado = "User Ganhou";
            }
            if (escolhaUser == "spock") {
                resultado = "Empate";
            }
            if (escolhaUser == "lagarto") {
                resultado = "APP Ganhou";
            }
        }
        if (escolhaApp == "lagarto") {
            if (escolhaUser == "pedra") {
                resultado = "User Ganhou";
            }
            if (escolhaUser == "papel") {
                resultado = "APP Ganhou";
            }
            if (escolhaUser == "tesoura") {
                resultado = "User Ganhou";
            }
            if (escolhaUser == "spock") {
                resultado = "APP Ganhou";
            }
            if (escolhaUser == "lagarto") {
                resultado = "Empate";
            }
        }

        this.setState({ escolhaUser, escolhaApp, resultado });
    }
    render() {
        return (
            <View style={styles.viewConteudo}>
                <ImageBackground
                    style={styles.imgLogo}
                    source={require('./img/contentImg.png')}
                >
                </ImageBackground>

                <Image
                    style={styles.imgPlay}
                    source={require('./img/yoda.png')}
                />
                <View style={styles.conteudo}>
                    <View style={styles.imgJogador1}>
                        <Text style={styles.textResultado}>{this.state.resultado}</Text>
                        <Text style={styles.textResultado}>Escolha do APP: {this.state.escolhaApp}</Text>
                        <Text style={styles.textResultado}>Escolha do User: {this.state.escolhaUser}</Text>
                    </View>
                    <View style={styles.imgJogador2}>
                        <TouchableOpacity
                            style={styles.imgGame}
                            onPress={() => { this.escolhaUser('pedra') }}
                        >
                            <Image
                                style={styles.imgGame}
                                source={require('./img/pedra.png')}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { this.escolhaUser('papel') }}
                        >
                            <Image
                                style={styles.imgGame}
                                source={require('./img/papel.png')}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { this.escolhaUser('tesoura') }}
                        >
                            <Image
                                style={styles.imgGame}
                                source={require('./img/tesoura.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.imgJogador3}>
                        <TouchableOpacity
                            onPress={() => { this.escolhaUser('spock') }}
                        >
                            <Image
                                style={styles.imgGame}
                                source={require('./img/spock.png')}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { this.escolhaUser('lagarto') }}
                        >
                            <Image
                                style={styles.imgGame}
                                source={require('./img/lagarto.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        );
    }
}