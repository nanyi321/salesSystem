webpackJsonp([8],{"8alL":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,o,d=n("oRCo"),s=a(d),c=n("yF52"),f=a(c),p=n("XSlN"),h=a(p),m=n("wgAv"),v=a(m),b=n("IidI"),y=a(b),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n("JKaW"),n("Zjie"),n("4WQ2"),n("uMhn"),n("du7Z");var w=n("GiK3"),E=a(w),S=n("KSGD"),C=(a(S),n("RH2O")),O=n("z8xT"),I=a(O),_=n("HiuJ"),x=a(_),k=n("HDUV"),P=a(k),M=n("YPCT"),j=a(M),V=n("BCOr"),A=(u=(0,C.connect)(function(e){return{advs:e.advs.advs,isFetching:e.advs.isFetching}},function(e){return{fetchAdvs:function(){return e((0,V.getAllAdvs)())}}}))(o=function(e){function t(){var e,n,a,i;r(this,t);for(var u=arguments.length,o=Array(u),d=0;d<u;d++)o[d]=arguments[d];return n=a=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),a.state={filteredInfo:null,sortedInfo:null,addModalVisible:!1,updateModalVisible:!1,updateValue:{},deleteModalVisible:!1,deleteValue:{}},a.handleChange=function(e,t,n){a.setState({filteredInfo:t,sortedInfo:n})},a.handleOpenAddModal=function(){a.setState({addModalVisible:!0})},a.handleAddModalClose=function(){a.setState({addModalVisible:!1})},a.handleAddSuccess=function(){a.setState({addModalVisible:!1})},a.handleOpenUpdateModal=function(e){a.setState({updateModalVisible:!0,updateValue:e})},a.handleUpdateCancel=function(){a.setState({updateModalVisible:!1})},a.handleUpdateSuccess=function(){a.setState({updateModalVisible:!1})},a.handleDeleteModalOpen=function(e){a.setState({deleteModalVisible:!0,deleteValue:e})},a.handleDeleteSuccess=function(){a.setState({deleteModalVisible:!1})},a.handleDeleteCancel=function(){a.setState({deleteModalVisible:!1})},i=n,l(a,i)}return i(t,e),g(t,[{key:"componentDidMount",value:function(){this.props.fetchAdvs()}},{key:"render",value:function(){var e=this,t=this.props,n=t.advs,a=t.isFetching,r=this.state,l=r.filteredInfo,i=r.sortedInfo;l=l||{},i=i||{};var u=[{title:"id",dataIndex:"advSwiperId",key:"advSwiperId",sorter:function(e,t){return e.advSwiperId-t.advSwiperId},sortOrder:"advSwiperId"===i.columnKey&&i.order},{title:"\u5e7f\u544a\u540d\u79f0",dataIndex:"name",key:"name"},{title:"\u6240\u5c5e\u5206\u7c7b",dataIndex:"categoryName",key:"categoryName"},{title:"\u56fe\u7247",dataIndex:"image",key:"image",render:function(e,t){return E.default.createElement("img",{className:"advs-table-img",alt:"..",src:e})}},{title:"\u64cd\u4f5c",key:"action",render:function(t,n){return E.default.createElement("span",null,E.default.createElement(y.default,{type:"primary",onClick:function(){return e.handleOpenUpdateModal(n)}},"\u4fee\u6539"),E.default.createElement(v.default,{type:"vertical"}),E.default.createElement(y.default,{type:"danger",onClick:function(){return e.handleDeleteModalOpen(n)}},"\u5220\u9664"))}}];return E.default.createElement(s.default.Content,null,E.default.createElement(I.default,{minus:!0},E.default.createElement(I.default.Header,{type:"light"},E.default.createElement(h.default,null,E.default.createElement(h.default.Item,null,"\u4e3b\u9875"),E.default.createElement(h.default.Item,null,"\u5e7f\u544a\u7ba1\u7406")),E.default.createElement("h2",null,"\u5e7f\u544a\u7ba1\u7406"),E.default.createElement("p",null,"\u5e7f\u544a\u4fe1\u606f\u5c55\u793a\uff0c\u53ef\u4ee5\u8fdb\u884c\u65b0\u589e\u5e7f\u544a\uff0c\u4fee\u6539\u5e7f\u544a\uff0c\u5220\u9664\u5e7f\u544a\u64cd\u4f5c\u3002\u6ce8\u610f\uff1a\u6700\u591a\u53ea\u5141\u8bb8\u5b58\u5728\u4e94\u4e2a\u5e7f\u544a\u4f4d\u3002"),E.default.createElement(v.default,{style:{marginTop:"10px",marginBottom:"30px"}}),E.default.createElement(y.default,{type:"primary",onClick:this.handleOpenAddModal},"\u65b0\u589e\u5e7f\u544a")),E.default.createElement(I.default.Body,{type:"light"},E.default.createElement(f.default,{rowKey:function(e){return e.advSwiperId},dataSource:n,columns:u,bordered:!0,onChange:this.handleChange,loading:a})),E.default.createElement(x.default,{visible:this.state.addModalVisible,handleSubmit:this.handleAddSuccess,handleCancel:this.handleAddModalClose}),E.default.createElement(P.default,{visible:this.state.updateModalVisible,value:this.state.updateValue,handleSubmit:this.handleUpdateSuccess,handleCancel:this.handleUpdateCancel}),E.default.createElement(j.default,{visible:this.state.deleteModalVisible,value:this.state.deleteValue,handleSubmit:this.handleDeleteSuccess,handleCancel:this.handleDeleteCancel})))}}]),t}(E.default.Component))||o;t.default=A},HDUV:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(r,l){try{var i=t[r](l),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){a("next",e)},function(e){a("throw",e)});e(u)}return a("next")})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,d,s,c,f,p=n("vaID"),h=a(p),m=n("rpsp"),v=a(m),b=n("uuhB"),y=a(b),g=n("vgHw"),w=a(g),E=n("Xxa5"),S=a(E),C=n("1cZb"),O=a(C),I=n("37+n"),_=a(I),x=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n("Y2f6"),n("M1D3"),n("4yHo"),n("ODt/"),n("N3Nc"),n("onAH");var k=n("GiK3"),P=a(k),M=n("KSGD"),j=a(M),V=n("RH2O"),A=n("BCOr"),R=n("buDu"),D=a(R),T=n("pQAv"),q=a(T),U=_.default.Item,H=(o=(0,V.connect)(function(e){return{adminId:e.auth.admin.adminId,token:e.auth.admin.token}},function(e){return{authError:function(t){return e((0,A.authError)(t))},fetchAdvs:function(){return e((0,A.getAllAdvs)())}}}),d=_.default.create(),o(s=d((f=c=function(e){function t(){var e,n,a,u,o=this;l(this,t);for(var d=arguments.length,s=Array(d),c=0;c<d;c++)s[c]=arguments[c];return n=a=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.state={fileList:[],previewImage:"",previewVisible:!1},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){if(!e){var n=void 0;t.image&&(n=t.image.fileList[0].originFileObj),a.updateCategory(t.advSwiperId,t.name,t.categorySecondId,n)}})},a.handlePictureChange=function(e){var t=e.fileList;a.setState({fileList:t})},a.handlePreview=function(e){a.setState({previewImage:e.url||e.thumbUrl,previewVisible:!0})},a.handleRemove=function(e){a.setState({fileList:[]})},a.handleCancel=function(){a.setState({previewVisible:!1})},a.updateCategory=function(){var e=r(S.default.mark(function e(t,n,r,l){var i,u,d,s,c,f,p;return S.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.props,u=i.adminId,d=i.token,e.prev=1,e.next=4,D.default.update(u,d,{advSwiperId:t,name:n,categorySecondId:r,image:l});case 4:s=e.sent,O.default.success("\u4fee\u6539\u6210\u529f"),a.props.fetchAdvs(),a.props.handleSubmit(),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),void 0===e.t0.message&&(c="\u670d\u52a1\u5668\u51fa\u9519\u5566\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\uff0c\u9ebb\u70e6\u5f88\u8010\u5fc3\u7684\u7b49\u5f85\u4e00\u5e74\uff0c\u8c22\u8c22",a.props.authError(c)),401===e.t0.response.status&&(f="\u60a8\u7684\u767b\u5f55\u5df2\u8fc7\u671f\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55",a.props.authError(f)),400!==e.t0.response.status&&404!==e.t0.response.status||(p=e.t0.response.data.message,O.default.error(p));case 15:case"end":return e.stop()}},e,o,[[1,10]])}));return function(t,n,a,r){return e.apply(this,arguments)}}(),a.renderUploadBtn=function(){return P.default.createElement("div",null,P.default.createElement(w.default,{type:"plus"}),P.default.createElement("div",{className:"ant-upload-text"},"Upload"))},u=n,i(a,u)}return u(t,e),x(t,[{key:"render",value:function(){var e=this.props,t=e.visible,n=e.handleCancel,a=(e.handleSubmit,e.form),r=e.value,l=this.state,i=l.fileList,u=l.previewImage,o=l.previewVisible,d=a.getFieldDecorator,s=r?r.advSwiperId:"",c=r?r.name:"",f=r?r.categorySecondId:"";return P.default.createElement(h.default,{visible:t,title:"\u4fee\u6539\u5206\u7c7b\u4fe1\u606f",okText:"\u4fee\u6539",cancelText:"\u53d6\u6d88",onCancel:n,onOk:this.handleSubmit},P.default.createElement(_.default,{layout:"vertical"},P.default.createElement(U,{label:"id"},d("advSwiperId",{initialValue:s})(P.default.createElement(y.default,{type:"text",disabled:!0}))),P.default.createElement(U,{label:"\u540d\u79f0"},d("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5e7f\u544a\u540d\u79f0"},{max:10,min:1,message:"\u5e7f\u544a\u540d\u79f0\u4e0d\u80fd\u8d85\u8fc710\u4e2a\u5b57\u7b26"}],initialValue:c})(P.default.createElement(y.default,{type:"text"}))),P.default.createElement(U,{label:"\u6240\u5c5e\u4e8c\u7ea7\u5206\u7c7b"},d("categorySecondId",{initialValue:f,rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6240\u5c5e\u4e8c\u7ea7\u5206\u7c7b"}]})(P.default.createElement(q.default,{allItem:!1,level:"second"}))),P.default.createElement(U,{label:"\u4fee\u6539\u56fe\u7247"},d("image")(P.default.createElement(v.default,{action:"http://yushijie.club:8080/cloudcommodity/api/v1/fileUpload",listType:"picture-card",fileList:i,onRemove:this.handleRemove,onPreview:this.handlePreview,onChange:this.handlePictureChange},i.length>=1?null:this.renderUploadBtn()))),P.default.createElement(h.default,{visible:o,footer:null,onCancel:this.handleCancel},P.default.createElement("img",{alt:"example",style:{width:"100%"},src:u}))))}}]),t}(P.default.Component),c.propTypes={visible:j.default.bool.isRequired,handleCancel:j.default.func.isRequired,handleSubmit:j.default.func.isRequired,value:j.default.object.isRequired},s=f))||s)||s);t.default=H},HiuJ:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(r,l){try{var i=t[r](l),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){a("next",e)},function(e){a("throw",e)});e(u)}return a("next")})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,d,s,c,f,p=n("vaID"),h=a(p),m=n("rpsp"),v=a(m),b=n("uuhB"),y=a(b),g=n("vgHw"),w=a(g),E=n("Xxa5"),S=a(E),C=n("1cZb"),O=a(C),I=n("37+n"),_=a(I),x=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n("Y2f6"),n("M1D3"),n("4yHo"),n("ODt/"),n("N3Nc"),n("onAH");var k=n("GiK3"),P=a(k),M=n("KSGD"),j=a(M),V=n("RH2O"),A=n("BCOr"),R=n("buDu"),D=a(R),T=n("pQAv"),q=a(T),U=_.default.Item,H=(o=(0,V.connect)(function(e){return{adminId:e.auth.admin.adminId,token:e.auth.admin.token}},function(e){return{authError:function(e){return(0,A.authError)(e)},fetchAdvs:function(){return e((0,A.getAllAdvs)())}}}),d=_.default.create(),o(s=d((f=c=function(e){function t(){var e,n,a,u,o=this;l(this,t);for(var d=arguments.length,s=Array(d),c=0;c<d;c++)s[c]=arguments[c];return n=a=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.state={fileList:[],previewImage:"",previewVisible:!1},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){e||a.postCategory(t.name,t.categorySecondId,t.image.fileList[0].originFileObj)})},a.handlePictureChange=function(e){var t=e.fileList;a.setState({fileList:t})},a.handlePreview=function(e){a.setState({previewImage:e.url||e.thumbUrl,previewVisible:!0})},a.handleRemove=function(e){a.setState({fileList:[]})},a.handleCancel=function(){a.setState({previewVisible:!1})},a.postCategory=function(){var e=r(S.default.mark(function e(t,n,r){var l,i,u,d,s,c,f;return S.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l=a.props,i=l.adminId,u=l.token,e.prev=1,e.next=4,D.default.create(i,u,{name:t,categorySecondId:n,image:r});case 4:d=e.sent,O.default.success("\u6dfb\u52a0\u65b0\u5e7f\u544a\u6210\u529f"),a.props.fetchAdvs(),a.props.handleSubmit(),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),void 0===e.t0.message&&(s="\u670d\u52a1\u5668\u51fa\u9519\u5566\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\uff0c\u9ebb\u70e6\u5f88\u8010\u5fc3\u7684\u7b49\u5f85\u4e00\u5e74\uff0c\u8c22\u8c22",a.props.authError(s)),401===e.t0.response.status&&(c="\u60a8\u7684\u767b\u5f55\u5df2\u8fc7\u671f\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55",a.props.authError(c)),400===e.t0.response.status&&(f=e.t0.response.data.message,O.default.error(f));case 15:case"end":return e.stop()}},e,o,[[1,10]])}));return function(t,n,a){return e.apply(this,arguments)}}(),a.renderUploadBtn=function(){return P.default.createElement("div",null,P.default.createElement(w.default,{type:"plus"}),P.default.createElement("div",{className:"ant-upload-text"},"Upload"))},u=n,i(a,u)}return u(t,e),x(t,[{key:"componentDidMount",value:function(){this.props.form.resetFields()}},{key:"render",value:function(){var e=this.props,t=e.visible,n=e.handleCancel,a=(e.handleSubmit,e.form),r=this.state,l=r.fileList,i=r.previewImage,u=r.previewVisible,o=a.getFieldDecorator;return console.log(l),P.default.createElement(h.default,{visible:t,title:"\u65b0\u589e\u5e7f\u544a",okText:"\u4fdd\u5b58",cancelText:"\u53d6\u6d88",onCancel:n,onOk:this.handleSubmit},P.default.createElement(_.default,{layout:"vertical"},P.default.createElement(U,{label:"\u540d\u79f0"},o("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5e7f\u544a\u540d\u79f0"},{max:10,min:1,message:"\u5e7f\u544a\u540d\u79f0\u4e0d\u80fd\u8d85\u8fc710\u4e2a\u5b57\u7b26"}]})(P.default.createElement(y.default,{type:"text"}))),P.default.createElement(U,{label:"\u6240\u5c5e\u4e8c\u7ea7\u5206\u7c7b"},o("categorySecondId",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6240\u5c5e\u4e8c\u7ea7\u5206\u7c7b"}]})(P.default.createElement(q.default,{allItem:!1,level:"second"}))),P.default.createElement(U,{label:"\u56fe\u7247"},o("image",{rules:[{required:!0,message:"\u8bf7\u4e0a\u4f20\u56fe\u7247"}]})(P.default.createElement(v.default,{action:"http://yushijie.club:8080/cloudcommodity/api/v1/fileUpload",listType:"picture-card",fileList:l,onRemove:this.handleRemove,onPreview:this.handlePreview,onChange:this.handlePictureChange},l.length>=1?null:this.renderUploadBtn()))),P.default.createElement(h.default,{visible:u,footer:null,onCancel:this.handleCancel},P.default.createElement("img",{alt:"example",style:{width:"100%"},src:i}))))}}]),t}(P.default.Component),c.propTypes={visible:j.default.bool.isRequired,handleCancel:j.default.func.isRequired,handleSubmit:j.default.func.isRequired,authError:j.default.func.isRequired,fetchAdvs:j.default.func.isRequired},s=f))||s)||s);t.default=H},YPCT:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(r,l){try{var i=t[r](l),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){a("next",e)},function(e){a("throw",e)});e(u)}return a("next")})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,d,s,c,f=n("vaID"),p=a(f),h=n("Xxa5"),m=a(h),v=n("1cZb"),b=a(v),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n("Y2f6"),n("N3Nc");var g=n("GiK3"),w=a(g),E=n("KSGD"),S=a(E),C=n("RH2O"),O=n("buDu"),I=a(O),_=n("BCOr"),x=(o=(0,C.connect)(function(e){return{adminId:e.auth.admin.adminId,token:e.auth.admin.token}},function(e){return{authError:function(t){return e((0,_.authError)(t))},fetchAdvs:function(){return e((0,_.getAllAdvs)())}}}))((c=s=function(e){function t(){var e,n,a,u,o=this;l(this,t);for(var d=arguments.length,s=Array(d),c=0;c<d;c++)s[c]=arguments[c];return n=a=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.handleConfirm=r(m.default.mark(function e(){var t,n,r,l,i,u,d,s;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props,n=t.adminId,r=t.token,l=t.value,i=l.advSwiperId,e.prev=2,e.next=5,I.default.remove(n,r,i);case 5:b.default.success("\u5220\u9664\u6210\u529f"),a.props.fetchAdvs(),a.props.handleSubmit(),e.next=17;break;case 10:e.prev=10,e.t0=e.catch(2),void 0===e.t0.response&&(u="\u670d\u52a1\u5668\u51fa\u9519\u5566\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\uff0c\u9ebb\u70e6\u5f88\u8010\u5fc3\u7684\u7b49\u5f85\u4e00\u5e74\uff0c\u8c22\u8c22",a.props.authError(u)),401===e.t0.response.status&&(d="\u60a8\u7684\u767b\u5f55\u5df2\u8fc7\u671f\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55",a.props.authError(d)),400!==e.t0.response.status&&404!==e.t0.response.status||(s=e.t0.response.data.message,b.default.error(s)),a.props.fetchAdvs(),a.props.handleCancel();case 17:case"end":return e.stop()}},e,o,[[2,10]])})),u=n,i(a,u)}return u(t,e),y(t,[{key:"render",value:function(){var e=this.props.value,t=e?e.name:"";return w.default.createElement(p.default,{title:"\u5220\u9664\u5e7f\u544a",visible:this.props.visible,okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:this.handleConfirm,onCancel:this.props.handleCancel},w.default.createElement("p",null,t?"\u786e\u8ba4\u8981\u5220\u9664\u5e7f\u544a\uff1a"+t:""))}}]),t}(w.default.Component),s.propTypes={adminId:S.default.number.isRequired,token:S.default.string.isRequired,visible:S.default.bool.isRequired,handleSubmit:S.default.func.isRequired,handleCancel:S.default.func.isRequired,value:S.default.object.isRequired},d=c))||d;t.default=x}});
//# sourceMappingURL=8.893a66a6.chunk.js.map