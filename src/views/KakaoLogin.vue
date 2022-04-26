<template>
  <div>
    <h1>kakao login</h1>
    <a id="custom-login-btn" @click="kakaoLogin()" >
      <img
          src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
          width="222"
          alt="카카오 로그인 버튼"
      />
    </a>
    <button type="logout"></button>
  </div>
</template>

<script>
export default {
  name: 'KakaoLogin',
  methods: {
    kakaoLogin () {
      window.Kakao.Auth.login({
        scope: 'profile_nickname, account_email',
        success: this.getKakaoAccount
      })
    },
    getKakaoAccount () {
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: res => {
          const kakao_account = res.kakao_account
          const nickname = kakao_account.profile.nickname
          const email = kakao_account.email
          console.log('nickname', nickname)
          console.log('email', email)
          console.log('로그인 성공!')
        },
        fail: error => {
          console.log(error)
        }
      })
    }
  }
}
</script>

<style>
@import "/css/style.css";
</style>