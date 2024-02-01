require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], (Map, MapView, FeatureLayer) => {
  const map = new Map({
    basemap: "hybrid"
  });

const view = new MapView({
  container: "viewDiv",
  map: map,
  extent: {
    xmin: -90.5,
    ymin: 38.5,
    xmax: -90.1,
    ymax: 38.8,
    spatialReference: {
      wkid: 4326 // WGS 1984
    }
  }
});
  const featureLayer_1 = new FeatureLayer({
    url: "https://services1.arcgis.com/iZ1vJauJB0D1lbhI/arcgis/rest/services/Enriched_School_Districts/FeatureServer/0"
  });

  const featureLayer_2 = new FeatureLayer({
    url: "https://services5.arcgis.com/nR3pDNfZL4A6Wz80/arcgis/rest/services/2020_UCR_Crime_Data/FeatureServer/0"
  });

  map.addMany([featureLayer_1, featureLayer_2]);
});
