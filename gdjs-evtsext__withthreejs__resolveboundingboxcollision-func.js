
if (typeof gdjs.evtsExt__WithThreeJS__ResolveBoundingBoxCollision !== "undefined") {
  gdjs.evtsExt__WithThreeJS__ResolveBoundingBoxCollision.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__ResolveBoundingBoxCollision = {};

gdjs.evtsExt__WithThreeJS__ResolveBoundingBoxCollision.conditionTrue_0 = {val:false};
gdjs.evtsExt__WithThreeJS__ResolveBoundingBoxCollision.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__WithThreeJS__ResolveBoundingBoxCollision.userFunc0xe97bc0 = function(runtimeScene, eventsFunctionContext) {
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
const Move3 = new THREE.Vector3(BoundingBoxCollisionResult.MoveX, BoundingBoxCollisionResult.MoveY, BoundingBoxCollisionResult.MoveZ);
const WorldPosition = new THREE.Vector3();
Obj.getWorldPosition(WorldPosition);
WorldPosition.add(Move3);
Obj.position.copy(Obj.parent.worldToLocal(WorldPosition));


};
gdjs.evtsExt__WithThreeJS__ResolveBoundingBoxCollision.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__ResolveBoundingBoxCollision.userFunc0xe97bc0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__ResolveBoundingBoxCollision.func = function(runtimeScene, Id, UnmovedId, parentEventsFunctionContext) {
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


gdjs.evtsExt__WithThreeJS__ResolveBoundingBoxCollision.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__ResolveBoundingBoxCollision.registeredGdjsCallbacks = [];