(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7151],{47850:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/account/profile-builder",function(){return r(49373)}])},49373:function(e,t,r){"use strict";r.r(t);var n=r(24246),o=(r(27378),r(64469)),i=r(29418);t.default=(0,i.Z)((function(e){e.isServer;return(0,n.jsx)(o.Z,{})}))},29418:function(e,t,r){"use strict";r.d(t,{Z:function(){return P}});var n=r(35230),o=r.n(n),i=r(24246),s=r(86677),u=r(27378),a=r(38906),p=r(79471),c=r(14916),l=r(23998),f=r(53850),d=r(11959),h=r(267),g=r(95045);function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t,r,n,o,i,s){try{var u=e[i](s),a=u.value}catch(p){return void r(p)}u.done?t(a):Promise.resolve(a).then(n,o)}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){S(e,t,r[t])}))}return e}function m(e,t){return!t||"object"!==O(t)&&"function"!==typeof t?I(e):t}function L(e,t){return L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},L(e,t)}var O=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=y(e);if(t){var o=y(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return m(this,r)}}function P(e){var t=function(t){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(a,t);var r,n,o,u=N(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=u.call(this,e)).doUserVerifications=function(){if(t.props.userLoginStatus===l.zU.LOGGED_IN_MOBILE_VERIFICATION_PENDING){if("/learn/account/otp"===t.props.router.pathname)return;s.default.push(f.y4.otp,f.XC.otp())}else if(t.props.userLoginStatus===l.zU.LOGGED_IN_EMAIL_VERIFICATION_PENDING&&t.props.emailVerificationType===l.QF.EMAIL_LINK){if("/learn/account/email-verification"===t.props.router.pathname)return;s.default.push(f.y4.emailVerification,f.XC.emailVerification())}else if(t.props.userLoginStatus===l.zU.LOGGED_IN_EMAIL_VERIFICATION_PENDING&&t.props.emailVerificationType===l.QF.EMAIL_OTP){if("/learn/account/otp"===t.props.router.pathname)return;s.default.push(f.y4.otp,f.XC.otp())}else t.props.navigationCurrentScreen===d.i_.SEGMENT||t.props.navigationCurrentScreen===d.i_.SIGNIN||t.props.navigationCurrentScreen===d.i_.PROFILE_BUILDER||!h.Gj.segment_enabled||t.props.userSegmentId||t.props.userLoginStatus!==l.zU.LOGGED_IN_VERIFIED&&t.props.userLoginStatus!==l.zU.NOT_LOGGED_IN?t.props.userLoginStatus===l.zU.LOGGED_IN_VERIFIED&&t.props.isProfileBuilderEnabled&&!t.props.isStudentFilledProfile&&t.props.navigationCurrentScreen!==d.i_.PROFILE_BUILDER&&(void 0!==t.props.inProgressPayment?s.default.push(f.y4.profileFields,f.XC.profileFields()):s.default.replace(f.y4.profileFields,f.XC.profileFields(),{shallow:!0})):t.props.userLoginStatus===l.zU.NOT_LOGGED_IN&&h.Gj.pricing_model===g._n.SUBSCRIPTION_TYPE?s.default.push(f.y4.segment,f.XC.segment()):t.props.userLoginStatus===l.zU.LOGGED_IN_VERIFIED&&s.default.replace(f.y4.segment,f.XC.segment(),{shallow:!0})},t.doUserVerifications=t.doUserVerifications.bind(I(t)),t}return r=a,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.router,r=e.navigationCurrentScreen,n=e.doSendNavChangeEvent,o=e.doSetCurrentAccessingLesson;if(this.doUserVerifications(),n(f.ZP[t.pathname],r,(new Date).getTime(),v({},t.query),!1,!0),console.log(f.ZP[t.pathname]),t.pathname===f.y4.lessonPlayer&&!t.query.courseId){var i=p.$2,s=t.query.sectionId,u=t.query.lessonId;o({courseId:i,sectionId:s,lessonId:u,autoScrollLessonTs:(new Date).getTime()},u)}}},{key:"componentDidUpdate",value:function(e){this.props.navigationCurrentScreen===d.i_.SEGMENT||this.props.navigationCurrentScreen===d.i_.SIGNIN||this.props.navigationCurrentScreen===d.i_.PROFILE_BUILDER||!h.Gj.segment_enabled||this.props.userSegmentId||this.props.userLoginStatus!==l.zU.LOGGED_IN_VERIFIED&&this.props.userLoginStatus!==l.zU.NOT_LOGGED_IN||(this.props.userLoginStatus===l.zU.NOT_LOGGED_IN&&h.Gj.pricing_model===g._n.SUBSCRIPTION_TYPE?s.default.push(f.y4.segment,f.XC.segment()):this.props.userLoginStatus===l.zU.LOGGED_IN_VERIFIED&&s.default.replace(f.y4.segment,f.XC.segment(),{shallow:!0})),void 0!==this.props.inProgressPayment&&this.doUserVerifications(),void 0!==this.props.realUserLoginStatus&&(this.props.inProgressPayment||this.props.navigationCurrentScreen===d.i_.CHECKOUT||this.props.doSetRealUserLoginStatus()),this.props.isAuthTokenExpired&&e.isAuthTokenExpired!==this.props.isAuthTokenExpired&&((0,c.FN)({message:"Your login session is expired."}),this.props.doRestartAuthentication(),s.default.push(f.y4.signin))}},{key:"render",value:function(){return this.props.sharedIsSchoolLocked&&this.props.sharedIsUserLoggedIn?(0,i.jsx)(c.R7,{doSignoutUser:this.props.doSignoutUser}):(0,i.jsx)(e,v({},this.props))}}])&&E(r.prototype,n),o&&E(r,o),a}(u.Component);return t.getInitialProps=function(){var e,t=(e=o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.isServer,e.abrupt("return",{isServer:r});case 2:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function s(e){_(i,n,o,s,u,"next",e)}function u(e){_(i,n,o,s,u,"throw",e)}s(void 0)}))});return function(e){return t.apply(this,arguments)}}(),(0,s.withRouter)((0,a.$)("doSignoutUser","doSendNavChangeEvent","doSetCurrentAccessingLesson","doRestartAuthentication","selectSharedIsUserLoggedIn","selectIsAuthTokenExpired","selectNavigationCurrentScreen","selectSharedIsSchoolLocked","selectSharedIsUserLoggedIn","selectUserLoginStatus","selectIsProfileBuilderEnabled","selectIsStudentFilledProfile","selectEmailVerificationType","selectUserSegmentId","selectInProgressPayment","selectRealUserLoginStatus","doSetRealUserLoginStatus",t))}}},function(e){e.O(0,[4469,9774,2888,179],(function(){return t=47850,e(e.s=t);var t}));var t=e.O();_N_E=t}]);