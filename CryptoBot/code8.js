gdjs.LockPromptCode = {};
gdjs.LockPromptCode.GDDialogueBoxObjects1= [];
gdjs.LockPromptCode.GDDialogueBoxObjects2= [];
gdjs.LockPromptCode.GDDialogueBoxObjects3= [];
gdjs.LockPromptCode.GDCONFIRMObjects1= [];
gdjs.LockPromptCode.GDCONFIRMObjects2= [];
gdjs.LockPromptCode.GDCONFIRMObjects3= [];
gdjs.LockPromptCode.GDcluesDialogueObjects1= [];
gdjs.LockPromptCode.GDcluesDialogueObjects2= [];
gdjs.LockPromptCode.GDcluesDialogueObjects3= [];
gdjs.LockPromptCode.GDdialogueObjects1= [];
gdjs.LockPromptCode.GDdialogueObjects2= [];
gdjs.LockPromptCode.GDdialogueObjects3= [];
gdjs.LockPromptCode.GDSafeClueObjects1= [];
gdjs.LockPromptCode.GDSafeClueObjects2= [];
gdjs.LockPromptCode.GDSafeClueObjects3= [];
gdjs.LockPromptCode.GDTrashClueObjects1= [];
gdjs.LockPromptCode.GDTrashClueObjects2= [];
gdjs.LockPromptCode.GDTrashClueObjects3= [];
gdjs.LockPromptCode.GDDeskClueObjects1= [];
gdjs.LockPromptCode.GDDeskClueObjects2= [];
gdjs.LockPromptCode.GDDeskClueObjects3= [];
gdjs.LockPromptCode.GDBackgroundObjects1= [];
gdjs.LockPromptCode.GDBackgroundObjects2= [];
gdjs.LockPromptCode.GDBackgroundObjects3= [];
gdjs.LockPromptCode.GDButton1Objects1= [];
gdjs.LockPromptCode.GDButton1Objects2= [];
gdjs.LockPromptCode.GDButton1Objects3= [];
gdjs.LockPromptCode.GDButton2Objects1= [];
gdjs.LockPromptCode.GDButton2Objects2= [];
gdjs.LockPromptCode.GDButton2Objects3= [];
gdjs.LockPromptCode.GDButton3Objects1= [];
gdjs.LockPromptCode.GDButton3Objects2= [];
gdjs.LockPromptCode.GDButton3Objects3= [];
gdjs.LockPromptCode.GDButton4Objects1= [];
gdjs.LockPromptCode.GDButton4Objects2= [];
gdjs.LockPromptCode.GDButton4Objects3= [];
gdjs.LockPromptCode.GDButton5Objects1= [];
gdjs.LockPromptCode.GDButton5Objects2= [];
gdjs.LockPromptCode.GDButton5Objects3= [];
gdjs.LockPromptCode.GDButton6Objects1= [];
gdjs.LockPromptCode.GDButton6Objects2= [];
gdjs.LockPromptCode.GDButton6Objects3= [];
gdjs.LockPromptCode.GDButton7Objects1= [];
gdjs.LockPromptCode.GDButton7Objects2= [];
gdjs.LockPromptCode.GDButton7Objects3= [];
gdjs.LockPromptCode.GDButton8Objects1= [];
gdjs.LockPromptCode.GDButton8Objects2= [];
gdjs.LockPromptCode.GDButton8Objects3= [];
gdjs.LockPromptCode.GDButton9Objects1= [];
gdjs.LockPromptCode.GDButton9Objects2= [];
gdjs.LockPromptCode.GDButton9Objects3= [];
gdjs.LockPromptCode.GDButtonMObjects1= [];
gdjs.LockPromptCode.GDButtonMObjects2= [];
gdjs.LockPromptCode.GDButtonMObjects3= [];
gdjs.LockPromptCode.GDButtonCObjects1= [];
gdjs.LockPromptCode.GDButtonCObjects2= [];
gdjs.LockPromptCode.GDButtonCObjects3= [];
gdjs.LockPromptCode.GDButtonYObjects1= [];
gdjs.LockPromptCode.GDButtonYObjects2= [];
gdjs.LockPromptCode.GDButtonYObjects3= [];
gdjs.LockPromptCode.GDsuccessDialogueObjects1= [];
gdjs.LockPromptCode.GDsuccessDialogueObjects2= [];
gdjs.LockPromptCode.GDsuccessDialogueObjects3= [];
gdjs.LockPromptCode.GDTimerMinutesObjects1= [];
gdjs.LockPromptCode.GDTimerMinutesObjects2= [];
gdjs.LockPromptCode.GDTimerMinutesObjects3= [];
gdjs.LockPromptCode.GDTimerSecondsObjects1= [];
gdjs.LockPromptCode.GDTimerSecondsObjects2= [];
gdjs.LockPromptCode.GDTimerSecondsObjects3= [];

gdjs.LockPromptCode.conditionTrue_0 = {val:false};
gdjs.LockPromptCode.condition0IsTrue_0 = {val:false};
gdjs.LockPromptCode.condition1IsTrue_0 = {val:false};
gdjs.LockPromptCode.condition2IsTrue_0 = {val:false};
gdjs.LockPromptCode.condition3IsTrue_0 = {val:false};
gdjs.LockPromptCode.condition4IsTrue_0 = {val:false};
gdjs.LockPromptCode.condition5IsTrue_0 = {val:false};
gdjs.LockPromptCode.condition6IsTrue_0 = {val:false};
gdjs.LockPromptCode.condition7IsTrue_0 = {val:false};
gdjs.LockPromptCode.condition8IsTrue_0 = {val:false};
gdjs.LockPromptCode.condition9IsTrue_0 = {val:false};
gdjs.LockPromptCode.condition10IsTrue_0 = {val:false};
gdjs.LockPromptCode.conditionTrue_1 = {val:false};
gdjs.LockPromptCode.condition0IsTrue_1 = {val:false};
gdjs.LockPromptCode.condition1IsTrue_1 = {val:false};
gdjs.LockPromptCode.condition2IsTrue_1 = {val:false};
gdjs.LockPromptCode.condition3IsTrue_1 = {val:false};
gdjs.LockPromptCode.condition4IsTrue_1 = {val:false};
gdjs.LockPromptCode.condition5IsTrue_1 = {val:false};
gdjs.LockPromptCode.condition6IsTrue_1 = {val:false};
gdjs.LockPromptCode.condition7IsTrue_1 = {val:false};
gdjs.LockPromptCode.condition8IsTrue_1 = {val:false};
gdjs.LockPromptCode.condition9IsTrue_1 = {val:false};
gdjs.LockPromptCode.condition10IsTrue_1 = {val:false};


