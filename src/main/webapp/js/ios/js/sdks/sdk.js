"use strict";

var RENDER_MSG = 'render_ok';

function loadHttpPost(reqUrl, header, postData, fetchTimeout, callback) {
    Http.post(reqUrl, header, postData, fetchTimeout, function (string, response, error) {
        callback(string, response, error);
    });
}

function loadThirdPostApiIfNeed(requestInfo, fetchTimeout, data, callResult) {
    var hasCalled = false;
    if(data && data.adEntityArray && data.adEntityArray.length)
    {
        if(requestInfo.data && requestInfo.data.ad_data){
            if(requestInfo.data.ad_data == "AsyncPostData") {
                var postString = "";
                if(requestInfo.data.postData){
                    postString = JSON.stringify(requestInfo.data.postData);
                }
                hasCalled = true;
                data.adEntityArray[0].info = undefined;
                loadHttpPost(requestInfo.data.placementId, null, postString, fetchTimeout, function(string, response, error){
                    if(requestInfo.data.dataFormater && requestInfo.data.dataFormater.parse && string) {
                        var arr = requestInfo.data.dataFormater.parse(string);
                        if(arr && arr.length){
                            if(data.sdk){
                                data.sdk.finishedReqTime = +new Date;
                                data.sdk.didReqTime = +new Date;
                            }
                            data.adEntityArray[0].info = arr[0];
                        } else {
                            callResult("-90003");
                        }
                    } else {
                        callResult(OCValueForKey(error, "code"));
                    }
                });
            }
        }
    }
    if(!hasCalled) {
        callResult();
    }
}

