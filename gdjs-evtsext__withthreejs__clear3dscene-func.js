
if (typeof gdjs.evtsExt__WithThreeJS__Clear3DScene !== "undefined") {
  gdjs.evtsExt__WithThreeJS__Clear3DScene.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__Clear3DScene = {};

gdjs.evtsExt__WithThreeJS__Clear3DScene.conditionTrue_0 = {val:false};
gdjs.evtsExt__WithThreeJS__Clear3DScene.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__WithThreeJS__Clear3DScene.userFunc0x7e36f0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
//
const All = runtimeScene.getAdhocListOfAllInstances();
for (let i = All.length - 1; i >= 0; i--){
    if (
           All[i].hasBehavior("SpriteProjection")
        || All[i].hasBehavior("BoardProjection")
        || All[i].hasBehavior("PlaneProjectionFromTiled")
        || All[i].hasBehavior("BoxProjectionFromTiled")
        ) {
        All[i].deleteFromScene(runtimeScene);
    }
}
Scene.clear();


};
gdjs.evtsExt__WithThreeJS__Clear3DScene.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__Clear3DScene.userFunc0x7e36f0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Clear3DScene.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__Clear3DScene.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__Clear3DScene.registeredGdjsCallbacks = [];