<template>
  <div>
    <input type="email" placeholder="email을 입력해주세요." id="email" value="">
    <input type="password" placeholder="password를 입력해주세요" id="password" value="">

    <b-button type="button" @click="login">로그인</b-button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Login",
  methods: {
    login() {
      const email = document.getElementById('email')
      const password = document.getElementById('password')
      axios({
        method: "POST",
        url: 'https://reqres.in/api/login',
        data: {
          "email" : email.value,
          "password" : password.value
        }
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>