
if (typeof gdjs.evtsExt__WithThreeJS__CameraDirection !== "undefined") {
  gdjs.evtsExt__WithThreeJS__CameraDirection.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__CameraDirection = {};

gdjs.evtsExt__WithThreeJS__CameraDirection.conditionTrue_0 = {val:false};
gdjs.evtsExt__WithThreeJS__CameraDirection.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__WithThreeJS__CameraDirection.userFunc0xbb5b08 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Camera = gdjs.__WithThreeJS.get("Camera");
const Axis = eventsFunctionContext.getArgument("Axis");
const WorldDirection = new THREE.Vector3();
Camera.getWorldDirection(WorldDirection);
//
if (Axis == "X") {
    eventsFunctionContext.returnValue = WorldDirection.x;
} else if (Axis == "Y") {
    eventsFunctionContext.returnValue = WorldDirection.y;
} else {
    eventsFunctionContext.returnValue = WorldDirection.z;
}


};
gdjs.evtsExt__WithThreeJS__CameraDirection.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__CameraDirection.userFunc0xbb5b08(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__CameraDirection.func = function(runtimeScene, Axis, parentEventsFunctionContext) {
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
if (argName === "Axis") return Axis;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__CameraDirection.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__WithThreeJS__CameraDirection.registeredGdjsCallbacks = [];