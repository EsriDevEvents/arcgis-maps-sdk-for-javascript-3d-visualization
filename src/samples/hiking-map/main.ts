import Color from "@arcgis/core/Color";
import { Point, Polyline } from "@arcgis/core/geometry";
import Graphic from "@arcgis/core/Graphic";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Map from "@arcgis/core/Map";
import { SimpleRenderer, UniqueValueRenderer } from "@arcgis/core/renderers";
import {
  LineSymbol3D,
  LineSymbol3DLayer,
  ObjectSymbol3DLayer,
  PointSymbol3D
} from "@arcgis/core/symbols";
import LineStylePattern3D from "@arcgis/core/symbols/patterns/LineStylePattern3D";
import SceneView from "@arcgis/core/views/SceneView";
import Legend from "@arcgis/core/widgets/Legend";

// STEP 1: view, map, initial camera position

const camera = {
    "position": {
        "spatialReference": {
            "latestWkid": 3857,
            "wkid": 102100
        },
        "x": 867179.8016977096,
        "y": 5785687.833958732,
        "z": 3431.6764901624992
    },
    "heading": 230.21773448987958,
    "tilt": 81.01163453720663
};

const map = new Map({
  basemap: "satellite",
  ground: "world-elevation"
});

const view = new SceneView({
  container: "viewDiv",
  map,
  camera,
  qualityProfile: "high"
});
(window as any).view = view;

view.popup.defaultPopupTemplateEnabled = true;

// STEP 2: add hiking path layer, define elevation info

// open data published as a feature service
const hikingPathLayer = new FeatureLayer({
  url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Zermatt_hiking_cable_rail/FeatureServer/1",
  // elevationInfo: {
  //   mode: "on-the-ground"
  // }
});

// view.map.add(hikingPathLayer);

// STEP 3: define renderer, combine multiple symbol layers

// hikingPathLayer.renderer = new SimpleRenderer({
//  symbol: getHikingPathSymbol("solid")
// });

function getHikingPathSymbol(patternStyle: "solid" | "dash" | "dot") {
  // each line is rendered with two symbol layers: an opaque line and a
  // semi-transparent background of the same color underneath it.
  const patternColor = new Color([252, 194, 1]);
  const backgroundColor = new Color([150, 0, 0, 0.6]);

  return new LineSymbol3D({
    symbolLayers: [
      // the semi-transparent background line symbol layer
      new LineSymbol3DLayer({
        material: { color: backgroundColor },
        size: "4px"
      }),
      // the opaque line symbol layer using a line pattern
      new LineSymbol3DLayer({
        pattern: new LineStylePattern3D({
          style: patternStyle
        }),
        material: { color: patternColor },
        size: "2px"
      })
    ]
  });
}

// STEP 4: map symbols to field values

const easyHikingPathSymbol = getHikingPathSymbol("solid");
const mediumHikingPathSymbol = getHikingPathSymbol("dash");
const difficultHikingPathSymbol = getHikingPathSymbol("dot");

const hikingPathRenderer = new UniqueValueRenderer({
  field: "difficulty",
  legendOptions: {
    title: "Hiking paths"
  },
  uniqueValueInfos: [
    {
      value: "easy",
      symbol: easyHikingPathSymbol,
      label: "Easy"
    },
    {
      value: "medium",
      symbol: mediumHikingPathSymbol,
      label: "Medium"
    },
    {
      value: "difficult",
      symbol: difficultHikingPathSymbol,
      label: "Difficult"
    }
  ]
});

// hikingPathLayer.renderer = hikingPathRenderer;

// STEP 5: add legend

// const legend = new Legend({ view });
// view.ui.add(legend, "top-right");

// STEP 6: add cable car layer

const cableCarLayer = new FeatureLayer({
  url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Zermatt_hiking_cable_rail/FeatureServer/2",
  // renderer: new SimpleRenderer({
  //   symbol: new LineSymbol3D({
  //     symbolLayers: [
  //       new LineSymbol3DLayer({
  //         material: { color: "black" },
  //         size: "1px"
  //       })
  //     ]
  //   })
  // })
});

// view.map.add(cableCarLayer);

// STEP 7: graphics layer, generate towers

const towerLayer = new GraphicsLayer();
// view.map.add(towerLayer);

const towerSymbol = new PointSymbol3D({
  symbolLayers: [
    new ObjectSymbol3DLayer({
      // anchor: "top",
      // resource: {
      //   primitive: "cylinder"
      // },
      // material: { color: "black" },
      // height: 100,
      // width: 1,
      // depth: 1
    })
  ]
});

view.when(async () => {
  // const result = await cableCarLayer.queryFeatures({
  //   where: "1=1",
  //   returnGeometry: true,
  //   returnZ: true
  // });
  // for (const feature of result.features) {
  //   const geometry = feature.geometry as Polyline;
  //   for (const path of geometry.paths) {
  //     for (const vertex of path) {
  //       towerLayer.add(
  //         new Graphic({
  //           geometry: new Point({
  //             x: vertex[0],
  //             y: vertex[1],
  //             z: vertex[2],
  //             spatialReference: geometry.spatialReference
  //           }),
  //           symbol: towerSymbol
  //         })
  //       );
  //     }
  //   }
  // }
});
