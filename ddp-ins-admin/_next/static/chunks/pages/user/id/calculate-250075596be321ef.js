(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[394],{3009:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/id/calculate",function(){return a(8511)}])},1597:function(e,t,a){"use strict";a.d(t,{F:function(){return p}});var _=a(6042),l=a(9534),n=a(5893),o=a(6738),i=a(9396),r=function(e){return e.option,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(p,(0,i.Z)((0,_.Z)({},e),{value:JSON.stringify(e.value)}))})},c=a(8263),b=a.n(c),p=function(e){var t=e.className,a=e.styleOption,i=(0,l.Z)(e,["className","styleOption"]);return"object"!==typeof e.value||Array.isArray(e.value)||null===e.value?(e.option,(0,n.jsx)(o.Z,(0,_.Z)({className:"".concat(b().input_global," ").concat(a," ").concat(t)},i))):(0,n.jsx)(r,(0,_.Z)({className:"".concat(b().input_global," ").concat(a," ").concat(t)},i))}},4003:function(e,t,a){"use strict";var _=a(6042),l=a(9396),n=a(5893),o=a(1647),i=(a(7294),a(7381)),r=a.n(i);t.Z=function(e){var t=e.paginationProps,a=e.onChange;return(0,n.jsxs)("div",{className:r().pagination_wrapper,children:[(0,n.jsxs)("div",{className:r().pagination_nav,children:[(0,n.jsx)("button",{className:r().pagination_goToLastBtn,onClick:function(){a(1)},children:"<<"}),(0,n.jsx)(o.Z,(0,l.Z)((0,_.Z)({},t),{onChange:function(e){a(e)}})),(0,n.jsx)("button",{className:r().pagination_goToLastBtn,onClick:function(){a(Math.ceil(t.total/t.defaultPageSize))},children:">>"})]}),(0,n.jsxs)("div",{className:r().pagination_total,children:["Total: ",t.total]})]})}},8511:function(e,t,a){"use strict";a.r(t),a.d(t,{ApproveButtonsComponent:function(){return M},default:function(){return A}});var _=a(7568),l=a(6042),n=a(9396),o=a(7582),i=a(5893),r=a(7294),c=a(8999),b=a.n(c),p=a(7083),d=a(6472),g=a(1390),s=a(1163),u=a(4003),x=a(5028),m=a(4184),v=a.n(m);const h=e=>e?"function"===typeof e?e():e:null;var f=a(3603),w=a(3124),y=a(1781),j=a(2419),k=a(4747),P=a(438),N=a(7414),C=a(8796),B=a(7968),O=a(5503);const E=e=>{const{componentCls:t,popoverColor:a,titleMinWidth:_,fontWeightStrong:l,popoverPadding:n,boxShadowSecondary:o,colorTextHeading:i,borderRadiusLG:r,zIndexPopup:c,marginXS:b,colorBgElevated:p,popoverBg:d}=e;return[{[t]:Object.assign(Object.assign({},(0,k.Wf)(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:c,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":p,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-inner`]:{backgroundColor:d,backgroundClip:"padding-box",borderRadius:r,boxShadow:o,padding:n},[`${t}-title`]:{minWidth:_,marginBottom:b,color:i,fontWeight:l},[`${t}-inner-content`]:{color:a}})},(0,N.ZP)(e,{colorBg:"var(--antd-arrow-background-color)"}),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${t}-content`]:{display:"inline-block"}}}]},S=e=>{const{componentCls:t}=e;return{[t]:C.i.map((a=>{const _=e[`${a}6`];return{[`&${t}-${a}`]:{"--antd-arrow-background-color":_,[`${t}-inner`]:{backgroundColor:_},[`${t}-arrow`]:{background:"transparent"}}}}))}},Z=e=>{const{componentCls:t,lineWidth:a,lineType:_,colorSplit:l,paddingSM:n,controlHeight:o,fontSize:i,lineHeight:r,padding:c}=e,b=o-Math.round(i*r);return{[t]:{[`${t}-inner`]:{padding:0},[`${t}-title`]:{margin:0,padding:`${b/2}px ${c}px ${b/2-a}px`,borderBottom:`${a}px ${_} ${l}`},[`${t}-inner-content`]:{padding:`${n}px ${c}px`}}}};var $=(0,B.Z)("Popover",(e=>{const{colorBgElevated:t,colorText:a,wireframe:_}=e,l=(0,O.TS)(e,{popoverPadding:12,popoverBg:t,popoverColor:a});return[E(l),S(l),_&&Z(l),(0,P._y)(l,"zoom-big")]}),(e=>({width:177,minWidth:177,titleMinWidth:177,zIndexPopup:e.zIndexPopupBase+30})),{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]}),q=function(e,t){var a={};for(var _ in e)Object.prototype.hasOwnProperty.call(e,_)&&t.indexOf(_)<0&&(a[_]=e[_]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(_=Object.getOwnPropertySymbols(e);l<_.length;l++)t.indexOf(_[l])<0&&Object.prototype.propertyIsEnumerable.call(e,_[l])&&(a[_[l]]=e[_[l]])}return a};const W=e=>{const{hashId:t,prefixCls:a,className:_,style:l,placement:n="top",title:o,content:i,children:c}=e;return r.createElement("div",{className:v()(t,a,`${a}-pure`,`${a}-placement-${n}`,_),style:l},r.createElement("div",{className:`${a}-arrow`}),r.createElement(j.G,Object.assign({},e,{className:t,prefixCls:a}),c||((e,t,a)=>{if(t||a)return r.createElement(r.Fragment,null,t&&r.createElement("div",{className:`${e}-title`},h(t)),r.createElement("div",{className:`${e}-inner-content`},h(a)))})(a,o,i)))};var D=e=>{const{prefixCls:t}=e,a=q(e,["prefixCls"]),{getPrefixCls:_}=r.useContext(w.E_),l=_("popover",t),[n,o]=$(l);return n(r.createElement(W,Object.assign({},a,{prefixCls:l,hashId:o})))},I=function(e,t){var a={};for(var _ in e)Object.prototype.hasOwnProperty.call(e,_)&&t.indexOf(_)<0&&(a[_]=e[_]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(_=Object.getOwnPropertySymbols(e);l<_.length;l++)t.indexOf(_[l])<0&&Object.prototype.propertyIsEnumerable.call(e,_[l])&&(a[_[l]]=e[_[l]])}return a};const z=e=>{let{title:t,content:a,prefixCls:_}=e;return r.createElement(r.Fragment,null,t&&r.createElement("div",{className:`${_}-title`},h(t)),r.createElement("div",{className:`${_}-inner-content`},h(a)))},T=r.forwardRef(((e,t)=>{const{prefixCls:a,title:_,content:l,overlayClassName:n,placement:o="top",trigger:i="hover",mouseEnterDelay:c=.1,mouseLeaveDelay:b=.1,overlayStyle:p={}}=e,d=I(e,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:g}=r.useContext(w.E_),s=g("popover",a),[u,x]=$(s),m=g(),h=v()(n,x);return u(r.createElement(y.Z,Object.assign({placement:o,trigger:i,mouseEnterDelay:c,mouseLeaveDelay:b,overlayStyle:p},d,{prefixCls:s,overlayClassName:h,ref:t,overlay:_||l?r.createElement(z,{prefixCls:s,title:_,content:l}):null,transitionName:(0,f.m)(m,"zoom-big",d.transitionName),"data-popover-inject":!0})))}));T._InternalPanelDoNotUseOrYouWillBeFired=D;var X=T,F=a(6074),H=a(4812),L=a(6134),G=a(1597),M=function(e){var t=e.approveHandler,a=(0,r.useState)(!1),_=a[0],l=a[1],n=(0,i.jsx)(L.k,{onClick:t,children:"O"}),o=(0,i.jsx)(x.ZP,{theme:{token:{colorBgElevated:"#444444",colorText:"white"}},children:(0,i.jsx)(X,{content:(0,i.jsxs)("div",{className:b().deny_popover,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:"\ubc18\ub824 \uc0ac\uc720\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."}),(0,i.jsx)("p",{children:"\ud574\ub2f9 \uc0ac\uc720\ub294 \ub300\uc0c1\uc5d0\uac8c \uba54\uc77c\ub85c \uc804\uc1a1 \ub429\ub2c8\ub2e4."})]}),(0,i.jsx)("p",{children:(0,i.jsx)(G.F,{placeholder:"\ubc18\ub824 \uc0ac\uc720 \uc785\ub825"})}),(0,i.jsxs)("div",{className:b().popover_button_wrapper,children:[(0,i.jsx)(L.k,{onClick:function(){l(!1)},children:"\ucde8\uc18c"}),(0,i.jsx)(L.k,{children:"\ud655\uc778"})]})]}),open:_,trigger:"click",onOpenChange:function(){l(!_)},title:(0,i.jsx)("div",{style:{textAlign:"center"},children:"\ubc18\ub824 \uc0ac\uc720 \uc785\ub825"}),children:(0,i.jsx)(L.k,{onClick:function(){l(!0)},children:"X"})})});return(0,i.jsxs)("div",{className:b().apporve_wrapper,children:[n,o]})},J=[{title:"\uc21c\uc11c",dataIndex:"index",key:"index"},{title:"\uc815\uc0b0 \uc2e0\uccad\uc77c",dataIndex:"reqDt",key:"reqDt"},{title:"\ucd9c\uae08 \uac00\ub2a5 \uae08\uc561",dataIndex:"possiblePrice",key:"possiblePrice"},{title:"\uc815\uc0b0 \uc2e0\uccad \uae08\uc561",dataIndex:"reqPrice",key:"reqPrice"},{title:"\uc138\uae08 \uacc4\uc0b0\uc11c \ubc88\ud638",dataIndex:"taxbillNum",key:"taxbillNum"},{title:"\uacb0\uacfc",dataIndex:"result",key:"result"},{title:"\uc2b9\uc778 \uc5ec\ubd80",key:"approve",dataIndex:"approve"}],A=function(){(0,s.useRouter)();var e=function(){var e=(0,_.Z)((function(){return(0,o.__generator)(this,(function(e){return alert("\uc815\uc0b0 \uc2b9\uc778 api \uc5f0\ub3d9"),[2]}))}));return function(){return e.apply(this,arguments)}}(),t=[{key:"1",index:1,reqDt:"2024-06-26",possiblePrice:5e4,reqPrice:3e4,taxbillNum:"123-456",result:"\uc2b9\uc778",approve:(0,i.jsx)(M,{approveHandler:e})},{key:"2",index:2,reqDt:"2024-06-26",possiblePrice:15e4,reqPrice:3e4,taxbillNum:"123-456",result:"\ubc18\ub824",approve:(0,i.jsx)(M,{approveHandler:e})},{key:"3",index:3,reqDt:"2024-06-26",possiblePrice:8e4,reqPrice:3e4,taxbillNum:"123-456",result:"\ud655\uc778 \uc911",approve:(0,i.jsx)(M,{approveHandler:e})}],a=(0,r.useState)(t),c=a[0],m=(a[1],(0,r.useState)({current:1,defaultPageSize:d.Ne,total:0,showSizeChanger:!1,simple:!0})),v=m[0],h=m[1],f=function(){var e=(0,_.Z)((function(e,t){return(0,o.__generator)(this,(function(e){return[2]}))}));return function(t,a){return e.apply(this,arguments)}}();return(0,g.bd)((0,_.Z)((function(){return(0,o.__generator)(this,(function(e){return[2]}))})),[]),(0,g.bd)((0,_.Z)((function(){return(0,o.__generator)(this,(function(e){return[2]}))})),[v.current]),(0,r.useEffect)((function(){c&&0!==c.length?h((0,l.Z)({},v)):h((0,n.Z)((0,l.Z)({},v),{current:1,defaultPageSize:v.defaultPageSize,total:0}))}),[c]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(p.Z,{titleKey:d.GQ,fetchDataHandler:f,children:(0,i.jsxs)("div",{className:b().container,children:[(0,i.jsx)(F.Z,{className:b().divider}),(0,i.jsx)("div",{className:b().table_title,children:(0,i.jsx)("span",{children:"\uc815\uc0b0 \ub0b4\uc5ed \ud45c\uc2dc"})}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.ZP,{theme:{components:{Table:{headerBorderRadius:4}}},children:(0,i.jsx)(H.Z,{bordered:!0,columns:J,dataSource:c,onRow:function(e,t){return{onClick:function(e){}}},pagination:!1})}),(0,i.jsx)(u.Z,{paginationProps:v,onChange:function(e){h((0,n.Z)((0,l.Z)({},v),{current:e}))}})]})]})})})}},8263:function(e){e.exports={button_global:"input_button_global__nyMPf",render_btn:"input_render_btn__lqXNw",input_global:"input_input_global__l9Iyr",center_text:"input_center_text__evRxb",input_password_global:"input_input_password_global__aSk_E",select_global:"input_select_global__cLPFw",select_dropdown_global:"input_select_dropdown_global__ea_K3",table_global:"input_table_global__JII1Z","ant-table-selection-column":"input_ant-table-selection-column__8XOpK","ant-table-row-expand-icon-cell":"input_ant-table-row-expand-icon-cell__YY4Pg",index_table:"input_index_table__DKgPt",sidebar_global:"input_sidebar_global__zbOd2",sidebar_menu_global:"input_sidebar_menu_global__eTtog",pagination_wrapper:"input_pagination_wrapper___AnFW",pagination_nav:"input_pagination_nav__d37yl",pagination_total:"input_pagination_total__4yKZ0",checkbox_global:"input_checkbox_global__JZQdI",radio_global:"input_radio_global__8M4LQ",radioGroup_global:"input_radioGroup_global__9s_D5",index_container_global:"input_index_container_global__XmH7_",index_search_container_global:"input_index_search_container_global__fj_2X",index_searchBar_global:"input_index_searchBar_global__Nk6cr",index_content_global:"input_index_content_global__NWH_o",index_content_wrapper_global:"input_index_content_wrapper_global__7RhZP",index_table_wrapper_global:"input_index_table_wrapper_global__RqEKf",index_table_nav_global:"input_index_table_nav_global__37AXP",index_table_title_global:"input_index_table_title_global__q9A6D",index_table_title_item_global:"input_index_table_title_item_global__8bFgl",index_table_title_item_sort_global:"input_index_table_title_item_sort_global__b_ov5",index_table_title_item_label_global:"input_index_table_title_item_label_global__cmETz",index_table_title_item_sort_icon_global:"input_index_table_title_item_sort_icon_global__dxxcV",sort_asc:"input_sort_asc__Jq5zM",sort_desc:"input_sort_desc__GyYYQ",index_table_data_global:"input_index_table_data_global__nvHLE",index_table_item_global:"input_index_table_item_global___asoH",index_table_item_value_global:"input_index_table_item_value_global__JOO54",index_table_item_selected_global:"input_index_table_item_selected_global__qOD1a",index_table_empty_global:"input_index_table_empty_global__nHf8f",index_table_bottomButton_global:"input_index_table_bottomButton_global__nBmCG",index_table_button_new_global:"input_index_table_button_new_global__rV9HA",index_manageButton_global:"input_index_manageButton_global__XX2WI",container:"input_container__BNIMS",divider:"input_divider__B0Q9L"}},7381:function(e){e.exports={button_global:"pagination_button_global__skWb9",render_btn:"pagination_render_btn__qkssB",input_global:"pagination_input_global__setEe",center_text:"pagination_center_text__JaSac",input_password_global:"pagination_input_password_global___3lM3",select_global:"pagination_select_global__B_6ez",select_dropdown_global:"pagination_select_dropdown_global__Eaao0",table_global:"pagination_table_global__Iws1p","ant-table-selection-column":"pagination_ant-table-selection-column__Jj3tO","ant-table-row-expand-icon-cell":"pagination_ant-table-row-expand-icon-cell__y919U",index_table:"pagination_index_table__dG1zt",sidebar_global:"pagination_sidebar_global__OnWGi",sidebar_menu_global:"pagination_sidebar_menu_global__XUKcZ",pagination_wrapper:"pagination_pagination_wrapper__LexlT",pagination_nav:"pagination_pagination_nav__k3qg0",pagination_total:"pagination_pagination_total__nWG9M",checkbox_global:"pagination_checkbox_global__MTx2F",radio_global:"pagination_radio_global__FqphE",radioGroup_global:"pagination_radioGroup_global__xm_2D",index_container_global:"pagination_index_container_global__vl0Zx",index_search_container_global:"pagination_index_search_container_global__N7qTn",index_searchBar_global:"pagination_index_searchBar_global__xYxbb",index_content_global:"pagination_index_content_global__3xQfl",index_content_wrapper_global:"pagination_index_content_wrapper_global__QNXYu",index_table_wrapper_global:"pagination_index_table_wrapper_global__r0F5u",index_table_nav_global:"pagination_index_table_nav_global__FNa4W",index_table_title_global:"pagination_index_table_title_global__RBX5q",index_table_title_item_global:"pagination_index_table_title_item_global__cxnpF",index_table_title_item_sort_global:"pagination_index_table_title_item_sort_global__2EvIO",index_table_title_item_label_global:"pagination_index_table_title_item_label_global__KVx4F",index_table_title_item_sort_icon_global:"pagination_index_table_title_item_sort_icon_global__o4Pof",sort_asc:"pagination_sort_asc__LMHqS",sort_desc:"pagination_sort_desc__TFf09",index_table_data_global:"pagination_index_table_data_global__n2BXw",index_table_item_global:"pagination_index_table_item_global__9rq_B",index_table_item_value_global:"pagination_index_table_item_value_global__zU7Ew",index_table_item_selected_global:"pagination_index_table_item_selected_global__zqxUs",index_table_empty_global:"pagination_index_table_empty_global__gpcJZ",index_table_bottomButton_global:"pagination_index_table_bottomButton_global__E2G3L",index_table_button_new_global:"pagination_index_table_button_new_global___8HBz",index_manageButton_global:"pagination_index_manageButton_global__pP63V",container:"pagination_container__nZvC_",divider:"pagination_divider__TBqwk"}},8999:function(e){e.exports={button_global:"calculate_button_global__n8AUW",render_btn:"calculate_render_btn__qxhSj",input_global:"calculate_input_global__7r_3u",center_text:"calculate_center_text__cpgKl",input_password_global:"calculate_input_password_global__ZWcLP",select_global:"calculate_select_global__QeJvk",select_dropdown_global:"calculate_select_dropdown_global__bTjO2",table_global:"calculate_table_global__z_7JB","ant-table-selection-column":"calculate_ant-table-selection-column__v82iK","ant-table-row-expand-icon-cell":"calculate_ant-table-row-expand-icon-cell__v1mQG",index_table:"calculate_index_table__XuKHP",sidebar_global:"calculate_sidebar_global__teXIT",sidebar_menu_global:"calculate_sidebar_menu_global__NWXHn",pagination_wrapper:"calculate_pagination_wrapper__CifyX",pagination_nav:"calculate_pagination_nav__WevqY",pagination_total:"calculate_pagination_total__XVrSS",checkbox_global:"calculate_checkbox_global__7FlLi",radio_global:"calculate_radio_global__wDJk_",radioGroup_global:"calculate_radioGroup_global__78DV6",index_container_global:"calculate_index_container_global__VXEvV",index_search_container_global:"calculate_index_search_container_global__ws3gl",index_searchBar_global:"calculate_index_searchBar_global__g88T_",index_content_global:"calculate_index_content_global__lxaDJ",index_content_wrapper_global:"calculate_index_content_wrapper_global__CiqYC",index_table_wrapper_global:"calculate_index_table_wrapper_global___TWcJ",index_table_nav_global:"calculate_index_table_nav_global__o8pgL",index_table_title_global:"calculate_index_table_title_global__88SFS",index_table_title_item_global:"calculate_index_table_title_item_global__DzDz0",index_table_title_item_sort_global:"calculate_index_table_title_item_sort_global__ReDjD",index_table_title_item_label_global:"calculate_index_table_title_item_label_global___WD1F",index_table_title_item_sort_icon_global:"calculate_index_table_title_item_sort_icon_global__LK4mI",sort_asc:"calculate_sort_asc__4DHEo",sort_desc:"calculate_sort_desc__wEcrZ",index_table_data_global:"calculate_index_table_data_global__V3vx6",index_table_item_global:"calculate_index_table_item_global__a01dI",index_table_item_value_global:"calculate_index_table_item_value_global__LiSx2",index_table_item_selected_global:"calculate_index_table_item_selected_global__Z_6qO",index_table_empty_global:"calculate_index_table_empty_global__43WT9",index_table_bottomButton_global:"calculate_index_table_bottomButton_global__TeUPU",index_table_button_new_global:"calculate_index_table_button_new_global__ShGki",index_manageButton_global:"calculate_index_manageButton_global__NyLZf",container:"calculate_container__29oGz",divider:"calculate_divider__4uRyC",table_title:"calculate_table_title__syqxX",apporve_wrapper:"calculate_apporve_wrapper__4AsyP",deny_popover:"calculate_deny_popover__SngP0",popover_button_wrapper:"calculate_popover_button_wrapper__r7_sP"}}},function(e){e.O(0,[850,661,635,109,607,83,126,997,774,888,179],(function(){return t=3009,e(e.s=t);var t}));var t=e.O();_N_E=t}]);