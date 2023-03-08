gdjs.GameCode = {};
gdjs.GameCode.GDGroundObjects1= [];
gdjs.GameCode.GDGroundObjects2= [];
gdjs.GameCode.GDGroundObjects3= [];
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDwallsObjects1= [];
gdjs.GameCode.GDwallsObjects2= [];
gdjs.GameCode.GDwallsObjects3= [];
gdjs.GameCode.GDCursorObjects1= [];
gdjs.GameCode.GDCursorObjects2= [];
gdjs.GameCode.GDCursorObjects3= [];
gdjs.GameCode.GDlavaObjects1= [];
gdjs.GameCode.GDlavaObjects2= [];
gdjs.GameCode.GDlavaObjects3= [];
gdjs.GameCode.GDwaterObjects1= [];
gdjs.GameCode.GDwaterObjects2= [];
gdjs.GameCode.GDwaterObjects3= [];
gdjs.GameCode.GDdoorObjects1= [];
gdjs.GameCode.GDdoorObjects2= [];
gdjs.GameCode.GDdoorObjects3= [];
gdjs.GameCode.GDHealthBarObjects1= [];
gdjs.GameCode.GDHealthBarObjects2= [];
gdjs.GameCode.GDHealthBarObjects3= [];
gdjs.GameCode.GDHealthBarBoxObjects1= [];
gdjs.GameCode.GDHealthBarBoxObjects2= [];
gdjs.GameCode.GDHealthBarBoxObjects3= [];
gdjs.GameCode.GDControlObjects1= [];
gdjs.GameCode.GDControlObjects2= [];
gdjs.GameCode.GDControlObjects3= [];
gdjs.GameCode.GDRoofObjects1= [];
gdjs.GameCode.GDRoofObjects2= [];
gdjs.GameCode.GDRoofObjects3= [];
gdjs.GameCode.GDNewTiledSpriteObjects1= [];
gdjs.GameCode.GDNewTiledSpriteObjects2= [];
gdjs.GameCode.GDNewTiledSpriteObjects3= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.GameCode.GDCursorObjects2);
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("HealthBar"), gdjs.GameCode.GDHealthBarObjects2);
gdjs.copyArray(runtimeScene.getObjects("HealthBarBox"), gdjs.GameCode.GDHealthBarBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Roof"), gdjs.GameCode.GDRoofObjects2);
gdjs.copyArray(runtimeScene.getObjects("lava"), gdjs.GameCode.GDlavaObjects2);
gdjs.copyArray(runtimeScene.getObjects("walls"), gdjs.GameCode.GDwallsObjects2);
gdjs.copyArray(runtimeScene.getObjects("water"), gdjs.GameCode.GDwaterObjects2);
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{gdjs.evtsExt__WithThreeJS__Create3DScene.func(runtimeScene, 50, "0;0;0", "", "", 0.5, 10, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.GameCode.GDRoofObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRoofObjects2[i].setZOrder(200);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAngle(90);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setZOrder(45);
}
}{for(var i = 0, len = gdjs.GameCode.GDwallsObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDwallsObjects2[i].setZOrder(3);
}
}{for(var i = 0, len = gdjs.GameCode.GDGroundObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDGroundObjects2[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDlavaObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDlavaObjects2[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDwaterObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDwaterObjects2[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDCursorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCursorObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDHealthBarBoxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDHealthBarBoxObjects2[i].setWidth(200);
}
}{for(var i = 0, len = gdjs.GameCode.GDHealthBarObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDHealthBarObjects2[i].setWidth(180);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "5ce5d54982dfbcfc01a4bc2887f9ebab34545689cde2fbd2b8d90219a8528d25_Dark Hallway.aac", true, 75, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Game_time");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.GameCode.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("lava"), gdjs.GameCode.GDlavaObjects1);
gdjs.copyArray(runtimeScene.getObjects("water"), gdjs.GameCode.GDwaterObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setAngle((( gdjs.GameCode.GDCursorObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDCursorObjects1[0].getPointX("")) - 90);
}
}{for(var i = 0, len = gdjs.GameCode.GDlavaObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDlavaObjects1[i].setXOffset(gdjs.GameCode.GDlavaObjects1[i].getXOffset() - (10 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.GameCode.GDwaterObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDwaterObjects1[i].setYOffset(gdjs.GameCode.GDwaterObjects1[i].getYOffset() - (10 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Control"), gdjs.GameCode.GDControlObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].addPolarForce((gdjs.GameCode.GDPlayerObjects2[i].getAngle()), 120, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDControlObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDControlObjects2[i].setVariableBoolean(gdjs.GameCode.GDControlObjects2[i].getVariables().getFromIndex(0), false);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Control"), gdjs.GameCode.GDControlObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].addPolarForce((gdjs.GameCode.GDPlayerObjects2[i].getAngle()) + 180, 120, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDControlObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDControlObjects2[i].setVariableBoolean(gdjs.GameCode.GDControlObjects2[i].getVariables().getFromIndex(0), false);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Control"), gdjs.GameCode.GDControlObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].addPolarForce((gdjs.GameCode.GDPlayerObjects2[i].getAngle()) + 90, 120, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDControlObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDControlObjects2[i].setVariableBoolean(gdjs.GameCode.GDControlObjects2[i].getVariables().getFromIndex(0), false);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Control"), gdjs.GameCode.GDControlObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].addPolarForce((gdjs.GameCode.GDPlayerObjects1[i].getAngle()) - 90, 120, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDControlObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDControlObjects1[i].setVariableBoolean(gdjs.GameCode.GDControlObjects1[i].getVariables().getFromIndex(0), false);
}
}}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.GameCode.GDCursorObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCursorObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCursorObjects2[i].getY() >= 436 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCursorObjects2[k] = gdjs.GameCode.GDCursorObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCursorObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCursorObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDCursorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCursorObjects2[i].setY(463);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.GameCode.GDCursorObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCursorObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCursorObjects2[i].getY() <= 270 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCursorObjects2[k] = gdjs.GameCode.GDCursorObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCursorObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCursorObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDCursorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCursorObjects2[i].setY(270);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.GameCode.GDCursorObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCursorObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCursorObjects2[i].getY() > 270 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCursorObjects2[k] = gdjs.GameCode.GDCursorObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCursorObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCursorObjects2 */
{gdjs.evtsExt__WithThreeJS__Rotate3DCameraLikeHead.func(runtimeScene, "=", (( gdjs.GameCode.GDCursorObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDCursorObjects2[0].getPointY("")) * -(1), (( gdjs.GameCode.GDCursorObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDCursorObjects2[0].getPointX("")) * -(1), 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.GameCode.GDCursorObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCursorObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCursorObjects1[i].getY() < 436 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCursorObjects1[k] = gdjs.GameCode.GDCursorObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCursorObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCursorObjects1 */
{gdjs.evtsExt__WithThreeJS__Rotate3DCameraLikeHead.func(runtimeScene, "=", (( gdjs.GameCode.GDCursorObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDCursorObjects1[0].getPointY("")) * -(1), (( gdjs.GameCode.GDCursorObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDCursorObjects1[0].getPointX("")) * -(1), 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDlavaObjects2Objects = Hashtable.newFrom({"lava": gdjs.GameCode.GDlavaObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDwaterObjects1Objects = Hashtable.newFrom({"water": gdjs.GameCode.GDwaterObjects1});
gdjs.GameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("lava"), gdjs.GameCode.GDlavaObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDlavaObjects2Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12888652);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HealthBar"), gdjs.GameCode.GDHealthBarObjects2);
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 2, 1, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].returnVariable(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).sub(0.01);
}
}{for(var i = 0, len = gdjs.GameCode.GDHealthBarObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDHealthBarObjects2[i].setWidth(gdjs.GameCode.GDHealthBarObjects2[i].getWidth() - (gdjs.evtTools.common.clamp((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects2[0].getVariables()).getFromIndex(1))) / (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0))) * 80, 0, 80)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("water"), gdjs.GameCode.GDwaterObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDwaterObjects1Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8297084);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HealthBar"), gdjs.GameCode.GDHealthBarObjects1);
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 2, 1, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].returnVariable(gdjs.GameCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).sub(0.01);
}
}{for(var i = 0, len = gdjs.GameCode.GDHealthBarObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHealthBarObjects1[i].setWidth(gdjs.GameCode.GDHealthBarObjects1[i].getWidth() - (gdjs.evtTools.common.clamp((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects1[0].getVariables()).getFromIndex(1))) / (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects1[0].getVariables()).getFromIndex(0))) * 80, 0, 80)));
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDdoorObjects1Objects = Hashtable.newFrom({"door": gdjs.GameCode.GDdoorObjects1});
gdjs.GameCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("door"), gdjs.GameCode.GDdoorObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDdoorObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameWin", false);
}}

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("HealthBar"), gdjs.GameCode.GDHealthBarObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDHealthBarObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDHealthBarObjects1[i].getWidth() < 20 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDHealthBarObjects1[k] = gdjs.GameCode.GDHealthBarObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDHealthBarObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


};gdjs.GameCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Control"), gdjs.GameCode.GDControlObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDControlObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDControlObjects1[i].getVariableBoolean(gdjs.GameCode.GDControlObjects1[i].getVariables().getFromIndex(0), false) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDControlObjects1[k] = gdjs.GameCode.GDControlObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDControlObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDControlObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDControlObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDControlObjects1[i].hide();
}
}}

}


};gdjs.GameCode.eventsList7 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0(runtimeScene);
}


