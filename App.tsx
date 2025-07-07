import Icon from '@react-native-vector-icons/feather';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, Text, View, TextInput, Image, Pressable, NativeEventEmitter, NativeModules } from 'react-native';
import { useEffect, useState } from 'react';

const appleColors = {
  blue: 'rgba(0, 122, 255, 1)',
  cyan: 'rgba(50, 173, 230, 1)',
  indigo: 'rgba(88, 86, 214, 1)',
  purple: 'rgba(175, 82, 222, 1)',
  pink: 'rgba(255, 45, 85, 1)',
  teal: 'rgba(48, 176, 199, 1)',
  gray1: 'rgba(142, 142, 147, 1)',
  gray2: 'rgba(174, 174, 178, 1)',
  gray3: 'rgba(199, 199, 204, 1)',
  secondaryLabel: 'rgba(61.2, 61.2, 66, 0.6)',
  systemFill: 'rgba(119.85, 119.85, 127.5, 0.2)',
  placeholderText: 'rgba(61.2, 61.2, 66, 0.3)',
  secondarySystemBackground: 'rgba(242.25, 242.25, 247.35, 1)',
  systemGroupedBackground: 'rgba(242.25, 242.25, 247.35, 1)',
  link: 'rgba(0, 122.4, 255, 1)',
}

const RootStack = createNativeStackNavigator({
  screens: {
    Feed: {
      screen: Feed,
      options: {
        headerShown: false,
      }
    },
    Details: {
      screen: Details,
      options: {
        headerShown: false,
      }
    }
  }
})

const Navigation = createStaticNavigation(RootStack);

const emitter = new NativeEventEmitter(NativeModules.TurboEventEmitter);

function Feed() {
  const navigation = useNavigation();
  const [data, setData] = useState({});

  useEffect(() => {
    const subscription = emitter.addListener('onAppStateChanged', (data) => {
      setData(data);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: appleColors.secondarySystemBackground, padding: 16, paddingBlockStart: 40 }}>
      <Text style={{ fontSize: 36, fontWeight: '700', marginBlockEnd: 10 }}>Feed ⚛️</Text>

      <View>
        <TextInput placeholder='What adventure you want today?' style={{ backgroundColor: '#fff', padding: 12, borderRadius: 24 }}  />
      </View>
    
      {/* Post  */}
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <Image source={{ uri: 'https://i.pravatar.cc/300?img=31' }} width={30} height={30} style={{ borderRadius: 9999 }} />
          <View style={{ marginBlock: 16 }}>
            <Text style={{ fontWeight: '500' }}>Sophia Bennett</Text>
            <Text style={{ color: appleColors.secondaryLabel }}>2 hours ago</Text>
          </View>
        </View>

        <Text style={{ lineHeight: 20 }}>Spent the day kayaking on Lake Tahoe. The water was crystal clear, and the scenery was stunning. Perfect for a relaxing getaway.</Text>
        <Image source={{ uri: 'https://picsum.photos/id/11/300/200'}} style={{ height: 200, width: '100%', marginBlockStart: 20, borderRadius: 10 }} />
      </View>

      {/* Actions/Reactions */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBlock: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Icon name="heart" size={24} color={appleColors.gray2} />
          <Text style={{ color: appleColors.gray1 }}>23</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Icon name="message-circle" size={24} color={appleColors.gray2} />
          <Text style={{ color: appleColors.gray1 }}>10</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Icon name="send" size={24} color={appleColors.gray2} />
          <Text style={{ color: appleColors.gray1 }}>2</Text>
        </View>
      </View>

      <View>
        <Pressable onPress={() => navigation.navigate('Details')}>
          <Text style={{ color: appleColors.blue }}>Go to details</Text>
        </Pressable>
      </View>
      <Text>Data from Swift: {JSON.stringify(data)}</Text>
    </View>
  )
}

function Details() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Details Screen</Text>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </Pressable>
    </View>
  );
}

function App(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: appleColors.secondarySystemBackground }}>
      <Navigation />
    </SafeAreaView>
  );
}

export default App;
