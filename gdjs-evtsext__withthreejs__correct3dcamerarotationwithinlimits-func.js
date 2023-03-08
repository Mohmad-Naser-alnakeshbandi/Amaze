
if (typeof gdjs.evtsExt__WithThreeJS__Correct3DCameraRotationWithinLimits !== "undefined") {
  gdjs.evtsExt__WithThreeJS__Correct3DCameraRotationWithinLimits.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__Correct3DCameraRotationWithinLimits = {};

gdjs.evtsExt__WithThreeJS__Correct3DCameraRotationWithinLimits.conditionTrue_0 = {val:false};
gdjs.evtsExt__WithThreeJS__Correct3DCameraRotationWithinLimits.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__WithThreeJS__Correct3DCameraRotationWithinLimits.userFunc0xbb5b08 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Camera = gdjs.__WithThreeJS.get("Camera");
const Rad3 = gdjs.__WithThreeJS.get("GetSingleRadian3")(Camera);
const MinX = gdjs.toRad(eventsFunctionContext.getArgument("MinAngleX"));
const MaxX = gdjs.toRad(eventsFunctionContext.getArgument("MaxAngleX"));
const MinY = gdjs.toRad(eventsFunctionContext.getArgument("MinAngleY"));
const MaxY = gdjs.toRad(eventsFunctionContext.getArgument("MaxAngleY"));
const MinZ = gdjs.toRad(eventsFunctionContext.getArgument("MinAngleZ"));
const MaxZ = gdjs.toRad(eventsFunctionContext.getArgument("MaxAngleZ"));
//
if (Rad3.x < MinX) {
    Camera.rotateX(MinX - Rad3.x);
}
if (Rad3.x > MaxX) {
    Camera.rotateX(MaxX - Rad3.x);
}
//
if (Rad3.y < MinY) {
    Camera.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), MinY - Rad3.y);
}
if (Rad3.y > MaxY) {
    Camera.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), MaxY - Rad3.y);
}
//
if (Rad3.z < MinZ) {
    Camera.rotateZ(MinZ - Rad3.z);
}
if (Rad3.z > MaxZ) {
    Camera.rotateZ(MaxZ - Rad3.z);
}


};
gdjs.evtsExt__WithThreeJS__Correct3DCameraRotationWithinLimits.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__Correct3DCameraRotationWithinLimits.userFunc0xbb5b08(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Correct3DCameraRotationWithinLimits.func = function(runtimeScene, MinAngleX, MaxAngleX, MinAngleY, MaxAngleY, MinAngleZ, MaxAngleZ, parentEventsFunctionContext) {
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
if (argName === "MinAngleX") return MinAngleX;
if (argName === "MaxAngleX") return MaxAngleX;
if (argName === "MinAngleY") return MinAngleY;
if (argName === "MaxAngleY") return MaxAngleY;
if (argName === "MinAngleZ") return MinAngleZ;
if (argName === "MaxAngleZ") return MaxAngleZ;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__Correct3DCameraRotationWithinLimits.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__Correct3DCameraRotationWithinLimits.registeredGdjsCallbacks = [];