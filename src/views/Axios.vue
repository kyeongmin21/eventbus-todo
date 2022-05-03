<template>
  <div>
    <h1>Axios - GET / POST</h1>
    <p>ResReq.api 사이트로 빠르고 편리하게 Restful API 테스트하기</p>
    <div class="mb-2 mt-5">
      <a href="https://reqres.in/" target="_blank">https://reqres.in/</a>
    </div>
   <div class="mb-5">
     <a href="https://github.com/axios/axios" target="_blank">https://github.com/axios/axios</a>
   </div>

    <b-button type="button" @click="getBtn">GET 버튼</b-button><br><br>
    <b-button type="button" @click="postBtn">POST 버튼</b-button><br><br>
    <b-button type="button" @click="putBtn">PUT 버튼</b-button><br><br>
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
    },
    putBtn() {
      axios.put('https://reqres.in/api/users/2', {
        "name": "morpheus",
        "job": "zion resident"
      })
      .then(res => {
        console.log(res)
      })
      .then(err => {
        console.log(err)
      })
    }
  }
}
</script>
