import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { IPagination } from 'app/models/actions/serach';

const PagintaionController: React.FC<IPagination> = ({
  nextPage,
  prevPage,
  hitApi,
}) => {
  useEffect(() => {
    console.log('Next Page', nextPage);
  }, [nextPage]);
  const onClick = () => {
    console.log('Hitting Api');
    hitApi();
  };
  return (
    <View style={styles.container}>
      {prevPage && (
        <TouchableOpacity onPress={onClick}>
          <Text style={styles.link}>Previous</Text>
        </TouchableOpacity>
      )}
      <View style={styles.divider} />
      {nextPage && (
        <TouchableOpacity onPress={onClick}>
          <Text style={styles.link}>Next</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
    height: 50,
  },
  divider: {
    width: 20,
  },
  link: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default PagintaionController;
