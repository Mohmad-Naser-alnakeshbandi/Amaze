
if (typeof gdjs.evtsExt__WithThreeJS__ObjectRotation !== "undefined") {
  gdjs.evtsExt__WithThreeJS__ObjectRotation.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__ObjectRotation = {};

gdjs.evtsExt__WithThreeJS__ObjectRotation.conditionTrue_0 = {val:false};
gdjs.evtsExt__WithThreeJS__ObjectRotation.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__WithThreeJS__ObjectRotation.userFunc0x7d8b80 = function(runtimeScene, eventsFunctionContext) {
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
if (Axis == "X") {
    eventsFunctionContext.returnValue = gdjs.toDegrees(Obj.rotation.x);
} else if (Axis == "Y") {
    eventsFunctionContext.returnValue = gdjs.toDegrees(Obj.rotation.y);
} else {
    eventsFunctionContext.returnValue = gdjs.toDegrees(Obj.rotation.z);
}


};
gdjs.evtsExt__WithThreeJS__ObjectRotation.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__ObjectRotation.userFunc0x7d8b80(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__ObjectRotation.func = function(runtimeScene, Id, Axis, parentEventsFunctionContext) {
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


gdjs.evtsExt__WithThreeJS__ObjectRotation.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__WithThreeJS__ObjectRotation.registeredGdjsCallbacks = [];