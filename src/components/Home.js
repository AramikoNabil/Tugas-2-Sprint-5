import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import iconHead from '../assets/icon/taskbar.png';
import iconParent from '../assets/icon/parenticon.png';
import avatar from '../assets/icon/avatar.png';
import iconTransfer from '../assets/icon/transfer.png';
import iconConfirm from '../assets/icon/confirm.png';

class Home extends React.Component {
  render() {
    return (
      <View>
        <View>
          <ImageBackground style={styles.recHeader}>
            <Image source={iconHead} style={styles.iconHead} />
            <Text style={styles.textHeader}>Kakak Asuh Indonesia</Text>
          </ImageBackground>
        </View>
        <View style={styles.container}>
          <ScrollView horizontal={true}>
            <View>
              <ImageBackground style={styles.rec1}>
                <Image source={iconParent} style={styles.iconParent} />
                <Text style={styles.text1}>Pilih Adik Asuh</Text>
              </ImageBackground>
            </View>
            <View>
              <ImageBackground style={styles.rec2}>
                <Text style={styles.text2}>84</Text>
                <Text style={styles.text3}>Santri Mandiri</Text>
              </ImageBackground>
            </View>
            <View>
              <ImageBackground style={styles.rec3}>
                <Text style={styles.text4}>71</Text>
                <Text style={styles.text5}>Santri Belum Mandiri</Text>
              </ImageBackground>
            </View>
            <View>
              <ImageBackground style={styles.rec4}>
                <Text style={styles.text6}>71</Text>
                <Text style={styles.text7}>Dummy content</Text>
              </ImageBackground>
            </View>
            <View>
              <ImageBackground style={styles.rec4}>
                <Text style={styles.text6}>71</Text>
                <Text style={styles.text7}>Dummy content</Text>
              </ImageBackground>
            </View>
          </ScrollView>
          <View>
            <Text style={styles.textAdik}>Adik Asuh Saya</Text>
          </View>

          <View>
            <View style={styles.containerA}>
              <Image source={avatar} style={styles.avatar} />
              <Text style={styles.textA}>Nama Adik Asuh</Text>
              <Image source={iconTransfer} style={styles.iconTransfer} />
              <Text style={styles.textB}>Transfer</Text>
              <Image source={iconConfirm} style={styles.iconConfirm} />
              <Text style={styles.textC}>Konfirmasi</Text>
            </View>
          </View>
          <View>
            <View style={styles.containerA}>
              <Image source={avatar} style={styles.avatar} />
              <Text style={styles.textA}>Nama Adik Asuh</Text>
              <Image source={iconTransfer} style={styles.iconTransfer} />
              <Text style={styles.textB}>Transfer</Text>
              <Image source={iconConfirm} style={styles.iconConfirm} />
              <Text style={styles.textC}>Konfirmasi</Text>
            </View>
          </View>
          <View>
            <View style={styles.containerA}>
              <Image source={iconHead} style={styles.option} />
              <Text style={styles.textA}>Nama Adik Asuh</Text>
              <Image source={iconHead} style={styles.option1} />
              <Text style={styles.textB}>Transfer</Text>
              <Image source={iconHead} style={styles.option2} />
              <Text style={styles.textC}>Konfirmasi</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
  },
  recHeader: {
    backgroundColor: '#0795B5',
    padding: 40,
    flexDirection: 'row',
  },
  iconHead: {
    position: 'absolute',
    height: 30,
    width: 30,
    marginTop: 20,
  },
  textHeader: {
    position: 'absolute',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 30,
    marginTop: 15,
  },
  rec1: {
    backgroundColor: '#32e0c4',
    height: 130,
    width: 130,
    marginTop: 5,
    justifyContent: 'center',
    borderRadius: 10,
  },
  iconParent: {
    height: 35,
    width: 25,
    alignSelf: 'center',
  },
  rec2: {
    backgroundColor: '#32e0c4',
    height: 130,
    width: 130,
    marginTop: 5,
    marginLeft: 10,
    justifyContent: 'center',
    borderRadius: 10,
  },
  text1: {
    fontWeight: '900',
    alignSelf: 'center',
  },
  text2: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
  },
  text3: {
    fontWeight: '900',
    alignSelf: 'center',
  },
  rec3: {
    backgroundColor: '#32e0c4',
    height: 130,
    width: 130,
    marginTop: 5,
    marginLeft: 10,
    justifyContent: 'center',
    borderRadius: 10,
  },
  text4: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
  },
  text5: {
    fontWeight: '900',
    alignSelf: 'center',
    textAlign: 'center',
  },
  rec4: {
    backgroundColor: '#32e0c4',
    height: 130,
    width: 130,
    marginTop: 5,
    marginLeft: 10,
    justifyContent: 'center',
    borderRadius: 10,
  },
  text6: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
  },
  text7: {
    fontWeight: '900',
    alignSelf: 'center',
    textAlign: 'center',
  },
  textAdik: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  containerA: {
    flexDirection: 'row',
    backgroundColor: '#a6f6f1',
    marginTop: 10,
    height: 120,
  },
  avatar: {
    height: 60,
    width: 60,
    marginTop: 15,
    marginLeft: 40,
  },
  iconTransfer: {
    height: 60,
    width: 60,
    alignSelf: 'center',
    marginLeft: 80,
    marginBottom: 30,
  },
  iconConfirm: {
    height: 60,
    width: 60,
    alignSelf: 'center',
    marginLeft: 70,
    marginBottom: 30,
  },
  textA: {
    position: 'absolute',
    marginTop: 80,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  textB: {
    position: 'absolute',
    marginTop: 80,
    marginLeft: 185,
    fontWeight: 'bold',
  },
  textC: {
    position: 'absolute',
    marginTop: 80,
    marginLeft: 305,
    fontWeight: 'bold',
  },
  option: {
    height: 40,
    width: 40,
    marginTop: 25,
    marginLeft: 50,
  },
  option1: {
    height: 40,
    width: 40,
    alignSelf: 'center',
    marginLeft: 95,
    marginBottom: 30,
  },
  option2: {
    height: 40,
    width: 40,
    alignSelf: 'center',
    marginLeft: 90,
    marginBottom: 30,
  },
});

export default Home;
