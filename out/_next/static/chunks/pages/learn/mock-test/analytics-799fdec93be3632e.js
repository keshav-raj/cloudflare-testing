(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1747],{45017:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/mock-test/analytics",function(){return r(13445)}])},13445:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return X}});var n=r(24246),o=r(27378),s=r(44437),i=r(92036),c=r(86677),u=r(14916),a=r(38906),l=r(79136),p=r(99032),f=r(53850);function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function m(e,t){return!t||"object"!==C(t)&&"function"!==typeof t?d(e):t}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function g(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var C=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function A(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h(e);if(t){var o=h(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return m(this,r)}}var x=r(95045),j=r(55480),T=r(45671),O=r(69174),w=r(46507),E=r(2113),P=r(84101),_=r(87228),R=r(32362),N=r(49928);function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function U(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}function D(e,t){return!t||"object"!==W(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function F(e,t){return F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},F(e,t)}var W=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function K(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=k(e);if(t){var o=k(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return D(this,r)}}var M=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(i,e);var t,r,o,s=K(i);function i(){return I(this,i),s.apply(this,arguments)}return t=i,(r=[{key:"navigateToSectionAnalytics",value:function(e){var t=e.id,r=this.props.testSeriesAnalyticsDetails,n=r.currentCourseSeoTitle,o=r.currentBundleSeoTitle;c.default.push(f.y4.testSeriesSectionAnalytics,f.XC.testSeriesSectionAnalytics({productSeo:o||n,subProductSeo:o?n:null,testSeriesAnalyticsSectionId:t}))}},{key:"render",value:function(){var e,t,r=this,o=this.props,s=o.testSeriesAnalyticsDetails,i=o.t,c=this.context.theme,a=c.colors,l=c.sizes,p=c.fontSizes,f=s.swotAnalytics,y=s.currentCourseTitle,d=s.overallAccuracy,S=s.overallCompletetion,v=s.averageScore,h=s.series,m=s.testSeriesSetDetails,b=s.totalMocks,g=[{label:i("totalTests"),value:Number(b),IconComponent:R.yix},{label:i("Completion"),value:String(S),IconComponent:R.be3},{label:i("AverageScore"),value:String(v),IconComponent:R.osu},{label:i("OverallAccuracy"),value:String(d),IconComponent:_.hKE}];return(0,n.jsxs)(j.xu,{children:[(0,n.jsx)(O.QA,{title:y}),(0,n.jsxs)(u.W2,{children:[(0,n.jsx)(j.xu,{mt:8,pl:2,children:(0,n.jsx)(u.X6,{variant:"h1",color:"onSurface.main",fontWeight:"normal",children:"".concat(y," ").concat(i("Report"))})}),(0,n.jsx)(w.Qw,{kpi:g}),(0,n.jsx)(j.xu,{mb:6})]}),(0,n.jsx)(u.iz,{}),(0,n.jsx)(u.W2,{children:(0,n.jsxs)(j.xu,{my:[6,8],children:[(0,n.jsx)(j.xu,{mb:4,children:(0,n.jsx)(u.X6,{variant:"h2",fontWeight:"semiBold",children:i("testSeriesCompletion")})}),(0,n.jsx)(w.EW,{testSeriesSet:m,t:i,navigateToSection:function(e){return r.navigateToSectionAnalytics({id:e})}})]})}),(0,n.jsx)(u.iz,{}),(0,N.C)()&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.W2,{children:(0,n.jsxs)(j.xu,{my:[6,8],children:[(0,n.jsx)(u.X6,{variant:"h2",fontWeight:"semiBold",children:i("setReport")}),(0,n.jsx)(j.xu,{mb:5}),(0,n.jsx)(u.X6,{variant:"h3",fontWeight:"bold",color:"onSurface.light",children:i("SpeedVsAccuracy")}),(0,n.jsx)(j.xu,{mb:8}),(0,n.jsx)(w.Tt,{swotAnalytics:f,t:i,topicType:i("SET_NAME"),topicParameters:[i("COMPLETION"),i("SPEED"),i("ACCURACY"),i("SCORE")],navigateToThisQuadrant:function(e){return r.navigateToSectionAnalytics(e)}})]})}),(0,n.jsx)(u.iz,{})]}),(0,n.jsxs)(u.W2,{children:[(0,n.jsx)(j.xu,{my:[6,8]}),(0,n.jsx)(O.CX,{height:l.scoreCompletionGraph||P.J7.scoreCompletionGraph,series:[{name:i("Score"),visible:!0,data:h.scores,type:"column",color:(null===a||void 0===a||null===(e=a.report)||void 0===e?void 0:e.color6)||P.O9.report.color6},{name:i("Completion"),visible:!0,data:h.completions,type:"column",color:(null===a||void 0===a||null===(t=a.report)||void 0===t?void 0:t.color1)||P.O9.report.color1}],heading:i("ScoreCompletionAnalysis"),ySeriesName:i("scoreAndCompletion"),xSeriesName:i("sets"),categories:h.setNames,xAxisFontSize:(null===p||void 0===p?void 0:p.body2)||P.CH.TM,gridLineColor:(null===a||void 0===a?void 0:a.disabled)||P.O9.disabled})]}),(0,n.jsx)(j.xu,{my:50})]})}}])&&U(t.prototype,r),o&&U(t,o),i}(o.Component);M.contextType=E._y;var B=(0,T.Z)("testSeriesAnalytics")(M),L=function(e){var t=function(t){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(h,t);var r,o,a,y=A(h);function h(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),(t=y.call(this,e)).constructAnalytics=t.constructAnalytics.bind(d(t)),t}return r=h,o=[{key:"componentDidMount",value:function(){this.props.sharedIsUserLoggedIn||((0,u.FN)({message:"Your login session is expired."}),this.props.doRestartAuthentication(),c.default.push(f.y4.signin));var e=this.props,t=e.sharedIsUserAccessedFromNativeApp,r=e.sharedCurrentAccessingWebViewDeviceType;t&&((0,s.Gg)(r),(0,s.mx)())}},{key:"constructAnalytics",value:function(){var e=this.props,t=e.currentCourseSections,r=e.currentCourseTitle,n=e.currentCourseSeoTitle,o=e.currentBundleSeoTitle,s=e.currentCourseMockTests,c=t.sectionDetails,u=t.sectionIds,a=0,l=0,f=0,y=0,d={strong:[],weak:[],opportunity:[],threat:[]},S=[],h=[],m=[],b=[],C=0;u.forEach((function(e){var t=c[e],r=t.sectionTitle,n=t.testSeriesAnalytics,o=n.totalTestCount,s=n.totalTestCompleted,u=n.userAvgPercent,l=n.userAvgSpeed,A=(n.userAvgAccuracy,n.userLatestAvgPercent,n.userLatestAvgAccuracy),x=0,j=0;if(s>0&&o>0){C+=1;var T=s/o*100;T=Number(parseFloat("".concat(T)).toFixed(2))||0;var O=l/o*100;a+=T,f+=l,y+=A||0,S.push(r),m.push(T),h.push(u),x=T,j=O,d=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){v(e,t,r[t])}))}return e}({},d,function(e,t,r,n){var o=e.id,s=e.sectionTitle,i=e.testSeriesAnalytics,c=i.totalTestCount,u=i.totalTestCompleted,a=i.userAvgPercent,l=i.userAvgSpeed,f=i.userAvgAccuracy,y=i.relativeSpeed;return t[(0,p.gw)(y,f).topic].push({name:s,id:o,testCount:c,testCompleted:u,totalPercentage:a,speed:l,accuracy:f,completedPercentage:r||0,speedInPercentage:n||0,relativeSpeed:y||0}),t}(t,d,T,O))}o>0&&(b=g(b).concat(g(function(e,t,r){var n=e.id,o=e.sectionTitle,s=e.testSeriesAnalytics,c=[],u=s.totalTestCount,a=s.totalTestCompleted,l=s.userAvgPercent,p=s.userAvgSpeed,f=s.userAvgAccuracy,y=s.totalTimeSpent,d=s.relativeSpeed;return c.push({name:o,id:n,testCount:u,testCompleted:a,totalPercentage:l,speed:p,accuracy:f,completedPercentage:t||0,speedInPercentage:r||0,relativeSpeed:d||0,totalTimeSpent:(0,i.gU)(y)||""}),c}(t,x,j))))})),a/=C,y/=C,f/=C,a=(0,i.Op)(t),l=Number((0,i.T3)(s)),Number.isNaN(l)&&(l=0),y=Number(parseFloat("".concat(y)).toFixed(2)),f=Number(parseFloat("".concat(f)).toFixed(2));var A=!0,x=0;return d.weak.forEach((function(e){e.accuracy>x&&(x=e.accuracy)})),0===x&&(A=!1),{overallCompletetion:a,averageScore:l,overallSpeed:f,overallAccuracy:y,swotAnalytics:d,currentCourseTitle:r,currentCourseSeoTitle:n,currentBundleSeoTitle:o,showAccuracy:A,testSeriesSetDetails:b,series:{setNames:S,scores:h,completions:m},totalMocks:this.props.testSeriesStats.totalMocks||0}}},{key:"render",value:function(){var t=this.props,r=t.currentCourseFetchStatus,o=t.currentCourseError,s=0;if(r===l.UK.IN_PROGRESS||r===l.UK.IDLE)return s=l.UK.IN_PROGRESS,(0,n.jsx)(e,{loadStatus:s});if(r===l.UK.FAILED)return s=l.UK.FAILED,(0,n.jsx)(e,{loadStatus:s,error:o});if(r===l.UK.SUCCESS){var i=this.constructAnalytics();s=l.UK.SUCCESS;var c=0===i.overallCompletetion;return(0,n.jsx)(e,{loadStatus:s,testSeriesAnalyticsDetails:i,hideAnalytics:c})}return s=l.UK.IN_PROGRESS,(0,n.jsx)(e,{loadStatus:s})}}],o&&S(r.prototype,o),a&&S(r,a),h}(o.Component);return(0,a.$)("selectCurrentCourseSections","selectCurrentCourseFetchStatus","selectCurrentCourseError","selectCurrentCourseTitle","selectCurrentCourseSeoTitle","selectCurrentBundleSeoTitle","selectTestSeriesStats","selectSharedIsUserLoggedIn","doRestartAuthentication","selectCurrentCourseMockTests","selectSharedIsUserAccessedFromNativeApp","selectSharedCurrentAccessingWebViewDeviceType",t)}((function(e){var t=e.testSeriesAnalyticsDetails,r=e.loadStatus,o=e.error,s=e.hideAnalytics;return r===l.UK.FAILED||s?(0,n.jsx)(u.jj,{errorCode:o?o.errorCode:x.mR.UNKNOWN_ERROR,errorText:o?o.errorMessage:"Something Went Wrong"}):r===l.UK.IN_PROGRESS?(0,n.jsx)(u.gb,{}):r===l.UK.SUCCESS?(0,n.jsx)(B,{testSeriesAnalyticsDetails:t}):(0,n.jsx)(u.gb,{})})),X=(0,r(29418).Z)((function(){return(0,n.jsx)(L,{})}))}},function(e){e.O(0,[1362,7772,6934,2962,9774,2888,179],(function(){return t=45017,e(e.s=t);var t}));var t=e.O();_N_E=t}]);