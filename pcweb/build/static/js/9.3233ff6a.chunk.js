webpackJsonp([9],{"2XQe":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,u){try{var l=t[a](u),i=l.value}catch(e){return void n(e)}if(!l.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}return r("next")})}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,d,s,c,f=n("vaID"),p=r(f),m=n("1cZb"),h=r(m),b=n("Xxa5"),v=r(b),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n("Y2f6"),n("N3Nc");var E=n("GiK3"),g=r(E),x=n("KSGD"),k=r(x),O=n("RH2O"),w=n("4K+C"),_=r(w),I=n("BCOr"),C=(o=(0,O.connect)(function(e){return{adminId:e.auth.admin.adminId,token:e.auth.admin.token}},function(e){return{authError:function(e){return(0,I.authError)(e)},fetchAdmins:function(t,n){return e((0,I.fetchAdminList)(t,n))}}}))((c=s=function(e){function t(){var e,n,r,i,o=this;u(this,t);for(var d=arguments.length,s=Array(d),c=0;c<d;c++)s[c]=arguments[c];return n=r=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.fetchAdmins=a(v.default.mark(function e(){var t,n,a,u;return v.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props,n=t.adminId,a=t.token,u=t.fetchAdmins,e.next=3,u(n,a);case 3:case"end":return e.stop()}},e,o)})),r.handleConfirm=a(v.default.mark(function e(){var t,n,a,u,l,i,d,s;return v.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props,n=t.adminId,a=t.token,u=t.value,l=u.administratorId,e.prev=2,e.next=5,_.default.remove(n,a,l);case 5:h.default.success("\u5220\u9664\u6210\u529f"),r.props.fetchAdmins(n,a),r.props.handleSubmit(),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(2),void 0===e.t0.message&&(i="\u670d\u52a1\u5668\u51fa\u9519\u5566\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\uff0c\u9ebb\u70e6\u5f88\u8010\u5fc3\u7684\u7b49\u5f85\u4e00\u5e74\uff0c\u8c22\u8c22",r.props.authError(i)),401===e.t0.response.status&&(d="\u60a8\u7684\u767b\u5f55\u5df2\u8fc7\u671f\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55",r.props.authError(d)),400!==e.t0.response.status&&404!==e.t0.response.status||(s=e.t0.response.data.message,h.default.error(s)),r.props.handleCancel();case 16:case"end":return e.stop()}},e,o,[[2,10]])})),i=n,l(r,i)}return i(t,e),y(t,[{key:"render",value:function(){var e=this.props.value,t=e?e.nickName:"";return g.default.createElement(p.default,{title:"\u5220\u9664\u7ba1\u7406\u5458",visible:this.props.visible,okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:this.handleConfirm,onCancel:this.props.handleCancel},g.default.createElement("p",null,t?"\u786e\u8ba4\u8981\u5220\u9664\u7ba1\u7406\u5458\uff1a"+t:""))}}]),t}(g.default.Component),s.propTypes={adminId:k.default.number.isRequired,token:k.default.string.isRequired,visible:k.default.bool.isRequired,handleSubmit:k.default.func.isRequired,handleCancel:k.default.func.isRequired,value:k.default.object.isRequired},d=c))||d;t.default=C},Ogon:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,u){try{var l=t[a](u),i=l.value}catch(e){return void n(e)}if(!l.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}return r("next")})}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,d,s,c,f,p=n("vaID"),m=r(p),h=n("uuhB"),b=r(h),v=n("Xxa5"),y=r(v),E=n("1cZb"),g=r(E),x=n("PoSO"),k=r(x),O=n("37+n"),w=r(O),_=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n("Y2f6"),n("4yHo"),n("N3Nc"),n("ZYVT"),n("onAH");var I=n("GiK3"),C=r(I),S=n("KSGD"),A=r(S),j=n("RH2O"),P=n("BCOr"),V=n("4K+C"),q=r(V),M=w.default.Item,R=k.default.Group,T=(o=(0,j.connect)(function(e){return{adminId:e.auth.admin.adminId,token:e.auth.admin.token}},function(e){return{authError:function(e){return(0,P.authError)(e)},fetchAdmins:function(t,n){return e((0,P.fetchAdminList)(t,n))}}}),d=w.default.create(),o(s=d((f=c=function(e){function t(){var e,n,r,i,o=this;u(this,t);for(var d=arguments.length,s=Array(d),c=0;c<d;c++)s[c]=arguments[c];return n=r=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.handleSubmit=function(e){e.preventDefault(),r.props.form.validateFields(function(e,t){console.log(t),e||r.updateCategory(t)})},r.updateCategory=function(){var e=a(y.default.mark(function e(t){var n,a,u,l,i,d,s;return y.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.props,a=n.adminId,u=n.token,e.prev=1,e.next=4,q.default.update(a,u,t);case 4:l=e.sent,g.default.success("\u4fee\u6539\u6210\u529f"),r.props.fetchAdmins(a,u),r.props.handleSubmit(),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),void 0===e.t0.message&&(i="\u670d\u52a1\u5668\u51fa\u9519\u5566\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\uff0c\u9ebb\u70e6\u5f88\u8010\u5fc3\u7684\u7b49\u5f85\u4e00\u5e74\uff0c\u8c22\u8c22",r.props.authError(i)),401===e.t0.response.status&&(d="\u60a8\u7684\u767b\u5f55\u5df2\u8fc7\u671f\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55",r.props.authError(d)),400!==e.t0.response.status&&404!==e.t0.response.status||(s=e.t0.response.data.message,g.default.error(s));case 15:case"end":return e.stop()}},e,o,[[1,10]])}));return function(t){return e.apply(this,arguments)}}(),i=n,l(r,i)}return i(t,e),_(t,[{key:"render",value:function(){var e=this.props,t=e.visible,n=e.handleCancel,r=(e.handleSubmit,e.form),a=e.value,u=r.getFieldDecorator,l=a?a.administratorId:"",i=a?a.passWord:"",o=a?a.nickName:"",d=a?a.phone:"",s=a?a.superLevel:"";return C.default.createElement(m.default,{visible:t,title:"\u4fee\u6539\u7ba1\u7406\u5458\u4fe1\u606f",okText:"\u4fee\u6539",cancelText:"\u53d6\u6d88",onCancel:n,onOk:this.handleSubmit},C.default.createElement(w.default,{layout:"vertical"},C.default.createElement(M,{label:"\u7ba1\u7406\u5458id"},u("administratorId",{require:[{required:!0,message:"\u8bf7\u8f93\u5165\u7ba1\u7406\u5458id"}],initialValue:l})(C.default.createElement(b.default,{type:"text",disabled:!0}))),C.default.createElement(M,{label:"\u5bc6\u7801"},u("passWord",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"},{max:30,min:1,message:"\u5bc6\u7801\u4e0d\u80fd\u8d85\u8fc730\u4e2a\u5b57\u7b26"}],initialValue:i})(C.default.createElement(b.default,{type:"text"}))),C.default.createElement(M,{label:"\u6635\u79f0"},u("nickName",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6635\u79f0"},{max:20,min:1,message:"\u6635\u79f0\u4e0d\u80fd\u8d85\u8fc720\u4e2a\u5b57\u7b26"}],initialValue:o})(C.default.createElement(b.default,{type:"text"}))),C.default.createElement(M,{label:"\u624b\u673a\u53f7\u7801"},u("phone",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801"}],initialValue:d})(C.default.createElement(b.default,{type:"number"}))),C.default.createElement(M,{label:"\u662f\u5426\u4e3a\u8d85\u7ea7\u7ba1\u7406\u5458"},u("superLevel",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7ba1\u7406\u5458\u6743\u9650"}],initialValue:s})(C.default.createElement(R,null,C.default.createElement(k.default,{value:!0},"\u662f"),C.default.createElement(k.default,{value:!1},"\u5426"))))))}}]),t}(C.default.Component),c.propTypes={visible:A.default.bool.isRequired,handleCancel:A.default.func.isRequired,handleSubmit:A.default.func.isRequired,value:A.default.object.isRequired},s=f))||s)||s);t.default=T},VbgS:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,u){try{var l=t[a](u),i=l.value}catch(e){return void n(e)}if(!l.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}return r("next")})}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,d,s=n("oRCo"),c=r(s),f=n("yF52"),p=r(f),m=n("XSlN"),h=r(m),b=n("wgAv"),v=r(b),y=n("IidI"),E=r(y),g=n("Xxa5"),x=r(g),k=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n("JKaW"),n("Zjie"),n("4WQ2"),n("uMhn"),n("du7Z");var O=n("GiK3"),w=r(O),_=n("RH2O"),I=n("KSGD"),C=(r(I),n("z8xT")),S=r(C),A=n("BCOr"),j=n("df4e"),P=r(j),V=n("Ogon"),q=r(V),M=n("2XQe"),R=r(M),T=(o=(0,_.connect)(function(e){return{adminId:e.auth.admin.adminId,token:e.auth.admin.token,admins:e.adminInfo.admins,isFetching:e.adminInfo.isFetching}},function(e){return{fetchAdmins:function(t,n){return e((0,A.fetchAdminList)(t,n))}}}))(d=function(e){function t(){var e,n,r,i,o=this;u(this,t);for(var d=arguments.length,s=Array(d),c=0;c<d;c++)s[c]=arguments[c];return n=r=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.state={filteredInfo:null,sortedInfo:null,addModalVisible:!1,updateModalVisible:!1,updateValue:{},deleteModalVisible:!1,deleteValue:{}},r.fetchAdmins=a(x.default.mark(function e(){var t,n,a,u;return x.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props,n=t.adminId,a=t.token,u=t.fetchAdmins,e.next=3,u(n,a);case 3:case"end":return e.stop()}},e,o)})),r.handleChange=function(e,t,n){r.setState({filteredInfo:t,sortedInfo:n})},r.handleAddOpen=function(){r.setState({addModalVisible:!0})},r.handleUpdateOpen=function(e){r.setState({updateModalVisible:!0,updateValue:e})},r.handleDeleteOpen=function(){var e=a(x.default.mark(function e(t){return x.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.setState({deleteModalVisible:!0,deleteValue:t}),e.next=3,r.fetchAdmins();case 3:case"end":return e.stop()}},e,o)}));return function(t){return e.apply(this,arguments)}}(),r.handleAddCancel=function(){r.setState({addModalVisible:!1})},r.handleUpdateCancel=function(){r.setState({updateModalVisible:!1})},r.handleDeleteCancel=function(){r.setState({deleteModalVisible:!1})},r.handleAddSuccess=function(){r.setState({addModalVisible:!1})},r.handleUpdateSuccess=function(){r.setState({updateModalVisible:!1})},r.handleDeleteSuccess=function(){r.setState({deleteModalVisible:!1})},i=n,l(r,i)}return i(t,e),k(t,[{key:"componentDidMount",value:function(){this.fetchAdmins()}},{key:"render",value:function(){var e=this,t=this.props,n=t.admins,r=t.isFetching,a=this.state,u=a.filteredInfo,l=a.sortedInfo;u=u||{},l=l||{};var i=[{title:"id",dataIndex:"administratorId",key:"administratorId",sorter:function(e,t){return e.administratorId-t.administratorId},sortOrder:"administratorId"===l.columnKey&&l.order},{title:"\u8d26\u53f7",dataIndex:"userName",key:"userName"},{title:"\u5bc6\u7801",dataIndex:"passWord",key:"passWord"},{title:"\u6635\u79f0",dataIndex:"nickName",key:"nickName"},{title:"\u624b\u673a\u53f7",dataIndex:"phone",key:"phone"},{title:"\u662f\u5426\u4e3a\u8d85\u7ea7\u7ba1\u7406\u5458",dataIndex:"superLevel",key:"superLevel",render:function(e,t){return!0===t.superLevel?w.default.createElement("span",null,"\u662f"):w.default.createElement("span",null,"\u5426")}},{title:"\u64cd\u4f5c",key:"action",render:function(t,n){return w.default.createElement("span",null,w.default.createElement(E.default,{type:"primary",onClick:function(){return e.handleUpdateOpen(n)}},"\u4fee\u6539"),w.default.createElement(v.default,{type:"vertical"}),w.default.createElement(E.default,{type:"danger",onClick:function(){return e.handleDeleteOpen(n)}},"\u5220\u9664"))}}];return w.default.createElement(c.default.Content,null,w.default.createElement(S.default,{minus:!0},w.default.createElement(S.default.Header,{type:"light"},w.default.createElement(h.default,null,w.default.createElement(h.default.Item,null,"\u4e3b\u9875"),w.default.createElement(h.default.Item,null,"\u7ba1\u7406\u5458\u4fe1\u606f")),w.default.createElement("h2",null,"\u7ba1\u7406\u5458\u4fe1\u606f"),w.default.createElement("p",null,"\u7ba1\u7406\u5458\u4fe1\u606f\uff0c\u53ef\u4ee5\u8fdb\u884c\u65b0\u589e\u7ba1\u7406\u5458\u3001\u4fee\u6539\u7ba1\u7406\u5458\u4fe1\u606f\u3001\u5220\u9664\u7ba1\u7406\u5458\u3002"),w.default.createElement(v.default,{style:{marginTop:"10px",marginBottom:"30px"}}),w.default.createElement(E.default,{type:"primary",onClick:this.handleAddOpen},"\u65b0\u589e\u7ba1\u7406\u5458")),w.default.createElement(S.default.Body,{type:"light"},w.default.createElement(p.default,{rowKey:function(e){return e.administratorId},dataSource:n,columns:i,bordered:!0,onChange:this.handleChange,loading:r})),w.default.createElement(P.default,{visible:this.state.addModalVisible,handleSubmit:this.handleAddSuccess,handleCancel:this.handleAddCancel}),w.default.createElement(q.default,{visible:this.state.updateModalVisible,value:this.state.updateValue,handleSubmit:this.handleUpdateSuccess,handleCancel:this.handleUpdateCancel}),w.default.createElement(R.default,{visible:this.state.deleteModalVisible,value:this.state.deleteValue,handleSubmit:this.handleDeleteSuccess,handleCancel:this.handleDeleteCancel})))}}]),t}(w.default.Component))||d;t.default=T},df4e:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,u){try{var l=t[a](u),i=l.value}catch(e){return void n(e)}if(!l.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}return r("next")})}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,d,s,c,f,p=n("vaID"),m=r(p),h=n("uuhB"),b=r(h),v=n("1cZb"),y=r(v),E=n("Xxa5"),g=r(E),x=n("PoSO"),k=r(x),O=n("37+n"),w=r(O),_=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n("Y2f6"),n("4yHo"),n("N3Nc"),n("ZYVT"),n("onAH");var I=n("GiK3"),C=r(I),S=n("KSGD"),A=r(S),j=n("RH2O"),P=n("BCOr"),V=n("4K+C"),q=r(V),M=w.default.Item,R=k.default.Group,T=(o=(0,j.connect)(function(e){return{adminId:e.auth.admin.adminId,token:e.auth.admin.token}},function(e){return{authError:function(e){return(0,P.authError)(e)},fetchAdmins:function(t,n){return e((0,P.fetchAdminList)(t,n))}}}),d=w.default.create(),o(s=d((f=c=function(e){function t(){var e,n,r,i,o=this;u(this,t);for(var d=arguments.length,s=Array(d),c=0;c<d;c++)s[c]=arguments[c];return n=r=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.fetchAdmins=a(g.default.mark(function e(){var t,n,a,u;return g.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props,n=t.adminId,a=t.token,u=t.fetchAdmins,e.next=3,u(n,a);case 3:case"end":return e.stop()}},e,o)})),r.handleSubmit=function(e){e.preventDefault(),r.props.form.validateFields(function(e,t){e||r.postAdmin(t.userName,t.passWord,t.nickName,t.phone,t.superLevel)})},r.postAdmin=function(){var e=a(g.default.mark(function e(t,n,a,u,l){var i,d,s,c,f,p,m;return g.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.props,d=i.adminId,s=i.token,e.prev=1,e.next=4,q.default.create(d,s,{userName:t,passWord:n,nickName:a,phone:u,superLevel:l});case 4:c=e.sent,y.default.success("\u6dfb\u52a0\u65b0\u7ba1\u7406\u5458\u6210\u529f"),r.props.fetchAdmins(d,s),r.props.handleSubmit(),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),void 0===e.t0.message&&(f="\u670d\u52a1\u5668\u51fa\u9519\u5566\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\uff0c\u9ebb\u70e6\u5f88\u8010\u5fc3\u7684\u7b49\u5f85\u4e00\u5e74\uff0c\u8c22\u8c22",r.props.authError(f)),401===e.t0.response.status&&(p="\u60a8\u7684\u767b\u5f55\u5df2\u8fc7\u671f\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55",r.props.authError(p)),400===e.t0.response.status&&(m=e.t0.response.data.message,y.default.error(m));case 15:case"end":return e.stop()}},e,o,[[1,10]])}));return function(t,n,r,a,u){return e.apply(this,arguments)}}(),i=n,l(r,i)}return i(t,e),_(t,[{key:"render",value:function(){var e=this.props,t=e.visible,n=e.handleCancel,r=(e.handleSubmit,e.form),a=r.getFieldDecorator;return C.default.createElement(m.default,{visible:t,title:"\u6dfb\u52a0\u7ba1\u7406\u5458",okText:"\u6dfb\u52a0",cancelText:"\u53d6\u6d88",onCancel:n,onOk:this.handleSubmit},C.default.createElement(w.default,{layout:"vertical"},C.default.createElement(M,{label:"\u7528\u6237\u540d"},a("userName",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"},{max:30,min:1,message:"\u7528\u6237\u540d\u4e0d\u80fd\u8d85\u8fc730\u4e2a\u5b57\u7b26"}]})(C.default.createElement(b.default,{type:"text"}))),C.default.createElement(M,{label:"\u5bc6\u7801"},a("passWord",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"},{max:30,min:1,message:"\u5bc6\u7801\u4e0d\u80fd\u8d85\u8fc730\u4e2a\u5b57\u7b26"}]})(C.default.createElement(b.default,{type:"text"}))),C.default.createElement(M,{label:"\u6635\u79f0"},a("nickName",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6635\u79f0"},{max:20,min:1,message:"\u6635\u79f0\u4e0d\u80fd\u8d85\u8fc720\u4e2a\u5b57\u7b26"}]})(C.default.createElement(b.default,{type:"text"}))),C.default.createElement(M,{label:"\u624b\u673a\u53f7\u7801"},a("phone",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801"},{max:12,min:1,message:"\u624b\u673a\u53f7\u7801\u4e0d\u80fd\u8d85\u8fc712\u5b57\u7b26"}]})(C.default.createElement(b.default,{type:"number"}))),C.default.createElement(M,{label:"\u662f\u5426\u4e3a\u8d85\u7ea7\u7ba1\u7406\u5458"},a("superLevel",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7ba1\u7406\u5458\u6743\u9650"}],initialValue:!1})(C.default.createElement(R,null,C.default.createElement(k.default,{value:!0},"\u662f"),C.default.createElement(k.default,{value:!1},"\u5426"))))))}}]),t}(C.default.Component),c.propTypes={visible:A.default.bool.isRequired,handleCancel:A.default.func.isRequired,handleSubmit:A.default.func.isRequired,authError:A.default.func.isRequired,fetchAdmins:A.default.func.isRequired},s=f))||s)||s);t.default=T}});
//# sourceMappingURL=9.3233ff6a.chunk.js.map