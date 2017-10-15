
// 处理事件  就是你要做的methods    异步的请求    各种判断    各种控制流程等

import * as types from './mutation_types.js'


export default {
    toLogin: ({commit}) => {
       commit(types.LOGIN_SUCCESS)//commit 是提交处理事件的方法  然后去mutations 里面是定义方法
   } 
}