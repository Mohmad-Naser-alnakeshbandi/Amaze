
if (typeof gdjs.evtsExt__CameraShake__onScenePostEvents !== "undefined") {
  gdjs.evtsExt__CameraShake__onScenePostEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraShake__onScenePostEvents = {};

gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__onScenePostEvents.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("ActualLayerName").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("LayerName")));
}}

}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("LayerName")) == "__BaseLayer";
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("ActualLayerName").setString("");
}}

}


{



}


{


{
{gdjs.evtsExt__CameraShake__SetFrequency.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("DefaultFrequency")), "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("AmplitudeX").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("DefaultAmplitudeX")));
}{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("AmplitudeY").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("DefaultAmplitudeY")));
}{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("AmplitudeAngle").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("DefaultAmplitudeAngle")));
}{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("AmplitudeZoom").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("DefaultAmplitudeZoom")));
}}

}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Layer"), "Frequency");
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{gdjs.evtsExt__CameraShake__SetFrequency.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Layer").getChild("Frequency")), "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Layer"), "AmplitudeX");
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("AmplitudeX").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Layer").getChild("AmplitudeX")));
}}

}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Layer"), "AmplitudeY");
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("AmplitudeY").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Layer").getChild("AmplitudeY")));
}}

}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Layer"), "AmplitudeAngle");
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("AmplitudeAngle").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Layer").getChild("AmplitudeAngle")));
}}

}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Layer"), "AmplitudeZoom");
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("AmplitudeZoom").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Layer").getChild("AmplitudeZoom")));
}}

}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("AmplitudeX")) != 0;
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Layers").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("LayerName"))).getChild("CameraDeltaX").setNumber(gdjs.evtsExt__CameraShake__Noise2d.func(runtimeScene, "", gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene), 1000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("AmplitudeX")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("EaseFactor")));
}{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("ActualLayerName")), 0) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Layers").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("LayerName"))).getChild("CameraDeltaX"))), gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("ActualLayerName")), 0);
}}

}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("AmplitudeY")) != 0;
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Layers").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("LayerName"))).getChild("CameraDeltaY").setNumber(gdjs.evtsExt__CameraShake__Noise2d.func(runtimeScene, "", gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene), 2000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("AmplitudeY")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("EaseFactor")));
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("ActualLayerName")), 0) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Layers").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("LayerName"))).getChild("CameraDeltaY"))), gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("ActualLayerName")), 0);
}}

}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("AmplitudeAngle")) != 0;
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Layers").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("LayerName"))).getChild("CameraDeltaAngle").setNumber(gdjs.evtsExt__CameraShake__Noise2d.func(runtimeScene, "", gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene), 3000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("AmplitudeAngle")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("EaseFactor")));
}{gdjs.evtTools.camera.setCameraRotation(runtimeScene, gdjs.evtTools.camera.getCameraRotation(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("ActualLayerName")), 0) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Layers").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("LayerName"))).getChild("CameraDeltaAngle"))), gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("ActualLayerName")), 0);
}}

}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("AmplitudeZoom")) != 1;
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Layers").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("LayerName"))).getChild("CameraDeltaZoom").setNumber(Math.pow(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("AmplitudeZoom")), gdjs.evtsExt__CameraShake__Noise2d.func(runtimeScene, "", gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene), 4000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("EaseFactor"))));
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.evtTools.camera.getCameraZoom(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("ActualLayerName")), 0) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Layers").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("LayerName"))).getChild("CameraDeltaZoom")), gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("ActualLayerName")), 0);
}}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Time")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("StartEaseDuration"));
}if ( gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_0.val = !(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Time")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Duration")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("StopEaseDuration")));
}}
if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("EaseFactor").setNumber(gdjs.evtTools.common.clamp(0, 1, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Time")) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("StartEaseDuration"))));
}}

}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Time")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Duration")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("StopEaseDuration"));
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("EaseFactor").setNumber(gdjs.evtTools.common.clamp(0, 1, (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Duration")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Time"))) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("StopEaseDuration"))));
}}

}


{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().get("__CameraShake").getChild("LayerName");
const valueIteratorReference2 = runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Layer");
const iterableReference2 = runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Layers");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Layers").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("LayerName"))).getChild("Shakable"), true);
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val)
{

{ //Subevents: 
gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}
}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Time").add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtsExt__CameraShake__IsShaking.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("EaseFactor").setNumber(1);
}
{ //Subevents
gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__CameraShake__onScenePostEvents.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList2(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CameraShake__onScenePostEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__CameraShake__onScenePostEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__CameraShake__onScenePostEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePostEventsCallback(gdjs.evtsExt__CameraShake__onScenePostEvents.registeredGdjsCallbacks[gdjs.evtsExt__CameraShake__onScenePostEvents.registeredGdjsCallbacks.length - 1]);
