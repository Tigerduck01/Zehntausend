(function(e){function t(t){for(var i,o,a=t[0],l=t[1],s=t[2],p=0,d=[];p<a.length;p++)o=a[p],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,a=1;a<n.length;a++){var l=n[a];0!==c[l]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},c={app:0},r=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"069a":function(e,t,n){},"64be":function(e,t,n){"use strict";n("c894")},"99dc":function(e,t,n){"use strict";n("069a")},c894:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23");n("b0c0");function c(e,t,n,c,r,o){var a=Object(i["k"])("PlayerComponent"),l=Object(i["k"])("ActivePlayerComponent");return Object(i["g"])(),Object(i["c"])(i["a"],null,[Object(i["e"])("button",{onClick:t[1]||(t[1]=function(){return e.addPlayer.apply(e,arguments)})}," Spieler hinzufügen "),Object(i["e"])("button",{onClick:t[2]||(t[2]=function(){return e.reset.apply(e,arguments)})}," Punkte zurücksetzen "),(Object(i["g"])(!0),Object(i["c"])(i["a"],null,Object(i["j"])(e.players,(function(t){return Object(i["g"])(),Object(i["c"])("div",{key:t.name,class:"player"},[Object(i["e"])(a,{player:t,onDelete:function(n){return e.removePlayer(t)},onNewName:function(e){return t.name=e}},null,8,["player","onDelete","onNewName"])])})),128)),Object(i["e"])("div",{class:"activePlayer",style:{display:0==e.players.length?"none":""}},[Object(i["e"])(l,{player:e.players[e.activeIndex],onPointsRoundAdded:t[3]||(t[3]=function(t){return e.players[e.activeIndex].pointsRound+=t}),onPointsLost:t[4]||(t[4]=function(t){e.players[e.activeIndex].pointsRound=0,e.activeIndex=(e.activeIndex+1)%e.players.length}),onPointsTaken:t[5]||(t[5]=function(t){e.players[e.activeIndex].points+=t+e.players[e.activeIndex].pointsRound,e.players[e.activeIndex].pointsRound=0,e.activeIndex=(e.activeIndex+1)%e.players.length})},null,8,["player"])],4)],64)}n("4160"),n("c975"),n("a434"),n("159b");var r=Object(i["o"])("data-v-617dcaa0");Object(i["i"])("data-v-617dcaa0");var o=Object(i["d"])(" Punkte: "),a={class:"punkte"};Object(i["h"])();var l=r((function(e,t,n,c,r,l){var s=this,u=Object(i["k"])("DeleteForever"),p=Object(i["k"])("Pencil"),d=Object(i["k"])("CheckCircle"),b=Object(i["k"])("CloseCircle");return Object(i["g"])(),Object(i["c"])("div",null,[Object(i["e"])("button",{onClick:t[1]||(t[1]=function(e){return s.$emit("delete")}),class:"icon",title:"Spieler löschen"},[Object(i["e"])(u)]),Object(i["e"])("div",{style:{display:e.isEditing?"none":""},class:"name"},Object(i["l"])(e.player.name),5),Object(i["e"])("button",{onClick:t[2]||(t[2]=function(t){return e.isEditing=!0}),style:{display:e.isEditing?"none":""},class:"icon",title:"Namen bearbeiten"},[Object(i["e"])(p)],4),Object(i["n"])(Object(i["e"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.name=t}),style:{display:e.isEditing?"":"none"}},null,4),[[i["m"],e.name]]),Object(i["e"])("button",{onClick:t[4]||(t[4]=function(t){e.isEditing=!1,e.$emit("new-name",e.name)}),style:{display:e.isEditing?"":"none"},class:"icon",title:"Übernehmen"},[Object(i["e"])(d)],4),Object(i["e"])("button",{onClick:t[5]||(t[5]=function(t){e.isEditing=!1,e.name=e.player.name}),style:{display:e.isEditing?"":"none"},class:"icon",title:"Abbrechen"},[Object(i["e"])(b)],4),Object(i["e"])("div",null,[o,Object(i["e"])("div",a,Object(i["l"])(e.player.points),1)])])})),s=n("fd65"),u=Object(i["f"])({name:"Player",props:["player"],data:function(){return{name:this.$props.player.name,isEditing:!1,pointsAdd:0}},components:{CheckCircle:s["a"],CloseCircle:s["b"],DeleteForever:s["c"],Pencil:s["d"]}});n("99dc");u.render=l,u.__scopeId="data-v-617dcaa0";var p=u,d=(n("a9e3"),Object(i["o"])("data-v-3ae2f8a1"));Object(i["i"])("data-v-3ae2f8a1");var b={class:"header"},f={class:"overview"},O=Object(i["d"])(" Punkte: "),j={class:"punkte"},y=Object(i["d"])(" Diese Runde: "),v={class:"punkte"},m={class:"input"};Object(i["h"])();var h=d((function(e,t,n,c,r,o){return Object(i["g"])(),Object(i["c"])(i["a"],null,[Object(i["e"])("h3",b,Object(i["l"])(e.player.name),1),Object(i["e"])("div",f,[Object(i["e"])("div",null,[O,Object(i["e"])("div",j,Object(i["l"])(e.player.points),1)]),Object(i["e"])("div",null,[y,Object(i["e"])("div",v,Object(i["l"])(e.player.pointsRound),1)])]),Object(i["e"])("div",m,[Object(i["n"])(Object(i["e"])("input",{type:"number",step:"50","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.pointsAdd=t}),placeholder:"(Punkte)",class:"zahl"},null,512),[[i["m"],e.pointsAdd]]),Object(i["e"])("button",{onClick:t[2]||(t[2]=function(t){e.$emit("points-round-added",Number(e.pointsAdd)),e.pointsAdd=0})}," Weiter "),Object(i["e"])("button",{onClick:t[3]||(t[3]=function(t){e.$emit("points-taken",Number(e.pointsAdd)),e.pointsAdd=0})}," Passe! "),Object(i["e"])("button",{onClick:t[4]||(t[4]=function(t){e.$emit("points-lost"),e.pointsAdd=0})}," Tot! ")])],64)})),k=Object(i["f"])({name:"Player",props:["player"],data:function(){return{name:this.$props.player.name,isEditing:!1,pointsAdd:0}},components:{}});n("ee4d");k.render=h,k.__scopeId="data-v-3ae2f8a1";var g=k,P=n("d4ec"),C=function e(t){Object(P["a"])(this,e),this.name=t,this.points=0,this.pointsRound=0},x=Object(i["f"])({name:"App",components:{PlayerComponent:p,ActivePlayerComponent:g},data:function(){return{players:[new C("Neuer Spieler")],activeIndex:0}},methods:{addPlayer:function(){this.players.push(new C("Neuer Spieler"))},removePlayer:function(e){var t=this.players.indexOf(e);t>=0&&(this.players.splice(t,1),this.activeIndex>t&&(this.activeIndex-=1))},reset:function(){this.players.forEach((function(e){e.points=0,e.pointsRound=0}))}}});n("64be");x.render=c;var w=x;Object(i["b"])(w).mount("#app")},ee4d:function(e,t,n){"use strict";n("ee61")},ee61:function(e,t,n){}});
//# sourceMappingURL=app.5393154d.js.map