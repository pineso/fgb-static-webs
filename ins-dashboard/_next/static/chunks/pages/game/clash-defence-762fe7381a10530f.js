(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[391],{4115:function(e,_,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game/clash-defence",function(){return a(3910)}])},7878:function(e,_,a){"use strict";var n=a(7568),l=a(7582),t=a(5893),i=a(7294),c=a(1163),o=a(1390),s=a(1248),r=a(1356),d=a(4415);_.Z=function(e){return function(){var _=(0,c.useRouter)(),a=(0,o.CG)((function(e){return e.profileReducer}),s.wU).profile,b=(0,i.useState)(!1),g=b[0],u=b[1];return(0,o.bd)((0,n.Z)((function(){var e;return(0,l.__generator)(this,(function(n){switch(n.label){case 0:return[4,r.fp.userApi.getUserInfo(d.CL)];case 1:return e=n.sent(),r.m8.isErrorResponse(e)||!a?(alert(d.SR.NEED_LOGIN),r.m8.removeUserData(),_.replace("/signin")):u(!0),[2]}}))})),[]),g?(0,t.jsx)(e,{}):null}}},2883:function(e,_,a){"use strict";a.d(_,{Z:function(){return D}});var n,l=a(9534),t=a(5893),i=a(7183),c=a(6226),o=a(5968),s=a(4642),r=a.n(s),d=a(6042),b=a(9396),g=a(8508),u=a(7294),p=a(1163),h=JSON.parse('{"p":[{"label":"\uba54\uc778","key":"main","children":null},{"label":"\uac8c\uc784\ubaa9\ub85d","key":"game","children":null},{"label":"\ucfe0\ud3f0\uc0c1\uc810","key":"coupon","children":null},{"label":"\ub0b4 \uc815\ubcf4","key":"profile","children":null}]}'),m=a(4415),f=a(3680),x=a(1390),B=a(4174),v=a(6101),j=i.Z.Sider;!function(e){e.home="/",e.bottomCenter="bottomCenter",e.checkBox="checkbox",e.inline="inline"}(n||(n={}));var y=function(e){switch(e){case m.PW:return["main"];case m.IO:return["game"];case m.bF:return["coupon"];case m.ih:return["profile"];default:return[]}},w=function(e){var _=(0,p.useRouter)(),a=(0,x.TL)(),i={main:f.t.main_icon.src,game:f.t.gameList_icon.src,coupon:f.t.coupon_icon.src,profile:f.t.profile_icon.src},c=(0,u.useState)([]),o=c[0],s=c[1],m=(e.titleKey,e.className),w=(0,l.Z)(e,["titleKey","className"]),N=h.p.map((function(e){return(0,b.Z)((0,d.Z)({},e),{icon:(0,t.jsx)("img",{src:i[e.key],alt:"".concat(e.label," icon"),className:r().icon})})}));return(0,t.jsxs)("div",{className:r().layout_main_container_navBar,children:[(0,t.jsx)(j,(0,b.Z)((0,d.Z)({className:"".concat(r().sidebar_global," ").concat(m)},w),{children:(0,t.jsx)(g.Z,{mode:n.inline,className:r().sidebar_menu_global,defaultSelectedKeys:y(e.titleKey),items:N,openKeys:o,onOpenChange:function(e){var _=e.find((function(e){return-1===o.indexOf(e)}));_&&-1===N.findIndex((function(e){return e.key===_}))?s(e):s(_?[_]:[])},onClick:function(e){_.push("/".concat(e.key))}})})),(0,t.jsxs)("div",{className:r().navBar_logout,onClick:function(){window.confirm("Are you sure you want to logout?")&&(B.m8.removeUserData(),a((0,v.PF)("")),_.push("/signin"))},children:[(0,t.jsx)("img",{src:f.t.logout_icon.src,alt:"logout_icon"}),(0,t.jsx)("span",{children:"\ub85c\uadf8\uc544\uc6c3"})]})]})},N=a(8250),Z=a(7547),k=a(1248),C=i.Z.Header,S=function(e){var _=e.titleKey,a=(0,l.Z)(e,["titleKey"]),n=(0,p.useRouter)(),i=(0,x.CG)((function(e){return e.profileReducer.profile}),k.wU);if(_)return(0,t.jsxs)(C,(0,b.Z)((0,d.Z)({},a),{className:r().layout_main_container_header,children:[(0,t.jsxs)("div",{className:r().header_container_left,children:[(0,t.jsx)("img",{src:f.t.main_icon.src,alt:"main_icon"}),(0,t.jsx)("div",{className:r().header_title,children:m.tj[_]})]}),(0,t.jsxs)("div",{className:r().header_container_right,onClick:function(){n.push("/profile")},children:[(0,t.jsx)(N.C,{size:32,icon:(0,t.jsx)(Z.Z,{})}),i?null===i||void 0===i?void 0:i.name:"GUEST"]})]}))},R=i.Z.Content,D=function(e){var _=e.titleKey,a=e.children;e.fetchDataHandler,e.fetchRouteHandler,(0,l.Z)(e,["titleKey","children","fetchDataHandler","fetchRouteHandler"]);return(0,t.jsx)(c.Z,{className:r().layout_main,children:(0,t.jsxs)(o.Z,{className:r().layout_main_container,children:[(0,t.jsxs)(c.Z,{className:r().layout_main_header,children:[(0,t.jsx)("div",{children:(0,t.jsx)("img",{src:f.t.frame_ins_logo.src,alt:"ins_logo"})}),(0,t.jsx)(S,{titleKey:_})]}),(0,t.jsxs)(c.Z,{className:r().layout_main_container_bottom,children:[(0,t.jsx)(w,{titleKey:_}),(0,t.jsx)(R,{className:r().layout_main_container_content,children:a})]})]})})}},3910:function(e,_,a){"use strict";a.r(_);var n=a(7568),l=a(9815),t=a(7582),i=a(5893),c=a(2511),o=a.n(c),s=a(2883),r=a(4415),d=a(1390),b=a(7878),g=a(6134),u=a(4458),p=a(154),h=a(8426),m=a(5968),f=a(6226),x=a(1687),B=a(7294),v=a(1356),j=a(1163),y=a(9550);_.default=(0,b.Z)((function(){var e=(0,j.useRouter)(),_=(0,B.useState)(!1),a=_[0],c=_[1],b=(0,B.useState)(!1),w=b[0],N=b[1],Z=(0,B.useState)(Array(4).fill(!0)),k=Z[0],C=Z[1],S=[{src:u.R.dashDefence_sample1.src,alt:"dashDefenceSample1"},{src:u.R.dashDefence_sample2.src,alt:"dashDefenceSample2"},{src:u.R.dashDefence_sample3.src,alt:"dashDefenceSample3"},{src:u.R.dashDefence_sample4.src,alt:"dashDefenceSample4"}],R=(0,B.useState)(!1),D=R[0],O=R[1],E=(0,B.useState)(!1),I=E[0],K=E[1];(0,d.bd)((0,n.Z)((function(){return(0,t.__generator)(this,(function(e){return L(),localStorage.getItem("showSuccessMessage")&&(p.ZP.success(r.po.SUCCESS_FIRSTCOUPON),localStorage.removeItem("showSuccessMessage")),[2]}))})),[]);var L=function(){var _=(0,n.Z)((function(){var _;return(0,t.__generator)(this,(function(a){switch(a.label){case 0:return[4,v.fp.userApi.isRegisterGame()];case 1:return _=a.sent(),v.m8.isErrorResponse(_)?(v.m8.signChecker(_)&&(alert(r.Xt.NEEDLOGIN),v.m8.removeUserData(),e.push("/signin")),alert(_.message),[2,null]):(!0===_.result?(c(!0),G()):c(!1),[2])}}))}));return function(){return _.apply(this,arguments)}}(),G=function(){var _=(0,n.Z)((function(){var _;return(0,t.__generator)(this,(function(a){switch(a.label){case 0:return[4,v.fp.userApi.getUserInfo(r.CL)];case 1:return _=a.sent(),v.m8.isErrorResponse(_)?(v.m8.signChecker(_)&&(alert(r.Xt.NEEDLOGIN),v.m8.removeUserData(),e.push("/signin")),alert(_.message),[2,null]):(N(_.useFirstCoupon),[2])}}))}));return function(){return _.apply(this,arguments)}}();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s.Z,{titleKey:r.IO,children:(0,i.jsxs)("div",{className:o().main,children:[(0,i.jsx)(y.PD,{open:D,setOpen:O,fetchData:L}),(0,i.jsx)(y.Tx,{open:I,setOpen:K,fetchData:L}),(0,i.jsxs)("div",{className:o().content_left,children:[(0,i.jsxs)("div",{className:o().left_title,children:[(0,i.jsx)("img",{src:u.R.dashDefence_thumbnail.src,alt:"dashDefence_thumbnail"}),(0,i.jsx)("h1",{children:"Clash Defense"}),a?w?(0,i.jsx)(g.k,{className:o().left_promotion_on,disabled:!0,children:"\ud504\ub85c\ubaa8\uc158 \uc801\uc6a9\uc911"}):(0,i.jsx)(g.k,{onClick:function(){K(!0)},children:"\ucd08\uae30 \ucfe0\ud3f0 \ub4f1\ub85d"}):(0,i.jsx)(g.k,{onClick:function(){O(!0)},children:"\ud504\ub85c\ubaa8\uc158 \ub4f1\ub85d"})]}),(0,i.jsxs)("div",{className:o().left_descriptionWrapper,children:[(0,i.jsxs)("div",{className:o().left_description,children:[(0,i.jsx)("h3",{children:"\uac8c\uc784 \uc124\uba85"}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Clash Defense"}),"\ub294 \uc2e4\uc2dc\uac04 \ub514\ud39c\uc2a4 \uac8c\uc784 \uc785\ub2c8\ub2e4."]})]}),(0,i.jsxs)("div",{className:o().game_feature,children:[(0,i.jsx)("h3",{children:"\uac8c\uc784 \ud2b9\uc9d5"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:"\uc138\ub825\uacfc \uc2a4\ud3a0\uc744 \uc120\ud0dd\ud558\uace0, \uc790\uc2e0\ub9cc\uc758 \uc804\ub7b5\uc73c\ub85c \ubab0\ub824\uc624\ub294 \uc801\ub4e4\uc744 \ub9c9\uc544\ub0b4\uc138\uc694."}),(0,i.jsxs)("p",{children:["\ub2f9\uc2e0\uc758 \uc120\ud0dd\uc5d0 \ub530\ub77c \uc804\ud669\uc774 \ubcc0\ud569\ub2c8\ub2e4. ",(0,i.jsx)("br",{}),"\ucd5c\uc801\uc758 \uae38\uc744 \ucc3e\uc544\ubcf4\uc138\uc694. \uadf8\ub9ac\uace0 \ubc1c\uc0ac\ud558\uc138\uc694. ",(0,i.jsx)("br",{}),"\uc2e4\uc2dc\uac04\uc73c\ub85c \ube60\ub974\uac8c \uc9c4\ud589\ub418\ub294 \uc804\ud22c \uc18d, \ud55c\uc815\ub41c \uc790\uc6d0 ",(0,i.jsx)("br",{}),"\uc18d\uc5d0\uc11c \uc120\ud0dd\uc5d0 \ub530\ub77c \uc804\ud22c\uc758 \uacb0\uacfc\uac00 \ubc14\ub01d\ub2c8\ub2e4. ",(0,i.jsx)("br",{}),"\ubab0\ub824\uc624\ub294 \uc801\uc744 \ub9c9\uc544\ub0b4\uc138\uc694."]}),(0,i.jsx)("p",{children:"\uc9c0\uae08 \ubc14\ub85c \uc811\uc18d\ud574\ubcf4\uc138\uc694!"})]})]})]})]}),(0,i.jsx)("div",{className:o().content_right,children:(0,i.jsx)(h.Z.PreviewGroup,{children:(0,i.jsx)(m.Z,{gutter:[10,10],children:S.map((function(e,_){return(0,i.jsxs)(f.Z,{className:o().content_imgWrapper,children:[k[_]&&(0,i.jsx)(x.Z.Image,{active:!0,style:{borderRadius:"4px",width:"330px",height:"200px"}}),(0,i.jsx)(h.Z,{className:o().content_img,src:e.src,alt:e.alt,style:{display:k[_]?"none":"block"},onLoad:function(){return function(e){C((function(_){var a=(0,l.Z)(_);return a[e]=!1,a}))}(_)}})]},_)}))})})})]})})})}))},4642:function(e){e.exports={button_global:"pageBasic_button_global__glQN1",render_btn:"pageBasic_render_btn__txbOp",input_global:"pageBasic_input_global___bhyL",center_text:"pageBasic_center_text__3OJZC",input_password_global:"pageBasic_input_password_global__5S5_x",select_global:"pageBasic_select_global__0YOMF",select_dropdown_global:"pageBasic_select_dropdown_global__C_SdL",table_global:"pageBasic_table_global__1N7qk","ant-table-selection-column":"pageBasic_ant-table-selection-column__y5VOA","ant-table-row-expand-icon-cell":"pageBasic_ant-table-row-expand-icon-cell__WhsJl",index_table:"pageBasic_index_table__Kh4gy",sidebar_global:"pageBasic_sidebar_global__TAw5_",sidebar_menu_global:"pageBasic_sidebar_menu_global__yEVJQ",navBar_logout:"pageBasic_navBar_logout__AwRaY",pagination_wrapper:"pageBasic_pagination_wrapper__08Okr",pagination_nav:"pageBasic_pagination_nav__JbnIx",pagination_total:"pageBasic_pagination_total__pRBjS",checkbox_global:"pageBasic_checkbox_global__mLQDl",radio_global:"pageBasic_radio_global__t5fDt",radioGroup_global:"pageBasic_radioGroup_global__FEQT4",modal_title:"pageBasic_modal_title__lK_b3",modal_container:"pageBasic_modal_container__gLLFq",index_container_global:"pageBasic_index_container_global__K4gKQ",index_search_container_global:"pageBasic_index_search_container_global__m1Xnk",index_searchBar_global:"pageBasic_index_searchBar_global__DZLs_",index_content_global:"pageBasic_index_content_global__wulLF",index_content_wrapper_global:"pageBasic_index_content_wrapper_global__VnORR",index_table_wrapper_global:"pageBasic_index_table_wrapper_global__32Y1a",index_table_nav_global:"pageBasic_index_table_nav_global__dnEE_",index_table_title_global:"pageBasic_index_table_title_global__WYkO8",index_table_title_item_global:"pageBasic_index_table_title_item_global__v_n5G",index_table_title_item_sort_global:"pageBasic_index_table_title_item_sort_global__nQ1YN",index_table_title_item_label_global:"pageBasic_index_table_title_item_label_global__OetUA",index_table_title_item_sort_icon_global:"pageBasic_index_table_title_item_sort_icon_global__3gd84",sort_asc:"pageBasic_sort_asc__MTCZV",sort_desc:"pageBasic_sort_desc__y2raW",index_table_data_global:"pageBasic_index_table_data_global__bO29U",index_table_item_global:"pageBasic_index_table_item_global__CIktk",index_table_item_value_global:"pageBasic_index_table_item_value_global__CEYtM",index_table_item_selected_global:"pageBasic_index_table_item_selected_global__1SbSm",index_table_empty_global:"pageBasic_index_table_empty_global__Ic83f",index_table_bottomButton_global:"pageBasic_index_table_bottomButton_global__3zXxv",index_table_button_new_global:"pageBasic_index_table_button_new_global__y6icY",index_manageButton_global:"pageBasic_index_manageButton_global__TuSIc",container:"pageBasic_container__d6Lwi",divider:"pageBasic_divider__sRNiU",layout_main:"pageBasic_layout_main__Y4WTn",layout_main_container:"pageBasic_layout_main_container__ZOiYV",layout_main_header:"pageBasic_layout_main_header__WtrX5",layout_main_container_header:"pageBasic_layout_main_container_header__6Tsdf",header_container_left:"pageBasic_header_container_left__DF1qn",header_title:"pageBasic_header_title__nTX8v",header_container_right:"pageBasic_header_container_right__alrtn",layout_main_container_bottom:"pageBasic_layout_main_container_bottom__pdTvY",layout_main_container_navBar:"pageBasic_layout_main_container_navBar__MfMI4",layout_main_container_content:"pageBasic_layout_main_container_content__4Dkht"}},2511:function(e){e.exports={button_global:"clash-defence_button_global__WpZHZ",render_btn:"clash-defence_render_btn__dJbB0",input_global:"clash-defence_input_global__EUJzt",center_text:"clash-defence_center_text__smuJZ",input_password_global:"clash-defence_input_password_global__ZPQsn",select_global:"clash-defence_select_global__1_4C0",select_dropdown_global:"clash-defence_select_dropdown_global__rYXVu",table_global:"clash-defence_table_global__DbKAA","ant-table-selection-column":"clash-defence_ant-table-selection-column__Us1jI","ant-table-row-expand-icon-cell":"clash-defence_ant-table-row-expand-icon-cell__fghGF",index_table:"clash-defence_index_table__Iagdb",sidebar_global:"clash-defence_sidebar_global__Wlr5B",sidebar_menu_global:"clash-defence_sidebar_menu_global__yFoRe",navBar_logout:"clash-defence_navBar_logout___P2fq",pagination_wrapper:"clash-defence_pagination_wrapper__3MCif",pagination_nav:"clash-defence_pagination_nav__mXmeu",pagination_total:"clash-defence_pagination_total__uPsRG",checkbox_global:"clash-defence_checkbox_global__xOKTI",radio_global:"clash-defence_radio_global__HRz6s",radioGroup_global:"clash-defence_radioGroup_global__8iY_P",modal_title:"clash-defence_modal_title__dmA_Y",modal_container:"clash-defence_modal_container__5W9I9",index_container_global:"clash-defence_index_container_global__o6dHs",index_search_container_global:"clash-defence_index_search_container_global__JYAV3",index_searchBar_global:"clash-defence_index_searchBar_global__mvn4w",index_content_global:"clash-defence_index_content_global__Ly1dp",index_content_wrapper_global:"clash-defence_index_content_wrapper_global__wiA64",index_table_wrapper_global:"clash-defence_index_table_wrapper_global__r_GiJ",index_table_nav_global:"clash-defence_index_table_nav_global__EUR9L",index_table_title_global:"clash-defence_index_table_title_global__AcR2E",index_table_title_item_global:"clash-defence_index_table_title_item_global__54qwR",index_table_title_item_sort_global:"clash-defence_index_table_title_item_sort_global__yffYx",index_table_title_item_label_global:"clash-defence_index_table_title_item_label_global__LRaB0",index_table_title_item_sort_icon_global:"clash-defence_index_table_title_item_sort_icon_global__tLKjo",sort_asc:"clash-defence_sort_asc__6aSz_",sort_desc:"clash-defence_sort_desc___NUHr",index_table_data_global:"clash-defence_index_table_data_global__yNcOS",index_table_item_global:"clash-defence_index_table_item_global__c7N8J",index_table_item_value_global:"clash-defence_index_table_item_value_global__jPpZ_",index_table_item_selected_global:"clash-defence_index_table_item_selected_global__V28HJ",index_table_empty_global:"clash-defence_index_table_empty_global__2XHCb",index_table_bottomButton_global:"clash-defence_index_table_bottomButton_global__GUObd",index_table_button_new_global:"clash-defence_index_table_button_new_global__BQPjO",index_manageButton_global:"clash-defence_index_manageButton_global__XZIfx",container:"clash-defence_container__IOqKp",divider:"clash-defence_divider__Cpecx",layout_main:"clash-defence_layout_main__00cjO",main:"clash-defence_main__7dggK",content_left:"clash-defence_content_left__SWEEG",left_title:"clash-defence_left_title__iJWhi",left_promotion_on:"clash-defence_left_promotion_on__I7lvW",left_descriptionWrapper:"clash-defence_left_descriptionWrapper__zjKkM",left_description:"clash-defence_left_description__ecd_5",game_feature:"clash-defence_game_feature__iXAiK",content_right:"clash-defence_content_right__ZGPYE",content_imgWrapper:"clash-defence_content_imgWrapper__nCrNM",content_img:"clash-defence_content_img__Erp1q"}}},function(e){e.O(0,[716,598,867,930,224,795,446,269,460,997,550,106,774,888,179],(function(){return _=4115,e(e.s=_);var _}));var _=e.O();_N_E=_}]);