import React, { useState } from 'react';
import { View, TextInput, FlatList, Image } from 'react-native';
import axios from 'axios';
import images from 'app/config/images';

import styles from './styles';
import { SearchItem, Pagintaion } from 'app/components';

const API_KEY = 'AIzaSyCeGKQSfVaJDmszoY0c0yVyOjlYCCLwoWw';
const SEARCH_ENGINE_ID = '73513ada48a4e8411';

const Search: React.FC = () => {
  const [nextPage, setNextPage] = useState<boolean>(false);
  const [prevPage, setPrevPage] = useState<boolean>(false);
  const [startIndex, setStartIndex] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [data, setData] = useState<any>([]);

  const hitSearchApi = (start: number) => {
    const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${searchTerm}&start=${start}`;
    console.log(url);
    axios.get(url).then(response => {
      const result = response.data;
      const newRes: any = [];
      result.items.map((row: any) => {
        row.image = row.pagemap.cse_thumbnail
          ? row.pagemap?.cse_thumbnail[0].src
          : 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTF0IMbDjhchWJAlmDDh32NOPk0ntzSBgsCChd5HlyK1Nn46BK258h94c8';

        const obj = {
          id: row.cacheId,
          title: row.title,
          snippet: row.snippet,
          displayLink: row.displayLink,
          image: row.image,
        };

        newRes.push(obj);
      });
      console.log(result.queries);
      if (result.queries.previousPage && result.queries.previousPage.length) {
        console.log('Previous Page', result.queries.previousPage[0].startIndex);
        setStartIndex(result.queries.previousPage[0].startIndex);
        setPrevPage(true);
      } else {
        setPrevPage(false);
      }

      if (result.queries.nextPage && result.queries.nextPage.length) {
        console.log('Next Page', result.queries.nextPage[0].startIndex);
        setStartIndex(result.queries.nextPage[0].startIndex);
        setNextPage(true);
      } else {
        setNextPage(false);
      }
      setData(newRes);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.serachView}>
        <Image source={images.icons.search} style={styles.serachLogo} />
        <TextInput
          placeholder={'Enter serach term'}
          onChangeText={setSearchTerm}
          value={searchTerm}
          style={styles.textInput}
          maxLength={40}
          returnKeyLabel={'search'}
          onEndEditing={() => hitSearchApi(startIndex)}
        />
      </View>
      <View style={styles.listView}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <SearchItem
              title={item.title}
              description={item.snippet}
              link={item.displayLink}
              image={item.image}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.paginatedView}>
        <Pagintaion
          nextPage={nextPage}
          prevPage={prevPage}
          hitApi={() => hitSearchApi(startIndex)}
        />
      </View>
    </View>
  );
};

export default Search;
