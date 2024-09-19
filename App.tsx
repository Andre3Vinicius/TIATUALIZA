import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';

import logo from './assets/logonet.png';
import Desc from './assets/descubra.png';
import Chat from './assets/bate-papo.png';
import Loja from './assets/loja.png';

const images = [
  require('./assets/istockphoto-638620962-1024x1024.jpg'),
  require('./assets/laptop-1512838_1280.png'),
  require('./assets/program-6944163_1280.jpg'),
  require('./assets/technology-1283624_1280.jpg'),
];

const messages = [
  "Mensagem para a imagem 1",
  "Mensagem para a imagem 2",
  "Mensagem para a imagem 3",
  "Mensagem para a imagem 4",
];

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>TI</Text>
        <Text style={styles.titleSub}>ATUALIZA</Text>
      </View>
      <View style={styles.carouselContainer}>
        <Swiper
          style={styles.wrapper}
          showsButtons={true}
          loop={true}
          autoplay={false}
          showsPagination={true}
        >
          {images.map((image, index) => (
            <View key={index} style={styles.slide}>
              <Image source={image} style={styles.carouselImage} />
              <Text style={styles.carouselMessage}>{messages[index]}</Text>
            </View>
          ))}
        </Swiper>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Image source={Desc} style={styles.footerIcon} />
          <Text style={styles.footerLabel}>Descubra</Text>
        </View>
        <View style={styles.footerItem}>
          <Image source={Chat} style={styles.footerIcon} />
          <Text style={styles.footerLabel}>Chats</Text>
        </View>
        <View style={styles.footerItem}>
          <Image source={Loja} style={styles.footerIcon} />
          <Text style={styles.footerLabel}>Loja</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c1ff72',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginTop: 30,
    marginBottom: 10,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 50,
    color: '#8e2de2',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Roboto',
    marginBottom: -25,
  },
  titleSub: {
    fontSize: 50,
    color: '#4a00e0',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  carouselContainer: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    height: 300, // Ajuste a altura
  },
  wrapper: {
    height: 300, // Ajuste a altura
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: 300,
    height: 200,
    borderRadius: 8,
  },
  carouselMessage: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  footerItem: {
    alignItems: 'center',
  },
  footerIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  footerLabel: {
    fontSize: 18,
  },
});

export default App;