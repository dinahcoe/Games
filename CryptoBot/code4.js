gdjs.SafeSuccessCode = {};
gdjs.SafeSuccessCode.GDCONFIRMObjects1= [];
gdjs.SafeSuccessCode.GDCONFIRMObjects2= [];
gdjs.SafeSuccessCode.GDCONFIRMObjects3= [];
gdjs.SafeSuccessCode.GDDialogueBoxObjects1= [];
gdjs.SafeSuccessCode.GDDialogueBoxObjects2= [];
gdjs.SafeSuccessCode.GDDialogueBoxObjects3= [];
gdjs.SafeSuccessCode.GDdialogueObjects1= [];
gdjs.SafeSuccessCode.GDdialogueObjects2= [];
gdjs.SafeSuccessCode.GDdialogueObjects3= [];
gdjs.SafeSuccessCode.GDBackgroundObjects1= [];
gdjs.SafeSuccessCode.GDBackgroundObjects2= [];
gdjs.SafeSuccessCode.GDBackgroundObjects3= [];
gdjs.SafeSuccessCode.GDTimerMinutesObjects1= [];
gdjs.SafeSuccessCode.GDTimerMinutesObjects2= [];
gdjs.SafeSuccessCode.GDTimerMinutesObjects3= [];
gdjs.SafeSuccessCode.GDTimerSecondsObjects1= [];
gdjs.SafeSuccessCode.GDTimerSecondsObjects2= [];
gdjs.SafeSuccessCode.GDTimerSecondsObjects3= [];

gdjs.SafeSuccessCode.conditionTrue_0 = {val:false};
gdjs.SafeSuccessCode.condition0IsTrue_0 = {val:false};
gdjs.SafeSuccessCode.condition1IsTrue_0 = {val:false};
gdjs.SafeSuccessCode.condition2IsTrue_0 = {val:false};


gdjs.SafeSuccessCode.mapOfGDgdjs_46SafeSuccessCode_46GDCONFIRMObjects1Objects = Hashtable.newFrom({"CONFIRM": gdjs.SafeSuccessCode.GDCONFIRMObjects1});gdjs.SafeSuccessCode.eventsList0 = function(runtimeScene) {

{


gdjs.SafeSuccessCode.condition0IsTrue_0.val = false;
{
gdjs.SafeSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.SafeSuccessCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.SafeSuccessCode.mapOfGDgdjs_46SafeSuccessCode_46GDCONFIRMObjects1Objects = Hashtable.newFrom({"CONFIRM": gdjs.SafeSuccessCode.GDCONFIRMObjects1});gdjs.SafeSuccessCode.eventsList1 = function(runtimeScene) {

{


gdjs.SafeSuccessCode.condition0IsTrue_0.val = false;
gdjs.SafeSuccessCode.condition1IsTrue_0.val = false;
{
gdjs.SafeSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) < 1800;
}if ( gdjs.SafeSuccessCode.condition0IsTrue_0.val ) {
{
gdjs.SafeSuccessCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > 540;
}}
if (gdjs.SafeSuccessCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimerMinutes"), gdjs.SafeSuccessCode.GDTimerMinutesObjects2);
{for(var i = 0, len = gdjs.SafeSuccessCode.GDTimerMinutesObjects2.length ;i < len;++i) {
    gdjs.SafeSuccessCode.GDTimerMinutesObjects2[i].setString(gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) / 60)) + ":");
}
}}

}


{


gdjs.SafeSuccessCode.condition0IsTrue_0.val = false;
{
gdjs.SafeSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) < 600;
}if (gdjs.SafeSuccessCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimerMinutes"), gdjs.SafeSuccessCode.GDTimerMinutesObjects2);
{for(var i = 0, len = gdjs.SafeSuccessCode.GDTimerMinutesObjects2.length ;i < len;++i) {
    gdjs.SafeSuccessCode.GDTimerMinutesObjects2[i].setString("0" + gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) / 60)) + ":");
}
}}

}


{


gdjs.SafeSuccessCode.condition0IsTrue_0.val = false;
{
gdjs.SafeSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) < 1800;
}if (gdjs.SafeSuccessCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{


gdjs.SafeSuccessCode.condition0IsTrue_0.val = false;
gdjs.SafeSuccessCode.condition1IsTrue_0.val = false;
{
gdjs.SafeSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) < 60;
}if ( gdjs.SafeSuccessCode.condition0IsTrue_0.val ) {
{
gdjs.SafeSuccessCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) > 9;
}}
if (gdjs.SafeSuccessCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimerSeconds"), gdjs.SafeSuccessCode.GDTimerSecondsObjects2);
{for(var i = 0, len = gdjs.SafeSuccessCode.GDTimerSecondsObjects2.length ;i < len;++i) {
    gdjs.SafeSuccessCode.GDTimerSecondsObjects2[i].setString(gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)))));
}
}}

}


