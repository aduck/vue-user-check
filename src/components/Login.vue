<template>
  <div class="wrapper">
    <div class="box">
      <form action="" @submit.prevent="login">
        <p>
          <input v-model="username" class="item" type="text" placeholder="输入用户名" />
        </p>
        <p>
          <input v-model="password" class="item" type="password" placeholder="输入密码" />
        </p>
        <p>
          <button class="button">登录系统</button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
  import {checkUsers} from '@/api'
  export default {
    data(){
      return {
        username:'',
        password:''
      }
    },
    methods:{
      login(){
        let username=this.username
        let password=this.password
        if(!username || !password){
          alert("用户名密码不能为空")
          return
        }
        checkUsers(username,password)
          .then(res=>{
            if(res.success){
              localStorage.setItem('userInfo',res.username)
              let toUrl=this.$route.query.redirect || '/'
              this.$router.push(toUrl)
            }else{
              alert('登录失败，用户名或密码错误')
            }
          })
      }
    }
  }
</script>

<style scoped>
  .wrapper{
    height: 100%;
    background: #f00;
  }
</style>