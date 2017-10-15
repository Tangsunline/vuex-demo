// 处理数据状态的变化，接受action提交过来的数据状态

import * as types from './mutation_types.js'




//在对常量事件进行处理

export default {
    [types.LOGIN_SUCCESS] (state) {
        //此处做一些逻辑的判断  异步流程的控制等
            if(state.login.name!= 'tangqi'&&state.login.password!='123') {
                alert("登陆信息错误")
            }else {
                location.href = './content/index'
            }   
    }
}