(this["webpackJsonpcodenames-pictures"]=this["webpackJsonpcodenames-pictures"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),s=(n(14),n(8)),i=n(7),l=n(1),u=n(2),d=n(3),m=n(4),p=(n(15),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"setColor",value:function(e){this.props.card.color=e}},{key:"onDoubleClick",value:function(){if(document.selection&&document.selection.empty)document.selection.empty();else if(window.getSelection){window.getSelection().removeAllRanges()}this.props.card.color=""}},{key:"render",value:function(){var e=this,t=this.props.card,n=t.cardId,a=t.cardIsExpanded,c=t.contextMenuExpanded;return r.a.createElement("div",{onContextMenu:this.props.onContextMenu,className:"card"},this.props.card.color?r.a.createElement("div",{className:"overlay ".concat(this.props.card.color),onDoubleClick:function(){return e.onDoubleClick()}}):null,r.a.createElement("img",{onClick:this.props.onClick,src:"./cards/card-".concat(n,".jpg"),className:"card-img ".concat(a?"expanded":"")}),c?r.a.createElement("div",{className:"context-menu"},r.a.createElement("p",{className:"menu-action red",onClick:function(){return e.setColor("red")}},"Red"),r.a.createElement("p",{className:"menu-action blue",onClick:function(){return e.setColor("blue")}},"Blue"),r.a.createElement("p",{className:"menu-action neutral",onClick:function(){return e.setColor("neutral")}},"Neutral"),r.a.createElement("p",{className:"menu-action black",onClick:function(){return e.setColor("black")}},"Game Over")):null)}}]),n}(r.a.Component));var f=function(e){return e.sort((function(){return.5-Math.random()}))},h=(n(16),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.apply(this,arguments)).state={cards:e.randomiseCards()},e}return Object(u.a)(n,[{key:"randomiseCards",value:function(){var e={cardIsExpanded:!1,contextMenuExpanded:!1,color:""};return f(Object(i.a)(Array(100)).map((function(t,n){return Object(s.a)({cardId:n},e)}))).slice(0,20)}},{key:"toggleExpand",value:function(e){this.resetCards(e),e.cardIsExpanded=!e.cardIsExpanded,this.setState({cards:this.state.cards})}},{key:"onContextMenu",value:function(e,t){t.preventDefault(),this.resetCards(),e.contextMenuExpanded=!e.contextMenuExpanded,this.setState({cards:this.state.cards})}},{key:"resetAll",value:function(e){"card"!==e.target.parentElement.className&&"card"!==e.target.parentElement.className&&(this.resetCards(),this.setState({cards:this.state.cards}))}},{key:"resetCards",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.state.cards.filter((function(t){return t.cardId!==e.cardId})).forEach((function(e){e.cardIsExpanded=!1,e.contextMenuExpanded=!1}))}},{key:"newGames",value:function(){this.state.cards=this.randomiseCards()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container",onClick:function(t){return e.resetAll(t)}},r.a.createElement("div",{className:"grid"},this.state.cards.map((function(t){return r.a.createElement(p,{key:t.cardId,card:t,onClick:function(){return e.toggleExpand(t)},onContextMenu:function(n){return e.onContextMenu(t,n)}})}))),r.a.createElement("div",{className:"btn-wrapper"},r.a.createElement("div",null,r.a.createElement("button",{className:"btn",onClick:function(){return e.newGames()}},"New Game"))))}}]),n}(r.a.Component));n(17);var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.502ba511.chunk.js.map