gdjs.LockPromptCode.eventsList0 = function(runtimeScene) {

{


gdjs.LockPromptCode.condition0IsTrue_0.val = false;
gdjs.LockPromptCode.condition1IsTrue_0.val = false;
{
gdjs.LockPromptCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) < 1800;
}if ( gdjs.LockPromptCode.condition0IsTrue_0.val ) {
{
gdjs.LockPromptCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > 540;
}}
if (gdjs.LockPromptCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimerMinutes"), gdjs.LockPromptCode.GDTimerMinutesObjects2);
{for(var i = 0, len = gdjs.LockPromptCode.GDTimerMinutesObjects2.length ;i < len;++i) {
    gdjs.LockPromptCode.GDTimerMinutesObjects2[i].setString(gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) / 60)) + ":");
}
}}

}


{


gdjs.LockPromptCode.condition0IsTrue_0.val = false;
{
gdjs.LockPromptCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) < 600;
}if (gdjs.LockPromptCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimerMinutes"), gdjs.LockPromptCode.GDTimerMinutesObjects2);
{for(var i = 0, len = gdjs.LockPromptCode.GDTimerMinutesObjects2.length ;i < len;++i) {
    gdjs.LockPromptCode.GDTimerMinutesObjects2[i].setString("0" + gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) / 60)) + ":");
}
}}

}


{


gdjs.LockPromptCode.condition0IsTrue_0.val = false;
{
gdjs.LockPromptCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) < 1800;
}if (gdjs.LockPromptCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{


gdjs.LockPromptCode.condition0IsTrue_0.val = false;
gdjs.LockPromptCode.condition1IsTrue_0.val = false;
{
gdjs.LockPromptCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) < 60;
}if ( gdjs.LockPromptCode.condition0IsTrue_0.val ) {
{
gdjs.LockPromptCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) > 9;
}}
if (gdjs.LockPromptCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimerSeconds"), gdjs.LockPromptCode.GDTimerSecondsObjects2);
{for(var i = 0, len = gdjs.LockPromptCode.GDTimerSecondsObjects2.length ;i < len;++i) {
    gdjs.LockPromptCode.GDTimerSecondsObjects2[i].setString(gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)))));
}
}}

}


{


gdjs.LockPromptCode.condition0IsTrue_0.val = false;
{
gdjs.LockPromptCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) < 10;
}if (gdjs.LockPromptCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimerSeconds"), gdjs.LockPromptCode.GDTimerSecondsObjects2);
{for(var i = 0, len = gdjs.LockPromptCode.GDTimerSecondsObjects2.length ;i < len;++i) {
    gdjs.LockPromptCode.GDTimerSecondsObjects2[i].setString("0" + gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)))));
}
}}

}


{


gdjs.LockPromptCode.condition0IsTrue_0.val = false;
{
gdjs.LockPromptCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if (gdjs.LockPromptCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(59);
}}

}


