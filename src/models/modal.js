import { routerRedux } from 'dva/router';
import AuthPathEx from "../utils/config";
import request from "../utils/request";
import objToQuery from "../utils/objToQuery";

const fetchData = function*(){
    let data = yield request('http://47.93.224.216:3060/api/loadAuth', {
          method: 'POST',
          headers: {
              "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" 
          },
          credentials: 'include'
    });

    console.log(data);
    //成功后返回effects yield结果
    return data.data.code>0?true:false;
};

export default {
  namespace: 'modalController',
  state:{
    status: 0,
    loginModal: 0
  },
  reducers:{
    showLoginOK(){
      return {loginModal: 1};
    },
    showLoginFail(){
      return {loginModal: 0};
    }
  },
  effects: {
    *goLogin({},{put,call}){
        yield put(routerRedux.push('/login'));
    },
    *getAuth({},{put,call}){
      if(!(yield call(fetchData))){
        yield put({type:"showLoginOK"});
        yield put(routerRedux.push('/login'));
      }
    },
    *getAuthLogin({},{put,call}){
      if(yield call(fetchData)){
        yield put(routerRedux.push("/"));
      }
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (!AuthPathEx.some((val)=>val===pathname)) {
          dispatch({type:"getAuth"});
        }
      });
      history.listen(({pathname})=>{
        if(pathname === '/login'){
          dispatch({type:"getAuthLogin"});
        }
      });
    },
  },
};