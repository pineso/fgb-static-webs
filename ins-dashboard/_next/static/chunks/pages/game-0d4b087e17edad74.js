(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{1478:function(e,a,_){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game",function(){return _(7651)}])},7878:function(e,a,_){"use strict";var t=_(7568),n=_(7582),l=_(5893),i=_(7294),o=_(1163),r=_(1390),c=_(1248),s=_(1356),g=_(4415);a.Z=function(e){return function(){var a=(0,o.useRouter)(),_=(0,r.CG)((function(e){return e.profileReducer}),c.wU).profile,b=(0,i.useState)(!1),d=b[0],m=b[1];return(0,r.bd)((0,t.Z)((function(){var e;return(0,n.__generator)(this,(function(t){switch(t.label){case 0:return[4,s.fp.userApi.getUserInfo(g.CL)];case 1:return e=t.sent(),s.m8.isErrorResponse(e)||!_?(alert(g.SR.NEED_LOGIN),s.m8.removeUserData(),a.replace("/signin")):m(!0),[2]}}))})),[]),d?(0,l.jsx)(e,{}):null}}},2883:function(e,a,_){"use strict";_.d(a,{Z:function(){return E}});var t,n=_(9534),l=_(5893),i=_(7183),o=_(6226),r=_(5968),c=_(4642),s=_.n(c),g=_(6042),b=_(9396),d=_(8508),m=_(7294),u=_(1163),p=JSON.parse('{"p":[{"label":"\uba54\uc778","key":"main","children":null},{"label":"\uac8c\uc784\ubaa9\ub85d","key":"game","children":null},{"label":"\ucfe0\ud3f0\uc0c1\uc810","key":"coupon","children":null},{"label":"\ub0b4 \uc815\ubcf4","key":"profile","children":null}]}'),x=_(4415),h=_(3680),f=_(1390),B=_(4174),v=_(6101),y=i.Z.Sider;!function(e){e.home="/",e.bottomCenter="bottomCenter",e.checkBox="checkbox",e.inline="inline"}(t||(t={}));var w=function(e){switch(e){case x.PW:return["main"];case x.IO:return["game"];case x.bF:return["coupon"];case x.ih:return["profile"];default:return[]}},j=function(e){var a=(0,u.useRouter)(),_=(0,f.TL)(),i={main:h.t.main_icon.src,game:h.t.gameList_icon.src,coupon:h.t.coupon_icon.src,profile:h.t.profile_icon.src},o=(0,m.useState)([]),r=o[0],c=o[1],j=(e.titleKey,e.className),N=(0,n.Z)(e,["titleKey","className"]),Z=p.p.map((function(e){return(0,b.Z)((0,g.Z)({},e),{icon:(0,l.jsx)("img",{src:i[e.key],alt:"".concat(e.label," icon"),className:s().icon})})}));return(0,l.jsxs)("div",{className:s().layout_main_container_navBar,children:[(0,l.jsx)(y,(0,b.Z)((0,g.Z)({className:"".concat(s().sidebar_global," ").concat(j)},N),{children:(0,l.jsx)(d.Z,{mode:t.inline,className:s().sidebar_menu_global,defaultSelectedKeys:w(e.titleKey),items:Z,openKeys:r,onOpenChange:function(e){var a=e.find((function(e){return-1===r.indexOf(e)}));a&&-1===Z.findIndex((function(e){return e.key===a}))?c(e):c(a?[a]:[])},onClick:function(e){a.push("/".concat(e.key))}})})),(0,l.jsxs)("div",{className:s().navBar_logout,onClick:function(){window.confirm(x.po.TRY_LOGOUT)&&(B.m8.removeUserData(),_((0,v.PF)("")),a.push("/signin"))},children:[(0,l.jsx)("img",{src:h.t.logout_icon.src,alt:"logout_icon"}),(0,l.jsx)("span",{children:"\ub85c\uadf8\uc544\uc6c3"})]})]})},N=_(8250),Z=_(7547),k=_(1248),R=i.Z.Header,C=function(e){var a=e.titleKey,_=(0,n.Z)(e,["titleKey"]),t=(0,u.useRouter)(),i=(0,f.CG)((function(e){return e.profileReducer.profile}),k.wU);if(a)return(0,l.jsxs)(R,(0,b.Z)((0,g.Z)({},_),{className:s().layout_main_container_header,children:[(0,l.jsxs)("div",{className:s().header_container_left,children:[(0,l.jsx)("img",{src:h.t.main_icon.src,alt:"main_icon"}),(0,l.jsx)("div",{className:s().header_title,children:x.tj[a]})]}),(0,l.jsxs)("div",{className:s().header_container_right,onClick:function(){t.push("/profile")},children:[(0,l.jsx)(N.C,{size:32,icon:(0,l.jsx)(Z.Z,{})}),i?null===i||void 0===i?void 0:i.name:"GUEST"]})]}))},O=i.Z.Content,E=function(e){var a=e.titleKey,_=e.children;e.fetchDataHandler,e.fetchRouteHandler,(0,n.Z)(e,["titleKey","children","fetchDataHandler","fetchRouteHandler"]);return(0,l.jsx)(o.Z,{className:s().layout_main,children:(0,l.jsxs)(r.Z,{className:s().layout_main_container,children:[(0,l.jsxs)(o.Z,{className:s().layout_main_header,children:[(0,l.jsx)("div",{children:(0,l.jsx)("img",{src:h.t.frame_ins_logo.src,alt:"ins_logo"})}),(0,l.jsx)(C,{titleKey:a})]}),(0,l.jsxs)(o.Z,{className:s().layout_main_container_bottom,children:[(0,l.jsx)(j,{titleKey:a}),(0,l.jsx)(O,{className:s().layout_main_container_content,children:_})]})]})})}},7651:function(e,a,_){"use strict";_.r(a);var t=_(7568),n=_(9815),l=_(7582),i=_(5893),o=_(7099),r=_.n(o),c=_(2883),s=_(4415),g=_(1390),b=_(7878),d=_(1163),m=_(6226),u=_(1687),p=_(8426),x=_(5968),h=_(7294),f=_(1356);a.default=(0,b.Z)((function(){var e=(0,d.useRouter)(),a=(0,h.useState)(Array(s.G3.length).fill(!0)),_=a[0],o=a[1],b=(0,h.useState)(!1),B=b[0],v=b[1],y=(0,h.useState)(null),w=y[0],j=y[1];(0,g.bd)((0,t.Z)((function(){return(0,l.__generator)(this,(function(e){return N(),[2]}))})),[]);var N=function(){var a=(0,t.Z)((function(){var a;return(0,l.__generator)(this,(function(_){switch(_.label){case 0:return[4,f.fp.userApi.isRegisterGame()];case 1:return a=_.sent(),f.m8.isErrorResponse(a)?(f.m8.signChecker(a)&&(alert(s.Xt.NEEDLOGIN),f.m8.removeUserData(),e.push("/signin")),alert(a.message),[2,null]):(!0===a.result?(v(!0),Z()):v(!1),[2])}}))}));return function(){return a.apply(this,arguments)}}(),Z=function(){var a=(0,t.Z)((function(){var a;return(0,l.__generator)(this,(function(_){switch(_.label){case 0:return[4,f.fp.userApi.getUserInfo(s.CL)];case 1:return a=_.sent(),f.m8.isErrorResponse(a)?(f.m8.signChecker(a)&&(alert(s.Xt.NEEDLOGIN),f.m8.removeUserData(),e.push("/signin")),alert(a.message),[2,null]):(j(a.calculateRatio),[2])}}))}));return function(){return a.apply(this,arguments)}}(),k=function(e){return Math.ceil(e/.7*1.1)};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(c.Z,{titleKey:s.IO,children:(0,i.jsx)("main",{className:r().main,children:(0,i.jsx)(x.Z,{justify:"space-between",gutter:[32,32],className:r().game_wrapper,children:s.G3.map((function(a,t){return(0,i.jsxs)(m.Z,{span:11,className:r().game_card,onClick:function(){e.push("./game/".concat(a.url))},children:[(0,i.jsxs)("div",{className:r().card_header,children:[(0,i.jsxs)("h3",{children:[(0,i.jsx)("img",{src:a.thumbnail,alt:"".concat(a.label," thumbnail")}),a.label]}),(0,i.jsxs)("div",{className:r().game_card_calculateRatio,children:["\uc815\uc0b0\uc728 ",B?"".concat(k(w),"%"):"\ud504\ub85c\ubaa8\uc158 \ub4f1\ub85d \ud544\uc694"]})]}),(0,i.jsxs)("div",{className:r().card_content,children:[_[t]&&(0,i.jsx)(u.Z.Image,{active:!0,style:{borderRadius:"4px",width:"100%",height:"180px"}}),(0,i.jsx)(p.Z,{src:a.src,style:{borderRadius:"4px",display:_[t]?"none":"block"},onLoad:function(){return function(e){o((function(a){var _=(0,n.Z)(a);return _[e]=!1,_}))}(t)},onClick:function(e){e.stopPropagation()}}),(0,i.jsxs)("p",{children:["\uac8c\uc784\uc124\uba85 ",(0,i.jsx)("span",{style:{color:"#ff3a0c",fontWeight:"bold"},children:"|"})," ",a.description]})]})]},t)}))})})})})}))},4642:function(e){e.exports={button_global:"pageBasic_button_global__glQN1",render_btn:"pageBasic_render_btn__txbOp",input_global:"pageBasic_input_global___bhyL",center_text:"pageBasic_center_text__3OJZC",input_password_global:"pageBasic_input_password_global__5S5_x",select_global:"pageBasic_select_global__0YOMF",select_dropdown_global:"pageBasic_select_dropdown_global__C_SdL",table_global:"pageBasic_table_global__1N7qk","ant-table-selection-column":"pageBasic_ant-table-selection-column__y5VOA","ant-table-row-expand-icon-cell":"pageBasic_ant-table-row-expand-icon-cell__WhsJl",index_table:"pageBasic_index_table__Kh4gy",sidebar_global:"pageBasic_sidebar_global__TAw5_",sidebar_menu_global:"pageBasic_sidebar_menu_global__yEVJQ",navBar_logout:"pageBasic_navBar_logout__AwRaY",pagination_wrapper:"pageBasic_pagination_wrapper__08Okr",pagination_nav:"pageBasic_pagination_nav__JbnIx",pagination_total:"pageBasic_pagination_total__pRBjS",checkbox_global:"pageBasic_checkbox_global__mLQDl",radio_global:"pageBasic_radio_global__t5fDt",radioGroup_global:"pageBasic_radioGroup_global__FEQT4",modal_title:"pageBasic_modal_title__lK_b3",modal_container:"pageBasic_modal_container__gLLFq",index_container_global:"pageBasic_index_container_global__K4gKQ",index_search_container_global:"pageBasic_index_search_container_global__m1Xnk",index_searchBar_global:"pageBasic_index_searchBar_global__DZLs_",index_content_global:"pageBasic_index_content_global__wulLF",index_content_wrapper_global:"pageBasic_index_content_wrapper_global__VnORR",index_table_wrapper_global:"pageBasic_index_table_wrapper_global__32Y1a",index_table_nav_global:"pageBasic_index_table_nav_global__dnEE_",index_table_title_global:"pageBasic_index_table_title_global__WYkO8",index_table_title_item_global:"pageBasic_index_table_title_item_global__v_n5G",index_table_title_item_sort_global:"pageBasic_index_table_title_item_sort_global__nQ1YN",index_table_title_item_label_global:"pageBasic_index_table_title_item_label_global__OetUA",index_table_title_item_sort_icon_global:"pageBasic_index_table_title_item_sort_icon_global__3gd84",sort_asc:"pageBasic_sort_asc__MTCZV",sort_desc:"pageBasic_sort_desc__y2raW",index_table_data_global:"pageBasic_index_table_data_global__bO29U",index_table_item_global:"pageBasic_index_table_item_global__CIktk",index_table_item_value_global:"pageBasic_index_table_item_value_global__CEYtM",index_table_item_selected_global:"pageBasic_index_table_item_selected_global__1SbSm",index_table_empty_global:"pageBasic_index_table_empty_global__Ic83f",index_table_bottomButton_global:"pageBasic_index_table_bottomButton_global__3zXxv",index_table_button_new_global:"pageBasic_index_table_button_new_global__y6icY",index_manageButton_global:"pageBasic_index_manageButton_global__TuSIc",container:"pageBasic_container__d6Lwi",divider:"pageBasic_divider__sRNiU",layout_main:"pageBasic_layout_main__Y4WTn",layout_main_container:"pageBasic_layout_main_container__ZOiYV",layout_main_header:"pageBasic_layout_main_header__WtrX5",layout_main_container_header:"pageBasic_layout_main_container_header__6Tsdf",header_container_left:"pageBasic_header_container_left__DF1qn",header_title:"pageBasic_header_title__nTX8v",header_container_right:"pageBasic_header_container_right__alrtn",layout_main_container_bottom:"pageBasic_layout_main_container_bottom__pdTvY",layout_main_container_navBar:"pageBasic_layout_main_container_navBar__MfMI4",layout_main_container_content:"pageBasic_layout_main_container_content__4Dkht"}},7099:function(e){e.exports={button_global:"game_button_global__TGlMV",render_btn:"game_render_btn__m0AGh",input_global:"game_input_global__0xJqF",center_text:"game_center_text__ksgUj",input_password_global:"game_input_password_global__2tm0F",select_global:"game_select_global__DRcm3",select_dropdown_global:"game_select_dropdown_global__1X71u",table_global:"game_table_global__qsi_6","ant-table-selection-column":"game_ant-table-selection-column__aJJqv","ant-table-row-expand-icon-cell":"game_ant-table-row-expand-icon-cell__PjFNK",index_table:"game_index_table__Z_Ikd",sidebar_global:"game_sidebar_global__G7zh3",sidebar_menu_global:"game_sidebar_menu_global__Y5TZC",navBar_logout:"game_navBar_logout__5RtL1",pagination_wrapper:"game_pagination_wrapper__X469a",pagination_nav:"game_pagination_nav__21gD2",pagination_total:"game_pagination_total__bOdnf",checkbox_global:"game_checkbox_global__XxCot",radio_global:"game_radio_global__eUHzu",radioGroup_global:"game_radioGroup_global__p7QFo",modal_title:"game_modal_title__iT27A",modal_container:"game_modal_container__sNy0v",index_container_global:"game_index_container_global___uA_E",index_search_container_global:"game_index_search_container_global__iFRjZ",index_searchBar_global:"game_index_searchBar_global__Mpuql",index_content_global:"game_index_content_global__aiXf_",index_content_wrapper_global:"game_index_content_wrapper_global__e15nO",index_table_wrapper_global:"game_index_table_wrapper_global__rnmWv",index_table_nav_global:"game_index_table_nav_global__gWTmA",index_table_title_global:"game_index_table_title_global___CHa0",index_table_title_item_global:"game_index_table_title_item_global__qXbz8",index_table_title_item_sort_global:"game_index_table_title_item_sort_global__IZU4R",index_table_title_item_label_global:"game_index_table_title_item_label_global__rks4K",index_table_title_item_sort_icon_global:"game_index_table_title_item_sort_icon_global__ltz2f",sort_asc:"game_sort_asc__RYg5B",sort_desc:"game_sort_desc__SMAGA",index_table_data_global:"game_index_table_data_global__8GUCl",index_table_item_global:"game_index_table_item_global__WTenL",index_table_item_value_global:"game_index_table_item_value_global__3854u",index_table_item_selected_global:"game_index_table_item_selected_global__t5P9H",index_table_empty_global:"game_index_table_empty_global__GX0Ne",index_table_bottomButton_global:"game_index_table_bottomButton_global__aNyEo",index_table_button_new_global:"game_index_table_button_new_global__uY3S3",index_manageButton_global:"game_index_manageButton_global__V0BC5",container:"game_container__kZHVU",divider:"game_divider__rDk_y",layout_main:"game_layout_main__eDmKd",main:"game_main__9MAlX",game_wrapper:"game_game_wrapper__8VM1a",game_card:"game_game_card__xC9AM",card_content:"game_card_content__AZ1R8",card_header:"game_card_header__MOqlB",game_card_calculateRatio:"game_game_card_calculateRatio__rmaTF"}}},function(e){e.O(0,[716,598,930,446,269,106,774,888,179],(function(){return a=1478,e(e.s=a);var a}));var a=e.O();_N_E=a}]);