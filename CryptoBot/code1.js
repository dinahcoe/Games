gdjs.Room1Code = {};
gdjs.Room1Code.GDDeskObjects2_1final = [];

gdjs.Room1Code.GDLockObjects2_1final = [];

gdjs.Room1Code.GDSafeObjects2_1final = [];

gdjs.Room1Code.GDWaskebasketObjects2_1final = [];

gdjs.Room1Code.GDBotObjects1= [];
gdjs.Room1Code.GDBotObjects2= [];
gdjs.Room1Code.GDBotObjects3= [];
gdjs.Room1Code.GDBotObjects4= [];
gdjs.Room1Code.GDRoom1Objects1= [];
gdjs.Room1Code.GDRoom1Objects2= [];
gdjs.Room1Code.GDRoom1Objects3= [];
gdjs.Room1Code.GDRoom1Objects4= [];
gdjs.Room1Code.GDObstacleObjects1= [];
gdjs.Room1Code.GDObstacleObjects2= [];
gdjs.Room1Code.GDObstacleObjects3= [];
gdjs.Room1Code.GDObstacleObjects4= [];
gdjs.Room1Code.GDSafeObjects1= [];
gdjs.Room1Code.GDSafeObjects2= [];
gdjs.Room1Code.GDSafeObjects3= [];
gdjs.Room1Code.GDSafeObjects4= [];
gdjs.Room1Code.GDSafeDialogueObjects1= [];
gdjs.Room1Code.GDSafeDialogueObjects2= [];
gdjs.Room1Code.GDSafeDialogueObjects3= [];
gdjs.Room1Code.GDSafeDialogueObjects4= [];
gdjs.Room1Code.GDYesButtonObjects1= [];
gdjs.Room1Code.GDYesButtonObjects2= [];
gdjs.Room1Code.GDYesButtonObjects3= [];
gdjs.Room1Code.GDYesButtonObjects4= [];
gdjs.Room1Code.GDNoButtonObjects1= [];
gdjs.Room1Code.GDNoButtonObjects2= [];
gdjs.Room1Code.GDNoButtonObjects3= [];
gdjs.Room1Code.GDNoButtonObjects4= [];
gdjs.Room1Code.GDDialogueBoxObjects1= [];
gdjs.Room1Code.GDDialogueBoxObjects2= [];
gdjs.Room1Code.GDDialogueBoxObjects3= [];
gdjs.Room1Code.GDDialogueBoxObjects4= [];
gdjs.Room1Code.GDWaskebasketObjects1= [];
gdjs.Room1Code.GDWaskebasketObjects2= [];
gdjs.Room1Code.GDWaskebasketObjects3= [];
gdjs.Room1Code.GDWaskebasketObjects4= [];
gdjs.Room1Code.GDbasketDialogueObjects1= [];
gdjs.Room1Code.GDbasketDialogueObjects2= [];
gdjs.Room1Code.GDbasketDialogueObjects3= [];
gdjs.Room1Code.GDbasketDialogueObjects4= [];
gdjs.Room1Code.GDsafeDialogueObjects1= [];
gdjs.Room1Code.GDsafeDialogueObjects2= [];
gdjs.Room1Code.GDsafeDialogueObjects3= [];
gdjs.Room1Code.GDsafeDialogueObjects4= [];
gdjs.Room1Code.GDlockDialogueObjects1= [];
gdjs.Room1Code.GDlockDialogueObjects2= [];
gdjs.Room1Code.GDlockDialogueObjects3= [];
gdjs.Room1Code.GDlockDialogueObjects4= [];
gdjs.Room1Code.GDdeskDialogueObjects1= [];
gdjs.Room1Code.GDdeskDialogueObjects2= [];
gdjs.Room1Code.GDdeskDialogueObjects3= [];
gdjs.Room1Code.GDdeskDialogueObjects4= [];
gdjs.Room1Code.GDDeskObjects1= [];
gdjs.Room1Code.GDDeskObjects2= [];
gdjs.Room1Code.GDDeskObjects3= [];
gdjs.Room1Code.GDDeskObjects4= [];
gdjs.Room1Code.GDSafeClueObjects1= [];
gdjs.Room1Code.GDSafeClueObjects2= [];
gdjs.Room1Code.GDSafeClueObjects3= [];
gdjs.Room1Code.GDSafeClueObjects4= [];
gdjs.Room1Code.GDTrashClueObjects1= [];
gdjs.Room1Code.GDTrashClueObjects2= [];
gdjs.Room1Code.GDTrashClueObjects3= [];
gdjs.Room1Code.GDTrashClueObjects4= [];
gdjs.Room1Code.GDDeskClueObjects1= [];
gdjs.Room1Code.GDDeskClueObjects2= [];
gdjs.Room1Code.GDDeskClueObjects3= [];
gdjs.Room1Code.GDDeskClueObjects4= [];
gdjs.Room1Code.GDLockObjects1= [];
gdjs.Room1Code.GDLockObjects2= [];
gdjs.Room1Code.GDLockObjects3= [];
gdjs.Room1Code.GDLockObjects4= [];
gdjs.Room1Code.GDTimerSecondsObjects1= [];
gdjs.Room1Code.GDTimerSecondsObjects2= [];
gdjs.Room1Code.GDTimerSecondsObjects3= [];
gdjs.Room1Code.GDTimerSecondsObjects4= [];
gdjs.Room1Code.GDTimerMinutesObjects1= [];
gdjs.Room1Code.GDTimerMinutesObjects2= [];
gdjs.Room1Code.GDTimerMinutesObjects3= [];
gdjs.Room1Code.GDTimerMinutesObjects4= [];

gdjs.Room1Code.conditionTrue_0 = {val:false};
gdjs.Room1Code.condition0IsTrue_0 = {val:false};
gdjs.Room1Code.condition1IsTrue_0 = {val:false};
gdjs.Room1Code.condition2IsTrue_0 = {val:false};
gdjs.Room1Code.condition3IsTrue_0 = {val:false};
gdjs.Room1Code.conditionTrue_1 = {val:false};
gdjs.Room1Code.condition0IsTrue_1 = {val:false};
gdjs.Room1Code.condition1IsTrue_1 = {val:false};
gdjs.Room1Code.condition2IsTrue_1 = {val:false};
gdjs.Room1Code.condition3IsTrue_1 = {val:false};
gdjs.Room1Code.conditionTrue_2 = {val:false};
gdjs.Room1Code.condition0IsTrue_2 = {val:false};
gdjs.Room1Code.condition1IsTrue_2 = {val:false};
gdjs.Room1Code.condition2IsTrue_2 = {val:false};
gdjs.Room1Code.condition3IsTrue_2 = {val:false};


gdjs.Room1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bot"), gdjs.Room1Code.GDBotObjects3);

