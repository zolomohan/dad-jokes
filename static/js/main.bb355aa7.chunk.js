(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(55)},31:function(e,t,a){},32:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),s=a(20),r=a.n(s),c=(a(31),a(32),a(24)),i=a(2),l=a.n(i),u=a(23),m=a(8),p=a(3),d=a(4),f=a(6),k=a(5),v=a(7),h=a(21),g=a.n(h),j=a(22),w=a.n(j),E=(a(53),a(54),function(e){function t(){var e,a;Object(p.a)(this,t);for(var o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return(a=Object(f.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(n)))).getColor=function(){return a.props.votes>=15?"#4CAF50":a.props.votes>=12?"#8BC34A":a.props.votes>=9?"#CDDC39":a.props.votes>=6?"#FFEB3B":a.props.votes>=3?"#FFC107":a.props.votes>=0?"#FF9800":"#f44336"},a.getEmoji=function(){return a.props.votes>=15?"em em-rolling_on_the_floor_laughing":a.props.votes>=12?"em em-laughing":a.props.votes>=9?"em em-smiley":a.props.votes>=6?"em em-slightly_smiling_face":a.props.votes>=3?"em em-neutral_face":a.props.votes>=0?"em em-confused":"em em-angry"},a.handleUpVote=function(){a.props.vote(a.props.id,1)},a.handleDownVote=function(){a.props.vote(a.props.id,-1)},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"Joke"},n.a.createElement("div",{className:"Joke-buttons"},n.a.createElement("i",{className:"fas fa-arrow-up",onClick:this.handleUpVote}),n.a.createElement("span",{className:"Joke-votes",style:{borderColor:this.getColor()}},this.props.votes),n.a.createElement("i",{className:"fas fa-arrow-down",onClick:this.handleDownVote})),n.a.createElement("div",{className:"Joke-text"},this.props.text),n.a.createElement("div",{className:"Joke-emoji"},n.a.createElement("i",{className:this.getEmoji()})))}}]),t}(o.Component)),b=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(k.a)(t).call(this,e))).getJokes=Object(m.a)(l.a.mark(function e(){var t,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({loading:!0}),e.prev=1,t=[];case 3:if(!(t.length<a.props.defaultNoOfJokes)){e.next=10;break}return e.next=6,g.a.get("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}});case 6:o=e.sent,a.seenJokes.has(o.data.joke)||t.push({text:o.data.joke,votes:0,id:w()()}),e.next=3;break;case 10:a.setState(function(e){return{jokes:[].concat(Object(u.a)(e.jokes),t),loading:!1}},function(){return window.localStorage.setItem("jokes",JSON.stringify(a.state.jokes))}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),alert(e.t0),a.setState({loading:!1});case 17:case"end":return e.stop()}},e,null,[[1,13]])})),a.handleVote=function(e,t){a.setState(function(a){return{jokes:a.jokes.map(function(a){return a.id===e?Object(c.a)({},a,{votes:a.votes+t}):a})}},function(){return window.localStorage.setItem("jokes",JSON.stringify(a.state.jokes))})},a.state={jokes:JSON.parse(window.localStorage.getItem("jokes"))||[],loading:!1},a.seenJokes=new Set(a.state.jokes.map(function(e){return e.text})),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:0===this.state.jokes.length&&this.getJokes();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"JokeList"},n.a.createElement("div",{className:"JokeList-sidebar"},n.a.createElement("h1",{className:"JokeList-title"},n.a.createElement("span",null,"Dad")," Jokes"),n.a.createElement("img",{src:"https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg",alt:"ROFL_Emoji"}),n.a.createElement("button",{className:"JokeList-getmore",onClick:this.getJokes},"Fetch Jokes")),n.a.createElement("div",{className:"JokeList-jokes"},this.state.loading?n.a.createElement("div",{className:"JokeList-spinner"},n.a.createElement("i",{className:"far fa-laugh fa-spin"}),n.a.createElement("h1",{className:"JokeList-loading-title"},"Loading...")):this.state.jokes.sort(function(e,t){return t.votes-e.votes}).map(function(t){return n.a.createElement(E,{key:t.id,id:t.id,text:t.text,votes:t.votes,vote:e.handleVote})})))}}]),t}(o.Component);b.defaultProps={defaultNoOfJokes:10};var J=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.bb355aa7.chunk.js.map