import { routerRedux } from 'dva/router';
import AuthPathEx from "../utils/config";
import request from "../utils/request";
import objToQuery from "../utils/objToQuery";

const fetchData = function*(){
    let data = yield request('http://localhost:8000/api/loadAuth', {
      method: 'POST',
      headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" 
      },
      mode: 'cors'
    });

    console.log(data);
    //成功后返回effects yield结果
    return data.data.code>0?true:false;
};

export default {
  namespace: 'modalController',
  state:{
    status: 0
  },
  effects: {
    *goLogin({},{put,call}){
        yield put(routerRedux.push('/login'));
    },
    *getAuth({},{put,call}){
      if(!(yield call(fetchData))){
        yield put(routerRedux.push('/login'))
      }else{
        console.log('login OK!');
      }
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (AuthPathEx.some((val)=>val===pathname)) {
          console.log('no need auth');
        }else{
          dispatch({type:"getAuth"});
        }
      });
    },
  },
};