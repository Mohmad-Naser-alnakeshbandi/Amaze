
if (typeof gdjs.evtsExt__WithThreeJS__ObjectRotationOnWorld !== "undefined") {
  gdjs.evtsExt__WithThreeJS__ObjectRotationOnWorld.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__ObjectRotationOnWorld = {};

gdjs.evtsExt__WithThreeJS__ObjectRotationOnWorld.conditionTrue_0 = {val:false};
gdjs.evtsExt__WithThreeJS__ObjectRotationOnWorld.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__WithThreeJS__ObjectRotationOnWorld.userFunc0x7cd080 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const Id = eventsFunctionContext.getArgument("Id");
const Axis = eventsFunctionContext.getArgument("Axis");
//
const Obj = Scene.getObjectByName(Id);
if (!Obj) {
    console.warn("3D Object not found.");
    return;
}
//
const WorldQuaternion = new THREE.Quaternion();
Obj.getWorldQuaternion(WorldQuaternion);
const Euler = new THREE.Euler();
Euler.setFromQuaternion(WorldQuaternion);
if (Axis == "X") {
    eventsFunctionContext.returnValue = gdjs.toDegrees(Euler.x);
} else if (Axis == "Y") {
    eventsFunctionContext.returnValue = gdjs.toDegrees(Euler.y);
} else {
    eventsFunctionContext.returnValue = gdjs.toDegrees(Euler.z);
}


};
gdjs.evtsExt__WithThreeJS__ObjectRotationOnWorld.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__ObjectRotationOnWorld.userFunc0x7cd080(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__ObjectRotationOnWorld.func = function(runtimeScene, Id, Axis, parentEventsFunctionContext) {
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
if (argName === "Axis") return Axis;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__ObjectRotationOnWorld.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__WithThreeJS__ObjectRotationOnWorld.registeredGdjsCallbacks = [];