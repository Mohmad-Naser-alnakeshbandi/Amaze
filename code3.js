gdjs.GameWinCode = {};
gdjs.GameWinCode.GDGroundObjects1= [];
gdjs.GameWinCode.GDGroundObjects2= [];
gdjs.GameWinCode.GDWinObjects1= [];
gdjs.GameWinCode.GDWinObjects2= [];

gdjs.GameWinCode.conditionTrue_0 = {val:false};
gdjs.GameWinCode.condition0IsTrue_0 = {val:false};


gdjs.GameWinCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Win"), gdjs.GameWinCode.GDWinObjects1);
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{for(var i = 0, len = gdjs.GameWinCode.GDWinObjects1.length ;i < len;++i) {
    gdjs.GameWinCode.GDWinObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}}

}


};

gdjs.GameWinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameWinCode.GDGroundObjects1.length = 0;
gdjs.GameWinCode.GDGroundObjects2.length = 0;
gdjs.GameWinCode.GDWinObjects1.length = 0;
gdjs.GameWinCode.GDWinObjects2.length = 0;

gdjs.GameWinCode.eventsList0(runtimeScene);

return;

}

gdjs['GameWinCode'] = gdjs.GameWinCode;
