import {View, Text, FlatList, Button} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {itemActions} from '../../features/item/itemSlice';
import {kApiGetItems} from '../../config/WebService';
import {kApiPostItems} from '../../config/WebService';
import ApiHelper from '../../helpers/ApiHelper';
import PostItemsForm from '../../controls/PostItemsForm';

const {request, success, failure, deleteItem} = itemActions;

export default function ItemsCRUD() {
  const dispatch = useDispatch();
  const item = useSelector(state => state.item);
  const user = useSelector(state => state.user);

  useEffect(() => {
    dispatch(request({url: kApiGetItems}));

    // ApiHelper.get(kApiGetItems)
    //   .then(response => {
    //     dispatch(success(response));
    //   })
    //   .catch(error => {
    //     dispatch(failure(error));
    //   });
  }, []);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={item.items}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                marginVertical: 5,
                marginHorizontal: 10,
                backgroundColor: 'pink',
              }}>
              <Text>{item.id}</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>{item.title}</Text>

                <Button title="Edit" />

                <Button
                  title="Delete"
                  onPress={() => {
                    const itemIdToDelete = item.id;
                    dispatch(request());
                    ApiHelper.delete(`${kApiPostItems}/${itemIdToDelete}`, {
                      'X-Access-Token': user?.data?.accessToken,
                    })
                      .then(response => {
                        dispatch(deleteItem(itemIdToDelete));
                      })
                      .catch(error => {
                        dispatch(failure(error));
                      });
                  }}
                />
              </View>

              <Text>{item.image}</Text>
              <Text>{item.details}</Text>
            </View>
          );
        }}
      />
      <PostItemsForm />
    </View>
  );
}
