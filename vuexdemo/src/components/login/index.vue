<template>
  <div class="login">
      <div class="login-content">
          <el-form :label-position="labelPosition" label-width="80px" :model="login">
            <el-form-item label="账号">
                <el-input v-model="login.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="login.password"></el-input>
            </el-form-item>
            <el-form-item>
               <el-button type="primary" style="width: 100%">登录</el-button>
            </el-form-item>
        </el-form>   
      </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                labelPosition: 'right',
                login: {
                    name: '',
                    password: ''
                }
            }
        },
        methods: {
            
        }
    }
</script>
<style>
 .login {
     display: flex;
     align-items: center;
     justify-content: center;
 }
 .login-content {
     padding:100px 0 0 0 ;
     width: 400px;
    

 }

</style>
