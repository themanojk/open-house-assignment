import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { ISearchItem } from 'app/models/actions/serach';

const SearchItemController: React.FC<ISearchItem> = ({
  title,
  link,
  description,
  image,
}) => {
  useEffect(() => {
    // console.log(image);
  }, [image]);
  return (
    <View style={styles.container}>
      <View style={styles.LeftBody}>
        <Image source={{ uri: image }} style={styles.imagBody} />
      </View>
      <View style={styles.rightBody}>
        <Text style={styles.bodyLink}>{link}</Text>
        <Text style={styles.bodyTitle}>{title}</Text>
        <Text style={styles.bodyDescription}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 12,
  },
  LeftBody: {
    flex: 0.3,
  },
  imagBody: {
    width: 100,
    height: 100,
  },
  rightBody: {
    flex: 0.7,
    flexDirection: 'column',
    marginLeft: 10,
  },
  bodyLink: {
    fontSize: 12,
  },
  bodyTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginTop: 5,
  },
  bodyDescription: {
    fontSize: 12,
    marginTop: 5,
  },
  icon: { marginLeft: 4 },
});

export default SearchItemController;