gdjs.Room1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Room1Code.GDBotObjects3.length;i<l;++i) {
    if ( gdjs.Room1Code.GDBotObjects3[i].getX() < gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) - 5 ) {
        gdjs.Room1Code.condition0IsTrue_0.val = true;
        gdjs.Room1Code.GDBotObjects3[k] = gdjs.Room1Code.GDBotObjects3[i];
        ++k;
    }
}
gdjs.Room1Code.GDBotObjects3.length = k;}if (gdjs.Room1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Room1Code.GDBotObjects3 */
{for(var i = 0, len = gdjs.Room1Code.GDBotObjects3.length ;i < len;++i) {
    gdjs.Room1Code.GDBotObjects3[i].getBehavior("TopDownMovement").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Room1Code.GDBotObjects3.length ;i < len;++i) {
    gdjs.Room1Code.GDBotObjects3[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bot"), gdjs.Room1Code.GDBotObjects3);

gdjs.Room1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Room1Code.GDBotObjects3.length;i<l;++i) {
    if ( gdjs.Room1Code.GDBotObjects3[i].getX() > gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) + 5 ) {
        gdjs.Room1Code.condition0IsTrue_0.val = true;
        gdjs.Room1Code.GDBotObjects3[k] = gdjs.Room1Code.GDBotObjects3[i];
        ++k;
    }
}
gdjs.Room1Code.GDBotObjects3.length = k;}if (gdjs.Room1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Room1Code.GDBotObjects3 */
{for(var i = 0, len = gdjs.Room1Code.GDBotObjects3.length ;i < len;++i) {
    gdjs.Room1Code.GDBotObjects3[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Room1Code.GDBotObjects3.length ;i < len;++i) {
    gdjs.Room1Code.GDBotObjects3[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bot"), gdjs.Room1Code.GDBotObjects3);

gdjs.Room1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Room1Code.GDBotObjects3.length;i<l;++i) {
    if ( gdjs.Room1Code.GDBotObjects3[i].getY() < gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) - 5 ) {
        gdjs.Room1Code.condition0IsTrue_0.val = true;
        gdjs.Room1Code.GDBotObjects3[k] = gdjs.Room1Code.GDBotObjects3[i];
        ++k;
    }
}
gdjs.Room1Code.GDBotObjects3.length = k;}if (gdjs.Room1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Room1Code.GDBotObjects3 */
{for(var i = 0, len = gdjs.Room1Code.GDBotObjects3.length ;i < len;++i) {
    gdjs.Room1Code.GDBotObjects3[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bot"), gdjs.Room1Code.GDBotObjects2);

gdjs.Room1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Room1Code.GDBotObjects2.length;i<l;++i) {
    if ( gdjs.Room1Code.GDBotObjects2[i].getY() > gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) + 5 ) {
        gdjs.Room1Code.condition0IsTrue_0.val = true;
        gdjs.Room1Code.GDBotObjects2[k] = gdjs.Room1Code.GDBotObjects2[i];
        ++k;
    }
}
gdjs.Room1Code.GDBotObjects2.length = k;}if (gdjs.Room1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Room1Code.GDBotObjects2 */
{for(var i = 0, len = gdjs.Room1Code.GDBotObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDBotObjects2[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


};gdjs.Room1Code.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Bot"), gdjs.Room1Code.GDBotObjects2);

gdjs.Room1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Room1Code.GDBotObjects2.length;i<l;++i) {
    if ( gdjs.Room1Code.GDBotObjects2[i].getBehavior("TopDownMovement").isMoving() ) {
        gdjs.Room1Code.condition0IsTrue_0.val = true;
        gdjs.Room1Code.GDBotObjects2[k] = gdjs.Room1Code.GDBotObjects2[i];
        ++k;
    }
}
gdjs.Room1Code.GDBotObjects2.length = k;}if (gdjs.Room1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Room1Code.GDBotObjects2 */
{for(var i = 0, len = gdjs.Room1Code.GDBotObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDBotObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bot"), gdjs.Room1Code.GDBotObjects2);

gdjs.Room1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Room1Code.GDBotObjects2.length;i<l;++i) {
    if ( !(gdjs.Room1Code.GDBotObjects2[i].getBehavior("TopDownMovement").isMoving()) ) {
        gdjs.Room1Code.condition0IsTrue_0.val = true;
        gdjs.Room1Code.GDBotObjects2[k] = gdjs.Room1Code.GDBotObjects2[i];
        ++k;
    }
}
gdjs.Room1Code.GDBotObjects2.length = k;}if (gdjs.Room1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Room1Code.GDBotObjects2 */
{for(var i = 0, len = gdjs.Room1Code.GDBotObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDBotObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bot"), gdjs.Room1Code.GDBotObjects2);
{for(var i = 0, len = gdjs.Room1Code.GDBotObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDBotObjects2[i].flipX(true);
}
}}

}


{


gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bot"), gdjs.Room1Code.GDBotObjects2);
{for(var i = 0, len = gdjs.Room1Code.GDBotObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDBotObjects2[i].flipX(false);
}
}}

}


{


gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Room1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Room1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bot"), gdjs.Room1Code.GDBotObjects2);
{for(var i = 0, len = gdjs.Room1Code.GDBotObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDBotObjects2[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


{


gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bot"), gdjs.Room1Code.GDBotObjects2);
{for(var i = 0, len = gdjs.Room1Code.GDBotObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDBotObjects2[i].getBehavior("TopDownMovement").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Room1Code.GDBotObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDBotObjects2[i].flipX(false);
}
}}

}


{


gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bot"), gdjs.Room1Code.GDBotObjects2);
{for(var i = 0, len = gdjs.Room1Code.GDBotObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDBotObjects2[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Room1Code.GDBotObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDBotObjects2[i].flipX(true);
}
}}

}


{


gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bot"), gdjs.Room1Code.GDBotObjects1);
{for(var i = 0, len = gdjs.Room1Code.GDBotObjects1.length ;i < len;++i) {
    gdjs.Room1Code.GDBotObjects1[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


};gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDBotObjects2Objects = Hashtable.newFrom({"Bot": gdjs.Room1Code.GDBotObjects2});gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDSafeObjects2Objects = Hashtable.newFrom({"Safe": gdjs.Room1Code.GDSafeObjects2});gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDSafeObjects3Objects = Hashtable.newFrom({"Safe": gdjs.Room1Code.GDSafeObjects3});gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDDialogueBoxObjects2Objects = Hashtable.newFrom({"DialogueBox": gdjs.Room1Code.GDDialogueBoxObjects2});gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDYesButtonObjects2Objects = Hashtable.newFrom({"YesButton": gdjs.Room1Code.GDYesButtonObjects2});gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDNoButtonObjects2Objects = Hashtable.newFrom({"NoButton": gdjs.Room1Code.GDNoButtonObjects2});gdjs.Room1Code.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.Room1Code.GDSafeObjects2 */

gdjs.Room1Code.condition0IsTrue_0.val = false;
{
{gdjs.Room1Code.conditionTrue_1 = gdjs.Room1Code.condition0IsTrue_0;
gdjs.Room1Code.GDSafeObjects2_1final.length = 0;gdjs.Room1Code.condition0IsTrue_1.val = false;
gdjs.Room1Code.condition1IsTrue_1.val = false;
gdjs.Room1Code.condition2IsTrue_1.val = false;
{
gdjs.Room1Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Room1Code.condition0IsTrue_1.val ) {
    gdjs.Room1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Room1Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Room1Code.condition1IsTrue_1.val ) {
    gdjs.Room1Code.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(gdjs.Room1Code.GDSafeObjects2, gdjs.Room1Code.GDSafeObjects3);

{gdjs.Room1Code.conditionTrue_2 = gdjs.Room1Code.condition2IsTrue_1;
gdjs.Room1Code.condition0IsTrue_2.val = false;
gdjs.Room1Code.condition1IsTrue_2.val = false;
{
gdjs.Room1Code.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDSafeObjects3Objects, runtimeScene, true, false);
}if ( gdjs.Room1Code.condition0IsTrue_2.val ) {
{
gdjs.Room1Code.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.Room1Code.conditionTrue_2.val = true && gdjs.Room1Code.condition0IsTrue_2.val && gdjs.Room1Code.condition1IsTrue_2.val;
}
if( gdjs.Room1Code.condition2IsTrue_1.val ) {
    gdjs.Room1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Room1Code.GDSafeObjects3.length;j<jLen;++j) {
        if ( gdjs.Room1Code.GDSafeObjects2_1final.indexOf(gdjs.Room1Code.GDSafeObjects3[j]) === -1 )
            gdjs.Room1Code.GDSafeObjects2_1final.push(gdjs.Room1Code.GDSafeObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Room1Code.GDSafeObjects2_1final, gdjs.Room1Code.GDSafeObjects2);
}
}
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("safeDialogue"), gdjs.Room1Code.GDsafeDialogueObjects2);
gdjs.Room1Code.GDDialogueBoxObjects2.length = 0;

gdjs.Room1Code.GDNoButtonObjects2.length = 0;

gdjs.Room1Code.GDYesButtonObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDDialogueBoxObjects2Objects, 50, 525, "");
}{for(var i = 0, len = gdjs.Room1Code.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDDialogueBoxObjects2[i].setHeight(400);
}
}{for(var i = 0, len = gdjs.Room1Code.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDDialogueBoxObjects2[i].setWidth(900);
}
}{for(var i = 0, len = gdjs.Room1Code.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDDialogueBoxObjects2[i].setOpacity(200);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDYesButtonObjects2Objects, 260, 780, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDNoButtonObjects2Objects, 650, 780, "");
}{for(var i = 0, len = gdjs.Room1Code.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDDialogueBoxObjects2[i].setZOrder(200);
}
}{for(var i = 0, len = gdjs.Room1Code.GDYesButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDYesButtonObjects2[i].setZOrder(300);
}
}{for(var i = 0, len = gdjs.Room1Code.GDNoButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDNoButtonObjects2[i].setZOrder(300);
}
}{for(var i = 0, len = gdjs.Room1Code.GDsafeDialogueObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDsafeDialogueObjects2[i].hide(false);
}
}}

}


};gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDYesButtonObjects2Objects = Hashtable.newFrom({"YesButton": gdjs.Room1Code.GDYesButtonObjects2});gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDYesButtonObjects2Objects = Hashtable.newFrom({"YesButton": gdjs.Room1Code.GDYesButtonObjects2});gdjs.Room1Code.eventsList3 = function(runtimeScene) {

{


gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DialogueBox"), gdjs.Room1Code.GDDialogueBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.Room1Code.GDNoButtonObjects2);
/* Reuse gdjs.Room1Code.GDYesButtonObjects2 */
/* Reuse gdjs.Room1Code.GDsafeDialogueObjects2 */
{for(var i = 0, len = gdjs.Room1Code.GDYesButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDYesButtonObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Room1Code.GDsafeDialogueObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDsafeDialogueObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Room1Code.GDNoButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDNoButtonObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Room1Code.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDDialogueBoxObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "SafePrompt");
}}

}


};gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDNoButtonObjects2Objects = Hashtable.newFrom({"NoButton": gdjs.Room1Code.GDNoButtonObjects2});gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDNoButtonObjects2Objects = Hashtable.newFrom({"NoButton": gdjs.Room1Code.GDNoButtonObjects2});gdjs.Room1Code.eventsList4 = function(runtimeScene) {

{


gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DialogueBox"), gdjs.Room1Code.GDDialogueBoxObjects2);
/* Reuse gdjs.Room1Code.GDNoButtonObjects2 */
gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.Room1Code.GDYesButtonObjects2);
/* Reuse gdjs.Room1Code.GDsafeDialogueObjects2 */
{for(var i = 0, len = gdjs.Room1Code.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDDialogueBoxObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Room1Code.GDsafeDialogueObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDsafeDialogueObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Room1Code.GDYesButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDYesButtonObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Room1Code.GDNoButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDNoButtonObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDBotObjects1Objects = Hashtable.newFrom({"Bot": gdjs.Room1Code.GDBotObjects1});gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDSafeObjects1Objects = Hashtable.newFrom({"Safe": gdjs.Room1Code.GDSafeObjects1});gdjs.Room1Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bot"), gdjs.Room1Code.GDBotObjects2);
gdjs.copyArray(runtimeScene.getObjects("Safe"), gdjs.Room1Code.GDSafeObjects2);

gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDBotObjects2Objects, gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDSafeObjects2Objects, 150, false);
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Room1Code.GDSafeObjects2 */
{for(var i = 0, len = gdjs.Room1Code.GDSafeObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDSafeObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Room1Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.Room1Code.GDYesButtonObjects2);

gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDYesButtonObjects2Objects, runtimeScene, true, true);
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Room1Code.GDYesButtonObjects2 */
{for(var i = 0, len = gdjs.Room1Code.GDYesButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDYesButtonObjects2[i].setColor("155;155;155");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.Room1Code.GDYesButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("safeDialogue"), gdjs.Room1Code.GDsafeDialogueObjects2);

gdjs.Room1Code.condition0IsTrue_0.val = false;
gdjs.Room1Code.condition1IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDYesButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Room1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Room1Code.GDsafeDialogueObjects2.length;i<l;++i) {
    if ( gdjs.Room1Code.GDsafeDialogueObjects2[i].isVisible() ) {
        gdjs.Room1Code.condition1IsTrue_0.val = true;
        gdjs.Room1Code.GDsafeDialogueObjects2[k] = gdjs.Room1Code.GDsafeDialogueObjects2[i];
        ++k;
    }
}
gdjs.Room1Code.GDsafeDialogueObjects2.length = k;}}
if (gdjs.Room1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Room1Code.GDYesButtonObjects2 */
{for(var i = 0, len = gdjs.Room1Code.GDYesButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDYesButtonObjects2[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.Room1Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.Room1Code.GDNoButtonObjects2);

gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDNoButtonObjects2Objects, runtimeScene, true, true);
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Room1Code.GDNoButtonObjects2 */
{for(var i = 0, len = gdjs.Room1Code.GDNoButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDNoButtonObjects2[i].setColor("155;155;155");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.Room1Code.GDNoButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("safeDialogue"), gdjs.Room1Code.GDsafeDialogueObjects2);

gdjs.Room1Code.condition0IsTrue_0.val = false;
gdjs.Room1Code.condition1IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDNoButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Room1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Room1Code.GDsafeDialogueObjects2.length;i<l;++i) {
    if ( gdjs.Room1Code.GDsafeDialogueObjects2[i].isVisible() ) {
        gdjs.Room1Code.condition1IsTrue_0.val = true;
        gdjs.Room1Code.GDsafeDialogueObjects2[k] = gdjs.Room1Code.GDsafeDialogueObjects2[i];
        ++k;
    }
}
gdjs.Room1Code.GDsafeDialogueObjects2.length = k;}}
if (gdjs.Room1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Room1Code.GDNoButtonObjects2 */
{for(var i = 0, len = gdjs.Room1Code.GDNoButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDNoButtonObjects2[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.Room1Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bot"), gdjs.Room1Code.GDBotObjects1);
gdjs.copyArray(runtimeScene.getObjects("Safe"), gdjs.Room1Code.GDSafeObjects1);

gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDBotObjects1Objects, gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDSafeObjects1Objects, 150, true);
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Room1Code.GDSafeObjects1 */
{for(var i = 0, len = gdjs.Room1Code.GDSafeObjects1.length ;i < len;++i) {
    gdjs.Room1Code.GDSafeObjects1[i].setAnimation(0);
}
}}

}


};gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDBotObjects2Objects = Hashtable.newFrom({"Bot": gdjs.Room1Code.GDBotObjects2});gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDWaskebasketObjects2Objects = Hashtable.newFrom({"Waskebasket": gdjs.Room1Code.GDWaskebasketObjects2});gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDWaskebasketObjects3Objects = Hashtable.newFrom({"Waskebasket": gdjs.Room1Code.GDWaskebasketObjects3});gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDDialogueBoxObjects2Objects = Hashtable.newFrom({"DialogueBox": gdjs.Room1Code.GDDialogueBoxObjects2});gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDYesButtonObjects2Objects = Hashtable.newFrom({"YesButton": gdjs.Room1Code.GDYesButtonObjects2});gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDNoButtonObjects2Objects = Hashtable.newFrom({"NoButton": gdjs.Room1Code.GDNoButtonObjects2});gdjs.Room1Code.eventsList6 = function(runtimeScene) {

{

/* Reuse gdjs.Room1Code.GDWaskebasketObjects2 */

gdjs.Room1Code.condition0IsTrue_0.val = false;
{
{gdjs.Room1Code.conditionTrue_1 = gdjs.Room1Code.condition0IsTrue_0;
gdjs.Room1Code.GDWaskebasketObjects2_1final.length = 0;gdjs.Room1Code.condition0IsTrue_1.val = false;
gdjs.Room1Code.condition1IsTrue_1.val = false;
gdjs.Room1Code.condition2IsTrue_1.val = false;
{
gdjs.Room1Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Room1Code.condition0IsTrue_1.val ) {
    gdjs.Room1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Room1Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Room1Code.condition1IsTrue_1.val ) {
    gdjs.Room1Code.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(gdjs.Room1Code.GDWaskebasketObjects2, gdjs.Room1Code.GDWaskebasketObjects3);

{gdjs.Room1Code.conditionTrue_2 = gdjs.Room1Code.condition2IsTrue_1;
gdjs.Room1Code.condition0IsTrue_2.val = false;
gdjs.Room1Code.condition1IsTrue_2.val = false;
{
gdjs.Room1Code.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDWaskebasketObjects3Objects, runtimeScene, true, false);
}if ( gdjs.Room1Code.condition0IsTrue_2.val ) {
{
gdjs.Room1Code.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.Room1Code.conditionTrue_2.val = true && gdjs.Room1Code.condition0IsTrue_2.val && gdjs.Room1Code.condition1IsTrue_2.val;
}
if( gdjs.Room1Code.condition2IsTrue_1.val ) {
    gdjs.Room1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Room1Code.GDWaskebasketObjects3.length;j<jLen;++j) {
        if ( gdjs.Room1Code.GDWaskebasketObjects2_1final.indexOf(gdjs.Room1Code.GDWaskebasketObjects3[j]) === -1 )
            gdjs.Room1Code.GDWaskebasketObjects2_1final.push(gdjs.Room1Code.GDWaskebasketObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Room1Code.GDWaskebasketObjects2_1final, gdjs.Room1Code.GDWaskebasketObjects2);
}
}
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("basketDialogue"), gdjs.Room1Code.GDbasketDialogueObjects2);
gdjs.Room1Code.GDDialogueBoxObjects2.length = 0;

gdjs.Room1Code.GDNoButtonObjects2.length = 0;

gdjs.Room1Code.GDYesButtonObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDDialogueBoxObjects2Objects, 50, 525, "");
}{for(var i = 0, len = gdjs.Room1Code.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDDialogueBoxObjects2[i].setHeight(400);
}
}{for(var i = 0, len = gdjs.Room1Code.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDDialogueBoxObjects2[i].setWidth(900);
}
}{for(var i = 0, len = gdjs.Room1Code.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDDialogueBoxObjects2[i].setOpacity(200);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDYesButtonObjects2Objects, 260, 780, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDNoButtonObjects2Objects, 650, 780, "");
}{for(var i = 0, len = gdjs.Room1Code.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDDialogueBoxObjects2[i].setZOrder(200);
}
}{for(var i = 0, len = gdjs.Room1Code.GDYesButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDYesButtonObjects2[i].setZOrder(300);
}
}{for(var i = 0, len = gdjs.Room1Code.GDNoButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDNoButtonObjects2[i].setZOrder(300);
}
}{for(var i = 0, len = gdjs.Room1Code.GDbasketDialogueObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDbasketDialogueObjects2[i].hide(false);
}
}}

}


};gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDYesButtonObjects2Objects = Hashtable.newFrom({"YesButton": gdjs.Room1Code.GDYesButtonObjects2});gdjs.Room1Code.eventsList7 = function(runtimeScene) {

{


gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DialogueBox"), gdjs.Room1Code.GDDialogueBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.Room1Code.GDNoButtonObjects2);
/* Reuse gdjs.Room1Code.GDYesButtonObjects2 */
/* Reuse gdjs.Room1Code.GDbasketDialogueObjects2 */
{for(var i = 0, len = gdjs.Room1Code.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDDialogueBoxObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Room1Code.GDbasketDialogueObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDbasketDialogueObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Room1Code.GDYesButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDYesButtonObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Room1Code.GDNoButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDNoButtonObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "TrashPrompt");
}}

}


};gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDNoButtonObjects2Objects = Hashtable.newFrom({"NoButton": gdjs.Room1Code.GDNoButtonObjects2});gdjs.Room1Code.eventsList8 = function(runtimeScene) {

{


gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DialogueBox"), gdjs.Room1Code.GDDialogueBoxObjects2);
/* Reuse gdjs.Room1Code.GDNoButtonObjects2 */
gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.Room1Code.GDYesButtonObjects2);
/* Reuse gdjs.Room1Code.GDbasketDialogueObjects2 */
{for(var i = 0, len = gdjs.Room1Code.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDDialogueBoxObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Room1Code.GDbasketDialogueObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDbasketDialogueObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Room1Code.GDYesButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDYesButtonObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Room1Code.GDNoButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDNoButtonObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDBotObjects1Objects = Hashtable.newFrom({"Bot": gdjs.Room1Code.GDBotObjects1});gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDWaskebasketObjects1Objects = Hashtable.newFrom({"Waskebasket": gdjs.Room1Code.GDWaskebasketObjects1});gdjs.Room1Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bot"), gdjs.Room1Code.GDBotObjects2);
gdjs.copyArray(runtimeScene.getObjects("Waskebasket"), gdjs.Room1Code.GDWaskebasketObjects2);

gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDBotObjects2Objects, gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDWaskebasketObjects2Objects, 200, false);
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Room1Code.GDWaskebasketObjects2 */
{for(var i = 0, len = gdjs.Room1Code.GDWaskebasketObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDWaskebasketObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Room1Code.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.Room1Code.GDYesButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("basketDialogue"), gdjs.Room1Code.GDbasketDialogueObjects2);

gdjs.Room1Code.condition0IsTrue_0.val = false;
gdjs.Room1Code.condition1IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDYesButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Room1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Room1Code.GDbasketDialogueObjects2.length;i<l;++i) {
    if ( gdjs.Room1Code.GDbasketDialogueObjects2[i].isVisible() ) {
        gdjs.Room1Code.condition1IsTrue_0.val = true;
        gdjs.Room1Code.GDbasketDialogueObjects2[k] = gdjs.Room1Code.GDbasketDialogueObjects2[i];
        ++k;
    }
}
gdjs.Room1Code.GDbasketDialogueObjects2.length = k;}}
if (gdjs.Room1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Room1Code.GDYesButtonObjects2 */
{for(var i = 0, len = gdjs.Room1Code.GDYesButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDYesButtonObjects2[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.Room1Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.Room1Code.GDNoButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("basketDialogue"), gdjs.Room1Code.GDbasketDialogueObjects2);

gdjs.Room1Code.condition0IsTrue_0.val = false;
gdjs.Room1Code.condition1IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDNoButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Room1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Room1Code.GDbasketDialogueObjects2.length;i<l;++i) {
    if ( gdjs.Room1Code.GDbasketDialogueObjects2[i].isVisible() ) {
        gdjs.Room1Code.condition1IsTrue_0.val = true;
        gdjs.Room1Code.GDbasketDialogueObjects2[k] = gdjs.Room1Code.GDbasketDialogueObjects2[i];
        ++k;
    }
}
gdjs.Room1Code.GDbasketDialogueObjects2.length = k;}}
if (gdjs.Room1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Room1Code.GDNoButtonObjects2 */
{for(var i = 0, len = gdjs.Room1Code.GDNoButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDNoButtonObjects2[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.Room1Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bot"), gdjs.Room1Code.GDBotObjects1);
gdjs.copyArray(runtimeScene.getObjects("Waskebasket"), gdjs.Room1Code.GDWaskebasketObjects1);

gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDBotObjects1Objects, gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDWaskebasketObjects1Objects, 200, true);
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Room1Code.GDWaskebasketObjects1 */
{for(var i = 0, len = gdjs.Room1Code.GDWaskebasketObjects1.length ;i < len;++i) {
    gdjs.Room1Code.GDWaskebasketObjects1[i].setAnimation(0);
}
}}

}


};gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDBotObjects2Objects = Hashtable.newFrom({"Bot": gdjs.Room1Code.GDBotObjects2});gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDDeskObjects2Objects = Hashtable.newFrom({"Desk": gdjs.Room1Code.GDDeskObjects2});gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDDeskObjects3Objects = Hashtable.newFrom({"Desk": gdjs.Room1Code.GDDeskObjects3});gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDDialogueBoxObjects2Objects = Hashtable.newFrom({"DialogueBox": gdjs.Room1Code.GDDialogueBoxObjects2});gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDYesButtonObjects2Objects = Hashtable.newFrom({"YesButton": gdjs.Room1Code.GDYesButtonObjects2});gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDNoButtonObjects2Objects = Hashtable.newFrom({"NoButton": gdjs.Room1Code.GDNoButtonObjects2});gdjs.Room1Code.eventsList10 = function(runtimeScene) {

{

/* Reuse gdjs.Room1Code.GDDeskObjects2 */

gdjs.Room1Code.condition0IsTrue_0.val = false;
{
{gdjs.Room1Code.conditionTrue_1 = gdjs.Room1Code.condition0IsTrue_0;
gdjs.Room1Code.GDDeskObjects2_1final.length = 0;gdjs.Room1Code.condition0IsTrue_1.val = false;
gdjs.Room1Code.condition1IsTrue_1.val = false;
gdjs.Room1Code.condition2IsTrue_1.val = false;
{
gdjs.Room1Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Room1Code.condition0IsTrue_1.val ) {
    gdjs.Room1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Room1Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Room1Code.condition1IsTrue_1.val ) {
    gdjs.Room1Code.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(gdjs.Room1Code.GDDeskObjects2, gdjs.Room1Code.GDDeskObjects3);

{gdjs.Room1Code.conditionTrue_2 = gdjs.Room1Code.condition2IsTrue_1;
gdjs.Room1Code.condition0IsTrue_2.val = false;
gdjs.Room1Code.condition1IsTrue_2.val = false;
{
gdjs.Room1Code.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDDeskObjects3Objects, runtimeScene, true, false);
}if ( gdjs.Room1Code.condition0IsTrue_2.val ) {
{
gdjs.Room1Code.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.Room1Code.conditionTrue_2.val = true && gdjs.Room1Code.condition0IsTrue_2.val && gdjs.Room1Code.condition1IsTrue_2.val;
}
if( gdjs.Room1Code.condition2IsTrue_1.val ) {
    gdjs.Room1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Room1Code.GDDeskObjects3.length;j<jLen;++j) {
        if ( gdjs.Room1Code.GDDeskObjects2_1final.indexOf(gdjs.Room1Code.GDDeskObjects3[j]) === -1 )
            gdjs.Room1Code.GDDeskObjects2_1final.push(gdjs.Room1Code.GDDeskObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Room1Code.GDDeskObjects2_1final, gdjs.Room1Code.GDDeskObjects2);
}
}
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("deskDialogue"), gdjs.Room1Code.GDdeskDialogueObjects2);
gdjs.Room1Code.GDDialogueBoxObjects2.length = 0;

gdjs.Room1Code.GDNoButtonObjects2.length = 0;

gdjs.Room1Code.GDYesButtonObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDDialogueBoxObjects2Objects, 50, 525, "");
}{for(var i = 0, len = gdjs.Room1Code.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDDialogueBoxObjects2[i].setHeight(400);
}
}{for(var i = 0, len = gdjs.Room1Code.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDDialogueBoxObjects2[i].setWidth(900);
}
}{for(var i = 0, len = gdjs.Room1Code.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDDialogueBoxObjects2[i].setOpacity(200);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDYesButtonObjects2Objects, 260, 780, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDNoButtonObjects2Objects, 650, 780, "");
}{for(var i = 0, len = gdjs.Room1Code.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDDialogueBoxObjects2[i].setZOrder(200);
}
}{for(var i = 0, len = gdjs.Room1Code.GDYesButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDYesButtonObjects2[i].setZOrder(300);
}
}{for(var i = 0, len = gdjs.Room1Code.GDNoButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDNoButtonObjects2[i].setZOrder(300);
}
}{for(var i = 0, len = gdjs.Room1Code.GDdeskDialogueObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDdeskDialogueObjects2[i].hide(false);
}
}}

}


};gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDYesButtonObjects2Objects = Hashtable.newFrom({"YesButton": gdjs.Room1Code.GDYesButtonObjects2});gdjs.Room1Code.eventsList11 = function(runtimeScene) {

{


gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DialogueBox"), gdjs.Room1Code.GDDialogueBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.Room1Code.GDNoButtonObjects2);
/* Reuse gdjs.Room1Code.GDYesButtonObjects2 */
/* Reuse gdjs.Room1Code.GDdeskDialogueObjects2 */
{for(var i = 0, len = gdjs.Room1Code.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDDialogueBoxObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Room1Code.GDdeskDialogueObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDdeskDialogueObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Room1Code.GDYesButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDYesButtonObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Room1Code.GDNoButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDNoButtonObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "DeskPrompt");
}}

}


};gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDNoButtonObjects2Objects = Hashtable.newFrom({"NoButton": gdjs.Room1Code.GDNoButtonObjects2});gdjs.Room1Code.eventsList12 = function(runtimeScene) {

{


gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DialogueBox"), gdjs.Room1Code.GDDialogueBoxObjects2);
/* Reuse gdjs.Room1Code.GDNoButtonObjects2 */
gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.Room1Code.GDYesButtonObjects2);
/* Reuse gdjs.Room1Code.GDdeskDialogueObjects2 */
{for(var i = 0, len = gdjs.Room1Code.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDDialogueBoxObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Room1Code.GDdeskDialogueObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDdeskDialogueObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Room1Code.GDYesButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDYesButtonObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Room1Code.GDNoButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDNoButtonObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDBotObjects1Objects = Hashtable.newFrom({"Bot": gdjs.Room1Code.GDBotObjects1});gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDDeskObjects1Objects = Hashtable.newFrom({"Desk": gdjs.Room1Code.GDDeskObjects1});gdjs.Room1Code.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bot"), gdjs.Room1Code.GDBotObjects2);
gdjs.copyArray(runtimeScene.getObjects("Desk"), gdjs.Room1Code.GDDeskObjects2);

gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDBotObjects2Objects, gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDDeskObjects2Objects, 200, false);
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Room1Code.GDDeskObjects2 */
{for(var i = 0, len = gdjs.Room1Code.GDDeskObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDDeskObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Room1Code.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.Room1Code.GDYesButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("deskDialogue"), gdjs.Room1Code.GDdeskDialogueObjects2);

gdjs.Room1Code.condition0IsTrue_0.val = false;
gdjs.Room1Code.condition1IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDYesButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Room1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Room1Code.GDdeskDialogueObjects2.length;i<l;++i) {
    if ( gdjs.Room1Code.GDdeskDialogueObjects2[i].isVisible() ) {
        gdjs.Room1Code.condition1IsTrue_0.val = true;
        gdjs.Room1Code.GDdeskDialogueObjects2[k] = gdjs.Room1Code.GDdeskDialogueObjects2[i];
        ++k;
    }
}
gdjs.Room1Code.GDdeskDialogueObjects2.length = k;}}
if (gdjs.Room1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Room1Code.GDYesButtonObjects2 */
{for(var i = 0, len = gdjs.Room1Code.GDYesButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDYesButtonObjects2[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.Room1Code.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.Room1Code.GDNoButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("deskDialogue"), gdjs.Room1Code.GDdeskDialogueObjects2);

gdjs.Room1Code.condition0IsTrue_0.val = false;
gdjs.Room1Code.condition1IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDNoButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Room1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Room1Code.GDdeskDialogueObjects2.length;i<l;++i) {
    if ( gdjs.Room1Code.GDdeskDialogueObjects2[i].isVisible() ) {
        gdjs.Room1Code.condition1IsTrue_0.val = true;
        gdjs.Room1Code.GDdeskDialogueObjects2[k] = gdjs.Room1Code.GDdeskDialogueObjects2[i];
        ++k;
    }
}
gdjs.Room1Code.GDdeskDialogueObjects2.length = k;}}
if (gdjs.Room1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Room1Code.GDNoButtonObjects2 */
{for(var i = 0, len = gdjs.Room1Code.GDNoButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDNoButtonObjects2[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.Room1Code.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bot"), gdjs.Room1Code.GDBotObjects1);
gdjs.copyArray(runtimeScene.getObjects("Desk"), gdjs.Room1Code.GDDeskObjects1);

gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDBotObjects1Objects, gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDDeskObjects1Objects, 200, true);
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Room1Code.GDDeskObjects1 */
{for(var i = 0, len = gdjs.Room1Code.GDDeskObjects1.length ;i < len;++i) {
    gdjs.Room1Code.GDDeskObjects1[i].setAnimation(0);
}
}}

}


};gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.Room1Code.GDObstacleObjects1});gdjs.Room1Code.eventsList14 = function(runtimeScene) {

{


gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DeskClue"), gdjs.Room1Code.GDDeskClueObjects2);
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Room1Code.GDObstacleObjects2);
gdjs.copyArray(runtimeScene.getObjects("SafeClue"), gdjs.Room1Code.GDSafeClueObjects2);
gdjs.copyArray(runtimeScene.getObjects("TrashClue"), gdjs.Room1Code.GDTrashClueObjects2);
gdjs.copyArray(runtimeScene.getObjects("basketDialogue"), gdjs.Room1Code.GDbasketDialogueObjects2);
gdjs.copyArray(runtimeScene.getObjects("deskDialogue"), gdjs.Room1Code.GDdeskDialogueObjects2);
gdjs.copyArray(runtimeScene.getObjects("lockDialogue"), gdjs.Room1Code.GDlockDialogueObjects2);
gdjs.copyArray(runtimeScene.getObjects("safeDialogue"), gdjs.Room1Code.GDsafeDialogueObjects2);
{for(var i = 0, len = gdjs.Room1Code.GDObstacleObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDObstacleObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Room1Code.GDsafeDialogueObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDsafeDialogueObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Room1Code.GDbasketDialogueObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDbasketDialogueObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Room1Code.GDdeskDialogueObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDdeskDialogueObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Room1Code.GDSafeClueObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDSafeClueObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Room1Code.GDTrashClueObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDTrashClueObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Room1Code.GDDeskClueObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDDeskClueObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Room1Code.GDlockDialogueObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDlockDialogueObjects2[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(600);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(60);
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Bot"), gdjs.Room1Code.GDBotObjects1);
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Room1Code.GDObstacleObjects1);
{for(var i = 0, len = gdjs.Room1Code.GDBotObjects1.length ;i < len;++i) {
    gdjs.Room1Code.GDBotObjects1[i].separateFromObjectsList(gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDObstacleObjects1Objects, false);
}
}}

}


};gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDBotObjects2Objects = Hashtable.newFrom({"Bot": gdjs.Room1Code.GDBotObjects2});gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDLockObjects2Objects = Hashtable.newFrom({"Lock": gdjs.Room1Code.GDLockObjects2});gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDLockObjects3Objects = Hashtable.newFrom({"Lock": gdjs.Room1Code.GDLockObjects3});gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDDialogueBoxObjects2Objects = Hashtable.newFrom({"DialogueBox": gdjs.Room1Code.GDDialogueBoxObjects2});gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDYesButtonObjects2Objects = Hashtable.newFrom({"YesButton": gdjs.Room1Code.GDYesButtonObjects2});gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDNoButtonObjects2Objects = Hashtable.newFrom({"NoButton": gdjs.Room1Code.GDNoButtonObjects2});gdjs.Room1Code.eventsList15 = function(runtimeScene) {

{

/* Reuse gdjs.Room1Code.GDLockObjects2 */

gdjs.Room1Code.condition0IsTrue_0.val = false;
{
{gdjs.Room1Code.conditionTrue_1 = gdjs.Room1Code.condition0IsTrue_0;
gdjs.Room1Code.GDLockObjects2_1final.length = 0;gdjs.Room1Code.condition0IsTrue_1.val = false;
gdjs.Room1Code.condition1IsTrue_1.val = false;
gdjs.Room1Code.condition2IsTrue_1.val = false;
{
gdjs.Room1Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Room1Code.condition0IsTrue_1.val ) {
    gdjs.Room1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Room1Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Room1Code.condition1IsTrue_1.val ) {
    gdjs.Room1Code.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(gdjs.Room1Code.GDLockObjects2, gdjs.Room1Code.GDLockObjects3);

{gdjs.Room1Code.conditionTrue_2 = gdjs.Room1Code.condition2IsTrue_1;
gdjs.Room1Code.condition0IsTrue_2.val = false;
gdjs.Room1Code.condition1IsTrue_2.val = false;
{
gdjs.Room1Code.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDLockObjects3Objects, runtimeScene, true, false);
}if ( gdjs.Room1Code.condition0IsTrue_2.val ) {
{
gdjs.Room1Code.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.Room1Code.conditionTrue_2.val = true && gdjs.Room1Code.condition0IsTrue_2.val && gdjs.Room1Code.condition1IsTrue_2.val;
}
if( gdjs.Room1Code.condition2IsTrue_1.val ) {
    gdjs.Room1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Room1Code.GDLockObjects3.length;j<jLen;++j) {
        if ( gdjs.Room1Code.GDLockObjects2_1final.indexOf(gdjs.Room1Code.GDLockObjects3[j]) === -1 )
            gdjs.Room1Code.GDLockObjects2_1final.push(gdjs.Room1Code.GDLockObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Room1Code.GDLockObjects2_1final, gdjs.Room1Code.GDLockObjects2);
}
}
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("lockDialogue"), gdjs.Room1Code.GDlockDialogueObjects2);
gdjs.Room1Code.GDDialogueBoxObjects2.length = 0;

gdjs.Room1Code.GDNoButtonObjects2.length = 0;

gdjs.Room1Code.GDYesButtonObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDDialogueBoxObjects2Objects, 50, 525, "");
}{for(var i = 0, len = gdjs.Room1Code.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDDialogueBoxObjects2[i].setHeight(400);
}
}{for(var i = 0, len = gdjs.Room1Code.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDDialogueBoxObjects2[i].setWidth(900);
}
}{for(var i = 0, len = gdjs.Room1Code.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDDialogueBoxObjects2[i].setOpacity(200);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDYesButtonObjects2Objects, 260, 780, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDNoButtonObjects2Objects, 650, 780, "");
}{for(var i = 0, len = gdjs.Room1Code.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDDialogueBoxObjects2[i].setZOrder(200);
}
}{for(var i = 0, len = gdjs.Room1Code.GDYesButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDYesButtonObjects2[i].setZOrder(300);
}
}{for(var i = 0, len = gdjs.Room1Code.GDNoButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDNoButtonObjects2[i].setZOrder(300);
}
}{for(var i = 0, len = gdjs.Room1Code.GDlockDialogueObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDlockDialogueObjects2[i].hide(false);
}
}}

}


};gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDYesButtonObjects2Objects = Hashtable.newFrom({"YesButton": gdjs.Room1Code.GDYesButtonObjects2});gdjs.Room1Code.eventsList16 = function(runtimeScene) {

{


gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DialogueBox"), gdjs.Room1Code.GDDialogueBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.Room1Code.GDNoButtonObjects2);
/* Reuse gdjs.Room1Code.GDYesButtonObjects2 */
/* Reuse gdjs.Room1Code.GDlockDialogueObjects2 */
{for(var i = 0, len = gdjs.Room1Code.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDDialogueBoxObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Room1Code.GDlockDialogueObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDlockDialogueObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Room1Code.GDYesButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDYesButtonObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Room1Code.GDNoButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDNoButtonObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "LockPrompt");
}}

}


};gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDNoButtonObjects2Objects = Hashtable.newFrom({"NoButton": gdjs.Room1Code.GDNoButtonObjects2});gdjs.Room1Code.eventsList17 = function(runtimeScene) {

{


gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DialogueBox"), gdjs.Room1Code.GDDialogueBoxObjects2);
/* Reuse gdjs.Room1Code.GDNoButtonObjects2 */
gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.Room1Code.GDYesButtonObjects2);
/* Reuse gdjs.Room1Code.GDlockDialogueObjects2 */
{for(var i = 0, len = gdjs.Room1Code.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDDialogueBoxObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Room1Code.GDlockDialogueObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDlockDialogueObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Room1Code.GDYesButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDYesButtonObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Room1Code.GDNoButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDNoButtonObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDBotObjects1Objects = Hashtable.newFrom({"Bot": gdjs.Room1Code.GDBotObjects1});gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDLockObjects1Objects = Hashtable.newFrom({"Lock": gdjs.Room1Code.GDLockObjects1});gdjs.Room1Code.eventsList18 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bot"), gdjs.Room1Code.GDBotObjects2);
gdjs.copyArray(runtimeScene.getObjects("Lock"), gdjs.Room1Code.GDLockObjects2);

gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDBotObjects2Objects, gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDLockObjects2Objects, 200, false);
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Room1Code.GDLockObjects2 */
{for(var i = 0, len = gdjs.Room1Code.GDLockObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDLockObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Room1Code.eventsList15(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.Room1Code.GDYesButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("lockDialogue"), gdjs.Room1Code.GDlockDialogueObjects2);

gdjs.Room1Code.condition0IsTrue_0.val = false;
gdjs.Room1Code.condition1IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDYesButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Room1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Room1Code.GDlockDialogueObjects2.length;i<l;++i) {
    if ( gdjs.Room1Code.GDlockDialogueObjects2[i].isVisible() ) {
        gdjs.Room1Code.condition1IsTrue_0.val = true;
        gdjs.Room1Code.GDlockDialogueObjects2[k] = gdjs.Room1Code.GDlockDialogueObjects2[i];
        ++k;
    }
}
gdjs.Room1Code.GDlockDialogueObjects2.length = k;}}
if (gdjs.Room1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Room1Code.GDYesButtonObjects2 */
{for(var i = 0, len = gdjs.Room1Code.GDYesButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDYesButtonObjects2[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.Room1Code.eventsList16(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.Room1Code.GDNoButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("lockDialogue"), gdjs.Room1Code.GDlockDialogueObjects2);

gdjs.Room1Code.condition0IsTrue_0.val = false;
gdjs.Room1Code.condition1IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDNoButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Room1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Room1Code.GDlockDialogueObjects2.length;i<l;++i) {
    if ( gdjs.Room1Code.GDlockDialogueObjects2[i].isVisible() ) {
        gdjs.Room1Code.condition1IsTrue_0.val = true;
        gdjs.Room1Code.GDlockDialogueObjects2[k] = gdjs.Room1Code.GDlockDialogueObjects2[i];
        ++k;
    }
}
gdjs.Room1Code.GDlockDialogueObjects2.length = k;}}
if (gdjs.Room1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Room1Code.GDNoButtonObjects2 */
{for(var i = 0, len = gdjs.Room1Code.GDNoButtonObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDNoButtonObjects2[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.Room1Code.eventsList17(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bot"), gdjs.Room1Code.GDBotObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lock"), gdjs.Room1Code.GDLockObjects1);

gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDBotObjects1Objects, gdjs.Room1Code.mapOfGDgdjs_46Room1Code_46GDLockObjects1Objects, 200, true);
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Room1Code.GDLockObjects1 */
{for(var i = 0, len = gdjs.Room1Code.GDLockObjects1.length ;i < len;++i) {
    gdjs.Room1Code.GDLockObjects1[i].setAnimation(0);
}
}}

}


};gdjs.Room1Code.eventsList19 = function(runtimeScene) {

{


gdjs.Room1Code.condition0IsTrue_0.val = false;
gdjs.Room1Code.condition1IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) < 1800;
}if ( gdjs.Room1Code.condition0IsTrue_0.val ) {
{
gdjs.Room1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > 540;
}}
if (gdjs.Room1Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimerMinutes"), gdjs.Room1Code.GDTimerMinutesObjects2);
{for(var i = 0, len = gdjs.Room1Code.GDTimerMinutesObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDTimerMinutesObjects2[i].setString(gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) / 60)) + ":");
}
}}

}


