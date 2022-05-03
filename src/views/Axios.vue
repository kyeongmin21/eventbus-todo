<template>
  <div>
    <h1>ResReq.api 사이트로 빠르고 편리하게 Restful API 테스트하기</h1>
    <b-button type="button" @click="getBtn">GET 버튼</b-button><br><br>
    <b-button type="button" @click="postBtn">POST 버튼</b-button>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Board",
  data() {
    return {}
  },
  methods: {
    getBtn() {
      axios.get("https://reqres.in/api/users?page=2")
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          console.log('finally')
        })
    },
    postBtn() {
      axios.post('https://reqres.in/api/register', {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
      })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
