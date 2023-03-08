
if (typeof gdjs.evtsExt__CameraShake__SetLayerShakable !== "undefined") {
  gdjs.evtsExt__CameraShake__SetLayerShakable.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraShake__SetLayerShakable = {};

gdjs.evtsExt__CameraShake__SetLayerShakable.conditionTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__SetLayerShakable.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__SetLayerShakable.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__SetLayerShakable.conditionTrue_1 = {val:false};
gdjs.evtsExt__CameraShake__SetLayerShakable.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__CameraShake__SetLayerShakable.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__CameraShake__SetLayerShakable.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("LayerName").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}}

}


{


gdjs.evtsExt__CameraShake__SetLayerShakable.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__SetLayerShakable.conditionTrue_1 = gdjs.evtsExt__CameraShake__SetLayerShakable.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__SetLayerShakable.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : "") == "");
}
}if (gdjs.evtsExt__CameraShake__SetLayerShakable.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("LayerName").setString("__BaseLayer");
}}

}


{


gdjs.evtsExt__CameraShake__SetLayerShakable.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__SetLayerShakable.conditionTrue_1 = gdjs.evtsExt__CameraShake__SetLayerShakable.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__SetLayerShakable.conditionTrue_1.val = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Shakable") : false);
}
}if (gdjs.evtsExt__CameraShake__SetLayerShakable.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Layers").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("LayerName"))).getChild("Shakable"), false);
}}

}


{


gdjs.evtsExt__CameraShake__SetLayerShakable.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__SetLayerShakable.conditionTrue_1 = gdjs.evtsExt__CameraShake__SetLayerShakable.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__SetLayerShakable.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Shakable") : false);
}
}if (gdjs.evtsExt__CameraShake__SetLayerShakable.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Layers").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("LayerName"))).getChild("Shakable"), true);
}}

}


};

gdjs.evtsExt__CameraShake__SetLayerShakable.func = function(runtimeScene, Shakable, Layer, parentEventsFunctionContext) {
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
if (argName === "Shakable") return Shakable;
if (argName === "Layer") return Layer;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraShake__SetLayerShakable.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CameraShake__SetLayerShakable.registeredGdjsCallbacks = [];