(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2331],{27557:function(e){e.exports=function(){"use strict";return function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var s=n(e),i=n(t),a="("===(o=o||"()")[0],u=")"===o[1];return(a?this.isAfter(s,r):!this.isBefore(s,r))&&(u?this.isBefore(i,r):!this.isAfter(i,r))||(a?this.isBefore(s,r):!this.isAfter(s,r))&&(u?this.isAfter(i,r):!this.isBefore(i,r))}}}()},92424:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(24246),o=n(27378),s=n(38906),i=n(21155),a=n(79471),u=n(57842);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.calculateCourseCompletion=u.vy,this.isCourseExpired=u.Sh,this.findTestStatus=a.R,this.getCourseDataToRender=function(e,t){var n=[];return e.forEach((function(e){n.push(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}({},t[e],{id:e}))})),n},this.getEnrolledUnenrolledIds=function(e,t,n){var r=[],o=[];return null===e||void 0===e||e.forEach((function(e){n&&-1!==n.indexOf(e)&&t[e]&&(t[e].enrollmentState===i.T_.PURCHASED||t[e].enrollmentState===i.T_.ENROLLED?r.push(e):o.push(e))})),[r,o]},this.renderTestStatus=function(e,t,n,r){if(e===i.L2.EXPIRED)return r("expired");if(e===i.L2.COMINGSOON)return r("comingSoon");if(e===i.L2.SCHEDULED&&t&&n){var o=new Date>new Date(t)&&new Date<new Date(n),s=new Date>new Date(n);return r(o?"live":s?"expired":"scheduled")}return i.L2.PUBLISHED,r("live")}},p=n(267),d=n(95045),f=n(79136),h=n(88268),m=n(4854),g=n(73502);function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.footerUtils=new g.v,this.checkIfReferralCodeRequired=function(){var e=Number(p.Gj.PAYMENT_TYPE)!==h.O5.IN_APP_PAYMENT,t=!!(h.OS===h.vO.DEVICE_ANDROID)&&e;return!!(p.iN.is_wallet_enabled&&p.iN.is_referral_enabled)&&t},this.constructHomeData=function(e){var n,r,o=p.Gj.pricing_model===d._n.SUBSCRIPTION_TYPE,s=e.productsFetchStatus,a=e.productsList,u=e.productsError,c=e.enrolledCourses,l=e.enrolledCoursesLength,h=e.unEnrolledCourses,g=e.legacyProducts,b=e.allEnrolledIds,C=e.courseCompletionStatsRaw,S=e.pricing,y=e.sharedIsUserLoggedIn,E=e.sharedUserProfilePhoto,I=e.enrolledCourseData,P=e.enrolledMockTestData,O=e.enrolledTestSeriesData,D=e.enrolledBundleData,_=e.enrolledProductsData,w=e.unEnrolledCourseData,N=e.unEnrolledMockTestData,L=e.unEnrolledTestSeriesData,T=e.unEnrolledBundleData,U=e.unEnrolledProductsData,R=e.allProductIds,j=p.Gj.IS_QR_SCANNER_ENABLED&&y,k=g.courseIds,F=g.testSeriesIds,A=g.mockTestIds,G=g.bundleIds,B=(null===e||void 0===e||e.sharedIsUserLoggedIn,void console.log("getNavigationConfigs")),M=null===B||void 0===B?void 0:B.drawerConfig,x=null===M||void 0===M?void 0:M.isDrawerRequired,V=!!(k.length||F.length||A.length||G.length),q={isDrawerEnabled:x,productFetchStatus:s,isSubscriptionMode:o,screenLabel:null===e||void 0===e||null===(n=e.route)||void 0===n||null===(r=n.params)||void 0===r?void 0:r.screenLabel,coursesData:{allProductIds:R,allEnrolledIds:b,enrolledCoursesLength:l,enrolledCourses:c,unEnrolledCourses:h,courses:a,courseCompletionStatsRaw:C,productsError:u,legacyProducts:g,enrolledCourseData:I,enrolledMockTestData:P,enrolledTestSeriesData:O,enrolledBundleData:D,enrolledProductsData:_,unEnrolledCourseData:w,unEnrolledMockTestData:N,unEnrolledTestSeriesData:L,unEnrolledBundleData:T,unEnrolledProductsData:U},pricing:S,userData:{sharedIsUserLoggedIn:y,sharedUserProfilePhoto:E},isQrScannerEnabled:j,shouldShowLegacyProducts:V,isReferralCodeRequired:t.checkIfReferralCodeRequired(),customerConfigData:p.Gj,appDisplayVersion:(0,m.j7)()};return s===f.UK.IN_PROGRESS&&(q.productFetchStatus=i.iF.IN_PROGRESS),s===f.UK.SUCCESS&&(q.productFetchStatus=i.iF.SUCCESS),s===f.UK.FAILED&&(q.productFetchStatus=i.iF.FAILED),q.footerData=t.footerUtils.constructFooterData(),q.navbarData=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}({},e.data),q}},C=function(){},S=function(){},y=function(){},E=function(){},I=function(){},P=function(e){console.log(e.courseSeo)},O=function(){},D=function(){},_=n(53850),w=n(45671);function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return!t||"object"!==R(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var R=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=L(e);if(t){var o=L(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return T(this,n)}}var k=i.lW.COURSE,F=i.lW.BUNDLE,A=i.lW.SUBSCRIPTION_BUNDLE,G=i.lW.SUBSCRIPTION_TIER_BUNDLE,B=i.lW.TEST_SERIES,M=i.lW.TEST;function x(e){var t=function(t){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(u,t);var n,o,s,a=j(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=a.call(this,e)).isSubscriptionMode=p.Gj.pricing_model===d._n.SUBSCRIPTION_TYPE,t.constructData=function(){return t.homeUtils.constructHomeData(t.props)},t.reFetchProducts=function(){t.props.doFetchProducts()},t.onHandleMenu=function(){var e,n;null===(e=t.props)||void 0===e||null===(n=e.navigation)||void 0===n||n.toggleDrawer()},t.navigateToCourse=function(e,n){var r,o,s=t.props.t,a=null===(o=null===(r=t.props)||void 0===r?void 0:r.productsList[n])||void 0===o?void 0:o.enrollmentState,u={backName:"",navigationId:(new Date).getTime(),courseId:0,bundleId:0};switch(e){case k:if(u.courseId=n,u.backName=s("course"),a===i.T_.PURCHASED||a===i.T_.ENROLLED||t.isSubscriptionMode)return;return P(u);case M:return u.courseId=n,u.backName=s("mockTest"),P(u);case B:return u.courseId=n,u.backName=s("series"),P(u);case F:case A:case G:return u.bundleId=n,u.backName=s("bundle"),P(u)}},t.getProductLink=function(e,n,r){var o,s,a,u=null===(a=null===(o=t.props)||void 0===o||null===(s=o.products)||void 0===s?void 0:s.courses[e])||void 0===a?void 0:a.enrollmentState,c=t.isSubscriptionMode||u===i.T_.PURCHASED,l=c?_.y4.courseDashboard:_.y4.courseSales,p=c?_.XC.courseDashboard({productSeo:n}):_.XC.courseSales({productSeo:n}),d={};return d.courseType=r,r===i.lW.BUNDLE?d.bundleId=e:d.courseId=e,{pathname:l,query:d,asPath:p}},t.callbacks={navigateBack:C,navigateToSignIn:S,navigateToQRCodeComponent:y,navigateToSettings:E,navigateToInvite:I,onReFetchProducts:t.reFetchProducts,onClearCache:t.props.doClearCache,onCoursePress:t.navigateToCourse,navigateToSubscriptions:O,navigateToLegacyProducts:D,getProductLink:t.getProductLink,navbarCallbacks:t.props.callbacks,onHandleMenu:t.onHandleMenu},t.helpers=new l,t.homeUtils=new b,t}return n=u,(o=[{key:"shouldComponentUpdate",value:function(){return!0}},{key:"render",value:function(){var t=this.constructData();return(0,r.jsx)(e,{data:t,callbacks:this.callbacks,helpers:this.helpers,isScreenFocused:this.props.isScreenFocused})}}])&&N(n.prototype,o),s&&N(n,s),u}(o.Component);return(0,w.Z)("common")((0,s.$)("selectAllProductIds","selectAllEnrolledIds","selectProductsFetchStatus","selectProductsList","selectSharedIsUserLoggedIn","selectSharedUserProfilePhoto","selectSharedUserId","selectEnrolledCoursesLength","selectPricing","doFetchProducts","selectProductsError","selectLegacyProducts","selectEnrolledCourses","selectUnEnrolledCourses","selectEnrolledCourseData","selectEnrolledMockTestData","selectEnrolledTestSeriesData","selectEnrolledBundleData","selectEnrolledProductsData","selectUnEnrolledCourseData","selectUnEnrolledMockTestData","selectUnEnrolledTestSeriesData","selectUnEnrolledBundleData","selectCourseCompletionStatsRaw","doClearCache",t))}},26483:function(e,t,n){"use strict";n.d(t,{Z:function(){return D}});var r=n(35230),o=n.n(r),s=n(24246),i=n(27378),a=n(38906),u=n(86677),c=n(14916),l=n(53850),p=n(23998),d=n(11959),f=n(267),h=n(95045);function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t,n,r,o,s,i){try{var a=e[s](i),u=a.value}catch(c){return void n(c)}a.done?t(u):Promise.resolve(u).then(r,o)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){b(e,t,n[t])}))}return e}function y(e,t){return!t||"object"!==I(t)&&"function"!==typeof t?m(e):t}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var I=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=C(e);if(t){var o=C(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}var O=function(e){return new Promise((function(t){var n=e.subscribe((function(){var r=e.getState();if(e.selectIsSsrResolved(r))return n(),t(!0)}))}))};function D(e){var t=function(t){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(a,t);var n,r,o,i=P(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).doUserVerifications=function(){if(t.props.userLoginStatus===p.zU.LOGGED_IN_MOBILE_VERIFICATION_PENDING){if("/learn/account/otp"===t.props.router.pathname)return;u.default.push(l.y4.otp,l.XC.otp())}else if(t.props.userLoginStatus===p.zU.LOGGED_IN_EMAIL_VERIFICATION_PENDING&&t.props.emailVerificationType===p.QF.EMAIL_LINK){if("/learn/account/email-verification"===t.props.router.pathname)return;u.default.push(l.y4.emailVerification,l.XC.emailVerification())}else if(t.props.userLoginStatus===p.zU.LOGGED_IN_EMAIL_VERIFICATION_PENDING&&t.props.emailVerificationType===p.QF.EMAIL_OTP){if("/learn/account/otp"===t.props.router.pathname)return;u.default.push(l.y4.otp,l.XC.otp())}else t.props.navigationCurrentScreen===d.i_.SEGMENT||t.props.navigationCurrentScreen===d.i_.SIGNIN||t.props.navigationCurrentScreen===d.i_.PROFILE_BUILDER||!f.Gj.segment_enabled||t.props.userSegmentId||t.props.userLoginStatus!==p.zU.LOGGED_IN_VERIFIED&&t.props.userLoginStatus!==p.zU.NOT_LOGGED_IN?t.props.userLoginStatus===p.zU.LOGGED_IN_VERIFIED&&t.props.isProfileBuilderEnabled&&!t.props.isStudentFilledProfile&&t.props.navigationCurrentScreen!==d.i_.PROFILE_BUILDER&&(void 0!==t.props.inProgressPayment?u.default.push(l.y4.profileFields,l.XC.profileFields()):u.default.replace(l.y4.profileFields,l.XC.profileFields(),{shallow:!0})):t.props.userLoginStatus===p.zU.NOT_LOGGED_IN&&f.Gj.pricing_model===h._n.SUBSCRIPTION_TYPE?u.default.push(l.y4.segment,l.XC.segment()):t.props.userLoginStatus===p.zU.LOGGED_IN_VERIFIED&&u.default.replace(l.y4.segment,l.XC.segment(),{shallow:!0})},t.doUserVerifications=t.doUserVerifications.bind(m(t)),t}return n=a,(r=[{key:"componentDidMount",value:function(){this.doUserVerifications();var e=this.props,t=e.router,n=e.navigationCurrentScreen;(0,e.doSendNavChangeEvent)(l.ZP[t.pathname],n,(new Date).getTime(),S({},t.query))}},{key:"componentDidUpdate",value:function(e){this.props.navigationCurrentScreen===d.i_.SEGMENT||this.props.navigationCurrentScreen===d.i_.SIGNIN||this.props.navigationCurrentScreen===d.i_.PROFILE_BUILDER||!f.Gj.segment_enabled||this.props.userSegmentId||this.props.userLoginStatus!==p.zU.LOGGED_IN_VERIFIED&&this.props.userLoginStatus!==p.zU.NOT_LOGGED_IN||(this.props.userLoginStatus===p.zU.NOT_LOGGED_IN&&f.Gj.pricing_model===h._n.SUBSCRIPTION_TYPE?u.default.push(l.y4.segment,l.XC.segment()):this.props.userLoginStatus===p.zU.LOGGED_IN_VERIFIED&&u.default.replace(l.y4.segment,l.XC.segment(),{shallow:!0})),void 0!==this.props.inProgressPayment&&this.doUserVerifications(),void 0!==this.props.realUserLoginStatus&&(this.props.inProgressPayment||this.props.navigationCurrentScreen===d.i_.CHECKOUT||this.props.doSetRealUserLoginStatus()),this.props.isAuthTokenExpired&&e.isAuthTokenExpired!==this.props.isAuthTokenExpired&&((0,c.FN)({message:"Your login session is expired."}),this.props.doRestartAuthentication(),u.default.push(l.y4.signin))}},{key:"render",value:function(){return this.props.sharedIsSchoolLocked&&this.props.sharedIsUserLoggedIn?(0,s.jsx)(c.R7,{doSignoutUser:this.props.doSignoutUser}):(0,s.jsx)(e,S({},this.props))}}])&&v(n.prototype,r),o&&v(n,o),a}(i.Component);return t.getInitialProps=function(){var e,t=(e=o().mark((function e(t){var n,r,s,i,a,u,c,p;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.store,r=t.query,s=t.isServer,i=t.pathname,a=t.asPath,u=n.selectNavigationCurrentScreen(n.getState()),c=n.getState().navigationData.currentPathName||"/learn",p=n.getState().navigationData.asCurrentPath||"/learn",!n.selectSharedAuthToken(n.getState())){e.next=6;break}return e.abrupt("return",{isServer:!1});case 6:if(n.doSendNavChangeEvent(l.ZP[i],u,(new Date).getTime(),S({},r,{prevPathName:c,currentPathName:i,asCurrentPath:a,asPrevPath:p}),s,!0),s){e.next=9;break}return e.abrupt("return",{isServer:!1});case 9:return e.next=11,O(n);case 11:if(!e.sent){e.next=14;break}return e.abrupt("return",{isServer:!0,prevPathName:c,asPrevPath:p});case 14:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var s=e.apply(t,n);function i(e){g(s,r,o,i,a,"next",e)}function a(e){g(s,r,o,i,a,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}(),(0,u.withRouter)((0,a.$)("doSignoutUser","doSendNavChangeEvent","selectNavigationCurrentScreen","selectSharedIsUserLoggedIn","doRestartAuthentication","selectIsAuthTokenExpired","selectSharedIsSchoolLocked","selectSharedIsUserLoggedIn","selectUserLoginStatus","selectIsProfileBuilderEnabled","selectIsStudentFilledProfile","selectEmailVerificationType","selectUserSegmentId","selectInProgressPayment","selectRealUserLoginStatus","doSetRealUserLoginStatus",t))}},38398:function(e,t,n){"use strict";n.d(t,{pK:function(){return r.pK},T_:function(){return r.T_},iF:function(){return r.iF},b3:function(){return r.b3},E_:function(){return r.E_},MF:function(){return r.MF},hC:function(){return r.hC},J5:function(){return r.J5},xZ:function(){return r.xZ},eq:function(){return r.eq}});var r=n(3612)},71358:function(e,t,n){"use strict";n.d(t,{Oq:function(){return r.Oq},c2:function(){return r.c2},A:function(){return r.A},BE:function(){return r.BE},pc:function(){return r.pc},yh:function(){return r.yh},j3:function(){return r.j3},My:function(){return r.My}});var r=n(23638)},51965:function(e,t,n){"use strict";var r=n(27378);function o(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const c={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0};class l extends r.Component{constructor(e){let t;super(e),this.reCalculateColumnCount=this.reCalculateColumnCount.bind(this),this.reCalculateColumnCountDebounce=this.reCalculateColumnCountDebounce.bind(this),t=this.props.breakpointCols&&this.props.breakpointCols.default?this.props.breakpointCols.default:parseInt(this.props.breakpointCols)||2,this.state={columnCount:t}}componentDidMount(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}componentDidUpdate(){this.reCalculateColumnCount()}componentWillUnmount(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}reCalculateColumnCountDebounce(){window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((()=>{this.reCalculateColumnCount()}))):this.reCalculateColumnCount()}reCalculateColumnCount(){const e=window&&window.innerWidth||1/0;let t=this.props.breakpointCols;"object"!==typeof t&&(t={default:parseInt(t)||2});let n=1/0,r=t.default||2;for(let o in t){const s=parseInt(o);s>0&&e<=s&&s<n&&(n=s,r=t[o])}r=Math.max(1,parseInt(r)||1),this.state.columnCount!==r&&this.setState({columnCount:r})}itemsInColumns(){const e=this.state.columnCount,t=new Array(e),n=r.Children.toArray(this.props.children);for(let r=0;r<n.length;r++){const o=r%e;t[o]||(t[o]=[]),t[o].push(n[r])}return t}renderColumns(){const{column:e,columnAttrs:t={},columnClassName:n}=this.props,o=this.itemsInColumns(),i=100/o.length+"%";let u=n;u&&"string"!==typeof u&&(this.logDeprecated('The property "columnClassName" requires a string'),"undefined"===typeof u&&(u="my-masonry-grid_column"));const c=a(a(a({},e),t),{},{style:a(a({},t.style),{},{width:i}),className:u});return o.map(((e,t)=>r.createElement("div",s({},c,{key:t}),e)))}logDeprecated(e){console.error("[Masonry]",e)}render(){const e=this.props,{children:t,breakpointCols:n,columnClassName:i,columnAttrs:a,column:u,className:c}=e,l=o(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]);let p=c;return"string"!==typeof c&&(this.logDeprecated('The property "className" requires a string'),"undefined"===typeof c&&(p="my-masonry-grid")),r.createElement("div",s({},l,{className:p}),this.renderColumns())}}l.defaultProps=c,t.Z=l}}]);