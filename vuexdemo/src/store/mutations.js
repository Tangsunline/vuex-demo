// 处理数据状态的变化，接受action提交过来的数据状态

import * as types from './mutation_types.js'


//在对常量事件进行处理

export default {
    [types.LOGIN_SUCCESS] (state) {
        if(state.login.name !== 'tangqi'||state.login.name === ''||state.login.password === ''||state.login.password !== '123') {
            this.$alert('登录账号或者密码错误','登录提示',{
                confirmButtonText: '确定',
                callback : action => {
                    this.$message({
                        type: 'info',
                        message: `action:${action}`
                    })
                }
            })
        }else {
            this.$router.push({
                path: './content/index'
            })
        }
    }
}