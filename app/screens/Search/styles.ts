import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: Dimensions.get('screen').width,
    padding: 10,
    marginBottom: 20,
  },
  serachView: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  listView: {
    flex: 8,
    marginTop: 20,
  },
  serachLogo: {
    width: 20,
    height: 20,
  },
  textInput: {
    display: 'flex',
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
  },
  paginatedView: {
    flex: 1,
  },
});

export default styles;
