import item from './item/itemSlice';
import user from './user/userSlice';
import {itemApi} from '../services/itemApi';

export default {
  item: item,
  user: user,
  itemApi: itemApi.reducer,
};
