import {Link} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import {Text, View} from 'react-native';

const App = () => {
  return (
    <View className="flex-1 items-center justify-center  bg-blue-400">
      <Text className="text-3xl font-bold text-white">My Yoga App</Text>
      <Text className="xl font-semibold text-white">My First App</Text>

      <Link href="./home" className="text-white font-xl ">
        Go to Home
      </Link>

      <StatusBar style="auto" />
    </View>
  );
};

export default App;
