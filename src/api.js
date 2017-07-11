const users=[
  {
    "username":"admin",
    "password":"111111"
  },
  {
    "username":"test",
    "password":"111111"
  }
]
const checkInfos=[
  {
    username:"test",
    date:"2017-07-09",
    check:{
      in:"08:52",
      out:"18:21"
    }
  },
  {
    username:"test",
    date:"2017-07-10",
    check:{
      in:"08:50",
      out:"18:22"
    }
  },
  {
    username:"test222",
    date:"2017-07-11",
    check:{
      in:"08:50",
      out:"18:22"
    }
  }
]

export const checkUsers=(uname,psw)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      for(let i=0,len=users.length;i<len;i++){
        let username=users[i]['username']
        let password=users[i]['password']
        if(uname==username && psw==password){
          resolve({
            success:1,
            username
          })
          break
          return
        }
      }
      resolve({
        success:0
      })
    },200)
  })
}

export const getCheckInfo=(uname,date)=>{
  return new Promise((resolve,reject)=>{
    let infos=[]
    for(let i=0,len=checkInfos.length;i<len;i++){
      if(checkInfos[i].username==uname){
        if(!!date){
          if(checkInfos[i].date==date) infos.push(checkInfos[i])
        }else{
          infos.push(checkInfos[i])
        }
      }
    }
    setTimeout(()=>{
      resolve(infos)
    },200)
  })
}