{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


gdjs.GameCode.eventsList4(runtimeScene);
}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


{


gdjs.GameCode.eventsList6(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDGroundObjects1.length = 0;
gdjs.GameCode.GDGroundObjects2.length = 0;
gdjs.GameCode.GDGroundObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDwallsObjects1.length = 0;
gdjs.GameCode.GDwallsObjects2.length = 0;
gdjs.GameCode.GDwallsObjects3.length = 0;
gdjs.GameCode.GDCursorObjects1.length = 0;
gdjs.GameCode.GDCursorObjects2.length = 0;
gdjs.GameCode.GDCursorObjects3.length = 0;
gdjs.GameCode.GDlavaObjects1.length = 0;
gdjs.GameCode.GDlavaObjects2.length = 0;
gdjs.GameCode.GDlavaObjects3.length = 0;
gdjs.GameCode.GDwaterObjects1.length = 0;
gdjs.GameCode.GDwaterObjects2.length = 0;
gdjs.GameCode.GDwaterObjects3.length = 0;
gdjs.GameCode.GDdoorObjects1.length = 0;
gdjs.GameCode.GDdoorObjects2.length = 0;
gdjs.GameCode.GDdoorObjects3.length = 0;
gdjs.GameCode.GDHealthBarObjects1.length = 0;
gdjs.GameCode.GDHealthBarObjects2.length = 0;
gdjs.GameCode.GDHealthBarObjects3.length = 0;
gdjs.GameCode.GDHealthBarBoxObjects1.length = 0;
gdjs.GameCode.GDHealthBarBoxObjects2.length = 0;
gdjs.GameCode.GDHealthBarBoxObjects3.length = 0;
gdjs.GameCode.GDControlObjects1.length = 0;
gdjs.GameCode.GDControlObjects2.length = 0;
gdjs.GameCode.GDControlObjects3.length = 0;
gdjs.GameCode.GDRoofObjects1.length = 0;
gdjs.GameCode.GDRoofObjects2.length = 0;
gdjs.GameCode.GDRoofObjects3.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects3.length = 0;

gdjs.GameCode.eventsList7(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
