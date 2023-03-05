
if (typeof gdjs.evtsExt__WithThreeJS__CheckBoundingBoxCollision !== "undefined") {
  gdjs.evtsExt__WithThreeJS__CheckBoundingBoxCollision.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__CheckBoundingBoxCollision = {};

gdjs.evtsExt__WithThreeJS__CheckBoundingBoxCollision.conditionTrue_0 = {val:false};
gdjs.evtsExt__WithThreeJS__CheckBoundingBoxCollision.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__WithThreeJS__CheckBoundingBoxCollision.userFunc0x7cd080 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const Id = eventsFunctionContext.getArgument("Id");
const UnmovedId = eventsFunctionContext.getArgument("UnmovedId");
//
const Obj = Scene.getObjectByName(Id);
const UnmovedObj = Scene.getObjectByName(UnmovedId);
if (!Obj || !UnmovedObj) {
    console.warn("3D Object not found.");
    return;
}
//
const BoundingBoxCollisionResult = gdjs.__WithThreeJS.get("SetBoundingBoxCollisionResult")(Obj, UnmovedObj);
eventsFunctionContext.returnValue = BoundingBoxCollisionResult.Hit;


};
gdjs.evtsExt__WithThreeJS__CheckBoundingBoxCollision.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__CheckBoundingBoxCollision.userFunc0x7cd080(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__CheckBoundingBoxCollision.func = function(runtimeScene, Id, UnmovedId, parentEventsFunctionContext) {
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
if (argName === "Id") return Id;
if (argName === "UnmovedId") return UnmovedId;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__CheckBoundingBoxCollision.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__WithThreeJS__CheckBoundingBoxCollision.registeredGdjsCallbacks = [];