function load(task, rule, userdata, fetchTimeout, callback) {

    var sdknameMap = {
        "GDTSDK": "CLLGdtSdk",
        "BaiduSDK": "CLLBaiduSdk",
        "TOUTIAOSDK": "CLLTTSdk",
        "IFLYSDK": "CLLIflySdk",
        "InMobiSdk": "CLLInMobiSdk"
    };
    var requestInfo = task.adurl_ios();
    if (requestInfo.url && requestInfo.url.toLowerCase().indexOf("http") == 0) {
        requestInfo.data = requestInfo.data || {};
        requestInfo.data.placementId = requestInfo.url;
        requestInfo.url = "CLLAdApi";
    } else if (requestInfo.url && sdknameMap[requestInfo.url]) {
        requestInfo.url = sdknameMap[requestInfo.url];
    }

    var vendor = requestInfo.url;
    var sdkIns = newInstance(requestInfo.url);
    if (!sdkIns) {
        return callback(null);
    }

    requestInfo.type = requestInfo.type || requestInfo.pos;
    if (requestInfo.type == "splash") {

        TrackClass.trackEvent(userdata.uniReqId, TrackClass.Type.LoadSplash, { userdata: userdata, rule: rule, task: task });

        sdkIns.loadSplash(requestInfo.data, userdata, fetchTimeout, function (data) {

            function callResult(errorCode) {
                if(errorCode) {
                    TrackClass.trackEvent(userdata.uniReqId, TrackClass.Type.FailedSplash, { error: errorCode, des: "" + e, userdata: userdata, data: data, rule: rule, task: task });
                    callback(null);
                    return;
                }
                try {
                    if (task.aid && data.sdk) {
                        data.sdk.aid = task.aid();
                    }

                    var task_filter = task.filter_ios;
                    if (task_filter && data) {
                        data.adEntityArray = task_filter(data.adEntityArray);
                    }

                    if (userdata && userdata.startMode && data.adEntityArray && data.adEntityArray.length > 0) {
                        var info = data.adEntityArray[0].info;
                        info.startMode = userdata.startMode;
                        data.adEntityArray[0].info = info;
                    }
                    TrackClass.trackEvent(userdata.uniReqId, TrackClass.Type.LoadedSplash, { data: data, userdata: userdata, rule: rule, task: task });
                    callback(data);
                } catch (e) {
                    TrackClass.trackEvent(userdata.uniReqId, TrackClass.Type.FailedSplash, { error: "-91000", des: "" + e, requestInfo: requestInfo, userdata: userdata, rule: rule, task: task });
                    callback(null);
                }
            }
            loadThirdPostApiIfNeed(requestInfo, fetchTimeout, data, callResult);

        }, function (error) {
            error = error || "-90000";
            TrackClass.trackEvent(userdata.uniReqId, TrackClass.Type.FailedSplash, { error: error, requestInfo: requestInfo, userdata: userdata, rule: rule, task: task });
            callback(null);
        });
    } else if (requestInfo.type == "banner") {

        TrackClass.trackEvent(userdata.uniReqId, TrackClass.Type.LoadBanner, { userdata: userdata, rule: rule, task: task });

        if (task.adStyle) {
            var style = task.adStyle();
            var sizeObj = {
                "1": { showWidth: 180, showHeight: 88 },
                "2": { showWidth: 96, showHeight: 64 },
                "5": { showWidth: 96, showHeight: 64 }
            };
            var showSize = sizeObj[style + ""];
            if (showSize) {
                userdata.showWidth = showSize.showWidth;
                userdata.showHeight = showSize.showHeight;
            }
        }
        sdkIns.loadBanner(requestInfo.data, userdata, fetchTimeout, function (data) {
            function callResult(errorCode) {
                if(errorCode) {
                    TrackClass.trackEvent(userdata.uniReqId, TrackClass.Type.FailedBanner, { error: errorCode, des: "" + e, userdata: userdata, data: data, rule: rule, task: task });
                    callback(null);
                    return;
                }
                try {
                    if (task.aid && data.sdk) {
                        data.sdk.aid = task.aid();
                    }

                    if (data && data.adEntityArray) {
                        var closePic = rule && rule.closeInfo && rule.closeInfo.closePic;

                        for (var i = 0; i < data.adEntityArray.length; i++) {
                            var adentity = data.adEntityArray[i];
                            var info = adentity.info;
                            if (info) {
                                if(closePic)
                                    info.closePic = closePic;
                                if (task.adStyle) {
                                    info.displayType = task.adStyle() == '' ? 2 : parseInt(task.adStyle());
                                }
                                if(info.displayType) {
                                    info.displayType = parseInt(info.displayType);
                                }
                                
                                info.head = info.head || "";
                                info.subhead = info.subhead || "";
                                info.stats_act = userdata.stats_act;
                                if (info.head.length > info.subhead.length) {
                                    var tstr = info.subhead;
                                    info.subhead = info.head;
                                    info.head = tstr;
                                }
                                adentity.info = info;
                            }
                        }
                    }

                    var task_filter = task.filter_ios;
                    if (task_filter && data) {
                        data.adEntityArray = task_filter(data.adEntityArray);
                    }

                    TrackClass.trackEvent(userdata.uniReqId, TrackClass.Type.LoadedBanner, { userdata: userdata, data: data, rule: rule, task: task });
                    callback(data);

                } catch (e) {
                    TrackClass.trackEvent(userdata.uniReqId, TrackClass.Type.FailedBanner, { error: "-91001", des: "" + e, userdata: userdata, data: data, rule: rule, task: task });
                    callback(null);
                }
            }
            loadThirdPostApiIfNeed(requestInfo, fetchTimeout, data, callResult);

        }, function (error, data, extension) {
            error = error || "-90001";
            TrackClass.trackEvent(userdata.uniReqId, TrackClass.Type.FailedBanner, { error: error, requestInfo: requestInfo, userdata: userdata, data: data, rule: rule, task: task });
            callback(null);
        });
    }
}

function stop2(task) {
    var requestInfo = task.adurl_ios();
    var vendor = requestInfo.url;
}

module.exports = {
    load: load,
    stop2: stop2
};
