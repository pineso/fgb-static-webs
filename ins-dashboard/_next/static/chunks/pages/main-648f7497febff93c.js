(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[671],{6059:function(e,a,_){(window.__NEXT_P=window.__NEXT_P||[]).push(["/main",function(){return _(1373)}])},7878:function(e,a,_){"use strict";var n=_(7568),i=_(7582),t=_(5893),l=_(7294),o=_(1163),r=_(1390),s=_(1248),c=_(1356),d=_(4415);a.Z=function(e){return function(){var a=(0,o.useRouter)(),_=(0,r.CG)((function(e){return e.profileReducer}),s.wU).profile,u=(0,l.useState)(!1),m=u[0],g=u[1];return(0,r.bd)((0,n.Z)((function(){var e;return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return[4,c.fp.userApi.getUserInfo(d.CL)];case 1:return e=n.sent(),c.m8.isErrorResponse(e)||!_?(alert(d.SR.NEED_LOGIN),c.m8.removeUserData(),a.replace("/signin")):g(!0),[2]}}))})),[]),m?(0,t.jsx)(e,{}):null}}},2883:function(e,a,_){"use strict";_.d(a,{Z:function(){return E}});var n,i=_(9534),t=_(5893),l=_(7183),o=_(6226),r=_(5968),s=_(4642),c=_.n(s),d=_(6042),u=_(9396),m=_(8508),g=_(7294),b=_(1163),p=JSON.parse('{"p":[{"label":"\uba54\uc778","key":"main","children":null},{"label":"\uac8c\uc784\ubaa9\ub85d","key":"game","children":null},{"label":"\ucfe0\ud3f0\uc0c1\uc810","key":"coupon","children":null},{"label":"\ub0b4 \uc815\ubcf4","key":"profile","children":null}]}'),x=_(4415),h=_(3680),v=_(1390),f=_(4174),B=_(6101),j=l.Z.Sider;!function(e){e.home="/",e.bottomCenter="bottomCenter",e.checkBox="checkbox",e.inline="inline"}(n||(n={}));var y=function(e){switch(e){case x.PW:return["main"];case x.IO:return["game"];case x.bF:return["coupon"];case x.ih:return["profile"];default:return[]}},N=function(e){var a=(0,b.useRouter)(),_=(0,v.TL)(),l={main:h.t.main_icon.src,game:h.t.gameList_icon.src,coupon:h.t.coupon_icon.src,profile:h.t.profile_icon.src},o=(0,g.useState)([]),r=o[0],s=o[1],x=(e.titleKey,e.className),N=(0,i.Z)(e,["titleKey","className"]),w=p.p.map((function(e){return(0,u.Z)((0,d.Z)({},e),{icon:(0,t.jsx)("img",{src:l[e.key],alt:"".concat(e.label," icon"),className:c().icon})})}));return(0,t.jsxs)("div",{className:c().layout_main_container_navBar,children:[(0,t.jsx)(j,(0,u.Z)((0,d.Z)({className:"".concat(c().sidebar_global," ").concat(x)},N),{children:(0,t.jsx)(m.Z,{mode:n.inline,className:c().sidebar_menu_global,defaultSelectedKeys:y(e.titleKey),items:w,openKeys:r,onOpenChange:function(e){var a=e.find((function(e){return-1===r.indexOf(e)}));a&&-1===w.findIndex((function(e){return e.key===a}))?s(e):s(a?[a]:[])},onClick:function(e){a.push("/".concat(e.key))}})})),(0,t.jsxs)("div",{className:c().navBar_logout,onClick:function(){window.confirm("Are you sure you want to logout?")&&(f.m8.removeUserData(),_((0,B.PF)("")),a.push("/signin"))},children:[(0,t.jsx)("img",{src:h.t.logout_icon.src,alt:"logout_icon"}),(0,t.jsx)("span",{children:"\ub85c\uadf8\uc544\uc6c3"})]})]})},w=_(8250),k=_(7547),Z=_(1248),C=l.Z.Header,S=function(e){var a=e.titleKey,_=(0,i.Z)(e,["titleKey"]),n=(0,b.useRouter)(),l=(0,v.CG)((function(e){return e.profileReducer.profile}),Z.wU);if(a)return(0,t.jsxs)(C,(0,u.Z)((0,d.Z)({},_),{className:c().layout_main_container_header,children:[(0,t.jsxs)("div",{className:c().header_container_left,children:[(0,t.jsx)("img",{src:h.t.main_icon.src,alt:"main_icon"}),(0,t.jsx)("div",{className:c().header_title,children:x.tj[a]})]}),(0,t.jsxs)("div",{className:c().header_container_right,onClick:function(){n.push("/profile")},children:[(0,t.jsx)(w.C,{size:32,icon:(0,t.jsx)(k.Z,{})}),l?null===l||void 0===l?void 0:l.name:"GUEST"]})]}))},O=l.Z.Content,E=function(e){var a=e.titleKey,_=e.children;e.fetchDataHandler,e.fetchRouteHandler,(0,i.Z)(e,["titleKey","children","fetchDataHandler","fetchRouteHandler"]);return(0,t.jsx)(o.Z,{className:c().layout_main,children:(0,t.jsxs)(r.Z,{className:c().layout_main_container,children:[(0,t.jsxs)(o.Z,{className:c().layout_main_header,children:[(0,t.jsx)("div",{children:(0,t.jsx)("img",{src:h.t.frame_ins_logo.src,alt:"ins_logo"})}),(0,t.jsx)(S,{titleKey:a})]}),(0,t.jsxs)(o.Z,{className:c().layout_main_container_bottom,children:[(0,t.jsx)(N,{titleKey:a}),(0,t.jsx)(O,{className:c().layout_main_container_content,children:_})]})]})})}},1373:function(e,a,_){"use strict";_.r(a);var n=_(7568),i=_(6042),t=_(9396),l=_(7582),o=_(5893),r=_(1476),s=_.n(r),c=_(2883),d=_(4415),u=_(6134),m=_(154),g=_(1687),b=_(6074),p=_(2929),x=_(8795),h=_(1390),v=_(1356),f=_(1163),B=_(7294),j=_(9550),y=_(7878);a.default=(0,y.Z)((function(){var e,a,_,r,y,N,w,k=(0,f.useRouter)(),Z=new Date,C=Z.getFullYear(),S=Z.getMonth()+1,O=(0,B.useState)(null),E=O[0],D=O[1],L=(0,h.DB)({value:"Clash Defense"}),R=(0,B.useState)(null),P=R[0],T=R[1],W=(0,h.DB)({value:"\uc804\uccb4"}),I=(0,h.DB)({value:S.toString()}),K=(0,B.useState)(!1),U=K[0],G=K[1],A=(0,B.useState)(C),F=A[0],Y=A[1],q=(0,B.useState)(S),M=q[0],Q=q[1],X=(0,B.useState)(!1),z=X[0],J=X[1],V=(0,B.useState)(!1),H=V[0],$=V[1],ee=(0,B.useState)(!1),ae=ee[0],_e=ee[1],ne=(0,B.useState)(!1),ie=ne[0],te=ne[1],le=(0,B.useState)(!1),oe=le[0],re=le[1],se=(0,B.useState)(null),ce=se[0],de=se[1],ue=function(){var e=(0,n.Z)((function(){var e;return(0,l.__generator)(this,(function(a){switch(a.label){case 0:return[4,v.fp.userApi.getUserInfo(d.CL)];case 1:return e=a.sent(),v.m8.isErrorResponse(e)?(v.m8.signChecker(e)&&(alert(d.Xt.NEEDLOGIN),v.m8.removeUserData(),k.push("/signin")),alert(e.message),[2,null]):(D(e),[2])}}))}));return function(){return e.apply(this,arguments)}}();(0,h.bd)((0,n.Z)((function(){var e;return(0,l.__generator)(this,(function(a){switch(a.label){case 0:return[4,v.fp.userApi.isRegisterGame()];case 1:return e=a.sent(),v.m8.isErrorResponse(e)?(v.m8.signChecker(e)&&(alert(d.Xt.NEEDLOGIN),v.m8.removeUserData(),k.push("/signin")),alert(e.message),[2,null]):(e.result?(ue(),G(!0)):(alert("\uac8c\uc784\ub4f1\ub85d\uc744 \uc9c4\ud589\ud574\uc8fc\uc138\uc694."),k.push("./game")),[2])}}))})),[]),(0,h.bd)((0,n.Z)((function(){return(0,l.__generator)(this,(function(e){return me(),[2]}))})),[W.value]),(0,B.useEffect)((function(){if(L){var e=d.G3.find((function(e){return e.value===L.value}));e&&T(e.thumbnail)}}),[L]);var me=function(){var e=(0,n.Z)((function(){var e;return(0,l.__generator)(this,(function(a){switch(a.label){case 0:return[4,v.fp.userApi.getUserInfoByDate(d.CL,Number(W.value),Number(I.value))];case 1:return e=a.sent(),v.m8.isErrorResponse(e)?(v.m8.signChecker(e)&&(alert(d.Xt.NEEDLOGIN),v.m8.removeUserData(),k.push("/signin")),alert(e.message),[2,null]):(D((function(a){return(0,t.Z)((0,i.Z)({},a),{accumulatedPrice:e.accumulatedPrice,refundPrice:e.refundPrice})})),Y(Number(W.value)),Q(Number(I.value)),"\uc804\uccb4"===W.value?m.ZP.success("\uc804\uccb4 \ub204\uc801 \ub370\uc774\ud130\ub97c \uc870\ud68c\ud558\uc600\uc2b5\ub2c8\ub2e4.",1):m.ZP.success("".concat(W.value,"\ub144 ").concat(I.value,"\uc6d4 \ub370\uc774\ud130\ub97c \uc870\ud68c\ud558\uc600\uc2b5\ub2c8\ub2e4."),1),[2])}}))}));return function(){return e.apply(this,arguments)}}(),ge=function(e){"list"===e?(_e((function(e){return!e})),te(!1),re(!1)):"payment"===e?(te((function(e){return!e})),_e(!1),re(!1)):"refund"===e&&(re((function(e){return!e})),_e(!1),te(!1)),de((function(a){return a===e?null:e}))},be=(0,o.jsx)(g.Z.Input,{active:!0,style:{verticalAlign:"baseline",marginRight:"5px"}}),pe=(0,o.jsx)(g.Z.Input,{active:!0,size:"large",style:{verticalAlign:"baseline"}});return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(c.Z,{titleKey:d.PW,children:(0,o.jsxs)("section",{className:s().main,children:[U?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(j.Cf,{open:z,setOpen:J,data:E,setData:D,fetchData:ue}),(0,o.jsx)(j.Ek,{open:H,setOpen:$})]}):null,(0,o.jsx)("div",{className:s().container_left,children:(0,o.jsxs)("div",{className:s().left_summary,children:[(0,o.jsxs)("div",{children:["\uc548\ub155\ud558\uc138\uc694,",(0,o.jsx)("span",{className:s().left_summary_name,children:E?null===E||void 0===E?void 0:E.name:pe}),"\ub2d8"]}),(0,o.jsxs)("div",{className:s().left_content,children:[(0,o.jsx)("div",{children:"\ucd9c\uae08 \uac00\ub2a5 \uae08\uc561"}),(0,o.jsxs)("div",{children:["\u3000 ",E?null===E||void 0===E||null===(e=E.possibleWithDrawPrice)||void 0===e?void 0:e.toLocaleString():be," \uc6d0"]}),(0,o.jsx)("div",{children:"\uc801\ub9bd \uc608\uc815 \uae08\uc561"}),(0,o.jsx)("div",{children:(0,o.jsxs)("strong",{children:["\u3000 ",E?null===E||void 0===E||null===(a=E.expectPrice)||void 0===a?void 0:a.toLocaleString():be," \uc6d0"]})}),(0,o.jsx)(b.Z,{className:s().divider_left}),(0,o.jsxs)("div",{className:s().left_buttonWrapper,children:[(0,o.jsx)(u.k,{onClick:function(){J(!0)},children:"\uc815\uc0b0 \uc2e0\uccad"}),(0,o.jsx)(u.k,{onClick:function(){$(!0)},children:"\uc815\uc0b0 \uc2e0\uccad \ub0b4\uc5ed\ubcf4\uae30"})]})]})]})}),(0,o.jsxs)("div",{className:s().container_right,children:[ae?(0,o.jsx)(j.Q0,{open:ae,setOpen:_e}):ie?(0,o.jsx)(j.fU,{open:ie,setOpen:te}):oe?(0,o.jsx)(j.GT,{open:oe,setOpen:re}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:s().right_main,children:[(0,o.jsxs)("div",{className:s().right_main_header,children:[(0,o.jsx)(p.$A,{value:L.value,onChange:L.onChange}),(0,o.jsx)(p.K_,{value:W.value,onChange:W.onChange}),"\uc804\uccb4"!==W.value?(0,o.jsx)(p.WO,{value:I.value,onChange:I.onChange}):null,(0,o.jsx)(u.k,{icon:(0,o.jsx)(x.Z,{}),className:s().search_button,onClick:me})]}),(0,o.jsxs)("div",{className:s().right_main_title,children:[(0,o.jsxs)("h1",{children:[(0,o.jsx)("img",{src:P,alt:"game thumbnail"}),null===L||void 0===L?void 0:L.value]}),(0,o.jsx)("h2",{children:"\uc804\uccb4"===(null===W||void 0===W?void 0:W.value)?"\uc804\uccb4":"".concat(F,"\ub144 ").concat(M,"\uc6d4")})]}),(0,o.jsx)(b.Z,{className:s().divider_right}),(0,o.jsxs)("div",{className:s().right_main_content,children:[(0,o.jsxs)("div",{className:s().right_main_item,children:[(0,o.jsx)("div",{children:"\ub204\uc801 \uae08\uc561"}),(0,o.jsxs)("div",{children:[E?"\uc804\uccb4"===W.value?null===E||void 0===E||null===(_=E.totalAccumulatePrice)||void 0===_?void 0:_.toLocaleString():null===E||void 0===E||null===(r=E.accumulatedPrice)||void 0===r?void 0:r.toLocaleString():be,"\uc6d0"]})]}),(0,o.jsxs)("div",{className:s().right_main_item,children:[(0,o.jsx)("div",{children:"\ud658\ubd88 \uae08\uc561"}),(0,o.jsxs)("div",{children:[" ",E?"\uc804\uccb4"===(null===W||void 0===W?void 0:W.value)?null===E||void 0===E||null===(y=E.totalRefundPrice)||void 0===y?void 0:y.toLocaleString():null===E||void 0===E||null===(N=E.refundPrice)||void 0===N?void 0:N.toLocaleString():be,"\uc6d0"]})]})]})]}),(0,o.jsxs)("div",{className:s().right_main2,children:[(0,o.jsx)(b.Z,{className:s().divider_right}),(0,o.jsx)("div",{className:s().right_main2_content,children:(0,o.jsxs)("div",{className:s().right_main2_item,children:[(0,o.jsx)("div",{children:"\uc815\uc0b0 \uc2e0\uccad \uae08\uc561"}),(0,o.jsxs)("div",{children:[E?null===E||void 0===E||null===(w=E.totalCalculatePrice)||void 0===w?void 0:w.toLocaleString():be,"\uc6d0"]})]})})]}),(0,o.jsx)(b.Z,{className:s().divider_right})]}),(0,o.jsxs)("div",{className:s().right_footer,children:[(0,o.jsx)(u.k,{onClick:function(){return ge("list")},className:"list"===ce?s().active:"",children:"\ud6c4\uc6d0\uc790 \ubaa9\ub85d"}),(0,o.jsx)(u.k,{onClick:function(){return ge("payment")},className:"payment"===ce?s().active:"",children:"\ud6c4\uc6d0\uc790 \uacb0\uc81c \ub0b4\uc5ed"}),(0,o.jsx)(u.k,{onClick:function(){return ge("refund")},className:"refund"===ce?s().active:"",children:"\ud6c4\uc6d0\uc790 \ud658\ubd88 \ub0b4\uc5ed"})]})]})]})})})}))},4642:function(e){e.exports={button_global:"pageBasic_button_global__glQN1",render_btn:"pageBasic_render_btn__txbOp",input_global:"pageBasic_input_global___bhyL",center_text:"pageBasic_center_text__3OJZC",input_password_global:"pageBasic_input_password_global__5S5_x",select_global:"pageBasic_select_global__0YOMF",select_dropdown_global:"pageBasic_select_dropdown_global__C_SdL",table_global:"pageBasic_table_global__1N7qk","ant-table-selection-column":"pageBasic_ant-table-selection-column__y5VOA","ant-table-row-expand-icon-cell":"pageBasic_ant-table-row-expand-icon-cell__WhsJl",index_table:"pageBasic_index_table__Kh4gy",sidebar_global:"pageBasic_sidebar_global__TAw5_",sidebar_menu_global:"pageBasic_sidebar_menu_global__yEVJQ",navBar_logout:"pageBasic_navBar_logout__AwRaY",pagination_wrapper:"pageBasic_pagination_wrapper__08Okr",pagination_nav:"pageBasic_pagination_nav__JbnIx",pagination_total:"pageBasic_pagination_total__pRBjS",checkbox_global:"pageBasic_checkbox_global__mLQDl",radio_global:"pageBasic_radio_global__t5fDt",radioGroup_global:"pageBasic_radioGroup_global__FEQT4",modal_title:"pageBasic_modal_title__lK_b3",modal_container:"pageBasic_modal_container__gLLFq",index_container_global:"pageBasic_index_container_global__K4gKQ",index_search_container_global:"pageBasic_index_search_container_global__m1Xnk",index_searchBar_global:"pageBasic_index_searchBar_global__DZLs_",index_content_global:"pageBasic_index_content_global__wulLF",index_content_wrapper_global:"pageBasic_index_content_wrapper_global__VnORR",index_table_wrapper_global:"pageBasic_index_table_wrapper_global__32Y1a",index_table_nav_global:"pageBasic_index_table_nav_global__dnEE_",index_table_title_global:"pageBasic_index_table_title_global__WYkO8",index_table_title_item_global:"pageBasic_index_table_title_item_global__v_n5G",index_table_title_item_sort_global:"pageBasic_index_table_title_item_sort_global__nQ1YN",index_table_title_item_label_global:"pageBasic_index_table_title_item_label_global__OetUA",index_table_title_item_sort_icon_global:"pageBasic_index_table_title_item_sort_icon_global__3gd84",sort_asc:"pageBasic_sort_asc__MTCZV",sort_desc:"pageBasic_sort_desc__y2raW",index_table_data_global:"pageBasic_index_table_data_global__bO29U",index_table_item_global:"pageBasic_index_table_item_global__CIktk",index_table_item_value_global:"pageBasic_index_table_item_value_global__CEYtM",index_table_item_selected_global:"pageBasic_index_table_item_selected_global__1SbSm",index_table_empty_global:"pageBasic_index_table_empty_global__Ic83f",index_table_bottomButton_global:"pageBasic_index_table_bottomButton_global__3zXxv",index_table_button_new_global:"pageBasic_index_table_button_new_global__y6icY",index_manageButton_global:"pageBasic_index_manageButton_global__TuSIc",container:"pageBasic_container__d6Lwi",divider:"pageBasic_divider__sRNiU",layout_main:"pageBasic_layout_main__Y4WTn",layout_main_container:"pageBasic_layout_main_container__ZOiYV",layout_main_header:"pageBasic_layout_main_header__WtrX5",layout_main_container_header:"pageBasic_layout_main_container_header__6Tsdf",header_container_left:"pageBasic_header_container_left__DF1qn",header_title:"pageBasic_header_title__nTX8v",header_container_right:"pageBasic_header_container_right__alrtn",layout_main_container_bottom:"pageBasic_layout_main_container_bottom__pdTvY",layout_main_container_navBar:"pageBasic_layout_main_container_navBar__MfMI4",layout_main_container_content:"pageBasic_layout_main_container_content__4Dkht"}},1476:function(e){e.exports={button_global:"main_button_global__dYEtN",render_btn:"main_render_btn__achlx",input_global:"main_input_global__W0UAk",center_text:"main_center_text__7Ins1",input_password_global:"main_input_password_global__ZBBnv",select_global:"main_select_global__BaOQd",select_dropdown_global:"main_select_dropdown_global__3WUSS",table_global:"main_table_global__aCX7i","ant-table-selection-column":"main_ant-table-selection-column__2ffxz","ant-table-row-expand-icon-cell":"main_ant-table-row-expand-icon-cell__c2yoB",index_table:"main_index_table__t5Rpf",sidebar_global:"main_sidebar_global__1dLYW",sidebar_menu_global:"main_sidebar_menu_global__44qT_",navBar_logout:"main_navBar_logout__LE0d7",pagination_wrapper:"main_pagination_wrapper__uZC2B",pagination_nav:"main_pagination_nav__8G9J7",pagination_total:"main_pagination_total__ZWlcV",checkbox_global:"main_checkbox_global__r6tix",radio_global:"main_radio_global__sfgDE",radioGroup_global:"main_radioGroup_global__aZp7r",modal_title:"main_modal_title__OIVDD",modal_container:"main_modal_container__Y4f0b",index_container_global:"main_index_container_global__qmuo4",index_search_container_global:"main_index_search_container_global___mg0T",index_searchBar_global:"main_index_searchBar_global__vFZn6",index_content_global:"main_index_content_global___zdM0",index_content_wrapper_global:"main_index_content_wrapper_global__mkCNq",index_table_wrapper_global:"main_index_table_wrapper_global__46qPu",index_table_nav_global:"main_index_table_nav_global__AkDTu",index_table_title_global:"main_index_table_title_global__R85ug",index_table_title_item_global:"main_index_table_title_item_global__hvJbB",index_table_title_item_sort_global:"main_index_table_title_item_sort_global__M_Xgr",index_table_title_item_label_global:"main_index_table_title_item_label_global__lhnKT",index_table_title_item_sort_icon_global:"main_index_table_title_item_sort_icon_global__qIitV",sort_asc:"main_sort_asc__P2Mj3",sort_desc:"main_sort_desc__fK8UT",index_table_data_global:"main_index_table_data_global__FF6e6",index_table_item_global:"main_index_table_item_global__OCojf",index_table_item_value_global:"main_index_table_item_value_global__mqezr",index_table_item_selected_global:"main_index_table_item_selected_global__M8hku",index_table_empty_global:"main_index_table_empty_global__qN1r2",index_table_bottomButton_global:"main_index_table_bottomButton_global__uuT94",index_table_button_new_global:"main_index_table_button_new_global__MHvlx",index_manageButton_global:"main_index_manageButton_global__QhNfs",container:"main_container__5_KkJ",divider:"main_divider__WaZ4Z",layout_main:"main_layout_main__odCbu",main:"main_main___8WN3",container_left:"main_container_left__IdzN7",left_summary:"main_left_summary__xRTaR",left_summary_name:"main_left_summary_name__rNG4f",left_content:"main_left_content__WCQEk",divider_left:"main_divider_left__3dCmS",left_buttonWrapper:"main_left_buttonWrapper__Wh2aU",container_right:"main_container_right__9dnB_",right_main:"main_right_main__7n9Gq",right_main_header:"main_right_main_header__T0dyf",search_button:"main_search_button__98wZO",right_main_title:"main_right_main_title__QFfnp",right_main_content:"main_right_main_content__Ejkd4",right_main_item:"main_right_main_item__0ru9O",right_main2:"main_right_main2__q4Peg",right_main2_content:"main_right_main2_content__RW1kO",right_main2_item:"main_right_main2_item__2xw1z",right_footer:"main_right_footer__hySEs",divider_right:"main_divider_right__L66qP",active:"main_active__LiO5y"}}},function(e){e.O(0,[716,598,867,930,224,795,446,269,460,997,550,106,774,888,179],(function(){return a=6059,e(e.s=a);var a}));var a=e.O();_N_E=a}]);