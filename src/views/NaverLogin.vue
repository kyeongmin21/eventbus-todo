<template>
  <div class="naver">
    <h1>Naver</h1>
    <button type="button" class="naverBtn" id="naverIdLogin">네이버 로그인</button>
    <button type="button" class="naverBtn naverLogout ml-1" @click="naverLogout">로그아웃</button>
    <div class="naverMap">
      <div id="map"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'NaverLogin',
  data() {
    return {
      naverLogin: null
    }
  },
  mounted () {
    this.naverLogin = new window.naver.LoginWithNaverId({
      clientId: '1DjPLGm4AX2amePk7Cqq',
      callbackUrl: "http://localhost:8080/naverlogin",
      isPopup: true,
      callbackHandle: true,
      loginButton: { color: 'green', type: 2, height: 40 },
    })
    this.naverLogin.init()

    this.naverLogin.getLoginStatus((status) => {
      if (status) {
        console.log('status', status)
        console.log(this.naverLogin.user)

        const email = this.naverLogin.user.getEmail()
        if (email === undefined || email === null) {
          console.log('이메일은 필수정보 입니다.')
          this.naverLogin.reprompt()
          return
        } else {
          console.log('callback 처리에 실패하였습니다.')
        }
      }
    })

    const map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10
    })

  },
  methods: {
    naverLogout() {
      const accessToken = this.naverLogin.accessToken.accessToken
      console.log('accessToken', accessToken)
      // 접근 토큰 삭제 요청
      const url = `oauth2.0/token?grant_type=delete&client_id=jyvqXeaVOVmV&client_secret=527300A0_COq1_XV33cf&access_token=c8ceMEJisO4Se7uGCEYKK1p52L93bHXLnaoETis9YzjfnorlQwEisqemfpKHUq2gY&service_provider=NAVER`
      axios.get(url).then((res) => {
        console.log(res.data)
      })
    }
  }
}
</script>

<style>
@import "/css/style.css";
</style>
