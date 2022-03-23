"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{53942:function(e,t,r){r.d(t,{Z:function(){return N}});var o=r(35230),u=r.n(o),p=r(24246),i=r(27378),s=r(38906),n=r(21155),a=r(95045),c=r(88268),l=r(48395);function S(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var T=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,o;return t=e,r=[{key:"constructData",value:function(e,t,r){var o={isFromSupport:!1,isPostPayment:!1,displaySubTypes:!1,supportTypes:null,submitTicketStatus:this.getSubmitTicketUIStatus(e,r),isTicketFormLoading:!1,isTicketFormFailed:!1,supportErrorMessage:null===e||void 0===e?void 0:e.supportErrorMessage,subSupportTypes:null,selectSupportIdx:r.currentSelectedSupportTypeIdx,selectedSubSupportIdx:r.currentSelectedSupportSubTypeIdx,srcDetails:null===e||void 0===e?void 0:e.srcDetails},u=this.getSupportTypes(e,r,t);return o.displaySubTypes=u.displaySubTypes,o.supportTypes=u.supportTypes,o.subSupportTypes=u.subSupportTypes,t===l.R.FROM_POST_PAYMENT&&(o.isPostPayment=!0),t===l.R.FROM_SUPPORT&&(o.isFromSupport=!0),e.supportState===n.yj.FILLING_NEW_TICKET&&e.supportApiStatus===n.iF.IN_PROGRESS&&(o.isTicketFormLoading=!0),e.supportState===n.yj.FILLING_NEW_TICKET&&e.supportApiStatus===n.iF.FAILED&&(o.isTicketFormFailed=!0),o}},{key:"getSubmitTicketUIStatus",value:function(e,t){var r=n.Nw.NONE;return t.validationErrorMsg?r=n.Nw.VALIDATION_ERROR:e.supportState===n.yj.SUBMITTING_NEW_TICKET&&e.supportApiStatus===n.iF.FAILED?r=n.Nw.NEW_TICKET_SUBMISSION_FAILED:e.troubleShootState===n.BX.GETTING_NATIVE_LOGS?e.nativeLogsResult===n.SA.INPROGRESS&&(r=n.Nw.TROUBLE_SHOOT_LOG_INPROGRESS):e.troubleShootState===n.BX.UPLOADING_REPORT&&(e.uploadReportResult===n.SA.INPROGRESS?r=n.Nw.UPLOAD_REPORT_INPROGRESS:e.uploadReportResult===n.SA.FAILED?r=n.Nw.UPLOAD_REPORT_FAILED:e.supportState===n.yj.SUBMITTING_NEW_TICKET&&e.supportApiStatus===n.iF.SUCCESS&&(r=n.Nw.NEW_TICKET_SUBMISSION_SUCCESS)),r}},{key:"getSupportTypes",value:function(e,t,r){if(!e.supportTypes||e.supportTypes.length<=0)return{displaySubTypes:!1,supportTypes:[],subSupportTypes:[]};var o=this.getSrcDetails(e,r);if(o.supportType)for(var u=0;u<e.supportTypes.length;u++)if(e.supportTypes[u].supportType===o.supportType){t.currentSelectedSupportType=o.supportType,t.currentSelectedSupportTypeIdx=u;break}var p=!1;return t.currentSelectedSupportType!==n.kx.SUPPORT_TYPES_INVALID&&e.supportTypes[t.currentSelectedSupportTypeIdx].subTypes.length>1&&(p=!0),p?{subSupportTypes:e.supportTypes[t.currentSelectedSupportTypeIdx].subTypes,supportTypes:[],displaySubTypes:p}:{displaySubTypes:p,supportTypes:e.supportTypes,subSupportTypes:[]}}},{key:"getSrcDetails",value:function(e,t){var r,o,u,p,i,s,a={supportType:n.kx.SUPPORT_TYPES_INVALID,title:(null===e||void 0===e||null===(r=e.orderSummaryData)||void 0===r||null===(o=r.courseData)||void 0===o?void 0:o.courseTitle)||""};return t===l.R.FROM_CHECKOUT&&(null===e||void 0===e?void 0:e.orderSummaryData)&&(a.supportType=n.kx.SUPPORT_TYPE_PAYMENT,a.courseId=(null===e||void 0===e?void 0:e.currentBundleId)||(null===e||void 0===e?void 0:e.currentCourseId),a.transactionId=null===e||void 0===e||null===(u=e.orderSummaryData)||void 0===u?void 0:u.transactionId),t===l.R.FROM_POST_PAYMENT&&(null===e||void 0===e?void 0:e.orderSummaryData)&&(a.supportType=n.kx.SUPPORT_TYPE_PAYMENT,a.transactionId=null===e||void 0===e||null===(p=e.paymentVerifyData)||void 0===p?void 0:p.receiptNumber,a.courseId=null===e||void 0===e||null===(i=e.orderSummaryData)||void 0===i||null===(s=i.courseData)||void 0===s?void 0:s.courseId),l.R.FROM_LESSON_PLAYER,a}},{key:"getTicketData",value:function(e,t,r,o){var u,p,i,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,n={email:null===e||void 0===e?void 0:e.sharedUserEmail,userName:null===e||void 0===e?void 0:e.sharedUserName,userId:null===e||void 0===e?void 0:e.sharedUserId,mobileNum:null===e||void 0===e?void 0:e.sharedUserMobileNum,srcDetails:s||this.getSrcDetails(e,t),issueDescription:o,issueTitle:null===(u=null===e||void 0===e?void 0:e.supportTypes[null===r||void 0===r?void 0:r.currentSelectedSupportTypeIdx])||void 0===u?void 0:u.supportName,categoryId:null===(i=null===(p=null===e||void 0===e?void 0:e.supportTypes[null===r||void 0===r?void 0:r.currentSelectedSupportTypeIdx])||void 0===p?void 0:p.subTypes[null===r||void 0===r?void 0:r.currentSelectedSupportSubTypeIdx])||void 0===i?void 0:i.id};return n}}],r&&S(t.prototype,r),o&&S(t,o),e}(),d=r(86677),y=r(53850);function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t,r,o,u,p,i){try{var s=e[p](i),n=s.value}catch(a){return void r(a)}s.done?t(n):Promise.resolve(n).then(o,u)}function E(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}function b(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?v(e):t}function _(e,t){return _=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_(e,t)}var h=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=I(e);if(t){var u=I(this).constructor;r=Reflect.construct(o,arguments,u)}else r=o.apply(this,arguments);return b(this,r)}}function N(e,t){var r=function(r){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(S,r);var o,i,s,l=m(S);function S(e){var r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,S),(r=l.call(this,e)).onRaiseNewTicket=function(){r.props.doFetchSupportTypes()},r.updateSuppportTicketSubType=function(){var e;if(null===(e=r.props.srcDetails)||void 0===e?void 0:e.supportType){var t=r.props.supportTypes.findIndex((function(e,t){var o;return e.supportType===(null===(o=r.props.srcDetails)||void 0===o?void 0:o.supportType)}));r.onSelectSupportType(t)}},r.getTicketData=function(e,o){return r.raiseTicketUtils.getTicketData(r.props,o||t,r.state,e,r.props.srcDetails)},r.onTicketSubmitted=function(e,t,o,u,p,i,s){if(void 0===r.state.currentSelectedSupportSubTypeIdx)return r.setState({validationErrorMsg:u("selectIssueType")}),void i({message:u("selectIssueType"),validationType:n.Bf.SUB_SUPPORT});if(!t||(null===t||void 0===t?void 0:t.trim().length)<=0)return r.setState({validationErrorMsg:u("issueDescriptionEmpty")}),void i({message:u("issueDescriptionEmpty"),validationType:n.Bf.DESCRIPTION});if(!e)return i({message:u("acceptTermAlert")}),void r.setState({validationErrorMsg:u("acceptTermAlert"),validationType:n.Bf.AGREEMENT_CHECK});var l=c.OS!==a.vO.DEVICE_WEB;if(r.state.currentSelectedSupportType===n.kx.SUPPORT_TYPE_PLAYER&&l)p(),o(),r.getTicketData(t);else{var S=r.getTicketData(t,s);r.props.doSubmitNewTicket(S,!1)}r.setState({validationErrorMsg:null})},r.onSelectSupportSubType=function(e){r.setState({currentSelectedSupportSubTypeIdx:e})},r.onSelectSupportType=function(e){var t,o,u,p=-1;(null===(t=r.props.supportTypes[e])||void 0===t||null===(o=t.subTypes)||void 0===o?void 0:o.length)<=1&&(p=0),r.setState({currentSelectedSupportTypeIdx:e,currentSelectedSupportSubTypeIdx:p,currentSelectedSupportType:null===(u=r.props.supportTypes[e])||void 0===u?void 0:u.supportType})};var o=v(r);return r.onSubmitTicket=function(){var e,t=(e=u().mark((function e(t,r,p,i,s){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,u){o.resolveSubmitNewTicket=e,o.rejectSubmitNewTicket=u,o.onTicketSubmitted(t,r,p,i,e,u,s)}));case 2:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(o,u){var p=e.apply(t,r);function i(e){f(p,o,u,i,s,"next",e)}function s(e){f(p,o,u,i,s,"throw",e)}i(void 0)}))});return function(e,o,u,p,i){return t.apply(v(r),arguments)}}(),r.switchToDefaultState=function(){r.setState({currentSelectedSupportType:n.kx.SUPPORT_TYPES_INVALID,currentSelectedSupportTypeIdx:-1,currentSelectedSupportSubTypeIdx:-1,validationErrorMsg:null})},r.goBack=function(){d.default.back()},r.goToStore=function(){d.default.push(y.y4.store,y.XC.store())},r.goToSupport=function(){d.default.push(y.y4.supportList,y.XC.supportList())},r.state={currentSelectedSupportType:n.kx.SUPPORT_TYPES_INVALID,currentSelectedSupportTypeIdx:-1,currentSelectedSupportSubTypeIdx:-1,validationErrorMsg:null},r.raiseTicketUtils=new T,r.resolveSubmitNewTicket=null,r.rejectSubmitNewTicket=null,r}return o=S,(i=[{key:"componentDidUpdate",value:function(){if(this.props.supportState===n.yj.FILLING_NEW_TICKET&&this.props.supportApiStatus===n.iF.SUCCESS&&-1===this.state.currentSelectedSupportTypeIdx&&this.updateSuppportTicketSubType(),this.props.supportState===n.yj.SUBMITTING_NEW_TICKET&&this.props.supportApiStatus===n.iF.SUCCESS){var e=this;setTimeout((function(){e.resolveSubmitNewTicket&&(e.resolveSubmitNewTicket(),e.resolveSubmitNewTicket=null)}),1)}this.props.supportState===n.yj.SUBMITTING_NEW_TICKET&&this.props.supportApiStatus===n.iF.FAILED&&this.rejectSubmitNewTicket&&(this.rejectSubmitNewTicket({message:this.props.supportErrorMessage}),this.rejectSubmitNewTicket=null)}},{key:"render",value:function(){var r,o,u={onRaiseTicket:this.onRaiseNewTicket,onSubmitTicket:this.onSubmitTicket,onSelectSupportSubType:this.onSelectSupportSubType,onSelectSupportType:this.onSelectSupportType,cleanUpAdapterState:this.switchToDefaultState,goBack:this.goBack,goToStore:this.goToStore,goToSupport:this.goToSupport};return(0,p.jsx)(e,{raiseTicketData:this.raiseTicketUtils.constructData(this.props,t,this.state),raiseTicketCallbacks:u,raiseTicketData2:null===(r=this.props)||void 0===r?void 0:r.raiseTicketData,raiseTicketCallbacks2:null===(o=this.props)||void 0===o?void 0:o.raiseTicketCallbacks})}}])&&E(o.prototype,i),s&&E(o,s),S}(i.Component);return(0,s.$)("doFetchSupportTypes","selectSupportState","selectSupportApiStatus","selectSupportErrorMessage","selectSupportTypes","selectTroubleShootState","selectNativeLogsResult","selectUploadReportResult","selectSharedUserName","selectSharedUserId","selectSharedUserEmail","selectSharedUserMobileNum","selectOrderSummaryData","selectCurrentCourseId","selectCurrentBundleId","selectPaymentVerifyData","doFetchSupportTypes","doSubmitNewTicket",r)}},48395:function(e,t,r){var o;r.d(t,{R:function(){return o}}),function(e){e.FROM_SUPPORT="FROM_SUPPORT",e.FROM_POST_PAYMENT="FROM_POST_PAYMENT",e.FROM_CHECKOUT="FROM_CHECKOUT",e.FROM_LESSON_PLAYER="FROM_LESSON_PLAYER"}(o||(o={}))}}]);