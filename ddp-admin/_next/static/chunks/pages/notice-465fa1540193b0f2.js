(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[328],{2223:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notice",function(){return n(3252)}])},4003:function(e,t,n){"use strict";var a=n(6042),_=n(9396),i=n(5893),o=n(1647),l=(n(7294),n(7381)),r=n.n(l);t.Z=function(e){var t=e.paginationProps,n=e.onChange;return(0,i.jsxs)("div",{className:r().pagination_wrapper,children:[(0,i.jsxs)("div",{className:r().pagination_nav,children:[(0,i.jsx)("button",{className:r().pagination_goToLastBtn,onClick:function(){n(1)},children:"<<"}),(0,i.jsx)(o.Z,(0,_.Z)((0,a.Z)({},t),{onChange:function(e){n(e)}})),(0,i.jsx)("button",{className:r().pagination_goToLastBtn,onClick:function(){n(Math.ceil(t.total/t.defaultPageSize))},children:">>"})]}),(0,i.jsxs)("div",{className:r().pagination_total,children:["Total: ",t.total]})]})}},5606:function(e,t,n){"use strict";n.d(t,{Dn:function(){return r},Ee:function(){return c}});var a=n(1438),_=n(7582),i=n(4074),o=function e(){(0,a.Z)(this,e)};(0,_.__decorate)([(0,i.C)(),(0,_.__metadata)("design:type",Number)],o.prototype,"seqNum",void 0),(0,_.__decorate)([(0,i.C)(),(0,_.__metadata)("design:type",String)],o.prototype,"CreateDt",void 0),(0,_.__decorate)([(0,i.C)(),(0,_.__metadata)("design:type",String)],o.prototype,"UpdateDt",void 0),(0,_.__decorate)([(0,i.C)(),(0,_.__metadata)("design:type",Number)],o.prototype,"noticeType",void 0),(0,_.__decorate)([(0,i.C)(),(0,_.__metadata)("design:type",Number)],o.prototype,"noticeClass",void 0),(0,_.__decorate)([(0,i.C)(),(0,_.__metadata)("design:type",Number)],o.prototype,"noticeSt",void 0),(0,_.__decorate)([(0,i.C)(),(0,_.__metadata)("design:type",String)],o.prototype,"noticeName",void 0),(0,_.__decorate)([(0,i.C)(),(0,_.__metadata)("design:type",Array)],o.prototype,"noticeContentList",void 0),(0,_.__decorate)([(0,i.C)(),(0,_.__metadata)("design:type",String)],o.prototype,"noticeStartDt",void 0),(0,_.__decorate)([(0,i.C)(),(0,_.__metadata)("design:type",String)],o.prototype,"noticeEndDt",void 0),(0,_.__decorate)([(0,i.C)(),(0,_.__metadata)("design:type",String)],o.prototype,"managerLoginId",void 0),(0,_.__decorate)([(0,i.C)(),(0,_.__metadata)("design:type",String)],o.prototype,"noticeLanguageCd",void 0),(0,_.__decorate)([(0,i.C)(),(0,_.__metadata)("design:type",Number)],o.prototype,"serverIndex",void 0);var l=function e(){(0,a.Z)(this,e)};(0,_.__decorate)([(0,i.C)(),(0,_.__metadata)("design:type",Array)],l.prototype,"noticeList",void 0),(0,_.__decorate)([(0,i.C)(),(0,_.__metadata)("design:type",Number)],l.prototype,"total",void 0),(0,_.__decorate)([(0,i.C)(),(0,_.__metadata)("design:type",Number)],l.prototype,"page",void 0),(0,_.__decorate)([(0,i.C)(),(0,_.__metadata)("design:type",Number)],l.prototype,"last_page",void 0);var r={keys:["index","seqNum","serverIndex","noticeClass","noticeContentList","noticeContentList2","CreateDt","managerLoginId"]},c={index:{label:"Sequence",sorter:!0,align:"center",width:130},seqNum:{label:"Uuid(Puid)",sorter:!0,align:"center"},serverIndex:{label:"Server",align:"center",width:130},noticeClass:{label:"\uad6c\ubd84",sorter:!0,align:"center",width:200},noticeContentList:{label:"\uc81c\ubaa9",sorter:!0,align:"center"},noticeContentList2:{label:"\ub0b4\uc6a9",sorter:!0,align:"center"},CreateDt:{label:"\ub4f1\ub85d\uc77c",sorter:!0,align:"center",width:220},managerLoginId:{label:"\ub4f1\ub85d\uc790",sorter:!0,align:"center",width:200}}},3252:function(e,t,n){"use strict";n.r(t);var a=n(7568),_=n(6042),i=n(9396),o=n(7582),l=n(5893),r=n(8012),c=n.n(r),d=n(7083),s=n(4803),g=n(1568),b=n(1390),p=n(7294),u=n(1163),x=n(1745),m=n(8625),v=n(8357),h=n(4003),f=n(5606),y=n(6074),C=n(7289);t.default=function(){var e=(0,u.useRouter)(),t=(0,p.useState)(!1),n=t[0],r=t[1],w=(0,p.useState)(null),N=w[0],Z=w[1],L=(0,b.Mm)({value:""}),j=(0,b.DB)({value:"notice_class"}),B=(0,p.useState)([]),S=B[0],k=B[1],D=(0,p.useState)({current:1,defaultPageSize:s.Ne,total:0,showSizeChanger:!1,simple:!0}),E=D[0],F=D[1],P=function(){var t=(0,a.Z)((function(t,n,a,l){var r,c;return(0,o.__generator)(this,(function(o){switch(o.label){case 0:return[4,x.f.noticeApi.searchNotices(t,n,a,l)];case 1:return r=o.sent(),m.m8.isErrorResponse(r)?(m.m8.signChecker(r)&&(alert(s.Xt.NEEDLOGIN),m.m8.removeUserData(),e.push("/signin")),alert(r.message),[2,null]):(c=r.noticeList.map((function(e,n){return(0,i.Z)((0,_.Z)({},e),{index:n+1+(t-1)*s.Ne,key:e.seqNum,serverIndex:e.serverIndex})})),k(c),F((function(e){return(0,i.Z)((0,_.Z)({},e),{total:r.total,current:r.page})})),[2,c])}}))}));return function(e,n,a,_){return t.apply(this,arguments)}}();(0,b.bd)((0,a.Z)((function(){var e;return(0,o.__generator)(this,(function(t){switch(t.label){case 0:return[4,P(1,s.Ne,j.value,L.value)];case 1:return(e=t.sent())&&k(e),[2]}}))})),[]),(0,b.bd)((0,a.Z)((function(){var e;return(0,o.__generator)(this,(function(t){switch(t.label){case 0:return[4,P(E.current,s.Ne,j.value,L.value)];case 1:return(e=t.sent())&&k(e),[2]}}))})),[E.current]),(0,p.useEffect)((function(){S&&0!==S.length?F((0,_.Z)({},E)):F((0,i.Z)((0,_.Z)({},E),{current:1,defaultPageSize:E.defaultPageSize,total:0}))}),[S]);var q=function(){var t=(0,a.Z)((function(){var t,n;return(0,o.__generator)(this,(function(a){switch(a.label){case 0:return[4,x.f.noticeApi.searchNotices(E.current,s.Ne,j.value,L.value)];case 1:return t=a.sent(),m.m8.isErrorResponse(t)?m.m8.signChecker(t)?(alert(s.Xt.NEEDLOGIN),m.m8.removeUserData(),e.push("/signin"),[2]):(alert(t.message),[2]):(n=t.noticeList.map((function(e,t){return(0,i.Z)((0,_.Z)({},e),{index:t+1,key:e.seqNum})})),k(n),F((0,i.Z)((0,_.Z)({},E),{current:1,total:t.total})),[2])}}))}));return function(){return t.apply(this,arguments)}}(),T=function(){var t=(0,a.Z)((function(){var t,n;return(0,o.__generator)(this,(function(a){switch(a.label){case 0:return L.onClear(),j.onClear(),[4,x.f.noticeApi.searchNotices(E.current,s.Ne)];case 1:return t=a.sent(),m.m8.isErrorResponse(t)?m.m8.signChecker(t)?(alert(s.Xt.NEEDLOGIN),m.m8.removeUserData(),e.push("/signin"),[2]):(alert(t.message),[2]):(n=t.noticeList.map((function(e,t){return(0,i.Z)((0,_.Z)({},e),{index:t+1,key:e.seqNum})})),k(n),F((0,i.Z)((0,_.Z)({},E),{current:1,total:t.total})),[2])}}))}));return function(){return t.apply(this,arguments)}}();return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(d.Z,{titleKey:s.tF,fetchDataHandler:P,children:(0,l.jsxs)("div",{className:c().container,children:[(0,l.jsx)(C.iG,{open:n,setOpen:r,data:N,fetchData:T}),(0,l.jsx)(g.Z,{className:c().index_searchBar_global,pageKey:s.tF,keyword:{value:L.value,onChange:L.onChange},range:{value:j.value,onChange:function(e){j.onChange(e)}},searchHandler:q,resetHandler:T,customBtn:(0,l.jsx)(C.Kv,{resetHandler:T})}),(0,l.jsx)(y.Z,{className:c().divider}),(0,l.jsx)("div",{className:c().table_title,children:(0,l.jsx)("span",{children:"\uacf5\uc9c0\uc0ac\ud56d \ub9ac\uc2a4\ud2b8"})}),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v.M,{option:"indexTable",tableInfo:f.Dn,tableDetails:f.Ee,dataSource:S,render:function(e){e.index;var t=e.key,n=e.pm_value,a=e.record;switch(t){case"noticeContentList":return n.map((function(e,t){return(0,l.jsxs)("div",{children:[t+1,". (",e.noticeLanguageCd,") ",e.noticeNm]},t)}));case"noticeContentList2":return a.noticeContentList.map((function(e,t){return(0,l.jsxs)("div",{children:[t+1,". (",e.noticeLanguageCd,") ",e.noticeContent]},t)}));case"CreateDt":return(0,l.jsx)(l.Fragment,{children:(0,m.aB)(n)});case"noticeClass":return(0,l.jsx)(l.Fragment,{children:(0,m.Qc)(n)});default:return"object"!==typeof n||Array.isArray(n)||null===n?(0,l.jsx)("div",{children:n}):(0,l.jsx)("div",{children:JSON.stringify(n)})}},route:"notice",pagination:(0,i.Z)((0,_.Z)({},E),{className:c().tablePagination}),onRow:function(e,t){return{onClick:function(t){r(!0),Z(e)}}}}),(0,l.jsx)(h.Z,{paginationProps:E,onChange:function(e){F((0,i.Z)((0,_.Z)({},E),{current:e}))}})]})]})})})}},7381:function(e){e.exports={button_global:"pagination_button_global__skWb9",render_btn:"pagination_render_btn__qkssB",input_global:"pagination_input_global__setEe",center_text:"pagination_center_text__JaSac",input_password_global:"pagination_input_password_global___3lM3",select_global:"pagination_select_global__B_6ez",select_dropdown_global:"pagination_select_dropdown_global__Eaao0",table_global:"pagination_table_global__Iws1p","ant-table-selection-column":"pagination_ant-table-selection-column__Jj3tO","ant-table-row-expand-icon-cell":"pagination_ant-table-row-expand-icon-cell__y919U",index_table:"pagination_index_table__dG1zt",sidebar_global:"pagination_sidebar_global__OnWGi",sidebar_menu_global:"pagination_sidebar_menu_global__XUKcZ",pagination_wrapper:"pagination_pagination_wrapper__LexlT",pagination_nav:"pagination_pagination_nav__k3qg0",pagination_total:"pagination_pagination_total__nWG9M",checkbox_global:"pagination_checkbox_global__MTx2F",radio_global:"pagination_radio_global__FqphE",radioGroup_global:"pagination_radioGroup_global__xm_2D",index_container_global:"pagination_index_container_global__vl0Zx",index_search_container_global:"pagination_index_search_container_global__N7qTn",index_searchBar_global:"pagination_index_searchBar_global__xYxbb",index_content_global:"pagination_index_content_global__3xQfl",index_content_wrapper_global:"pagination_index_content_wrapper_global__QNXYu",index_table_wrapper_global:"pagination_index_table_wrapper_global__r0F5u",index_table_nav_global:"pagination_index_table_nav_global__FNa4W",index_table_title_global:"pagination_index_table_title_global__RBX5q",index_table_title_item_global:"pagination_index_table_title_item_global__cxnpF",index_table_title_item_sort_global:"pagination_index_table_title_item_sort_global__2EvIO",index_table_title_item_label_global:"pagination_index_table_title_item_label_global__KVx4F",index_table_title_item_sort_icon_global:"pagination_index_table_title_item_sort_icon_global__o4Pof",sort_asc:"pagination_sort_asc__LMHqS",sort_desc:"pagination_sort_desc__TFf09",index_table_data_global:"pagination_index_table_data_global__n2BXw",index_table_item_global:"pagination_index_table_item_global__9rq_B",index_table_item_value_global:"pagination_index_table_item_value_global__zU7Ew",index_table_item_selected_global:"pagination_index_table_item_selected_global__zqxUs",index_table_empty_global:"pagination_index_table_empty_global__gpcJZ",index_table_bottomButton_global:"pagination_index_table_bottomButton_global__E2G3L",index_table_button_new_global:"pagination_index_table_button_new_global___8HBz",index_manageButton_global:"pagination_index_manageButton_global__pP63V",container:"pagination_container__nZvC_",divider:"pagination_divider__TBqwk"}},8012:function(e){e.exports={button_global:"notice_button_global__orqQr",render_btn:"notice_render_btn__Hg8jQ",input_global:"notice_input_global__OcHCS",center_text:"notice_center_text__vJmdr",input_password_global:"notice_input_password_global__LDMOP",select_global:"notice_select_global__LXPZK",select_dropdown_global:"notice_select_dropdown_global__J6V3j",table_global:"notice_table_global__nCaBc","ant-table-selection-column":"notice_ant-table-selection-column__VzraW","ant-table-row-expand-icon-cell":"notice_ant-table-row-expand-icon-cell__y8Tv3",index_table:"notice_index_table__3Z8oW",sidebar_global:"notice_sidebar_global__L3cY9",sidebar_menu_global:"notice_sidebar_menu_global__WfPFz",pagination_wrapper:"notice_pagination_wrapper__GF1H_",pagination_nav:"notice_pagination_nav__h1KbF",pagination_total:"notice_pagination_total__HNNMH",checkbox_global:"notice_checkbox_global__JRVeR",radio_global:"notice_radio_global__sSCuY",radioGroup_global:"notice_radioGroup_global__8cxpP",index_container_global:"notice_index_container_global__g7wZv",index_search_container_global:"notice_index_search_container_global__wl25s",index_searchBar_global:"notice_index_searchBar_global__T8RSr",index_content_global:"notice_index_content_global__Ekrk7",index_content_wrapper_global:"notice_index_content_wrapper_global__imUGP",index_table_wrapper_global:"notice_index_table_wrapper_global__DDb0f",index_table_nav_global:"notice_index_table_nav_global__LAYnO",index_table_title_global:"notice_index_table_title_global__uhPKD",index_table_title_item_global:"notice_index_table_title_item_global__M72zx",index_table_title_item_sort_global:"notice_index_table_title_item_sort_global__sD309",index_table_title_item_label_global:"notice_index_table_title_item_label_global__s6GFF",index_table_title_item_sort_icon_global:"notice_index_table_title_item_sort_icon_global__iLAah",sort_asc:"notice_sort_asc__Pj1Vd",sort_desc:"notice_sort_desc__4IjdH",index_table_data_global:"notice_index_table_data_global__tuwIF",index_table_item_global:"notice_index_table_item_global__zHa1T",index_table_item_value_global:"notice_index_table_item_value_global__LMGaY",index_table_item_selected_global:"notice_index_table_item_selected_global__kx4p_",index_table_empty_global:"notice_index_table_empty_global__UJX6_",index_table_bottomButton_global:"notice_index_table_bottomButton_global__ObBKe",index_table_button_new_global:"notice_index_table_button_new_global__DTVcD",index_manageButton_global:"notice_index_manageButton_global__Fzd__",container:"notice_container__3yE00",divider:"notice_divider__RmcsS",table_title:"notice_table_title__q20Tf",addBtn:"notice_addBtn___QMKV"}}},function(e){e.O(0,[597,635,738,137,288,465,396,326,83,997,720,809,126,289,774,888,179],(function(){return t=2223,e(e.s=t);var t}));var t=e.O();_N_E=t}]);