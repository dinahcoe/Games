gdjs.StartGameCode = {};
gdjs.StartGameCode.GDTitleScreenObjects1= [];
gdjs.StartGameCode.GDTitleScreenObjects2= [];
gdjs.StartGameCode.GDStartObjects1= [];
gdjs.StartGameCode.GDStartObjects2= [];
gdjs.StartGameCode.GDControlsObjects1= [];
gdjs.StartGameCode.GDControlsObjects2= [];
gdjs.StartGameCode.GDInstructionsObjects1= [];
gdjs.StartGameCode.GDInstructionsObjects2= [];
gdjs.StartGameCode.GDCreditsObjects1= [];
gdjs.StartGameCode.GDCreditsObjects2= [];
gdjs.StartGameCode.GDDialogueBoxObjects1= [];
gdjs.StartGameCode.GDDialogueBoxObjects2= [];
gdjs.StartGameCode.GDDemoObjects1= [];
gdjs.StartGameCode.GDDemoObjects2= [];
gdjs.StartGameCode.GDcontrolsDialogueObjects1= [];
gdjs.StartGameCode.GDcontrolsDialogueObjects2= [];
gdjs.StartGameCode.GDinstructionDialogueObjects1= [];
gdjs.StartGameCode.GDinstructionDialogueObjects2= [];
gdjs.StartGameCode.GDcreditsDialogueObjects1= [];
gdjs.StartGameCode.GDcreditsDialogueObjects2= [];
gdjs.StartGameCode.GDXObjects1= [];
gdjs.StartGameCode.GDXObjects2= [];
gdjs.StartGameCode.GDAnyKeyObjects1= [];
gdjs.StartGameCode.GDAnyKeyObjects2= [];

gdjs.StartGameCode.conditionTrue_0 = {val:false};
gdjs.StartGameCode.condition0IsTrue_0 = {val:false};
gdjs.StartGameCode.condition1IsTrue_0 = {val:false};
gdjs.StartGameCode.condition2IsTrue_0 = {val:false};
gdjs.StartGameCode.condition3IsTrue_0 = {val:false};
gdjs.StartGameCode.condition4IsTrue_0 = {val:false};


