/**
 * Created by Administrator on 2018/12/21 0021.
 */
import Mock from 'mockjs';
let data = require('../../data.json');
let sellers = {
  errno: 0,
  data: data.seller
};
let goods = {
  errno: 0,
  data: data.goods
};
let ratings = {
  errno: 0,
  data: data.ratings
};

// 接口
Mock.mock('api/goods', 'get', goods);
Mock.mock('api/ratings', 'get', ratings);
Mock.mock('api/sellers', 'get', sellers);
