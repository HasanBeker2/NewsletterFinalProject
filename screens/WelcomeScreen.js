import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.headerWrapper}>
      <Image
        style={styles.image}
        source={require('../assets/little-lemon-logo.png')}
      />
      <Text style={styles.headerText}>Little Lemon, your local Mediterranean Bistro</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Subscribe')}>
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 60,
    paddingBottom: 10,
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 18,
    padding: 20,
    marginVertical: 8,
    color: 'gray',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    marginTop: 80,
    margin: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    width: 300,
    height: 180,
    resizeMode: 'contain',
    marginTop: 80,
    marginLeft: 25,
  },
});

export default WelcomeScreen;