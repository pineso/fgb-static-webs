(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[849],{7099:function(_,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/block",function(){return e(2671)}])},4003:function(_,a,e){"use strict";var t=e(6042),n=e(9396),l=e(5893),o=e(1647),i=(e(7294),e(7381)),r=e.n(i);a.Z=function(_){var a=_.paginationProps,e=_.onChange;return(0,l.jsxs)("div",{className:r().pagination_wrapper,children:[(0,l.jsxs)("div",{className:r().pagination_nav,children:[(0,l.jsx)("button",{className:r().pagination_goToLastBtn,onClick:function(){e(1)},children:"<<"}),(0,l.jsx)(o.Z,(0,n.Z)((0,t.Z)({},a),{onChange:function(_){e(_)}})),(0,l.jsx)("button",{className:r().pagination_goToLastBtn,onClick:function(){e(Math.ceil(a.total/a.defaultPageSize))},children:">>"})]}),(0,l.jsxs)("div",{className:r().pagination_total,children:["Total: ",a.total.toLocaleString()]})]})}},1568:function(_,a,e){"use strict";e.d(a,{Z:function(){return f}});var t=e(7568),n=e(6042),l=e(9396),o=e(7582),i=e(5893),r=e(5968),b=e(6226),c=e(4326),s=e(7462),g=e(7294),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"},u=e(2135),p=function(_,a){return g.createElement(u.Z,(0,s.Z)({},_,{ref:a,icon:d}))};var x=g.forwardRef(p),h=e(1597),m=e(6134),B=e(9697),k=e.n(B),f=function(_){var a=(0,g.useState)(!1),e=a[0],s=a[1],d=function(){var a=(0,t.Z)((function(){return(0,o.__generator)(this,(function(a){switch(a.label){case 0:return s(!0),setTimeout((function(){s(!1)}),1e3),[4,_.resetHandler()];case 1:return a.sent(),[2]}}))}));return function(){return a.apply(this,arguments)}}();return(0,i.jsxs)(r.Z,{justify:"start",align:"middle",className:_.className,gutter:[12,0],children:[(0,i.jsx)(b.Z,{span:4,children:(0,i.jsx)(c.ET,(0,n.Z)({option:_.pageKey},_.range))}),(0,i.jsx)(b.Z,{span:10,children:(0,i.jsx)(h.F,(0,l.Z)((0,n.Z)({},_.keyword),{onKeyDown:function(a){"Enter"===a.key&&_.searchHandler()}}))}),(0,i.jsx)(b.Z,{span:8,children:(0,i.jsxs)("div",{className:k().searchButtonContainer,children:[(0,i.jsx)(m.k,{className:k().searchBtn,onClick:function(){_.searchHandler()},children:"\uac80\uc0c9"}),_.customBtn,(0,i.jsx)(x,{spin:e,className:k().reloadBtn,onClick:function(){d()}})]})})]})}},2671:function(_,a,e){"use strict";e.r(a);var t=e(7568),n=e(6042),l=e(9396),o=e(7582),i=e(5893),r=e(6970),b=e.n(r),c=e(7083),s=e(4803),g=e(1568),d=e(1390),u=e(7294),p=e(1163),x=e(4075),h=e(8625),m=e(8357),B=e(4003),k=e(7184),f=e(6074),v=e(8731);a.default=function(){var _=(0,p.useRouter)(),a=(0,u.useState)(!1),e=a[0],r=a[1],w=(0,u.useState)(null),Z=w[0],N=w[1],j=(0,d.Mm)({value:""}),y=(0,d.DB)({value:"regulation_seq_num"}),C=(0,u.useState)([]),E=C[0],S=C[1],T=(0,u.useState)({current:1,defaultPageSize:s.Ne,total:0,showSizeChanger:!1,simple:!0}),L=T[0],K=T[1],O=function(){var a=(0,t.Z)((function(a,e){var t,i;return(0,o.__generator)(this,(function(o){switch(o.label){case 0:return[4,x.f.blockApi.searchBlock(a,e)];case 1:return t=o.sent(),h.m8.isErrorResponse(t)?(h.m8.signChecker(t)&&(alert(s.Xt.NEEDLOGIN),h.m8.removeUserData(),_.push("/signin")),alert(t.message),[2,null]):(i=t.regulationList.map((function(_,e){return(0,l.Z)((0,n.Z)({},_),{index:e+1+(a-1)*s.Ne,key:_.regulationSeqNum,serverIndex:1})})),S(i),K((function(_){return(0,l.Z)((0,n.Z)({},_),{total:t.total,current:t.page})})),[2,i])}}))}));return function(_,e){return a.apply(this,arguments)}}();(0,d.bd)((0,t.Z)((function(){var _;return(0,o.__generator)(this,(function(a){switch(a.label){case 0:return[4,O(1,s.Ne)];case 1:return(_=a.sent())&&S(_),[2]}}))})),[]),(0,d.bd)((0,t.Z)((function(){var _;return(0,o.__generator)(this,(function(a){switch(a.label){case 0:return[4,O(L.current,s.Ne)];case 1:return(_=a.sent())&&S(_),[2]}}))})),[L.current]),(0,u.useEffect)((function(){E&&0!==E.length?K((0,n.Z)({},L)):K((0,l.Z)((0,n.Z)({},L),{current:1,defaultPageSize:L.defaultPageSize,total:0}))}),[E]);var q=function(){var a=(0,t.Z)((function(){var a,e;return(0,o.__generator)(this,(function(t){switch(t.label){case 0:return[4,x.f.blockApi.searchBlock(L.current,s.Ne,y.value,j.value)];case 1:return a=t.sent(),h.m8.isErrorResponse(a)?h.m8.signChecker(a)?(alert(s.Xt.NEEDLOGIN),h.m8.removeUserData(),_.push("/signin"),[2]):(alert(a.message),[2]):(e=a.regulationList.map((function(_,a){return(0,l.Z)((0,n.Z)({},_),{index:a+1,key:_.regulationSeqNum,serverIndex:1})})),S(e),K((0,l.Z)((0,n.Z)({},L),{current:1,total:a.total})),[2])}}))}));return function(){return a.apply(this,arguments)}}(),D=function(){var a=(0,t.Z)((function(){var a,e;return(0,o.__generator)(this,(function(t){switch(t.label){case 0:return j.onClear(),y.onClear(),[4,x.f.blockApi.searchBlock(L.current,s.Ne)];case 1:return a=t.sent(),h.m8.isErrorResponse(a)?h.m8.signChecker(a)?(alert(s.Xt.NEEDLOGIN),h.m8.removeUserData(),_.push("/signin"),[2]):(alert(a.message),[2]):(e=a.regulationList.map((function(_,a){return(0,l.Z)((0,n.Z)({},_),{index:a+1,key:_.regulationSeqNum,serverIndex:1})})),S(e),K((0,l.Z)((0,n.Z)({},L),{current:1,total:a.total})),[2])}}))}));return function(){return a.apply(this,arguments)}}();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(c.Z,{titleKey:s.xd,fetchDataHandler:O,children:(0,i.jsxs)("div",{className:b().container,children:[(0,i.jsx)(v.wM,{open:e,setOpen:r,data:Z,fetchData:D}),(0,i.jsx)(g.Z,{className:b().index_searchBar_global,pageKey:s.xd,keyword:{value:j.value,onChange:j.onChange},range:{value:y.value,onChange:function(_){y.onChange(_)}},searchHandler:q,resetHandler:D,customBtn:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v.y_,{resetHandler:D}),(0,i.jsx)(v.Rg,{resetHandler:D})]})}),(0,i.jsx)(f.Z,{className:b().divider}),(0,i.jsx)("div",{className:b().table_title,children:(0,i.jsx)("span",{children:"Block \ub9ac\uc2a4\ud2b8"})}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.M,{option:"indexTable",tableInfo:k.Ex,tableDetails:k.F4,dataSource:E,render:function(_){_.index;var a=_.key,e=_.pm_value;switch(a){case"regulationRegisterDt":case"regulationExpireDt":return(0,i.jsx)(i.Fragment,{children:(0,h.aB)(e)});default:return"object"!==typeof e||Array.isArray(e)||null===e?(0,i.jsx)("div",{children:e}):(0,i.jsx)("div",{children:JSON.stringify(e)})}},route:"notice",pagination:(0,l.Z)((0,n.Z)({},L),{className:b().tablePagination}),onRow:function(_,a){return{onClick:function(a){r(!0),N(_)}}}}),(0,i.jsx)(B.Z,{paginationProps:L,onChange:function(_){K((0,l.Z)((0,n.Z)({},L),{current:_}))}})]})]})})})}},7381:function(_){_.exports={button_global:"pagination_button_global__skWb9",render_btn:"pagination_render_btn__qkssB",input_global:"pagination_input_global__setEe",center_text:"pagination_center_text__JaSac",input_password_global:"pagination_input_password_global___3lM3",select_global:"pagination_select_global__B_6ez",select_dropdown_global:"pagination_select_dropdown_global__Eaao0",table_global:"pagination_table_global__Iws1p","ant-table-selection-column":"pagination_ant-table-selection-column__Jj3tO","ant-table-row-expand-icon-cell":"pagination_ant-table-row-expand-icon-cell__y919U",index_table:"pagination_index_table__dG1zt",sidebar_global:"pagination_sidebar_global__OnWGi",sidebar_menu_global:"pagination_sidebar_menu_global__XUKcZ",pagination_wrapper:"pagination_pagination_wrapper__LexlT",pagination_nav:"pagination_pagination_nav__k3qg0",pagination_total:"pagination_pagination_total__nWG9M",checkbox_global:"pagination_checkbox_global__MTx2F",radio_global:"pagination_radio_global__FqphE",radioGroup_global:"pagination_radioGroup_global__xm_2D",index_container_global:"pagination_index_container_global__vl0Zx",index_search_container_global:"pagination_index_search_container_global__N7qTn",index_searchBar_global:"pagination_index_searchBar_global__xYxbb",index_content_global:"pagination_index_content_global__3xQfl",index_content_wrapper_global:"pagination_index_content_wrapper_global__QNXYu",index_table_wrapper_global:"pagination_index_table_wrapper_global__r0F5u",index_table_nav_global:"pagination_index_table_nav_global__FNa4W",index_table_title_global:"pagination_index_table_title_global__RBX5q",index_table_title_item_global:"pagination_index_table_title_item_global__cxnpF",index_table_title_item_sort_global:"pagination_index_table_title_item_sort_global__2EvIO",index_table_title_item_label_global:"pagination_index_table_title_item_label_global__KVx4F",index_table_title_item_sort_icon_global:"pagination_index_table_title_item_sort_icon_global__o4Pof",sort_asc:"pagination_sort_asc__LMHqS",sort_desc:"pagination_sort_desc__TFf09",index_table_data_global:"pagination_index_table_data_global__n2BXw",index_table_item_global:"pagination_index_table_item_global__9rq_B",index_table_item_value_global:"pagination_index_table_item_value_global__zU7Ew",index_table_item_selected_global:"pagination_index_table_item_selected_global__zqxUs",index_table_empty_global:"pagination_index_table_empty_global__gpcJZ",index_table_bottomButton_global:"pagination_index_table_bottomButton_global__E2G3L",index_table_button_new_global:"pagination_index_table_button_new_global___8HBz",index_manageButton_global:"pagination_index_manageButton_global__pP63V",container:"pagination_container__nZvC_",divider:"pagination_divider__TBqwk"}},9697:function(_){_.exports={button_global:"searchBar_button_global__Ujzin",render_btn:"searchBar_render_btn__ojE2i",input_global:"searchBar_input_global__TdZs1",center_text:"searchBar_center_text__sNGx_",input_password_global:"searchBar_input_password_global__wS9Xw",select_global:"searchBar_select_global__yTVpq",select_dropdown_global:"searchBar_select_dropdown_global__lnkch",table_global:"searchBar_table_global__SUcKs","ant-table-selection-column":"searchBar_ant-table-selection-column__FRHSY","ant-table-row-expand-icon-cell":"searchBar_ant-table-row-expand-icon-cell__89ISk",index_table:"searchBar_index_table__TZLne",sidebar_global:"searchBar_sidebar_global__wN_D7",sidebar_menu_global:"searchBar_sidebar_menu_global__8NnbE",pagination_wrapper:"searchBar_pagination_wrapper__ikAoK",pagination_nav:"searchBar_pagination_nav__veQSK",pagination_total:"searchBar_pagination_total__QL3fY",checkbox_global:"searchBar_checkbox_global__x_7nB",radio_global:"searchBar_radio_global__ec5ps",radioGroup_global:"searchBar_radioGroup_global__QauMY",index_container_global:"searchBar_index_container_global__Vv0eM",index_search_container_global:"searchBar_index_search_container_global__duY1B",index_searchBar_global:"searchBar_index_searchBar_global__psSTK",index_content_global:"searchBar_index_content_global__jaLGS",index_content_wrapper_global:"searchBar_index_content_wrapper_global__qUWt6",index_table_wrapper_global:"searchBar_index_table_wrapper_global__2STlT",index_table_nav_global:"searchBar_index_table_nav_global__hyPh1",index_table_title_global:"searchBar_index_table_title_global__OV_WK",index_table_title_item_global:"searchBar_index_table_title_item_global__Kii3Q",index_table_title_item_sort_global:"searchBar_index_table_title_item_sort_global__DYY5d",index_table_title_item_label_global:"searchBar_index_table_title_item_label_global__70_jA",index_table_title_item_sort_icon_global:"searchBar_index_table_title_item_sort_icon_global__Z8sES",sort_asc:"searchBar_sort_asc__Hy7ep",sort_desc:"searchBar_sort_desc__0j1G8",index_table_data_global:"searchBar_index_table_data_global__8iCJA",index_table_item_global:"searchBar_index_table_item_global__aBpaY",index_table_item_value_global:"searchBar_index_table_item_value_global__8l1dx",index_table_item_selected_global:"searchBar_index_table_item_selected_global__wHBkf",index_table_empty_global:"searchBar_index_table_empty_global__LnfcN",index_table_bottomButton_global:"searchBar_index_table_bottomButton_global__r5mjY",index_table_button_new_global:"searchBar_index_table_button_new_global__cyXRL",index_manageButton_global:"searchBar_index_manageButton_global__9NXek",container:"searchBar_container__KyPC9",divider:"searchBar_divider__uczdC",searchBarContainer:"searchBar_searchBarContainer__iU4OR",searchButtonContainer:"searchBar_searchButtonContainer__7H5LG",searchBtn:"searchBar_searchBtn__JOPy9",addBtn:"searchBar_addBtn__h8Zh3",reloadBtn:"searchBar_reloadBtn__Qqeji"}},6970:function(_){_.exports={button_global:"block_button_global__If__s",render_btn:"block_render_btn__uMKQC",input_global:"block_input_global__SJpwq",center_text:"block_center_text__lhk_L",input_password_global:"block_input_password_global__OWItL",select_global:"block_select_global__PN6_L",select_dropdown_global:"block_select_dropdown_global__g7FxK",table_global:"block_table_global__TpOBh","ant-table-selection-column":"block_ant-table-selection-column__R9ubQ","ant-table-row-expand-icon-cell":"block_ant-table-row-expand-icon-cell__T7b1w",index_table:"block_index_table__MB_BO",sidebar_global:"block_sidebar_global__698AW",sidebar_menu_global:"block_sidebar_menu_global__CEIOU",pagination_wrapper:"block_pagination_wrapper__IKh_C",pagination_nav:"block_pagination_nav__d_izK",pagination_total:"block_pagination_total__Hl1v4",checkbox_global:"block_checkbox_global__EOOKY",radio_global:"block_radio_global__bWb_5",radioGroup_global:"block_radioGroup_global__l_jNy",index_container_global:"block_index_container_global__S9bCd",index_search_container_global:"block_index_search_container_global__puF1r",index_searchBar_global:"block_index_searchBar_global__xAJeX",index_content_global:"block_index_content_global__B5SpM",index_content_wrapper_global:"block_index_content_wrapper_global__qCA_3",index_table_wrapper_global:"block_index_table_wrapper_global__pT2Vt",index_table_nav_global:"block_index_table_nav_global__HnDX4",index_table_title_global:"block_index_table_title_global__cfGKi",index_table_title_item_global:"block_index_table_title_item_global__07z3f",index_table_title_item_sort_global:"block_index_table_title_item_sort_global__phMht",index_table_title_item_label_global:"block_index_table_title_item_label_global__F9TX0",index_table_title_item_sort_icon_global:"block_index_table_title_item_sort_icon_global__tTJ5J",sort_asc:"block_sort_asc__6V3cg",sort_desc:"block_sort_desc__zmxLd",index_table_data_global:"block_index_table_data_global__nuXJQ",index_table_item_global:"block_index_table_item_global___0koQ",index_table_item_value_global:"block_index_table_item_value_global__RDo1o",index_table_item_selected_global:"block_index_table_item_selected_global__mkal_",index_table_empty_global:"block_index_table_empty_global__2fCfR",index_table_bottomButton_global:"block_index_table_bottomButton_global___wpJK",index_table_button_new_global:"block_index_table_button_new_global__PIQvR",index_manageButton_global:"block_index_manageButton_global__HSPyh",container:"block_container__XwFn4",divider:"block_divider__7l5uH",table_title:"block_table_title___kb86",addBtn:"block_addBtn__LBntJ"}}},function(_){_.O(0,[470,107,137,411,110,396,326,135,720,931,731,654,504,126,184,774,888,179],(function(){return a=7099,_(_.s=a);var a}));var a=_.O();_N_E=a}]);