{


gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) < 600;
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimerMinutes"), gdjs.Room1Code.GDTimerMinutesObjects2);
{for(var i = 0, len = gdjs.Room1Code.GDTimerMinutesObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDTimerMinutesObjects2[i].setString("0" + gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) / 60)) + ":");
}
}}

}


{


gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) < 1800;
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{


gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) < 0;
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(60);
}}

}


{


gdjs.Room1Code.condition0IsTrue_0.val = false;
gdjs.Room1Code.condition1IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) < 60;
}if ( gdjs.Room1Code.condition0IsTrue_0.val ) {
{
gdjs.Room1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) > 9;
}}
if (gdjs.Room1Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimerSeconds"), gdjs.Room1Code.GDTimerSecondsObjects2);
{for(var i = 0, len = gdjs.Room1Code.GDTimerSecondsObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDTimerSecondsObjects2[i].setString(gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)))));
}
}}

}


{


gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) < 10;
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimerSeconds"), gdjs.Room1Code.GDTimerSecondsObjects2);
{for(var i = 0, len = gdjs.Room1Code.GDTimerSecondsObjects2.length ;i < len;++i) {
    gdjs.Room1Code.GDTimerSecondsObjects2[i].setString("0" + gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)))));
}
}}

}


{


gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) <= 0;
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


};gdjs.Room1Code.eventsList20 = function(runtimeScene) {

{


{
{runtimeScene.getGame().getVariables().getFromIndex(3).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
{ //Subevents
gdjs.Room1Code.eventsList19(runtimeScene);} //End of subevents
}

}


};gdjs.Room1Code.eventsList21 = function(runtimeScene) {

{


gdjs.Room1Code.eventsList1(runtimeScene);
}


{


gdjs.Room1Code.eventsList5(runtimeScene);
}


{


gdjs.Room1Code.eventsList9(runtimeScene);
}


{


gdjs.Room1Code.eventsList13(runtimeScene);
}


{


gdjs.Room1Code.eventsList14(runtimeScene);
}


{


gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SafeClue"), gdjs.Room1Code.GDSafeClueObjects1);
{for(var i = 0, len = gdjs.Room1Code.GDSafeClueObjects1.length ;i < len;++i) {
    gdjs.Room1Code.GDSafeClueObjects1[i].hide(false);
}
}}

}


{


gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TrashClue"), gdjs.Room1Code.GDTrashClueObjects1);
{for(var i = 0, len = gdjs.Room1Code.GDTrashClueObjects1.length ;i < len;++i) {
    gdjs.Room1Code.GDTrashClueObjects1[i].hide(false);
}
}}

}