{


gdjs.LockPromptCode.condition0IsTrue_0.val = false;
{
gdjs.LockPromptCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) <= 0;
}if (gdjs.LockPromptCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


};gdjs.LockPromptCode.eventsList1 = function(runtimeScene) {

{


{
{runtimeScene.getGame().getVariables().getFromIndex(3).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
{ //Subevents
gdjs.LockPromptCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDCONFIRMObjects1Objects = Hashtable.newFrom({"CONFIRM": gdjs.LockPromptCode.GDCONFIRMObjects1});gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDCONFIRMObjects1Objects = Hashtable.newFrom({"CONFIRM": gdjs.LockPromptCode.GDCONFIRMObjects1});gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDSafeClueObjects1Objects = Hashtable.newFrom({"SafeClue": gdjs.LockPromptCode.GDSafeClueObjects1});gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDTrashClueObjects1Objects = Hashtable.newFrom({"TrashClue": gdjs.LockPromptCode.GDTrashClueObjects1});gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDDeskClueObjects1Objects = Hashtable.newFrom({"DeskClue": gdjs.LockPromptCode.GDDeskClueObjects1});gdjs.LockPromptCode.eventsList2 = function(runtimeScene) {

{


gdjs.LockPromptCode.condition0IsTrue_0.val = false;
gdjs.LockPromptCode.condition1IsTrue_0.val = false;
{
gdjs.LockPromptCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LockPromptCode.condition0IsTrue_0.val ) {
{
{gdjs.LockPromptCode.conditionTrue_1 = gdjs.LockPromptCode.condition1IsTrue_0;
gdjs.LockPromptCode.condition0IsTrue_1.val = false;
gdjs.LockPromptCode.condition1IsTrue_1.val = false;
gdjs.LockPromptCode.condition2IsTrue_1.val = false;
{
gdjs.LockPromptCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
if( gdjs.LockPromptCode.condition0IsTrue_1.val ) {
    gdjs.LockPromptCode.conditionTrue_1.val = true;
}
}
{
gdjs.LockPromptCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
if( gdjs.LockPromptCode.condition1IsTrue_1.val ) {
    gdjs.LockPromptCode.conditionTrue_1.val = true;
}
}
{
gdjs.LockPromptCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
if( gdjs.LockPromptCode.condition2IsTrue_1.val ) {
    gdjs.LockPromptCode.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.LockPromptCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


gdjs.LockPromptCode.condition0IsTrue_0.val = false;
gdjs.LockPromptCode.condition1IsTrue_0.val = false;
{
gdjs.LockPromptCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LockPromptCode.condition0IsTrue_0.val ) {
{
{gdjs.LockPromptCode.conditionTrue_1 = gdjs.LockPromptCode.condition1IsTrue_0;
gdjs.LockPromptCode.condition0IsTrue_1.val = false;
gdjs.LockPromptCode.condition1IsTrue_1.val = false;
gdjs.LockPromptCode.condition2IsTrue_1.val = false;
{
gdjs.LockPromptCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if ( gdjs.LockPromptCode.condition0IsTrue_1.val ) {
{
gdjs.LockPromptCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if ( gdjs.LockPromptCode.condition1IsTrue_1.val ) {
{
gdjs.LockPromptCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}}
}
gdjs.LockPromptCode.conditionTrue_1.val = true && gdjs.LockPromptCode.condition0IsTrue_1.val && gdjs.LockPromptCode.condition1IsTrue_1.val && gdjs.LockPromptCode.condition2IsTrue_1.val;
}
}}
if (gdjs.LockPromptCode.condition1IsTrue_0.val) {
/* Reuse gdjs.LockPromptCode.GDCONFIRMObjects1 */
gdjs.copyArray(runtimeScene.getObjects("DialogueBox"), gdjs.LockPromptCode.GDDialogueBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("cluesDialogue"), gdjs.LockPromptCode.GDcluesDialogueObjects1);
gdjs.LockPromptCode.GDDeskClueObjects1.length = 0;

gdjs.LockPromptCode.GDSafeClueObjects1.length = 0;

gdjs.LockPromptCode.GDTrashClueObjects1.length = 0;

{for(var i = 0, len = gdjs.LockPromptCode.GDDialogueBoxObjects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDDialogueBoxObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LockPromptCode.GDCONFIRMObjects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDCONFIRMObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LockPromptCode.GDcluesDialogueObjects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDcluesDialogueObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDSafeClueObjects1Objects, 200, 800, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDTrashClueObjects1Objects, 370, 800, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDDeskClueObjects1Objects, 600, 800, "");
}{for(var i = 0, len = gdjs.LockPromptCode.GDSafeClueObjects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDSafeClueObjects1[i].setZOrder(5);
}
}{for(var i = 0, len = gdjs.LockPromptCode.GDTrashClueObjects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDTrashClueObjects1[i].setZOrder(5);
}
}{for(var i = 0, len = gdjs.LockPromptCode.GDDeskClueObjects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDDeskClueObjects1[i].setZOrder(5);
}
}{for(var i = 0, len = gdjs.LockPromptCode.GDSafeClueObjects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDSafeClueObjects1[i].setScale(gdjs.LockPromptCode.GDSafeClueObjects1[i].getScale() / (4));
}
}{for(var i = 0, len = gdjs.LockPromptCode.GDTrashClueObjects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDTrashClueObjects1[i].setScale(gdjs.LockPromptCode.GDTrashClueObjects1[i].getScale() / (1.5));
}
}{for(var i = 0, len = gdjs.LockPromptCode.GDDeskClueObjects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDDeskClueObjects1[i].setScale(gdjs.LockPromptCode.GDDeskClueObjects1[i].getScale() / (4));
}
}}

}


};gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDButton2Objects1Objects = Hashtable.newFrom({"Button2": gdjs.LockPromptCode.GDButton2Objects1});gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDButton1Objects1Objects = Hashtable.newFrom({"Button1": gdjs.LockPromptCode.GDButton1Objects1});gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDButton4Objects1Objects = Hashtable.newFrom({"Button4": gdjs.LockPromptCode.GDButton4Objects1});gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDButton3Objects1Objects = Hashtable.newFrom({"Button3": gdjs.LockPromptCode.GDButton3Objects1});gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDButton9Objects1Objects = Hashtable.newFrom({"Button9": gdjs.LockPromptCode.GDButton9Objects1});gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDButton1Objects1Objects = Hashtable.newFrom({"Button1": gdjs.LockPromptCode.GDButton1Objects1});gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDButton5Objects1Objects = Hashtable.newFrom({"Button5": gdjs.LockPromptCode.GDButton5Objects1});gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDButton7Objects1Objects = Hashtable.newFrom({"Button7": gdjs.LockPromptCode.GDButton7Objects1});gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDButtonYObjects1Objects = Hashtable.newFrom({"ButtonY": gdjs.LockPromptCode.GDButtonYObjects1});gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDCONFIRMObjects1Objects = Hashtable.newFrom({"CONFIRM": gdjs.LockPromptCode.GDCONFIRMObjects1});gdjs.LockPromptCode.eventsList3 = function(runtimeScene) {

{


gdjs.LockPromptCode.condition0IsTrue_0.val = false;
{
gdjs.LockPromptCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.LockPromptCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Unlocked", false);
}}

}


};gdjs.LockPromptCode.eventsList4 = function(runtimeScene) {

{


gdjs.LockPromptCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("CONFIRM"), gdjs.LockPromptCode.GDCONFIRMObjects1);

gdjs.LockPromptCode.condition0IsTrue_0.val = false;
{
gdjs.LockPromptCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDCONFIRMObjects1Objects, runtimeScene, true, true);
}if (gdjs.LockPromptCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LockPromptCode.GDCONFIRMObjects1 */
{for(var i = 0, len = gdjs.LockPromptCode.GDCONFIRMObjects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDCONFIRMObjects1[i].setColor("155;155;155");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CONFIRM"), gdjs.LockPromptCode.GDCONFIRMObjects1);

gdjs.LockPromptCode.condition0IsTrue_0.val = false;
{
gdjs.LockPromptCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDCONFIRMObjects1Objects, runtimeScene, true, false);
}if (gdjs.LockPromptCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LockPromptCode.GDCONFIRMObjects1 */
{for(var i = 0, len = gdjs.LockPromptCode.GDCONFIRMObjects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDCONFIRMObjects1[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.LockPromptCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.LockPromptCode.condition0IsTrue_0.val = false;
{
{gdjs.LockPromptCode.conditionTrue_1 = gdjs.LockPromptCode.condition0IsTrue_0;
gdjs.LockPromptCode.condition0IsTrue_1.val = false;
gdjs.LockPromptCode.condition1IsTrue_1.val = false;
gdjs.LockPromptCode.condition2IsTrue_1.val = false;
{
gdjs.LockPromptCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if ( gdjs.LockPromptCode.condition0IsTrue_1.val ) {
{
gdjs.LockPromptCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if ( gdjs.LockPromptCode.condition1IsTrue_1.val ) {
{
gdjs.LockPromptCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}}
}
gdjs.LockPromptCode.conditionTrue_1.val = true && gdjs.LockPromptCode.condition0IsTrue_1.val && gdjs.LockPromptCode.condition1IsTrue_1.val && gdjs.LockPromptCode.condition2IsTrue_1.val;
}
}if (gdjs.LockPromptCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cluesDialogue"), gdjs.LockPromptCode.GDcluesDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("dialogue"), gdjs.LockPromptCode.GDdialogueObjects1);
{for(var i = 0, len = gdjs.LockPromptCode.GDdialogueObjects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDdialogueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LockPromptCode.GDcluesDialogueObjects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDcluesDialogueObjects1[i].hide(false);
}
}}

}


{


gdjs.LockPromptCode.condition0IsTrue_0.val = false;
{
gdjs.LockPromptCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LockPromptCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Button1"), gdjs.LockPromptCode.GDButton1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button2"), gdjs.LockPromptCode.GDButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button3"), gdjs.LockPromptCode.GDButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button4"), gdjs.LockPromptCode.GDButton4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button5"), gdjs.LockPromptCode.GDButton5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button6"), gdjs.LockPromptCode.GDButton6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button7"), gdjs.LockPromptCode.GDButton7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button8"), gdjs.LockPromptCode.GDButton8Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button9"), gdjs.LockPromptCode.GDButton9Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonC"), gdjs.LockPromptCode.GDButtonCObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonM"), gdjs.LockPromptCode.GDButtonMObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonY"), gdjs.LockPromptCode.GDButtonYObjects1);
gdjs.copyArray(runtimeScene.getObjects("cluesDialogue"), gdjs.LockPromptCode.GDcluesDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("successDialogue"), gdjs.LockPromptCode.GDsuccessDialogueObjects1);
{for(var i = 0, len = gdjs.LockPromptCode.GDcluesDialogueObjects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDcluesDialogueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LockPromptCode.GDsuccessDialogueObjects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDsuccessDialogueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LockPromptCode.GDButton1Objects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDButton1Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.LockPromptCode.GDButton2Objects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDButton2Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.LockPromptCode.GDButton3Objects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDButton3Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.LockPromptCode.GDButton4Objects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDButton4Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.LockPromptCode.GDButton5Objects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDButton5Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.LockPromptCode.GDButton6Objects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDButton6Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.LockPromptCode.GDButton7Objects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDButton7Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.LockPromptCode.GDButton8Objects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDButton8Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.LockPromptCode.GDButton9Objects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDButton9Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.LockPromptCode.GDButtonYObjects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDButtonYObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.LockPromptCode.GDButtonCObjects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDButtonCObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.LockPromptCode.GDButtonMObjects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDButtonMObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button2"), gdjs.LockPromptCode.GDButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("dialogue"), gdjs.LockPromptCode.GDdialogueObjects1);

gdjs.LockPromptCode.condition0IsTrue_0.val = false;
gdjs.LockPromptCode.condition1IsTrue_0.val = false;
gdjs.LockPromptCode.condition2IsTrue_0.val = false;
gdjs.LockPromptCode.condition3IsTrue_0.val = false;
{
gdjs.LockPromptCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDButton2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LockPromptCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton2Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton2Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton2Objects1[i].getVariables().get("Two")) == 0 ) {
        gdjs.LockPromptCode.condition1IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton2Objects1[k] = gdjs.LockPromptCode.GDButton2Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton2Objects1.length = k;}if ( gdjs.LockPromptCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDdialogueObjects1.length;i<l;++i) {
    if ( !(gdjs.LockPromptCode.GDdialogueObjects1[i].isVisible()) ) {
        gdjs.LockPromptCode.condition2IsTrue_0.val = true;
        gdjs.LockPromptCode.GDdialogueObjects1[k] = gdjs.LockPromptCode.GDdialogueObjects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDdialogueObjects1.length = k;}if ( gdjs.LockPromptCode.condition2IsTrue_0.val ) {
{
gdjs.LockPromptCode.condition3IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
}
}
if (gdjs.LockPromptCode.condition3IsTrue_0.val) {
/* Reuse gdjs.LockPromptCode.GDButton2Objects1 */
{for(var i = 0, len = gdjs.LockPromptCode.GDButton2Objects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDButton2Objects1[i].returnVariable(gdjs.LockPromptCode.GDButton2Objects1[i].getVariables().get("Two")).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button1"), gdjs.LockPromptCode.GDButton1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button2"), gdjs.LockPromptCode.GDButton2Objects1);

gdjs.LockPromptCode.condition0IsTrue_0.val = false;
gdjs.LockPromptCode.condition1IsTrue_0.val = false;
gdjs.LockPromptCode.condition2IsTrue_0.val = false;
gdjs.LockPromptCode.condition3IsTrue_0.val = false;
{
gdjs.LockPromptCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDButton1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LockPromptCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton1Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton1Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton1Objects1[i].getVariables().get("One")) == 0 ) {
        gdjs.LockPromptCode.condition1IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton1Objects1[k] = gdjs.LockPromptCode.GDButton1Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton1Objects1.length = k;}if ( gdjs.LockPromptCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton2Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton2Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton2Objects1[i].getVariables().get("Two")) == 1 ) {
        gdjs.LockPromptCode.condition2IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton2Objects1[k] = gdjs.LockPromptCode.GDButton2Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton2Objects1.length = k;}if ( gdjs.LockPromptCode.condition2IsTrue_0.val ) {
{
gdjs.LockPromptCode.condition3IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
}
}
if (gdjs.LockPromptCode.condition3IsTrue_0.val) {
/* Reuse gdjs.LockPromptCode.GDButton1Objects1 */
{for(var i = 0, len = gdjs.LockPromptCode.GDButton1Objects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDButton1Objects1[i].returnVariable(gdjs.LockPromptCode.GDButton1Objects1[i].getVariables().get("One")).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button1"), gdjs.LockPromptCode.GDButton1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button2"), gdjs.LockPromptCode.GDButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button4"), gdjs.LockPromptCode.GDButton4Objects1);

gdjs.LockPromptCode.condition0IsTrue_0.val = false;
gdjs.LockPromptCode.condition1IsTrue_0.val = false;
gdjs.LockPromptCode.condition2IsTrue_0.val = false;
gdjs.LockPromptCode.condition3IsTrue_0.val = false;
gdjs.LockPromptCode.condition4IsTrue_0.val = false;
{
gdjs.LockPromptCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDButton4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LockPromptCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton4Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton4Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton4Objects1[i].getVariables().get("Four")) == 0 ) {
        gdjs.LockPromptCode.condition1IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton4Objects1[k] = gdjs.LockPromptCode.GDButton4Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton4Objects1.length = k;}if ( gdjs.LockPromptCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton2Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton2Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton2Objects1[i].getVariables().get("Two")) == 1 ) {
        gdjs.LockPromptCode.condition2IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton2Objects1[k] = gdjs.LockPromptCode.GDButton2Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton2Objects1.length = k;}if ( gdjs.LockPromptCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton1Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton1Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton1Objects1[i].getVariables().get("One")) == 1 ) {
        gdjs.LockPromptCode.condition3IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton1Objects1[k] = gdjs.LockPromptCode.GDButton1Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton1Objects1.length = k;}if ( gdjs.LockPromptCode.condition3IsTrue_0.val ) {
{
gdjs.LockPromptCode.condition4IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
}
}
}
if (gdjs.LockPromptCode.condition4IsTrue_0.val) {
/* Reuse gdjs.LockPromptCode.GDButton4Objects1 */
{for(var i = 0, len = gdjs.LockPromptCode.GDButton4Objects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDButton4Objects1[i].returnVariable(gdjs.LockPromptCode.GDButton4Objects1[i].getVariables().get("Four")).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button1"), gdjs.LockPromptCode.GDButton1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button2"), gdjs.LockPromptCode.GDButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button3"), gdjs.LockPromptCode.GDButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button4"), gdjs.LockPromptCode.GDButton4Objects1);

gdjs.LockPromptCode.condition0IsTrue_0.val = false;
gdjs.LockPromptCode.condition1IsTrue_0.val = false;
gdjs.LockPromptCode.condition2IsTrue_0.val = false;
gdjs.LockPromptCode.condition3IsTrue_0.val = false;
gdjs.LockPromptCode.condition4IsTrue_0.val = false;
gdjs.LockPromptCode.condition5IsTrue_0.val = false;
{
gdjs.LockPromptCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDButton3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LockPromptCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton3Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton3Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton3Objects1[i].getVariables().get("Three")) == 0 ) {
        gdjs.LockPromptCode.condition1IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton3Objects1[k] = gdjs.LockPromptCode.GDButton3Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton3Objects1.length = k;}if ( gdjs.LockPromptCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton2Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton2Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton2Objects1[i].getVariables().get("Two")) == 1 ) {
        gdjs.LockPromptCode.condition2IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton2Objects1[k] = gdjs.LockPromptCode.GDButton2Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton2Objects1.length = k;}if ( gdjs.LockPromptCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton1Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton1Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton1Objects1[i].getVariables().get("One")) == 1 ) {
        gdjs.LockPromptCode.condition3IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton1Objects1[k] = gdjs.LockPromptCode.GDButton1Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton1Objects1.length = k;}if ( gdjs.LockPromptCode.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton4Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton4Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton4Objects1[i].getVariables().get("Four")) == 1 ) {
        gdjs.LockPromptCode.condition4IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton4Objects1[k] = gdjs.LockPromptCode.GDButton4Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton4Objects1.length = k;}if ( gdjs.LockPromptCode.condition4IsTrue_0.val ) {
{
gdjs.LockPromptCode.condition5IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
}
}
}
}
if (gdjs.LockPromptCode.condition5IsTrue_0.val) {
/* Reuse gdjs.LockPromptCode.GDButton3Objects1 */
{for(var i = 0, len = gdjs.LockPromptCode.GDButton3Objects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDButton3Objects1[i].returnVariable(gdjs.LockPromptCode.GDButton3Objects1[i].getVariables().get("Three")).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button1"), gdjs.LockPromptCode.GDButton1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button2"), gdjs.LockPromptCode.GDButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button3"), gdjs.LockPromptCode.GDButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button4"), gdjs.LockPromptCode.GDButton4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button9"), gdjs.LockPromptCode.GDButton9Objects1);

gdjs.LockPromptCode.condition0IsTrue_0.val = false;
gdjs.LockPromptCode.condition1IsTrue_0.val = false;
gdjs.LockPromptCode.condition2IsTrue_0.val = false;
gdjs.LockPromptCode.condition3IsTrue_0.val = false;
gdjs.LockPromptCode.condition4IsTrue_0.val = false;
gdjs.LockPromptCode.condition5IsTrue_0.val = false;
gdjs.LockPromptCode.condition6IsTrue_0.val = false;
{
gdjs.LockPromptCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDButton9Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LockPromptCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton9Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton9Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton9Objects1[i].getVariables().get("Nine")) == 0 ) {
        gdjs.LockPromptCode.condition1IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton9Objects1[k] = gdjs.LockPromptCode.GDButton9Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton9Objects1.length = k;}if ( gdjs.LockPromptCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton2Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton2Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton2Objects1[i].getVariables().get("Two")) == 1 ) {
        gdjs.LockPromptCode.condition2IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton2Objects1[k] = gdjs.LockPromptCode.GDButton2Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton2Objects1.length = k;}if ( gdjs.LockPromptCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton1Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton1Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton1Objects1[i].getVariables().get("One")) == 1 ) {
        gdjs.LockPromptCode.condition3IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton1Objects1[k] = gdjs.LockPromptCode.GDButton1Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton1Objects1.length = k;}if ( gdjs.LockPromptCode.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton4Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton4Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton4Objects1[i].getVariables().get("Four")) == 1 ) {
        gdjs.LockPromptCode.condition4IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton4Objects1[k] = gdjs.LockPromptCode.GDButton4Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton4Objects1.length = k;}if ( gdjs.LockPromptCode.condition4IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton3Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton3Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton3Objects1[i].getVariables().get("Three")) == 1 ) {
        gdjs.LockPromptCode.condition5IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton3Objects1[k] = gdjs.LockPromptCode.GDButton3Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton3Objects1.length = k;}if ( gdjs.LockPromptCode.condition5IsTrue_0.val ) {
{
gdjs.LockPromptCode.condition6IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
}
}
}
}
}
if (gdjs.LockPromptCode.condition6IsTrue_0.val) {
/* Reuse gdjs.LockPromptCode.GDButton9Objects1 */
{for(var i = 0, len = gdjs.LockPromptCode.GDButton9Objects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDButton9Objects1[i].returnVariable(gdjs.LockPromptCode.GDButton9Objects1[i].getVariables().get("Nine")).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button1"), gdjs.LockPromptCode.GDButton1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button2"), gdjs.LockPromptCode.GDButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button3"), gdjs.LockPromptCode.GDButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button4"), gdjs.LockPromptCode.GDButton4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button9"), gdjs.LockPromptCode.GDButton9Objects1);

gdjs.LockPromptCode.condition0IsTrue_0.val = false;
gdjs.LockPromptCode.condition1IsTrue_0.val = false;
gdjs.LockPromptCode.condition2IsTrue_0.val = false;
gdjs.LockPromptCode.condition3IsTrue_0.val = false;
gdjs.LockPromptCode.condition4IsTrue_0.val = false;
gdjs.LockPromptCode.condition5IsTrue_0.val = false;
gdjs.LockPromptCode.condition6IsTrue_0.val = false;
{
gdjs.LockPromptCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDButton1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LockPromptCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton1Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton1Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton1Objects1[i].getVariables().get("One")) == 1 ) {
        gdjs.LockPromptCode.condition1IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton1Objects1[k] = gdjs.LockPromptCode.GDButton1Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton1Objects1.length = k;}if ( gdjs.LockPromptCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton2Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton2Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton2Objects1[i].getVariables().get("Two")) == 1 ) {
        gdjs.LockPromptCode.condition2IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton2Objects1[k] = gdjs.LockPromptCode.GDButton2Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton2Objects1.length = k;}if ( gdjs.LockPromptCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton4Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton4Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton4Objects1[i].getVariables().get("Four")) == 1 ) {
        gdjs.LockPromptCode.condition3IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton4Objects1[k] = gdjs.LockPromptCode.GDButton4Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton4Objects1.length = k;}if ( gdjs.LockPromptCode.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton3Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton3Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton3Objects1[i].getVariables().get("Three")) == 1 ) {
        gdjs.LockPromptCode.condition4IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton3Objects1[k] = gdjs.LockPromptCode.GDButton3Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton3Objects1.length = k;}if ( gdjs.LockPromptCode.condition4IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton9Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton9Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton9Objects1[i].getVariables().get("Nine")) == 1 ) {
        gdjs.LockPromptCode.condition5IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton9Objects1[k] = gdjs.LockPromptCode.GDButton9Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton9Objects1.length = k;}if ( gdjs.LockPromptCode.condition5IsTrue_0.val ) {
{
gdjs.LockPromptCode.condition6IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
}
}
}
}
}
if (gdjs.LockPromptCode.condition6IsTrue_0.val) {
/* Reuse gdjs.LockPromptCode.GDButton1Objects1 */
{for(var i = 0, len = gdjs.LockPromptCode.GDButton1Objects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDButton1Objects1[i].returnVariable(gdjs.LockPromptCode.GDButton1Objects1[i].getVariables().get("One")).setNumber(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button1"), gdjs.LockPromptCode.GDButton1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button2"), gdjs.LockPromptCode.GDButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button3"), gdjs.LockPromptCode.GDButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button4"), gdjs.LockPromptCode.GDButton4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button5"), gdjs.LockPromptCode.GDButton5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button9"), gdjs.LockPromptCode.GDButton9Objects1);

