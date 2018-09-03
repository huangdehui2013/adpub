"use strict";var _typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};String.prototype.contains=String.prototype.contains||function(e){return 0<=this.indexOf(e)},String.prototype.startsWith=String.prototype.startsWith||function(e){return 0===this.indexOf(e)},String.prototype.endsWith=String.prototype.endsWith||function(e){return 0<=this.indexOf(e,this.length-e.length)},function(i){var o={},s=i.require;i.require=function(e,t,a){try{var r,n=e;return n.startsWith("./")&&(n=n.slice(2)),n.endsWith(".do")||(n+=".do"),t||a?r=s.apply(this,arguments):"function"!=typeof(r=o[n])&&(r=s.apply(this,arguments),o[n]=r),r?r(i):function(){}}catch(e){throw console.log("e="+e),delete o[n],e}},i.AddModule=function(e,t){o[e]=t},function(e){function c(e,t){var a=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(a>>16)<<16|65535&a}function s(e,t,a,r,n,i){return c((o=c(c(t,e),c(r,i)))<<(s=n)|o>>>32-s,a);var o,s}function f(e,t,a,r,n,i,o){return s(t&a|~t&r,e,t,n,i,o)}function p(e,t,a,r,n,i,o){return s(t&r|a&~r,e,t,n,i,o)}function h(e,t,a,r,n,i,o){return s(t^a^r,e,t,n,i,o)}function k(e,t,a,r,n,i,o){return s(a^(t|~r),e,t,n,i,o)}function d(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;var a,r,n,i,o,s=1732584193,d=-271733879,l=-1732584194,u=271733878;for(a=0;a<e.length;a+=16)d=k(d=k(d=k(d=k(d=h(d=h(d=h(d=h(d=p(d=p(d=p(d=p(d=f(d=f(d=f(d=f(n=d,l=f(i=l,u=f(o=u,s=f(r=s,d,l,u,e[a],7,-680876936),d,l,e[a+1],12,-389564586),s,d,e[a+2],17,606105819),u,s,e[a+3],22,-1044525330),l=f(l,u=f(u,s=f(s,d,l,u,e[a+4],7,-176418897),d,l,e[a+5],12,1200080426),s,d,e[a+6],17,-1473231341),u,s,e[a+7],22,-45705983),l=f(l,u=f(u,s=f(s,d,l,u,e[a+8],7,1770035416),d,l,e[a+9],12,-1958414417),s,d,e[a+10],17,-42063),u,s,e[a+11],22,-1990404162),l=f(l,u=f(u,s=f(s,d,l,u,e[a+12],7,1804603682),d,l,e[a+13],12,-40341101),s,d,e[a+14],17,-1502002290),u,s,e[a+15],22,1236535329),l=p(l,u=p(u,s=p(s,d,l,u,e[a+1],5,-165796510),d,l,e[a+6],9,-1069501632),s,d,e[a+11],14,643717713),u,s,e[a],20,-373897302),l=p(l,u=p(u,s=p(s,d,l,u,e[a+5],5,-701558691),d,l,e[a+10],9,38016083),s,d,e[a+15],14,-660478335),u,s,e[a+4],20,-405537848),l=p(l,u=p(u,s=p(s,d,l,u,e[a+9],5,568446438),d,l,e[a+14],9,-1019803690),s,d,e[a+3],14,-187363961),u,s,e[a+8],20,1163531501),l=p(l,u=p(u,s=p(s,d,l,u,e[a+13],5,-1444681467),d,l,e[a+2],9,-51403784),s,d,e[a+7],14,1735328473),u,s,e[a+12],20,-1926607734),l=h(l,u=h(u,s=h(s,d,l,u,e[a+5],4,-378558),d,l,e[a+8],11,-2022574463),s,d,e[a+11],16,1839030562),u,s,e[a+14],23,-35309556),l=h(l,u=h(u,s=h(s,d,l,u,e[a+1],4,-1530992060),d,l,e[a+4],11,1272893353),s,d,e[a+7],16,-155497632),u,s,e[a+10],23,-1094730640),l=h(l,u=h(u,s=h(s,d,l,u,e[a+13],4,681279174),d,l,e[a],11,-358537222),s,d,e[a+3],16,-722521979),u,s,e[a+6],23,76029189),l=h(l,u=h(u,s=h(s,d,l,u,e[a+9],4,-640364487),d,l,e[a+12],11,-421815835),s,d,e[a+15],16,530742520),u,s,e[a+2],23,-995338651),l=k(l,u=k(u,s=k(s,d,l,u,e[a],6,-198630844),d,l,e[a+7],10,1126891415),s,d,e[a+14],15,-1416354905),u,s,e[a+5],21,-57434055),l=k(l,u=k(u,s=k(s,d,l,u,e[a+12],6,1700485571),d,l,e[a+3],10,-1894986606),s,d,e[a+10],15,-1051523),u,s,e[a+1],21,-2054922799),l=k(l,u=k(u,s=k(s,d,l,u,e[a+8],6,1873313359),d,l,e[a+15],10,-30611744),s,d,e[a+6],15,-1560198380),u,s,e[a+13],21,1309151649),l=k(l,u=k(u,s=k(s,d,l,u,e[a+4],6,-145523070),d,l,e[a+11],10,-1120210379),s,d,e[a+2],15,718787259),u,s,e[a+9],21,-343485551),s=c(s,r),d=c(d,n),l=c(l,i),u=c(u,o);return[s,d,l,u]}function l(e){var t,a="",r=32*e.length;for(t=0;t<r;t+=8)a+=String.fromCharCode(e[t>>5]>>>t%32&255);return a}function u(e){var t,a=[];for(a[(e.length>>2)-1]=void 0,t=0;t<a.length;t+=1)a[t]=0;var r=8*e.length;for(t=0;t<r;t+=8)a[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return a}function r(e){var t,a,r="";for(a=0;a<e.length;a+=1)t=e.charCodeAt(a),r+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return r}function a(e){return unescape(encodeURIComponent(e))}function n(e){return l(d(u(t=a(e)),8*t.length));var t}function i(e,t){return function(e,t){var a,r,n=u(e),i=[],o=[];for(i[15]=o[15]=void 0,16<n.length&&(n=d(n,8*e.length)),a=0;a<16;a+=1)i[a]=909522486^n[a],o[a]=1549556828^n[a];return r=d(i.concat(u(t)),512+8*t.length),l(d(o.concat(r),640))}(a(e),a(t))}function t(e,t,a){return t?a?i(t,e):r(i(t,e)):a?n(e):r(n(e))}"function"==typeof define&&define.amd?define(function(){return t}):e.md5=t}(i),i.JsEncryptUtil={},i.JsEncryptUtil.md5=i.md5,i.GetDeviceInfoObject=function(){var e=GetDeviceInfo(),a={};if(e){var t=e.split("&");t&&t.length&&t.forEach(function(e){var t=e.split("=");t[0]&&t[1]&&(a[t[0]]=t[1])})}return a},i.RuleMap={CLLHomeViewController:"interstitialHomeAd",CLLTransferMainViewController:"interstitialTransitAd",CLLEnergyMainViewController:"interstitialEnergyAd",CLLMoreMainViewController:"interstitialMineAd"},i.RuleCountMap={interstitialHomeAd:1,interstitialTransitAd:1,interstitialEnergyAd:1,interstitialMineAd:1}}(global),global.AddModule("event.do",function(e){var y={};return e=e||this,exports={},y.exports=exports,function(e,t,a){var o,n="https://atrace.chelaile.net.cn/thirdSimple",s="https://atrace.chelaile.net.cn/thirdPartyResponse";if("function"==typeof GetConfig){var r=GetConfig();o="dev"==r.server?"https://dev.chelaile.net.cn/adpub/adv!closeAd.action":"stage"==r.server?"https://stage.chelaile.net.cn/adpub/adv!closeAd.action":"https://api.chelaile.net.cn/adpub/adv!closeAd.action"}function d(e,t,a){var r=function(e,t){var a="",r="",n="";if(0<=e.indexOf("#")){var i=e.split("#");a=0<=i[0].indexOf("?")?i[0]+"&":i[0]+"?",r="#"+i.slice(1).join("#")}else a=0<=e.indexOf("?")?e+"&":e+"?";for(var o in t)n+="&"+o+"="+encodeURIComponent(t[o]);return a+n+r}(e,t);null!=a&&null!=a&&"string"!=typeof a&&(a=JSON.stringify(a)),a?Http.post(r,null,a,5e3,function(e,t,a){console.log("sendTrackRequest ret="+e+" response.header="+JSON.stringify(OCValueForKey(t,"allHeaderFields"))+" error="+a)}):Http.get(r,null,5e3,function(e,t,a){console.log("sendTrackRequest ret="+e+" response.header="+JSON.stringify(OCValueForKey(t,"allHeaderFields"))+" error="+a)})}function l(e,t,a){null!=a&&null!=a&&(e[t]=a)}function u(e,t){var a={},r=t.info||{},n=e.traceInfo||{},i=GetDeviceInfoObject()||{};return l(a,"traceid",n.traceid),l(a,"pid",n.pid),l(a,"aid",e.aid),l(a,"ad_order",r.ad_order),l(a,"adid",r.adid),l(a,"startMode",r.startMode),l(a,"stats_act",r.stats_act),l(a,"viewstatus",t.viewstatus),l(a,"req_timestamp",+new Date),l(a,"s",i.s),l(a,"v",i.v),l(a,"is_backup",r.is_backup||0),a}function i(e,t){var a=u(e,t),r=t.info||{};e.traceInfo;if(l(a,"show_status",r.show_status||0),l(a,"cost_time",r.cost_time),l(a,"adv_title",r.head),l(a,"adv_desc",r.subhead),d("https://atrace.chelaile.net.cn/exhibit",a),r.unfoldMonitorLink&&r.actionMonitorLink){var n=r.actionMonitorLink.replace("{action}","5"),i=+new Date+"";i=String(i).slice(0,-3),n=(n=n.replace("{time}",i)).replace("{play_time}","0"),d(r.unfoldMonitorLink,{}),d(n,{})}}function c(e,t){var a=u(e,t),r=t.info||{};e.traceInfo;if(l(a,"adv_title",r.head),l(a,"adv_desc",r.subhead),l(a,"isFakeClick",r.isFakeClick||0),l(a,"isRateClick",r.isRateClick||0),d("https://atrace.chelaile.net.cn/click",a),r.actionMonitorLink){var n=r.actionMonitorLink.replace("{action}","6"),i=+new Date+"";i=String(i).slice(0,-3),d(n=(n=n.replace("{time}",i)).replace("{play_time}","0"),{})}r.clickMonitorLink&&d(r.clickMonitorLink,{})}function f(e,t){d("https://atrace.chelaile.net.cn/close",u(e,t));var a=t.info||{};if(a.isSplash||a.isFloat){if(a.actionMonitorLink){var r=a.actionMonitorLink.replace("{action}","7"),n=+new Date+"";n=String(n).slice(0,-3),d(r=(r=r.replace("{time}",n)).replace("{play_time}","0"),{})}}else!function(e,t){if(o){var a=u(e,t),r=t.info||{},n=(e.traceInfo,r.picsList),i="";n&&n.length&&(i=n.join(";")),l(a,"adv_title",r.head),l(a,"adv_image",i),d(o+"?"+GetDeviceInfo(),a)}}(e,t)}function p(e){var t={},a=(e=e||{}).task||{},r=e.rule||{},n=e.userdata||{},i=GetDeviceInfoObject()||{};return r.traceInfo&&(l(t,"traceid",r.traceInfo.traceid),l(t,"pid",r.traceInfo.pid)),a.aid&&l(t,"aid",a.aid()),l(t,"req_timestamp",+new Date),l(t,"eventId",n.uniReqId),l(t,"s",i.s),l(t,"v",i.v),t}function h(e){var t=p(e),a=((e=e||{}).task,e.rule,e.data||{}),r=function(e){if(e&&e.adEntityArray&&0<e.adEntityArray.length)return e.adEntityArray[0].info}(a),n=r||{};l(t,"ad_order",n.ad_order),l(t,"adid",n.adid),l(t,"req_time",(a.sdk&&a.sdk.didReqTime||0)-(a.sdk&&a.sdk.willReqTime||0)),l(t,"ad_status",r?1:0),l(t,"resp_size",a.contentLength),e.error?l(t,"code",e.error):l(t,"code",OCValueForKey(a.extensionData,"statusCode"));var i={};l(i,"adv_title",n.head),l(i,"adv_desc",n.subhead),l(i,"icon_image",n.pic),l(i,"main_image",n.picsList),l(i,"link",n.link),l(i,"url_type",n.adType),d(s,t,i)}function k(e,t,a){var r;console.log("trackEvent eventId="+e+" eventType="+t+" params="+JSON.stringify(a||{})),t==TrackClass.Type.LoadSplash||t==TrackClass.Type.LoadBanner?(r=p(a),d(n,r)):t==TrackClass.Type.LoadedSplash||t==TrackClass.Type.LoadedBanner?h(a):t!=TrackClass.Type.FailedSplash&&t!=TrackClass.Type.FailedBanner||h(a)}a.trackEvent=k,y.exports={trackExhibit:i,trackClick:c,trackClose:f,trackEvent:k},a.TrackClass={trackExhibit:i,trackClick:c,trackClose:f,trackEvent:k,Type:{LoadSplash:"LoadSplash",LoadBanner:"LoadBanner",LoadedSplash:"LoadedSplash",LoadedBanner:"LoadedBanner",FailedSplash:"FailedSplash",FailedBanner:"FailedBanner",AllAdTimeout:"AllAdTimeout",FetchedAd:"FetchedAd",NoDataLastGroup:"NoDataLastGroup"}}}(0,exports,e),y.exports}),global.AddModule("fetch.do",function(e){var o={};return e=e||this,exports={},o.exports=exports,function(e,t,a){var n="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(e){return void 0===e?"undefined":_typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":_typeof2(e)};var r={};function i(e){var a=[];return(e=e||[]).forEach(function(e){var t=function(e){var t=r["sdk"];if(!t){try{t=require("sdks/"+"sdk")}catch(e){console.log(e)}t&&(r.sdk=t)}return t}(e.sdkname());t&&a.push({task:e,sdk:t})}),a}var f=1e3,p=2e3;function h(){return(new Date).getTime()}o.exports=function(t,e,a){if(!t)return a(null);Array.isArray(t.timeouts)&&(f=t.timeouts[0]||f,p=t.timeouts[1]||p);var r=function(e){e&&"object"==(void 0===e?"undefined":n(e))&&e.sdk&&(e.sdk.refreshTime=15e3,e.sdk.traceInfo=t.traceInfo,e.sdk.mixRefreshAdInterval=5e3,e.sdk.maxSplashTimeout=8e3,e.sdk.warmSplashIntervalTime=18e5,t&&t.traceInfo&&"22"==t.traceInfo.pid&&(e.sdk.refreshTime=2e4,e.sdk.mixRefreshAdInterval=1e4)),a(e)};r.userdata=e,!t.tasks||t.tasks.length<=0?a(null):function t(o,a,s){var r=o.tasks;function d(e){return e?(TrackClass.trackEvent(s.userdata.uniReqId,TrackClass.Type.FetchedAd,{data:e,rule:o,userdata:s.userdata}),s(e)):a==r.length-1?(TrackClass.trackEvent(s.userdata.uniReqId,TrackClass.Type.NoDataLastGroup,{rule:o,userdata:s.userdata}),s(null)):void t(o,a+1,s)}function l(a){n&&clearInterval(n),c.forEach(function(e,t){t!==a&&e.sdk.stop2&&e.sdk.stop2(e.task)})}function e(){var e=h()-u;if(f+p<e)return TrackClass.trackEvent(s.userdata.uniReqId,TrackClass.Type.AllAdTimeout,{used:e,rule:o,userdata:s.userdata}),l(),void d(null);for(var t,a,r=0,n=0,i=0;i<c.length;i++)if(t=c[i],null!=(a=t._result)&&(r++,a[0]&&(n++,f<e||0==i)))return l(i),void d(a[0]);r>=c.length&&(0==n?(console.log("All finish without any succeed."),l(),d(null)):(l(),0<minIndex&&minIndex<c.length-1&&(t=c[minIndex],d((a=t._result)[0]))))}e._count=0;var u=h(),c=i(r[a]);c.forEach(function(t){var e=t.task.adurl_ios();console.log("try sdk: "+e.url),t.sdk.load(t.task,o,s.userdata,f+p,function(e){console.log("uniReqId="+s.userdata.uniReqId+" data comes "+e),t._result=[e]})});var n=setInterval(e,50)}(t,0,r)}}(0,exports),o.exports}),global.AddModule("sdks/sdk.do",function(global){var module={};return global=global||this,exports={},module.exports=exports,function(moudle,exports,global){var RENDER_MSG="render_ok";function getCloseLayout(){return{class:"RelativeLayout",layout_width:"match_parent",layout_height:"match_parent",background:"@color/clear",children:[{class:"RelativeLayout",layout_width:"wrap_content",layout_height:"wrap_content",children:[{class:"ImageView",id:"bannericon",layout_width:"24dp",layout_height:"24dp",action:"@selector/clickAdvertise:event:",clickable:"true"},{class:"RelativeLayout",layout_width:"24dp",layout_height:"24dp",layout_centerInParent:"true",action:"@selector/closeAdvertise:",clickable:"true"}]}]}}function loadHttpPost(e,t,a,r,n){Http.post(e,t,a,r,function(e,t,a){n(e,t,a)})}function loadThirdPostApiIfNeed(n,e,i,o){var t=!1;if(i&&i.adEntityArray&&i.adEntityArray.length&&n.data&&n.data.ad_data&&"AsyncPostData"==n.data.ad_data){var a="";n.data.postData&&(a=JSON.stringify(n.data.postData)),t=!0,i.adEntityArray[0].info=void 0,loadHttpPost(n.data.placementId,null,a,e,function(e,t,a){if(n.data.dataFormater&&n.data.dataFormater.parse&&e){var r=n.data.dataFormater.parse(e);r&&r.length?(i.sdk&&(i.sdk.finishedReqTime=+new Date,i.sdk.didReqTime=+new Date),i.adEntityArray[0].info=r[0],o()):o("-90003")}else o(OCValueForKey(a,"code"))})}t||o()}function load(task,rule,userdata,fetchTimeout,callback){var sdknameMap={GDTSDK:"CLLGdtSdk",BaiduSDK:"CLLBaiduSdk",TOUTIAOSDK:"CLLTTSdk",IFLYSDK:"CLLIflySdk",InMobiSdk:"CLLInMobiSdk",AdViewSDK:"CLLAdViewSdk"},requestInfo=task.adurl_ios();requestInfo.url&&0==requestInfo.url.toLowerCase().indexOf("http")?(requestInfo.data=requestInfo.data||{},requestInfo.data.placementId=requestInfo.url,requestInfo.url="CLLAdApi"):requestInfo.url&&sdknameMap[requestInfo.url]&&(requestInfo.url=sdknameMap[requestInfo.url]);var vendor=requestInfo.url,sdkIns=newInstance(requestInfo.url);if(!sdkIns)return callback(null);if(requestInfo.type=requestInfo.type||requestInfo.pos,"splash"==requestInfo.type)TrackClass.trackEvent(userdata.uniReqId,TrackClass.Type.LoadSplash,{userdata:userdata,rule:rule,task:task}),sdkIns.loadSplash(requestInfo.data,userdata,fetchTimeout,function(r){loadThirdPostApiIfNeed(requestInfo,fetchTimeout,r,function(e){if(e)return TrackClass.trackEvent(userdata.uniReqId,TrackClass.Type.FailedSplash,{error:e,des:""+e,userdata:userdata,data:r,rule:rule,task:task}),void callback(null);try{task.aid&&r.sdk&&(r.sdk.aid=task.aid());var t=task.filter_ios;if(t&&r&&(r.adEntityArray=t(r.adEntityArray)),console.log("1info info = "+a),userdata&&r.adEntityArray&&0<r.adEntityArray.length){var a=r.adEntityArray[0].info;userdata.startMode&&(a.startMode=userdata.startMode),console.log("info info = "+a),a.isSplash=!0,1==a.provider_id||a.link||(a.targetType=1),r.adEntityArray[0].info=a}TrackClass.trackEvent(userdata.uniReqId,TrackClass.Type.LoadedSplash,{data:r,userdata:userdata,rule:rule,task:task}),callback(r)}catch(e){TrackClass.trackEvent(userdata.uniReqId,TrackClass.Type.FailedSplash,{error:"-91000",des:""+e,requestInfo:requestInfo,userdata:userdata,rule:rule,task:task}),callback(null)}})},function(e){e=e||"-90000",TrackClass.trackEvent(userdata.uniReqId,TrackClass.Type.FailedSplash,{error:e,requestInfo:requestInfo,userdata:userdata,rule:rule,task:task}),callback(null)});else if("banner"==requestInfo.type){if(TrackClass.trackEvent(userdata.uniReqId,TrackClass.Type.LoadBanner,{userdata:userdata,rule:rule,task:task}),task.adStyle){var style=task.adStyle(),sizeObj={1:{showWidth:180,showHeight:88},2:{showWidth:96,showHeight:64},5:{showWidth:96,showHeight:64}},showSize=sizeObj[style+""];showSize&&(userdata.showWidth=showSize.showWidth,userdata.showHeight=showSize.showHeight)}sdkIns.loadBanner(requestInfo.data,userdata,fetchTimeout,function(data){function callResult(errorCode){if(errorCode)return TrackClass.trackEvent(userdata.uniReqId,TrackClass.Type.FailedBanner,{error:errorCode,des:""+errorCode,userdata:userdata,data:data,rule:rule,task:task}),void callback(null);try{task.aid&&data.sdk&&(data.sdk.aid=task.aid());var task_filter=task.filter_ios;if(task_filter&&data&&(data.adEntityArray=task_filter(data.adEntityArray)),data&&data.adEntityArray)for(var closePic=rule&&rule.closeInfo&&rule.closeInfo.closePic,hostSpotSize=rule&&rule.closeInfo&&rule.closeInfo.hostSpotSize,fakeRate=rule&&rule.closeInfo&&rule.closeInfo.fakeRate,i=0;i<data.adEntityArray.length;i++){var adentity=data.adEntityArray[i],info=adentity.info;if(info){if(closePic&&(info.closePic=closePic,info.isDisplay=1,info.isSkip=1,info.hostSpotSize=hostSpotSize,info.fakeRate=eval(fakeRate)),task.adStyle&&(info.displayType=""==task.adStyle()?2:parseInt(task.adStyle())),info.displayType&&(info.displayType=parseInt(info.displayType)),info.head=info.head||"",info.subhead=info.subhead||"",info.stats_act=userdata.stats_act,info.head.length>info.subhead.length){var tstr=info.subhead;info.subhead=info.head,info.head=tstr}if(userdata.startMode&&(info.startMode=userdata.startMode,info.isSplash=!0,1==info.provider_id||info.link||(info.targetType=1)),info.closePic){info.layout=getCloseLayout();var imageView=info.layout.children[0].children[0];imageView.url=info.closePic;var imageViewParant=info.layout.children[0];switch(info.displayType){case 1:imageViewParant.layout_alignParentRight="true",imageViewParant.layout_alignParentBottom="true",imageViewParant.layout_marginBottom="8dp";var object=GetDeviceInfoObject();640<object.screenWidth?imageViewParant.layout_marginRight="192dp":imageViewParant.layout_marginRight="165dp";break;case 2:case 5:imageViewParant.layout_alignParentRight="true",imageViewParant.layout_alignParentBottom="true",imageViewParant.layout_marginBottom="8dp",imageViewParant.layout_marginRight="120dp";break;case 3:case 4:imageViewParant.layout_alignParentRight="true",imageViewParant.layout_marginTop="8dp",imageViewParant.layout_marginRight="8dp"}var btn=info.layout.children[0].children[1];0<=eval(info.hostSpotSize)&&eval(info.hostSpotSize)<=24&&(btn.layout_width=info.hostSpotSize+"dp",btn.layout_height=info.hostSpotSize+"dp")}adentity.info=info}}TrackClass.trackEvent(userdata.uniReqId,TrackClass.Type.LoadedBanner,{userdata:userdata,data:data,rule:rule,task:task}),callback(data)}catch(e){TrackClass.trackEvent(userdata.uniReqId,TrackClass.Type.FailedBanner,{error:"-91001",des:""+e,userdata:userdata,data:data,rule:rule,task:task}),callback(null)}}loadThirdPostApiIfNeed(requestInfo,fetchTimeout,data,callResult)},function(e,t,a){e=e||"-90001",TrackClass.trackEvent(userdata.uniReqId,TrackClass.Type.FailedBanner,{error:e,requestInfo:requestInfo,userdata:userdata,data:t,rule:rule,task:task}),callback(null)})}}function stop2(e){e.adurl_ios().url}module.exports={load:load,stop2:stop2}}(module,exports,global),module.exports}),require("./event");