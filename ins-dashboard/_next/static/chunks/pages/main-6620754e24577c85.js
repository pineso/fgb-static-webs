(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[671],{6059:function(_,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/main",function(){return e(1373)}])},2883:function(_,a,e){"use strict";e.d(a,{Z:function(){return Z}});var n,l=e(9534),t=e(5893),i=e(7183),o=e(6226),r=e(5968),s=e(4642),b=e.n(s),c=e(6042),d=e(9396),g=e(8508),m=e(7294),u=e(1163),x=e(7435),p=e.n(x),h=JSON.parse('{"p":[{"label":"\uba54\uc778","key":"main","children":null},{"label":"\uac8c\uc784\ubaa9\ub85d","key":"game","children":null},{"label":"\ucfe0\ud3f0\uc0c1\uc810","key":"coupon","children":null},{"label":"\ub0b4 \uc815\ubcf4","key":"profile","children":null}]}'),v=e(7646),f=i.Z.Sider;!function(_){_.home="/",_.bottomCenter="bottomCenter",_.checkBox="checkbox",_.inline="inline"}(n||(n={}));var B=function(_){switch(_){case v.PW:return["main"];case v.IO:return["game"];case v.bF:return["coupon"];case v.ih:return["profile"];default:return[]}},j=function(_){var a=(0,u.useRouter)(),e=(0,m.useState)([]),i=e[0],o=e[1],r=(_.titleKey,_.className),s=(0,l.Z)(_,["titleKey","className"]),b=h.p;return(0,t.jsx)(f,(0,d.Z)((0,c.Z)({className:"".concat(p().sidebar_global," ").concat(r)},s),{children:(0,t.jsx)(g.Z,{mode:n.inline,className:p().sidebar_menu_global,defaultSelectedKeys:B(_.titleKey),items:b,openKeys:i,onOpenChange:function(_){var a=_.find((function(_){return-1===i.indexOf(_)}));a&&-1===b.findIndex((function(_){return _.key===a}))?o(_):o(a?[a]:[])},onClick:function(_){a.push("/".concat(_.key))}})}))},y=(e(4174),e(1390)),w=(e(6101),i.Z.Header),N=function(_){var a=_.titleKey,e=(0,l.Z)(_,["titleKey"]);(0,u.useRouter)(),(0,y.TL)();if(a){return(0,t.jsx)(w,(0,d.Z)((0,c.Z)({},e),{children:(0,t.jsx)(r.Z,{justify:"space-between",children:(0,t.jsx)(o.Z,{children:(0,t.jsx)("div",{className:b().header_title,children:v.tj[a]})})})}))}},k=i.Z.Content,Z=function(_){var a=_.titleKey,e=_.children;_.fetchDataHandler,_.fetchRouteHandler,(0,l.Z)(_,["titleKey","children","fetchDataHandler","fetchRouteHandler"]);return(0,t.jsx)(o.Z,{className:b().layout_main,children:(0,t.jsxs)(r.Z,{className:b().layout_main_container,children:[(0,t.jsxs)(o.Z,{className:b().layout_main_header,children:[(0,t.jsx)(N,{titleKey:a,className:b().layout_main_container_header}),(0,t.jsx)(j,{titleKey:a,className:b().layout_main_container_navBar})]}),(0,t.jsx)(o.Z,{className:b().layout_main_container_bottom,children:(0,t.jsx)(k,{className:b().layout_main_container_content,children:(0,t.jsx)("div",{children:e})})})]})})}},1373:function(_,a,e){"use strict";e.r(a);var n=e(7568),l=e(6042),t=e(9396),i=e(7582),o=e(5893),r=e(1476),s=e.n(r),b=e(2883),c=e(7646),d=e(6134),g=e(154),m=e(1687),u=e(2929),x=e(8795),p=e(1390),h=e(1356),v=e(1163),f=e(7294),B=e(1819);a.default=function(){var _,a,e,r,j,y,w,N=(0,v.useRouter)(),k=new Date,Z=k.getFullYear(),C=k.getMonth()+1,S=(0,f.useState)(null),O=S[0],E=S[1],L=(0,p.DB)({value:"Clash Defense"}),D=(0,p.DB)({value:"\uc804\uccb4"}),T=(0,p.DB)({value:C.toString()}),K=(0,f.useState)(!1),P=K[0],R=K[1],G=(0,f.useState)(Z),I=G[0],W=G[1],A=(0,f.useState)(C),F=A[0],U=A[1],Q=(0,f.useState)(!1),Y=Q[0],H=Q[1],J=(0,f.useState)(!1),M=J[0],q=J[1],X=(0,f.useState)(!1),z=X[0],V=X[1],$=(0,f.useState)(!1),__=$[0],a_=$[1],e_=(0,f.useState)(!1),n_=e_[0],l_=e_[1],t_=function(){var _=(0,n.Z)((function(){var _;return(0,i.__generator)(this,(function(a){switch(a.label){case 0:return[4,h.fp.userApi.getUserInfo(c.CL)];case 1:return _=a.sent(),h.m8.isErrorResponse(_)?(h.m8.signChecker(_)&&(alert(c.Xt.NEEDLOGIN),h.m8.removeUserData(),N.push("/signin")),alert(_.message),[2,null]):(E(_),[2])}}))}));return function(){return _.apply(this,arguments)}}();(0,p.bd)((0,n.Z)((function(){var _;return(0,i.__generator)(this,(function(a){switch(a.label){case 0:return[4,h.fp.userApi.isRegisterGame()];case 1:return _=a.sent(),h.m8.isErrorResponse(_)?(h.m8.signChecker(_)&&(alert(c.Xt.NEEDLOGIN),h.m8.removeUserData(),N.push("/signin")),alert(_.message),[2,null]):(_.result?(t_(),R(!0)):(alert("\uac8c\uc784\ub4f1\ub85d\uc744 \uc9c4\ud589\ud574\uc8fc\uc138\uc694."),N.push("./game")),[2])}}))})),[]),(0,p.bd)((0,n.Z)((function(){return(0,i.__generator)(this,(function(_){return i_(),[2]}))})),[D.value]);var i_=function(){var _=(0,n.Z)((function(){var _;return(0,i.__generator)(this,(function(a){switch(a.label){case 0:return[4,h.fp.userApi.getUserInfoByDate(c.CL,Number(D.value),Number(T.value))];case 1:return _=a.sent(),h.m8.isErrorResponse(_)?(h.m8.signChecker(_)&&(alert(c.Xt.NEEDLOGIN),h.m8.removeUserData(),N.push("/signin")),alert(_.message),[2,null]):(E((function(a){return(0,t.Z)((0,l.Z)({},a),{accumulatedPrice:_.accumulatedPrice,refundPrice:_.refundPrice})})),W(Number(D.value)),U(Number(T.value)),"\uc804\uccb4"===D.value?g.ZP.success("\uc804\uccb4 \ub204\uc801 \ub370\uc774\ud130\ub97c \uc870\ud68c\ud558\uc600\uc2b5\ub2c8\ub2e4.",1):g.ZP.success("".concat(D.value,"\ub144 ").concat(T.value,"\uc6d4 \ub370\uc774\ud130\ub97c \uc870\ud68c\ud558\uc600\uc2b5\ub2c8\ub2e4."),1),[2])}}))}));return function(){return _.apply(this,arguments)}}(),o_=(0,o.jsx)(m.Z.Input,{active:!0,style:{verticalAlign:"baseline",marginRight:"5px"}}),r_=(0,o.jsx)(m.Z.Input,{active:!0,size:"large",style:{verticalAlign:"baseline"}});return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(b.Z,{titleKey:c.PW,children:(0,o.jsxs)("div",{className:s().container,children:[P?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(B.Cf,{open:Y,setOpen:H,data:O,setData:E,fetchData:t_}),(0,o.jsx)(B.Ek,{open:M,setOpen:q}),(0,o.jsx)(B.Q0,{open:z,setOpen:V}),(0,o.jsx)(B.fU,{open:__,setOpen:a_}),(0,o.jsx)(B.GT,{open:n_,setOpen:l_})]}):null,(0,o.jsxs)("div",{className:s().container_left,children:[(0,o.jsxs)("div",{className:s().left_summary,children:[(0,o.jsx)("div",{children:"\uc548\ub155\ud558\uc138\uc694."}),(0,o.jsxs)("div",{className:s().left_summary_name,children:[O?O.name:r_," \ub2d8"]}),(0,o.jsx)("div",{children:"\uc801\ub9bd \uc608\uc815 \uae08\uc561"}),(0,o.jsx)("div",{children:(0,o.jsxs)("strong",{children:["\u3000\\ ",O?null===(_=O.expectPrice)||void 0===_?void 0:_.toLocaleString():o_," \uc6d0"]})}),(0,o.jsx)("div",{children:"\ucd9c\uae08 \uac00\ub2a5 \uae08\uc561"}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("strong",{style:{color:"#ff00ff"},children:["\u3000\\ ",O?null===(a=O.possibleWithDrawPrice)||void 0===a?void 0:a.toLocaleString():o_," \uc6d0"]})," ","\uc785\ub2c8\ub2e4."]})]}),(0,o.jsxs)("div",{className:s().left_footer,children:[(0,o.jsx)(d.k,{onClick:function(){H(!0)},children:"\uc815\uc0b0 \uc2e0\uccad"}),(0,o.jsx)("span",{style:{cursor:"pointer"},onClick:function(){q(!0)},children:"\uc815\uc0b0 \uc2e0\uccad \ub0b4\uc5ed\ubcf4\uae30"})]})]}),(0,o.jsxs)("div",{className:s().container_right,children:[(0,o.jsxs)("div",{className:s().right_main,children:[(0,o.jsxs)("div",{className:s().right_main_header,children:[(0,o.jsx)(u.$A,{value:L.value,onChange:L.onChange}),(0,o.jsx)(u.K_,{value:D.value,onChange:D.onChange}),"\uc804\uccb4"!==D.value?(0,o.jsx)(u.WO,{value:T.value,onChange:T.onChange}):null,(0,o.jsx)(d.k,{icon:(0,o.jsx)(x.Z,{}),className:s().search_button,onClick:i_})]}),(0,o.jsxs)("div",{className:s().right_main_title,children:[(0,o.jsx)("h1",{children:null===L||void 0===L?void 0:L.value}),(0,o.jsx)("h2",{children:"\uc804\uccb4"===D.value?"\uc804\uccb4":"".concat(I,"\ub144 ").concat(F,"\uc6d4")})]}),(0,o.jsxs)("div",{className:s().right_main_content,children:[(0,o.jsxs)("div",{className:s().right_main_item,children:[(0,o.jsx)("div",{children:"\ub204\uc801 \uae08\uc561"}),(0,o.jsxs)("div",{children:[O?"\uc804\uccb4"===D.value?null===(e=O.totalAccumulatePrice)||void 0===e?void 0:e.toLocaleString():null===(r=O.accumulatedPrice)||void 0===r?void 0:r.toLocaleString():o_,"\uc6d0"]})]}),(0,o.jsxs)("div",{className:s().right_main_item,children:[(0,o.jsx)("div",{children:"\ud658\ubd88 \uae08\uc561"}),(0,o.jsxs)("div",{children:[" ",O?"\uc804\uccb4"===D.value?null===(j=O.totalRefundPrice)||void 0===j?void 0:j.toLocaleString():null===(y=O.refundPrice)||void 0===y?void 0:y.toLocaleString():o_,"\uc6d0"]})]})]})]}),(0,o.jsx)("div",{className:s().right_main2,children:(0,o.jsx)("div",{className:s().right_main2_content,children:(0,o.jsxs)("div",{className:s().right_main2_item,children:[(0,o.jsx)("div",{children:"\uc815\uc0b0 \uc2e0\uccad \uae08\uc561"}),(0,o.jsxs)("div",{children:[" ",O?null===(w=O.totalCalculatePrice)||void 0===w?void 0:w.toLocaleString():o_,"\uc6d0"]})]})})}),(0,o.jsxs)("div",{className:s().right_footer,children:[(0,o.jsx)(d.k,{onClick:function(){V(!0)},children:"\ud6c4\uc6d0\uc790 \ubaa9\ub85d"}),(0,o.jsx)(d.k,{onClick:function(){a_(!0)},children:"\ud6c4\uc6d0\uc790 \uacb0\uc81c \ub0b4\uc5ed"}),(0,o.jsx)(d.k,{onClick:function(){l_(!0)},children:"\ud6c4\uc6d0\uc790 \ud658\ubd88 \ub0b4\uc5ed"})]})]})]})})})}},7435:function(_){_.exports={button_global:"navbar_button_global__662Iy",render_btn:"navbar_render_btn__St3kN",input_global:"navbar_input_global__Tbmy2",center_text:"navbar_center_text__CciwA",input_password_global:"navbar_input_password_global__4PKce",select_global:"navbar_select_global__F_vwA",select_dropdown_global:"navbar_select_dropdown_global__4Ndsy",table_global:"navbar_table_global__a83Ar","ant-table-selection-column":"navbar_ant-table-selection-column__uJ_0D","ant-table-row-expand-icon-cell":"navbar_ant-table-row-expand-icon-cell__EpeCQ",index_table:"navbar_index_table__YgFyz",sidebar_global:"navbar_sidebar_global__rdgL6",sidebar_menu_global:"navbar_sidebar_menu_global__FLvZY",pagination_wrapper:"navbar_pagination_wrapper__Ugw1T",pagination_nav:"navbar_pagination_nav___6kWM",pagination_total:"navbar_pagination_total__HT2qA",checkbox_global:"navbar_checkbox_global__fhTNU",radio_global:"navbar_radio_global__gmDmd",radioGroup_global:"navbar_radioGroup_global__1wNHv",index_container_global:"navbar_index_container_global__Gu0sr",index_search_container_global:"navbar_index_search_container_global__J38Lp",index_searchBar_global:"navbar_index_searchBar_global__IU92m",index_content_global:"navbar_index_content_global__5lHcE",index_content_wrapper_global:"navbar_index_content_wrapper_global__x5Bcp",index_table_wrapper_global:"navbar_index_table_wrapper_global__Fm_em",index_table_nav_global:"navbar_index_table_nav_global__5x43n",index_table_title_global:"navbar_index_table_title_global__wSLQX",index_table_title_item_global:"navbar_index_table_title_item_global__KQ6BJ",index_table_title_item_sort_global:"navbar_index_table_title_item_sort_global__etxr5",index_table_title_item_label_global:"navbar_index_table_title_item_label_global__0WBz_",index_table_title_item_sort_icon_global:"navbar_index_table_title_item_sort_icon_global__nGo1v",sort_asc:"navbar_sort_asc__pMwED",sort_desc:"navbar_sort_desc__hMOOG",index_table_data_global:"navbar_index_table_data_global__gPqf9",index_table_item_global:"navbar_index_table_item_global__cHuNN",index_table_item_value_global:"navbar_index_table_item_value_global__ID86C",index_table_item_selected_global:"navbar_index_table_item_selected_global__vfjif",index_table_empty_global:"navbar_index_table_empty_global__ojMh3",index_table_bottomButton_global:"navbar_index_table_bottomButton_global__HssxQ",index_table_button_new_global:"navbar_index_table_button_new_global__nugEH",index_manageButton_global:"navbar_index_manageButton_global__LGH7k",container:"navbar_container__kcgv9",divider:"navbar_divider__K9dLn",layout_main:"navbar_layout_main__LJdxS"}},4642:function(_){_.exports={button_global:"pageBasic_button_global__glQN1",render_btn:"pageBasic_render_btn__txbOp",input_global:"pageBasic_input_global___bhyL",center_text:"pageBasic_center_text__3OJZC",input_password_global:"pageBasic_input_password_global__5S5_x",select_global:"pageBasic_select_global__0YOMF",select_dropdown_global:"pageBasic_select_dropdown_global__C_SdL",table_global:"pageBasic_table_global__1N7qk","ant-table-selection-column":"pageBasic_ant-table-selection-column__y5VOA","ant-table-row-expand-icon-cell":"pageBasic_ant-table-row-expand-icon-cell__WhsJl",index_table:"pageBasic_index_table__Kh4gy",sidebar_global:"pageBasic_sidebar_global__TAw5_",sidebar_menu_global:"pageBasic_sidebar_menu_global__yEVJQ",pagination_wrapper:"pageBasic_pagination_wrapper__08Okr",pagination_nav:"pageBasic_pagination_nav__JbnIx",pagination_total:"pageBasic_pagination_total__pRBjS",checkbox_global:"pageBasic_checkbox_global__mLQDl",radio_global:"pageBasic_radio_global__t5fDt",radioGroup_global:"pageBasic_radioGroup_global__FEQT4",index_container_global:"pageBasic_index_container_global__K4gKQ",index_search_container_global:"pageBasic_index_search_container_global__m1Xnk",index_searchBar_global:"pageBasic_index_searchBar_global__DZLs_",index_content_global:"pageBasic_index_content_global__wulLF",index_content_wrapper_global:"pageBasic_index_content_wrapper_global__VnORR",index_table_wrapper_global:"pageBasic_index_table_wrapper_global__32Y1a",index_table_nav_global:"pageBasic_index_table_nav_global__dnEE_",index_table_title_global:"pageBasic_index_table_title_global__WYkO8",index_table_title_item_global:"pageBasic_index_table_title_item_global__v_n5G",index_table_title_item_sort_global:"pageBasic_index_table_title_item_sort_global__nQ1YN",index_table_title_item_label_global:"pageBasic_index_table_title_item_label_global__OetUA",index_table_title_item_sort_icon_global:"pageBasic_index_table_title_item_sort_icon_global__3gd84",sort_asc:"pageBasic_sort_asc__MTCZV",sort_desc:"pageBasic_sort_desc__y2raW",index_table_data_global:"pageBasic_index_table_data_global__bO29U",index_table_item_global:"pageBasic_index_table_item_global__CIktk",index_table_item_value_global:"pageBasic_index_table_item_value_global__CEYtM",index_table_item_selected_global:"pageBasic_index_table_item_selected_global__1SbSm",index_table_empty_global:"pageBasic_index_table_empty_global__Ic83f",index_table_bottomButton_global:"pageBasic_index_table_bottomButton_global__3zXxv",index_table_button_new_global:"pageBasic_index_table_button_new_global__y6icY",index_manageButton_global:"pageBasic_index_manageButton_global__TuSIc",container:"pageBasic_container__d6Lwi",divider:"pageBasic_divider__sRNiU",layout_main:"pageBasic_layout_main__Y4WTn",layout_main_container:"pageBasic_layout_main_container__ZOiYV",layout_main_header:"pageBasic_layout_main_header__WtrX5",layout_main_container_header:"pageBasic_layout_main_container_header__6Tsdf",header_title:"pageBasic_header_title__nTX8v",layout_main_container_bottom:"pageBasic_layout_main_container_bottom__pdTvY"}},1476:function(_){_.exports={button_global:"main_button_global__dYEtN",render_btn:"main_render_btn__achlx",input_global:"main_input_global__W0UAk",center_text:"main_center_text__7Ins1",input_password_global:"main_input_password_global__ZBBnv",select_global:"main_select_global__BaOQd",select_dropdown_global:"main_select_dropdown_global__3WUSS",table_global:"main_table_global__aCX7i","ant-table-selection-column":"main_ant-table-selection-column__2ffxz","ant-table-row-expand-icon-cell":"main_ant-table-row-expand-icon-cell__c2yoB",index_table:"main_index_table__t5Rpf",sidebar_global:"main_sidebar_global__1dLYW",sidebar_menu_global:"main_sidebar_menu_global__44qT_",pagination_wrapper:"main_pagination_wrapper__uZC2B",pagination_nav:"main_pagination_nav__8G9J7",pagination_total:"main_pagination_total__ZWlcV",checkbox_global:"main_checkbox_global__r6tix",radio_global:"main_radio_global__sfgDE",radioGroup_global:"main_radioGroup_global__aZp7r",index_container_global:"main_index_container_global__qmuo4",index_search_container_global:"main_index_search_container_global___mg0T",index_searchBar_global:"main_index_searchBar_global__vFZn6",index_content_global:"main_index_content_global___zdM0",index_content_wrapper_global:"main_index_content_wrapper_global__mkCNq",index_table_wrapper_global:"main_index_table_wrapper_global__46qPu",index_table_nav_global:"main_index_table_nav_global__AkDTu",index_table_title_global:"main_index_table_title_global__R85ug",index_table_title_item_global:"main_index_table_title_item_global__hvJbB",index_table_title_item_sort_global:"main_index_table_title_item_sort_global__M_Xgr",index_table_title_item_label_global:"main_index_table_title_item_label_global__lhnKT",index_table_title_item_sort_icon_global:"main_index_table_title_item_sort_icon_global__qIitV",sort_asc:"main_sort_asc__P2Mj3",sort_desc:"main_sort_desc__fK8UT",index_table_data_global:"main_index_table_data_global__FF6e6",index_table_item_global:"main_index_table_item_global__OCojf",index_table_item_value_global:"main_index_table_item_value_global__mqezr",index_table_item_selected_global:"main_index_table_item_selected_global__M8hku",index_table_empty_global:"main_index_table_empty_global__qN1r2",index_table_bottomButton_global:"main_index_table_bottomButton_global__uuT94",index_table_button_new_global:"main_index_table_button_new_global__MHvlx",index_manageButton_global:"main_index_manageButton_global__QhNfs",container:"main_container__5_KkJ",divider:"main_divider__WaZ4Z",layout_main:"main_layout_main__odCbu",container_left:"main_container_left__IdzN7",left_summary:"main_left_summary__xRTaR",left_summary_name:"main_left_summary_name__rNG4f",left_footer:"main_left_footer__ynJw4",container_right:"main_container_right__9dnB_",right_main:"main_right_main__7n9Gq",right_main_header:"main_right_main_header__T0dyf",search_button:"main_search_button__98wZO",right_main_title:"main_right_main_title__QFfnp",right_main_content:"main_right_main_content__Ejkd4",right_main_item:"main_right_main_item__0ru9O",right_main2:"main_right_main2__q4Peg",right_main2_content:"main_right_main2_content__RW1kO",right_main2_item:"main_right_main2_item__2xw1z",right_footer:"main_right_footer__hySEs"}}},function(_){_.O(0,[716,970,867,637,145,220,216,290,460,819,359,774,888,179],(function(){return a=6059,_(_.s=a);var a}));var a=_.O();_N_E=a}]);