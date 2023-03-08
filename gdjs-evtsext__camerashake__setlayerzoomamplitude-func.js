
if (typeof gdjs.evtsExt__CameraShake__SetLayerZoomAmplitude !== "undefined") {
  gdjs.evtsExt__CameraShake__SetLayerZoomAmplitude.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraShake__SetLayerZoomAmplitude = {};

gdjs.evtsExt__CameraShake__SetLayerZoomAmplitude.conditionTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__SetLayerZoomAmplitude.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__SetLayerZoomAmplitude.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__SetLayerZoomAmplitude.conditionTrue_1 = {val:false};
gdjs.evtsExt__CameraShake__SetLayerZoomAmplitude.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__CameraShake__SetLayerZoomAmplitude.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__CameraShake__SetLayerZoomAmplitude.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("LayerName").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}}

}


{


gdjs.evtsExt__CameraShake__SetLayerZoomAmplitude.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__SetLayerZoomAmplitude.conditionTrue_1 = gdjs.evtsExt__CameraShake__SetLayerZoomAmplitude.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__SetLayerZoomAmplitude.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : "") == "");
}
}if (gdjs.evtsExt__CameraShake__SetLayerZoomAmplitude.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("LayerName").setString("__BaseLayer");
}}

}


{


{
{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Layers").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("LayerName"))).getChild("AmplitudeZoom").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("AmplitudeZoom")) || 0 : 0));
}}

}


};

gdjs.evtsExt__CameraShake__SetLayerZoomAmplitude.func = function(runtimeScene, AmplitudeZoom, Layer, parentEventsFunctionContext) {
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
if (argName === "AmplitudeZoom") return AmplitudeZoom;
if (argName === "Layer") return Layer;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraShake__SetLayerZoomAmplitude.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CameraShake__SetLayerZoomAmplitude.registeredGdjsCallbacks = [];