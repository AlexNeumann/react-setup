(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){},107:function(e,t){},171:function(e,t){},189:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(44),c=a.n(i),l=a(24),o=a(197),s=a(201),u=a(174),m=a(34),p=a(55),d={app:{name:"test",greeting:"Hello World!"}};var h=a(35),y=a(20),b="MARKET_CHANGE_FILTER",g="SEND_SEARCH_FRUITS",v="RECEIVE_SEARCH_FRUITS",f="FAILED_SEARCH_FRUITS",E="DISMISS_ERROR",O={eventHandling:{isSending:!1,isFirstSearch:!0,requestFailed:!1},searchFilter:{type:"both",color:"any",searchString:"",forceFail:!1},items:[]};var _=a(40),j="HISTORY_CLEAR_LOG",C={history:[{type:"action",name:"EXAMPLE_ACTION",key:"hello",value:"world",sagaListener:!1}]};var F=Object(m.c)({AppContainerReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;switch((arguments.length>1?arguments[1]:void 0).type){case"TEST":default:return e}},FruitMartReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(y.a)({},e,{searchFilter:Object(y.a)({},e.searchFilter,Object(h.a)({},t.filterName,t.value))});case g:return Object(y.a)({},e,{eventHandling:Object(y.a)({},e.eventHandling,{isSending:!0,isFirstSearch:!1,requestFailed:!1}),items:[]});case v:return Object(y.a)({},e,{eventHandling:Object(y.a)({},e.eventHandling,{isSending:!1}),items:t.items});case f:return Object(y.a)({},e,{eventHandling:Object(y.a)({},e.eventHandling,{isSending:!1,requestFailed:!0}),items:[]});case E:return Object(y.a)({},e,{eventHandling:Object(y.a)({},e.eventHandling,{requestFailed:!1})});default:return e}},HistoryReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return C;case E:var a={type:"utility",name:E,message:"Error dismissed..."};return Object(y.a)({},e,{history:Object(_.a)(e.history).concat([a])});case b:var n=t.value;!0===t.value?n="true":!1===t.value&&(n="false");var r={type:"action",name:b,key:t.filterName,value:n,sagaListener:!1};return Object(y.a)({},e,{history:Object(_.a)(e.history).concat([r])});case g:var i={type:"saga",subType:"send",name:g,message:"Searching for items..."};return Object(y.a)({},e,{history:Object(_.a)(e.history).concat([i])});case v:var c={type:"saga",subType:"receive",name:v,message:"Received search results!"};return Object(y.a)({},e,{history:Object(_.a)(e.history).concat([c])});case f:var l={type:"saga",subType:"failed",name:f,message:"Server request failed."};return Object(y.a)({},e,{history:Object(_.a)(e.history).concat([l])});default:return e}}}),S=a(45),w=a.n(S),N=a(37),x=function(e){return{type:v,items:e}},k=function(){return{type:f}},H=[{id:1,type:"Fruit",color:"red",name:"Red Apple"},{id:2,type:"Fruit",color:"red",name:"Blood Orange"},{id:3,type:"Fruit",color:"red",name:"Cherry"},{id:4,type:"Fruit",color:"red",name:"Cranberry"},{id:5,type:"Fruit",color:"red",name:"Strawberry"},{id:6,type:"Vegetable",color:"red",name:"Beets"},{id:7,type:"Vegetable",color:"red",name:"Red Peppers"},{id:8,type:"Vegetable",color:"red",name:"Radish"},{id:9,type:"Vegetable",color:"red",name:"Tomato"},{id:10,type:"Vegetable",color:"red",name:"Red Onions"},{id:11,type:"Fruit",color:"yellow",name:"Apricots"},{id:12,type:"Fruit",color:"yellow",name:"Grapefruit"},{id:13,type:"Fruit",color:"yellow",name:"Lemons"},{id:14,type:"Fruit",color:"yellow",name:"Oranges"},{id:15,type:"Fruit",color:"yellow",name:"Peaches"},{id:16,type:"Vegetable",color:"yellow",name:"Yellow Peppers"},{id:17,type:"Vegetable",color:"yellow",name:"Pumpkin"},{id:18,type:"Vegetable",color:"yellow",name:"Sweet Potatoes"},{id:19,type:"Vegetable",color:"yellow",name:"Carrots"},{id:20,type:"Vegetable",color:"yellow",name:"Butternut Squash"},{id:21,type:"Fruit",color:"white",name:"Banana"},{id:22,type:"Fruit",color:"white",name:"Dates"},{id:23,type:"Fruit",color:"white",name:"White Nectarine"},{id:24,type:"Fruit",color:"white",name:"White Peaches"},{id:25,type:"Vegetable",color:"white",name:"Cauliflower"},{id:26,type:"Vegetable",color:"white",name:"Garlic"},{id:27,type:"Vegetable",color:"white",name:"Mushrooms"},{id:28,type:"Vegetable",color:"white",name:"Onions"},{id:29,type:"Vegetable",color:"white",name:"Turnips"},{id:30,type:"Fruit",color:"green",name:"Avocados"},{id:31,type:"Fruit",color:"green",name:"Honeydew"},{id:32,type:"Fruit",color:"green",name:"Kiwifruit"},{id:33,type:"Fruit",color:"green",name:"Limes"},{id:34,type:"Fruit",color:"green",name:"Asparagus"},{id:35,type:"Fruit",color:"green",name:"Broccoli"},{id:36,type:"Fruit",color:"green",name:"Green Beans"},{id:37,type:"Fruit",color:"green",name:"Celery"},{id:38,type:"Fruit",color:"blue",name:"Blackberry"},{id:39,type:"Fruit",color:"blue",name:"Blueberry"},{id:40,type:"Vegetable",color:"blue",name:"Black Olives"},{id:41,type:"Vegetable",color:"blue",name:"Eggplant"}],R=function(e){var t=e.type,a=e.color,n=e.searchString,r=!0,i=!0;"both"===t&&(r=!1),"any"===a&&(i=!1);var c=H.filter(function(e){var c=!0;return r&&e.type.toLowerCase()!==t&&(c=!1),i&&e.color!==a&&(c=!1),e.name.toLowerCase().includes(n.toLowerCase())||(c=!1),c});return console.log("matches",c),c},D=w.a.mark(L),B=w.a.mark(T);function L(e){var t,a;return w.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=e.searchParams,n.next=4,Object(p.b)(2e3);case 4:if(!t.forceFail){n.next=6;break}throw 500;case 6:return a=R(t),n.next=9,Object(N.a)(x(a));case 9:n.next=15;break;case 11:return n.prev=11,n.t0=n.catch(0),n.next=15,Object(N.a)(k());case 15:case"end":return n.stop()}},D,this,[[0,11]])}function T(){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.b)(g,L);case 2:case"end":return e.stop()}},B,this)}var V=T,A=Object(p.a)(),I=Object(m.d)(F,Object(m.a)(A));A.run(V);a(105);var P=a(11),q=a(12),G=a(14),J=a(13),M=a(15),W=a(195),K=a(196),U=(a(107),a(202)),z=a(200),Y=a(46),X=a.n(Y),Z=a(81),$=a.n(Z),Q=function(e){function t(){return Object(P.a)(this,t),Object(G.a)(this,Object(J.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){var e=this.props.title;return r.a.createElement("div",{className:$.a.title},e)}}]),t}(n.Component),ee=a(191),te=a(192),ae=a(193),ne=a(199),re=a(194),ie=a(190),ce=a(82),le=a.n(ce),oe=a(22),se=a.n(oe),ue=a(203),me=a(83),pe=a.n(me),de=function(e){function t(){return Object(P.a)(this,t),Object(G.a)(this,Object(J.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){return r.a.createElement(ue.a,{bsStyle:"danger",className:pe.a.alertCustom,onDis:!0},r.a.createElement("h4",null,"Server request failed!"),r.a.createElement("p",null,'This simulates a failed server request. You want to inform the user that their request was unsuccessful. A failed saga request sets our "requestFailed" to true. The next time render() is called, we display the error message. Once dismissed, we fire a new ',r.a.createElement("strong",null,"action")," to set it back to false."),r.a.createElement(ie.a,{bsStyle:"danger",onClick:this.props.onDismiss},"Dismiss"))}}]),t}(n.Component),he=a(39),ye=a.n(he),be=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(G.a)(this,Object(J.a)(t).call(this,e))).colorCoordinator={red:"#ff7272",blue:"#729dff",white:"#f5deb3",green:"#89daa2",yellow:"#e8de63"},a}return Object(M.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.color,n=e.type,i=this.colorCoordinator[a];return r.a.createElement("div",{className:ye.a.tile},r.a.createElement("div",{className:ye.a.tileContent,style:{backgroundColor:i}},r.a.createElement("div",null,"Vegetable"===n?r.a.createElement("img",{className:ye.a.tileImage,src:"https://img.icons8.com/ios/50/000000/carrot.png",alt:"Vegetable"}):r.a.createElement("img",{className:ye.a.tileImage,src:"https://img.icons8.com/ios/50/000000/strawberry.png",alt:"Vegetable"})),r.a.createElement("div",{className:ye.a.name},t)))}}]),t}(n.Component),ge=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(G.a)(this,(e=Object(J.a)(t)).call.apply(e,[this].concat(r)))).onChangeFilter=function(e,t){console.log(e,t),a.props.dispatchChangeFilter(e,t)},a.onStartSearch=function(){console.log("Searching fruits..."),a.props.dispatchSendSearchFruits(a.props.searchFilter)},a.onPressKeySubmit=function(e){"Enter"===e.key&&a.onStartSearch()},a.onDismissError=function(){a.props.dispatchDismissError()},a}return Object(M.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){var e=this;console.log("item check",this.props.items);var t=this.props.searchFilter,a=t.type,n=t.color,i=t.searchString,c=t.forceFail,l=this.props.eventHandling,o=l.isSending,s=l.isFirstSearch,u=l.requestFailed;return r.a.createElement("div",{className:se.a.tabBox},r.a.createElement(ee.a,{inline:!0,onSubmit:function(e){e.preventDefault()}},r.a.createElement(te.a,{className:se.a.formGrp,controlId:"type"},r.a.createElement(ae.a,null,"Search")," ",r.a.createElement(ne.a,{type:"text",placeholder:"Name...",className:se.a.inputText,value:i,onKeyPress:function(t){return e.onPressKeySubmit(t)},onChange:function(t){return e.onChangeFilter("searchString",t.target.value)}})),r.a.createElement(te.a,{className:se.a.formGrp,controlId:"type"},r.a.createElement(ae.a,null,"Type")," ",r.a.createElement(ne.a,{componentClass:"select",placeholder:"Select...",value:a,className:se.a.inputSelect,onChange:function(t){return e.onChangeFilter("type",t.target.value)}},r.a.createElement("option",{value:"both"},"Both"),r.a.createElement("option",{value:"fruit"},"Fruit only"),r.a.createElement("option",{value:"vegetable"},"Vegetable only")))," ",r.a.createElement(te.a,{className:se.a.formGrp,controlId:"color"},r.a.createElement(ae.a,null,"Color")," ",r.a.createElement(ne.a,{componentClass:"select",placeholder:"Select...",value:n,className:se.a.inputSelect,onChange:function(t){return e.onChangeFilter("color",t.target.value)}},r.a.createElement("option",{value:"any"},"Any"),r.a.createElement("option",{value:"red"},"Red"),r.a.createElement("option",{value:"yellow"},"Yellow/Orange"),r.a.createElement("option",{value:"white"},"White/Tan/Brown"),r.a.createElement("option",{value:"green"},"Green"),r.a.createElement("option",{value:"blue"},"Blue/Purple")))," ",r.a.createElement(te.a,null,r.a.createElement(re.a,{inline:!0,defaultChecked:c,onChange:function(t){return e.onChangeFilter("forceFail",t.target.checked)}},"Simulate Failed Request"))," ",r.a.createElement(te.a,{className:se.a.formGrp,controlId:"submitBtn"},r.a.createElement(ie.a,{className:se.a.btnSearch,onClick:this.onStartSearch},"Search!"))),r.a.createElement(W.a,{className:se.a.rowResults},u&&r.a.createElement(de,{onDismiss:this.onDismissError}),o&&r.a.createElement("div",{className:se.a.spinner},r.a.createElement(le.a,{type:"Watch",color:"#535784",height:"100",width:"100"}),r.a.createElement("div",null,"Artifically slowed down...")),s&&r.a.createElement("div",{className:se.a.spinner},"Click search to get started!"),s||o||0!==this.props.items.length?this.props.items.map(function(e,t){return r.a.createElement(be,{key:t,name:e.name,color:e.color,type:e.type})}):r.a.createElement("div",{className:se.a.spinner},"Your search yielded no results :(")))}}]),t}(n.Component),ve=function(e){function t(){return Object(P.a)(this,t),Object(G.a)(this,Object(J.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){return r.a.createElement(ge,{dispatchChangeFilter:this.props.dispatchChangeFilter,dispatchSendSearchFruits:this.props.dispatchSendSearchFruits,dispatchDismissError:this.props.dispatchDismissError,searchFilter:this.props.searchFilter,eventHandling:this.props.eventHandling,items:this.props.items})}}]),t}(n.Component),fe=Object(l.b)(function(e){return{searchFilter:e.FruitMartReducer.searchFilter,eventHandling:e.FruitMartReducer.eventHandling,items:e.FruitMartReducer.items}},function(e){return{dispatchChangeFilter:function(t,a){return e(function(e,t){return{type:b,filterName:e,value:t}}(t,a))},dispatchSendSearchFruits:function(t){return e(function(e){return{type:g,searchParams:e}}(t))},dispatchDismissError:function(){return e({type:E})}}})(ve),Ee=function(e){function t(){return Object(P.a)(this,t),Object(G.a)(this,Object(J.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Q,{title:"UI"}),r.a.createElement(U.a,{className:X.a.tabsCustom,defaultActiveKey:1,id:"uncontrolled-tab-example"},r.a.createElement(z.a,{className:X.a.tabCustom,eventKey:1,title:"Fruit Mart"},r.a.createElement(fe,null)),r.a.createElement(z.a,{className:X.a.tabCustom,eventKey:2,title:"Example 2"},"Tab 2 content"),r.a.createElement(z.a,{className:X.a.tabCustom,eventKey:3,title:"Example 3"},"Tab 3 content")))}}]),t}(n.Component),Oe=function(e){function t(){return Object(P.a)(this,t),Object(G.a)(this,Object(J.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){return r.a.createElement(Ee,null)}}]),t}(n.Component),_e=Object(l.b)(function(e){return{}},function(e){return{}})(Oe),je=a(8),Ce=a.n(je),Fe=a(23),Se=a.n(Fe),we=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(G.a)(this,(e=Object(J.a)(t)).call.apply(e,[this].concat(r)))).onPressClear=function(){a.props.dispatchClearLog()},a}return Object(M.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){var e=this.props.history.length;return console.log(this.props.history),r.a.createElement("div",{className:Se.a.box},r.a.createElement(Q,{title:"History"}),r.a.createElement("div",{className:Se.a.resetHistory},r.a.createElement("a",{onClick:this.onPressClear},"Clear History Log")),r.a.createElement("div",{className:Se.a.colOverflow},this.props.history.map(function(t,a){var n=a+1===e,i=Ce()(Se.a.actionEntry,Object(h.a)({},Se.a.entryHL,n));return"action"===t.type?r.a.createElement("div",{className:i},r.a.createElement("div",null,"(".concat(a+1,") dispatch action - "),r.a.createElement("span",{className:Se.a.actionName},t.name)),r.a.createElement("div",{className:Se.a.actionDetailBox},r.a.createElement("div",null,"\tkey: ",r.a.createElement("span",{className:Se.a.actionDetail},t.key),"value: ",r.a.createElement("span",{className:Se.a.actionDetail},t.value)),t.sagaListener&&r.a.createElement("div",null,"=> triggers Saga"))):"utility"===t.type?r.a.createElement("div",{className:i},r.a.createElement("div",null,"(".concat(a+1,") dispatch action - "),r.a.createElement("span",{className:Se.a.actionSaga},t.name)),r.a.createElement("div",{className:Se.a.actionDetailBox},r.a.createElement("div",null,"\t".concat(t.message)))):r.a.createElement("div",{className:i},r.a.createElement("div",null,"(".concat(a+1,") Saga listened: action - "),r.a.createElement("span",{className:Se.a.actionSaga},t.name)),r.a.createElement("div",{className:Se.a.actionDetailBox},r.a.createElement("div",null,"\t".concat(t.message))))})))}}]),t}(n.Component),Ne=function(e){function t(){return Object(P.a)(this,t),Object(G.a)(this,Object(J.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){return r.a.createElement(we,{history:this.props.history,dispatchClearLog:this.props.dispatchClearLog})}}]),t}(n.Component),xe=Object(l.b)(function(e){return{history:e.HistoryReducer.history}},function(e){return{dispatchClearLog:function(){return e({type:j})}}})(Ne),ke=(a(171),a(89)),He=a.n(ke),Re=function(e){function t(){return Object(P.a)(this,t),Object(G.a)(this,Object(J.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){var e=this.props.Fruits.items.length,t=JSON.parse(JSON.stringify(this.props.Fruits));return e>2&&(t.items.splice(2),t.items.push({otherResults:"hidden"})),r.a.createElement("div",null,r.a.createElement(Q,{title:"Redux Store"}),r.a.createElement("pre",{className:He.a.prettyJson},r.a.createElement("code",null,JSON.stringify(t,void 0,4))))}}]),t}(n.Component),De=function(e){function t(){return Object(P.a)(this,t),Object(G.a)(this,Object(J.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){return r.a.createElement(Re,{Fruits:this.props.Fruits})}}]),t}(n.Component),Be=Object(l.b)(function(e){return{Fruits:e.FruitMartReducer}},function(e){return{}})(De),Le=a(27),Te=a.n(Le),Ve=function(e){function t(){return Object(P.a)(this,t),Object(G.a)(this,Object(J.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){return console.log("Logging App props",this.props.app),r.a.createElement(u.a,{fluid:!0},r.a.createElement(W.a,null,r.a.createElement(K.a,{xs:4,md:4,lg:3,className:[Te.a.colCustom,Te.a.colDivider,Te.a.colHistory,Te.a.colOverflow]},r.a.createElement(xe,null)),r.a.createElement(K.a,{xs:4,md:4,lg:6,className:[Te.a.colCustom,Te.a.colDivider,Te.a.colPlayground]},r.a.createElement(_e,null)),r.a.createElement(K.a,{xs:4,md:4,lg:3,className:[Te.a.colCustom,Te.a.colStore]},r.a.createElement(Be,null))))}}]),t}(n.Component),Ae=Object(l.b)(function(e){return{app:e.AppContainerReducer.app}},function(e){return{}})(Ve),Ie=a(198),Pe=a(62),qe=a.n(Pe),Ge=function(e){function t(){return Object(P.a)(this,t),Object(G.a)(this,Object(J.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){return r.a.createElement(Ie.a,{collapseOnSelect:!0,className:qe.a.navbarCustom},r.a.createElement(Ie.a.Header,{className:qe.a.header},r.a.createElement(Ie.a.Brand,null,r.a.createElement("a",{href:"/"},"React Redux Saga Visualizer"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(l.a,{store:I},r.a.createElement(o.a,{basename:"/react-redux-saga-visualizer"},r.a.createElement(u.a,{fluid:!0,style:{paddingLeft:0,paddingRight:0}},r.a.createElement(Ge,null),r.a.createElement(s.a,{path:"/",exact:!0,component:Ae})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},22:function(e,t,a){e.exports={btnSearch:"styles_btnSearch__2KCCe",formGrp:"styles_formGrp__2RJ0i",inputText:"styles_inputText__1VW1-",tabBox:"styles_tabBox__2zVXC",rowResults:"styles_rowResults__U-pIz",inputSelect:"styles_inputSelect__qWbsv",spinner:"styles_spinner__25y1P"}},23:function(e,t,a){e.exports={colOverflow:"styles_colOverflow__z7xms",box:"styles_box__JxEB7",resetHistory:"styles_resetHistory__T7qkw",actionName:"styles_actionName__3_o3t",actionSaga:"styles_actionSaga__1UZB6",actionDetailBox:"styles_actionDetailBox__1tUEr",actionDetail:"styles_actionDetail__30HJU",entryHL:"styles_entryHL__3xzHz",actionEntry:"styles_actionEntry__x3pD-",fadein:"styles_fadein__3WC4L"}},27:function(e,t,a){e.exports={colCustom:"styles_colCustom__3bFOU",colDivider:"styles_colDivider__3EGno",colHistory:"styles_colHistory__n50bh",colPlayground:"styles_colPlayground__1ONEv",colStore:"styles_colStore__2D_7b"}},39:function(e,t,a){e.exports={tile:"styles_tile__3JeCU",tileContent:"styles_tileContent__ASX_9",name:"styles_name__2046_",tileImage:"styles_tileImage__2HvMT"}},46:function(e,t,a){e.exports={tabsCustom:"styles_tabsCustom__1duvg",tabCustom:"styles_tabCustom__1pIGZ"}},62:function(e,t,a){e.exports={navbarCustom:"styles_navbarCustom__1Lqck",header:"styles_header__3GyAq"}},81:function(e,t,a){e.exports={title:"styles_title__PIdY-"}},83:function(e,t,a){e.exports={alertCustom:"styles_alertCustom__1rLnW"}},89:function(e,t,a){e.exports={prettyJson:"styles_prettyJson__1DbHv"}},93:function(e,t,a){e.exports=a(189)}},[[93,2,1]]]);
//# sourceMappingURL=main.d936023c.chunk.js.map