(()=>{"use strict";var r={352:(r,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ATagErrorList=void 0;const o=t(836),n=t(236),s=t(835);class a extends o.ErrorWarning{constructor(r){super(r)}_getAllATags(){super.getElementByClassName;const r=super.getElementByTagName();this.allTags=r}_scanAllErrors(){for(let r=0;r<this.allTags.length;r++){const e=this.allTags[r];e&&(e.title||e.innerText||(e.tabIndex>=0&&this._pushErrorToErrorList({tag:e,errorType:n.ErrorEnum.Error,errorEnumToTarget:n.ATagErrorEnum.A_TAB_INDEX,errorDescription:(0,s._descriptions)(n.ATagErrorEnum.A_TAB_INDEX)}),e.children.length&&(e.children[0].hasOwnProperty("ariaLabel")||this._pushErrorToErrorList({tag:e,errorType:n.ErrorEnum.Error,errorEnumToTarget:n.ATagErrorEnum.A_TOOL,errorDescription:(0,s._descriptions)(n.ATagErrorEnum.A_TOOL)}))),e.href||this._pushErrorToErrorList({tag:e,errorType:n.ErrorEnum.Warning,errorEnumToTarget:n.ATagErrorEnum.A_HREF,errorDescription:(0,s._descriptions)(n.ATagErrorEnum.A_HREF)}))}}getAllErrorsAndScan(){return this._getAllATags(),this._scanAllErrors(),this.getAllErrors()}}e.ATagErrorList=a},224:(r,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Button_Tag=void 0;const o=t(836),n=t(236),s=t(835);class a extends o.ErrorWarning{constructor(r){super(r)}_getAllATags(){super.getElementByClassName;const r=super.getElementByTagName();this.allTags=r}_scanAllErrors(){for(let r=0;r<this.allTags.length;r++){const e=this.allTags[r];e&&(e.title||e.innerText||e.ariaLabel||this._pushErrorToErrorList({tag:e,errorType:n.ErrorEnum.Error,errorEnumToTarget:n.ButtonTagErrorEnum.BUTTON_TITLE,errorDescription:(0,s._descriptions)(n.ButtonTagErrorEnum.BUTTON_TITLE)}))}}getAllErrorsAndScan(){return this._getAllATags(),this._scanAllErrors(),this.getAllErrors()}}e.Button_Tag=a},200:(r,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Col_Tag=void 0;const o=t(836),n=t(236),s=t(835);class a extends o.ErrorWarning{constructor(r){super(r)}_getAllATags(){super.getElementByClassName;const r=super.getElementByClassName();return this.allTags=r,r}_scanAllErrors(){for(let r=0;r<this.allTags.length;r++){const e=this.allTags[r];e&&(e.childElementCount||this._pushErrorToErrorList({tag:e,errorType:n.ErrorEnum.Error,errorEnumToTarget:n.ColTagErrorEnum.COL_EMPTY,errorDescription:(0,s._descriptions)(n.ColTagErrorEnum.COL_EMPTY)}))}}getAllErrorsAndScan(){return this._getAllATags(),this._scanAllErrors(),this.getAllErrors()}}e.Col_Tag=a},399:(r,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.DataView_MainContainer=void 0;const o=t(836),n=t(236),s=t(835);class a extends o.ErrorWarning{constructor(r){super(r)}_getAllATags(){super.getElementByClassName;const r=super.getElementByClassName();this.allTags=r}_scanAllErrors(){for(let r=0;r<this.allTags.length;r++){const e=this.allTags[r];e&&e.children.length&&(e.children[0].classList.contains("mx-dataview")||e.children[0].classList.contains("mx-scrollcontainer")||this._pushErrorToErrorList({tag:e,errorType:n.ErrorEnum.Warning,errorEnumToTarget:n.DataViewErrorEnum.BASE_DATA_VIEW,errorDescription:(0,s._descriptions)(n.DataViewErrorEnum.BASE_DATA_VIEW)}))}}getAllErrorsAndScan(){return this._getAllATags(),this._scanAllErrors(),this.getAllErrors()}}e.DataView_MainContainer=a},836:(r,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorWarning=void 0;const o=t(236),n=t(835);e.ErrorWarning=class{constructor(r){this.tag=r,this.errorList={},this.countedErrorList=[],this.allTags=[]}build(){this.errorList={},this.countedErrorList=[],this.allTags=[]}getElementByTagName(){return this.build(),document.getElementsByTagName(this.tag)}querySelectorAll(){return this.build(),document.querySelectorAll(this.tag)}getElementByClassName(){return this.build(),document.getElementsByClassName(this.tag)}_toggleClassName(r){for(let e=0;e<r.length;e++){const{tag:t,errorType:n}=r[e];let s=!1;t&&t.classList&&(t.classList.forEach((r=>n==o.ErrorEnum.Error&&"mx-bp-a11y-extension-error"==r||n==o.ErrorEnum.Warning&&"≈"==r?s=!0:void 0)),s&&(n==o.ErrorEnum.Error&&t.classList.remove("mx-bp-a11y-extension-error"),n==o.ErrorEnum.Warning&&t.classList.remove("mx-bp-a11y-extension-warning")),s||(n==o.ErrorEnum.Error&&t.classList.add("mx-bp-a11y-extension-error"),n==o.ErrorEnum.Warning&&t.classList.add("mx-bp-a11y-extension-warning")))}}_stepThroughErrors({list:r,step:e}){if(0===e&&this.removeAllClassNames(),r.length){const t=r[e-1],o=r[e+1],n=r[e];t&&t.tag&&t.tag.classList.remove("mx-bp-a11y-extension-step"),o&&o.tag&&o.tag.classList.remove("mx-bp-a11y-extension-step"),n.tag&&(n.tag.classList.add("mx-bp-a11y-extension-step"),n.tag.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}))}}_pushErrorToErrorList({tag:r,errorType:e,errorEnumToTarget:t,errorDescription:o}){this.countedErrorList.push({tag:r,errorType:e}),this.errorList[t]&&(this.errorList[t].tags.push({tag:r,errorType:e}),this.errorList[t].errorCount++,this.errorList[t].errorDescription=o),this.errorList[t]||(this.errorList[t]={errorEnumToTarget:t,errorDescription:o,errorType:e,errorCount:1,tags:[{tag:r,errorType:e}]})}_rationalizeData({errorList:r,passedEnum:e}){const t=[],o=[];for(let n in e)r[n]&&(o.push(r[n].errorCount),t.push(r[n]));return{errors:t,totalError:0}}seeErrorsOnType(r){if(this.errorList){if(!this.errorList[r])throw new Error("Enum Not in Error List");this.errorList[r].tags.length&&(this.removeAllClassNames(),setTimeout((()=>{this._toggleClassName(this.errorList[r].tags)}),100))}}seeAllErrors(){this.countedErrorList.length&&this._toggleClassName(this.countedErrorList)}async removeAllClassNames(){const r=document.getElementsByClassName("mx-bp-a11y-extension-step");await this.removeClassNameFromArray(r,"mx-bp-a11y-extension-step");const e=document.getElementsByClassName("mx-bp-a11y-extension-error");await this.removeClassNameFromArray(e,"mx-bp-a11y-extension-error");const t=document.getElementsByClassName("mx-bp-a11y-extension-warning");this.removeClassNameFromArray(t,"mx-bp-a11y-extension-warning")}async removeClassNameFromArray(r,e){for(let t=0;t<r.length;t++){const o=r[t];setTimeout((()=>{o.classList.remove(e)}),0)}}logOutAllErrors({errorEnumToTarget:r}){if(this.errorList){if(!this.errorList[r])throw new Error("Enum Not in Error List");this.errorList[r].tags.length&&this.errorList[r].tags.map(((r,e)=>{console.log(`--------------🔥 Error (Hover Over Me)- ${e+1} 👩🏽‍🚒 --------------`),console.log(r.tag)}))}}stepThrough({step:r,errorEnumToTarget:e}){if(this.errorList){if(!this.errorList[e])throw new Error("Enum Not in Error List");this.errorList[e].tags.length&&this._stepThroughErrors({list:this.errorList[e].tags,step:r})}}getAllErrors(){if(this.errorList){const{totalError:r,errors:e}=this._rationalizeData({errorList:this.errorList,passedEnum:(0,n._getCorrespondingEnum)(this.tag)});return{totalError:r,errors:e}}return{totalError:0,errors:[]}}}},802:(r,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.H_Tag=void 0;const o=t(836),n=t(236),s=t(835);class a extends o.ErrorWarning{constructor(r){super(r)}_getAllATags(){const r=super.getElementByTagName();this.allTags=r}_scanAllErrors(){"h1"===this.tag&&this.multipleH1()}multipleH1(){if(this.allTags.length>1)for(let r=0;r<this.allTags.length;r++){const e=this.allTags[r];e&&this._pushErrorToErrorList({tag:e,errorType:n.ErrorEnum.Error,errorEnumToTarget:n.HTagErrorEnum.ONE_H1,errorDescription:(0,s._descriptions)(n.HTagErrorEnum.ONE_H1)})}}getAllErrorsAndScan(){return this._getAllATags(),this._scanAllErrors(),this.getAllErrors()}}e.H_Tag=a},57:(r,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Img_TagErrorList=void 0;const o=t(836),n=t(236),s=t(835);class a extends o.ErrorWarning{constructor(r){super(r)}_getAllATags(){super.getElementByClassName;const r=super.getElementByTagName();this.allTags=r}_scanAllErrors(){for(let r=0;r<this.allTags.length;r++){const e=this.allTags[r];e&&e.alt&&this._pushErrorToErrorList({tag:e,errorType:n.ErrorEnum.Error,errorEnumToTarget:n.ImgTagErrorEnum.ALT_TEXT,errorDescription:(0,s._descriptions)(n.ImgTagErrorEnum.ALT_TEXT)})}}getAllErrorsAndScan(){return this._getAllATags(),this._scanAllErrors(),this.getAllErrors()}}e.Img_TagErrorList=a},42:(r,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Input_Tag=void 0;const o=t(836),n=t(236),s=t(835);class a extends o.ErrorWarning{constructor(r){super(r)}_getAllATags(){const r=super.getElementByTagName();this.allTags=r}_scanAllErrors(){switch(this.tag){case"input":this.mustHaveLabel("Input");break;case"textarea":this.mustHaveLabel("Text area")}}mustHaveLabel(r){var e;for(let r=0;r<this.allTags.length;r++){const t=this.allTags[r];if(t){const r=null===(e=t.labels)||void 0===e?void 0:e.length,o=t.ariaLabel,a=t.type,i=t.hidden;o||r||"hidden"===a||i||this._pushErrorToErrorList({tag:t,errorType:n.ErrorEnum.Error,errorEnumToTarget:n.InputTagErrorEnum.INPUT_LABEL,errorDescription:(0,s._descriptions)(n.InputTagErrorEnum.INPUT_LABEL)})}}}getAllErrorsAndScan(){return this._getAllATags(),this._scanAllErrors(),this.getAllErrors()}}e.Input_Tag=a},470:(r,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Menu_Tag=void 0;const o=t(836),n=t(236),s=t(835);class a extends o.ErrorWarning{constructor(r){super(r)}_getAllATags(){super.getElementByClassName;const r=super.querySelectorAll();this.allTags=r}_scanAllErrors(){if(document.getElementById("skip_link"))return void this._pushErrorToErrorList({errorType:n.ErrorEnum.Success,errorEnumToTarget:n.MenuErrorEnum.USING_SKIP_LINK,errorDescription:(0,s._descriptions)(n.MenuErrorEnum.USING_SKIP_LINK)});let r=[];for(let e=0;e<this.allTags.length;e++){const t=this.allTags[e];r.push(t.childElementCount)}r.reduce(((r,e)=>r+e),0)>14&&this._pushErrorToErrorList({errorType:n.ErrorEnum.Error,errorEnumToTarget:n.MenuErrorEnum.LONG_MENU,errorDescription:(0,s._descriptions)(n.MenuErrorEnum.LONG_MENU)})}getAllErrorsAndScan(){return this._getAllATags(),this._scanAllErrors(),this.getAllErrors()}}e.Menu_Tag=a},523:(r,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Row_Tag=void 0;const o=t(836),n=t(236),s=t(835);class a extends o.ErrorWarning{constructor(r){super(r)}_getAllATags(){super.getElementByClassName;const r=super.getElementByClassName();return this.allTags=r,r}_scanAllErrors(){const r=window.innerHeight;for(let e=0;e<this.allTags.length;e++){const t=this.allTags[e];if(t&&t.children.length>=2)for(let e=0;e<t.children.length;e++)t.children[e].clientHeight>=1.5*r&&this._pushErrorToErrorList({tag:t,errorType:n.ErrorEnum.Warning,errorEnumToTarget:n.ColTagErrorEnum.LONG_COLS,errorDescription:(0,s._descriptions)(n.ColTagErrorEnum.LONG_COLS)})}}getAllErrorsAndScan(){return this._getAllATags(),this._scanAllErrors(),this.getAllErrors()}}e.Row_Tag=a},388:(r,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.CBFilter=void 0,e.CBFilter=class{constructor(){this.documentBody=this.getBodyTag(),this.injectStyleIDs()}getBodyTag(){return document.body}injectStyleIDs(){const r=document.createElement("div");r.innerHTML='<svg height="0">\n      <filter id="protanopiaSVG_INJECTED_FILTER">\n        <feColorMatrix\n          type="matrix"\n          values=".56667 .43333 0      0 0\n              .55833 .44167 0      0 0\n              0      .24167 .75833 0 0\n              0      0      0      1 0" />\n      </filter>\n      \n      <filter id="protanomalySVG_INJECTED_FILTER">\n        <feColorMatrix\n          type="matrix"\n          values=".81667 .18333 0    0 0\n              .33333 .66667 0    0 0\n              0      .125   .875 0 0\n              0      0      0    1 0" />\n      </filter>\n      \n      <filter id="deuteranopiaSVG_INJECTED_FILTER">\n        <feColorMatrix\n          type="matrix"\n          values=".625 .375 0  0 0\n              .7   .3   0  0 0\n              0    .3   .7 0 0\n              0    0    0  1 0" />\n      </filter>\n      \n      <filter id="deuteranomalySVG_INJECTED_FILTER">\n        <feColorMatrix\n          type="matrix"\n          values=".8     .2     0      0 0\n              .25833 .74167 0      0 0\n              0      .14167 .85833 0 0\n              0      0      0      1 0" />\n      </filter>\n      \n      <filter id="tritanopiaSVG_INJECTED_FILTER">\n        <feColorMatrix\n          type="matrix"\n          values=".95 .5     0      0 0\n              0   .43333 .56667 0 0\n              0   .475   .525   0 0\n              0   0      0      1 0" />\n      </filter>\n      \n      <filter id="tritanomalySVG_INJECTED_FILTER">\n        <feColorMatrix\n          type="matrix"\n          values=".96667 .3333  0      0 0\n              0      .73333 .26667 0 0\n              0      .18333 .81667 0 0\n              0      0      0      1 0" />\n      </filter>\n      \n      <filter id="achromatopsiaSVG_INJECTED_FILTER">\n        <feColorMatrix\n          type="matrix"\n          values=".299 .587 .114 0 0\n              .299 .587 .114 0 0\n              .299 .587 .114 0 0\n              0    0    0    1 0" />\n      </filter>\n      \n      <filter id="achromatomalySVG_INJECTED_FILTER">\n        <feColorMatrix\n          type="matrix"\n          values=".618 .32  .62  0 0\n              .163 .775 .62  0 0\n              .163 .320 .516 0 0\n              0    0    0    1 0" />\n      </filter>\n      </svg>\n      ',document.body.appendChild(r)}applyFilter(r){const e=`url(#${r}SVG_INJECTED_FILTER)`;this.documentBody.style.filter=e}clearFilter(){this.documentBody.style.filter=""}}},333:(r,e,t)=>{e.Py=e.se=e.d_=e.hz=e.PI=e.gz=e.WF=e.V0=e.Xp=e.q0=e.GG=void 0;var o=t(399);Object.defineProperty(e,"GG",{enumerable:!0,get:function(){return o.DataView_MainContainer}});var n=t(57);Object.defineProperty(e,"q0",{enumerable:!0,get:function(){return n.Img_TagErrorList}});var s=t(224);Object.defineProperty(e,"Xp",{enumerable:!0,get:function(){return s.Button_Tag}});var a=t(388);Object.defineProperty(e,"V0",{enumerable:!0,get:function(){return a.CBFilter}});var i=t(42);Object.defineProperty(e,"WF",{enumerable:!0,get:function(){return i.Input_Tag}});var l=t(352);Object.defineProperty(e,"gz",{enumerable:!0,get:function(){return l.ATagErrorList}});var u=t(470);Object.defineProperty(e,"PI",{enumerable:!0,get:function(){return u.Menu_Tag}});var E=t(200);Object.defineProperty(e,"hz",{enumerable:!0,get:function(){return E.Col_Tag}});var g=t(802);Object.defineProperty(e,"d_",{enumerable:!0,get:function(){return g.H_Tag}});var c=t(523);Object.defineProperty(e,"se",{enumerable:!0,get:function(){return c.Row_Tag}});var m=t(849);Object.defineProperty(e,"Py",{enumerable:!0,get:function(){return m.injectCBTest}});t(835),t(236)},835:(r,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.cbTests=e._descriptions=e.rationalizeTagInformation=e._getCorrespondingEnum=e.removeDuplicates=e._compareCount=e._compareErrorLength=void 0;const o=t(236);e._compareErrorLength=(r,e)=>{var t,o,n,s;return(null===(t=null==r?void 0:r.errors)||void 0===t?void 0:t.length)<(null===(o=null==e?void 0:e.errors)||void 0===o?void 0:o.length)?1:(null===(n=null==r?void 0:r.errors)||void 0===n?void 0:n.length)>(null===(s=null==e?void 0:e.errors)||void 0===s?void 0:s.length)?-1:0},e._compareCount=(r,e)=>r.count<e.count?1:r.count>e.count?-1:0,e.removeDuplicates=r=>r.filter(((r,e,t)=>e===t.findIndex((e=>e.message===r.message)))),e._getCorrespondingEnum=r=>{switch(r){case"a":return o.ATagErrorEnum;case"row":case"col":return o.ColTagErrorEnum;case"button":return o.ButtonTagErrorEnum;case"img":return o.ImgTagErrorEnum;case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return o.HTagErrorEnum;case"input":case"textarea":return o.InputTagErrorEnum;case'[role="menu"]':return o.MenuErrorEnum;case"mx-placeholder":return o.DataViewErrorEnum}},e.rationalizeTagInformation=r=>{switch(r){case"a":return{mendixName:"Links",showButtons:!0};case"button":return{mendixName:"Buttons",showButtons:!0};case"img":return{mendixName:"Image",showButtons:!0};case"col":return{mendixName:"Layout Grids",showButtons:!0};case"h1":return{mendixName:"Page Title / Text Render Mode h1",showButtons:!0};case"input":return{mendixName:"Text Box",showButtons:!0};case"textarea":return{mendixName:"Text Area",showButtons:!0};case'[role="menu"]':return{mendixName:"Top- & Side- Menu",showButtons:!1};case"mx-placeholder":return{mendixName:"Dataview/Layoutgrid",showButtons:!1};case"row":return{mendixName:"Dataview/Layoutgrid (Row)",showButtons:!0};default:return{mendixName:"⚠️ No Corresponding Tag found",showButtons:!1}}},e._descriptions=r=>{switch(r){case o.ATagErrorEnum.A_HREF:return{mendix:"All A tags must have HREF's",technical:"`<a>` tags are used in Menu items or buttons set to display as links"};case o.ATagErrorEnum.A_TAB_INDEX:return{mendix:"Add Tooltips to Buttons/Links without captions. Usually buttons/links used for icons only",technical:"`<a>` tags are used in Menu items or buttons set to display as links"};case o.ATagErrorEnum.A_TOOL:return{mendix:"A Tags without titles must have Aria Tags on itself or its first child element",technical:"`<a>` tags are used in Menu items or buttons set to display as links"};case o.ButtonTagErrorEnum.BUTTON_TITLE:return{mendix:"If a button has no caption you must add a tooltip. Usually this error usually occurs when buttons/links have icons only",technical:"`<button>` tags are used in Menu items or buttons set to display as links"};case o.ColTagErrorEnum.COL_EMPTY:return{mendix:"Empty Columns should be avoided as Layout helper",technical:"`.col` class names are added to layout grids to help with layout and responsiveness - Usually follows Bootstrap 4"};case o.ColTagErrorEnum.LONG_COLS:return{mendix:"Usage of Very long columns are to be avoided for help with Keyboard interactions",technical:"`.col` class names are added to layout grids to help with layout and responsiveness - Usually follows Bootstrap 4"};case o.DataViewErrorEnum.BASE_DATA_VIEW:return{mendix:"Consider using a data view as the base for you page",technical:"Using a dataview as base for a page is considered pest practice, you can then place layout grids inside of that."};case o.HTagErrorEnum.ONE_H1:return{mendix:"You should only ever have one Page Title or Text set to display as heading 1 on the page",technical:"`<h1>` tags and Page titles are usually set as h1 to show describe what is on this set page. Heading tags are used for semantic html and not font size. Read More [here](https://www.w3.org/WAI/tutorials/page-structure/headings/)"};case o.ImgTagErrorEnum.ALT_TEXT:return{mendix:"An image must have an alternative text, This Alternative text must describe the photo provided",technical:"`<img>` tags are used to display Images in HTML, they must have alt tags for A11y and slow internet connections. Read More [here](https://www.w3.org/WAI/tutorials/images/)"};case o.InputTagErrorEnum.INPUT_LABEL:return{mendix:"Input/Textarea must have a Label. In your textbox/textarea properties select label to true",technical:"`<input>/<textarea>` Input used to submit short text  Read More [here](https://www.w3.org/WAI/tutorials/forms/labels/)"};case o.MenuErrorEnum.LONG_MENU:return{mendix:"Your menu seems very long consider using skip links. There are more than 14 items and subitems. See [here](https://mendixlabs.github.io/app-services-components/#/web-widgets/skip-link-widget)",technical:"`[role=menu]` is used to Identify Side- & Top-bar menu in Mendix for Accessability you should consider using [this](https://mendixlabs.github.io/app-services-components/#/web-widgets/skip-link-widget) widget"};case o.MenuErrorEnum.USING_SKIP_LINK:return{mendix:"🥳 You are using the Skip Link Widget",technical:"Your menu is very long. There are more than 14 items and subitems. See [here](https://mendixlabs.github.io/app-services-components/#/web-widgets/skip-link-widget)"};default:return{mendix:"⚠️ No Corresponding Tag found (DESC)",technical:"⚠️ No Corresponding Tag found"}}},e.cbTests=[{name:"Achromatomaly",type:o.ENUM_CBTestTypes.achromatomaly,group:"Monochromat",desc:"1 good cone, 2 blind/bad | almost no color"},{name:"Achromatopsia",type:o.ENUM_CBTestTypes.achromatopsia,group:"Monochromat",desc:"1 good cone, 2 blind/bad | no color"},{name:"Deuteranomaly",type:o.ENUM_CBTestTypes.deuteranomaly,group:"Anomalous Trichromat",desc:"2 good cones, 1 bad | low green"},{name:"Deuteranopia",type:o.ENUM_CBTestTypes.deuteranopia,group:"Dichromat",desc:"2 good cones, 1 blind | no green"},{name:"Protanomaly",type:o.ENUM_CBTestTypes.protanomaly,group:" Anomalous Trichromat",desc:"2 good cones, 1 bad | low red"},{name:"Protanopia",type:o.ENUM_CBTestTypes.protanopia,group:"Dichromat",desc:"2 good cones, 1 blind | no red"},{name:"Tritanomaly",type:o.ENUM_CBTestTypes.tritanomaly,group:"Anomalous Trichromat",desc:"2 good cones, 1 bad | low blue"},{name:"Tritanopia",type:o.ENUM_CBTestTypes.tritanopia,group:"Dichromat",desc:"2 good cones, 1 blind | no blue"}]},849:(r,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.injectCBTest=void 0,e.injectCBTest=function(){const r=document.createElement("div");r.innerHTML='<svg height="0">\n<filter id="protanopiaSVG_INJECTED_FILTER">\n  <feColorMatrix\n    type="matrix"\n    values=".56667 .43333 0      0 0\n        .55833 .44167 0      0 0\n        0      .24167 .75833 0 0\n        0      0      0      1 0" />\n</filter>\n\n<filter id="protanomalySVG_INJECTED_FILTER">\n  <feColorMatrix\n    type="matrix"\n    values=".81667 .18333 0    0 0\n        .33333 .66667 0    0 0\n        0      .125   .875 0 0\n        0      0      0    1 0" />\n</filter>\n\n<filter id="deuteranopiaSVG_INJECTED_FILTER">\n  <feColorMatrix\n    type="matrix"\n    values=".625 .375 0  0 0\n        .7   .3   0  0 0\n        0    .3   .7 0 0\n        0    0    0  1 0" />\n</filter>\n\n<filter id="deuteranomalySVG_INJECTED_FILTER">\n  <feColorMatrix\n    type="matrix"\n    values=".8     .2     0      0 0\n        .25833 .74167 0      0 0\n        0      .14167 .85833 0 0\n        0      0      0      1 0" />\n</filter>\n\n<filter id="tritanopiaSVG_INJECTED_FILTER">\n  <feColorMatrix\n    type="matrix"\n    values=".95 .5     0      0 0\n        0   .43333 .56667 0 0\n        0   .475   .525   0 0\n        0   0      0      1 0" />\n</filter>\n\n<filter id="tritanomalySVG_INJECTED_FILTER">\n  <feColorMatrix\n    type="matrix"\n    values=".96667 .3333  0      0 0\n        0      .73333 .26667 0 0\n        0      .18333 .81667 0 0\n        0      0      0      1 0" />\n</filter>\n\n<filter id="achromatopsiaSVG_INJECTED_FILTER">\n  <feColorMatrix\n    type="matrix"\n    values=".299 .587 .114 0 0\n        .299 .587 .114 0 0\n        .299 .587 .114 0 0\n        0    0    0    1 0" />\n</filter>\n\n<filter id="achromatomalySVG_INJECTED_FILTER">\n  <feColorMatrix\n    type="matrix"\n    values=".618 .32  .62  0 0\n        .163 .775 .62  0 0\n        .163 .320 .516 0 0\n        0    0    0    1 0" />\n</filter>\n</svg>\n',document.body.appendChild(r)}},236:(r,e)=>{var t,o,n,s,a,i,l;Object.defineProperty(e,"__esModule",{value:!0}),e.ENUM_CBTestTypes=e.EnumStateTypes=e.EnumContentScripMessages=e.MenuErrorEnum=e.ColTagErrorEnum=e.InputTagErrorEnum=e.HTagErrorEnum=e.DataViewErrorEnum=e.ImgTagErrorEnum=e.ButtonTagErrorEnum=e.ATagErrorEnum=e.ErrorEnum=void 0,(l=e.ErrorEnum||(e.ErrorEnum={}))[l.Error=0]="Error",l[l.Warning=1]="Warning",l[l.Success=2]="Success",(i=e.ATagErrorEnum||(e.ATagErrorEnum={})).A_TOOL="A_TOOL",i.A_HREF="A_HREF",i.A_TAB_INDEX="A_TAB_INDEX",(e.ButtonTagErrorEnum||(e.ButtonTagErrorEnum={})).BUTTON_TITLE="BUTTON_TITLE",(e.ImgTagErrorEnum||(e.ImgTagErrorEnum={})).ALT_TEXT="ALT_TEXT",(e.DataViewErrorEnum||(e.DataViewErrorEnum={})).BASE_DATA_VIEW="BASE_DATA_VIEW",(e.HTagErrorEnum||(e.HTagErrorEnum={})).ONE_H1="ONE_H1",(e.InputTagErrorEnum||(e.InputTagErrorEnum={})).INPUT_LABEL="INPUT_LABEL",(a=e.ColTagErrorEnum||(e.ColTagErrorEnum={})).COL_EMPTY="COL_EMPTY",a.LONG_COLS="LONG_COLS",(s=e.MenuErrorEnum||(e.MenuErrorEnum={})).LONG_MENU="LONG_MENU",s.USING_SKIP_LINK="USING_SKIP_LINK",(n=e.EnumContentScripMessages||(e.EnumContentScripMessages={}))[n.GET_ALL_ERRORS=0]="GET_ALL_ERRORS",n[n.STEP_ERROR=1]="STEP_ERROR",n[n.SHOW_ALL_ERRORS=2]="SHOW_ALL_ERRORS",n[n.REMOVE_ALL_ERRORS=3]="REMOVE_ALL_ERRORS",n[n.SHOW_ERROR_IN_CONSOLE=4]="SHOW_ERROR_IN_CONSOLE",n[n.GET_AXE_ERRORS=5]="GET_AXE_ERRORS",n[n.SIMULATE_CB=6]="SIMULATE_CB",(o=e.EnumStateTypes||(e.EnumStateTypes={})).fetchAllError="fetchAllError",o.unMountAll="unMountAll",o.setStepTag="setStepTag",o.increaseStep="increaseStep",o.decreaseStep="decreaseStep",o.cantSeeErrors="cantSeeErrors",(t=e.ENUM_CBTestTypes||(e.ENUM_CBTestTypes={})).achromatomaly="achromatomaly",t.achromatopsia="achromatopsia",t.deuteranomaly="deuteranomaly",t.deuteranopia="deuteranopia",t.protanomaly="protanomaly",t.protanopia="protanopia",t.tritanomaly="tritanomaly",t.tritanopia="tritanopia"}},e={};function t(o){var n=e[o];if(void 0!==n)return n.exports;var s=e[o]={exports:{}};return r[o](s,s.exports,t),s.exports}(()=>{var r=t(333);let e,o,n,s,a,i,l,u,E,g,c,m,T,p;var _,d;!function(r){r[r.Error=0]="Error",r[r.Warning=1]="Warning",r[r.Success=2]="Success"}(e||(e={})),(d=o||(o={})).A_TOOL="A_TOOL",d.A_HREF="A_HREF",d.A_TAB_INDEX="A_TAB_INDEX",(n||(n={})).BUTTON_TITLE="BUTTON_TITLE",(s||(s={})).ALT_TEXT="ALT_TEXT",(a||(a={})).BASE_DATA_VIEW="BASE_DATA_VIEW",(i||(i={})).ONE_H1="ONE_H1",(l||(l={})).INPUT_LABEL="INPUT_LABEL",(u||(u={})).COL_EMPTY="COL_EMPTY",(_=E||(E={})).LONG_MENU="LONG_MENU",_.USING_SKIP_LINK="USING_SKIP_LINK",function(r){r[r.GET_ALL_ERRORS=0]="GET_ALL_ERRORS",r[r.STEP_ERROR=1]="STEP_ERROR",r[r.SHOW_ALL_ERRORS=2]="SHOW_ALL_ERRORS",r[r.REMOVE_ALL_ERRORS=3]="REMOVE_ALL_ERRORS",r[r.SHOW_ERROR_IN_CONSOLE=4]="SHOW_ERROR_IN_CONSOLE",r[r.GET_AXE_ERRORS=5]="GET_AXE_ERRORS",r[r.SIMULATE_CB=6]="SIMULATE_CB",r[r.CLEAR_CB=7]="CLEAR_CB",r[r.GET_MX_WINDOW=8]="GET_MX_WINDOW"}(g||(g={})),function(r){r.fetchAllError="fetchAllError",r.unMountAll="unMountAll",r.setStepTag="setStepTag",r.increaseStep="increaseStep",r.decreaseStep="decreaseStep",r.cantSeeErrors="cantSeeErrors"}(c||(c={})),function(r){r.achromatomaly="achromatomaly",r.achromatopsia="achromatopsia",r.deuteranomaly="deuteranomaly",r.deuteranopia="deuteranopia",r.protanomaly="protanomaly",r.protanopia="protanopia",r.tritanomaly="tritanomaly",r.tritanopia="tritanopia"}(m||(m={})),function(r){r[r.ALL_ISSUES=0]="ALL_ISSUES",r[r.CLEAR_ALL_ISSUES=1]="CLEAR_ALL_ISSUES",r[r.CONSOLE=2]="CONSOLE",r[r.STEP=3]="STEP",r[r.CLOSE_STEP=4]="CLOSE_STEP"}(T||(T={})),function(r){r[r.POPUP=0]="POPUP",r[r.PANEL=1]="PANEL"}(p||(p={}));const h=(r,e)=>r.errors?.length<e.errors?.length?1:r.errors?.length>e.errors?.length?-1:0,A=(r,e)=>r.count<e.count?1:r.count>e.count?-1:0;m.achromatomaly,m.achromatopsia,m.deuteranomaly,m.deuteranopia,m.protanomaly,m.protanopia,m.tritanomaly,m.tritanopia;let y,L=new r.d_("h1"),C=new r.hz("col"),S=new r.gz("a"),f=new r.WF("input"),O=new r.Xp("button"),N=new r.q0("img"),I=new r.WF("textarea"),v=new r.PI('[role="menu"]'),w=new r.se("row"),x=new r.GG("mx-placeholder"),R=new r.V0;!async function(){console.log("FIRE"),y=await async function(r,...e){const t=Object(r),{doc:o=document,timeout:n}=t;"function"!=typeof r&&(r=t.func,e=t.args);try{window.sessionStorage}catch(r){return null}const s=parseInt(""+Math.floor(100*Math.random()+1)+(new Date).getTime());let a=o.createElement("script");a.setAttribute("type","application/javascript");const i=`\n        (\n            async function () {\n                    const response = {\n                        id: ${s}\n                    };\n                    try {\n                        response.result = JSON.stringify(await (${r})(...${JSON.stringify(e||[])})); // run script\n                    } catch(err) {\n                        response.error = JSON.stringify(err);\n                    }\n            \n                    window.postMessage(response, '*');\n            }\n        )();\n    `;let l,u;a.textContent=i,o.documentElement.appendChild(a),a.remove();const E=new Promise(((r,e)=>{l=r,u=e}));if(void 0!==n){const r=setTimeout((()=>{g({data:{id:s,error:"Script timeout"}})}),n);E.finally((()=>null!==r?clearTimeout(r):null))}function g(r){const e=Object(r.data);if(e.id===s)return window.removeEventListener("message",g),void 0!==e.error?u(JSON.parse(e.error)):l(void 0!==e.result?JSON.parse(e.result):void 0)}return window.addEventListener("message",g),E}((()=>mx)),console.log("mxWidow",y)}();const b={A_Class:S,H_Class:L,Row_Class:w,Img_Class:N,Col_Class:C,Menu_Class:v,Input_Class:f,Button_Class:O,TextArea_Class:I,DataView_Class:x};(0,r.Py)(),chrome.runtime.onMessage.addListener((function(e,t,o){if(e.message===g.GET_ALL_ERRORS){L=new r.d_("h1"),C=new r.hz("col"),S=new r.gz("a"),f=new r.WF("input"),O=new r.Xp("button"),N=new r.q0("img"),I=new r.WF("textarea"),v=new r.PI('[role="menu"]'),w=new r.se("row"),x=new r.GG("mx-placeholder"),R=new r.V0;const e=(({allCurrentClasses:r})=>{const{A_Class:e,H_Class:t,Img_Class:o,Col_Class:n,Row_Class:s,Menu_Class:a,Input_Class:i,Button_Class:l,TextArea_Class:u,DataView_Class:E}=r,g=e?.getAllErrorsAndScan(),c=t?.getAllErrorsAndScan(),m=s?.getAllErrorsAndScan(),T=o?.getAllErrorsAndScan(),p=n?.getAllErrorsAndScan(),_=i?.getAllErrorsAndScan(),d=l?.getAllErrorsAndScan(),y=a?.getAllErrorsAndScan(),L=u?.getAllErrorsAndScan(),C=E?.getAllErrorsAndScan();return[{tag:t?.tag,errors:c?.errors,count:c?.totalError},{tag:e?.tag,errors:g?.errors,count:g?.totalError},{tag:s?.tag,errors:m?.errors,count:m?.totalError},{tag:o?.tag,errors:T?.errors,count:T?.totalError},{tag:n?.tag,errors:p?.errors,count:p?.totalError},{tag:i?.tag,errors:_?.errors,count:_?.totalError},{tag:l?.tag,errors:d?.errors,count:d?.totalError},{tag:a?.tag,errors:y?.errors,count:y?.totalError},{tag:u?.tag,errors:L?.errors,count:L?.totalError},{tag:E?.tag,errors:C?.errors,count:C?.totalError}].sort(h).sort(A)})({allCurrentClasses:b});o(e)}if(e.message===g.STEP_ERROR){const{errorToView:r,tag:t,step:o}=e;r&&t&&null!=o&&((r,e,t,o)=>{const{A_Class:n,H_Class:s,Img_Class:a,Row_Class:i,Col_Class:l,Input_Class:u,Button_Class:E,TextArea_Class:g}=o;switch(r){case"a":return n?.stepThrough({errorEnumToTarget:e?.errorEnumToTarget,step:t});case"button":return E?.stepThrough({errorEnumToTarget:e?.errorEnumToTarget,step:t});case"img":return a?.stepThrough({errorEnumToTarget:e?.errorEnumToTarget,step:t});case"col":return l?.stepThrough({errorEnumToTarget:e?.errorEnumToTarget,step:t});case"row":return i?.stepThrough({errorEnumToTarget:e?.errorEnumToTarget,step:t});case"h1":return s?.stepThrough({errorEnumToTarget:e?.errorEnumToTarget,step:t});case"input":return u?.stepThrough({errorEnumToTarget:e?.errorEnumToTarget,step:t});case"textarea":g?.stepThrough({errorEnumToTarget:e?.errorEnumToTarget,step:t})}})(t,r,o,b)}if(e.message===g.REMOVE_ALL_ERRORS&&(S.removeAllClassNames(),S.getAllErrorsAndScan),e.message===g.GET_MX_WINDOW&&o(y),e.message===g.SHOW_ALL_ERRORS){const{errorToView:r,tag:t}=e;r&&t&&(S.removeAllClassNames(),((r,e,t)=>{const{A_Class:o,H_Class:n,Img_Class:s,Row_Class:a,Col_Class:i,Menu_Class:l,Input_Class:u,Button_Class:E,TextArea_Class:g}=t;switch(r){case"a":return o?.seeErrorsOnType(e?.errorEnumToTarget);case"row":return a?.seeErrorsOnType(e?.errorEnumToTarget);case"button":return E?.seeErrorsOnType(e?.errorEnumToTarget);case"img":return s?.seeErrorsOnType(e?.errorEnumToTarget);case"col":return i?.seeErrorsOnType(e?.errorEnumToTarget);case"h1":return n?.seeErrorsOnType(e?.errorEnumToTarget);case"input":return u?.seeErrorsOnType(e?.errorEnumToTarget);case"textarea":return g?.seeErrorsOnType(e?.errorEnumToTarget);case'[role="menu"]':l?.seeErrorsOnType(e?.errorEnumToTarget)}})(t,r,b))}if(e.message===g.SHOW_ERROR_IN_CONSOLE){const{errorToView:r,tag:t}=e;r&&t&&((r,e,t)=>{const{A_Class:o,H_Class:n,Img_Class:s,Row_Class:a,Col_Class:i,Input_Class:l,Button_Class:u,TextArea_Class:E}=t;switch(r){case"a":return o.logOutAllErrors({errorEnumToTarget:e?.errorEnumToTarget});case"row":return a.logOutAllErrors({errorEnumToTarget:e?.errorEnumToTarget});case"button":return u.logOutAllErrors({errorEnumToTarget:e?.errorEnumToTarget});case"img":return s.logOutAllErrors({errorEnumToTarget:e?.errorEnumToTarget});case"col":return i.logOutAllErrors({errorEnumToTarget:e?.errorEnumToTarget});case"h1":return n?.logOutAllErrors({errorEnumToTarget:e?.errorEnumToTarget});case"input":return l?.logOutAllErrors({errorEnumToTarget:e?.errorEnumToTarget});case"textarea":E?.logOutAllErrors({errorEnumToTarget:e?.errorEnumToTarget})}})(t,r,b)}if(e.message===g.SIMULATE_CB){const{cbToSimulate:r}=e;r&&R.applyFilter(r)}e.message===g.CLEAR_CB&&R.clearFilter()}))})()})();