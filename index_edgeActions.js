/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         var id= sym.getVariable("id");
         
         if(id==undefined){
         	sym.setVariable("mode", "id");
         	sym.play("id");
         }
         else{
         	sym.play("start");
         }
         console.log(id);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${point1}", "click", function(sym, e) {
         var zahl=1;
         
         var mode_temp=mode=sym.getVariable("mode");
         
         		if(mode_temp!=undefined){
         			var mode=sym.getVariable("mode");
         		}
         		else{
         			var mode="false";
         		}
         
         sym.getSymbol("point" + zahl).play(0);
         
         
         if(mode=="id"){
         	 sym.setVariable("id", zahl);
         	 sym.setVariable("mode","live");
         	 sym.play(0);
         }
         
         else{
         
         	 var code_temp=sym.getVariable("code");
         
         	 if(code_temp!=undefined){
         			var code= sym.getVariable("code");
         	 }
         	else{
         			var code="";
         	}
         
         	if(code.length>=3){
         	console.log("in length");
         		code=code.concat("" + zahl + "");
         
         		if(code=="2126"){
         				sym.setVariable("code","");
         				sym.play("free");
         
         		}
         		else{
         				sym.setVariable("code","");
         				sym.play("error");
         		}
         	}
         	else{
         		code=code.concat("" + zahl + "");
         		sym.setVariable("code",code);
         	}
         }
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2066, function(sym, e) {
         sym.getComposition().getStage().setVariable("video","LALALA");
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.play("code_see");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5786, function(sym, e) {
         sym.setVariable("video","no");
         
         // Pause a video track 
         sym.getSymbol("player_german").$("_1de")[0].pause();
         sym.getSymbol("player_german").$("_2de")[0].pause();
         sym.getSymbol("player_german").$("_3de")[0].pause();
         sym.getSymbol("player_german").$("_4de")[0].pause();
         sym.getSymbol("player_german").$("_5de")[0].pause();
         sym.getSymbol("player_german").$("_6de")[0].pause();
         sym.getSymbol("player_german").$("_7de")[0].pause();
         sym.getSymbol("player_german").$("_8de")[0].pause();
         
         
         // Pause a video track 
         sym.getSymbol("player_eng").$("_1en")[0].pause();
         sym.getSymbol("player_eng").$("_2en")[0].pause();
         sym.getSymbol("player_eng").$("_3en")[0].pause();
         sym.getSymbol("player_eng").$("_4en")[0].pause();
         sym.getSymbol("player_eng").$("_5en")[0].pause();
         sym.getSymbol("player_eng").$("_6en")[0].pause();
         sym.getSymbol("player_eng").$("_7en")[0].pause();
         sym.getSymbol("player_eng").$("_8en")[0].pause();
         
         
         console.log("im menu: " + sym.getVariable("video"));
         
         sym.getSymbol("timer").stop();
         sym.getSymbol("timer").play(0);
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${german}", "click", function(sym, e) {
         sym.play("german");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${eng}", "click", function(sym, e) {
         sym.play("eng");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${point2}", "click", function(sym, e) {
         var zahl=2;
         
         var mode_temp=mode=sym.getVariable("mode");
         
         		if(mode_temp!=undefined){
         			var mode=sym.getVariable("mode");
         		}
         		else{
         			var mode="false";
         		}
         
         sym.getSymbol("point" + zahl).play(0);
         
         
         if(mode=="id"){
         	 sym.setVariable("id", zahl);
         	 sym.setVariable("mode","live");
         	 sym.play(0);
         }
         
         else{
         
         	 var code_temp=sym.getVariable("code");
         
         	 if(code_temp!=undefined){
         			var code= sym.getVariable("code");
         	 }
         	else{
         			var code="";
         	}
         
         	if(code.length>=3){
         	console.log("in length");
         		code=code.concat("" + zahl + "");
         
         		if(code=="2126"){
         				sym.setVariable("code","");
         				sym.play("free");
         
         		}
         		else{
         				sym.setVariable("code","");
         				sym.play("error");
         		}
         	}
         	else{
         		code=code.concat("" + zahl + "");
         		sym.setVariable("code",code);
         	}
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${point3}", "click", function(sym, e) {
         var zahl=3;
         var mode=sym.getVariable("mode");
         
         
         sym.getSymbol("point" + zahl).play(0);
         
         
         if(mode=="id"){
         	 sym.setVariable("id", zahl);
         	 sym.setVariable("mode","live");
         	 sym.play(0);
         }
         
         else{
         
         	 var code_temp=sym.getVariable("code");
         
         	 if(code_temp!=undefined){
         			code= sym.getVariable("code");
         	 }
         	else{
         			code="";
         	}
         	console.log("code:" + code);
         
         	if(code.length>=3){
         	console.log("in length");
         		code=code.concat("" + zahl + "");
         
         		if(code=="2126"){
         				sym.setVariable("code","");
         				sym.play("free");
         
         		}
         		else{
         				sym.setVariable("code","");
         				sym.play("error");
         		}
         	}
         	else{
         		code=code.concat("" + zahl + "");
         		sym.setVariable("code",code);
         	}
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${point4}", "click", function(sym, e) {
         var zahl=4;
         var mode=sym.getVariable("mode");
         
         
         sym.getSymbol("point" + zahl).play(0);
         
         
         if(mode=="id"){
         	 sym.setVariable("id", zahl);
         	 sym.setVariable("mode","live");
         	 sym.play(0);
         }
         
         else{
         
         	 var code_temp=sym.getVariable("code");
         
         	 if(code_temp!=undefined){
         			code= sym.getVariable("code");
         	 }
         	else{
         			code="";
         	}
         	console.log("code:" + code);
         
         	if(code.length>=3){
         	console.log("in length");
         		code=code.concat("" + zahl + "");
         
         		if(code=="2126"){
         				sym.setVariable("code","");
         				sym.play("free");
         
         		}
         		else{
         				sym.setVariable("code","");
         				sym.play("error");
         		}
         	}
         	else{
         		code=code.concat("" + zahl + "");
         		sym.setVariable("code",code);
         	}
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${point5}", "click", function(sym, e) {
         var zahl=5;
         var mode=sym.getVariable("mode");
         
         
         sym.getSymbol("point" + zahl).play(0);
         
         
         if(mode=="id"){
         	 sym.setVariable("id", zahl);
         	 sym.setVariable("mode","live");
         	 sym.play(0);
         }
         
         else{
         
         	 var code_temp=sym.getVariable("code");
         
         	 if(code_temp!=undefined){
         			code= sym.getVariable("code");
         	 }
         	else{
         			code="";
         	}
         	console.log("code:" + code);
         
         	if(code.length>=3){
         	console.log("in length");
         		code=code.concat("" + zahl + "");
         
         		if(code=="2126"){
         				sym.setVariable("code","");
         				sym.play("free");
         
         		}
         		else{
         				sym.setVariable("code","");
         				sym.play("error");
         		}
         	}
         	else{
         		code=code.concat("" + zahl + "");
         		sym.setVariable("code",code);
         	}
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${point6}", "click", function(sym, e) {
         var zahl=6;
         var mode=sym.getVariable("mode");
         
         
         sym.getSymbol("point" + zahl).play(0);
         
         
         if(mode=="id"){
         	 sym.setVariable("id", zahl);
         	 sym.setVariable("mode","live");
         	 sym.play(0);
         }
         
         else{
         
         	 var code_temp=sym.getVariable("code");
         
         	 if(code_temp!=undefined){
         			code= sym.getVariable("code");
         	 }
         	else{
         			code="";
         	}
         	console.log("code:" + code);
         
         	if(code.length>=3){
         	console.log("in length");
         		code=code.concat("" + zahl + "");
         
         		if(code=="2126"){
         				sym.setVariable("code","");
         				sym.play("free");
         
         		}
         		else{
         				sym.setVariable("code","");
         				sym.play("error");
         		}
         	}
         	else{
         		code=code.concat("" + zahl + "");
         		sym.setVariable("code",code);
         	}
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${point7}", "click", function(sym, e) {
         var zahl=7;
         var mode=sym.getVariable("mode");
         
         
         sym.getSymbol("point" + zahl).play(0);
         
         
         if(mode=="id"){
         	 sym.setVariable("id", zahl);
         	 sym.setVariable("mode","live");
         	 sym.play(0);
         }
         
         else{
         
         	 var code_temp=sym.getVariable("code");
         
         	 if(code_temp!=undefined){
         			code= sym.getVariable("code");
         	 }
         	else{
         			code="";
         	}
         	console.log("code:" + code);
         
         	if(code.length>=3){
         	console.log("in length");
         		code=code.concat("" + zahl + "");
         
         		if(code=="2126"){
         				sym.setVariable("code","");
         				sym.play("free");
         
         		}
         		else{
         				sym.setVariable("code","");
         				sym.play("error");
         		}
         	}
         	else{
         		code=code.concat("" + zahl + "");
         		sym.setVariable("code",code);
         	}
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${point8}", "click", function(sym, e) {
         var zahl=8;
         var mode=sym.getVariable("mode");
         
         
         sym.getSymbol("point" + zahl).play(0);
         
         
         if(mode=="id"){
         	 sym.setVariable("id", zahl);
         	 sym.setVariable("mode","live");
         	 sym.play(0);
         }
         
         else{
         
         	 var code_temp=sym.getVariable("code");
         
         	 if(code_temp!=undefined){
         			code= sym.getVariable("code");
         	 }
         	else{
         			code="";
         	}
         	console.log("code:" + code);
         
         	if(code.length>=3){
         	console.log("in length");
         		code=code.concat("" + zahl + "");
         
         		if(code=="2126"){
         				sym.setVariable("code","");
         				sym.play("free");
         
         		}
         		else{
         				sym.setVariable("code","");
         				sym.play("error");
         		}
         	}
         	else{
         		code=code.concat("" + zahl + "");
         		sym.setVariable("code",code);
         	}
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${point9}", "click", function(sym, e) {
         var zahl=9;
         var mode=sym.getVariable("mode");
         
         
         sym.getSymbol("point" + zahl).play(0);
         
         
         if(mode=="id"){
         	 sym.setVariable("id", zahl);
         	 sym.setVariable("mode","live");
         	 sym.play(0);
         }
         
         else{
         
         	 var code_temp=sym.getVariable("code");
         
         	 if(code_temp!=undefined){
         			code= sym.getVariable("code");
         	 }
         	else{
         			code="";
         	}
         	console.log("code:" + code);
         
         	if(code.length>=3){
         	console.log("in length");
         		code=code.concat("" + zahl + "");
         
         		if(code=="2126"){
         				sym.setVariable("code","");
         				sym.play("free");
         
         		}
         		else{
         				sym.setVariable("code","");
         				sym.play("error");
         		}
         	}
         	else{
         		code=code.concat("" + zahl + "");
         		sym.setVariable("code",code);
         	}
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${point0}", "click", function(sym, e) {
         var zahl=0;
         var mode=sym.getVariable("mode");
         
         sym.getSymbol("point" + zahl).play(0);
         
         
         if(mode=="id"){
         	 sym.setVariable("id", zahl);
         	 sym.setVariable("mode","live");
         	 sym.play(0);
         }
         
         else{
         
         	 var code_temp=sym.getVariable("code");
         
         	 if(code_temp!=undefined){
         			code= sym.getVariable("code");
         	 }
         	else{
         			code="";
         	}
         	console.log("code:" + code);
         
         	if(code.length>=3){
         	console.log("in length");
         		code=code.concat("" + zahl + "");
         
         		if(code=="2126"){
         				sym.setVariable("code","");
         				sym.play("free");
         
         		}
         		else{
         				sym.setVariable("code","");
         				sym.play("error");
         		}
         	}
         	else{
         		code=code.concat("" + zahl + "");
         		sym.setVariable("code",code);
         	}
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${loop}", "click", function(sym, e) {
         sym.play("code");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7045, function(sym, e) {
         
         sym.setVariable("video","play");
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9040, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "click", function(sym, e) {
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("timer").stop();
         sym.getSymbol("timer").play(0);
         

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         
         sym.$("_1de").bind('ended', function ()  
         { 
         sym.play();
         });
         
         sym.$("_2de").bind('ended', function ()  
         { 
         sym.play();
         });
         
         
         sym.$("_3de").bind('ended', function ()  
         { 
         sym.play();
         });
         
         sym.$("_4de").bind('ended', function ()  
         { 
         sym.play();
         });
         
         sym.$("_5de").bind('ended', function ()  
         { 
         sym.play();
         });
         
         sym.$("_6de").bind('ended', function ()  
         { 
         sym.play();
         });
         
         sym.$("_7de").bind('ended', function ()  
         { 
         sym.play();
         });
         
         sym.$("_8de").bind('ended', function ()  
         { 
         sym.play();
         });
         
         
         
         
         
         sym.$("_1en").bind('ended', function ()  
         { 
         sym.play();
         });
         
         sym.$("_2en").bind('ended', function ()  
         { 
         sym.play();
         });
         
         
         sym.$("_3en").bind('ended', function ()  
         { 
         sym.play();
         });
         
         sym.$("_4en").bind('ended', function ()  
         { 
         sym.play();
         });
         
         sym.$("_5en").bind('ended', function ()  
         { 
         sym.play();
         });
         
         sym.$("_6en").bind('ended', function ()  
         { 
         sym.play();
         });
         
         sym.$("_7en").bind('ended', function ()  
         { 
         sym.play();
         });
         
         sym.$("_8en").bind('ended', function ()  
         { 
         sym.play();
         }); 

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'point1'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("point1");
   //Edge symbol end:'point1'

   //=========================================================
   
   //Edge symbol: 'loop'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
         var id=sym.getComposition().getStage().getVariable("id");
         sym.getComposition().getStage().getSymbol("timer").stop();
         
         
         
         
         console.log("loop id:" + id);
         
         sym.play(""+id+"");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.play("loop1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19000, function(sym, e) {
         sym.play("loop2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29000, function(sym, e) {
         sym.play("loop3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 39000, function(sym, e) {
         sym.play("loop4");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 49000, function(sym, e) {
         sym.play("loop5");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 59000, function(sym, e) {
         sym.play("loop6");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 69000, function(sym, e) {
         sym.play("loop7");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 79000, function(sym, e) {
         sym.play("loop8");

      });
      //Edge binding end

   })("loop");
   //Edge symbol end:'loop'

   //=========================================================
   
   //Edge symbol: 'player_german'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         
         sym.$("_1de").bind('ended', function ()  
         { 
         sym.play();
         });
         
         sym.$("_2de").bind('ended', function ()  
         { 
         sym.play();
         });
         
         
         sym.$("_3de").bind('ended', function ()  
         { 
         sym.play();
         });
         
         sym.$("_4de").bind('ended', function ()  
         { 
         sym.play();
         });
         
         sym.$("_5de").bind('ended', function ()  
         { 
         sym.play();
         });
         
         sym.$("_6de").bind('ended', function ()  
         { 
         sym.play();
         });
         
         sym.$("_7de").bind('ended', function ()  
         { 
         sym.play();
         });
         
         sym.$("_8de").bind('ended', function ()  
         { 
         sym.play();
         });
         
         
         
         
         
         sym.$("_1en").bind('ended', function ()  
         { 
         sym.play();
         });
         
         sym.$("_2en").bind('ended', function ()  
         { 
         sym.play();
         });
         
         
         sym.$("_3en").bind('ended', function ()  
         { 
         sym.play();
         });
         
         sym.$("_4en").bind('ended', function ()  
         { 
         sym.play();
         });
         
         sym.$("_5en").bind('ended', function ()  
         { 
         sym.play();
         });
         
         sym.$("_6en").bind('ended', function ()  
         { 
         sym.play();
         });
         
         sym.$("_7en").bind('ended', function ()  
         { 
         sym.play();
         });
         
         sym.$("_8en").bind('ended', function ()  
         { 
         sym.play();
         });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
         var id=sym.getComposition().getStage().getVariable("id");
         sym.getComposition().getStage().getSymbol("timer").stop();
         
         
         
         
         console.log("german id:" + id);
         
         sym.play(""+id+"");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("timer").stop();
         
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         
         sym.getComposition().getStage().play("menu");
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("timer").stop();
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         
         sym.getComposition().getStage().play("menu");
         
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("timer").stop();
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         
         sym.getComposition().getStage().play("menu");
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("timer").stop();
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
         
         sym.getComposition().getStage().play("menu");
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("timer").stop();
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         
         sym.getComposition().getStage().play("menu");
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("timer").stop();
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         
         sym.getComposition().getStage().play("menu");
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("timer").stop();
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("timer").stop();
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24000, function(sym, e) {
         
         sym.getComposition().getStage().play("menu");
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${close-icon}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         
         sym.getComposition().getStage().play("menu");
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("player_german");
   //Edge symbol end:'player_german'

   //=========================================================
   
   //Edge symbol: 'point2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("point2");
   //Edge symbol end:'point2'

   //=========================================================
   
   //Edge symbol: 'point3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("point3");
   //Edge symbol end:'point3'

   //=========================================================
   
   //Edge symbol: 'point4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("point4");
   //Edge symbol end:'point4'

   //=========================================================
   
   //Edge symbol: 'point5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("point5");
   //Edge symbol end:'point5'

   //=========================================================
   
   //Edge symbol: 'point6'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("point6");
   //Edge symbol end:'point6'

   //=========================================================
   
   //Edge symbol: 'point7'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("point7");
   //Edge symbol end:'point7'

   //=========================================================
   
   //Edge symbol: 'point8'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("point8");
   //Edge symbol end:'point8'

   //=========================================================
   
   //Edge symbol: 'point9'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("point9");
   //Edge symbol end:'point9'

   //=========================================================
   
   //Edge symbol: 'point0'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("point0");
   //Edge symbol end:'point0'

   //=========================================================
   
   //Edge symbol: 'player_eng'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
         var id=sym.getComposition().getStage().getVariable("id");
         sym.getComposition().getStage().getSymbol("timer").stop();
         
         
         
         
         console.log("english id:" + id);
         
         sym.play(""+id+"");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("timer").stop();
         
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("timer").stop();
         
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("timer").stop();
         
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("timer").stop();
         
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("timer").stop();
         
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("timer").stop();
         
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("timer").stop();
         
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("timer").stop();
         
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.getComposition().getStage().play("menu");
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.getComposition().getStage().play("menu");
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.getComposition().getStage().play("menu");
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
         sym.getComposition().getStage().play("menu");
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.getComposition().getStage().play("menu");
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         sym.getComposition().getStage().play("menu");
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.getComposition().getStage().play("menu");
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24000, function(sym, e) {
         sym.getComposition().getStage().play("menu");
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${close-icon_e22}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("player_eng");
   //Edge symbol end:'player_eng'

   //=========================================================
   
   //Edge symbol: 'timer'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         console.log("timer end");
         var is_temp=sym.getComposition().getStage().getVariable("video");
         
         
         if(is_temp!=undefined){
         	var is=sym.getComposition().getStage().getVariable("video");
         	console.log("is_temp:" + is);
         }
         else{
         	var is="no";
         }
         
         if(is!="play"){
         	sym.getComposition().getStage().play("start");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         console.log("timer start");

      });
      //Edge binding end

   })("timer");
   //Edge symbol end:'timer'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-11281921");