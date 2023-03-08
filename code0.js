gdjs.StartCode = {};
gdjs.StartCode.GDGroundObjects1= [];
gdjs.StartCode.GDGroundObjects2= [];
gdjs.StartCode.GDTitleObjects1= [];
gdjs.StartCode.GDTitleObjects2= [];
gdjs.StartCode.GDWhiteDecoratedButtonObjects1= [];
gdjs.StartCode.GDWhiteDecoratedButtonObjects2= [];

gdjs.StartCode.conditionTrue_0 = {val:false};
gdjs.StartCode.condition0IsTrue_0 = {val:false};
gdjs.StartCode.condition1IsTrue_0 = {val:false};


gdjs.StartCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.StartCode.GDTitleObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.StartCode.GDWhiteDecoratedButtonObjects1);
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{for(var i = 0, len = gdjs.StartCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDTitleObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - 300);
}
}{for(var i = 0, len = gdjs.StartCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDWhiteDecoratedButtonObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 + 100);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.StartCode.GDWhiteDecoratedButtonObjects1);

gdjs.StartCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StartCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDWhiteDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.StartCode.condition0IsTrue_0.val = true;
        gdjs.StartCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.StartCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDWhiteDecoratedButtonObjects1.length = k;}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDGroundObjects1.length = 0;
gdjs.StartCode.GDGroundObjects2.length = 0;
gdjs.StartCode.GDTitleObjects1.length = 0;
gdjs.StartCode.GDTitleObjects2.length = 0;
gdjs.StartCode.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.StartCode.GDWhiteDecoratedButtonObjects2.length = 0;

gdjs.StartCode.eventsList0(runtimeScene);

return;

}

gdjs['StartCode'] = gdjs.StartCode;
