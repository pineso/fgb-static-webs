(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[176],{9134:function(e,n,t){"use strict";const i=(0,t(7294).createContext)({});n.Z=i},6999:function(e,n,t){"use strict";t.d(n,{V:function(){return o},c:function(){return r}});var i=t(7968),_=t(5503);const a=e=>{const{componentCls:n}=e;return{[n]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},l=e=>{const{componentCls:n}=e;return{[n]:{position:"relative",maxWidth:"100%",minHeight:1}}},s=(e,n)=>((e,n)=>{const{componentCls:t,gridColumns:i}=e,_={};for(let a=i;a>=0;a--)0===a?(_[`${t}${n}-${a}`]={display:"none"},_[`${t}-push-${a}`]={insetInlineStart:"auto"},_[`${t}-pull-${a}`]={insetInlineEnd:"auto"},_[`${t}${n}-push-${a}`]={insetInlineStart:"auto"},_[`${t}${n}-pull-${a}`]={insetInlineEnd:"auto"},_[`${t}${n}-offset-${a}`]={marginInlineStart:0},_[`${t}${n}-order-${a}`]={order:0}):(_[`${t}${n}-${a}`]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:`0 0 ${a/i*100}%`,maxWidth:a/i*100+"%"}],_[`${t}${n}-push-${a}`]={insetInlineStart:a/i*100+"%"},_[`${t}${n}-pull-${a}`]={insetInlineEnd:a/i*100+"%"},_[`${t}${n}-offset-${a}`]={marginInlineStart:a/i*100+"%"},_[`${t}${n}-order-${a}`]={order:a});return _})(e,n),o=(0,i.Z)("Grid",(e=>[a(e)])),r=(0,i.Z)("Grid",(e=>{const n=(0,_.TS)(e,{gridColumns:24}),t={"-sm":n.screenSMMin,"-md":n.screenMDMin,"-lg":n.screenLGMin,"-xl":n.screenXLMin,"-xxl":n.screenXXLMin};return[l(n),s(n,""),s(n,"-xs"),Object.keys(t).map((e=>((e,n,t)=>({[`@media (min-width: ${n}px)`]:Object.assign({},s(e,t))}))(n,t[e],e))).reduce(((e,n)=>Object.assign(Object.assign({},e),n)),{})]}))},5968:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var i=t(7294),_=t(4184),a=t.n(_),l=t(4443),s=t(3124),o=t(9134),r=t(6999),c=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var _=0;for(i=Object.getOwnPropertySymbols(e);_<i.length;_++)n.indexOf(i[_])<0&&Object.prototype.propertyIsEnumerable.call(e,i[_])&&(t[i[_]]=e[i[_]])}return t};function g(e,n){const[t,_]=i.useState("string"===typeof e?e:"");return i.useEffect((()=>{(()=>{if("string"===typeof e&&_(e),"object"===typeof e)for(let t=0;t<l.c4.length;t++){const i=l.c4[t];if(!n[i])continue;const a=e[i];if(void 0!==a)return void _(a)}})()}),[JSON.stringify(e),n]),t}var d=i.forwardRef(((e,n)=>{const{prefixCls:t,justify:_,align:d,className:b,style:u,children:p,gutter:m=0,wrap:x}=e,f=c(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:h,direction:v}=i.useContext(s.E_),[y,j]=i.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[w,$]=i.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),C=g(d,w),E=g(_,w),I=i.useRef(m),N=(0,l.ZP)();i.useEffect((()=>{const e=N.subscribe((e=>{$(e);const n=I.current||0;(!Array.isArray(n)&&"object"===typeof n||Array.isArray(n)&&("object"===typeof n[0]||"object"===typeof n[1]))&&j(e)}));return()=>N.unsubscribe(e)}),[]);const O=h("row",t),[k,S]=(0,r.V)(O),A=(()=>{const e=[void 0,void 0];return(Array.isArray(m)?m:[m,void 0]).forEach(((n,t)=>{if("object"===typeof n)for(let i=0;i<l.c4.length;i++){const _=l.c4[i];if(y[_]&&void 0!==n[_]){e[t]=n[_];break}}else e[t]=n})),e})(),Z=a()(O,{[`${O}-no-wrap`]:!1===x,[`${O}-${E}`]:E,[`${O}-${C}`]:C,[`${O}-rtl`]:"rtl"===v},b,S),P={},M=null!=A[0]&&A[0]>0?A[0]/-2:void 0;M&&(P.marginLeft=M,P.marginRight=M),[,P.rowGap]=A;const[R,X]=A,B=i.useMemo((()=>({gutter:[R,X],wrap:x})),[R,X,x]);return k(i.createElement(o.Z.Provider,{value:B},i.createElement("div",Object.assign({},f,{className:Z,style:Object.assign(Object.assign({},P),u),ref:n}),p)))}))},81:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin",function(){return t(2974)}])},2974:function(e,n,t){"use strict";t.r(n);var i=t(7568),_=t(828),a=t(7582),l=t(5893),s=t(5933),o=t.n(s),r=t(8957),c=t(5968),g=t(6738),d=t(4567),b=t(1390),u=t(7294),p=t(1163),m=t(3738),x=t(1356),f=t(2286),h=t(7646),v=t(6134);n.default=function(){var e=(0,p.useRouter)(),n=(0,b.Sc)(m.ck),t=(0,b.Mm)({value:""}),s=(0,b.Mm)({value:""}),y=(0,_.Z)((0,b.OT)(),3),j=y[0],w=y[1],$=y[2];(0,u.useEffect)((function(){var e=localStorage.getItem("rememberedId");e?($(!0),t.onValidChange({target:{value:e}})):$(!1)}),[]);var C=function(){var _=(0,i.Z)((function(){var i,_,l;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return""===t.value?(alert("\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),[2]):""===s.value?(alert("\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),[2]):(j?localStorage.setItem("rememberedId",t.value):localStorage.removeItem("rememberedId"),[4,x.fp.authApi.signIn({loginId:t.value,loginPwd:s.value})]);case 1:return i=a.sent(),x.m8.isErrorResponse(i)?(i.message===h.Xt.NEED_VERIFY?e.push("./signup/approval?id=".concat(t.value)):alert(i.message),[2]):((0,f.setCookie)(null,h.Mv.ACCESSTOKEN,i.access_token,{maxAge:86400,path:"/"}),(0,f.setCookie)(null,h.Mv.REFRESHETOKEN,i.refresh_token,{maxAge:604800,path:"/"}),[4,x.fp.userApi.isRegisterGame()]);case 2:return _=a.sent(),x.m8.isErrorResponse(_)?(x.m8.signChecker(_)&&(alert(h.Xt.NEEDLOGIN),x.m8.removeUserData(),e.push("/signin")),alert(_.message),[2,null]):_.result?(e.push("/main"),[4,x.fp.userApi.getUserInfo(h.CL)]):[3,4];case 3:return l=a.sent(),x.m8.isErrorResponse(l)?(alert(l.message),x.m8.removeUserData(),[2]):(n({name:l.name,email:l.email,activityName:l.activityName,googleAuthenticator:l.googleAuthenticator}),[3,5]);case 4:e.push("/game"),a.label=5;case 5:return[2]}}))}));return function(){return _.apply(this,arguments)}}();return(0,l.jsx)("div",{children:(0,l.jsxs)("main",{className:o().container,children:[(0,l.jsx)("div",{className:o().title_container,children:(0,l.jsx)("div",{className:o().main_title,children:"\uc218\uc775 \uc250\uc5b4 \ud50c\ub7ab\ud3fc"})}),(0,l.jsx)("div",{className:o().login_container,children:(0,l.jsxs)(r.Z,{direction:"vertical",align:"center",className:o().login_box,children:[(0,l.jsx)(c.Z,{className:o().title,justify:"center",align:"middle",children:"Please sign in"}),(0,l.jsx)(c.Z,{justify:"space-between",align:"middle",className:o().input_item,children:(0,l.jsx)(g.Z,{placeholder:"ID",value:t.value,onChange:t.onChange})}),(0,l.jsx)(c.Z,{justify:"space-between",align:"middle",className:o().input_item,children:(0,l.jsx)(g.Z,{placeholder:"PASSWORD",type:"password",value:s.value,onChange:s.onChange})}),(0,l.jsx)(c.Z,{justify:"center",align:"middle",className:o().find_info,children:(0,l.jsx)(d.Z,{checked:j,onChange:function(){return w()},children:"ID \uc800\uc7a5"})}),(0,l.jsx)(c.Z,{children:(0,l.jsx)(v.k,{className:o().signIn_btn,onClick:C,children:"\ub85c\uadf8\uc778"})}),(0,l.jsx)(c.Z,{children:(0,l.jsx)(v.k,{className:o().signUp_btn,onClick:function(){e.push("./signup")},children:"\ud68c\uc6d0\uac00\uc785"})})]})})]})})}},5933:function(e){e.exports={button_global:"sign_button_global__34xNB",render_btn:"sign_render_btn__6Z0eS",input_global:"sign_input_global__REGKz",center_text:"sign_center_text__DopeV",input_password_global:"sign_input_password_global__ETyxX",select_global:"sign_select_global__rGLqq",select_dropdown_global:"sign_select_dropdown_global__jTlV7",table_global:"sign_table_global__oUBXq","ant-table-selection-column":"sign_ant-table-selection-column__p8T7H","ant-table-row-expand-icon-cell":"sign_ant-table-row-expand-icon-cell__ePsPK",index_table:"sign_index_table__DX9Xb",sidebar_global:"sign_sidebar_global__oZJFv",sidebar_menu_global:"sign_sidebar_menu_global__nCeKo",pagination_wrapper:"sign_pagination_wrapper__Are6t",pagination_nav:"sign_pagination_nav__NuQQ2",pagination_total:"sign_pagination_total__HN6Bo",checkbox_global:"sign_checkbox_global__VKXVz",radio_global:"sign_radio_global__h_vE2",radioGroup_global:"sign_radioGroup_global__bDyN4",index_container_global:"sign_index_container_global__2CoBA",index_search_container_global:"sign_index_search_container_global__0AYIq",index_searchBar_global:"sign_index_searchBar_global__I6aoK",index_content_global:"sign_index_content_global__zmLdu",index_content_wrapper_global:"sign_index_content_wrapper_global__xU9k9",index_table_wrapper_global:"sign_index_table_wrapper_global__g1HfF",index_table_nav_global:"sign_index_table_nav_global__UitEX",index_table_title_global:"sign_index_table_title_global__rQYit",index_table_title_item_global:"sign_index_table_title_item_global__U02oI",index_table_title_item_sort_global:"sign_index_table_title_item_sort_global__eex2O",index_table_title_item_label_global:"sign_index_table_title_item_label_global__IO1Sp",index_table_title_item_sort_icon_global:"sign_index_table_title_item_sort_icon_global__zbjPy",sort_asc:"sign_sort_asc__lhWMK",sort_desc:"sign_sort_desc__JyUeA",index_table_data_global:"sign_index_table_data_global__3c91I",index_table_item_global:"sign_index_table_item_global___eCf9",index_table_item_value_global:"sign_index_table_item_value_global__8s2Db",index_table_item_selected_global:"sign_index_table_item_selected_global__mzh15",index_table_empty_global:"sign_index_table_empty_global__ufsyp",index_table_bottomButton_global:"sign_index_table_bottomButton_global__PYW_i",index_table_button_new_global:"sign_index_table_button_new_global__T7IMW",index_manageButton_global:"sign_index_manageButton_global__LOdeV",container:"sign_container__ArYYa",divider:"sign_divider__t2Rim",layout_main:"sign_layout_main__Ek_Qe",title_container:"sign_title_container__Zq27L",sub_title:"sign_sub_title__sLoBf",main_title:"sign_main_title__qs3CQ",server_container:"sign_server_container__dxXCY",server_dropdown:"sign_server_dropdown__2aUTJ",login_container:"sign_login_container__TwCAW",login_box:"sign_login_box__BAq29",signIn_btn:"sign_signIn_btn__oOigk",signUp_btn:"sign_signUp_btn__6VzoN",title:"sign_title__2cPM4",input_item:"sign_input_item__aO3qm",find_info:"sign_find_info__BfAn5"}}},function(e){e.O(0,[716,893,867,434,701,460,307,774,888,179],(function(){return n=81,e(e.s=n);var n}));var n=e.O();_N_E=n}]);