gdjs.StartGameCode.mapOfGDgdjs_46StartGameCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.StartGameCode.GDStartObjects1});gdjs.StartGameCode.mapOfGDgdjs_46StartGameCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.StartGameCode.GDStartObjects1});gdjs.StartGameCode.eventsList0 = function(runtimeScene) {

{


gdjs.StartGameCode.condition0IsTrue_0.val = false;
{
gdjs.StartGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.StartGameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Room1", false);
}}

}


};gdjs.StartGameCode.mapOfGDgdjs_46StartGameCode_46GDXObjects1Objects = Hashtable.newFrom({"X": gdjs.StartGameCode.GDXObjects1});gdjs.StartGameCode.mapOfGDgdjs_46StartGameCode_46GDXObjects1Objects = Hashtable.newFrom({"X": gdjs.StartGameCode.GDXObjects1});gdjs.StartGameCode.eventsList1 = function(runtimeScene) {

{


gdjs.StartGameCode.condition0IsTrue_0.val = false;
{
gdjs.StartGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.StartGameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DialogueBox"), gdjs.StartGameCode.GDDialogueBoxObjects1);
/* Reuse gdjs.StartGameCode.GDXObjects1 */
gdjs.copyArray(runtimeScene.getObjects("controlsDialogue"), gdjs.StartGameCode.GDcontrolsDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("creditsDialogue"), gdjs.StartGameCode.GDcreditsDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("instructionDialogue"), gdjs.StartGameCode.GDinstructionDialogueObjects1);
{for(var i = 0, len = gdjs.StartGameCode.GDDialogueBoxObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDDialogueBoxObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.StartGameCode.GDcreditsDialogueObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDcreditsDialogueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.StartGameCode.GDXObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDXObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.StartGameCode.GDcontrolsDialogueObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDcontrolsDialogueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.StartGameCode.GDinstructionDialogueObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDinstructionDialogueObjects1[i].hide();
}
}}

}


};gdjs.StartGameCode.eventsList2 = function(runtimeScene) {

{


gdjs.StartGameCode.condition0IsTrue_0.val = false;
{
gdjs.StartGameCode.condition0IsTrue_0.val = !(gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 1));
}if (gdjs.StartGameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "251461__joshuaempyre__arcade-music-loop.wav", 1, true, 100, 1);
}}

}


};gdjs.StartGameCode.eventsList3 = function(runtimeScene) {

};gdjs.StartGameCode.mapOfGDgdjs_46StartGameCode_46GDCreditsObjects1Objects = Hashtable.newFrom({"Credits": gdjs.StartGameCode.GDCreditsObjects1});gdjs.StartGameCode.mapOfGDgdjs_46StartGameCode_46GDCreditsObjects1Objects = Hashtable.newFrom({"Credits": gdjs.StartGameCode.GDCreditsObjects1});gdjs.StartGameCode.eventsList4 = function(runtimeScene) {

{


gdjs.StartGameCode.condition0IsTrue_0.val = false;
{
gdjs.StartGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.StartGameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DialogueBox"), gdjs.StartGameCode.GDDialogueBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("X"), gdjs.StartGameCode.GDXObjects1);
/* Reuse gdjs.StartGameCode.GDcreditsDialogueObjects1 */
{for(var i = 0, len = gdjs.StartGameCode.GDDialogueBoxObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDDialogueBoxObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.StartGameCode.GDcreditsDialogueObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDcreditsDialogueObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.StartGameCode.GDXObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDXObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.StartGameCode.GDDialogueBoxObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDDialogueBoxObjects1[i].setOpacity(150);
}
}}

}


};gdjs.StartGameCode.eventsList5 = function(runtimeScene) {

};gdjs.StartGameCode.mapOfGDgdjs_46StartGameCode_46GDControlsObjects1Objects = Hashtable.newFrom({"Controls": gdjs.StartGameCode.GDControlsObjects1});gdjs.StartGameCode.mapOfGDgdjs_46StartGameCode_46GDControlsObjects1Objects = Hashtable.newFrom({"Controls": gdjs.StartGameCode.GDControlsObjects1});gdjs.StartGameCode.eventsList6 = function(runtimeScene) {

{


gdjs.StartGameCode.condition0IsTrue_0.val = false;
{
gdjs.StartGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.StartGameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DialogueBox"), gdjs.StartGameCode.GDDialogueBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("X"), gdjs.StartGameCode.GDXObjects1);
/* Reuse gdjs.StartGameCode.GDcontrolsDialogueObjects1 */
{for(var i = 0, len = gdjs.StartGameCode.GDDialogueBoxObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDDialogueBoxObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.StartGameCode.GDcontrolsDialogueObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDcontrolsDialogueObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.StartGameCode.GDXObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDXObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.StartGameCode.GDDialogueBoxObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDDialogueBoxObjects1[i].setOpacity(150);
}
}}

}


};gdjs.StartGameCode.eventsList7 = function(runtimeScene) {

};gdjs.StartGameCode.mapOfGDgdjs_46StartGameCode_46GDInstructionsObjects1Objects = Hashtable.newFrom({"Instructions": gdjs.StartGameCode.GDInstructionsObjects1});gdjs.StartGameCode.mapOfGDgdjs_46StartGameCode_46GDInstructionsObjects1Objects = Hashtable.newFrom({"Instructions": gdjs.StartGameCode.GDInstructionsObjects1});gdjs.StartGameCode.eventsList8 = function(runtimeScene) {

{


gdjs.StartGameCode.condition0IsTrue_0.val = false;
{
gdjs.StartGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.StartGameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DialogueBox"), gdjs.StartGameCode.GDDialogueBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("X"), gdjs.StartGameCode.GDXObjects1);
/* Reuse gdjs.StartGameCode.GDinstructionDialogueObjects1 */
{for(var i = 0, len = gdjs.StartGameCode.GDDialogueBoxObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDDialogueBoxObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.StartGameCode.GDinstructionDialogueObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDinstructionDialogueObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.StartGameCode.GDXObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDXObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.StartGameCode.GDDialogueBoxObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDDialogueBoxObjects1[i].setOpacity(150);
}
}}

}


};gdjs.StartGameCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.StartGameCode.GDStartObjects1);

