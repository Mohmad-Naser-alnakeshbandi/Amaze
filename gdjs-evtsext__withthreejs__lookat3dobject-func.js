
if (typeof gdjs.evtsExt__WithThreeJS__LookAt3DObject !== "undefined") {
  gdjs.evtsExt__WithThreeJS__LookAt3DObject.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__LookAt3DObject = {};

gdjs.evtsExt__WithThreeJS__LookAt3DObject.conditionTrue_0 = {val:false};
gdjs.evtsExt__WithThreeJS__LookAt3DObject.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__WithThreeJS__LookAt3DObject.userFunc0xbb5b08 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const Id = eventsFunctionContext.getArgument("Id");
const TargetId = eventsFunctionContext.getArgument("TargetId");
//
const Obj = Scene.getObjectByName(Id);
let TargetObj = Scene.getObjectByName(TargetId);
if (!Obj || !TargetObj) {
    console.warn("3D Object not found.");
    return;
}
//
Obj.lookAt(TargetObj.position);


};
gdjs.evtsExt__WithThreeJS__LookAt3DObject.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__LookAt3DObject.userFunc0xbb5b08(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__LookAt3DObject.func = function(runtimeScene, Id, TargetId, parentEventsFunctionContext) {
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
if (argName === "TargetId") return TargetId;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__LookAt3DObject.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__LookAt3DObject.registeredGdjsCallbacks = [];