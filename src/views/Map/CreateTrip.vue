<template>
  <button-create></button-create>
  <div id="map"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import buttonCreate from "../../components/Map/buttonCreate.vue";

let map = null;
export default {
  name: "UserMap",
  components: { buttonCreate },
  methods: {
    createMap() {
      mapboxgl.accessToken =
        "pk.eyJ1IjoicmV3ZTk5OSIsImEiOiJja2dwZDRweGYwcDF2MnltbzV4eGxrYXRmIn0.NZVEHJyOKu3-ACCu39fsTw";
      map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-91.34033203125, 0.01647949196029245],
        zoom: 7,
      });

      map.addControl(
        new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl,
        })
      );

      // center map
      map.on("load", function () {
        // Add an image to use as a custom marker
        map.loadImage(
          "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
          function (error, image) {
            if (error) throw error;
            map.addImage("custom-marker", image);
            // Add a GeoJSON source with 3 points.
            map.addSource("points", {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    properties: {},
                    geometry: {
                      type: "Point",
                      coordinates: [-91.395263671875, -0.9145729757782163],
                    },
                    desc: 'Numer jeden'
                  },
                  {
                    type: "Feature",
                    properties: {},
                    geometry: {
                      type: "Point",
                      coordinates: [-90.32958984375, -0.6344474832838974],
                    },
                    desc: 'Numer dwa'
                  },
                  {
                    type: "Feature",
                    properties: {},
                    geometry: {
                      type: "Point",
                      coordinates: [-91.34033203125, 0.01647949196029245],
                    },
                    desc: 'Numer trzy'
                  },
                ],
              },
            });

            // Add a symbol layer
            map.addLayer({
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
        map.on("click", "symbols", function (e) {

          let desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu";
          let title = "title";
          let img = "../../assets/avatar.png/"

          new mapboxgl.Popup({ closeOnClick: true })
          .setLngLat([e.lngLat.lng,e.lngLat.lat])
          .setHTML("<div class='mapHtml'><div class='mapHeadHtml'>"+ title +"</div>"+ desc +"</div> <div class='mapGalleryHtml'><img src='"+ img +"' alt='imgMap' /></div>")
          .addTo(map);
          
          // console.log(img);

          map.flyTo({            
            center: e.features[0].geometry.coordinates,
          });
        });

        // Change the cursor to a pointer when the it enters a feature in the 'symbols' layer.
        map.on("mouseenter", "symbols", function () {
          map.getCanvas().style.cursor = "pointer";
        });

        // Change it back to a pointer when it leaves.
        map.on("mouseleave", "symbols", function () {
          map.getCanvas().style.cursor = "";
        });
      });
      // end center map
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

.btnCreate {
  z-index: 20;
}

.mapHtml {
  width:48.5vw;
  min-height: 20vh;
  background-color: #fff;
}

.mapHeadHtml{
  width: 100%;
  height: 5vh;
  background-color: rgb(60, 150, 235);
  text-align: center;
  font-size: 2rem;
  padding-top: 10px;
}

.imgMapGallery {
  width: 2rem;
  height: 2rem;
}

.mapboxgl-popup-content {
  width: 50vw;
  min-height: 20vh;
}
</style> 