(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2695],{23924:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/mock-test/[id]/report/topicComparisonReport",function(){return r(76865)}])},76865:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(24246),i=r(27378),o=r(29418),s=r(11757),a=r(89627),l=r(14916),c=r(95045),u=r(55480),p=r(53050),d=r(71117),f=r(90391),x=r(9078),m=r(53850),y=r(86677),h=r(55714),S=r(93217);function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){j(e,t,r[t])}))}return e}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],s=!0,a=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);s=!0);}catch(l){a=!0,i=l}finally{try{s||null==r.return||r.return()}finally{if(a)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var C=function(e){var t=e.comparisonReport,r=(0,x.$)("result").t,o=t.comparingWithTopper,s=t.setComparisonStatus,c=t.totalTopics,g=t.totalScore,C=t.accuracy,E=t.tagLists,v=t.questions,O=t.topicReportDetails,k=t.constructFilteredData,I=t.constructInitialData,w=t.difficultyLevels,N=t.attempt,R=t.testResultId,_=t.testResultLessonId,A=t.categories,F=t.sharedUserInfo,U=t.testConfig,P=O.graphDetails,L=O.allTagNames,z=P.user,D=P.average,M=P.topper,W=U.testType===a.IQ.OFFLINE_QUIZ,Z=A.byCategoryId,V=A.allCategoryIds,q=[];V.forEach((function(e){var t=Z[e],r={name:t.name,filterName:t.id,filtered:!1,filterType:a.kQ.SECTIONS};q.push(r)})),(0,i.useEffect)((function(){P.user.accuracy.length||I()}));var Q={sections:{name:r("Sections"),filterName:r("allSectionsInCaps"),filterType:a.kQ.SECTIONS,filtered:!1,subFilters:q}},K=T(i.useState(Q),2),B=K[0],X=K[1],H=function(e){var t=B[e],r=b({},Q,j({},e,b({},t,{filtered:!t.filtered})));I(),X(r)},$=function(e,t){var r=B[t],n=b({},B,j({},t,b({},r,{filterName:e})));X(n)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.gR,{quizName:U.quizName,name:F.name,profilePhoto:F.profilePhoto}),(0,n.jsx)(l.W2,{children:(0,n.jsx)(u.xu,{pt:7,children:(0,n.jsx)(p.h4,{heading:r("topicReport"),text:r("solution"),onClick:function(){var e,t;W?(e=R,t=N,y.default.push({pathname:m.y4.offlineQuizReport,query:{id:e,resultType:t}},m.XC.offlineQuizReport({id:e,resultType:t}))):function(e,t,r){y.default.push({pathname:m.y4.solutionPlayer,query:{mode:a.zy.SOLUTION_MODE,id:t,resultType:e,lessonId:r}},m.XC.solutionPlayer({mode:a.zy.SOLUTION_MODE,id:t,resultType:e,lessonId:r}))}(N,R,_)},showPrimaryButton:!0,isViewSolutionsEnabled:U.isViewSolutionsEnabled})})}),(0,n.jsx)(u.xu,{sx:{borderStyle:"solid",borderWidth:"quizPlayerBorder",borderColor:"disabled",mt:[0,6,6]}}),(0,n.jsxs)(l.W2,{children:[(0,n.jsx)(u.xu,{sx:{pt:[3,7,7],pb:[3]},children:(0,n.jsxs)(u.kC,{sx:{flexDirection:["column","row"],justifyContent:"space-between"},pt:4,children:[(0,n.jsxs)(u.xu,{mt:-5,children:[(0,n.jsx)(u.xu,{sx:{display:["none","block"]},children:(0,n.jsx)(d.YK,{filterParameters:B,t:r,clearCallBack:function(){X(Q),I()},toggleFilters:H,toggleSubFilters:$,getFilteredData:function(e,t){return k(e,t)}})}),(0,n.jsx)(u.xu,{sx:{display:["block","none"]},children:(0,n.jsx)(S.MG,{filterParameters:B,clearCallBack:function(){X(Q),I()},toggleFilters:H,toggleSubFilters:$,getFilteredData:function(e,t){return k(e,t)}})})]}),!U.isRandomRulesApplied&&(0,n.jsx)(u.xu,{children:(0,n.jsx)(l.zx,{colorVariant:"secondary",buttonType:"outline",text:r(o?"stopComparison":"compareWithTopper"),buttonSizeVariant:"large",onClick:function(){s()}})})]})}),(0,n.jsxs)(u.xu,{children:[(0,n.jsx)(u.xu,{sx:{display:["none","block"]},children:(0,n.jsxs)(u.kC,{flexDirection:"row",children:[(0,n.jsx)(p.UZ,{heading:c,text:r("totalTopics"),isFirstElement:!0}),(0,n.jsx)(p.UZ,{heading:g,text:r("totalScore")}),(0,n.jsx)(p.UZ,{heading:"".concat(C,"%"),text:r("accuracy"),isLastElement:!0})]})}),(0,n.jsx)(u.xu,{sx:{display:["block","none"]},children:(0,n.jsxs)(u.kC,{flexDirection:"column",children:[(0,n.jsx)(p.UZ,{heading:c,text:r("totalTopics"),isFirstElement:!0,isLastElement:!0}),(0,n.jsx)(p.UZ,{heading:g,text:r("totalScore"),isFirstElement:!0,isLastElement:!0}),(0,n.jsx)(p.UZ,{heading:"".concat(C,"%"),text:r("accuracy"),isFirstElement:!0,isLastElement:!0})]})})]}),(0,n.jsx)(u.xu,{children:(0,n.jsx)(S.Wy,{tagLists:E,questions:v,difficultyLevels:w,attempt:N,quizId:R,isViewSolutionsEnabled:U.isViewSolutionsEnabled,isOfflineQuiz:W})})]}),(0,n.jsx)(p.iz,{}),(0,n.jsx)(S.cp,{comparingWithTopper:o,setComparisonStatus:s,allSectionNames:L,allSectionTimeSpent:z.timeSpent,xAxisLabel:r("Topics"),allSectionAccuracy:z.accuracy,securedMarksInAllSections:z.securedMarks,totalMarksInAllSections:z.totalMarks,allSectionsAverageScore:D.securedMarks,allSectionsAverageAccuracy:D.accuracy,allSectionsAverageTimeSpent:D.timeSpent,allSectionsTopperScore:M.securedMarks,allSectionsTopperAccuracy:M.accuracy,allSectionsTopperTimeSpent:M.timeSpent,scoreChartHeading:r("scoreVsTopics"),accuracyChartHeading:r("accuracyVsTopics"),timeChartHeading:r("timeVsTopics"),isOfflineQuiz:W}),(0,n.jsx)(h.$_,{})]})},E=(0,r(3726).Z)((0,s.Z)((function(e){var t=e.comparisonReport,r=e.loadStatus,i=e.error;return r===a.UK.FAILED?(0,n.jsx)(l.jj,{errorCode:i?i.errorCode:c.mR.UNKNOWN_ERROR,errorText:i?i.errorMessage:"Something Went Wrong"}):r===a.UK.IN_PROGRESS?(0,n.jsx)(l.gb,{}):r===a.UK.SUCCESS?(0,n.jsx)(C,{comparisonReport:t}):(0,n.jsx)(l.gb,{})}))),v=(0,o.Z)((function(){return(0,n.jsx)(E,{})}))}},function(e){e.O(0,[5639,1362,7441,357,7772,8270,1699,8122,597,355,6730,9428,7740,7326,4328,3345,3942,9587,5785,8653,6934,8185,2045,9774,2888,179],(function(){return t=23924,e(e.s=t);var t}));var t=e.O();_N_E=t}]);