gdjs.LockPromptCode.condition0IsTrue_0.val = false;
gdjs.LockPromptCode.condition1IsTrue_0.val = false;
gdjs.LockPromptCode.condition2IsTrue_0.val = false;
gdjs.LockPromptCode.condition3IsTrue_0.val = false;
gdjs.LockPromptCode.condition4IsTrue_0.val = false;
gdjs.LockPromptCode.condition5IsTrue_0.val = false;
gdjs.LockPromptCode.condition6IsTrue_0.val = false;
gdjs.LockPromptCode.condition7IsTrue_0.val = false;
{
gdjs.LockPromptCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDButton5Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LockPromptCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton5Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton5Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton5Objects1[i].getVariables().get("Five")) == 0 ) {
        gdjs.LockPromptCode.condition1IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton5Objects1[k] = gdjs.LockPromptCode.GDButton5Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton5Objects1.length = k;}if ( gdjs.LockPromptCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton2Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton2Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton2Objects1[i].getVariables().get("Two")) == 1 ) {
        gdjs.LockPromptCode.condition2IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton2Objects1[k] = gdjs.LockPromptCode.GDButton2Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton2Objects1.length = k;}if ( gdjs.LockPromptCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton1Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton1Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton1Objects1[i].getVariables().get("One")) == 2 ) {
        gdjs.LockPromptCode.condition3IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton1Objects1[k] = gdjs.LockPromptCode.GDButton1Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton1Objects1.length = k;}if ( gdjs.LockPromptCode.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton4Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton4Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton4Objects1[i].getVariables().get("Four")) == 1 ) {
        gdjs.LockPromptCode.condition4IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton4Objects1[k] = gdjs.LockPromptCode.GDButton4Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton4Objects1.length = k;}if ( gdjs.LockPromptCode.condition4IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton3Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton3Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton3Objects1[i].getVariables().get("Three")) == 1 ) {
        gdjs.LockPromptCode.condition5IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton3Objects1[k] = gdjs.LockPromptCode.GDButton3Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton3Objects1.length = k;}if ( gdjs.LockPromptCode.condition5IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton9Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton9Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton9Objects1[i].getVariables().get("Nine")) == 1 ) {
        gdjs.LockPromptCode.condition6IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton9Objects1[k] = gdjs.LockPromptCode.GDButton9Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton9Objects1.length = k;}if ( gdjs.LockPromptCode.condition6IsTrue_0.val ) {
{
gdjs.LockPromptCode.condition7IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
}
}
}
}
}
}
if (gdjs.LockPromptCode.condition7IsTrue_0.val) {
/* Reuse gdjs.LockPromptCode.GDButton5Objects1 */
{for(var i = 0, len = gdjs.LockPromptCode.GDButton5Objects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDButton5Objects1[i].returnVariable(gdjs.LockPromptCode.GDButton5Objects1[i].getVariables().get("Five")).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button1"), gdjs.LockPromptCode.GDButton1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button2"), gdjs.LockPromptCode.GDButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button3"), gdjs.LockPromptCode.GDButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button4"), gdjs.LockPromptCode.GDButton4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button5"), gdjs.LockPromptCode.GDButton5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button7"), gdjs.LockPromptCode.GDButton7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button9"), gdjs.LockPromptCode.GDButton9Objects1);

