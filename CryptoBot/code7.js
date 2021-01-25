gdjs.TrashSuccessCode = {};
gdjs.TrashSuccessCode.GDDialogueBoxObjects1= [];
gdjs.TrashSuccessCode.GDDialogueBoxObjects2= [];
gdjs.TrashSuccessCode.GDDialogueBoxObjects3= [];
gdjs.TrashSuccessCode.GDdialogueObjects1= [];
gdjs.TrashSuccessCode.GDdialogueObjects2= [];
gdjs.TrashSuccessCode.GDdialogueObjects3= [];
gdjs.TrashSuccessCode.GDCONFIRMObjects1= [];
gdjs.TrashSuccessCode.GDCONFIRMObjects2= [];
gdjs.TrashSuccessCode.GDCONFIRMObjects3= [];
gdjs.TrashSuccessCode.GDBackgroundObjects1= [];
gdjs.TrashSuccessCode.GDBackgroundObjects2= [];
gdjs.TrashSuccessCode.GDBackgroundObjects3= [];
gdjs.TrashSuccessCode.GDTimerMinutesObjects1= [];
gdjs.TrashSuccessCode.GDTimerMinutesObjects2= [];
gdjs.TrashSuccessCode.GDTimerMinutesObjects3= [];
gdjs.TrashSuccessCode.GDTimerSecondsObjects1= [];
gdjs.TrashSuccessCode.GDTimerSecondsObjects2= [];
gdjs.TrashSuccessCode.GDTimerSecondsObjects3= [];

gdjs.TrashSuccessCode.conditionTrue_0 = {val:false};
gdjs.TrashSuccessCode.condition0IsTrue_0 = {val:false};
gdjs.TrashSuccessCode.condition1IsTrue_0 = {val:false};
gdjs.TrashSuccessCode.condition2IsTrue_0 = {val:false};


gdjs.TrashSuccessCode.mapOfGDgdjs_46TrashSuccessCode_46GDCONFIRMObjects1Objects = Hashtable.newFrom({"CONFIRM": gdjs.TrashSuccessCode.GDCONFIRMObjects1});gdjs.TrashSuccessCode.eventsList0 = function(runtimeScene) {

{


gdjs.TrashSuccessCode.condition0IsTrue_0.val = false;
{
gdjs.TrashSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.TrashSuccessCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.TrashSuccessCode.mapOfGDgdjs_46TrashSuccessCode_46GDCONFIRMObjects1Objects = Hashtable.newFrom({"CONFIRM": gdjs.TrashSuccessCode.GDCONFIRMObjects1});gdjs.TrashSuccessCode.eventsList1 = function(runtimeScene) {

{


gdjs.TrashSuccessCode.condition0IsTrue_0.val = false;
gdjs.TrashSuccessCode.condition1IsTrue_0.val = false;
{
gdjs.TrashSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) < 1800;
}if ( gdjs.TrashSuccessCode.condition0IsTrue_0.val ) {
{
gdjs.TrashSuccessCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > 540;
}}
if (gdjs.TrashSuccessCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimerMinutes"), gdjs.TrashSuccessCode.GDTimerMinutesObjects2);
{for(var i = 0, len = gdjs.TrashSuccessCode.GDTimerMinutesObjects2.length ;i < len;++i) {
    gdjs.TrashSuccessCode.GDTimerMinutesObjects2[i].setString(gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) / 60)) + ":");
}
}}

}


{


gdjs.TrashSuccessCode.condition0IsTrue_0.val = false;
{
gdjs.TrashSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) < 600;
}if (gdjs.TrashSuccessCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimerMinutes"), gdjs.TrashSuccessCode.GDTimerMinutesObjects2);
{for(var i = 0, len = gdjs.TrashSuccessCode.GDTimerMinutesObjects2.length ;i < len;++i) {
    gdjs.TrashSuccessCode.GDTimerMinutesObjects2[i].setString("0" + gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) / 60)) + ":");
}
}}

}


{


gdjs.TrashSuccessCode.condition0IsTrue_0.val = false;
{
gdjs.TrashSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) < 1800;
}if (gdjs.TrashSuccessCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{


gdjs.TrashSuccessCode.condition0IsTrue_0.val = false;
gdjs.TrashSuccessCode.condition1IsTrue_0.val = false;
{
gdjs.TrashSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) < 60;
}if ( gdjs.TrashSuccessCode.condition0IsTrue_0.val ) {
{
gdjs.TrashSuccessCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) > 9;
}}
if (gdjs.TrashSuccessCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimerSeconds"), gdjs.TrashSuccessCode.GDTimerSecondsObjects2);
{for(var i = 0, len = gdjs.TrashSuccessCode.GDTimerSecondsObjects2.length ;i < len;++i) {
    gdjs.TrashSuccessCode.GDTimerSecondsObjects2[i].setString(gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)))));
}
}}

}