{


gdjs.SafeSuccessCode.condition0IsTrue_0.val = false;
{
gdjs.SafeSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) < 10;
}if (gdjs.SafeSuccessCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimerSeconds"), gdjs.SafeSuccessCode.GDTimerSecondsObjects2);
{for(var i = 0, len = gdjs.SafeSuccessCode.GDTimerSecondsObjects2.length ;i < len;++i) {
    gdjs.SafeSuccessCode.GDTimerSecondsObjects2[i].setString("0" + gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)))));
}
}}

}


{


gdjs.SafeSuccessCode.condition0IsTrue_0.val = false;
{
gdjs.SafeSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if (gdjs.SafeSuccessCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(59);
}}

}


{


gdjs.SafeSuccessCode.condition0IsTrue_0.val = false;
{
gdjs.SafeSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) <= 0;
}if (gdjs.SafeSuccessCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


};gdjs.SafeSuccessCode.eventsList2 = function(runtimeScene) {

{


{
{runtimeScene.getGame().getVariables().getFromIndex(3).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
{ //Subevents
gdjs.SafeSuccessCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.SafeSuccessCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CONFIRM"), gdjs.SafeSuccessCode.GDCONFIRMObjects1);

gdjs.SafeSuccessCode.condition0IsTrue_0.val = false;
{
gdjs.SafeSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SafeSuccessCode.mapOfGDgdjs_46SafeSuccessCode_46GDCONFIRMObjects1Objects, runtimeScene, true, false);
}if (gdjs.SafeSuccessCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SafeSuccessCode.GDCONFIRMObjects1 */
{for(var i = 0, len = gdjs.SafeSuccessCode.GDCONFIRMObjects1.length ;i < len;++i) {
    gdjs.SafeSuccessCode.GDCONFIRMObjects1[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.SafeSuccessCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CONFIRM"), gdjs.SafeSuccessCode.GDCONFIRMObjects1);

gdjs.SafeSuccessCode.condition0IsTrue_0.val = false;
{
gdjs.SafeSuccessCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SafeSuccessCode.mapOfGDgdjs_46SafeSuccessCode_46GDCONFIRMObjects1Objects, runtimeScene, true, true);
}if (gdjs.SafeSuccessCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SafeSuccessCode.GDCONFIRMObjects1 */
{for(var i = 0, len = gdjs.SafeSuccessCode.GDCONFIRMObjects1.length ;i < len;++i) {
    gdjs.SafeSuccessCode.GDCONFIRMObjects1[i].setColor("155;155;155");
}
}}

}


{


gdjs.SafeSuccessCode.eventsList2(runtimeScene);
}


};

gdjs.SafeSuccessCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SafeSuccessCode.GDCONFIRMObjects1.length = 0;
gdjs.SafeSuccessCode.GDCONFIRMObjects2.length = 0;
gdjs.SafeSuccessCode.GDCONFIRMObjects3.length = 0;
gdjs.SafeSuccessCode.GDDialogueBoxObjects1.length = 0;
gdjs.SafeSuccessCode.GDDialogueBoxObjects2.length = 0;
gdjs.SafeSuccessCode.GDDialogueBoxObjects3.length = 0;
gdjs.SafeSuccessCode.GDdialogueObjects1.length = 0;
gdjs.SafeSuccessCode.GDdialogueObjects2.length = 0;
gdjs.SafeSuccessCode.GDdialogueObjects3.length = 0;
gdjs.SafeSuccessCode.GDBackgroundObjects1.length = 0;
gdjs.SafeSuccessCode.GDBackgroundObjects2.length = 0;
gdjs.SafeSuccessCode.GDBackgroundObjects3.length = 0;
gdjs.SafeSuccessCode.GDTimerMinutesObjects1.length = 0;
gdjs.SafeSuccessCode.GDTimerMinutesObjects2.length = 0;
gdjs.SafeSuccessCode.GDTimerMinutesObjects3.length = 0;
gdjs.SafeSuccessCode.GDTimerSecondsObjects1.length = 0;
gdjs.SafeSuccessCode.GDTimerSecondsObjects2.length = 0;
gdjs.SafeSuccessCode.GDTimerSecondsObjects3.length = 0;

gdjs.SafeSuccessCode.eventsList3(runtimeScene);
return;

}

gdjs['SafeSuccessCode'] = gdjs.SafeSuccessCode;
