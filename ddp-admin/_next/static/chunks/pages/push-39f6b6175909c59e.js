(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[423],{4031:function(e,t,_){(window.__NEXT_P=window.__NEXT_P||[]).push(["/push",function(){return _(2507)}])},8233:function(e,t,_){"use strict";var a=_(1438),n=_(7582),i=_(4074),o=function e(){(0,a.Z)(this,e)};(0,n.__decorate)([(0,i.C)(),(0,n.__metadata)("design:type",Number)],o.prototype,"seqNum",void 0),(0,n.__decorate)([(0,i.C)(),(0,n.__metadata)("design:type",String)],o.prototype,"CreateDt",void 0),(0,n.__decorate)([(0,i.C)(),(0,n.__metadata)("design:type",String)],o.prototype,"UpdateDt",void 0),(0,n.__decorate)([(0,i.C)(),(0,n.__metadata)("design:type",Number)],o.prototype,"noticeType",void 0),(0,n.__decorate)([(0,i.C)(),(0,n.__metadata)("design:type",Number)],o.prototype,"noticeClass",void 0),(0,n.__decorate)([(0,i.C)(),(0,n.__metadata)("design:type",Number)],o.prototype,"noticeSt",void 0),(0,n.__decorate)([(0,i.C)(),(0,n.__metadata)("design:type",String)],o.prototype,"noticeName",void 0),(0,n.__decorate)([(0,i.C)(),(0,n.__metadata)("design:type",Array)],o.prototype,"noticeContentList",void 0),(0,n.__decorate)([(0,i.C)(),(0,n.__metadata)("design:type",String)],o.prototype,"noticeStartDt",void 0),(0,n.__decorate)([(0,i.C)(),(0,n.__metadata)("design:type",String)],o.prototype,"noticeEndDt",void 0),(0,n.__decorate)([(0,i.C)(),(0,n.__metadata)("design:type",String)],o.prototype,"managerLoginId",void 0),(0,n.__decorate)([(0,i.C)(),(0,n.__metadata)("design:type",String)],o.prototype,"noticeLanguageCd",void 0),(0,n.__decorate)([(0,i.C)(),(0,n.__metadata)("design:type",Number)],o.prototype,"serverIndex",void 0);var l=function e(){(0,a.Z)(this,e)};(0,n.__decorate)([(0,i.C)(),(0,n.__metadata)("design:type",Array)],l.prototype,"noticeList",void 0),(0,n.__decorate)([(0,i.C)(),(0,n.__metadata)("design:type",Number)],l.prototype,"total",void 0),(0,n.__decorate)([(0,i.C)(),(0,n.__metadata)("design:type",Number)],l.prototype,"page",void 0),(0,n.__decorate)([(0,i.C)(),(0,n.__metadata)("design:type",Number)],l.prototype,"last_page",void 0)},4003:function(e,t,_){"use strict";var a=_(6042),n=_(9396),i=_(5893),o=_(1647),l=(_(7294),_(7381)),r=_.n(l);t.Z=function(e){var t=e.paginationProps,_=e.onChange;return(0,i.jsxs)("div",{className:r().pagination_wrapper,children:[(0,i.jsxs)("div",{className:r().pagination_nav,children:[(0,i.jsx)("button",{className:r().pagination_goToLastBtn,onClick:function(){_(1)},children:"<<"}),(0,i.jsx)(o.Z,(0,n.Z)((0,a.Z)({},t),{onChange:function(e){_(e)}})),(0,i.jsx)("button",{className:r().pagination_goToLastBtn,onClick:function(){_(Math.ceil(t.total/t.defaultPageSize))},children:">>"})]}),(0,i.jsxs)("div",{className:r().pagination_total,children:["Total: ",t.total]})]})}},6825:function(e,t,_){"use strict";_.d(t,{uV:function(){return a},oO:function(){return n}});_(8233);var a={keys:["index","seqNum","serverIndex","noticeNm","noticeContent","noticeStartDt","managerLoginId"]},n={index:{label:"Sequence",sorter:!0,align:"center",width:120},seqNum:{label:"Uuid(Puid)",sorter:!0,align:"center",width:120},serverIndex:{label:"Server",align:"center",width:120},noticeNm:{label:"\uc81c\ubaa9",sorter:!0,align:"center"},noticeContent:{label:"\ub0b4\uc6a9",sorter:!0,align:"center"},noticeStartDt:{label:"\uc2dc\uc791 \ub0a0\uc9dc",sorter:!0,align:"center",width:250},managerLoginId:{label:"\ub4f1\ub85d\uc790",sorter:!0,align:"center",width:200}}},2507:function(e,t,_){"use strict";_.r(t);var a=_(7568),n=_(6042),i=_(9396),o=_(7582),l=_(5893),r=_(9941),s=_.n(r),d=_(7083),g=_(4803),b=_(1568),c=_(1390),p=_(8357),u=_(4003),x=_(1163),h=_(7294),m=_(6825),v=_(1745),f=_(8625),y=_(7289),C=_(6074);t.default=function(){var e=(0,x.useRouter)(),t=(0,h.useState)(!1),_=t[0],r=t[1],w=(0,h.useState)(null),N=w[0],Z=w[1],B=(0,c.Mm)({value:""}),S=(0,c.DB)({value:"notice_name"}),j=(0,h.useState)([]),k=j[0],E=j[1],L=(0,h.useState)({current:1,defaultPageSize:g.Ne,total:0,showSizeChanger:!1,simple:!0}),I=L[0],q=L[1],D=function(){var t=(0,a.Z)((function(t,_,a,l){var r,s;return(0,o.__generator)(this,(function(o){switch(o.label){case 0:return[4,v.f.pushApi.searchPush(t,_,a,l)];case 1:return r=o.sent(),f.m8.isErrorResponse(r)?(f.m8.signChecker(r)&&(alert(g.Xt.NEEDLOGIN),f.m8.removeUserData(),e.push("/signin")),alert(r.message),[2,null]):(s=r.noticeList.map((function(e,_){return(0,i.Z)((0,n.Z)({},e),{index:_+1+(t-1)*g.Ne,key:e.seqNum,serverIndex:e.serverIndex})})),E(s),q((function(e){return(0,i.Z)((0,n.Z)({},e),{total:r.total,current:r.page})})),[2,s])}}))}));return function(e,_,a,n){return t.apply(this,arguments)}}();(0,c.bd)((0,a.Z)((function(){var e;return(0,o.__generator)(this,(function(t){switch(t.label){case 0:return[4,D(1,g.Ne,S.value,B.value)];case 1:return(e=t.sent())&&E(e),[2]}}))})),[]),(0,c.bd)((0,a.Z)((function(){var e;return(0,o.__generator)(this,(function(t){switch(t.label){case 0:return[4,D(I.current,g.Ne,S.value,B.value)];case 1:return(e=t.sent())&&E(e),[2]}}))})),[I.current]),(0,h.useEffect)((function(){k&&0!==k.length?q((0,n.Z)({},I)):q((0,i.Z)((0,n.Z)({},I),{current:1,defaultPageSize:I.defaultPageSize,total:0}))}),[k]);var P=function(){var t=(0,a.Z)((function(){var t,_;return(0,o.__generator)(this,(function(a){switch(a.label){case 0:return[4,v.f.pushApi.searchPush(I.current,g.Ne,S.value,B.value)];case 1:return t=a.sent(),f.m8.isErrorResponse(t)?f.m8.signChecker(t)?(alert(g.Xt.NEEDLOGIN),f.m8.removeUserData(),e.push("/signin"),[2]):(alert(t.message),[2]):(_=t.noticeList.map((function(e,t){return(0,i.Z)((0,n.Z)({},e),{index:t+1,key:e.seqNum})})),E(_),q((0,i.Z)((0,n.Z)({},I),{current:1,total:t.total})),[2])}}))}));return function(){return t.apply(this,arguments)}}(),G=function(){var t=(0,a.Z)((function(){var t,_;return(0,o.__generator)(this,(function(a){switch(a.label){case 0:return B.onClear(),S.onClear(),[4,v.f.pushApi.searchPush(I.current,g.Ne)];case 1:return t=a.sent(),f.m8.isErrorResponse(t)?f.m8.signChecker(t)?(alert(g.Xt.NEEDLOGIN),f.m8.removeUserData(),e.push("/signin"),[2]):(alert(t.message),[2]):(_=t.noticeList.map((function(e,t){return(0,i.Z)((0,n.Z)({},e),{index:t+1,key:e.seqNum})})),E(_),q((0,i.Z)((0,n.Z)({},I),{current:1,total:t.total})),[2])}}))}));return function(){return t.apply(this,arguments)}}();return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(d.Z,{titleKey:g.lb,fetchDataHandler:D,children:(0,l.jsxs)("div",{className:s().container,children:[(0,l.jsx)(y.j0,{open:_,setOpen:r,data:N,fetchData:G}),(0,l.jsx)(b.Z,{className:s().index_searchBar_global,pageKey:g.lb,keyword:{value:B.value,onChange:B.onChange},range:{value:S.value,onChange:function(e){S.onChange(e)}},searchHandler:P,resetHandler:G,customBtn:(0,l.jsx)(y.U1,{resetHandler:G})}),(0,l.jsx)(C.Z,{className:s().divider}),(0,l.jsx)("div",{className:s().table_title,children:(0,l.jsx)("span",{children:"\ud478\uc2dc \ub9ac\uc2a4\ud2b8"})}),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p.M,{option:"indexTable",tableInfo:m.uV,tableDetails:m.oO,dataSource:k,render:function(e){e.index;var t=e.key,_=e.pm_value,a=e.record;switch(t){case"noticeNm":return null===a||void 0===a?void 0:a.noticeContentList.map((function(e,t){return(0,l.jsxs)("div",{children:[t+1,". (",e.noticeLanguageCd,") ",e.noticeNm]},t)}));case"noticeContent":return null===a||void 0===a?void 0:a.noticeContentList.map((function(e,t){return(0,l.jsxs)("div",{children:[t+1,". (",e.noticeLanguageCd,") ",e.noticeContent]},t)}));case"noticeStartDt":return(0,l.jsx)(l.Fragment,{children:(0,f.aB)(_)});default:return"object"!==typeof _||Array.isArray(_)||null===_?(0,l.jsx)("div",{children:_}):(0,l.jsx)("div",{children:JSON.stringify(_)})}},route:"push",pagination:(0,i.Z)((0,n.Z)({},I),{className:s().tablePagination}),onRow:function(e,t){return{onClick:function(t){r(!0),Z(e)}}}}),(0,l.jsx)(u.Z,{paginationProps:I,onChange:function(e){q((0,i.Z)((0,n.Z)({},I),{current:e}))}})]})]})})})}},7381:function(e){e.exports={button_global:"pagination_button_global__skWb9",render_btn:"pagination_render_btn__qkssB",input_global:"pagination_input_global__setEe",center_text:"pagination_center_text__JaSac",input_password_global:"pagination_input_password_global___3lM3",select_global:"pagination_select_global__B_6ez",select_dropdown_global:"pagination_select_dropdown_global__Eaao0",table_global:"pagination_table_global__Iws1p","ant-table-selection-column":"pagination_ant-table-selection-column__Jj3tO","ant-table-row-expand-icon-cell":"pagination_ant-table-row-expand-icon-cell__y919U",index_table:"pagination_index_table__dG1zt",sidebar_global:"pagination_sidebar_global__OnWGi",sidebar_menu_global:"pagination_sidebar_menu_global__XUKcZ",pagination_wrapper:"pagination_pagination_wrapper__LexlT",pagination_nav:"pagination_pagination_nav__k3qg0",pagination_total:"pagination_pagination_total__nWG9M",checkbox_global:"pagination_checkbox_global__MTx2F",radio_global:"pagination_radio_global__FqphE",radioGroup_global:"pagination_radioGroup_global__xm_2D",index_container_global:"pagination_index_container_global__vl0Zx",index_search_container_global:"pagination_index_search_container_global__N7qTn",index_searchBar_global:"pagination_index_searchBar_global__xYxbb",index_content_global:"pagination_index_content_global__3xQfl",index_content_wrapper_global:"pagination_index_content_wrapper_global__QNXYu",index_table_wrapper_global:"pagination_index_table_wrapper_global__r0F5u",index_table_nav_global:"pagination_index_table_nav_global__FNa4W",index_table_title_global:"pagination_index_table_title_global__RBX5q",index_table_title_item_global:"pagination_index_table_title_item_global__cxnpF",index_table_title_item_sort_global:"pagination_index_table_title_item_sort_global__2EvIO",index_table_title_item_label_global:"pagination_index_table_title_item_label_global__KVx4F",index_table_title_item_sort_icon_global:"pagination_index_table_title_item_sort_icon_global__o4Pof",sort_asc:"pagination_sort_asc__LMHqS",sort_desc:"pagination_sort_desc__TFf09",index_table_data_global:"pagination_index_table_data_global__n2BXw",index_table_item_global:"pagination_index_table_item_global__9rq_B",index_table_item_value_global:"pagination_index_table_item_value_global__zU7Ew",index_table_item_selected_global:"pagination_index_table_item_selected_global__zqxUs",index_table_empty_global:"pagination_index_table_empty_global__gpcJZ",index_table_bottomButton_global:"pagination_index_table_bottomButton_global__E2G3L",index_table_button_new_global:"pagination_index_table_button_new_global___8HBz",index_manageButton_global:"pagination_index_manageButton_global__pP63V",container:"pagination_container__nZvC_",divider:"pagination_divider__TBqwk"}},9941:function(e){e.exports={button_global:"push_button_global__BryRn",render_btn:"push_render_btn__0j69A",input_global:"push_input_global__O6Erc",center_text:"push_center_text__Ityz5",input_password_global:"push_input_password_global__J7Gk1",select_global:"push_select_global__22z0v",select_dropdown_global:"push_select_dropdown_global__tuB9m",table_global:"push_table_global__OyBL0","ant-table-selection-column":"push_ant-table-selection-column__NcV5I","ant-table-row-expand-icon-cell":"push_ant-table-row-expand-icon-cell__lCsjM",index_table:"push_index_table__XI9qf",sidebar_global:"push_sidebar_global__ihqZP",sidebar_menu_global:"push_sidebar_menu_global__GUt6r",pagination_wrapper:"push_pagination_wrapper___jSH6",pagination_nav:"push_pagination_nav__K3dgk",pagination_total:"push_pagination_total__obQ3Z",checkbox_global:"push_checkbox_global__YSlGA",radio_global:"push_radio_global__Y61JE",radioGroup_global:"push_radioGroup_global__bmb6P",index_container_global:"push_index_container_global__lCOYt",index_search_container_global:"push_index_search_container_global__9mU5Y",index_searchBar_global:"push_index_searchBar_global__qzMtB",index_content_global:"push_index_content_global__FgCD9",index_content_wrapper_global:"push_index_content_wrapper_global__VEMm1",index_table_wrapper_global:"push_index_table_wrapper_global__YHGL_",index_table_nav_global:"push_index_table_nav_global__CQpRd",index_table_title_global:"push_index_table_title_global__Wwb1j",index_table_title_item_global:"push_index_table_title_item_global__5Xtfa",index_table_title_item_sort_global:"push_index_table_title_item_sort_global__xK8HJ",index_table_title_item_label_global:"push_index_table_title_item_label_global__7CCEK",index_table_title_item_sort_icon_global:"push_index_table_title_item_sort_icon_global__QkKbt",sort_asc:"push_sort_asc__q87xY",sort_desc:"push_sort_desc__1Sdf6",index_table_data_global:"push_index_table_data_global__IanUI",index_table_item_global:"push_index_table_item_global__o0MVi",index_table_item_value_global:"push_index_table_item_value_global___wC_R",index_table_item_selected_global:"push_index_table_item_selected_global__Aukse",index_table_empty_global:"push_index_table_empty_global__4LkB5",index_table_bottomButton_global:"push_index_table_bottomButton_global___niBI",index_table_button_new_global:"push_index_table_button_new_global__G3FCz",index_manageButton_global:"push_index_manageButton_global__9S9fY",container:"push_container__Lp8ZW",divider:"push_divider__7Fg4R",table_title:"push_table_title__iJkr5",addBtn:"push_addBtn__IO2vz"}}},function(e){e.O(0,[597,635,738,137,288,465,396,326,83,997,720,809,126,289,774,888,179],(function(){return t=4031,e(e.s=t);var t}));var t=e.O();_N_E=t}]);