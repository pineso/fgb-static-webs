(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[671],{6059:function(_,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/main",function(){return e(8835)}])},8835:function(_,a,e){"use strict";e.r(a),e.d(a,{default:function(){return W}});var n,l=e(7568),t=e(6042),i=e(9396),o=e(7582),r=e(5893),b=e(1476),s=e.n(b),c=e(9534),d=e(7183),g=e(6226),m=e(5968),u=e(4642),x=e.n(u),p=e(4007),h=e(7294),v=e(1163),f=e(7435),B=e.n(f),y=JSON.parse('{"p":[{"label":"\uba54\uc778","key":"main","children":null},{"label":"\uac8c\uc784\ubaa9\ub85d","key":"game","children":null},{"label":"\ucfe0\ud3f0\uc0c1\uc810","key":"coupon","children":null},{"label":"\ub0b4 \uc815\ubcf4","key":"profile","children":null}]}'),j=e(4415),w=d.Z.Sider;!function(_){_.home="/",_.bottomCenter="bottomCenter",_.checkBox="checkbox",_.inline="inline"}(n||(n={}));var N=function(_){switch(_){case j.PW:return["main"];case j.IO:return["game"];case j.bF:return["coupon"];case j.ih:return["profile"];default:return[]}},k=function(_){var a=(0,v.useRouter)(),e=(0,h.useState)([]),l=e[0],o=e[1],b=(_.titleKey,_.className),s=(0,c.Z)(_,["titleKey","className"]),d=y.p;return(0,r.jsx)(w,(0,i.Z)((0,t.Z)({className:"".concat(B().sidebar_global," ").concat(b)},s),{children:(0,r.jsx)(p.Z,{mode:n.inline,className:B().sidebar_menu_global,defaultSelectedKeys:N(_.titleKey),items:d,openKeys:l,onOpenChange:function(_){var a=_.find((function(_){return-1===l.indexOf(_)}));a&&-1===d.findIndex((function(_){return _.key===a}))?o(_):o(a?[a]:[])},onClick:function(_){a.push("/".concat(_.key))}})}))},Z=(e(3473),e(1390)),C=(e(6101),d.Z.Header),O=function(_){var a=_.titleKey,e=(0,c.Z)(_,["titleKey"]);(0,v.useRouter)(),(0,Z.TL)();if(a){return(0,r.jsx)(C,(0,i.Z)((0,t.Z)({},e),{children:(0,r.jsx)(m.Z,{justify:"space-between",children:(0,r.jsx)(g.Z,{children:(0,r.jsx)("div",{className:x().header_title,children:j.tj[a]})})})}))}},D=d.Z.Content,S=function(_){var a=_.titleKey,e=_.children;_.fetchDataHandler,_.fetchRouteHandler,(0,c.Z)(_,["titleKey","children","fetchDataHandler","fetchRouteHandler"]);return(0,r.jsx)(g.Z,{className:x().layout_main,children:(0,r.jsxs)(m.Z,{className:x().layout_main_container,children:[(0,r.jsxs)(g.Z,{className:x().layout_main_header,children:[(0,r.jsx)(O,{titleKey:a,className:x().layout_main_container_header}),(0,r.jsx)(k,{titleKey:a,className:x().layout_main_container_navBar})]}),(0,r.jsx)(g.Z,{className:x().layout_main_container_bottom,children:(0,r.jsx)(D,{className:x().layout_main_container_content,children:(0,r.jsx)("div",{children:e})})})]})})},E=e(6134),L=e(2929),T=e(8795),K=e(4971),R=e(2583),W=function(){var _=(0,v.useRouter)(),a=new Date,e=a.getFullYear(),n=a.getMonth()+1,b=(0,h.useState)(null),c=b[0],d=b[1],g=(0,Z.DB)({value:"Dash Defence"}),m=(0,Z.DB)({value:e.toString()}),u=(0,Z.DB)({value:n.toString()}),x=(0,h.useState)(!1),p=x[0],f=x[1],B=function(){var a=(0,l.Z)((function(){var a;return(0,o.__generator)(this,(function(e){switch(e.label){case 0:return[4,K.fp.userApi.getUserInfo(j.CL)];case 1:return a=e.sent(),K.m8.isErrorResponse(a)?(K.m8.signChecker(a)&&(alert(j.Xt.NEEDLOGIN),K.m8.removeUserData(),_.push("/signin")),alert(a.message),[2,null]):(d(a),[2])}}))}));return function(){return a.apply(this,arguments)}}();(0,Z.bd)((0,l.Z)((function(){return(0,o.__generator)(this,(function(_){return B(),[2]}))})),[]);var y=function(){var a=(0,l.Z)((function(){var a;return(0,o.__generator)(this,(function(e){switch(e.label){case 0:return[4,K.fp.userApi.getUserInfoByDate(j.CL,Number(m.value),Number(u.value))];case 1:return a=e.sent(),K.m8.isErrorResponse(a)?(K.m8.signChecker(a)&&(alert(j.Xt.NEEDLOGIN),K.m8.removeUserData(),_.push("/signin")),alert(a.message),[2,null]):(d((function(_){return(0,i.Z)((0,t.Z)({},_),{res:a})})),[2])}}))}));return function(){return a.apply(this,arguments)}}();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(S,{titleKey:j.PW,children:(0,r.jsxs)("div",{className:s().container,children:[(0,r.jsx)(R.Cf,{open:p,setOpen:f,data:c,setData:d,fetchData:B}),(0,r.jsxs)("div",{className:s().container_left,children:[(0,r.jsxs)("div",{className:s().left_summary,children:[(0,r.jsx)("div",{children:"\uc548\ub155\ud558\uc138\uc694."}),(0,r.jsxs)("div",{className:s().left_summary_name,children:["\uc774\uc6d0\ud638"," \ub2d8"]}),(0,r.jsx)("div",{children:"\uc801\ub9bd \uc608\uc815 \uae08\uc561"}),(0,r.jsx)("div",{children:(0,r.jsxs)("strong",{children:["\u3000",null===c||void 0===c?void 0:c.expectPrice.toLocaleString()," \uc6d0"]})}),(0,r.jsx)("div",{children:"\ucd9c\uae08 \uac00\ub2a5 \uae08\uc561"}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("strong",{style:{color:"#ff00ff"},children:["\u3000",null===c||void 0===c?void 0:c.possibleWithDrawPrice.toLocaleString()]})," ","\uc785\ub2c8\ub2e4."]})]}),(0,r.jsxs)("div",{className:s().left_footer,children:[(0,r.jsx)(E.k,{onClick:function(){f(!0)},children:"\uc815\uc0b0 \uc2e0\uccad"}),(0,r.jsx)("span",{children:"\uc815\uc0b0 \uc2e0\uccad \ub0b4\uc5ed\ubcf4\uae30"})]})]}),(0,r.jsxs)("div",{className:s().container_right,children:[(0,r.jsxs)("div",{className:s().right_main,children:[(0,r.jsxs)("div",{className:s().right_main_header,children:[(0,r.jsx)(L.$A,{value:g.value,onChange:g.onChange}),(0,r.jsx)(L.K_,{value:m.value,onChange:m.onChange}),(0,r.jsx)(L.WO,{value:u.value,onChange:u.onChange}),(0,r.jsx)(E.k,{icon:(0,r.jsx)(T.Z,{}),className:s().search_button,onClick:y})]}),(0,r.jsxs)("div",{className:s().right_main_title,children:[(0,r.jsx)("h1",{children:null===g||void 0===g?void 0:g.value}),(0,r.jsxs)("h2",{children:[null===m||void 0===m?void 0:m.value,"\ub144 ",null===u||void 0===u?void 0:u.value,"\uc6d4"]})]}),(0,r.jsxs)("div",{className:s().right_main_content,children:[(0,r.jsxs)("div",{className:s().right_main_item,children:[(0,r.jsx)("div",{children:"\ub204\uc801 \uae08\uc561"}),(0,r.jsxs)("div",{children:[" ",null===c||void 0===c?void 0:c.totalAccumulatePrice.toLocaleString(),"\uc6d0"]})]}),(0,r.jsxs)("div",{className:s().right_main_item,children:[(0,r.jsx)("div",{children:"\ud658\ubd88 \uae08\uc561"}),(0,r.jsxs)("div",{children:[" ",null===c||void 0===c?void 0:c.totalRefundPrice.toLocaleString(),"\uc6d0"]})]})]})]}),(0,r.jsx)("div",{className:s().right_main2,children:(0,r.jsx)("div",{className:s().right_main2_content,children:(0,r.jsxs)("div",{className:s().right_main2_item,children:[(0,r.jsx)("div",{children:"\uc815\uc0b0 \uc2e0\uccad \uae08\uc561"}),(0,r.jsxs)("div",{children:[" ",null===c||void 0===c?void 0:c.totalCalculatePrice.toLocaleString(),"\uc6d0"]})]})})}),(0,r.jsxs)("div",{className:s().right_footer,children:[(0,r.jsx)(E.k,{children:"\ud6c4\uc6d0\uc790 \ubaa9\ub85d"}),(0,r.jsx)(E.k,{children:"\ud6c4\uc6d0\uc790 \uacb0\uc81c \ub0b4\uc5ed"}),(0,r.jsx)(E.k,{children:"\ud6c4\uc6d0\uc790 \ud658\ubd88 \ub0b4\uc5ed"})]})]})]})})})}},7435:function(_){_.exports={button_global:"navbar_button_global__662Iy",render_btn:"navbar_render_btn__St3kN",input_global:"navbar_input_global__Tbmy2",center_text:"navbar_center_text__CciwA",input_password_global:"navbar_input_password_global__4PKce",select_global:"navbar_select_global__F_vwA",select_dropdown_global:"navbar_select_dropdown_global__4Ndsy",table_global:"navbar_table_global__a83Ar","ant-table-selection-column":"navbar_ant-table-selection-column__uJ_0D","ant-table-row-expand-icon-cell":"navbar_ant-table-row-expand-icon-cell__EpeCQ",index_table:"navbar_index_table__YgFyz",sidebar_global:"navbar_sidebar_global__rdgL6",sidebar_menu_global:"navbar_sidebar_menu_global__FLvZY",pagination_wrapper:"navbar_pagination_wrapper__Ugw1T",pagination_nav:"navbar_pagination_nav___6kWM",pagination_total:"navbar_pagination_total__HT2qA",checkbox_global:"navbar_checkbox_global__fhTNU",radio_global:"navbar_radio_global__gmDmd",radioGroup_global:"navbar_radioGroup_global__1wNHv",index_container_global:"navbar_index_container_global__Gu0sr",index_search_container_global:"navbar_index_search_container_global__J38Lp",index_searchBar_global:"navbar_index_searchBar_global__IU92m",index_content_global:"navbar_index_content_global__5lHcE",index_content_wrapper_global:"navbar_index_content_wrapper_global__x5Bcp",index_table_wrapper_global:"navbar_index_table_wrapper_global__Fm_em",index_table_nav_global:"navbar_index_table_nav_global__5x43n",index_table_title_global:"navbar_index_table_title_global__wSLQX",index_table_title_item_global:"navbar_index_table_title_item_global__KQ6BJ",index_table_title_item_sort_global:"navbar_index_table_title_item_sort_global__etxr5",index_table_title_item_label_global:"navbar_index_table_title_item_label_global__0WBz_",index_table_title_item_sort_icon_global:"navbar_index_table_title_item_sort_icon_global__nGo1v",sort_asc:"navbar_sort_asc__pMwED",sort_desc:"navbar_sort_desc__hMOOG",index_table_data_global:"navbar_index_table_data_global__gPqf9",index_table_item_global:"navbar_index_table_item_global__cHuNN",index_table_item_value_global:"navbar_index_table_item_value_global__ID86C",index_table_item_selected_global:"navbar_index_table_item_selected_global__vfjif",index_table_empty_global:"navbar_index_table_empty_global__ojMh3",index_table_bottomButton_global:"navbar_index_table_bottomButton_global__HssxQ",index_table_button_new_global:"navbar_index_table_button_new_global__nugEH",index_manageButton_global:"navbar_index_manageButton_global__LGH7k",container:"navbar_container__kcgv9",divider:"navbar_divider__K9dLn",layout_main:"navbar_layout_main__LJdxS"}},4642:function(_){_.exports={button_global:"pageBasic_button_global__glQN1",render_btn:"pageBasic_render_btn__txbOp",input_global:"pageBasic_input_global___bhyL",center_text:"pageBasic_center_text__3OJZC",input_password_global:"pageBasic_input_password_global__5S5_x",select_global:"pageBasic_select_global__0YOMF",select_dropdown_global:"pageBasic_select_dropdown_global__C_SdL",table_global:"pageBasic_table_global__1N7qk","ant-table-selection-column":"pageBasic_ant-table-selection-column__y5VOA","ant-table-row-expand-icon-cell":"pageBasic_ant-table-row-expand-icon-cell__WhsJl",index_table:"pageBasic_index_table__Kh4gy",sidebar_global:"pageBasic_sidebar_global__TAw5_",sidebar_menu_global:"pageBasic_sidebar_menu_global__yEVJQ",pagination_wrapper:"pageBasic_pagination_wrapper__08Okr",pagination_nav:"pageBasic_pagination_nav__JbnIx",pagination_total:"pageBasic_pagination_total__pRBjS",checkbox_global:"pageBasic_checkbox_global__mLQDl",radio_global:"pageBasic_radio_global__t5fDt",radioGroup_global:"pageBasic_radioGroup_global__FEQT4",index_container_global:"pageBasic_index_container_global__K4gKQ",index_search_container_global:"pageBasic_index_search_container_global__m1Xnk",index_searchBar_global:"pageBasic_index_searchBar_global__DZLs_",index_content_global:"pageBasic_index_content_global__wulLF",index_content_wrapper_global:"pageBasic_index_content_wrapper_global__VnORR",index_table_wrapper_global:"pageBasic_index_table_wrapper_global__32Y1a",index_table_nav_global:"pageBasic_index_table_nav_global__dnEE_",index_table_title_global:"pageBasic_index_table_title_global__WYkO8",index_table_title_item_global:"pageBasic_index_table_title_item_global__v_n5G",index_table_title_item_sort_global:"pageBasic_index_table_title_item_sort_global__nQ1YN",index_table_title_item_label_global:"pageBasic_index_table_title_item_label_global__OetUA",index_table_title_item_sort_icon_global:"pageBasic_index_table_title_item_sort_icon_global__3gd84",sort_asc:"pageBasic_sort_asc__MTCZV",sort_desc:"pageBasic_sort_desc__y2raW",index_table_data_global:"pageBasic_index_table_data_global__bO29U",index_table_item_global:"pageBasic_index_table_item_global__CIktk",index_table_item_value_global:"pageBasic_index_table_item_value_global__CEYtM",index_table_item_selected_global:"pageBasic_index_table_item_selected_global__1SbSm",index_table_empty_global:"pageBasic_index_table_empty_global__Ic83f",index_table_bottomButton_global:"pageBasic_index_table_bottomButton_global__3zXxv",index_table_button_new_global:"pageBasic_index_table_button_new_global__y6icY",index_manageButton_global:"pageBasic_index_manageButton_global__TuSIc",container:"pageBasic_container__d6Lwi",divider:"pageBasic_divider__sRNiU",layout_main:"pageBasic_layout_main__Y4WTn",layout_main_container:"pageBasic_layout_main_container__ZOiYV",layout_main_header:"pageBasic_layout_main_header__WtrX5",layout_main_container_header:"pageBasic_layout_main_container_header__6Tsdf",header_title:"pageBasic_header_title__nTX8v",layout_main_container_bottom:"pageBasic_layout_main_container_bottom__pdTvY"}},1476:function(_){_.exports={button_global:"main_button_global__dYEtN",render_btn:"main_render_btn__achlx",input_global:"main_input_global__W0UAk",center_text:"main_center_text__7Ins1",input_password_global:"main_input_password_global__ZBBnv",select_global:"main_select_global__BaOQd",select_dropdown_global:"main_select_dropdown_global__3WUSS",table_global:"main_table_global__aCX7i","ant-table-selection-column":"main_ant-table-selection-column__2ffxz","ant-table-row-expand-icon-cell":"main_ant-table-row-expand-icon-cell__c2yoB",index_table:"main_index_table__t5Rpf",sidebar_global:"main_sidebar_global__1dLYW",sidebar_menu_global:"main_sidebar_menu_global__44qT_",pagination_wrapper:"main_pagination_wrapper__uZC2B",pagination_nav:"main_pagination_nav__8G9J7",pagination_total:"main_pagination_total__ZWlcV",checkbox_global:"main_checkbox_global__r6tix",radio_global:"main_radio_global__sfgDE",radioGroup_global:"main_radioGroup_global__aZp7r",index_container_global:"main_index_container_global__qmuo4",index_search_container_global:"main_index_search_container_global___mg0T",index_searchBar_global:"main_index_searchBar_global__vFZn6",index_content_global:"main_index_content_global___zdM0",index_content_wrapper_global:"main_index_content_wrapper_global__mkCNq",index_table_wrapper_global:"main_index_table_wrapper_global__46qPu",index_table_nav_global:"main_index_table_nav_global__AkDTu",index_table_title_global:"main_index_table_title_global__R85ug",index_table_title_item_global:"main_index_table_title_item_global__hvJbB",index_table_title_item_sort_global:"main_index_table_title_item_sort_global__M_Xgr",index_table_title_item_label_global:"main_index_table_title_item_label_global__lhnKT",index_table_title_item_sort_icon_global:"main_index_table_title_item_sort_icon_global__qIitV",sort_asc:"main_sort_asc__P2Mj3",sort_desc:"main_sort_desc__fK8UT",index_table_data_global:"main_index_table_data_global__FF6e6",index_table_item_global:"main_index_table_item_global__OCojf",index_table_item_value_global:"main_index_table_item_value_global__mqezr",index_table_item_selected_global:"main_index_table_item_selected_global__M8hku",index_table_empty_global:"main_index_table_empty_global__qN1r2",index_table_bottomButton_global:"main_index_table_bottomButton_global__uuT94",index_table_button_new_global:"main_index_table_button_new_global__MHvlx",index_manageButton_global:"main_index_manageButton_global__QhNfs",container:"main_container__5_KkJ",divider:"main_divider__WaZ4Z",layout_main:"main_layout_main__odCbu",container_left:"main_container_left__IdzN7",left_summary:"main_left_summary__xRTaR",left_summary_name:"main_left_summary_name__rNG4f",left_footer:"main_left_footer__ynJw4",container_right:"main_container_right__9dnB_",right_main:"main_right_main__7n9Gq",right_main_header:"main_right_main_header__T0dyf",search_button:"main_search_button__98wZO",right_main_title:"main_right_main_title__QFfnp",right_main_content:"main_right_main_content__Ejkd4",right_main_item:"main_right_main_item__0ru9O",right_main2:"main_right_main2__q4Peg",right_main2_content:"main_right_main2_content__RW1kO",right_main2_item:"main_right_main2_item__2xw1z",right_footer:"main_right_footer__hySEs"}}},function(_){_.O(0,[288,492,788,10,460,985,583,774,888,179],(function(){return a=6059,_(_.s=a);var a}));var a=_.O();_N_E=a}]);