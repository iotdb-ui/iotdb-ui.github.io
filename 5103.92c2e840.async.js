(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[5103],{64335:function(fe,L,l){"use strict";var U=l(67294),j=(0,U.createContext)({});L.Z=j},85224:function(fe,L,l){"use strict";var U=l(84305),j=l(69224),p=l(67294),A=l(94184),w=l.n(A),Y=l(97435),C=l(28267),F=l.n(C),W=l(64335),i=["children","className","extra","style","renderContent"];function x(){return x=Object.assign||function(o){for(var s=1;s<arguments.length;s++){var d=arguments[s];for(var m in d)Object.prototype.hasOwnProperty.call(d,m)&&(o[m]=d[m])}return o},x.apply(this,arguments)}function I(o,s){var d=Object.keys(o);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(o);s&&(m=m.filter(function(T){return Object.getOwnPropertyDescriptor(o,T).enumerable})),d.push.apply(d,m)}return d}function _(o){for(var s=1;s<arguments.length;s++){var d=arguments[s]!=null?arguments[s]:{};s%2?I(Object(d),!0).forEach(function(m){H(o,m,d[m])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(d)):I(Object(d)).forEach(function(m){Object.defineProperty(o,m,Object.getOwnPropertyDescriptor(d,m))})}return o}function H(o,s,d){return s in o?Object.defineProperty(o,s,{value:d,enumerable:!0,configurable:!0,writable:!0}):o[s]=d,o}function M(o,s){if(o==null)return{};var d=V(o,s),m,T;if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(o);for(T=0;T<S.length;T++)m=S[T],!(s.indexOf(m)>=0)&&(!Object.prototype.propertyIsEnumerable.call(o,m)||(d[m]=o[m]))}return d}function V(o,s){if(o==null)return{};var d={},m=Object.keys(o),T,S;for(S=0;S<m.length;S++)T=m[S],!(s.indexOf(T)>=0)&&(d[T]=o[T]);return d}var u=function(s){var d=s.children,m=s.className,T=s.extra,S=s.style,z=s.renderContent,K=M(s,i),de=(0,p.useContext)(j.ZP.ConfigContext),ee=de.getPrefixCls,le=s.prefixCls||ee("pro"),J="".concat(le,"-footer-bar"),E=(0,p.useContext)(W.Z),Z=(0,p.useMemo)(function(){var $=E.hasSiderMenu,ve=E.isMobile,ce=E.siderWidth;if(!!$)return ce?ve?"100%":"calc(100% - ".concat(ce,"px)"):"100%"},[E.collapsed,E.hasSiderMenu,E.isMobile,E.siderWidth]),Q=p.createElement(p.Fragment,null,p.createElement("div",{className:"".concat(J,"-left")},T),p.createElement("div",{className:"".concat(J,"-right")},d));return(0,p.useEffect)(function(){return!E||!(E==null?void 0:E.setHasFooterToolbar)?function(){}:(E==null||E.setHasFooterToolbar(!0),function(){var $;E==null||($=E.setHasFooterToolbar)===null||$===void 0||$.call(E,!1)})},[]),p.createElement("div",x({className:w()(m,"".concat(J)),style:_({width:Z},S)},(0,Y.Z)(K,["prefixCls"])),z?z(_(_(_({},s),E),{},{leftWidth:Z}),Q):Q)};L.Z=u},21349:function(fe,L,l){"use strict";var U=l(84305),j=l(69224),p=l(17781),A=l.n(p),w=l(67294),Y=l(94184),C=l.n(Y),F=l(64335),W=function(x){var I=(0,w.useContext)(F.Z),_=x.children,H=x.contentWidth,M=x.className,V=x.style,u=(0,w.useContext)(j.ZP.ConfigContext),o=u.getPrefixCls,s=x.prefixCls||o("pro"),d=H||I.contentWidth,m="".concat(s,"-grid-content");return w.createElement("div",{className:C()(m,M,{wide:d==="Fixed"}),style:V},w.createElement("div",{className:"".concat(s,"-grid-content-children")},_))};L.Z=W},15103:function(fe,L,l){"use strict";l.d(L,{H_:function(){return Pt},yy:function(){return ke},ZP:function(){return Et}});var U=l(43673),j=l(29938),p=l(22122),A=l(96156),w=l(6610),Y=l(5991),C=l(10379),F=l(60446),W=l(90484),i=l(67294),x=l(94184),I=l.n(x),_=l(98423),H=l(31739),M=l(65632),V=l(85061),u=l(75164);function o(n){var e,r=function(c){return function(){e=null,n.apply(void 0,(0,V.Z)(c))}},t=function(){if(e==null){for(var c=arguments.length,v=new Array(c),f=0;f<c;f++)v[f]=arguments[f];e=(0,u.Z)(r(v))}};return t.cancel=function(){return u.Z.cancel(e)},t}function s(){return function(e,r,t){var a=t.value,c=!1;return{configurable:!0,get:function(){if(c||this===e.prototype||this.hasOwnProperty(r))return a;var f=o(a.bind(this));return c=!0,Object.defineProperty(this,r,{value:f,configurable:!0,writable:!0}),c=!1,f}}}}var d=l(64019);function m(n){return n!==window?n.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function T(n,e,r){if(r!==void 0&&e.top>n.top-r)return r+e.top}function S(n,e,r){if(r!==void 0&&e.bottom<n.bottom+r){var t=window.innerHeight-e.bottom;return r+t}}var z=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],K=[];function de(){return K}function ee(n,e){if(!!n){var r=K.find(function(t){return t.target===n});r?r.affixList.push(e):(r={target:n,affixList:[e],eventHandlers:{}},K.push(r),z.forEach(function(t){r.eventHandlers[t]=(0,d.Z)(n,t,function(){r.affixList.forEach(function(a){a.lazyUpdatePosition()})})}))}}function le(n){var e=K.find(function(r){var t=r.affixList.some(function(a){return a===n});return t&&(r.affixList=r.affixList.filter(function(a){return a!==n})),t});e&&e.affixList.length===0&&(K=K.filter(function(r){return r!==e}),z.forEach(function(r){var t=e.eventHandlers[r];t&&t.remove&&t.remove()}))}var J=function(n,e,r,t){var a=arguments.length,c=a<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,r):t,v;if((typeof Reflect=="undefined"?"undefined":(0,W.Z)(Reflect))==="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(n,e,r,t);else for(var f=n.length-1;f>=0;f--)(v=n[f])&&(c=(a<3?v(c):a>3?v(e,r,c):v(e,r))||c);return a>3&&c&&Object.defineProperty(e,r,c),c};function E(){return typeof window!="undefined"?window:null}var Z;(function(n){n[n.None=0]="None",n[n.Prepare=1]="Prepare"})(Z||(Z={}));var Q=function(n){(0,C.Z)(r,n);var e=(0,F.Z)(r);function r(){var t;return(0,w.Z)(this,r),t=e.apply(this,arguments),t.state={status:Z.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var a=t.props.offsetBottom,c=t.props.offsetTop;return a===void 0&&c===void 0&&(c=0),c},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(a){t.placeholderNode=a},t.saveFixedNode=function(a){t.fixedNode=a},t.measure=function(){var a=t.state,c=a.status,v=a.lastAffix,f=t.props.onChange,g=t.getTargetFunc();if(!(c!==Z.Prepare||!t.fixedNode||!t.placeholderNode||!g)){var P=t.getOffsetTop(),O=t.getOffsetBottom(),h=g();if(!!h){var y={status:Z.None},R=m(h),b=m(t.placeholderNode),D=T(b,R,P),N=S(b,R,O);D!==void 0?(y.affixStyle={position:"fixed",top:D,width:b.width,height:b.height},y.placeholderStyle={width:b.width,height:b.height}):N!==void 0&&(y.affixStyle={position:"fixed",bottom:N,width:b.width,height:b.height},y.placeholderStyle={width:b.width,height:b.height}),y.lastAffix=!!y.affixStyle,f&&v!==y.lastAffix&&f(y.lastAffix),t.setState(y)}}},t.prepareMeasure=function(){if(t.setState({status:Z.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var a},t.render=function(){var a=t.context.getPrefixCls,c=t.state,v=c.affixStyle,f=c.placeholderStyle,g=t.props,P=g.prefixCls,O=g.children,h=I()((0,A.Z)({},a("affix",P),!!v)),y=(0,_.Z)(t.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return i.createElement(H.Z,{onResize:function(){t.updatePosition()}},i.createElement("div",(0,p.Z)({},y,{ref:t.savePlaceholderNode}),v&&i.createElement("div",{style:f,"aria-hidden":"true"}),i.createElement("div",{className:h,ref:t.saveFixedNode,style:v},i.createElement(H.Z,{onResize:function(){t.updatePosition()}},O))))},t}return(0,Y.Z)(r,[{key:"getTargetFunc",value:function(){var a=this.context.getTargetContainer,c=this.props.target;return c!==void 0?c:a||E}},{key:"componentDidMount",value:function(){var a=this,c=this.getTargetFunc();c&&(this.timeout=setTimeout(function(){ee(c(),a),a.updatePosition()}))}},{key:"componentDidUpdate",value:function(a){var c=this.state.prevTarget,v=this.getTargetFunc(),f=null;v&&(f=v()||null),c!==f&&(le(this),f&&(ee(f,this),this.updatePosition()),this.setState({prevTarget:f})),(a.offsetTop!==this.props.offsetTop||a.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),le(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var a=this.getTargetFunc(),c=this.state.affixStyle;if(a&&c){var v=this.getOffsetTop(),f=this.getOffsetBottom(),g=a();if(g&&this.placeholderNode){var P=m(g),O=m(this.placeholderNode),h=T(O,P,v),y=S(O,P,f);if(h!==void 0&&c.top===h||y!==void 0&&c.bottom===y)return}}this.prepareMeasure()}}]),r}(i.Component);Q.contextType=M.E_,J([s()],Q.prototype,"updatePosition",null),J([s()],Q.prototype,"lazyUpdatePosition",null);var $=Q,ve=l(84305),ce=l(69224),Pe=l(51399),Oe=l(66157),Ie=l(30887),Ze=l(59250),Le=l(94233),Ee=l(28481),Ce={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},xe=Ce,me=l(27029),ge=function(e,r){return i.createElement(me.Z,Object.assign({},e,{ref:r,icon:xe}))};ge.displayName="ArrowLeftOutlined";var Re=i.forwardRef(ge),Te={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},Ne=Te,he=function(e,r){return i.createElement(me.Z,Object.assign({},e,{ref:r,icon:Ne}))};he.displayName="ArrowRightOutlined";var We=i.forwardRef(he),Ue=l(50344),_e=l(57254),De=l(81555),Ke=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r},Be=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,c=e.children,v=e.overlay,f=e.dropdownProps,g=Ke(e,["prefixCls","separator","children","overlay","dropdownProps"]),P=i.useContext(M.E_),O=P.getPrefixCls,h=O("breadcrumb",r),y=function(D){return v?i.createElement(De.Z,(0,p.Z)({overlay:v,placement:"bottomCenter"},f),i.createElement("span",{className:"".concat(h,"-overlay-link")},D,i.createElement(_e.Z,null))):D},R;return"href"in g?R=i.createElement("a",(0,p.Z)({className:"".concat(h,"-link")},g),c):R=i.createElement("span",(0,p.Z)({className:"".concat(h,"-link")},g),c),R=y(R),c?i.createElement("span",null,R,a&&i.createElement("span",{className:"".concat(h,"-separator")},a)):null};Be.__ANT_BREADCRUMB_ITEM=!0;var Me=Be,ye=function(e){var r=e.children,t=i.useContext(M.E_),a=t.getPrefixCls,c=a("breadcrumb");return i.createElement("span",{className:"".concat(c,"-separator")},r||"/")};ye.__ANT_BREADCRUMB_SEPARATOR=!0;var Fe=ye,pe=l(99210),se=l(21687),k=l(96159),te=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r};function He(n,e){if(!n.breadcrumbName)return null;var r=Object.keys(e).join("|"),t=n.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),function(a,c){return e[c]||a});return t}function ze(n,e,r,t){var a=r.indexOf(n)===r.length-1,c=He(n,e);return a?i.createElement("span",null,c):i.createElement("a",{href:"#/".concat(t.join("/"))},c)}var Se=function(e,r){return e=(e||"").replace(/^\//,""),Object.keys(r).forEach(function(t){e=e.replace(":".concat(t),r[t])}),e},$e=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0,a=(0,V.Z)(e),c=Se(r,t);return c&&a.push(c),a},be=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,c=e.style,v=e.className,f=e.routes,g=e.children,P=e.itemRender,O=P===void 0?ze:P,h=e.params,y=h===void 0?{}:h,R=te(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),b=i.useContext(M.E_),D=b.getPrefixCls,N=b.direction,G,ie=D("breadcrumb",r);if(f&&f.length>0){var ne=[];G=f.map(function(B){var X=Se(B.path,y);X&&ne.push(X);var je;return B.children&&B.children.length&&(je=i.createElement(pe.Z,null,B.children.map(function(ue){return i.createElement(pe.Z.Item,{key:ue.path||ue.breadcrumbName},O(ue,y,f,$e(ne,ue.path,y)))}))),i.createElement(Me,{overlay:je,separator:a,key:X||B.breadcrumbName},O(B,y,f,ne))})}else g&&(G=(0,Ue.Z)(g).map(function(B,X){return B&&((0,se.Z)(B.type&&(B.type.__ANT_BREADCRUMB_ITEM===!0||B.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,k.Tm)(B,{separator:a,key:X}))}));var q=I()(ie,(0,A.Z)({},"".concat(ie,"-rtl"),N==="rtl"),v);return i.createElement("div",(0,p.Z)({className:q,style:c},R),G)};be.Item=Me,be.Separator=Fe;var Ae=be,ae=Ae,Ge=l(51890),et=l(34952),tt=l(42051),rt=function(e,r,t){return!r||!t?null:i.createElement(tt.Z,{componentName:"PageHeader"},function(a){var c=a.back;return i.createElement("div",{className:"".concat(e,"-back")},i.createElement(et.Z,{onClick:function(f){t==null||t(f)},className:"".concat(e,"-back-button"),"aria-label":c},r))})},nt=function(e){return i.createElement(ae,e)},at=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:r==="rtl"?i.createElement(We,null):i.createElement(Re,null)},ot=function(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",a=r.title,c=r.avatar,v=r.subTitle,f=r.tags,g=r.extra,P=r.onBack,O="".concat(e,"-heading"),h=a||v||f||g;if(!h)return null;var y=at(r,t),R=rt(e,y,P),b=R||c||h;return i.createElement("div",{className:O},b&&i.createElement("div",{className:"".concat(O,"-left")},R,c&&i.createElement(Ge.C,c),a&&i.createElement("span",{className:"".concat(O,"-title"),title:typeof a=="string"?a:void 0},a),v&&i.createElement("span",{className:"".concat(O,"-sub-title"),title:typeof v=="string"?v:void 0},v),f&&i.createElement("span",{className:"".concat(O,"-tags")},f)),g&&i.createElement("span",{className:"".concat(O,"-extra")},g))},it=function(e,r){return r?i.createElement("div",{className:"".concat(e,"-footer")},r):null},lt=function(e,r){return i.createElement("div",{className:"".concat(e,"-content")},r)},ct=function(e){var r=i.useState(!1),t=(0,Ee.Z)(r,2),a=t[0],c=t[1],v=function(g){var P=g.width;c(P<768)};return i.createElement(M.C,null,function(f){var g,P=f.getPrefixCls,O=f.pageHeader,h=f.direction,y=e.prefixCls,R=e.style,b=e.footer,D=e.children,N=e.breadcrumb,G=e.breadcrumbRender,ie=e.className,ne=!0;"ghost"in e?ne=e.ghost:O&&"ghost"in O&&(ne=O.ghost);var q=P("page-header",y),B=function(){var Ve;return((Ve=N)===null||Ve===void 0?void 0:Ve.routes)?nt(N):null},X=B(),je=N&&"props"in N,ue=(G==null?void 0:G(e,X))||X,qe=je?N:ue,Ct=I()(q,ie,(g={"has-breadcrumb":!!qe,"has-footer":!!b},(0,A.Z)(g,"".concat(q,"-ghost"),ne),(0,A.Z)(g,"".concat(q,"-rtl"),h==="rtl"),(0,A.Z)(g,"".concat(q,"-compact"),a),g));return i.createElement(H.Z,{onResize:v},i.createElement("div",{className:Ct,style:R},qe,ot(q,e,h),D&&lt(q,D),it(q,b)))})},st=ct,xt=l(18106),Je=l(45934),Xe=l(64335),ft=l(21349),ut=l(85224),Rt=l(32331),dt=l(83832),vt=l(9960),mt=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"];function Qe(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),r.push.apply(r,t)}return r}function re(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Qe(Object(r),!0).forEach(function(t){Ye(n,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):Qe(Object(r)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))})}return n}function Ye(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function gt(n,e){if(n==null)return{};var r=ht(n,e),t,a;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(a=0;a<c.length;a++)t=c[a],!(e.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,t)||(r[t]=n[t]))}return r}function ht(n,e){if(n==null)return{};var r={},t=Object.keys(n),a,c;for(c=0;c<t.length;c++)a=t[c],!(e.indexOf(a)>=0)&&(r[a]=n[a]);return r}function oe(){return oe=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},oe.apply(this,arguments)}function we(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?we=function(r){return typeof r}:we=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},we(n)}function yt(n){return we(n)==="object"?n:{spinning:n}}var pt=function(e){var r=e.tabList,t=e.tabActiveKey,a=e.onTabChange,c=e.tabBarExtraContent,v=e.tabProps,f=e.prefixedClassName;return r&&r.length?i.createElement(Je.Z,oe({className:"".concat(f,"-tabs"),activeKey:t,onChange:function(P){a&&a(P)},tabBarExtraContent:c},v),r.map(function(g,P){return i.createElement(Je.Z.TabPane,oe({},g,{tab:g.tab,key:g.key||P}))})):null},bt=function(e,r,t){return!e&&!r?null:i.createElement("div",{className:"".concat(t,"-detail")},i.createElement("div",{className:"".concat(t,"-main")},i.createElement("div",{className:"".concat(t,"-row")},e&&i.createElement("div",{className:"".concat(t,"-content")},e),r&&i.createElement("div",{className:"".concat(t,"-extraContent")},r))))},Pt=function(e){var r=(0,i.useContext)(Xe.Z);return i.createElement("div",{style:{height:"100%",display:"flex",alignItems:"center"}},i.createElement(ae,oe({},r==null?void 0:r.breadcrumb,r==null?void 0:r.breadcrumbProps,e)))},ke=function(e){var r,t=(0,i.useContext)(Xe.Z),a=e.title,c=e.content,v=e.pageHeaderRender,f=e.header,g=e.prefixedClassName,P=e.extraContent,O=e.style,h=e.prefixCls,y=e.breadcrumbRender,R=gt(e,mt);if(v===!1)return null;if(v)return i.createElement(i.Fragment,null," ",v(re(re({},e),t)));var b=a;!a&&a!==!1&&(b=t.title);var D=re(re(re({},t),{},{title:b},R),{},{footer:pt(re(re({},R),{},{breadcrumbRender:y,prefixedClassName:g}))},f),N=D.breadcrumb;return["title","subTitle","breadcrumb","extra","tags","footer","avatar","backIcon"].every(function(G){return!D[G]})&&(!N||!(N==null?void 0:N.itemRender)&&!(N==null||(r=N.routes)===null||r===void 0?void 0:r.length))&&!c&&!P?null:i.createElement("div",{className:"".concat(g,"-warp")},i.createElement(st,oe({},D,{breadcrumb:y===!1?void 0:re(re({},D.breadcrumb),t.breadcrumbProps),prefixCls:h}),(f==null?void 0:f.children)||bt(c,P,g)))},Ot=function(e){var r,t=e.children,a=e.loading,c=a===void 0?!1:a,v=e.style,f=e.footer,g=e.affixProps,P=e.ghost,O=e.fixedHeader,h=(0,i.useContext)(Xe.Z),y=(0,i.useContext)(ce.ZP.ConfigContext),R=y.getPrefixCls,b=e.prefixCls||R("pro"),D="".concat(b,"-page-container"),N=I()(D,e.className,(r={},Ye(r,"".concat(b,"-page-container-ghost"),P),Ye(r,"".concat(b,"-page-container-with-footer"),f),r)),G=t?i.createElement("div",null,i.createElement("div",{className:"".concat(D,"-children-content")},t),h.hasFooterToolbar&&i.createElement("div",{style:{height:48,marginTop:24}})):null,ie=i.createElement(ke,oe({},e,{prefixCls:void 0,prefixedClassName:D})),ne=function(){var B=yt(c),X=B.spinning?i.createElement(dt.Z,B):G;return e.waterMarkProps||h.waterMarkProps?i.createElement(vt.Z,e.waterMarkProps||h.waterMarkProps,X):X};return i.createElement("div",{style:v,className:N},O&&ie?i.createElement($,oe({offsetTop:h.hasHeader&&h.fixedHeader?h.headerHeight:0},g),ie):ie,i.createElement(ft.Z,null,ne()),f&&i.createElement(ut.Z,{prefixCls:b},f))},Et=Ot},9960:function(fe,L,l){"use strict";var U=l(84305),j=l(69224),p=l(67294),A=l(94184),w=l.n(A);function Y(u,o){var s=Object.keys(u);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(u);o&&(d=d.filter(function(m){return Object.getOwnPropertyDescriptor(u,m).enumerable})),s.push.apply(s,d)}return s}function C(u){for(var o=1;o<arguments.length;o++){var s=arguments[o]!=null?arguments[o]:{};o%2?Y(Object(s),!0).forEach(function(d){F(u,d,s[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(s)):Y(Object(s)).forEach(function(d){Object.defineProperty(u,d,Object.getOwnPropertyDescriptor(s,d))})}return u}function F(u,o,s){return o in u?Object.defineProperty(u,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):u[o]=s,u}function W(u,o){return H(u)||_(u,o)||x(u,o)||i()}function i(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(u,o){if(!!u){if(typeof u=="string")return I(u,o);var s=Object.prototype.toString.call(u).slice(8,-1);if(s==="Object"&&u.constructor&&(s=u.constructor.name),s==="Map"||s==="Set")return Array.from(u);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return I(u,o)}}function I(u,o){(o==null||o>u.length)&&(o=u.length);for(var s=0,d=new Array(o);s<o;s++)d[s]=u[s];return d}function _(u,o){var s=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(s!=null){var d=[],m=!0,T=!1,S,z;try{for(s=s.call(u);!(m=(S=s.next()).done)&&(d.push(S.value),!(o&&d.length===o));m=!0);}catch(K){T=!0,z=K}finally{try{!m&&s.return!=null&&s.return()}finally{if(T)throw z}}return d}}function H(u){if(Array.isArray(u))return u}var M=function(o){if(!o)return 1;var s=o.backingStorePixelRatio||o.webkitBackingStorePixelRatio||o.mozBackingStorePixelRatio||o.msBackingStorePixelRatio||o.oBackingStorePixelRatio||o.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/s},V=function(o){var s=o.children,d=o.style,m=o.className,T=o.markStyle,S=o.markClassName,z=o.zIndex,K=z===void 0?9:z,de=o.gapX,ee=de===void 0?212:de,le=o.gapY,J=le===void 0?222:le,E=o.width,Z=E===void 0?120:E,Q=o.height,$=Q===void 0?64:Q,ve=o.rotate,ce=ve===void 0?-22:ve,Pe=o.image,Oe=o.content,Ie=o.offsetLeft,Ze=o.offsetTop,Le=o.fontStyle,Ee=Le===void 0?"normal":Le,Ce=o.fontWeight,xe=Ce===void 0?"normal":Ce,me=o.fontColor,ge=me===void 0?"rgba(0,0,0,.15)":me,Re=o.fontSize,Te=Re===void 0?16:Re,Ne=o.fontFamily,he=Ne===void 0?"sans-serif":Ne,We=o.prefixCls,Ue=(0,p.useContext)(j.ZP.ConfigContext),_e=Ue.getPrefixCls,De=_e("pro-layout-watermark",We),Ke=w()("".concat(De,"-wrapper"),m),Be=w()(De,S),Me=(0,p.useState)(""),ye=W(Me,2),Fe=ye[0],pe=ye[1];return(0,p.useEffect)(function(){var se=document.createElement("canvas"),k=se.getContext("2d"),te=M(k),He="".concat((ee+Z)*te,"px"),ze="".concat((J+$)*te,"px"),Se=Ie||ee/2,$e=Ze||J/2;if(se.setAttribute("width",He),se.setAttribute("height",ze),k){k.translate(Se*te,$e*te),k.rotate(Math.PI/180*Number(ce));var be=Z*te,Ae=$*te;if(Pe){var ae=new Image;ae.crossOrigin="anonymous",ae.referrerPolicy="no-referrer",ae.src=Pe,ae.onload=function(){k.drawImage(ae,0,0,be,Ae),pe(se.toDataURL())}}else if(Oe){var Ge=Number(Te)*te;k.font="".concat(Ee," normal ").concat(xe," ").concat(Ge,"px/").concat(Ae,"px ").concat(he),k.fillStyle=ge,k.fillText(Oe,0,0),pe(se.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[ee,J,Ie,Ze,ce,Ee,xe,Z,$,he,ge,Pe,Oe,Te]),p.createElement("div",{style:C({position:"relative"},d),className:Ke},s,p.createElement("div",{className:Be,style:C({zIndex:K,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(ee+Z,"px"),pointerEvents:"none",backgroundRepeat:"repeat",backgroundImage:"url('".concat(Fe,"')")},T)}))};L.Z=V},28267:function(){},17781:function(){},32331:function(){},29938:function(){},66157:function(){},51399:function(){},34952:function(fe,L,l){"use strict";var U=l(22122),j=l(67294),p=l(15105),A=function(C,F){var W={};for(var i in C)Object.prototype.hasOwnProperty.call(C,i)&&F.indexOf(i)<0&&(W[i]=C[i]);if(C!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,i=Object.getOwnPropertySymbols(C);x<i.length;x++)F.indexOf(i[x])<0&&Object.prototype.propertyIsEnumerable.call(C,i[x])&&(W[i[x]]=C[i[x]]);return W},w={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},Y=j.forwardRef(function(C,F){var W=function(u){var o=u.keyCode;o===p.Z.ENTER&&u.preventDefault()},i=function(u){var o=u.keyCode,s=C.onClick;o===p.Z.ENTER&&s&&s()},x=C.style,I=C.noStyle,_=C.disabled,H=A(C,["style","noStyle","disabled"]),M={};return I||(M=(0,U.Z)({},w)),_&&(M.pointerEvents="none"),M=(0,U.Z)((0,U.Z)({},M),x),j.createElement("div",(0,U.Z)({role:"button",tabIndex:0,ref:F},H,{onKeyDown:W,onKeyUp:i,style:M}))});L.Z=Y},97435:function(fe,L){"use strict";function l(U,j){for(var p=Object.assign({},U),A=0;A<j.length;A+=1){var w=j[A];delete p[w]}return p}L.Z=l}}]);
