<template>
  <div class="google">
    <h1>google</h1>
    <button type="button" id="google-signin-btn"></button>
    <button type="button" class="googleBtn googleLogout" @click="googleLogout">로그아웃</button>
    <div id="map"></div>
  </div>
</template>

<script>
export default {
  name: 'GoogleLogin',
  mounted() {
    window.gapi.signin2.render('google-signin-btn', {onsuccess: this.onSignIn})

    this.setMarker(this.mapCenter, "ce")
    this.setMarker(this.bands, "1")
    this.setMarker(this.bands2, "2")
    this.initMap()
  },
  data() {
    return {
      map: null,
      mapCenter: {lat: 35.105696, lng: 129.042857},
      bands: {
        lat: 35.106187,
        lng: 129.042943,
      },
      bands2: {
        lat: 35.105556,
        lng: 129.04393,
      }
    }
  },
  methods: {
    onSignIn(googleUser) {
      const profile = googleUser.getBasicProfile()
      console.log('ID: ' + profile.getId())
      console.log('Full Name: ' + profile.getName())
      console.log('Given Name: ' + profile.getGivenName())
      console.log('Family Name: ' + profile.getFamilyName())
      console.log('Image URL: ' + profile.getImageUrl())
      console.log('Email: ' + profile.getEmail())
      const idToken = googleUser.getAuthResponse().id_token
      console.log('ID Token: ' + idToken)
    },
    googleLogout() {
      window.gapi.auth2.getAuthInstance().disconnect()
    },
    initMap() {
      // eslint-disable-next-line no-undef
      this.map = new google.maps.Map(document.getElementById("map"), { //getElementById로 map id 속성의 요소를 가져온다.
        center: this.mapCenter, //center로 할 위도, 경도를 지정한다.
        zoom: 17, //zoom size를 지정.
        maxZoom: 20,
        minZoom: 3,
        streetViewControl: true,
        mapTypeControl: true,
        fuulscreenControl: true,
        zoomControl: true,
      });
    },
    setMarker(Points, Label) {//지도에 마커를 찍는 함수.
      // eslint-disable-next-line no-undef,no-unused-vars
      const markers = new google.maps.Marker({
        position: Points,
        map: this.map,
        label: {
          text: Label,
          color: '#fff',
        },
      })
    }
  }

}
</script>