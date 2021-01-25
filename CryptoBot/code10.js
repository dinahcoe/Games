gdjs.UnlockedCode = {};
gdjs.UnlockedCode.GDCreditsObjects1= [];
gdjs.UnlockedCode.GDCreditsObjects2= [];
gdjs.UnlockedCode.GDRestartObjects1= [];
gdjs.UnlockedCode.GDRestartObjects2= [];
gdjs.UnlockedCode.GDExitObjects1= [];
gdjs.UnlockedCode.GDExitObjects2= [];

gdjs.UnlockedCode.conditionTrue_0 = {val:false};
gdjs.UnlockedCode.condition0IsTrue_0 = {val:false};
gdjs.UnlockedCode.condition1IsTrue_0 = {val:false};


gdjs.UnlockedCode.mapOfGDgdjs_46UnlockedCode_46GDRestartObjects1Objects = Hashtable.newFrom({"Restart": gdjs.UnlockedCode.GDRestartObjects1});gdjs.UnlockedCode.mapOfGDgdjs_46UnlockedCode_46GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.UnlockedCode.GDExitObjects1});gdjs.UnlockedCode.mapOfGDgdjs_46UnlockedCode_46GDRestartObjects1Objects = Hashtable.newFrom({"Restart": gdjs.UnlockedCode.GDRestartObjects1});gdjs.UnlockedCode.eventsList0 = function(runtimeScene) {

{


gdjs.UnlockedCode.condition0IsTrue_0.val = false;
{
gdjs.UnlockedCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.UnlockedCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "StartGame", false);
}}

}


};gdjs.UnlockedCode.mapOfGDgdjs_46UnlockedCode_46GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.UnlockedCode.GDExitObjects1});gdjs.UnlockedCode.eventsList1 = function(runtimeScene) {

{


gdjs.UnlockedCode.condition0IsTrue_0.val = false;
{
gdjs.UnlockedCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.UnlockedCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.UnlockedCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.UnlockedCode.GDRestartObjects1);

gdjs.UnlockedCode.condition0IsTrue_0.val = false;
{
gdjs.UnlockedCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.UnlockedCode.mapOfGDgdjs_46UnlockedCode_46GDRestartObjects1Objects, runtimeScene, true, true);
}if (gdjs.UnlockedCode.condition0IsTrue_0.val) {
/* Reuse gdjs.UnlockedCode.GDRestartObjects1 */
{for(var i = 0, len = gdjs.UnlockedCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.UnlockedCode.GDRestartObjects1[i].setColor("155;155;155");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.UnlockedCode.GDExitObjects1);

gdjs.UnlockedCode.condition0IsTrue_0.val = false;
{
gdjs.UnlockedCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.UnlockedCode.mapOfGDgdjs_46UnlockedCode_46GDExitObjects1Objects, runtimeScene, true, true);
}if (gdjs.UnlockedCode.condition0IsTrue_0.val) {
/* Reuse gdjs.UnlockedCode.GDExitObjects1 */
{for(var i = 0, len = gdjs.UnlockedCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.UnlockedCode.GDExitObjects1[i].setColor("155;155;155");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.UnlockedCode.GDRestartObjects1);

gdjs.UnlockedCode.condition0IsTrue_0.val = false;
{
gdjs.UnlockedCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.UnlockedCode.mapOfGDgdjs_46UnlockedCode_46GDRestartObjects1Objects, runtimeScene, true, false);
}if (gdjs.UnlockedCode.condition0IsTrue_0.val) {
/* Reuse gdjs.UnlockedCode.GDRestartObjects1 */
{for(var i = 0, len = gdjs.UnlockedCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.UnlockedCode.GDRestartObjects1[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.UnlockedCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.UnlockedCode.GDExitObjects1);

gdjs.UnlockedCode.condition0IsTrue_0.val = false;
{
gdjs.UnlockedCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.UnlockedCode.mapOfGDgdjs_46UnlockedCode_46GDExitObjects1Objects, runtimeScene, true, false);
}if (gdjs.UnlockedCode.condition0IsTrue_0.val) {
/* Reuse gdjs.UnlockedCode.GDExitObjects1 */
{for(var i = 0, len = gdjs.UnlockedCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.UnlockedCode.GDExitObjects1[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.UnlockedCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.UnlockedCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.UnlockedCode.GDCreditsObjects1.length = 0;
gdjs.UnlockedCode.GDCreditsObjects2.length = 0;
gdjs.UnlockedCode.GDRestartObjects1.length = 0;
gdjs.UnlockedCode.GDRestartObjects2.length = 0;
gdjs.UnlockedCode.GDExitObjects1.length = 0;
gdjs.UnlockedCode.GDExitObjects2.length = 0;

gdjs.UnlockedCode.eventsList2(runtimeScene);
return;

}

gdjs['UnlockedCode'] = gdjs.UnlockedCode;
