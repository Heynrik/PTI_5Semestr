import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const navigation = useNavigation();

  const carouselItems = [
    { title: "Interação entre o Nutricionista e o Paciente" },
    { title: "Custo Acessível" },
    { title: "Orientações Alimentares Individuais" },
  ];

  const renderItem = ({ item }: { item: { title: string } }) => {
    return (
      <View style={styles.carouselItemContainer}>
        <Text style={styles.carouselItemtitle}>{item.title}</Text>
      </View>
    );
  };

  const handleAgendamentoPress = () => {
    navigation.navigate("Agendamento");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo3} source={require("../../assets/Logo3.png")} />
      <View>
        <Text style={styles.texto1}>Seja bem-vindo(a) à NUTRIFIT</Text>
        <Text style={styles.texto2}>
          Conectamos Nutricionistas e Pacientes!
        </Text>
        <Image
          style={styles.contexto}
          source={require("../../assets/paginaInicial.png")}
        />
      </View>
      <View>
        <Text style={styles.texto3}>
          Vantagens de utilizar nossa plataforma:
        </Text>
      </View>
      <Carousel
        data={carouselItems}
        sliderWidth={400}
        itemWidth={300}
        renderItem={renderItem}
        autoplay={true}
        autoplayInterval={3000}
        loop={true}
        layout={"default"}
        layoutCardOffset={9}
        swipeThreshold={10}
        useScrollView={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleAgendamentoPress}>
        <Text style={styles.buttonText}>Agendamento</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#38a69d",
  },
  logo3: {
    marginTop: 20,
    marginLeft: -300,
    marginBottom: 20,
    width: 150, // Largura da imagem
    height: 100, // Altura da imagem
  },
  texto1: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  texto2: {
    textAlign: "center",
    fontSize: 25,
    fontStyle: "italic",
    marginTop: 10,
    marginBottom: 10,
  },
  contexto: {
    width: 400, // Largura da imagem
    height: 150, // Altura da imagem
    marginTop: 20,
  },
  texto3: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "rgb(255, 204, 0)",
    marginBottom: 10,
  },
  carouselItemContainer: {
    backgroundColor: "#ADD8E6",
    borderRadius: 4,
    height: 90,
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  carouselItemtitle: {
    textAlign: "center",
    fontSize: 19,
    fontStyle: "italic",
    color: "black",
  },
  button: {
    backgroundColor: "#666666",
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 70,
    marginBottom: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Home;
