gdjs.DeskSuccessCode = {};
gdjs.DeskSuccessCode.GDCONFIRMObjects1= [];
gdjs.DeskSuccessCode.GDCONFIRMObjects2= [];
gdjs.DeskSuccessCode.GDCONFIRMObjects3= [];
gdjs.DeskSuccessCode.GDDialogueBoxObjects1= [];
gdjs.DeskSuccessCode.GDDialogueBoxObjects2= [];
gdjs.DeskSuccessCode.GDDialogueBoxObjects3= [];
gdjs.DeskSuccessCode.GDdialogueObjects1= [];
gdjs.DeskSuccessCode.GDdialogueObjects2= [];
gdjs.DeskSuccessCode.GDdialogueObjects3= [];
gdjs.DeskSuccessCode.GDBackgroundObjects1= [];
gdjs.DeskSuccessCode.GDBackgroundObjects2= [];
gdjs.DeskSuccessCode.GDBackgroundObjects3= [];
gdjs.DeskSuccessCode.GDTimerSecondsObjects1= [];
gdjs.DeskSuccessCode.GDTimerSecondsObjects2= [];
gdjs.DeskSuccessCode.GDTimerSecondsObjects3= [];
gdjs.DeskSuccessCode.GDTimerMinutesObjects1= [];
gdjs.DeskSuccessCode.GDTimerMinutesObjects2= [];
gdjs.DeskSuccessCode.GDTimerMinutesObjects3= [];

gdjs.DeskSuccessCode.conditionTrue_0 = {val:false};
gdjs.DeskSuccessCode.condition0IsTrue_0 = {val:false};
gdjs.DeskSuccessCode.condition1IsTrue_0 = {val:false};
gdjs.DeskSuccessCode.condition2IsTrue_0 = {val:false};


gdjs.DeskSuccessCode.mapOfGDgdjs_46DeskSuccessCode_46GDCONFIRMObjects1Objects = Hashtable.newFrom({"CONFIRM": gdjs.DeskSuccessCode.GDCONFIRMObjects1});gdjs.DeskSuccessCode.eventsList0 = function(runtimeScene) {

{


gdjs.DeskSuccessCode.condition0IsTrue_0.val = false;
{
gdjs.DeskSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.DeskSuccessCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.DeskSuccessCode.mapOfGDgdjs_46DeskSuccessCode_46GDCONFIRMObjects1Objects = Hashtable.newFrom({"CONFIRM": gdjs.DeskSuccessCode.GDCONFIRMObjects1});gdjs.DeskSuccessCode.eventsList1 = function(runtimeScene) {

{


gdjs.DeskSuccessCode.condition0IsTrue_0.val = false;
gdjs.DeskSuccessCode.condition1IsTrue_0.val = false;
{
gdjs.DeskSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) < 1800;
}if ( gdjs.DeskSuccessCode.condition0IsTrue_0.val ) {
{
gdjs.DeskSuccessCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > 540;
}}
if (gdjs.DeskSuccessCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimerMinutes"), gdjs.DeskSuccessCode.GDTimerMinutesObjects2);
{for(var i = 0, len = gdjs.DeskSuccessCode.GDTimerMinutesObjects2.length ;i < len;++i) {
    gdjs.DeskSuccessCode.GDTimerMinutesObjects2[i].setString(gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) / 60)) + ":");
}
}}

}


{


gdjs.DeskSuccessCode.condition0IsTrue_0.val = false;
{
gdjs.DeskSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) < 600;
}if (gdjs.DeskSuccessCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimerMinutes"), gdjs.DeskSuccessCode.GDTimerMinutesObjects2);
{for(var i = 0, len = gdjs.DeskSuccessCode.GDTimerMinutesObjects2.length ;i < len;++i) {
    gdjs.DeskSuccessCode.GDTimerMinutesObjects2[i].setString("0" + gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) / 60)) + ":");
}
}}

}


{


gdjs.DeskSuccessCode.condition0IsTrue_0.val = false;
{
gdjs.DeskSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) < 1800;
}if (gdjs.DeskSuccessCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{


gdjs.DeskSuccessCode.condition0IsTrue_0.val = false;
gdjs.DeskSuccessCode.condition1IsTrue_0.val = false;
{
gdjs.DeskSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) < 60;
}if ( gdjs.DeskSuccessCode.condition0IsTrue_0.val ) {
{
gdjs.DeskSuccessCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) > 9;
}}
if (gdjs.DeskSuccessCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimerSeconds"), gdjs.DeskSuccessCode.GDTimerSecondsObjects2);
{for(var i = 0, len = gdjs.DeskSuccessCode.GDTimerSecondsObjects2.length ;i < len;++i) {
    gdjs.DeskSuccessCode.GDTimerSecondsObjects2[i].setString(gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)))));
}
}}

}


