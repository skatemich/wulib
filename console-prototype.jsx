﻿#target Illustrator// @include lukaszLibrary.jsx;/*var mySymb = app.activeDocument.symbols[0];var myArray = [ 0, 1, 2];$.write('------ \n');$.write(typeof mySymb+'\n');$.write(mySymb+"\n");$.write(typeof mySymb === 'object');//printObj(mySymb);    var doc = app.activeDocument;    var itemsToLoop = [ doc.layers, doc.symbolItems ];    //print(doc.layers[0].Layer.name);    //$.write(doc.symbolItems[1].symbol.name);        var s = "z";         $.writeln(s.replace("s", "r"));*/       //var newS = new SymbolName.findAndReplace("Cube","pooo");   /*function doActionOnLayer(layerName, functionName) {    for (var i = 0; i < numberOfLayers; i++) {         var customName = layerName; //layerName should be string        var myLayer = app.activeDocument.layers[i];        var myLayer = myLayer.name;        alert(myLayer);        if (customName == myLayer) {            var myLayerIndex = i;            alert(myLayerIndex);            functionName(myLayerIndex);            return myLayerIndex;        }    }}function testFunction(myLayerIndex) {    var alertL = app.activeDocument.layers[myLayerIndex];    var alertL = alertL.name;     alert(alertL); //this is to test concept}//run the actiondoActionOnLayer("note", testFunction);*/var row;var thePath = File.openDialog();function readPref (thePath) {  if (File(thePath).exists == true) {    var file = File(thePath);    file.open("r");    file.encoding= 'BINARY';    var theText = file.read();    file.close();    var row = theText.split("\r"); // splits string into array    for(var i = 0; i < row.length; i++){        print('==========start rows========');        print("row number "+i+" : "+row[i]+"\n ----");        var columnItems = row[i].split(",");        print('==========start columns========');        for(var j = 0; j < columnItems.length; j++){            //print('COLUMN LENGTH: '+columnItems.length+'\r');            /*            print('COLUMN1: '+columnItems[0]+'\r');            print('COLUMN2: '+columnItems[1]+'\r');            print('COLUMN3: '+columnItems[2]+'\r');            print('COLUMN4: '+columnItems[3]+'\r');            */            print('columns:'+columnItems[j]);        }        print('==========end columns========');        print('==========end rows========');    }  }};readPref(thePath);print('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');