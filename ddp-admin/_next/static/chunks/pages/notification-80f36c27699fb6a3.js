(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[695],{3126:function(a,e,_){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notification",function(){return _(1192)}])},4003:function(a,e,_){"use strict";var t=_(6042),n=_(9396),i=_(5893),l=_(1647),o=(_(7294),_(7381)),r=_.n(o);e.Z=function(a){var e=a.paginationProps,_=a.onChange;return(0,i.jsxs)("div",{className:r().pagination_wrapper,children:[(0,i.jsxs)("div",{className:r().pagination_nav,children:[(0,i.jsx)("button",{className:r().pagination_goToLastBtn,onClick:function(){_(1)},children:"<<"}),(0,i.jsx)(l.Z,(0,n.Z)((0,t.Z)({},e),{onChange:function(a){_(a)}})),(0,i.jsx)("button",{className:r().pagination_goToLastBtn,onClick:function(){_(Math.ceil(e.total/e.defaultPageSize))},children:">>"})]}),(0,i.jsxs)("div",{className:r().pagination_total,children:["Total: ",e.total.toLocaleString()]})]})}},5192:function(a,e,_){"use strict";_.d(e,{Dy:function(){return t},e$:function(){return n}});_(4654);var t={keys:["index","seqNum","serverIndex","noticeSt","noticeContentList","noticeStartDt","noticeEndDt","managerLoginId"]},n={index:{label:"Sequence",sorter:!0,align:"center",width:130},seqNum:{label:"Uuid(Puid)",sorter:!0,align:"center",width:130},serverIndex:{label:"Server",align:"center",width:130},noticeSt:{label:"\uc0c1\ud0dc",sorter:!0,align:"center",width:150},noticeContentList:{label:"\ub0b4\uc6a9",sorter:!0,align:"center"},noticeStartDt:{label:"\uc810\uac80 \uc2dc\uc791",sorter:!0,align:"center",width:170},noticeEndDt:{label:"\uc810\uac80 \uc885\ub8cc",sorter:!0,align:"center",width:170},managerLoginId:{label:"\ub4f1\ub85d\uc790",sorter:!0,align:"center",width:170}}},1568:function(a,e,_){"use strict";_.d(e,{Z:function(){return v}});var t=_(7568),n=_(6042),i=_(9396),l=_(7582),o=_(5893),r=_(5968),c=_(6226),s=_(4326),b=_(7462),g=_(7294),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"},u=_(2135),p=function(a,e){return g.createElement(u.Z,(0,b.Z)({},a,{ref:e,icon:d}))};var x=g.forwardRef(p),h=_(1597),f=_(6134),m=_(9697),B=_.n(m),v=function(a){var e=(0,g.useState)(!1),_=e[0],b=e[1],d=function(){var e=(0,t.Z)((function(){return(0,l.__generator)(this,(function(e){switch(e.label){case 0:return b(!0),setTimeout((function(){b(!1)}),1e3),[4,a.resetHandler()];case 1:return e.sent(),[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,o.jsxs)(r.Z,{justify:"start",align:"middle",className:a.className,gutter:[12,0],children:[(0,o.jsx)(c.Z,{span:4,children:(0,o.jsx)(s.ET,(0,n.Z)({option:a.pageKey},a.range))}),(0,o.jsx)(c.Z,{span:10,children:(0,o.jsx)(h.F,(0,i.Z)((0,n.Z)({},a.keyword),{onKeyDown:function(e){"Enter"===e.key&&a.searchHandler()}}))}),(0,o.jsx)(c.Z,{span:8,children:(0,o.jsxs)("div",{className:B().searchButtonContainer,children:[(0,o.jsx)(f.k,{className:B().searchBtn,onClick:function(){a.searchHandler()},children:"\uac80\uc0c9"}),a.customBtn,(0,o.jsx)(x,{spin:_,className:B().reloadBtn,onClick:function(){d()}})]})})]})}},1192:function(a,e,_){"use strict";_.r(e);var t=_(7568),n=_(6042),i=_(9396),l=_(7582),o=_(5893),r=_(4655),c=_.n(r),s=_(7083),b=_(4803),g=_(1568),d=_(1390),u=_(7294),p=_(1163),x=_(4075),h=_(8625),f=_(8357),m=_(4003),B=_(5192),v=_(6074),w=_(8731);e.default=function(){var a=(0,p.useRouter)(),e=(0,u.useState)(!1),_=e[0],r=e[1],Z=(0,u.useState)(null),N=Z[0],j=Z[1],y=(0,d.Mm)({value:""}),E=(0,d.DB)({value:"notice_status"}),k=(0,u.useState)([]),C=k[0],S=k[1],L=(0,u.useState)({current:1,defaultPageSize:b.Ne,total:0,showSizeChanger:!1,simple:!0}),D=L[0],q=L[1],T=function(){var e=(0,t.Z)((function(e,_,t,o){var r,c;return(0,l.__generator)(this,(function(l){switch(l.label){case 0:return[4,x.f.notificationApi.searchNotifications(e,_,t,o)];case 1:return r=l.sent(),h.m8.isErrorResponse(r)?(h.m8.signChecker(r)&&(alert(b.Xt.NEEDLOGIN),h.m8.removeUserData(),a.push("/signin")),alert(r.message),[2,null]):(c=r.noticeList.map((function(a,_){return(0,i.Z)((0,n.Z)({},a),{index:_+1+(e-1)*b.Ne,key:a.seqNum,serverIndex:a.serverIndex})})),S(c),q((function(a){return(0,i.Z)((0,n.Z)({},a),{total:r.total,current:r.page})})),[2,c])}}))}));return function(a,_,t,n){return e.apply(this,arguments)}}();(0,d.bd)((0,t.Z)((function(){var a;return(0,l.__generator)(this,(function(e){switch(e.label){case 0:return[4,T(1,b.Ne,E.value,y.value)];case 1:return(a=e.sent())&&S(a),[2]}}))})),[]),(0,d.bd)((0,t.Z)((function(){var a;return(0,l.__generator)(this,(function(e){switch(e.label){case 0:return[4,T(D.current,b.Ne,E.value,y.value)];case 1:return(a=e.sent())&&S(a),[2]}}))})),[D.current]),(0,u.useEffect)((function(){C&&0!==C.length?q((0,n.Z)({},D)):q((0,i.Z)((0,n.Z)({},D),{current:1,defaultPageSize:D.defaultPageSize,total:0}))}),[C]);var H=function(){var e=(0,t.Z)((function(){var e,_;return(0,l.__generator)(this,(function(t){switch(t.label){case 0:return[4,x.f.notificationApi.searchNotifications(D.current,b.Ne,E.value,y.value)];case 1:return e=t.sent(),h.m8.isErrorResponse(e)?h.m8.signChecker(e)?(alert(b.Xt.NEEDLOGIN),h.m8.removeUserData(),a.push("/signin"),[2]):(alert(e.message),[2]):(_=e.noticeList.map((function(a,e){return(0,i.Z)((0,n.Z)({},a),{index:e+1,key:a.seqNum})})),S(_),q((0,i.Z)((0,n.Z)({},D),{current:1,total:e.total})),[2])}}))}));return function(){return e.apply(this,arguments)}}(),G=function(){var e=(0,t.Z)((function(){var e,_;return(0,l.__generator)(this,(function(t){switch(t.label){case 0:return y.onClear(),E.onClear(),[4,x.f.notificationApi.searchNotifications(D.current,b.Ne)];case 1:return e=t.sent(),h.m8.isErrorResponse(e)?h.m8.signChecker(e)?(alert(b.Xt.NEEDLOGIN),h.m8.removeUserData(),a.push("/signin"),[2]):(alert(e.message),[2]):(_=e.noticeList.map((function(a,e){return(0,i.Z)((0,n.Z)({},a),{index:e+1,key:a.seqNum})})),S(_),q((0,i.Z)((0,n.Z)({},D),{current:1,total:e.total})),[2])}}))}));return function(){return e.apply(this,arguments)}}();return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(s.Z,{titleKey:b.qq,fetchDataHandler:T,children:(0,o.jsxs)("div",{className:c().container,children:[(0,o.jsx)(w.Yv,{open:_,setOpen:r,data:N,fetchData:G}),(0,o.jsx)(g.Z,{className:c().index_searchBar_global,pageKey:b.qq,keyword:{value:y.value,onChange:y.onChange},range:{value:E.value,onChange:function(a){E.onChange(a)}},searchHandler:H,resetHandler:G,customBtn:(0,o.jsx)(w.LV,{resetHandler:G})}),(0,o.jsx)(v.Z,{className:c().divider}),(0,o.jsx)("div",{className:c().table_title,children:(0,o.jsx)("span",{children:"\uc54c\ub9bc \ub9ac\uc2a4\ud2b8"})}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f.M,{option:"indexTable",tableInfo:B.Dy,tableDetails:B.e$,dataSource:C,render:function(a){a.index;var e=a.key,_=a.pm_value,t=a.record;switch(e){case"noticeContentList":return _.map((function(a,e){return(0,o.jsxs)("div",{children:[e+1,". (",a.noticeLanguageCd,") ",a.noticeContent]},e)}));case"noticeSt":return-1==_?b.Hg.CANCELED:(0,h.po)(t.noticeStartDt,t.noticeEndDt);case"noticeStartDt":case"noticeEndDt":return(0,h.aB)(_);default:return"object"!==typeof _||Array.isArray(_)||null===_?(0,o.jsx)("div",{children:_}):(0,o.jsx)("div",{children:JSON.stringify(_)})}},route:"notification",pagination:(0,i.Z)((0,n.Z)({},D),{className:c().tablePagination}),onRow:function(a,e){return{onClick:function(e){r(!0),j(a)}}}}),(0,o.jsx)(m.Z,{paginationProps:D,onChange:function(a){q((0,i.Z)((0,n.Z)({},D),{current:a}))}})]})]})})})}},7381:function(a){a.exports={button_global:"pagination_button_global__skWb9",render_btn:"pagination_render_btn__qkssB",input_global:"pagination_input_global__setEe",center_text:"pagination_center_text__JaSac",input_password_global:"pagination_input_password_global___3lM3",select_global:"pagination_select_global__B_6ez",select_dropdown_global:"pagination_select_dropdown_global__Eaao0",table_global:"pagination_table_global__Iws1p","ant-table-selection-column":"pagination_ant-table-selection-column__Jj3tO","ant-table-row-expand-icon-cell":"pagination_ant-table-row-expand-icon-cell__y919U",index_table:"pagination_index_table__dG1zt",sidebar_global:"pagination_sidebar_global__OnWGi",sidebar_menu_global:"pagination_sidebar_menu_global__XUKcZ",pagination_wrapper:"pagination_pagination_wrapper__LexlT",pagination_nav:"pagination_pagination_nav__k3qg0",pagination_total:"pagination_pagination_total__nWG9M",checkbox_global:"pagination_checkbox_global__MTx2F",radio_global:"pagination_radio_global__FqphE",radioGroup_global:"pagination_radioGroup_global__xm_2D",index_container_global:"pagination_index_container_global__vl0Zx",index_search_container_global:"pagination_index_search_container_global__N7qTn",index_searchBar_global:"pagination_index_searchBar_global__xYxbb",index_content_global:"pagination_index_content_global__3xQfl",index_content_wrapper_global:"pagination_index_content_wrapper_global__QNXYu",index_table_wrapper_global:"pagination_index_table_wrapper_global__r0F5u",index_table_nav_global:"pagination_index_table_nav_global__FNa4W",index_table_title_global:"pagination_index_table_title_global__RBX5q",index_table_title_item_global:"pagination_index_table_title_item_global__cxnpF",index_table_title_item_sort_global:"pagination_index_table_title_item_sort_global__2EvIO",index_table_title_item_label_global:"pagination_index_table_title_item_label_global__KVx4F",index_table_title_item_sort_icon_global:"pagination_index_table_title_item_sort_icon_global__o4Pof",sort_asc:"pagination_sort_asc__LMHqS",sort_desc:"pagination_sort_desc__TFf09",index_table_data_global:"pagination_index_table_data_global__n2BXw",index_table_item_global:"pagination_index_table_item_global__9rq_B",index_table_item_value_global:"pagination_index_table_item_value_global__zU7Ew",index_table_item_selected_global:"pagination_index_table_item_selected_global__zqxUs",index_table_empty_global:"pagination_index_table_empty_global__gpcJZ",index_table_bottomButton_global:"pagination_index_table_bottomButton_global__E2G3L",index_table_button_new_global:"pagination_index_table_button_new_global___8HBz",index_manageButton_global:"pagination_index_manageButton_global__pP63V",container:"pagination_container__nZvC_",divider:"pagination_divider__TBqwk"}},9697:function(a){a.exports={button_global:"searchBar_button_global__Ujzin",render_btn:"searchBar_render_btn__ojE2i",input_global:"searchBar_input_global__TdZs1",center_text:"searchBar_center_text__sNGx_",input_password_global:"searchBar_input_password_global__wS9Xw",select_global:"searchBar_select_global__yTVpq",select_dropdown_global:"searchBar_select_dropdown_global__lnkch",table_global:"searchBar_table_global__SUcKs","ant-table-selection-column":"searchBar_ant-table-selection-column__FRHSY","ant-table-row-expand-icon-cell":"searchBar_ant-table-row-expand-icon-cell__89ISk",index_table:"searchBar_index_table__TZLne",sidebar_global:"searchBar_sidebar_global__wN_D7",sidebar_menu_global:"searchBar_sidebar_menu_global__8NnbE",pagination_wrapper:"searchBar_pagination_wrapper__ikAoK",pagination_nav:"searchBar_pagination_nav__veQSK",pagination_total:"searchBar_pagination_total__QL3fY",checkbox_global:"searchBar_checkbox_global__x_7nB",radio_global:"searchBar_radio_global__ec5ps",radioGroup_global:"searchBar_radioGroup_global__QauMY",index_container_global:"searchBar_index_container_global__Vv0eM",index_search_container_global:"searchBar_index_search_container_global__duY1B",index_searchBar_global:"searchBar_index_searchBar_global__psSTK",index_content_global:"searchBar_index_content_global__jaLGS",index_content_wrapper_global:"searchBar_index_content_wrapper_global__qUWt6",index_table_wrapper_global:"searchBar_index_table_wrapper_global__2STlT",index_table_nav_global:"searchBar_index_table_nav_global__hyPh1",index_table_title_global:"searchBar_index_table_title_global__OV_WK",index_table_title_item_global:"searchBar_index_table_title_item_global__Kii3Q",index_table_title_item_sort_global:"searchBar_index_table_title_item_sort_global__DYY5d",index_table_title_item_label_global:"searchBar_index_table_title_item_label_global__70_jA",index_table_title_item_sort_icon_global:"searchBar_index_table_title_item_sort_icon_global__Z8sES",sort_asc:"searchBar_sort_asc__Hy7ep",sort_desc:"searchBar_sort_desc__0j1G8",index_table_data_global:"searchBar_index_table_data_global__8iCJA",index_table_item_global:"searchBar_index_table_item_global__aBpaY",index_table_item_value_global:"searchBar_index_table_item_value_global__8l1dx",index_table_item_selected_global:"searchBar_index_table_item_selected_global__wHBkf",index_table_empty_global:"searchBar_index_table_empty_global__LnfcN",index_table_bottomButton_global:"searchBar_index_table_bottomButton_global__r5mjY",index_table_button_new_global:"searchBar_index_table_button_new_global__cyXRL",index_manageButton_global:"searchBar_index_manageButton_global__9NXek",container:"searchBar_container__KyPC9",divider:"searchBar_divider__uczdC",searchBarContainer:"searchBar_searchBarContainer__iU4OR",searchButtonContainer:"searchBar_searchButtonContainer__7H5LG",searchBtn:"searchBar_searchBtn__JOPy9",addBtn:"searchBar_addBtn__h8Zh3",reloadBtn:"searchBar_reloadBtn__Qqeji"}},4655:function(a){a.exports={button_global:"notification_button_global__d6_F6",render_btn:"notification_render_btn__YhtPc",input_global:"notification_input_global__I_M_M",center_text:"notification_center_text__NHsB3",input_password_global:"notification_input_password_global__Hi8qj",select_global:"notification_select_global__jlsz2",select_dropdown_global:"notification_select_dropdown_global__RYQad",table_global:"notification_table_global__D1lHL","ant-table-selection-column":"notification_ant-table-selection-column__0IBSU","ant-table-row-expand-icon-cell":"notification_ant-table-row-expand-icon-cell__S_Vhn",index_table:"notification_index_table__YneyN",sidebar_global:"notification_sidebar_global__Jg6iI",sidebar_menu_global:"notification_sidebar_menu_global__c6XHj",pagination_wrapper:"notification_pagination_wrapper__AIVE3",pagination_nav:"notification_pagination_nav__XYute",pagination_total:"notification_pagination_total__x5v5t",checkbox_global:"notification_checkbox_global__gjfrH",radio_global:"notification_radio_global__GyGIc",radioGroup_global:"notification_radioGroup_global__cuMtl",index_container_global:"notification_index_container_global__jgLHs",index_search_container_global:"notification_index_search_container_global__L0kTP",index_searchBar_global:"notification_index_searchBar_global__B5lVt",index_content_global:"notification_index_content_global__VCrId",index_content_wrapper_global:"notification_index_content_wrapper_global__rVEVR",index_table_wrapper_global:"notification_index_table_wrapper_global__5_wFC",index_table_nav_global:"notification_index_table_nav_global__P_lvR",index_table_title_global:"notification_index_table_title_global__eQvT7",index_table_title_item_global:"notification_index_table_title_item_global__ZZLrM",index_table_title_item_sort_global:"notification_index_table_title_item_sort_global__EfGgO",index_table_title_item_label_global:"notification_index_table_title_item_label_global__Eys6c",index_table_title_item_sort_icon_global:"notification_index_table_title_item_sort_icon_global___rxk_",sort_asc:"notification_sort_asc__rk2SE",sort_desc:"notification_sort_desc__ZF2FQ",index_table_data_global:"notification_index_table_data_global__YtA5a",index_table_item_global:"notification_index_table_item_global__HpfzE",index_table_item_value_global:"notification_index_table_item_value_global__vS2Z2",index_table_item_selected_global:"notification_index_table_item_selected_global__w37aW",index_table_empty_global:"notification_index_table_empty_global___spcd",index_table_bottomButton_global:"notification_index_table_bottomButton_global__yKU8l",index_table_button_new_global:"notification_index_table_button_new_global__JryW4",index_manageButton_global:"notification_index_manageButton_global__qKilr",container:"notification_container__5aTig",divider:"notification_divider__TK0W_",table_title:"notification_table_title__o4S5A",addBtn:"notification_addBtn__OnEYM"}}},function(a){a.O(0,[470,107,137,411,110,396,326,135,720,931,731,654,504,126,774,888,179],(function(){return e=3126,a(a.s=e);var e}));var e=a.O();_N_E=e}]);