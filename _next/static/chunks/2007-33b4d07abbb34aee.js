"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2007],{2007:function(e,t,r){r.d(t,{a2:function(){return E},PQ:function(){return N},nk:function(){return oe},uK:function(){return G},ex:function(){return K},xp:function(){return se},aV:function(){return le},Hs:function(){return ae}});var i=r(24246),n=r(27378),o=r(38906),s=r(267),a=r(23998),l=r(12073),u=r(77505);var c=r(88268);function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?p(e):t}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=f(e);if(t){var n=f(this).constructor;r=Reflect.construct(i,arguments,n)}else r=i.apply(this,arguments);return h(this,r)}}function m(e){var t=function(t){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(h,t);var r,n,o,f=g(h);function h(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),(t=f.call(this,e)).backToPreviousPage=function(){(0,l.n)(t.props.sharedIsUserLoggedIn,t.props.postSigninRoute)},t.onEmailOrUserNameSubmit=function(e,r,i,n){if(s.Gj.authentication_types===a.$B.USER_NAME){var o,l,u=t.validateUserName(e,n);if(i&&(null===i||void 0===i||null===(o=i.current)||void 0===o?void 0:o.focus)&&u)null===i||void 0===i||null===(l=i.current)||void 0===l||l.focus()}else{var c,p,d=t.validateEmail(r,n);if(i&&(null===i||void 0===i||null===(c=i.current)||void 0===c?void 0:c.focus)&&d)null===i||void 0===i||null===(p=i.current)||void 0===p||p.focus()}},t.onPasswordSubmit=function(e,r,i,n,o,s){var l,u,c,p;t.authMode===a.s4.AUTH_MODE_SIGNUP&&t.isReferralCodeRequired()&&(null===(l=t.props.referralCode)||void 0===l||null===(u=l.params)||void 0===u?void 0:u.code)?(t.validatePassword(i,s),o&&(null===o||void 0===o||null===(c=o.current)||void 0===c?void 0:c.focus)&&(null===o||void 0===o||null===(p=o.current)||void 0===p||p.focus())):(t.validatePassword(i,s),t.onSubmitClicked(e,i,r,n,s))},t.onSubmitReferralCodeSubmit=function(e,r,i,n,o){t.onSubmitClicked(e,r,i,n,o)},t.onForgotPassword=function(){(0,l.Ov)()},t.onAuthSubmit=function(e,r,i,n,o,s,a,l){t.onSubmitClicked(e,r,i,n,o,s,a,l)},t.onTermsAndConditions=function(){ae()},t.onChatToWhatsApp=function(){var e=s.Gj.WHATSAPP_NUMBER;se(e)},t.cleanCurrentState=function(){t.setState({isEmailValid:!0,emailErrorMsg:"",isUserNameValid:!0,userNameErrorMsg:"",isPasswordValid:!0,passwordErrorMsg:""})},t.navigationToSignup=function(){t.cleanCurrentState(),(0,l.lL)()},t.navigationToSignIn=function(){t.cleanCurrentState(),(0,l.XA)()},t.onSocialSignIn=function(e){var r=e.mail,i=e.name,n=e.id,o=e.accessToken,s=e.loginType,l={fb:a.Q6.FACEBOOK_LOGIN,google:a.Q6.GOOGLE_LOGIN,apple:a.Q6.APPLE_LOGIN};t.props.doSocialSignin(r,i,n,o,l[s])},t.onSocialSignInFail=function(e,t){return t(e)},t.state={isPasswordVisible:!1,isEmailValid:!0,emailErrorMsg:null,isUserNameValid:!0,userNameErrorMsg:null,isPasswordValid:!0,passwordErrorMsg:null},t.emailAuthUtils=new u.pU,t.authMode=a.s4.AUTH_MODE_NONE,t.navigatedBack=!1,t.togglePasswordVisibility=t.togglePasswordVisibility.bind(p(t)),t.onSubmitClicked=t.onSubmitClicked.bind(p(t)),t.isReferralCodeRequired=t.isReferralCodeRequired.bind(p(t)),t}return r=h,(n=[{key:"shouldComponentUpdate",value:function(e,t){var r,i,n;return((null===(r=this.props)||void 0===r?void 0:r.navigationCurrentScreen)!==(null===e||void 0===e?void 0:e.navigationCurrentScreen)||this.props.userLoginStatus!==e.userLoginStatus||this.props.authApiStatus!==e.authApiStatus||this.state!==t)&&(null===(n=null===(i=this.props)||void 0===i?void 0:i.isScreenFocused)||void 0===n||n)&&!0}},{key:"componentDidMount",value:function(){var e,t=c.i_.SIGN_UP_AUTH===(null===(e=this.props)||void 0===e?void 0:e.navigationCurrentScreen);this.authMode=t?a.s4.AUTH_MODE_SIGNUP:a.s4.AUTH_MODE_SIGNIN}},{key:"componentDidUpdate",value:function(e){var t,r,i,n=c.i_.SIGN_UP_AUTH===(null===(t=this.props)||void 0===t?void 0:t.navigationCurrentScreen);if(this.authMode=n?a.s4.AUTH_MODE_SIGNUP:a.s4.AUTH_MODE_SIGNIN,(null===e||void 0===e?void 0:e.navigationCurrentScreen)!==(null===(r=this.props)||void 0===r?void 0:r.navigationCurrentScreen)){var o,u=c.i_.SIGN_UP_AUTH===(null===(o=this.props)||void 0===o?void 0:o.navigationCurrentScreen);this.authMode=u?a.s4.AUTH_MODE_SIGNUP:a.s4.AUTH_MODE_SIGNIN}if(s.Gj.learner_segment)try{i=JSON.parse(s.Gj.learner_segment)}catch(p){return void console.log("\n                  error in parsing customerConfig.learner_segment data $ { customerConfig.learner_segment }\n                  ")}!1!==e.sharedIsUserLoggedIn&&this.props.sharedIsUserLoggedIn?(0,l.k4)():e.userLoginStatus===this.props.userLoginStatus&&e.emailVerificationType===this.props.emailVerificationType&&e.isEmailVerified===this.props.isEmailVerified&&e.isProfileBuilderEnabled===this.props.isProfileBuilderEnabled&&e.userSegmentId===this.props.userSegmentId&&e.sharedIsUserLoggedIn===this.props.sharedIsUserLoggedIn||(this.props.userLoginStatus!==a.zU.LOGGED_IN_EMAIL_VERIFICATION_PENDING||this.props.emailVerificationType!==a.QF.EMAIL_LINK||this.props.isEmailVerified?this.props.userLoginStatus!==a.zU.LOGGED_IN_EMAIL_VERIFICATION_PENDING||this.props.emailVerificationType!==a.QF.EMAIL_OTP||this.props.isEmailVerified?this.props.userLoginStatus===a.zU.LOGGED_IN_MOBILE_VERIFICATION_PENDING?(0,l.jA)():this.props.userLoginStatus===a.zU.LOGGED_IN_VERIFIED&&(this.props.isProfileBuilderEnabled&&!this.props.isStudentFilledProfile?(0,l.zB)():s.Gj.segment_enabled&&!this.props.userSegmentId&&i.allow_learner_selection?(0,l.DJ)():this.navigatedBack||(this.navigatedBack=!0,(0,l.n)(this.props.sharedIsUserLoggedIn,this.props.postSigninRoute))):(0,l.Wt)():(0,l.aS)())}},{key:"togglePasswordVisibility",value:function(){this.state.isPasswordVisible?this.setState({isPasswordVisible:!1}):this.setState({isPasswordVisible:!0})}},{key:"validateEmail",value:function(e,t){var r=this.emailAuthUtils.isEmailValid(e||"",t);return this.setState({isEmailValid:r.isValid,emailErrorMsg:r.errMsg}),r.isValid}},{key:"validateUserName",value:function(e,t){var r=this.emailAuthUtils.isUserNameValid(e||"",t);return this.setState({isUserNameValid:r.isValid,userNameErrorMsg:r.errMsg}),r.isValid}},{key:"validatePassword",value:function(e,t){var r=this.emailAuthUtils.isPasswordValid(e||"",this.authMode,t);this.setState({isPasswordValid:r.isValid,passwordErrorMsg:r.errMsg})}},{key:"onSubmitClicked",value:function(e,t,r,i,n,o,l,u){var c=this.props,p=c.inProgressPayment,d=c.userSegmentId,f=c.currentSegmentPath;if(s.Gj.authentication_types===a.$B.USER_NAME){var h=this.emailAuthUtils.isUserNameValid(e||"",n),S=this.emailAuthUtils.isPasswordValid(t||"",this.authMode,n);h.isValid&&S.isValid&&(this.authMode===a.s4.AUTH_MODE_SIGNUP?this.props.doSignupUser("".concat(e,"@username.com"),t,e,i,l,o,u):this.props.doSigninUser(null,t,e,o,u,p,d,f)),this.setState({isUserNameValid:h.isValid,userNameErrorMsg:h.errMsg,isPasswordValid:S.isValid,passwordErrorMsg:S.errMsg})}else{var v=this.emailAuthUtils.isEmailValid(r||"",n),g=this.emailAuthUtils.isPasswordValid(t||"",this.authMode,n);v.isValid&&g.isValid&&(this.authMode===a.s4.AUTH_MODE_SIGNUP?this.props.doSignupUser(r.trim(),t,null,i,l,o,u,d,f,p):this.props.doSigninUser(r.trim(),t,null,o,u,p,d,f)),this.setState({isEmailValid:v.isValid,emailErrorMsg:v.errMsg,isPasswordValid:g.isValid,passwordErrorMsg:g.errMsg})}}},{key:"isReferralCodeRequired",value:function(){var e=Number(s.Gj.PAYMENT_TYPE)!==c.O5.IN_APP_PAYMENT,t=!(c.OS===c.vO.DEVICE_IOS)&&e;return!(!s.Gj.is_wallet_enabled||!s.Gj.is_referral_enabled)&&t}},{key:"render",value:function(){var t={backToPreviousPage:this.backToPreviousPage,onEmailOrUserNameSubmit:this.onEmailOrUserNameSubmit,onPasswordSubmit:this.onPasswordSubmit,onSubmitReferralCodeSubmit:this.onSubmitReferralCodeSubmit,onForgotPassword:this.onForgotPassword,onAuthSubmit:this.onAuthSubmit,onTermsAndConditions:this.onTermsAndConditions,onChatToWhatsApp:this.onChatToWhatsApp,goToSignUp:this.navigationToSignup,goToSignIn:this.navigationToSignIn,onSocialSignIn:this.onSocialSignIn,onSocialSignInFail:this.onSocialSignInFail,exploreNavigation:l.bC};return(0,i.jsx)(e,{data:this.emailAuthUtils.constructData(this.props,this.isReferralCodeRequired,this.state),callbacks:t})}}])&&d(r.prototype,n),o&&d(r,o),h}(n.Component);return(0,o.$)("selectAuthApiStatus","selectAuthState","selectAuthErrorMessage","selectUserLoginStatus","doSigninUser","doSignupUser","selectNavigationCurrentScreen","selectEmailVerificationType","selectIsEmailVerified","selectIsProfileBuilderEnabled","selectIsStudentFilledProfile","selectUserSegmentId","selectSharedIsUserLoggedIn","selectPostSigninRoute","doSocialSignin","selectInProgressPayment","selectCurrentSegmentPath",t)}var E=function(e){return m((0,o.$)("selectAuthApiStatus","selectAuthState",function(e){return function(t){var r=t.data,o=t.callbacks,l=t.authApiStatus,u=t.authState;return n.useEffect((function(){if(s.Gj.signup_tracking_script&&s.Gj.signup_tracking_script.baseScript){var e=document.querySelector("head"),t=document.createRange().createContextualFragment(s.Gj.signup_tracking_script.baseScript);e&&e.appendChild(t)}}),[]),n.useEffect((function(){r.isSignUpMode&&u===a.fD.SIGNING_UP&&l===a.mP.SUCCESS&&s.Gj.signup_tracking_script&&s.Gj.signup_tracking_script.eventScript&&new Function(s.Gj.signup_tracking_script.eventScript)()}),[u,l,r.isSignUpMode]),(0,i.jsx)(e,{data:r,callbacks:o})}}(e)))},b=r(35230),y=r.n(b);function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t,r,i,n,o,s){try{var a=e[o](s),l=a.value}catch(u){return void r(u)}a.done?t(l):Promise.resolve(l).then(i,n)}function P(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return!t||"object"!==R(t)&&"function"!==typeof t?I(e):t}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var R=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function A(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=_(e);if(t){var n=_(this).constructor;r=Reflect.construct(i,arguments,n)}else r=i.apply(this,arguments);return T(this,r)}}function N(e){var t=function(t){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(p,t);var r,n,o,c=A(p);function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(t=c.call(this,e)).submit=function(){var e,r=(e=y().mark((function e(r,i,n,o){return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,s){var a=t.emailAuth.isEmailValid(r||"",i);a.isValid?(t.resolveEmailSent=e,t.rejectEmailSent=s,t.setState({isEmailValid:!0}),t.props.doChangePassword(r||"",n,o)):(t.setState({isEmailValid:!1,emailErrorMsg:a.errMsg}),s({message:null===a||void 0===a?void 0:a.errMsg}))}));case 2:case"end":return e.stop()}}),e)})).bind(t),function(){var t=this,r=arguments;return new Promise((function(i,n){var o=e.apply(t,r);function s(e){O(o,i,n,s,a,"next",e)}function a(e){O(o,i,n,s,a,"throw",e)}s(void 0)}))}).bind(I(t));return function(e,i,n,o){return r.apply(I(t),arguments)}}(),t.navigateBack=function(){(0,l.n)(t.props.sharedIsUserLoggedIn)},t.navigateToSignIn=function(){(0,l.XA)()},t.openSupportEmailContact=function(){"mailto:".concat(s.Gj.SUPPORT_EMAIL)},t.state={isEmailValid:!0,emailErrorMsg:null},t.emailAuth=new u.pU,t.forgotPasswordUtil=new u.tY,t.resolveEmailSent=null,t.rejectEmailSent=null,t}return r=p,(n=[{key:"shouldComponentUpdate",value:function(){var e,t;return null===(t=null===(e=this.props)||void 0===e?void 0:e.isScreenFocused)||void 0===t||t}},{key:"componentDidUpdate",value:function(e){var t,r;e.authApiStatus===this.props.authApiStatus&&e.authState===this.props.authState||(this.props.authState===a.fD.RESETTING_PASSWORD&&this.props.authApiStatus===a.mP.SUCCESS&&this.resolveEmailSent&&(this.resolveEmailSent(),this.resolveEmailSent=null),this.props.authState===a.fD.RESETTING_PASSWORD&&this.props.authApiStatus===a.mP.FAILED&&this.rejectEmailSent&&(this.rejectEmailSent({message:null!==(r=null===(t=this.props)||void 0===t?void 0:t.authErrorMessage)&&void 0!==r?r:""}),this.rejectEmailSent=null))}},{key:"render",value:function(){var t={navigateBack:this.navigateBack,openSupportEmailContact:this.openSupportEmailContact,submitEmail:this.submit,navigateToSignIn:this.navigateToSignIn};return(0,i.jsx)(e,{data:this.forgotPasswordUtil.constructData(this.state),callbacks:t})}}])&&P(r.prototype,n),o&&P(r,o),p}(n.Component);return(0,o.$)("selectAuthApiStatus","selectAuthState","selectAuthErrorMessage","doChangePassword","selectSharedIsUserLoggedIn",t)}var M=r(95045);function D(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var C=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,i;return t=e,(r=[{key:"constructData",value:function(e,t){var r=e.isMobileVerified,i=t.otpType===a.sh.EMAIL,n=t.otpType===a.sh.MOBILE,o=e.sharedUserEmail||"",l=e.userMobileNumber||t.submittedUserMobileNumber||"",u=r||t.currentOtpState!==a.a4.IDLE,c=s.Gj.CURRENCY,p=c?M.YQ[c]:"IN",d=null===p||void 0===p?void 0:p.toLowerCase(),f=t.currentOtpState!==a.a4.IDLE&&!1===e.isMobileVerified&&t.otpType===a.sh.MOBILE,h=t.currentOtpState===a.a4.REQUESTED_RESEND_OTP||t.currentOtpState===a.a4.VERIFYING_OTP||t.currentOtpState===a.a4.REQUESTED_OTP&&(e.authApiStatus===a.mP.INPROGRESS||e.authApiStatus===a.mP.SUCCESS),S=(null===e||void 0===e?void 0:e.authErrorMessage)||"",v=null===e||void 0===e?void 0:e.isInternationalOtpEnabled,g=(null===e||void 0===e?void 0:e.otpResendCount)<(v?4:2),m=(null===e||void 0===e?void 0:e.otpResendCount)<(v?3:1),E=t.currentOtpState===a.a4.REQUESTED_OTP&&(null===e||void 0===e?void 0:e.authApiStatus)===a.mP.FAILED;return{isMobileVerified:r,isEmailOtpType:i,isMobileOtptype:n,userEmail:o,phoneInputInitialCountry:d,userMobileNumber:l,isPhoneInputDisabled:u&&!E,shouldEditPhoneInput:f,shouldAllowOtpVerification:h,authErrorMessage:S,shouldOtpResendCount:g,isInternationalOtpEnabled:v,isRequestOtpError:E,isAuthApiFailed:(null===e||void 0===e?void 0:e.authApiStatus)===a.mP.FAILED,isSubmitOtpLoading:t.otpType===a.sh.MOBILE&&t.currentOtpState===a.a4.REQUESTED_OTP&&(null===e||void 0===e?void 0:e.authApiStatus)===a.mP.INPROGRESS,isOtpResendTimerAllowed:m,otpSentType:null===e||void 0===e?void 0:e.otpSentType,otpRetryOnCall:null===e||void 0===e?void 0:e.otpRetryOnCall,otpResendCount:null===e||void 0===e?void 0:e.otpResendCount}}}])&&D(t.prototype,r),i&&D(t,i),e}();function F(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return!t||"object"!==j(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=L(e);if(t){var n=L(this).constructor;r=Reflect.construct(i,arguments,n)}else r=i.apply(this,arguments);return w(this,r)}}var G=function(e){var t=function(t){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(c,t);var r,n,o,u=k(c);function c(e){var t,r,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=u.call(this,e)).exitFromOtpVerification=function(){return t.props.doSignoutUser(),!0},t.onRequestOtp=function(e){if(t.state.otpType===a.sh.EMAIL)t.props.doRequestOtp(a.bL.REQUEST_OTP,null,0,null,!0,t.props.sharedUserEmail,t.props.sharedUserId,t.props.otpSentType,t.props.otpRetryOnCall),t.setState({currentOtpState:a.a4.REQUESTED_OTP});else{var r=null===e||void 0===e?void 0:e.getValue();t.props.isMobileVerified&&(r=t.props.userMobileNumber),t.props.doRequestOtp(a.bL.REQUEST_OTP,r,0,null,!1,null,null,t.props.otpSentType,t.props.otpRetryOnCall),t.setState({currentOtpState:a.a4.REQUESTED_OTP,submittedUserMobileNumber:r})}},t.onRequestResendOtp=function(e){if(t.state.otpType===a.sh.EMAIL)t.props.doRequestOtp(a.bL.REQUEST_RESEND_OTP,null,0,null,!0,t.props.sharedUserEmail,t.props.sharedUserId,t.props.otpSentType,t.props.otpRetryOnCall),t.setState({currentOtpState:a.a4.REQUESTED_RESEND_OTP});else{var r=null===e||void 0===e?void 0:e.getValue();t.props.isMobileVerified&&(r=t.props.userMobileNumber),t.props.doRequestOtp(a.bL.REQUEST_RESEND_OTP,r,t.props.otpSessionId,null,!1,null,null,t.props.otpSentType,t.props.otpRetryOnCall),t.setState({currentOtpState:a.a4.REQUESTED_RESEND_OTP})}},t.onSubmitOtp=function(e,r,i){if(t.state.otpType===a.sh.EMAIL)t.props.doRequestOtp(a.bL.VERIFY_OTP,null,null,r,!0,t.props.sharedUserEmail,t.props.sharedUserId,t.props.otpSentType,t.props.otpRetryOnCall),t.setState({currentOtpState:a.a4.VERIFYING_OTP});else{var n=null===e||void 0===e?void 0:e.getValue();t.props.isMobileVerified&&(n=t.props.userMobileNumber),t.props.doRequestOtp(a.bL.VERIFY_OTP,n,t.props.otpSessionId,r,!1,null,null,t.props.otpSentType,t.props.otpRetryOnCall),t.setState({currentOtpState:a.a4.VERIFYING_OTP,submittedUserMobileNumber:n})}t.otpSuccessToast=i||null},t.onMobileNumberEdit=function(){t.setState({currentOtpState:a.a4.IDLE})},t.state={currentOtpState:a.a4.IDLE,isMobileNumValid:!!t.props.isMobileVerified,isInternationalNumNotSupportedErr:!1,email:t.props.sharedUserEmail,isEmailValid:!1,otpType:null!==(i=null===(r=t.props)||void 0===r?void 0:r.otpFromNav)&&void 0!==i?i:0,submittedUserMobileNumber:""},t.navigatedBack=!1,t.otpConfirmUtils=new C,t.otpSuccessToast=null,t}return r=c,(n=[{key:"shouldComponentUpdate",value:function(){var e,t;return null===(t=null===(e=this.props)||void 0===e?void 0:e.isScreenFocused)||void 0===t||t}},{key:"componentDidUpdate",value:function(){if(this.props.userLoginStatus===a.zU.NOT_LOGGED_IN&&!this.navigatedBack)return this.navigatedBack=!0,void(0,l.n)(this.props.sharedIsUserLoggedIn);if(this.props.userLoginStatus===a.zU.LOGGED_IN_EMAIL_VERIFICATION_PENDING&&this.state.otpType!==a.sh.EMAIL?this.setState({otpType:a.sh.EMAIL}):this.props.userLoginStatus===a.zU.LOGGED_IN_MOBILE_VERIFICATION_PENDING&&this.state.otpType!==a.sh.MOBILE&&this.setState({otpType:a.sh.MOBILE}),this.state.currentOtpState===a.a4.VERIFYING_OTP&&this.props.authApiStatus===a.mP.SUCCESS)if(this.otpSuccessToast&&(this.otpSuccessToast(),this.otpSuccessToast=null),this.setState({currentOtpState:a.a4.IDLE}),this.props.userLoginStatus===a.zU.LOGGED_IN_EMAIL_VERIFICATION_PENDING)(0,l.aS)();else if(this.props.userLoginStatus===a.zU.LOGGED_IN_MOBILE_VERIFICATION_PENDING&&this.state.otpType===a.sh.EMAIL)this.setState({otpType:a.sh.MOBILE});else if(this.props.userLoginStatus===a.zU.LOGGED_IN_VERIFIED){var e;if(s.Gj.learner_segment)try{e=JSON.parse(s.Gj.learner_segment)}catch(t){return void console.log("\n                        error in parsing schoolConfig.learner_segment data $ { schoolConfig.learner_segment }\n                        ")}this.props.isProfileBuilderEnabled&&!this.props.isStudentFilledProfile?(0,l.zB)():s.Gj.segment_enabled&&!this.props.userSegmentId&&e.allow_learner_selection?(0,l.DJ)():this.navigatedBack||(this.navigatedBack=!0,(0,l.n)(this.props.sharedIsUserLoggedIn))}}},{key:"render",value:function(){var t={onExitFromOtpVerification:this.exitFromOtpVerification,onMobileNumberEdit:this.onMobileNumberEdit,onRequestResendOtp:this.onRequestResendOtp,onRequestOtp:this.onRequestOtp,onSubmitOtp:this.onSubmitOtp};return(0,i.jsx)(e,{data:this.otpConfirmUtils.constructData(this.props,this.state),callbacks:t})}}])&&F(r.prototype,n),o&&F(r,o),c}(n.Component);return(0,o.$)("selectAuthApiStatus","selectAuthState","selectAuthErrorMessage","selectIsMobileVerified","selectUserMobileNumber","selectOtpSessionId","selectOtpResendCount","selectIsInternationalOtpEnabled","selectUserLoginStatus","selectIsProfileBuilderEnabled","selectIsStudentFilledProfile","selectIsEmailVerified","selectSharedUserEmail","selectEmailVerificationType","selectUserSegmentId","selectSharedUserId","doRequestOtp","doSignoutUser","selectSharedIsUserLoggedIn","selectOtpRetryOnCall","selectOtpSentType",t)},x=r(43894),B=r(9078),q=r(45682),Q=r(70982),W=r.n(Q);function Y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var $={constructData:function(e,t,r,i){var n=e.profileFieldsFetchStatus!==a.mP.SUCCESS&&e.profileFieldsFetchStatus!==a.mP.FAILED,o=Object.keys(e.allProfileFieldsAttributes).map((function(r){var i,n=e.allProfileFieldsAttributes[r],o=n.dataType===a.g.DATE,s=n.dataType===a.g.DROPDOWN,l=n.dataType===a.g.RADIO,u=!(o||s||l),c=!(0,q.aW)(n.label)||!e.isMobileVerified,p=n.dataType===a.g.NUMERIC,d=(0,q.aW)(n.label),f=null===(i=t[r])||void 0===i?void 0:i.errorMessage;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){Y(e,t,r[t])}))}return e}({isDateType:o,isDropDownType:s,isRadioButtonType:l,isTextFieldType:u,isTextFieldEditable:c,isNumericFieldType:p,isPhoneType:d},n,f?{errorMessage:n.errorMessage||f}:{errorMessage:void 0})})),s={};o.forEach((function(e){s[e.id]=e}));var l=!!(e.profileFieldsData&&e.profileFieldsData.currentProfileSkipCount>=e.profileFieldsData.maxSkipCount),u={};Object.keys(e.learnerProfileData).forEach((function(r){var i,n,o=null!==(n=null===(i=t[r])||void 0===i?void 0:i.value)&&void 0!==n?n:e.learnerProfileData[r];u[r]=o||("number"===typeof o?0:"")}));var c=e.profileFieldsState===a.z$.UPDATE_PROFILE_FIELDS_DATA&&e.profileFieldsFetchStatus===a.mP.SUCCESS;return{isProfileFieldsPageLoading:n||r,fieldAttributes:s,isProfileFieldsSkipCountExceeded:l,fields:e.profileFields,defaultValues:u,isUpdateSuccess:c,isProfileUpdateTab:e.isFromProfileSettings,profileFieldsError:e.profileFieldsFetchStatus===a.mP.FAILED?e.profileFieldsError:void 0,validationSchema:i}},validateField:function(e,t,r){var i,n,o,s,l,u=function(e,t){var r=/^\+\d{10,14}$/,i=e.isMandatory,n=e.dataType,o=e.errorMessage,s=e.validationRules,l=e.fieldType;if(n===a.WM.DATE_TYPE_RADIO)return{Field:{presence:!!i&&{message:o||t("isRequired"),allowEmpty:!1}}};if(n===a.WM.DATA_TYPE_STRING)return l===a.fS.MOBILE?{Field:{presence:!!i&&{message:o||t("isRequired"),allowEmpty:!1},format:{pattern:r,flags:"i",message:t("notValidNumberCountryCode")}}}:{Field:{presence:!!i&&{message:o||t("isRequired"),allowEmpty:!1},length:{minimum:s.min?parseInt(s.min.toString()):0,tooShort:t("minCharacterText",{minCharacter:s.min}),maximum:s.max?parseInt(s.max.toString()):1e3,tooLong:t("maxCharacterText",{maxCharacterText:s.max})},format:n===a.WM.DATA_TYPE_INTEGER?{pattern:"[0-9]+",flags:"i",message:t("canContainNumbers")}:void 0}};if(n===a.WM.DATA_TYPE_INTEGER)return{Field:{presence:!!i&&{message:o||t("isRequired"),allowEmpty:!1},numericality:{onlyInteger:!1,tooLong:t("maxNumberInvalid",{maxNumber:s.max}),tooShort:t("minNumberInvalid",{minNumber:s.min})}}};if(n===a.WM.DATA_TYPE_DROPDOWN)return{Field:{presence:!!i&&{message:o||t("isRequired"),allowEmpty:!1}}};if(n===a.WM.DATA_TYPE_DATE)return{Field:{presence:!!i&&{message:o||t("isRequired"),allowEmpty:!1}}}}(t,r),c=W()({Field:e||""},u);if(t.dataType===a.WM.DATA_TYPE_INTEGER&&(e||0===e||!t.isMandatory))return parseFloat(e)>Number(null!==(i=t.validationRules.max)&&void 0!==i?i:1e15)?"".concat(r("maxValue")," ").concat(null!==(n=t.validationRules.max)&&void 0!==n?n:1e15):parseFloat(e)<Number(null!==(o=t.validationRules.min)&&void 0!==o?o:-1e15)&&"".concat(r("minValue")," ").concat(null!==(s=t.validationRules.min)&&void 0!==s?s:-1e15);return!!c&&(null===c||void 0===c||null===(l=c.Field)||void 0===l?void 0:l[0])}};function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function H(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){H(e,t,r[t])}))}return e}function X(e){return function(e){if(Array.isArray(e))return z(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return z(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var K=function(e){return(0,o.$)("selectProfileFieldsFetchStatus","selectProfileFieldsState","selectAuthState","selectAuthApiStatus","selectProfileFieldsError","selectAllProfileFieldsAttributes","selectProfileFields","selectProfileFieldsData","selectPostSigninRoute","selectSharedIsUserLoggedIn","selectSharedUserId","selectUserSegmentId","selectSharedUserName","selectUserMobileNumber","selectIsMobileVerified","selectLearnerProfileData","doFetchProfileFieldsData","doUpdateProfileFieldsData","doNewUpdateProfileData","doSignoutUser","selectUserLoginStatus","doFetchProfileFieldsData",(function(t){var r=t.sharedIsUserLoggedIn,o=(0,n.useState)({}),s=o[0],u=o[1],c=(0,n.useState)(!1),p=c[0],d=c[1],f=(0,B.$)("account").t;(0,n.useEffect)((function(){r||(0,l.XA)()}),[r]),(0,n.useEffect)((function(){t.profileFieldsState===a.z$.UPDATE_PROFILE_FIELDS_DATA&&t.profileFieldsFetchStatus===a.mP.FAILED&&d(!1),t.profileFieldsState===a.z$.UPDATE_PROFILE_FIELDS_DATA&&t.profileFieldsFetchStatus===a.mP.SUCCESS&&t.doFetchProfileFieldsData()}),[t.profileFieldsState,t.profileFieldsFetchStatus,t.doFetchProfileFieldsData]),(0,n.useEffect)((function(){if(p)if(0===Object.keys(s).filter((function(e){return!!s[e].errorMessage})).length){var e=Object.keys(s).filter((function(e){return""!==s[e].value})).map((function(e){var r=t.allProfileFieldsAttributes[e],i=[a.g.RADIO,a.g.DROPDOWN],n={value:s[e].value,id:Number(e)};return(null===i||void 0===i?void 0:i.includes(null===r||void 0===r?void 0:r.dataType))&&(n.label=s[e].label),n}));t.doUpdateProfileFieldsData({profileData:e,userId:t.sharedUserId})}else d(!1)}),[p,s]);var h=function(e,t,r,i){var n,o=t.isNumericFieldType?parseFloat(e):e,a=null===(n=s[t.id])||void 0===n?void 0:n.value;if((!o||a!==o)&&(0!==(null===o||void 0===o?void 0:o.length)||0!==(null===a||void 0===a?void 0:a.length))){var l=$.validateField(o,J({},t,{errorMessage:void 0}),r);u((function(e){return J({},e,H({},t.id,{value:o,errorMessage:l,label:i}))}))}},S=(0,n.useCallback)((function(){t.doUpdateProfileFieldsData({isProfileSkipped:!0,userId:t.sharedUserId}),(0,l.n)(t.sharedIsUserLoggedIn,t.postSigninRoute)}),[t.sharedUserId,t.doUpdateProfileFieldsData,t.sharedIsUserLoggedIn,t.postSigninRoute]),v=function(e,r){var i=t.allProfileFieldsAttributes,n=r.id,o=r.values;if(!i[n])return e;var s=i[n],l=s.dataType,u=s.isMandatory,c=s.validationRules,p=s.errorMessage,d="string",h=x[d]();if(c){var S="",g="",m=c.min,E=c.max;if(l===a.g.TEXT?(h=x[d](),S="".concat(f("minCharacter")," ").concat(m),g="".concat(f("maxCharacter")," ").concat(E)):l===a.g.NUMERIC?(h=x[d="number"](),S="".concat(f("minValue")," ").concat(m),g="".concat(f("maxValue")," ").concat(E)):l===a.g.DATE&&(h=x[d="date"](),S="".concat(f("startDate")," ").concat(m),g="".concat(f("endDate")," ").concat(E)),m){var b,y=[m,S];h=(b=h).min.apply(b,X(y))}if(E){var I,O=[E,g];h=(I=h).max.apply(I,X(O))}}var P,_=p?[p]:[f("required")];u&&(h=(P=h).required.apply(P,X(_)));if(e[n]=h,o&&o.length>0)for(var T=0;T<o.length;T++){var U=o[T],R=U.child_field,A=U.key;if(R&&R.length>0){var N=R.reduce(v,e);x.mixed().when(A,{is:function(e){return void 0!==e},then:N})}}return e},g=(0,n.useMemo)((function(){var e=t.profileFields.reduce(v,{});return x.object().shape(e)}),[t.profileFields]),m={formSubmitCallback:function(e,r){X(Object.keys(s)).concat(X(Object.keys(t.learnerProfileData))).forEach((function(i){var n,o,a,l=r[i];h(null!==(a=null!==(o=null===(n=s[i])||void 0===n?void 0:n.value)&&void 0!==o?o:t.learnerProfileData[i])&&void 0!==a?a:"",t.allProfileFieldsAttributes[i],e,l)})),d(!0)},fieldSubmitCallback:h,navigateToProfile:function(){return(0,l.Cq)()},navigateToPostSigninRoute:function(){return(0,l.n)(t.sharedIsUserLoggedIn,t.postSigninRoute,!1)},signOut:function(){return t.doSignoutUser()},onSkipProfile:S};return(0,i.jsx)(e,{data:$.constructData(t,s,p,g),callbacks:m})}))};function Z(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function te(e,t){return!t||"object"!==ie(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function re(e,t){return(re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ie=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function ne(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=ee(e);if(t){var n=ee(this).constructor;r=Reflect.construct(i,arguments,n)}else r=i.apply(this,arguments);return te(this,r)}}function oe(e){var t=function(t){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&re(e,t)}(a,t);var r,n,o,s=ne(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=s.call(this,e)).language=new u.M4,t}return r=a,(n=[{key:"render",value:function(){var t,r,n={onSwitchLanguage:null===(t=this.props)||void 0===t?void 0:t.doSwitchLanguage,onUserLanguageSwitch:null===(r=this.props)||void 0===r?void 0:r.doUserLanguageSwitch,goToProfile:l.Cq,goTo:l.T8,goToSettings:l.qP};return(0,i.jsx)(e,{data:this.language.constructData(this.props),callbacks:n})}}])&&Z(r.prototype,n),o&&Z(r,o),a}(n.Component);return(0,o.$)("selectLanguageList","selectLanguageFetchStatus","selectLanguageError","selectLanguageState","selectSharedIsUserLoggedIn","selectCurrentLanguage","selectUserLanguageId","doSwitchLanguage","doFetchLanguages","doUserLanguageSwitch",t)}var se=function(e){},ae=function(){Object.assign(document.createElement("a"),{target:"_blank",href:s.Gj.TERMS_CONDITION}).click()};function le(e){}}}]);