gdjs.StartGameCode.condition0IsTrue_0.val = false;
{
gdjs.StartGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartGameCode.mapOfGDgdjs_46StartGameCode_46GDStartObjects1Objects, runtimeScene, true, true);
}if (gdjs.StartGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartGameCode.GDStartObjects1 */
{for(var i = 0, len = gdjs.StartGameCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDStartObjects1[i].setColor("155;155;155");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.StartGameCode.GDStartObjects1);

gdjs.StartGameCode.condition0IsTrue_0.val = false;
gdjs.StartGameCode.condition1IsTrue_0.val = false;
{
gdjs.StartGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartGameCode.mapOfGDgdjs_46StartGameCode_46GDStartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.StartGameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.StartGameCode.GDStartObjects1.length;i<l;++i) {
    if ( gdjs.StartGameCode.GDStartObjects1[i].isVisible() ) {
        gdjs.StartGameCode.condition1IsTrue_0.val = true;
        gdjs.StartGameCode.GDStartObjects1[k] = gdjs.StartGameCode.GDStartObjects1[i];
        ++k;
    }
}
gdjs.StartGameCode.GDStartObjects1.length = k;}}
if (gdjs.StartGameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.StartGameCode.GDStartObjects1 */
{for(var i = 0, len = gdjs.StartGameCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDStartObjects1[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.StartGameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.StartGameCode.condition0IsTrue_0.val = false;
{
gdjs.StartGameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartGameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DialogueBox"), gdjs.StartGameCode.GDDialogueBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.StartGameCode.GDStartObjects1);
gdjs.copyArray(runtimeScene.getObjects("X"), gdjs.StartGameCode.GDXObjects1);
gdjs.copyArray(runtimeScene.getObjects("controlsDialogue"), gdjs.StartGameCode.GDcontrolsDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("creditsDialogue"), gdjs.StartGameCode.GDcreditsDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("instructionDialogue"), gdjs.StartGameCode.GDinstructionDialogueObjects1);
{for(var i = 0, len = gdjs.StartGameCode.GDDialogueBoxObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDDialogueBoxObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.StartGameCode.GDcreditsDialogueObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDcreditsDialogueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.StartGameCode.GDXObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDXObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.StartGameCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDStartObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.StartGameCode.GDcontrolsDialogueObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDcontrolsDialogueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.StartGameCode.GDinstructionDialogueObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDinstructionDialogueObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("X"), gdjs.StartGameCode.GDXObjects1);

gdjs.StartGameCode.condition0IsTrue_0.val = false;
{
gdjs.StartGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartGameCode.mapOfGDgdjs_46StartGameCode_46GDXObjects1Objects, runtimeScene, true, true);
}if (gdjs.StartGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartGameCode.GDXObjects1 */
{for(var i = 0, len = gdjs.StartGameCode.GDXObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDXObjects1[i].setOpacity(150);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("X"), gdjs.StartGameCode.GDXObjects1);

gdjs.StartGameCode.condition0IsTrue_0.val = false;
{
gdjs.StartGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartGameCode.mapOfGDgdjs_46StartGameCode_46GDXObjects1Objects, runtimeScene, true, false);
}if (gdjs.StartGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartGameCode.GDXObjects1 */
{for(var i = 0, len = gdjs.StartGameCode.GDXObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDXObjects1[i].setOpacity(255);
}
}
{ //Subevents
gdjs.StartGameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.StartGameCode.condition0IsTrue_0.val = false;
{
gdjs.StartGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.StartGameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AnyKey"), gdjs.StartGameCode.GDAnyKeyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.StartGameCode.GDStartObjects1);
{for(var i = 0, len = gdjs.StartGameCode.GDAnyKeyObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDAnyKeyObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.StartGameCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDStartObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.StartGameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.StartGameCode.eventsList3(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.StartGameCode.GDCreditsObjects1);

gdjs.StartGameCode.condition0IsTrue_0.val = false;
{
gdjs.StartGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartGameCode.mapOfGDgdjs_46StartGameCode_46GDCreditsObjects1Objects, runtimeScene, true, true);
}if (gdjs.StartGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartGameCode.GDCreditsObjects1 */
{for(var i = 0, len = gdjs.StartGameCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDCreditsObjects1[i].setColor("155;155;155");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.StartGameCode.GDCreditsObjects1);
gdjs.copyArray(runtimeScene.getObjects("controlsDialogue"), gdjs.StartGameCode.GDcontrolsDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("creditsDialogue"), gdjs.StartGameCode.GDcreditsDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("instructionDialogue"), gdjs.StartGameCode.GDinstructionDialogueObjects1);

gdjs.StartGameCode.condition0IsTrue_0.val = false;
gdjs.StartGameCode.condition1IsTrue_0.val = false;
gdjs.StartGameCode.condition2IsTrue_0.val = false;
gdjs.StartGameCode.condition3IsTrue_0.val = false;
{
gdjs.StartGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartGameCode.mapOfGDgdjs_46StartGameCode_46GDCreditsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.StartGameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.StartGameCode.GDcreditsDialogueObjects1.length;i<l;++i) {
    if ( !(gdjs.StartGameCode.GDcreditsDialogueObjects1[i].isVisible()) ) {
        gdjs.StartGameCode.condition1IsTrue_0.val = true;
        gdjs.StartGameCode.GDcreditsDialogueObjects1[k] = gdjs.StartGameCode.GDcreditsDialogueObjects1[i];
        ++k;
    }
}
gdjs.StartGameCode.GDcreditsDialogueObjects1.length = k;}if ( gdjs.StartGameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.StartGameCode.GDcontrolsDialogueObjects1.length;i<l;++i) {
    if ( !(gdjs.StartGameCode.GDcontrolsDialogueObjects1[i].isVisible()) ) {
        gdjs.StartGameCode.condition2IsTrue_0.val = true;
        gdjs.StartGameCode.GDcontrolsDialogueObjects1[k] = gdjs.StartGameCode.GDcontrolsDialogueObjects1[i];
        ++k;
    }
}
gdjs.StartGameCode.GDcontrolsDialogueObjects1.length = k;}if ( gdjs.StartGameCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.StartGameCode.GDinstructionDialogueObjects1.length;i<l;++i) {
    if ( !(gdjs.StartGameCode.GDinstructionDialogueObjects1[i].isVisible()) ) {
        gdjs.StartGameCode.condition3IsTrue_0.val = true;
        gdjs.StartGameCode.GDinstructionDialogueObjects1[k] = gdjs.StartGameCode.GDinstructionDialogueObjects1[i];
        ++k;
    }
}
gdjs.StartGameCode.GDinstructionDialogueObjects1.length = k;}}
}
}
if (gdjs.StartGameCode.condition3IsTrue_0.val) {
/* Reuse gdjs.StartGameCode.GDCreditsObjects1 */
{for(var i = 0, len = gdjs.StartGameCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDCreditsObjects1[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.StartGameCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.StartGameCode.eventsList5(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Controls"), gdjs.StartGameCode.GDControlsObjects1);

gdjs.StartGameCode.condition0IsTrue_0.val = false;
{
gdjs.StartGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartGameCode.mapOfGDgdjs_46StartGameCode_46GDControlsObjects1Objects, runtimeScene, true, true);
}if (gdjs.StartGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartGameCode.GDControlsObjects1 */
{for(var i = 0, len = gdjs.StartGameCode.GDControlsObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDControlsObjects1[i].setColor("155;155;155");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Controls"), gdjs.StartGameCode.GDControlsObjects1);
gdjs.copyArray(runtimeScene.getObjects("controlsDialogue"), gdjs.StartGameCode.GDcontrolsDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("creditsDialogue"), gdjs.StartGameCode.GDcreditsDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("instructionDialogue"), gdjs.StartGameCode.GDinstructionDialogueObjects1);

gdjs.StartGameCode.condition0IsTrue_0.val = false;
gdjs.StartGameCode.condition1IsTrue_0.val = false;
gdjs.StartGameCode.condition2IsTrue_0.val = false;
gdjs.StartGameCode.condition3IsTrue_0.val = false;
{
gdjs.StartGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartGameCode.mapOfGDgdjs_46StartGameCode_46GDControlsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.StartGameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.StartGameCode.GDcontrolsDialogueObjects1.length;i<l;++i) {
    if ( !(gdjs.StartGameCode.GDcontrolsDialogueObjects1[i].isVisible()) ) {
        gdjs.StartGameCode.condition1IsTrue_0.val = true;
        gdjs.StartGameCode.GDcontrolsDialogueObjects1[k] = gdjs.StartGameCode.GDcontrolsDialogueObjects1[i];
        ++k;
    }
}
gdjs.StartGameCode.GDcontrolsDialogueObjects1.length = k;}if ( gdjs.StartGameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.StartGameCode.GDcreditsDialogueObjects1.length;i<l;++i) {
    if ( !(gdjs.StartGameCode.GDcreditsDialogueObjects1[i].isVisible()) ) {
        gdjs.StartGameCode.condition2IsTrue_0.val = true;
        gdjs.StartGameCode.GDcreditsDialogueObjects1[k] = gdjs.StartGameCode.GDcreditsDialogueObjects1[i];
        ++k;
    }
}
gdjs.StartGameCode.GDcreditsDialogueObjects1.length = k;}if ( gdjs.StartGameCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.StartGameCode.GDinstructionDialogueObjects1.length;i<l;++i) {
    if ( !(gdjs.StartGameCode.GDinstructionDialogueObjects1[i].isVisible()) ) {
        gdjs.StartGameCode.condition3IsTrue_0.val = true;
        gdjs.StartGameCode.GDinstructionDialogueObjects1[k] = gdjs.StartGameCode.GDinstructionDialogueObjects1[i];
        ++k;
    }
}
gdjs.StartGameCode.GDinstructionDialogueObjects1.length = k;}}
}
}
if (gdjs.StartGameCode.condition3IsTrue_0.val) {
/* Reuse gdjs.StartGameCode.GDControlsObjects1 */
{for(var i = 0, len = gdjs.StartGameCode.GDControlsObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDControlsObjects1[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.StartGameCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


gdjs.StartGameCode.eventsList7(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Instructions"), gdjs.StartGameCode.GDInstructionsObjects1);

gdjs.StartGameCode.condition0IsTrue_0.val = false;
{
gdjs.StartGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartGameCode.mapOfGDgdjs_46StartGameCode_46GDInstructionsObjects1Objects, runtimeScene, true, true);
}if (gdjs.StartGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartGameCode.GDInstructionsObjects1 */
{for(var i = 0, len = gdjs.StartGameCode.GDInstructionsObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDInstructionsObjects1[i].setColor("155;155;155");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Instructions"), gdjs.StartGameCode.GDInstructionsObjects1);
gdjs.copyArray(runtimeScene.getObjects("controlsDialogue"), gdjs.StartGameCode.GDcontrolsDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("creditsDialogue"), gdjs.StartGameCode.GDcreditsDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("instructionDialogue"), gdjs.StartGameCode.GDinstructionDialogueObjects1);

gdjs.StartGameCode.condition0IsTrue_0.val = false;
gdjs.StartGameCode.condition1IsTrue_0.val = false;
gdjs.StartGameCode.condition2IsTrue_0.val = false;
gdjs.StartGameCode.condition3IsTrue_0.val = false;
{
gdjs.StartGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartGameCode.mapOfGDgdjs_46StartGameCode_46GDInstructionsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.StartGameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.StartGameCode.GDcontrolsDialogueObjects1.length;i<l;++i) {
    if ( !(gdjs.StartGameCode.GDcontrolsDialogueObjects1[i].isVisible()) ) {
        gdjs.StartGameCode.condition1IsTrue_0.val = true;
        gdjs.StartGameCode.GDcontrolsDialogueObjects1[k] = gdjs.StartGameCode.GDcontrolsDialogueObjects1[i];
        ++k;
    }
}
gdjs.StartGameCode.GDcontrolsDialogueObjects1.length = k;}if ( gdjs.StartGameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.StartGameCode.GDcreditsDialogueObjects1.length;i<l;++i) {
    if ( !(gdjs.StartGameCode.GDcreditsDialogueObjects1[i].isVisible()) ) {
        gdjs.StartGameCode.condition2IsTrue_0.val = true;
        gdjs.StartGameCode.GDcreditsDialogueObjects1[k] = gdjs.StartGameCode.GDcreditsDialogueObjects1[i];
        ++k;
    }
}
gdjs.StartGameCode.GDcreditsDialogueObjects1.length = k;}if ( gdjs.StartGameCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.StartGameCode.GDinstructionDialogueObjects1.length;i<l;++i) {
    if ( !(gdjs.StartGameCode.GDinstructionDialogueObjects1[i].isVisible()) ) {
        gdjs.StartGameCode.condition3IsTrue_0.val = true;
        gdjs.StartGameCode.GDinstructionDialogueObjects1[k] = gdjs.StartGameCode.GDinstructionDialogueObjects1[i];
        ++k;
    }
}
gdjs.StartGameCode.GDinstructionDialogueObjects1.length = k;}}
}
}
if (gdjs.StartGameCode.condition3IsTrue_0.val) {
/* Reuse gdjs.StartGameCode.GDInstructionsObjects1 */
{for(var i = 0, len = gdjs.StartGameCode.GDInstructionsObjects1.length ;i < len;++i) {
    gdjs.StartGameCode.GDInstructionsObjects1[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.StartGameCode.eventsList8(runtimeScene);} //End of subevents
}

}


};

gdjs.StartGameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartGameCode.GDTitleScreenObjects1.length = 0;
gdjs.StartGameCode.GDTitleScreenObjects2.length = 0;
gdjs.StartGameCode.GDStartObjects1.length = 0;
gdjs.StartGameCode.GDStartObjects2.length = 0;
gdjs.StartGameCode.GDControlsObjects1.length = 0;
gdjs.StartGameCode.GDControlsObjects2.length = 0;
gdjs.StartGameCode.GDInstructionsObjects1.length = 0;
gdjs.StartGameCode.GDInstructionsObjects2.length = 0;
gdjs.StartGameCode.GDCreditsObjects1.length = 0;
gdjs.StartGameCode.GDCreditsObjects2.length = 0;
gdjs.StartGameCode.GDDialogueBoxObjects1.length = 0;
gdjs.StartGameCode.GDDialogueBoxObjects2.length = 0;
gdjs.StartGameCode.GDDemoObjects1.length = 0;
gdjs.StartGameCode.GDDemoObjects2.length = 0;
gdjs.StartGameCode.GDcontrolsDialogueObjects1.length = 0;
gdjs.StartGameCode.GDcontrolsDialogueObjects2.length = 0;
gdjs.StartGameCode.GDinstructionDialogueObjects1.length = 0;
gdjs.StartGameCode.GDinstructionDialogueObjects2.length = 0;
gdjs.StartGameCode.GDcreditsDialogueObjects1.length = 0;
gdjs.StartGameCode.GDcreditsDialogueObjects2.length = 0;
gdjs.StartGameCode.GDXObjects1.length = 0;
gdjs.StartGameCode.GDXObjects2.length = 0;
gdjs.StartGameCode.GDAnyKeyObjects1.length = 0;
gdjs.StartGameCode.GDAnyKeyObjects2.length = 0;

gdjs.StartGameCode.eventsList9(runtimeScene);
return;

}

gdjs['StartGameCode'] = gdjs.StartGameCode;