{


gdjs.TrashSuccessCode.condition0IsTrue_0.val = false;
{
gdjs.TrashSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) < 10;
}if (gdjs.TrashSuccessCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimerSeconds"), gdjs.TrashSuccessCode.GDTimerSecondsObjects2);
{for(var i = 0, len = gdjs.TrashSuccessCode.GDTimerSecondsObjects2.length ;i < len;++i) {
    gdjs.TrashSuccessCode.GDTimerSecondsObjects2[i].setString("0" + gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)))));
}
}}

}


{


gdjs.TrashSuccessCode.condition0IsTrue_0.val = false;
{
gdjs.TrashSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if (gdjs.TrashSuccessCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(59);
}}

}


{


gdjs.TrashSuccessCode.condition0IsTrue_0.val = false;
{
gdjs.TrashSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) <= 0;
}if (gdjs.TrashSuccessCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


};gdjs.TrashSuccessCode.eventsList2 = function(runtimeScene) {

{


{
{runtimeScene.getGame().getVariables().getFromIndex(3).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
{ //Subevents
gdjs.TrashSuccessCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.TrashSuccessCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CONFIRM"), gdjs.TrashSuccessCode.GDCONFIRMObjects1);

gdjs.TrashSuccessCode.condition0IsTrue_0.val = false;
{
gdjs.TrashSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TrashSuccessCode.mapOfGDgdjs_46TrashSuccessCode_46GDCONFIRMObjects1Objects, runtimeScene, true, false);
}if (gdjs.TrashSuccessCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TrashSuccessCode.GDCONFIRMObjects1 */
{for(var i = 0, len = gdjs.TrashSuccessCode.GDCONFIRMObjects1.length ;i < len;++i) {
    gdjs.TrashSuccessCode.GDCONFIRMObjects1[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.TrashSuccessCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CONFIRM"), gdjs.TrashSuccessCode.GDCONFIRMObjects1);

gdjs.TrashSuccessCode.condition0IsTrue_0.val = false;
{
gdjs.TrashSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TrashSuccessCode.mapOfGDgdjs_46TrashSuccessCode_46GDCONFIRMObjects1Objects, runtimeScene, true, true);
}if (gdjs.TrashSuccessCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TrashSuccessCode.GDCONFIRMObjects1 */
{for(var i = 0, len = gdjs.TrashSuccessCode.GDCONFIRMObjects1.length ;i < len;++i) {
    gdjs.TrashSuccessCode.GDCONFIRMObjects1[i].setColor("155;155;155");
}
}}

}


{


gdjs.TrashSuccessCode.eventsList2(runtimeScene);
}


};

gdjs.TrashSuccessCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TrashSuccessCode.GDDialogueBoxObjects1.length = 0;
gdjs.TrashSuccessCode.GDDialogueBoxObjects2.length = 0;
gdjs.TrashSuccessCode.GDDialogueBoxObjects3.length = 0;
gdjs.TrashSuccessCode.GDdialogueObjects1.length = 0;
gdjs.TrashSuccessCode.GDdialogueObjects2.length = 0;
gdjs.TrashSuccessCode.GDdialogueObjects3.length = 0;
gdjs.TrashSuccessCode.GDCONFIRMObjects1.length = 0;
gdjs.TrashSuccessCode.GDCONFIRMObjects2.length = 0;
gdjs.TrashSuccessCode.GDCONFIRMObjects3.length = 0;
gdjs.TrashSuccessCode.GDBackgroundObjects1.length = 0;
gdjs.TrashSuccessCode.GDBackgroundObjects2.length = 0;
gdjs.TrashSuccessCode.GDBackgroundObjects3.length = 0;
gdjs.TrashSuccessCode.GDTimerMinutesObjects1.length = 0;
gdjs.TrashSuccessCode.GDTimerMinutesObjects2.length = 0;
gdjs.TrashSuccessCode.GDTimerMinutesObjects3.length = 0;
gdjs.TrashSuccessCode.GDTimerSecondsObjects1.length = 0;
gdjs.TrashSuccessCode.GDTimerSecondsObjects2.length = 0;
gdjs.TrashSuccessCode.GDTimerSecondsObjects3.length = 0;

gdjs.TrashSuccessCode.eventsList3(runtimeScene);
return;

}

gdjs['TrashSuccessCode'] = gdjs.TrashSuccessCode;
