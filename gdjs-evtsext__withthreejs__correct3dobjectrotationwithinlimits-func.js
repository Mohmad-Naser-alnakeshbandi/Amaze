
if (typeof gdjs.evtsExt__WithThreeJS__Correct3DObjectRotationWithinLimits !== "undefined") {
  gdjs.evtsExt__WithThreeJS__Correct3DObjectRotationWithinLimits.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__Correct3DObjectRotationWithinLimits = {};

gdjs.evtsExt__WithThreeJS__Correct3DObjectRotationWithinLimits.conditionTrue_0 = {val:false};
gdjs.evtsExt__WithThreeJS__Correct3DObjectRotationWithinLimits.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__WithThreeJS__Correct3DObjectRotationWithinLimits.userFunc0xbb5b08 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const Id = eventsFunctionContext.getArgument("Id");
const Axis = eventsFunctionContext.getArgument("Axis");
const MinAngle = gdjs.toRad(eventsFunctionContext.getArgument("MinAngle"));
const MaxAngle = gdjs.toRad(eventsFunctionContext.getArgument("MaxAngle"));
//
const Obj = Scene.getObjectByName(Id);
if (!Obj) {
    console.warn("3D Object not found.");
    return;
}
//
const RX = Obj.rotation.x;
const RY = Obj.rotation.y;
const RZ = Obj.rotation.z;
if (Axis == "X") {
    if (RX < MinAngle) {
        Obj.rotateX(MinAngle - RX);
    }
    if (RX > MaxAngle) {
        Obj.rotateX(MaxAngle - RX);
    }
} else if (Axis == "Y") {
    if (RY < MinAngle) {
        Obj.rotateY(MinAngle - RY);
    }
    if (RY > MaxAngle) {
        Obj.rotateY(MaxAngle - RY);
    }
} else {
    if (RZ < MinAngle) {
        Obj.rotateZ(MinAngle - RZ);
    }
    if (RZ > MaxAngle) {
        Obj.rotateZ(MaxAngle - RZ);
    }
}


};
gdjs.evtsExt__WithThreeJS__Correct3DObjectRotationWithinLimits.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__Correct3DObjectRotationWithinLimits.userFunc0xbb5b08(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Correct3DObjectRotationWithinLimits.func = function(runtimeScene, Id, Axis, MinAngle, MaxAngle, parentEventsFunctionContext) {
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
if (argName === "MinAngle") return MinAngle;
if (argName === "MaxAngle") return MaxAngle;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__Correct3DObjectRotationWithinLimits.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__Correct3DObjectRotationWithinLimits.registeredGdjsCallbacks = [];