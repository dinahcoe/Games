gdjs.GameOverCode = {};
gdjs.GameOverCode.GDCreditsObjects1= [];
gdjs.GameOverCode.GDCreditsObjects2= [];
gdjs.GameOverCode.GDRestartObjects1= [];
gdjs.GameOverCode.GDRestartObjects2= [];
gdjs.GameOverCode.GDExitObjects1= [];
gdjs.GameOverCode.GDExitObjects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};


gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDRestartObjects1Objects = Hashtable.newFrom({"Restart": gdjs.GameOverCode.GDRestartObjects1});gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.GameOverCode.GDExitObjects1});gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDRestartObjects1Objects = Hashtable.newFrom({"Restart": gdjs.GameOverCode.GDRestartObjects1});gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "StartGame", false);
}}

}


};gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.GameOverCode.GDExitObjects1});gdjs.GameOverCode.eventsList1 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.GameOverCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.GameOverCode.GDRestartObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDRestartObjects1Objects, runtimeScene, true, true);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDRestartObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRestartObjects1[i].setColor("155;155;155");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.GameOverCode.GDExitObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDExitObjects1Objects, runtimeScene, true, true);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDExitObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDExitObjects1[i].setColor("155;155;155");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.GameOverCode.GDRestartObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDRestartObjects1Objects, runtimeScene, true, false);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDRestartObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRestartObjects1[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.GameOverCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.GameOverCode.GDExitObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDExitObjects1Objects, runtimeScene, true, false);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDExitObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDExitObjects1[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.GameOverCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDCreditsObjects1.length = 0;
gdjs.GameOverCode.GDCreditsObjects2.length = 0;
gdjs.GameOverCode.GDRestartObjects1.length = 0;
gdjs.GameOverCode.GDRestartObjects2.length = 0;
gdjs.GameOverCode.GDExitObjects1.length = 0;
gdjs.GameOverCode.GDExitObjects2.length = 0;

gdjs.GameOverCode.eventsList2(runtimeScene);
return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