gdjs.LockPromptCode.condition0IsTrue_0.val = false;
gdjs.LockPromptCode.condition1IsTrue_0.val = false;
gdjs.LockPromptCode.condition2IsTrue_0.val = false;
gdjs.LockPromptCode.condition3IsTrue_0.val = false;
gdjs.LockPromptCode.condition4IsTrue_0.val = false;
gdjs.LockPromptCode.condition5IsTrue_0.val = false;
gdjs.LockPromptCode.condition6IsTrue_0.val = false;
gdjs.LockPromptCode.condition7IsTrue_0.val = false;
gdjs.LockPromptCode.condition8IsTrue_0.val = false;
{
gdjs.LockPromptCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDButton7Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LockPromptCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton7Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton7Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton7Objects1[i].getVariables().get("Seven")) == 0 ) {
        gdjs.LockPromptCode.condition1IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton7Objects1[k] = gdjs.LockPromptCode.GDButton7Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton7Objects1.length = k;}if ( gdjs.LockPromptCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton2Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton2Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton2Objects1[i].getVariables().get("Two")) == 1 ) {
        gdjs.LockPromptCode.condition2IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton2Objects1[k] = gdjs.LockPromptCode.GDButton2Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton2Objects1.length = k;}if ( gdjs.LockPromptCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton1Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton1Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton1Objects1[i].getVariables().get("One")) == 2 ) {
        gdjs.LockPromptCode.condition3IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton1Objects1[k] = gdjs.LockPromptCode.GDButton1Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton1Objects1.length = k;}if ( gdjs.LockPromptCode.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton4Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton4Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton4Objects1[i].getVariables().get("Four")) == 1 ) {
        gdjs.LockPromptCode.condition4IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton4Objects1[k] = gdjs.LockPromptCode.GDButton4Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton4Objects1.length = k;}if ( gdjs.LockPromptCode.condition4IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton3Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton3Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton3Objects1[i].getVariables().get("Three")) == 1 ) {
        gdjs.LockPromptCode.condition5IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton3Objects1[k] = gdjs.LockPromptCode.GDButton3Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton3Objects1.length = k;}if ( gdjs.LockPromptCode.condition5IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton9Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton9Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton9Objects1[i].getVariables().get("Nine")) == 1 ) {
        gdjs.LockPromptCode.condition6IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton9Objects1[k] = gdjs.LockPromptCode.GDButton9Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton9Objects1.length = k;}if ( gdjs.LockPromptCode.condition6IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton5Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton5Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton5Objects1[i].getVariables().get("Five")) == 1 ) {
        gdjs.LockPromptCode.condition7IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton5Objects1[k] = gdjs.LockPromptCode.GDButton5Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton5Objects1.length = k;}if ( gdjs.LockPromptCode.condition7IsTrue_0.val ) {
{
gdjs.LockPromptCode.condition8IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
}
}
}
}
}
}
}
if (gdjs.LockPromptCode.condition8IsTrue_0.val) {
/* Reuse gdjs.LockPromptCode.GDButton7Objects1 */
{for(var i = 0, len = gdjs.LockPromptCode.GDButton7Objects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDButton7Objects1[i].returnVariable(gdjs.LockPromptCode.GDButton7Objects1[i].getVariables().get("Seven")).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button1"), gdjs.LockPromptCode.GDButton1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button2"), gdjs.LockPromptCode.GDButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button3"), gdjs.LockPromptCode.GDButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button4"), gdjs.LockPromptCode.GDButton4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button5"), gdjs.LockPromptCode.GDButton5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button7"), gdjs.LockPromptCode.GDButton7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button9"), gdjs.LockPromptCode.GDButton9Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonY"), gdjs.LockPromptCode.GDButtonYObjects1);

