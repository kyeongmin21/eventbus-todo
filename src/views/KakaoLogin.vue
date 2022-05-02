<template>
  <div class="kakao">
    <h1>Kakao</h1>
    <div id="custom-login-btn" @click="kakaoLogin()">
      <button type="button" class="kakaoBtn">
        <font-awesome-icon icon="fa-solid fa-comments"/>
        카카오 로그인
      </button>
      <button type="button"
              @click="kakaoLogout()"
              class="kakaoLogout kakaoBtn ml-1"> 로그아웃
      </button>
    </div>

    <div class="kakaoMap">
      <div id="map"></div>
    </div>
  </div><!--// kakao -->
</template>

<script>
window.Kakao.init('3d11e9ddcd1b78eee6b8dec29e8583e4')

export default {
  name: 'KakaoLogin',
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap()
    } else {
      const script = document.createElement('script')
      script.onload = () => kakao.maps.load(this.initMap)
      script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=3d11e9ddcd1b78eee6b8dec29e8583e4'
      document.head.appendChild(script)
    }
  },
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: 'profile_nickname, account_email',
        success: this.getKakaoAccount
      })
    },
    getKakaoAccount() {
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
    },
    kakaoLogout() {
      window.Kakao.Auth.logout((res) => {
        console.log(res)
      })
    },
    initMap() {
      const mapContainer = document.getElementById('map'),
        mapOption = {
          center: new kakao.maps.LatLng(37.564343, 126.947613),
          level: 3
        }
      // eslint-disable-next-line no-unused-vars
      const map = new kakao.maps.Map(mapContainer, mapOption)
    }
  }
}
</script>