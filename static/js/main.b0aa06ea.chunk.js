(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(8),r=a.n(s),l=(a(16),a(9)),c=a(1),i=a(2),d=a(4),u=a(3),m=a(5),h=function(e){var t=e.todos,a=e.deleteTask;e.s;console.log(t);var n=t.length?t.map(function(e){return o.a.createElement("div",{className:"collection-item",key:e.id},o.a.createElement("span",null,e.content),o.a.createElement("pre",null),o.a.createElement("button",{className:"waves-effect waves-light btn-small",onClick:function(){a(e.id)}},"Delete"))}):o.a.createElement("p",{className:"center"},"You have no tasks left! :)");return o.a.createElement("div",{className:"todos collection"},n)},v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={content:""},a.handleSubmit=function(e){e.preventDefault(),a.props.addTask(a.state),a.setState({content:""})},a.handleChange=function(e){a.setState({content:e.target.value})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",null,"Add Task"),o.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.state.content}),o.a.createElement("button",{className:"waves-effect waves-light btn-small"},"Submit")))}}]),t}(n.Component),f=a(6),p=a.n(f),b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[]},a.s=!0,a.deleteTask=function(e){var t=a.state.todos.filter(function(t){return t.id!==e});p.a.remove(e),a.setState({todos:t})},a.addTask=function(e){var t=!1;for(var n in a.state.todos)a.state.todos[n].content===e.content&&(t=!0);if(t)a.displayAlert("error");else{document.getElementById("alert").innerHTML="",e.id=Math.random();var o=[].concat(Object(l.a)(a.state.todos),[e]);a.setState({todos:o}),p.a.set(e.id,JSON.stringify(e),{expires:30}),a.s=!1}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object.values(p.a.get()).map(function(e){return JSON.parse(e)});this.setState({todos:e})}},{key:"displayAlert",value:function(e){"error"===e&&(document.getElementById("alert").innerHTML="You have not completed this task on your list yet! :(")}},{key:"render",value:function(){return console.log(this.state.todos),o.a.createElement("div",{className:"App container"},o.a.createElement("h1",{className:"center teal-text"},"Todo List"),o.a.createElement(h,{deleteTask:this.deleteTask,todos:this.state.todos,s:this.s}),o.a.createElement(v,{addTask:this.addTask}),o.a.createElement("div",{id:"alert",className:"red-text text-lighten-1"}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.b0aa06ea.chunk.js.map