{


gdjs.DeskSuccessCode.condition0IsTrue_0.val = false;
{
gdjs.DeskSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) < 10;
}if (gdjs.DeskSuccessCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimerSeconds"), gdjs.DeskSuccessCode.GDTimerSecondsObjects2);
{for(var i = 0, len = gdjs.DeskSuccessCode.GDTimerSecondsObjects2.length ;i < len;++i) {
    gdjs.DeskSuccessCode.GDTimerSecondsObjects2[i].setString("0" + gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)))));
}
}}

}


{


gdjs.DeskSuccessCode.condition0IsTrue_0.val = false;
{
gdjs.DeskSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if (gdjs.DeskSuccessCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(59);
}}

}


{


gdjs.DeskSuccessCode.condition0IsTrue_0.val = false;
{
gdjs.DeskSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) <= 0;
}if (gdjs.DeskSuccessCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


};gdjs.DeskSuccessCode.eventsList2 = function(runtimeScene) {

{


{
{runtimeScene.getGame().getVariables().getFromIndex(3).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
{ //Subevents
gdjs.DeskSuccessCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.DeskSuccessCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CONFIRM"), gdjs.DeskSuccessCode.GDCONFIRMObjects1);

gdjs.DeskSuccessCode.condition0IsTrue_0.val = false;
{
gdjs.DeskSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DeskSuccessCode.mapOfGDgdjs_46DeskSuccessCode_46GDCONFIRMObjects1Objects, runtimeScene, true, false);
}if (gdjs.DeskSuccessCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DeskSuccessCode.GDCONFIRMObjects1 */
{for(var i = 0, len = gdjs.DeskSuccessCode.GDCONFIRMObjects1.length ;i < len;++i) {
    gdjs.DeskSuccessCode.GDCONFIRMObjects1[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.DeskSuccessCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CONFIRM"), gdjs.DeskSuccessCode.GDCONFIRMObjects1);

gdjs.DeskSuccessCode.condition0IsTrue_0.val = false;
{
gdjs.DeskSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DeskSuccessCode.mapOfGDgdjs_46DeskSuccessCode_46GDCONFIRMObjects1Objects, runtimeScene, true, true);
}if (gdjs.DeskSuccessCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DeskSuccessCode.GDCONFIRMObjects1 */
{for(var i = 0, len = gdjs.DeskSuccessCode.GDCONFIRMObjects1.length ;i < len;++i) {
    gdjs.DeskSuccessCode.GDCONFIRMObjects1[i].setColor("155;155;155");
}
}}

}


{


gdjs.DeskSuccessCode.eventsList2(runtimeScene);
}


};

gdjs.DeskSuccessCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DeskSuccessCode.GDCONFIRMObjects1.length = 0;
gdjs.DeskSuccessCode.GDCONFIRMObjects2.length = 0;
gdjs.DeskSuccessCode.GDCONFIRMObjects3.length = 0;
gdjs.DeskSuccessCode.GDDialogueBoxObjects1.length = 0;
gdjs.DeskSuccessCode.GDDialogueBoxObjects2.length = 0;
gdjs.DeskSuccessCode.GDDialogueBoxObjects3.length = 0;
gdjs.DeskSuccessCode.GDdialogueObjects1.length = 0;
gdjs.DeskSuccessCode.GDdialogueObjects2.length = 0;
gdjs.DeskSuccessCode.GDdialogueObjects3.length = 0;
gdjs.DeskSuccessCode.GDBackgroundObjects1.length = 0;
gdjs.DeskSuccessCode.GDBackgroundObjects2.length = 0;
gdjs.DeskSuccessCode.GDBackgroundObjects3.length = 0;
gdjs.DeskSuccessCode.GDTimerSecondsObjects1.length = 0;
gdjs.DeskSuccessCode.GDTimerSecondsObjects2.length = 0;
gdjs.DeskSuccessCode.GDTimerSecondsObjects3.length = 0;
gdjs.DeskSuccessCode.GDTimerMinutesObjects1.length = 0;
gdjs.DeskSuccessCode.GDTimerMinutesObjects2.length = 0;
gdjs.DeskSuccessCode.GDTimerMinutesObjects3.length = 0;

gdjs.DeskSuccessCode.eventsList3(runtimeScene);
return;

}

gdjs['DeskSuccessCode'] = gdjs.DeskSuccessCode;
