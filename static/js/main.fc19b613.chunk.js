(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s,a=c(5),n=c.n(a),l=c(2),d=c(1),i=(c(10),c(11),c(3)),o=c.n(i),r=c(0),j=function(e){var t=e.filteredTodos,c=e.selectedTodoId,s=e.setSelectedTodoId;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",className:o()("",{"has-background-info-light":e.id===c}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:o()({"has-text-success":e.completed},{"has-text-danger":!e.completed}),children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e.id)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:o()("far",{"fa-eye":e.id!==c,"fa-eye-slash":e.id===c})})})})})]},e.id)}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var u=function(e){var t=e.optionForFilter,c=e.setOptionForFilter,a=e.searchQuery,n=e.setSearchQuery;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){return c(e.target.value)},children:[Object(r.jsx)("option",{value:s.All,children:"All"}),Object(r.jsx)("option",{value:s.Active,children:"Active"}),Object(r.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:function(e){n(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),a&&Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){n("")}})})]})]})};function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(13);var h=function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})},O=function(e){var t=e.selectedTodo,c=e.setSelectedTodoId,a=e.setOptionForFilter,n=Object(d.useState)(null),i=Object(l.a)(n,2),o=i[0],j=i[1],u=Object(d.useState)(!1),O=Object(l.a)(u,2),m=O[0],x=O[1];return Object(d.useEffect)((function(){var e;x(!1),(e=t.userId,b("/users/".concat(e))).then(j).catch((function(){return x(!0)}))}),[t]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),o?Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){c(null),a(s.All)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",m?Object(r.jsx)("div",{children:"User not found"}):Object(r.jsx)("a",{href:"mailto:".concat(o.email),children:o.name})]})]})]}):Object(r.jsx)(h,{})]})},m=function(){var e=Object(d.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(d.useState)(!1),i=Object(l.a)(n,2),o=i[0],m=i[1],x=Object(d.useState)(null),f=Object(l.a)(x,2),p=f[0],v=f[1],N=Object(d.useState)(""),y=Object(l.a)(N,2),g=y[0],S=y[1],T=Object(d.useState)(s.All),k=Object(l.a)(T,2),F=k[0],C=k[1];Object(d.useEffect)((function(){m(!0),b("/todos").then(a).finally((function(){return m(!1)}))}),[]);var A=Object(d.useMemo)((function(){return c.find((function(e){return e.id===p}))||null}),[c,p]),w=c.filter((function(e){var t=e.title.toLowerCase(),c=g.toLowerCase();return t.includes(c)})),I=Object(d.useMemo)((function(){return w.filter((function(e){switch(F){case s.All:return!0;case s.Active:return!e.completed;case s.Completed:return e.completed;default:return!0}}))}),[F,g,c]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(u,{optionForFilter:F,setOptionForFilter:C,searchQuery:g,setSearchQuery:S})}),Object(r.jsxs)("div",{className:"block",children:[o?Object(r.jsx)(h,{}):Object(r.jsx)(j,{filteredTodos:I,selectedTodoId:p,setSelectedTodoId:v}),o||0!==c.length?!o&&0===I.length&&Object(r.jsx)("h1",{children:'No results found for "'.concat(g,'" and filtered by "').concat(F,'"')}):Object(r.jsx)("h1",{children:"No results found"})]})]})})}),p&&A&&Object(r.jsx)(O,{selectedTodo:A,setSelectedTodoId:v,setOptionForFilter:C})]})};n.a.render(Object(r.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.fc19b613.chunk.js.map