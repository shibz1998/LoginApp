import item from './item/itemSlice';
import user from './user/userSlice';
import {itemApi} from '../services/itemApi';
import {userApi} from '../services/userApi';

export default {
  item: item,
  user: user,
  itemApi: itemApi.reducer,
  userApi: userApi.reducer,
};
