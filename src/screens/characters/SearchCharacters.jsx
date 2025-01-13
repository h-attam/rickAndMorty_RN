import {View, Text, FlatList, TextInput, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomButton from '../../components/ui/customButton';
import Colors from '../../theme/colors';
import screenStyle from '../../styles/screenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeParams,
  getCharacterList,
} from '../../store/actions/charactersActions';
import SearchItem from '../../components/characters/SearchItem';

export default function SearchCharacters() {
  const dispatch = useDispatch();
  const {characterList, pending, params} = useSelector(
    state => state.characters,
  );

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    dispatch(getCharacterList(params));
  }, []);

  const handleSubmit = () => {
    dispatch(changeParams({name: searchText}));
  };
  const ListHeaderComponent = () => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          onSubmitEditing={handleSubmit}
          value={searchText}
          placeholder="Search Character"
          style={{
            width: '95%',
            borderWidth: 0.5,
            backgroundColor: Colors.BACKTITLECOLOR,
            borderColor: Colors.BROWN,
            padding: 10,
            height: 40,
            borderRadius: 100,
          }}
          onChangeText={Text => setSearchText(text)}
        />
        <CustomButton
          onPress={() => handleSubmit()}
          title="Search"
          backColor={Colors.GREEN}
          titleColor={Colors.WHİTE}
        />
      </View>
    );
  };

  return (
    <View style={screenStyle.container}>
      <FlatList
        ListHeaderComponent={ListHeaderComponent}
        data={characterList}
        renderItem={({item}) => <SearchItem item={item} />}
      />
    </View>
  );
}
