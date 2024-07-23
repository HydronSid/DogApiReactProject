import {View} from 'react-native';
import {React, useState, useEffect} from 'react';
import {TitleText} from '../../reusable-components/title-component';

import {getRandomDogImages} from '../../apis/middle-ware-repo';
export const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //   const [refreshing, setRefreshing] = useState(false);
  //   const onRefresh = async () => {
  //     setRefreshing(true);
  //     await refetch();
  //     setRefreshing(false);
  //   };

  useEffect(() => {
    getInitData();

    setData(data);
  }, []);

  getInitData(async () => {
    data = await getRandomDogImages();
  });
  return (
    <View>
      <TitleText title="Home" />
    </View>
  );
};
