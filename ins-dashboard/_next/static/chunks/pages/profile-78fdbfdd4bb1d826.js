(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{9813:function(e,a,_){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return _(2254)}])},2883:function(e,a,_){"use strict";_.d(a,{Z:function(){return D}});var n,i=_(9534),l=_(5893),t=_(7183),o=_(6226),r=_(5968),s=_(4642),c=_.n(s),d=_(6042),p=_(9396),g=_(8508),u=_(7294),b=_(1163),m=JSON.parse('{"p":[{"label":"\uba54\uc778","key":"main","children":null},{"label":"\uac8c\uc784\ubaa9\ub85d","key":"game","children":null},{"label":"\ucfe0\ud3f0\uc0c1\uc810","key":"coupon","children":null},{"label":"\ub0b4 \uc815\ubcf4","key":"profile","children":null}]}'),x=_(4415),f=_(8349),h=_(1390),v=_(4174),j=_(6101),B=t.Z.Sider;!function(e){e.home="/",e.bottomCenter="bottomCenter",e.checkBox="checkbox",e.inline="inline"}(n||(n={}));var y=function(e){switch(e){case x.PW:return["main"];case x.IO:return["game"];case x.bF:return["coupon"];case x.ih:return["profile"];default:return[]}},w=function(e){var a=(0,b.useRouter)(),_=(0,h.TL)(),t={main:f.t.main_icon.src,game:f.t.gameList_icon.src,coupon:f.t.coupon_icon.src,profile:f.t.profile_icon.src},o=(0,u.useState)([]),r=o[0],s=o[1],x=(e.titleKey,e.className),w=(0,i.Z)(e,["titleKey","className"]),N=m.p.map((function(e){return(0,p.Z)((0,d.Z)({},e),{icon:(0,l.jsx)("img",{src:t[e.key],alt:"".concat(e.label," icon"),className:c().icon})})}));return(0,l.jsxs)("div",{className:c().layout_main_container_navBar,children:[(0,l.jsx)(B,(0,p.Z)((0,d.Z)({className:"".concat(c().sidebar_global," ").concat(x)},w),{children:(0,l.jsx)(g.Z,{mode:n.inline,className:c().sidebar_menu_global,defaultSelectedKeys:y(e.titleKey),items:N,openKeys:r,onOpenChange:function(e){var a=e.find((function(e){return-1===r.indexOf(e)}));a&&-1===N.findIndex((function(e){return e.key===a}))?s(e):s(a?[a]:[])},onClick:function(e){a.push("/".concat(e.key))}})})),(0,l.jsxs)("div",{className:c().navBar_logout,onClick:function(){window.confirm("Are you sure you want to logout?")&&(v.m8.removeUserData(),_((0,j.PF)("")),a.push("/signin"))},children:[(0,l.jsx)("img",{src:f.t.logout_icon.src,alt:"logout_icon"}),(0,l.jsx)("span",{children:"\ub85c\uadf8\uc544\uc6c3"})]})]})},N=_(8250),k=_(7547),Z=t.Z.Header,C=function(e){var a=e.titleKey,_=(0,i.Z)(e,["titleKey"]),n=((0,b.useRouter)(),(0,h.CG)((function(e){return e.profileReducer.profile})));if(a)return(0,l.jsxs)(Z,(0,p.Z)((0,d.Z)({},_),{className:c().layout_main_container_header,children:[(0,l.jsxs)("div",{className:c().header_container_left,children:[(0,l.jsx)("img",{src:f.t.main_icon.src,alt:"main_icon"}),(0,l.jsx)("div",{className:c().header_title,children:x.tj[a]})]}),(0,l.jsxs)("div",{className:c().header_container_right,children:[(0,l.jsx)(N.C,{size:32,icon:(0,l.jsx)(k.Z,{})}),n.name]})]}))},O=t.Z.Content,D=function(e){var a=e.titleKey,_=e.children;e.fetchDataHandler,e.fetchRouteHandler,(0,i.Z)(e,["titleKey","children","fetchDataHandler","fetchRouteHandler"]);return(0,l.jsx)(o.Z,{className:c().layout_main,children:(0,l.jsxs)(r.Z,{className:c().layout_main_container,children:[(0,l.jsxs)(o.Z,{className:c().layout_main_header,children:[(0,l.jsx)("div",{children:(0,l.jsx)("img",{src:f.t.frame_ins_logo.src,alt:"ins_logo"})}),(0,l.jsx)(C,{titleKey:a})]}),(0,l.jsxs)(o.Z,{className:c().layout_main_container_bottom,children:[(0,l.jsx)(w,{titleKey:a}),(0,l.jsx)(O,{className:c().layout_main_container_content,children:_})]})]})})}},2254:function(e,a,_){"use strict";_.r(a);var n=_(7568),i=_(7582),l=_(5893),t=_(206),o=_.n(t),r=_(2883),s=_(4415),c=_(6134),d=_(154),p=_(6803),g=_(888),u=_(4969),b=_(1390),m=_(1356),x=_(1163),f=_(7294),h=_(2929),v=_(3738),j=_(9550),B=_(1687),y=function(e){return"image/png"===e.type?e.size/1024/1024<2?new Promise((function(a){var _=new FileReader;_.onload=function(e){var _,n=new Image;n.onload=function(){var e=n.width<=500&&n.height<=500;e||d.ZP.error(s.Xs.UPLOAD_DIMENSION),a(e)},n.onerror=function(){d.ZP.error("\uc774\ubbf8\uc9c0 \ud30c\uc77c\uc744 \uc77d\ub294 \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."),a(!1)},n.src=null===(_=e.target)||void 0===_?void 0:_.result},_.readAsDataURL(e)})):(d.ZP.error(s.Xs.UPLOAD_VOLUME),!1):(d.ZP.error(s.Xs.UPLOAD_FORMAT),!1)};a.default=function(){var e=(0,x.useRouter)(),a=(0,b.Sc)(v.he),_=(0,b.DB)({value:"Clash Defense"}),t=(0,f.useState)(null),d=t[0],w=t[1],N=(0,f.useState)(!1),k=N[0],Z=N[1],C=(0,f.useState)(null),O=C[0],D=C[1],E=(0,f.useState)(!1),S=E[0],L=E[1],U=(0,f.useState)(!1),I=U[0],R=U[1],T=(0,f.useState)(!1),K=T[0],A=T[1],V=(0,f.useState)(!1),X=V[0],G=V[1],P=(0,f.useState)(!1),Y=P[0],F=P[1],M=(0,f.useState)(!1),H=M[0],W=M[1],Q=(0,f.useState)(!1),J=Q[0],z=Q[1],q=(0,f.useState)(!1),$=q[0],ee=q[1];(0,b.bd)((0,n.Z)((function(){var a;return(0,i.__generator)(this,(function(_){switch(_.label){case 0:return[4,m.fp.userApi.isRegisterGame()];case 1:return a=_.sent(),m.m8.isErrorResponse(a)?(m.m8.signChecker(a)&&(alert(s.Xt.NEEDLOGIN),m.m8.removeUserData(),e.push("/signin")),alert(a.message),[2,null]):(a.result?ae():(alert("\uac8c\uc784\ub4f1\ub85d\uc744 \uc9c4\ud589\ud574\uc8fc\uc138\uc694."),e.push("./game")),[2])}}))})),[]),(0,f.useEffect)((function(){(null===O||void 0===O?void 0:O.verifiedImage)&&!(null===O||void 0===O?void 0:O.image)?w("data:image/png;base64,".concat(O.verifiedImage)):(null===O||void 0===O?void 0:O.verifiedImage)&&(null===O||void 0===O?void 0:O.image)||!(null===O||void 0===O?void 0:O.verifiedImage)&&(null===O||void 0===O?void 0:O.image)?w("notVerified"):(null===O||void 0===O?void 0:O.verifiedImage)||(null===O||void 0===O?void 0:O.image)||w(null)}),[O]),(0,f.useEffect)((function(){Y&&W(!0)}),[Y]);var ae=function(){var a=(0,n.Z)((function(){var a;return(0,i.__generator)(this,(function(_){switch(_.label){case 0:return[4,m.fp.userApi.getUserInfo(s.CL)];case 1:return a=_.sent(),m.m8.isErrorResponse(a)?(m.m8.signChecker(a)&&(alert(s.Xt.NEEDLOGIN),m.m8.removeUserData(),e.push("/signin")),alert(a.message),[2,null]):(D(a),[2])}}))}));return function(){return a.apply(this,arguments)}}(),_e=function(){var a=(0,n.Z)((function(a){return(0,i.__generator)(this,(function(_){return"uploading"===a.file.status?(Z(!0),[2]):("done"===a.file.status&&function(e,a){var _=new FileReader;_.addEventListener("load",(function(){return a(_.result)})),_.readAsDataURL(e)}(a.file.originFileObj,(function(_){Z(!1);var n=m.fp.userApi.changeServiceInfo({serviceUuid:s.CL,file:a.file.originFileObj});if(m.m8.isErrorResponse(n))return m.m8.signChecker(n)&&(alert(s.Xt.NEEDLOGIN),m.m8.removeUserData(),e.push("/signin")),alert(n.message),null;n&&w("notVerified")})),[2])}))}));return function(e){return a.apply(this,arguments)}}(),ne=(0,l.jsxs)("button",{style:{border:0,background:"none"},type:"button",children:[k?(0,l.jsx)(g.Z,{}):(0,l.jsx)(u.Z,{}),(0,l.jsx)("div",{style:{marginTop:10},children:"\uc774\ubbf8\uc9c0"})]}),ie=(0,l.jsx)(B.Z.Input,{active:!0,size:"small"});return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(r.Z,{titleKey:s.ih,children:(0,l.jsxs)("div",{className:o().container,children:[(0,l.jsx)(j.ev,{open:S,setOpen:L,data:O,fetchData:ae}),(0,l.jsx)(j.ui,{open:I,setOpen:R,data:O,fetchData:ae}),(0,l.jsx)(j.yQ,{open:K,setOpen:A,data:O,fetchData:ae}),(0,l.jsx)(j.V_,{email:null===O||void 0===O?void 0:O.email,open:X,setOpen:G,setIsVerified:F,isSignUp:!1}),Y?(0,l.jsx)(j.X0,{open:H,setOpen:W,data:O,fetchData:ae,setIsVerified:F}):null,(0,l.jsx)(j.bE,{open:J,setOpen:z,data:O,fetchData:ae}),(0,l.jsx)(j._i,{open:$,setOpen:ee,data:O,fetchData:ae}),(0,l.jsxs)("div",{className:o().main,children:[(0,l.jsx)(h.$A,{className:o().main_gameselect,value:_.value,onChange:_.onChange}),(0,l.jsxs)("div",{className:o().main_upload_wrapper,children:[(0,l.jsx)(p.Z,{customRequest:function(e){var a=e.onSuccess;return setTimeout((function(){a("ok",null)}),0)},name:"avatar",listType:"picture-card",className:o().avatar_uploader,showUploadList:!1,beforeUpload:y,onChange:_e,disabled:"notVerified"===d,children:"notVerified"===d?(0,l.jsx)("div",{style:{marginTop:10},children:"\uac80\uc218\uc911"}):d?(0,l.jsx)("img",{src:d,alt:"avatar",style:{width:"98%",height:"98%"}}):ne}),(0,l.jsxs)("div",{className:o().main_upload_discription,children:[(0,l.jsx)("span",{children:"\uc774\ubbf8\uc9c0 \ud06c\uae30\ub294 500x500"}),(0,l.jsx)("span",{children:"\uc774\ubbf8\uc9c0 \uc6a9\ub7c9\uc740 2mb \uc774\ud558"})]})]}),(0,l.jsxs)("div",{className:o().main_content,children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{children:"\uac8c\uc784 \ub2c9\ub124\uc784"})," ",(0,l.jsx)("span",{className:o().main_content_value,children:O?O.gameId:ie}),(0,l.jsx)(c.k,{onClick:function(){L(!0)},style:{visibility:"hidden"},children:"\uc218\uc815"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{children:"\ud65c\ub3d9\uba85"})," ",(0,l.jsx)("span",{className:o().main_content_value,children:O?O.activityName:ie})," ",(0,l.jsx)(c.k,{onClick:function(){L(!0)},children:"\uc218\uc815"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{children:" \ud32c \ub124\uc784"})," ",(0,l.jsx)("span",{className:o().main_content_value,children:O?O.fanName:ie})," ",(0,l.jsx)(c.k,{onClick:function(){R(!0)},children:"\uc218\uc815"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{children:"\ud32c\ub4e4\uc5d0\uac8c \uba54\uc2dc\uc9c0"})," ",(0,l.jsx)("span",{className:o().main_content_value,children:O?O.fanMessage:ie}),(0,l.jsx)(c.k,{onClick:function(){A(!0)},children:"\uc218\uc815"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{children:"\uc774\uba54\uc77c"}),(0,l.jsx)("span",{className:o().main_content_value,children:O?O.email:ie})," ",(0,l.jsx)(c.k,{onClick:function(){G(!0)},children:"\uc218\uc815"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{children:"\ucc44\ub110"}),(0,l.jsx)("span",{className:o().main_content_value,title:null===O||void 0===O?void 0:O.channel,children:O?O.channel:ie})," ",(0,l.jsx)(c.k,{onClick:function(){z(!0)},children:"\uc218\uc815"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{children:"\ube44\ubc00\ubc88\ud638 \uc218\uc815"}),(0,l.jsx)("span",{className:o().main_content_value,children:"**********"}),(0,l.jsx)(c.k,{onClick:function(){ee(!0)},children:"\uc218\uc815"})]})]}),(0,l.jsx)("div",{className:o().main_footer,children:(0,l.jsx)(c.k,{onClick:function(){window.confirm("Are you sure you want to logout?")&&(m.m8.removeUserData(),a(),e.push("/signin"))},children:"\ub85c\uadf8\uc544\uc6c3"})})]})]})})})}},4642:function(e){e.exports={button_global:"pageBasic_button_global__glQN1",render_btn:"pageBasic_render_btn__txbOp",input_global:"pageBasic_input_global___bhyL",center_text:"pageBasic_center_text__3OJZC",input_password_global:"pageBasic_input_password_global__5S5_x",select_global:"pageBasic_select_global__0YOMF",select_dropdown_global:"pageBasic_select_dropdown_global__C_SdL",table_global:"pageBasic_table_global__1N7qk","ant-table-selection-column":"pageBasic_ant-table-selection-column__y5VOA","ant-table-row-expand-icon-cell":"pageBasic_ant-table-row-expand-icon-cell__WhsJl",index_table:"pageBasic_index_table__Kh4gy",sidebar_global:"pageBasic_sidebar_global__TAw5_",sidebar_menu_global:"pageBasic_sidebar_menu_global__yEVJQ",navBar_logout:"pageBasic_navBar_logout__AwRaY",pagination_wrapper:"pageBasic_pagination_wrapper__08Okr",pagination_nav:"pageBasic_pagination_nav__JbnIx",pagination_total:"pageBasic_pagination_total__pRBjS",checkbox_global:"pageBasic_checkbox_global__mLQDl",radio_global:"pageBasic_radio_global__t5fDt",radioGroup_global:"pageBasic_radioGroup_global__FEQT4",index_container_global:"pageBasic_index_container_global__K4gKQ",index_search_container_global:"pageBasic_index_search_container_global__m1Xnk",index_searchBar_global:"pageBasic_index_searchBar_global__DZLs_",index_content_global:"pageBasic_index_content_global__wulLF",index_content_wrapper_global:"pageBasic_index_content_wrapper_global__VnORR",index_table_wrapper_global:"pageBasic_index_table_wrapper_global__32Y1a",index_table_nav_global:"pageBasic_index_table_nav_global__dnEE_",index_table_title_global:"pageBasic_index_table_title_global__WYkO8",index_table_title_item_global:"pageBasic_index_table_title_item_global__v_n5G",index_table_title_item_sort_global:"pageBasic_index_table_title_item_sort_global__nQ1YN",index_table_title_item_label_global:"pageBasic_index_table_title_item_label_global__OetUA",index_table_title_item_sort_icon_global:"pageBasic_index_table_title_item_sort_icon_global__3gd84",sort_asc:"pageBasic_sort_asc__MTCZV",sort_desc:"pageBasic_sort_desc__y2raW",index_table_data_global:"pageBasic_index_table_data_global__bO29U",index_table_item_global:"pageBasic_index_table_item_global__CIktk",index_table_item_value_global:"pageBasic_index_table_item_value_global__CEYtM",index_table_item_selected_global:"pageBasic_index_table_item_selected_global__1SbSm",index_table_empty_global:"pageBasic_index_table_empty_global__Ic83f",index_table_bottomButton_global:"pageBasic_index_table_bottomButton_global__3zXxv",index_table_button_new_global:"pageBasic_index_table_button_new_global__y6icY",index_manageButton_global:"pageBasic_index_manageButton_global__TuSIc",container:"pageBasic_container__d6Lwi",divider:"pageBasic_divider__sRNiU",layout_main:"pageBasic_layout_main__Y4WTn",layout_main_container:"pageBasic_layout_main_container__ZOiYV",layout_main_header:"pageBasic_layout_main_header__WtrX5",layout_main_container_header:"pageBasic_layout_main_container_header__6Tsdf",header_container_left:"pageBasic_header_container_left__DF1qn",header_title:"pageBasic_header_title__nTX8v",header_container_right:"pageBasic_header_container_right__alrtn",layout_main_container_bottom:"pageBasic_layout_main_container_bottom__pdTvY",layout_main_container_navBar:"pageBasic_layout_main_container_navBar__MfMI4",layout_main_container_content:"pageBasic_layout_main_container_content__4Dkht"}},206:function(e){e.exports={button_global:"profile_button_global__hT9yW",render_btn:"profile_render_btn__5EoVx",input_global:"profile_input_global__s1B9S",center_text:"profile_center_text__TnbKQ",input_password_global:"profile_input_password_global___qj00",select_global:"profile_select_global__GC_1_",select_dropdown_global:"profile_select_dropdown_global__m_YCB",table_global:"profile_table_global__n_ehc","ant-table-selection-column":"profile_ant-table-selection-column__geH14","ant-table-row-expand-icon-cell":"profile_ant-table-row-expand-icon-cell__ESLqU",index_table:"profile_index_table__AKNhK",sidebar_global:"profile_sidebar_global__60COc",sidebar_menu_global:"profile_sidebar_menu_global__2jVYM",navBar_logout:"profile_navBar_logout__vO19h",pagination_wrapper:"profile_pagination_wrapper__swnuU",pagination_nav:"profile_pagination_nav__ek_ZG",pagination_total:"profile_pagination_total__HbCD2",checkbox_global:"profile_checkbox_global__4tdGK",radio_global:"profile_radio_global__2wiLh",radioGroup_global:"profile_radioGroup_global__Hnp0y",index_container_global:"profile_index_container_global__jzDeD",index_search_container_global:"profile_index_search_container_global__ZXJG_",index_searchBar_global:"profile_index_searchBar_global__PvviJ",index_content_global:"profile_index_content_global__Uxr3I",index_content_wrapper_global:"profile_index_content_wrapper_global__2ytNR",index_table_wrapper_global:"profile_index_table_wrapper_global__LtnUV",index_table_nav_global:"profile_index_table_nav_global__yYspA",index_table_title_global:"profile_index_table_title_global__MMYMk",index_table_title_item_global:"profile_index_table_title_item_global__X2LNF",index_table_title_item_sort_global:"profile_index_table_title_item_sort_global__fePUt",index_table_title_item_label_global:"profile_index_table_title_item_label_global__G9zLF",index_table_title_item_sort_icon_global:"profile_index_table_title_item_sort_icon_global__g334_",sort_asc:"profile_sort_asc__7GRW3",sort_desc:"profile_sort_desc__WkUlk",index_table_data_global:"profile_index_table_data_global__ZpusE",index_table_item_global:"profile_index_table_item_global__m9_nj",index_table_item_value_global:"profile_index_table_item_value_global__0T5Jc",index_table_item_selected_global:"profile_index_table_item_selected_global__23uu0",index_table_empty_global:"profile_index_table_empty_global__NTn0L",index_table_bottomButton_global:"profile_index_table_bottomButton_global__lipqQ",index_table_button_new_global:"profile_index_table_button_new_global__iPR_6",index_manageButton_global:"profile_index_manageButton_global__UtSnN",container:"profile_container__UE7rH",divider:"profile_divider__EXgE7",layout_main:"profile_layout_main__ViTfe",main:"profile_main__pTjVm",main_gameselect:"profile_main_gameselect__erXN1",main_upload_wrapper:"profile_main_upload_wrapper__YHuKS",main_upload_discription:"profile_main_upload_discription__xwcKi",main_content:"profile_main_content___kWTu",main_content_value:"profile_main_content_value__yz1If",main_footer:"profile_main_footer__aSNc9"}}},function(e){e.O(0,[716,598,867,930,224,363,446,614,460,997,550,106,774,888,179],(function(){return a=9813,e(e.s=a);var a}));var a=e.O();_N_E=a}]);