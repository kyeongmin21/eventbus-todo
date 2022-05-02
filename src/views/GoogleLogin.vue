<template>
  <div class="google">
    <h1>google</h1>
    <div id="map" style="width:100%; height:500px"></div>
  </div>
</template>

<script>
export default {
  name: 'GoogleLogin',
  mounted() {
    this.initMap();
    this.setMarker(this.mapCenter, "ce");
    this.setMarker(this.bands, "1");
    this.setMarker(this.bands2, "2");
  },
  data () {
    return {
      map: null,
      mapCenter: { lat: 35.105696, lng: 129.042857 },
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