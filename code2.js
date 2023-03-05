gdjs.GameOverCode = {};
gdjs.GameOverCode.GDGroundObjects1= [];
gdjs.GameOverCode.GDGroundObjects2= [];
gdjs.GameOverCode.GDOverObjects1= [];
gdjs.GameOverCode.GDOverObjects2= [];
gdjs.GameOverCode.GDTryAgainObjects1= [];
gdjs.GameOverCode.GDTryAgainObjects2= [];
gdjs.GameOverCode.GDOutObjects1= [];
gdjs.GameOverCode.GDOutObjects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Out"), gdjs.GameOverCode.GDOutObjects1);
gdjs.copyArray(runtimeScene.getObjects("Over"), gdjs.GameOverCode.GDOverObjects1);
gdjs.copyArray(runtimeScene.getObjects("TryAgain"), gdjs.GameOverCode.GDTryAgainObjects1);
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{for(var i = 0, len = gdjs.GameOverCode.GDOverObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDOverObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - 200);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDTryAgainObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDTryAgainObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - 300,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDOutObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDOutObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 + 300,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TryAgain"), gdjs.GameOverCode.GDTryAgainObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameOverCode.GDTryAgainObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDTryAgainObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.GameOverCode.condition0IsTrue_0.val = true;
        gdjs.GameOverCode.GDTryAgainObjects1[k] = gdjs.GameOverCode.GDTryAgainObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDTryAgainObjects1.length = k;}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Out"), gdjs.GameOverCode.GDOutObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameOverCode.GDOutObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDOutObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.GameOverCode.condition0IsTrue_0.val = true;
        gdjs.GameOverCode.GDOutObjects1[k] = gdjs.GameOverCode.GDOutObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDOutObjects1.length = k;}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDGroundObjects1.length = 0;
gdjs.GameOverCode.GDGroundObjects2.length = 0;
gdjs.GameOverCode.GDOverObjects1.length = 0;
gdjs.GameOverCode.GDOverObjects2.length = 0;
gdjs.GameOverCode.GDTryAgainObjects1.length = 0;
gdjs.GameOverCode.GDTryAgainObjects2.length = 0;
gdjs.GameOverCode.GDOutObjects1.length = 0;
gdjs.GameOverCode.GDOutObjects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);

return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
