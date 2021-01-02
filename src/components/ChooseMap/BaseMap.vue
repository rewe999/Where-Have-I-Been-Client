<template>
  <div id="map"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

export default {
  name: "Base Map",
  data() {
    return {
      map: null,
    };
  },
  props: { items: Array },
  methods: {
    createMap() {
      this.map = mapboxgl.accessToken =
        "pk.eyJ1IjoicmV3ZTk5OSIsImEiOiJja2dwZDRweGYwcDF2MnltbzV4eGxrYXRmIn0.NZVEHJyOKu3-ACCu39fsTw";
      this.map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-112.74090004764511, 46.36100006625516],
        zoom: 9,
      });

      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false,
      });

      this.map.addControl(geocoder);

      // tu start
      this.map.on("load", function () {
        // Add an image to use as a custom marker
        this.map.loadImage(
          "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
          function (error, image) {
            if (error) throw error;
            this.map.addImage("custom-marker", image);
            // Add a GeoJSON source with 3 points.
            this.map.addSource("points", {
              type: "geojson",
              data:
                "https://api.mapbox.com/geocoding/v5/mapbox.places/-112.73804554177912%2C46.361136226221646.json?access_token=pk.eyJ1Ijoic2VhcmNoLW1hY2hpbmUtdXNlci0xIiwiYSI6ImNrN2Y1Nmp4YjB3aG4zZ253YnJoY21kbzkifQ.JM5ZeqwEEm-Tonrk5wOOMw&cachebuster=1608723620421&autocomplete=true",
            });

            // Add a symbol layer
            this.map.addLayer({
              id: "symbols",
              type: "symbol",
              source: "points",
              layout: {
                "icon-image": "custom-marker",
              },
            });
          }
        );

        // Center the map on the coordinates of any clicked symbol from the 'symbols' layer.
        this.map.on("click", "symbols", function (e) {
          let desc =
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu";

          // let title = this.title;
          let img = "../../assets/avatar.png/";

          new mapboxgl.Popup({ closeOnClick: true })
            .setLngLat([e.lngLat.lng, e.lngLat.lat])
            .setHTML(
              "<div class='mapHtml'><div class='mapHeadHtml'>" +
                this.title +
                "</div>" +
                desc +
                "</div> <div class='mapGalleryHtml'><img src='" +
                img +
                "' alt='imgMap' /></div>"
            )
            .addTo(this.map);

          this.map.flyTo({
            center: e.features[0].geometry.coordinates,
          });
        });

        // Change the cursor to a pointer when the it enters a feature in the 'symbols' layer.
        this.map.on("mouseenter", "symbols", function () {
          this.map.getCanvas().style.cursor = "pointer";
        });

        // Change it back to a pointer when it leaves.
        this.map.on("mouseleave", "symbols", function () {
          this.map.getCanvas().style.cursor = "";
        });
      });
      // tu end
    },
  },
  mounted() {
    this.createMap();
  },
};
</script>

<style>
#map {
  width: 100vw;
  height: 100vh;
}
</style>