{


gdjs.Room1Code.condition0IsTrue_0.val = false;
{
gdjs.Room1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.Room1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DeskClue"), gdjs.Room1Code.GDDeskClueObjects1);
{for(var i = 0, len = gdjs.Room1Code.GDDeskClueObjects1.length ;i < len;++i) {
    gdjs.Room1Code.GDDeskClueObjects1[i].hide(false);
}
}}

}


{


gdjs.Room1Code.eventsList18(runtimeScene);
}


{


gdjs.Room1Code.eventsList20(runtimeScene);
}


};

gdjs.Room1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Room1Code.GDBotObjects1.length = 0;
gdjs.Room1Code.GDBotObjects2.length = 0;
gdjs.Room1Code.GDBotObjects3.length = 0;
gdjs.Room1Code.GDBotObjects4.length = 0;
gdjs.Room1Code.GDRoom1Objects1.length = 0;
gdjs.Room1Code.GDRoom1Objects2.length = 0;
gdjs.Room1Code.GDRoom1Objects3.length = 0;
gdjs.Room1Code.GDRoom1Objects4.length = 0;
gdjs.Room1Code.GDObstacleObjects1.length = 0;
gdjs.Room1Code.GDObstacleObjects2.length = 0;
gdjs.Room1Code.GDObstacleObjects3.length = 0;
gdjs.Room1Code.GDObstacleObjects4.length = 0;
gdjs.Room1Code.GDSafeObjects1.length = 0;
gdjs.Room1Code.GDSafeObjects2.length = 0;
gdjs.Room1Code.GDSafeObjects3.length = 0;
gdjs.Room1Code.GDSafeObjects4.length = 0;
gdjs.Room1Code.GDSafeDialogueObjects1.length = 0;
gdjs.Room1Code.GDSafeDialogueObjects2.length = 0;
gdjs.Room1Code.GDSafeDialogueObjects3.length = 0;
gdjs.Room1Code.GDSafeDialogueObjects4.length = 0;
gdjs.Room1Code.GDYesButtonObjects1.length = 0;
gdjs.Room1Code.GDYesButtonObjects2.length = 0;
gdjs.Room1Code.GDYesButtonObjects3.length = 0;
gdjs.Room1Code.GDYesButtonObjects4.length = 0;
gdjs.Room1Code.GDNoButtonObjects1.length = 0;
gdjs.Room1Code.GDNoButtonObjects2.length = 0;
gdjs.Room1Code.GDNoButtonObjects3.length = 0;
gdjs.Room1Code.GDNoButtonObjects4.length = 0;
gdjs.Room1Code.GDDialogueBoxObjects1.length = 0;
gdjs.Room1Code.GDDialogueBoxObjects2.length = 0;
gdjs.Room1Code.GDDialogueBoxObjects3.length = 0;
gdjs.Room1Code.GDDialogueBoxObjects4.length = 0;
gdjs.Room1Code.GDWaskebasketObjects1.length = 0;
gdjs.Room1Code.GDWaskebasketObjects2.length = 0;
gdjs.Room1Code.GDWaskebasketObjects3.length = 0;
gdjs.Room1Code.GDWaskebasketObjects4.length = 0;
gdjs.Room1Code.GDbasketDialogueObjects1.length = 0;
gdjs.Room1Code.GDbasketDialogueObjects2.length = 0;
gdjs.Room1Code.GDbasketDialogueObjects3.length = 0;
gdjs.Room1Code.GDbasketDialogueObjects4.length = 0;
gdjs.Room1Code.GDsafeDialogueObjects1.length = 0;
gdjs.Room1Code.GDsafeDialogueObjects2.length = 0;
gdjs.Room1Code.GDsafeDialogueObjects3.length = 0;
gdjs.Room1Code.GDsafeDialogueObjects4.length = 0;
gdjs.Room1Code.GDlockDialogueObjects1.length = 0;
gdjs.Room1Code.GDlockDialogueObjects2.length = 0;
gdjs.Room1Code.GDlockDialogueObjects3.length = 0;
gdjs.Room1Code.GDlockDialogueObjects4.length = 0;
gdjs.Room1Code.GDdeskDialogueObjects1.length = 0;
gdjs.Room1Code.GDdeskDialogueObjects2.length = 0;
gdjs.Room1Code.GDdeskDialogueObjects3.length = 0;
gdjs.Room1Code.GDdeskDialogueObjects4.length = 0;
gdjs.Room1Code.GDDeskObjects1.length = 0;
gdjs.Room1Code.GDDeskObjects2.length = 0;
gdjs.Room1Code.GDDeskObjects3.length = 0;
gdjs.Room1Code.GDDeskObjects4.length = 0;
gdjs.Room1Code.GDSafeClueObjects1.length = 0;
gdjs.Room1Code.GDSafeClueObjects2.length = 0;
gdjs.Room1Code.GDSafeClueObjects3.length = 0;
gdjs.Room1Code.GDSafeClueObjects4.length = 0;
gdjs.Room1Code.GDTrashClueObjects1.length = 0;
gdjs.Room1Code.GDTrashClueObjects2.length = 0;
gdjs.Room1Code.GDTrashClueObjects3.length = 0;
gdjs.Room1Code.GDTrashClueObjects4.length = 0;
gdjs.Room1Code.GDDeskClueObjects1.length = 0;
gdjs.Room1Code.GDDeskClueObjects2.length = 0;
gdjs.Room1Code.GDDeskClueObjects3.length = 0;
gdjs.Room1Code.GDDeskClueObjects4.length = 0;
gdjs.Room1Code.GDLockObjects1.length = 0;
gdjs.Room1Code.GDLockObjects2.length = 0;
gdjs.Room1Code.GDLockObjects3.length = 0;
gdjs.Room1Code.GDLockObjects4.length = 0;
gdjs.Room1Code.GDTimerSecondsObjects1.length = 0;
gdjs.Room1Code.GDTimerSecondsObjects2.length = 0;
gdjs.Room1Code.GDTimerSecondsObjects3.length = 0;
gdjs.Room1Code.GDTimerSecondsObjects4.length = 0;
gdjs.Room1Code.GDTimerMinutesObjects1.length = 0;
gdjs.Room1Code.GDTimerMinutesObjects2.length = 0;
gdjs.Room1Code.GDTimerMinutesObjects3.length = 0;
gdjs.Room1Code.GDTimerMinutesObjects4.length = 0;

gdjs.Room1Code.eventsList21(runtimeScene);
return;

}

gdjs['Room1Code'] = gdjs.Room1Code;
