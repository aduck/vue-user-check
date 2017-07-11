<template>
  <span @click="setStatus">{{message}}</span>
</template>

<script>
  import {mapState,mapGetters,mapActions} from 'vuex'
  export default {
    computed:{
      ...mapGetters({
        message:'checkStatusMessage'
      }),
      ...mapState({
        status:state=>state.check.checkStatus
      })
    },
    methods:{
      ...mapActions([
        'setUserCheck'
      ]),
      setStatus(){
        if(this.status==0){
          this.setUserCheck(1)
        }else if(this.status==1){
          this.setUserCheck(2)
        }
      }
    },
    mounted(){
      let username=localStorage.getItem('userInfo')
      let dateObj=new Date()
      let Y=dateObj.getFullYear()
      let M=(dateObj.getMonth()+1)>=10 ? (dateObj.getMonth()+1) : '0'+(dateObj.getMonth()+1)
      let D=dateObj.getDate()>=10 ? dateObj.getDate() : '0'+dateObj.getDate()
      let date=Y+'-'+M+'-'+D
      this.$store.dispatch('getUserCheck',{
        username,
        date
      })
    }
  }
</script>