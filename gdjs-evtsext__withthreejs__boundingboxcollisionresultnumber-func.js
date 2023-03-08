
if (typeof gdjs.evtsExt__WithThreeJS__BoundingBoxCollisionResultNumber !== "undefined") {
  gdjs.evtsExt__WithThreeJS__BoundingBoxCollisionResultNumber.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__BoundingBoxCollisionResultNumber = {};

gdjs.evtsExt__WithThreeJS__BoundingBoxCollisionResultNumber.conditionTrue_0 = {val:false};
gdjs.evtsExt__WithThreeJS__BoundingBoxCollisionResultNumber.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__WithThreeJS__BoundingBoxCollisionResultNumber.userFunc0xf0f8d0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
if (!gdjs.__WithThreeJS.has("BoundingBoxCollisionResult")) {
    gdjs.__WithThreeJS.set("BoundingBoxCollisionResult", {Hit:false, CenterX:0, CenterY:0, CenterZ:0, SizeX:0, SizeY:0, SizeZ:0, MoveX:0, MoveY:0, MoveZ:0});
}
const BoundingBoxCollisionResult = gdjs.__WithThreeJS.get("BoundingBoxCollisionResult");
const Item = eventsFunctionContext.getArgument("Item");
//
if (Item == "Center X") {
    eventsFunctionContext.returnValue = BoundingBoxCollisionResult.CenterX;
} else if (Item == "Center Y") {
    eventsFunctionContext.returnValue = BoundingBoxCollisionResult.CenterY;
} else if (Item == "Center Z") {
    eventsFunctionContext.returnValue = BoundingBoxCollisionResult.CenterZ;
} else if (Item == "Size X") {
    eventsFunctionContext.returnValue = BoundingBoxCollisionResult.SizeX;
} else if (Item == "Size Y") {
    eventsFunctionContext.returnValue = BoundingBoxCollisionResult.SizeY;
} else if (Item == "Size Z") {
    eventsFunctionContext.returnValue = BoundingBoxCollisionResult.SizeZ;
} else if (Item == "Move X") {
    eventsFunctionContext.returnValue = BoundingBoxCollisionResult.MoveX;
} else if (Item == "Move Y") {
    eventsFunctionContext.returnValue = BoundingBoxCollisionResult.MoveY;
} else if (Item == "Move Z") {
    eventsFunctionContext.returnValue = BoundingBoxCollisionResult.MoveZ;
}


};
gdjs.evtsExt__WithThreeJS__BoundingBoxCollisionResultNumber.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__BoundingBoxCollisionResultNumber.userFunc0xf0f8d0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__BoundingBoxCollisionResultNumber.func = function(runtimeScene, Item, parentEventsFunctionContext) {
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
if (argName === "Item") return Item;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__BoundingBoxCollisionResultNumber.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__WithThreeJS__BoundingBoxCollisionResultNumber.registeredGdjsCallbacks = [];