(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9436],{8721:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/content-preview",function(){return r(5448)}])},1374:function(e,t,r){"use strict";r.d(t,{a:function(){return n.Z}});var n=r(28704)},5448:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return L}});var n=r(24246),s=r(27378),o=r(29418),i=r(62664),u=r(55480),a=r(14916),l=r(1374),c=r(38906),p=r(86677),d=r(79471),f=r(62182),h=r(79136);function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){g(e,t,r[t])}))}return e}function v(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}var b=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=S(e);if(t){var s=S(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return v(this,r)}}var _=function(e){var t=function(t){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(u,t);var r,s,o,i=C(u);function u(){return y(this,u),i.apply(this,arguments)}return r=u,(s=[{key:"componentDidMount",value:function(){p.default.query.questionId&&this.props.doFetchQuestionContent(p.default.query.questionId),p.default.query.courseId&&p.default.query.lessonId&&this.props.doFetchLessonContent(p.default.query.courseId,p.default.query.lessonId)}},{key:"render",value:function(){var t;if(this.props.userRoleType&&this.props.userRoleType===h.xZ.STUDENT)return console.log("user not valid --",this.props.userRoleType),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.gb,{})});if(p.default.query.questionId&&!this.props.questionContent||p.default.query.lessonId&&!this.props.currentCourseDetails||this.props.contentPreviewBundleFetchStatus===d.UK.IN_PROGRESS)return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.gb,{})});if(this.props.contentPreviewBundleFetchStatus===d.UK.FAILED&&this.props.contentPreviewBundleError)return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.jj,{errorCode:this.props.contentPreviewBundleError.errorCode,errorText:this.props.contentPreviewBundleError.errorMessage})});if(this.props.userEnrollmentState!==d.ri.PURCHASED&&p.default.query.lessonId)return this.props.doFetchOrderSummary(this.props.currentCourseId,0,[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.gb,{})});var r=p.default.query.questionId?parseInt(p.default.query.questionId):parseInt(p.default.query.lessonId),s=this.props,o=s.questionContent,i=s.lessonContent,u=s.sharedUserId,l=s.sharedAuthToken,c="",y={},I=[];p.default.query.questionId?(c=o.contentSignedUrl,y=o.slideDetails,I=o.slideIds):c=i.contentSignedUrl;var g,S=(0,d.bm)(p.default.query.questionId?{slides:{slideDetails:y,slideIds:I}}:this.props.currentLessonDetails,p.default.query.questionId?0:this.props.currentCourseId,p.default.query.questionId?0:this.props.currentLessonId,c,p.default.query.questionId?null:null===(t=this.props.currentCourseDetails)||void 0===t?void 0:t.liveContentSignedUrl,null,!1),v={};this.props.currentCourseDetails&&(v=m({},this.props.playerDataOfCurrentLesson,{isMarkedAsCompleted:this.props.currentCourseCompletionStats&&this.props.currentCourseCompletionStats.includes(this.props.currentLessonId),lessonPosition:this.props.currentLessonPosition,lr_token:this.props.sharedAuthToken,studentId:this.props.sharedUserId,userName:this.props.sharedUserName,isWatermarkEnabled:this.props.sharedIsWatermarkEnabled,isUserDataWaterMarkDisabled:this.props.sharedIsUserDataWaterMarkDisabled,wmarkMessage:this.props.sharedWaterMarkMsg,mobile:this.props.sharedUserMobileNum,email:this.props.sharedUserEmail,initialSlideIdx:this.props.initialSlideIndexForPayer||0,initialSlideSeekPos:this.props.initialSlideSeekPosForPayer||0,liveLessonData:this.props.currentLessonDetails?this.props.currentLessonDetails.liveLessonDetails:null,isNotesEnabled:null===(g=this.props.currentCourseDetails)||void 0===g?void 0:g.isNotesEnabled,queryparams:c.split("?")[1]}));var E=p.default.query.questionId?(0,f.qJ)(c,r,d.ri.PURCHASED,"",u,l,{},0):v;return(0,n.jsx)(e,m({},this.props,{lessonData:E,slideArray:S}))}}])&&I(r.prototype,s),o&&I(r,o),u}(s.Component);return(0,c.$)("selectSharedUserId","selectSharedIsUserLoggedIn","selectUserRoleType","selectSharedAuthToken","selectQuestionContent","doFetchQuestionContent","doFetchLessonContent","selectLessonContent","selectInitialSlideIndexForPayer","selectInitialSlideSeekPosForPayer","selectPlayerDataOfCurrentLesson","selectCurrentCourseCompletionStats","selectContentPreviewBundleFetchStatus","selectCurrentLessonDetails","selectUserEnrollmentState","selectCurrentLessonPosition","selectCurrentLessonId","selectCurrentCourseId","selectSharedWaterMarkMsg","selectSharedIsWatermarkEnabled","selectSharedIsUserDataWaterMarkDisabled","selectSharedUserName","selectSharedUserEmail","selectSharedUserMobileNum","selectCurrentCourseDetails","selectCurrentCourseContentSignedUrl","selectContentPreviewBundleError","doFetchOrderSummary",t)}((function(e){var t=e.lessonData,r=e.slideArray;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(u.kC,{sx:{height:window.innerHeight,width:window.innerWidth},children:(0,n.jsx)(u.xu,{height:"100%",width:"100%",children:(0,n.jsx)(a.oM,{ratio:16/9,children:(0,n.jsx)(i.qj,{children:function(e){var s=e.width,o=e.height;return(0,n.jsx)(l.a,{lessonData:t,slideData:r,lessonBookmarkData:{},currentBookMarkIdTs:0,callbacks:{onGoBack:function(){return null},setPLayerSemiFullScreenState:function(){return null},diagnose:function(){return null},markAsComplete:function(){return null},onGoToNextLesson:function(){return null}},dimensions:{width:s,height:o},currentCoursePlayTimeRestrictionDetails:null,isAnswerExplaination:!!p.default.query.questionId,userEnrollmentState:h.ri.PURCHASED})}})})})})})})),P=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(_,{})})},O=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(P,{})})},L=(0,o.Z)((function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(O,{})})}))},29418:function(e,t,r){"use strict";r.d(t,{Z:function(){return O}});var n=r(35230),s=r.n(n),o=r(24246),i=r(86677),u=r(27378),a=r(38906),l=r(79471),c=r(14916),p=r(23998),d=r(53850),f=r(11959),h=r(267),y=r(95045);function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t,r,n,s,o,i){try{var u=e[o](i),a=u.value}catch(l){return void r(l)}u.done?t(a):Promise.resolve(a).then(n,s)}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){m(e,t,r[t])}))}return e}function b(e,t){return!t||"object"!==_(t)&&"function"!==typeof t?I(e):t}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}var _=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=v(e);if(t){var s=v(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return b(this,r)}}function O(e){var t=function(t){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(a,t);var r,n,s,u=P(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=u.call(this,e)).doUserVerifications=function(){if(t.props.userLoginStatus===p.zU.LOGGED_IN_MOBILE_VERIFICATION_PENDING){if("/learn/account/otp"===t.props.router.pathname)return;i.default.push(d.y4.otp,d.XC.otp())}else if(t.props.userLoginStatus===p.zU.LOGGED_IN_EMAIL_VERIFICATION_PENDING&&t.props.emailVerificationType===p.QF.EMAIL_LINK){if("/learn/account/email-verification"===t.props.router.pathname)return;i.default.push(d.y4.emailVerification,d.XC.emailVerification())}else if(t.props.userLoginStatus===p.zU.LOGGED_IN_EMAIL_VERIFICATION_PENDING&&t.props.emailVerificationType===p.QF.EMAIL_OTP){if("/learn/account/otp"===t.props.router.pathname)return;i.default.push(d.y4.otp,d.XC.otp())}else t.props.navigationCurrentScreen===f.i_.SEGMENT||t.props.navigationCurrentScreen===f.i_.SIGNIN||t.props.navigationCurrentScreen===f.i_.PROFILE_BUILDER||!h.Gj.segment_enabled||t.props.userSegmentId||t.props.userLoginStatus!==p.zU.LOGGED_IN_VERIFIED&&t.props.userLoginStatus!==p.zU.NOT_LOGGED_IN?t.props.userLoginStatus===p.zU.LOGGED_IN_VERIFIED&&t.props.isProfileBuilderEnabled&&!t.props.isStudentFilledProfile&&t.props.navigationCurrentScreen!==f.i_.PROFILE_BUILDER&&(void 0!==t.props.inProgressPayment?i.default.push(d.y4.profileFields,d.XC.profileFields()):i.default.replace(d.y4.profileFields,d.XC.profileFields(),{shallow:!0})):t.props.userLoginStatus===p.zU.NOT_LOGGED_IN&&h.Gj.pricing_model===y._n.SUBSCRIPTION_TYPE?i.default.push(d.y4.segment,d.XC.segment()):t.props.userLoginStatus===p.zU.LOGGED_IN_VERIFIED&&i.default.replace(d.y4.segment,d.XC.segment(),{shallow:!0})},t.doUserVerifications=t.doUserVerifications.bind(I(t)),t}return r=a,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.router,r=e.navigationCurrentScreen,n=e.doSendNavChangeEvent,s=e.doSetCurrentAccessingLesson;if(this.doUserVerifications(),n(d.ZP[t.pathname],r,(new Date).getTime(),E({},t.query),!1,!0),console.log(d.ZP[t.pathname]),t.pathname===d.y4.lessonPlayer&&!t.query.courseId){var o=l.$2,i=t.query.sectionId,u=t.query.lessonId;s({courseId:o,sectionId:i,lessonId:u,autoScrollLessonTs:(new Date).getTime()},u)}}},{key:"componentDidUpdate",value:function(e){this.props.navigationCurrentScreen===f.i_.SEGMENT||this.props.navigationCurrentScreen===f.i_.SIGNIN||this.props.navigationCurrentScreen===f.i_.PROFILE_BUILDER||!h.Gj.segment_enabled||this.props.userSegmentId||this.props.userLoginStatus!==p.zU.LOGGED_IN_VERIFIED&&this.props.userLoginStatus!==p.zU.NOT_LOGGED_IN||(this.props.userLoginStatus===p.zU.NOT_LOGGED_IN&&h.Gj.pricing_model===y._n.SUBSCRIPTION_TYPE?i.default.push(d.y4.segment,d.XC.segment()):this.props.userLoginStatus===p.zU.LOGGED_IN_VERIFIED&&i.default.replace(d.y4.segment,d.XC.segment(),{shallow:!0})),void 0!==this.props.inProgressPayment&&this.doUserVerifications(),void 0!==this.props.realUserLoginStatus&&(this.props.inProgressPayment||this.props.navigationCurrentScreen===f.i_.CHECKOUT||this.props.doSetRealUserLoginStatus()),this.props.isAuthTokenExpired&&e.isAuthTokenExpired!==this.props.isAuthTokenExpired&&((0,c.FN)({message:"Your login session is expired."}),this.props.doRestartAuthentication(),i.default.push(d.y4.signin))}},{key:"render",value:function(){return this.props.sharedIsSchoolLocked&&this.props.sharedIsUserLoggedIn?(0,o.jsx)(c.R7,{doSignoutUser:this.props.doSignoutUser}):(0,o.jsx)(e,E({},this.props))}}])&&S(r.prototype,n),s&&S(r,s),a}(u.Component);return t.getInitialProps=function(){var e,t=(e=s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.isServer,e.abrupt("return",{isServer:r});case 2:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,s){var o=e.apply(t,r);function i(e){g(o,n,s,i,u,"next",e)}function u(e){g(o,n,s,i,u,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}(),(0,i.withRouter)((0,a.$)("doSignoutUser","doSendNavChangeEvent","doSetCurrentAccessingLesson","doRestartAuthentication","selectSharedIsUserLoggedIn","selectIsAuthTokenExpired","selectNavigationCurrentScreen","selectSharedIsSchoolLocked","selectSharedIsUserLoggedIn","selectUserLoginStatus","selectIsProfileBuilderEnabled","selectIsStudentFilledProfile","selectEmailVerificationType","selectUserSegmentId","selectInProgressPayment","selectRealUserLoginStatus","doSetRealUserLoginStatus",t))}}},function(e){e.O(0,[5639,1362,7441,357,1699,9917,597,9814,2533,9630,5002,7326,1550,9990,797,9587,5785,8653,9774,2888,179],(function(){return t=8721,e(e.s=t);var t}));var t=e.O();_N_E=t}]);