gdjs.LockPromptCode.condition0IsTrue_0.val = false;
gdjs.LockPromptCode.condition1IsTrue_0.val = false;
gdjs.LockPromptCode.condition2IsTrue_0.val = false;
gdjs.LockPromptCode.condition3IsTrue_0.val = false;
gdjs.LockPromptCode.condition4IsTrue_0.val = false;
gdjs.LockPromptCode.condition5IsTrue_0.val = false;
gdjs.LockPromptCode.condition6IsTrue_0.val = false;
gdjs.LockPromptCode.condition7IsTrue_0.val = false;
gdjs.LockPromptCode.condition8IsTrue_0.val = false;
gdjs.LockPromptCode.condition9IsTrue_0.val = false;
{
gdjs.LockPromptCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDButtonYObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LockPromptCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButtonYObjects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButtonYObjects1[i].getVariableNumber(gdjs.LockPromptCode.GDButtonYObjects1[i].getVariables().get("Y")) == 0 ) {
        gdjs.LockPromptCode.condition1IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButtonYObjects1[k] = gdjs.LockPromptCode.GDButtonYObjects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButtonYObjects1.length = k;}if ( gdjs.LockPromptCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton5Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton5Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton5Objects1[i].getVariables().get("Five")) == 1 ) {
        gdjs.LockPromptCode.condition2IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton5Objects1[k] = gdjs.LockPromptCode.GDButton5Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton5Objects1.length = k;}if ( gdjs.LockPromptCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton1Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton1Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton1Objects1[i].getVariables().get("One")) == 2 ) {
        gdjs.LockPromptCode.condition3IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton1Objects1[k] = gdjs.LockPromptCode.GDButton1Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton1Objects1.length = k;}if ( gdjs.LockPromptCode.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton2Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton2Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton2Objects1[i].getVariables().get("Two")) == 1 ) {
        gdjs.LockPromptCode.condition4IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton2Objects1[k] = gdjs.LockPromptCode.GDButton2Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton2Objects1.length = k;}if ( gdjs.LockPromptCode.condition4IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton4Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton4Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton4Objects1[i].getVariables().get("Four")) == 1 ) {
        gdjs.LockPromptCode.condition5IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton4Objects1[k] = gdjs.LockPromptCode.GDButton4Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton4Objects1.length = k;}if ( gdjs.LockPromptCode.condition5IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton9Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton9Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton9Objects1[i].getVariables().get("Nine")) == 1 ) {
        gdjs.LockPromptCode.condition6IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton9Objects1[k] = gdjs.LockPromptCode.GDButton9Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton9Objects1.length = k;}if ( gdjs.LockPromptCode.condition6IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton7Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton7Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton7Objects1[i].getVariables().get("Seven")) == 1 ) {
        gdjs.LockPromptCode.condition7IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton7Objects1[k] = gdjs.LockPromptCode.GDButton7Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton7Objects1.length = k;}if ( gdjs.LockPromptCode.condition7IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton3Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton3Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton3Objects1[i].getVariables().get("Three")) == 1 ) {
        gdjs.LockPromptCode.condition8IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton3Objects1[k] = gdjs.LockPromptCode.GDButton3Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton3Objects1.length = k;}if ( gdjs.LockPromptCode.condition8IsTrue_0.val ) {
{
gdjs.LockPromptCode.condition9IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
}
}
}
}
}
}
}
}
if (gdjs.LockPromptCode.condition9IsTrue_0.val) {
/* Reuse gdjs.LockPromptCode.GDButtonYObjects1 */
{for(var i = 0, len = gdjs.LockPromptCode.GDButtonYObjects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDButtonYObjects1[i].returnVariable(gdjs.LockPromptCode.GDButtonYObjects1[i].getVariables().get("Y")).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button1"), gdjs.LockPromptCode.GDButton1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button2"), gdjs.LockPromptCode.GDButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button3"), gdjs.LockPromptCode.GDButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button4"), gdjs.LockPromptCode.GDButton4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button5"), gdjs.LockPromptCode.GDButton5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button7"), gdjs.LockPromptCode.GDButton7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button9"), gdjs.LockPromptCode.GDButton9Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonY"), gdjs.LockPromptCode.GDButtonYObjects1);

