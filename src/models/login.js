import { routerRedux } from 'dva/router';
import request from "../utils/request";
import objToQuery from '../utils/objToQuery';

const fetchData = function*(loginInfo){
    let data = yield request('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" 
      },
      body: objToQuery(loginInfo),
      mode: 'cors'
    });

    console.log(objToQuery(loginInfo));
    console.log(data);
    //成功后返回effects yield结果
    if(parseInt(data.data.code) >=1){
        localStorage.token=data.data.token;
        return true;
    }else{
        return false;
    }
};

export default {
  namespace: 'loginForm',
  state: {
      status: 1,
      access_token: '',
      alert: 'none'
  },
  reducers: {
    loginOK(state) {
      return {status:1};
    },
    loginFail(){
      return {alert: 'block'};
    },
    loginWaiting(){
      return {alert: 'none'};
    }
  },
  effects: {
    *login({loginInfo},{put,call}){
        console.log('登录信息:',loginInfo);
        if(yield call(fetchData,loginInfo)){
           yield put({ type: 'loginOK'});
           yield put(routerRedux.push('/'));
        }else{
           yield put({ type: 'loginFail'});
        }
    }
  }
};