gdjs.LockPromptCode.condition0IsTrue_0.val = false;
gdjs.LockPromptCode.condition1IsTrue_0.val = false;
gdjs.LockPromptCode.condition2IsTrue_0.val = false;
gdjs.LockPromptCode.condition3IsTrue_0.val = false;
gdjs.LockPromptCode.condition4IsTrue_0.val = false;
gdjs.LockPromptCode.condition5IsTrue_0.val = false;
gdjs.LockPromptCode.condition6IsTrue_0.val = false;
gdjs.LockPromptCode.condition7IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton2Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton2Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton2Objects1[i].getVariables().get("Two")) == 1 ) {
        gdjs.LockPromptCode.condition0IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton2Objects1[k] = gdjs.LockPromptCode.GDButton2Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton2Objects1.length = k;}if ( gdjs.LockPromptCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton1Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton1Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton1Objects1[i].getVariables().get("One")) == 2 ) {
        gdjs.LockPromptCode.condition1IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton1Objects1[k] = gdjs.LockPromptCode.GDButton1Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton1Objects1.length = k;}if ( gdjs.LockPromptCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton4Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton4Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton4Objects1[i].getVariables().get("Four")) == 1 ) {
        gdjs.LockPromptCode.condition2IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton4Objects1[k] = gdjs.LockPromptCode.GDButton4Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton4Objects1.length = k;}if ( gdjs.LockPromptCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton3Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton3Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton3Objects1[i].getVariables().get("Three")) == 1 ) {
        gdjs.LockPromptCode.condition3IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton3Objects1[k] = gdjs.LockPromptCode.GDButton3Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton3Objects1.length = k;}if ( gdjs.LockPromptCode.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton9Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton9Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton9Objects1[i].getVariables().get("Nine")) == 1 ) {
        gdjs.LockPromptCode.condition4IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton9Objects1[k] = gdjs.LockPromptCode.GDButton9Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton9Objects1.length = k;}if ( gdjs.LockPromptCode.condition4IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton5Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton5Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton5Objects1[i].getVariables().get("Five")) == 1 ) {
        gdjs.LockPromptCode.condition5IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton5Objects1[k] = gdjs.LockPromptCode.GDButton5Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton5Objects1.length = k;}if ( gdjs.LockPromptCode.condition5IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButton7Objects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButton7Objects1[i].getVariableNumber(gdjs.LockPromptCode.GDButton7Objects1[i].getVariables().get("Seven")) == 1 ) {
        gdjs.LockPromptCode.condition6IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButton7Objects1[k] = gdjs.LockPromptCode.GDButton7Objects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButton7Objects1.length = k;}if ( gdjs.LockPromptCode.condition6IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDButtonYObjects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDButtonYObjects1[i].getVariableNumber(gdjs.LockPromptCode.GDButtonYObjects1[i].getVariables().get("Y")) == 1 ) {
        gdjs.LockPromptCode.condition7IsTrue_0.val = true;
        gdjs.LockPromptCode.GDButtonYObjects1[k] = gdjs.LockPromptCode.GDButtonYObjects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDButtonYObjects1.length = k;}}
}
}
}
}
}
}
if (gdjs.LockPromptCode.condition7IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CONFIRM"), gdjs.LockPromptCode.GDCONFIRMObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogueBox"), gdjs.LockPromptCode.GDDialogueBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("successDialogue"), gdjs.LockPromptCode.GDsuccessDialogueObjects1);
{for(var i = 0, len = gdjs.LockPromptCode.GDDialogueBoxObjects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDDialogueBoxObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.LockPromptCode.GDCONFIRMObjects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDCONFIRMObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.LockPromptCode.GDsuccessDialogueObjects1.length ;i < len;++i) {
    gdjs.LockPromptCode.GDsuccessDialogueObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CONFIRM"), gdjs.LockPromptCode.GDCONFIRMObjects1);
gdjs.copyArray(runtimeScene.getObjects("successDialogue"), gdjs.LockPromptCode.GDsuccessDialogueObjects1);

gdjs.LockPromptCode.condition0IsTrue_0.val = false;
gdjs.LockPromptCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LockPromptCode.GDsuccessDialogueObjects1.length;i<l;++i) {
    if ( gdjs.LockPromptCode.GDsuccessDialogueObjects1[i].isVisible() ) {
        gdjs.LockPromptCode.condition0IsTrue_0.val = true;
        gdjs.LockPromptCode.GDsuccessDialogueObjects1[k] = gdjs.LockPromptCode.GDsuccessDialogueObjects1[i];
        ++k;
    }
}
gdjs.LockPromptCode.GDsuccessDialogueObjects1.length = k;}if ( gdjs.LockPromptCode.condition0IsTrue_0.val ) {
{
gdjs.LockPromptCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LockPromptCode.mapOfGDgdjs_46LockPromptCode_46GDCONFIRMObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.LockPromptCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.LockPromptCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.LockPromptCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LockPromptCode.GDDialogueBoxObjects1.length = 0;
gdjs.LockPromptCode.GDDialogueBoxObjects2.length = 0;
gdjs.LockPromptCode.GDDialogueBoxObjects3.length = 0;
gdjs.LockPromptCode.GDCONFIRMObjects1.length = 0;
gdjs.LockPromptCode.GDCONFIRMObjects2.length = 0;
gdjs.LockPromptCode.GDCONFIRMObjects3.length = 0;
gdjs.LockPromptCode.GDcluesDialogueObjects1.length = 0;
gdjs.LockPromptCode.GDcluesDialogueObjects2.length = 0;
gdjs.LockPromptCode.GDcluesDialogueObjects3.length = 0;
gdjs.LockPromptCode.GDdialogueObjects1.length = 0;
gdjs.LockPromptCode.GDdialogueObjects2.length = 0;
gdjs.LockPromptCode.GDdialogueObjects3.length = 0;
gdjs.LockPromptCode.GDSafeClueObjects1.length = 0;
gdjs.LockPromptCode.GDSafeClueObjects2.length = 0;
gdjs.LockPromptCode.GDSafeClueObjects3.length = 0;
gdjs.LockPromptCode.GDTrashClueObjects1.length = 0;
gdjs.LockPromptCode.GDTrashClueObjects2.length = 0;
gdjs.LockPromptCode.GDTrashClueObjects3.length = 0;
gdjs.LockPromptCode.GDDeskClueObjects1.length = 0;
gdjs.LockPromptCode.GDDeskClueObjects2.length = 0;
gdjs.LockPromptCode.GDDeskClueObjects3.length = 0;
gdjs.LockPromptCode.GDBackgroundObjects1.length = 0;
gdjs.LockPromptCode.GDBackgroundObjects2.length = 0;
gdjs.LockPromptCode.GDBackgroundObjects3.length = 0;
gdjs.LockPromptCode.GDButton1Objects1.length = 0;
gdjs.LockPromptCode.GDButton1Objects2.length = 0;
gdjs.LockPromptCode.GDButton1Objects3.length = 0;
gdjs.LockPromptCode.GDButton2Objects1.length = 0;
gdjs.LockPromptCode.GDButton2Objects2.length = 0;
gdjs.LockPromptCode.GDButton2Objects3.length = 0;
gdjs.LockPromptCode.GDButton3Objects1.length = 0;
gdjs.LockPromptCode.GDButton3Objects2.length = 0;
gdjs.LockPromptCode.GDButton3Objects3.length = 0;
gdjs.LockPromptCode.GDButton4Objects1.length = 0;
gdjs.LockPromptCode.GDButton4Objects2.length = 0;
gdjs.LockPromptCode.GDButton4Objects3.length = 0;
gdjs.LockPromptCode.GDButton5Objects1.length = 0;
gdjs.LockPromptCode.GDButton5Objects2.length = 0;
gdjs.LockPromptCode.GDButton5Objects3.length = 0;
gdjs.LockPromptCode.GDButton6Objects1.length = 0;
gdjs.LockPromptCode.GDButton6Objects2.length = 0;
gdjs.LockPromptCode.GDButton6Objects3.length = 0;
gdjs.LockPromptCode.GDButton7Objects1.length = 0;
gdjs.LockPromptCode.GDButton7Objects2.length = 0;
gdjs.LockPromptCode.GDButton7Objects3.length = 0;
gdjs.LockPromptCode.GDButton8Objects1.length = 0;
gdjs.LockPromptCode.GDButton8Objects2.length = 0;
gdjs.LockPromptCode.GDButton8Objects3.length = 0;
gdjs.LockPromptCode.GDButton9Objects1.length = 0;
gdjs.LockPromptCode.GDButton9Objects2.length = 0;
gdjs.LockPromptCode.GDButton9Objects3.length = 0;
gdjs.LockPromptCode.GDButtonMObjects1.length = 0;
gdjs.LockPromptCode.GDButtonMObjects2.length = 0;
gdjs.LockPromptCode.GDButtonMObjects3.length = 0;
gdjs.LockPromptCode.GDButtonCObjects1.length = 0;
gdjs.LockPromptCode.GDButtonCObjects2.length = 0;
gdjs.LockPromptCode.GDButtonCObjects3.length = 0;
gdjs.LockPromptCode.GDButtonYObjects1.length = 0;
gdjs.LockPromptCode.GDButtonYObjects2.length = 0;
gdjs.LockPromptCode.GDButtonYObjects3.length = 0;
gdjs.LockPromptCode.GDsuccessDialogueObjects1.length = 0;
gdjs.LockPromptCode.GDsuccessDialogueObjects2.length = 0;
gdjs.LockPromptCode.GDsuccessDialogueObjects3.length = 0;
gdjs.LockPromptCode.GDTimerMinutesObjects1.length = 0;
gdjs.LockPromptCode.GDTimerMinutesObjects2.length = 0;
gdjs.LockPromptCode.GDTimerMinutesObjects3.length = 0;
gdjs.LockPromptCode.GDTimerSecondsObjects1.length = 0;
gdjs.LockPromptCode.GDTimerSecondsObjects2.length = 0;
gdjs.LockPromptCode.GDTimerSecondsObjects3.length = 0;

gdjs.LockPromptCode.eventsList4(runtimeScene);
return;

}

gdjs['LockPromptCode'] = gdjs.LockPromptCode;
