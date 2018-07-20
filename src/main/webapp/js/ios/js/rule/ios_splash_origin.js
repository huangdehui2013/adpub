
console.log('run js file splashAd.do');

var api_chelaile = {
    sdkname: function() {
        return 'api_chelaile'
    },

    adurl_ios: function() {
        return {
            type:"splash",
            url: 'https://api.chelaile.net.cn/adpub/adv!getCoopenAds.action?${QUERY_STRING}',
            data:{
                dataFormater:this.dataFormater
            }
        }
    },

    dataFormater : {
        parse:function(data) {
        
            data = '**YGKJ{"jsonr":{"data":{"mixInterval":5000,"unfoldFeed":1,"autoInterval":15000,"ads":[{"apiType":1,"clickMonitorLink":"","displayType":2,"head":"\u6DD8\u5B9D\u5929\u732B\u7701\u94B1\u8D2D","id":14454,"imgsType":0,"link":"https:\/\/ad.chelaile.net.cn\/?link=https%3A%2F%2Fweb.chelaile.net.cn%2Ftaobaoke%2Findex.html%3FandroidMb%3D1%26goId%3D365152786%26wtb%3D1%26wcb%3D0&advId=14454&adtype=22&udid=332f7a7d47b64d3aa477bb3d4af5b54761a66b31","monitorType":0,"openType":0,"pic":"https:\/\/image3.chelaile.net.cn\/e7fbfa9745cc4187930cf5f6667f1152#225,150","picsList":["https:\/\/image3.chelaile.net.cn\/e7fbfa9745cc4187930cf5f6667f1152#225,150"],"provider_id":"1","showType":22,"subhead":"\u60A8\u6709\u4E00\u5F20100\u5143\u5927\u989D\u5238\u5F85\u9886\u53D6\uFF0C\u70B9\u51FB\u67E5\u6536\uFF01","targetType":0,"type":1,"unfoldMonitorLink":""}],"debugLogOpen":0},"errmsg":"","status":"00","sversion":""}}YGKJ##';
            
            try{
                var array = data.split("YGKJ");
                if (array.length < 2) {
                    return null;
                }
                data = array[1];
                data = JSON.parse(data);
                if(data && data.jsonr && data.jsonr.data) {
                    var rows = data.jsonr.data.ads;
                    return rows;
                }
            } catch(e) {

            }
            return [];
        }
    },
    
    filter_ios: function(list) {
        if(Array.isArray(list) && list.length > 0) {
            var info = list[0].info;
            info.adid = "api_chelaile_test";
            list[0].info = info;
            return [list[0]];
        }
        return [];
    },

    aid : function () {
        return 'chelaile';
    }
}

// sdk
var sdk_gdt = {

    adurl_ios: function() {
        return {
            url: "GDTSDK",
            pos: "splash",
            data: {
                appId: "1105595946",
                placementId: "5050032383403340"
            }
        }
    },

    sdkname: function() {
        return "sdk_gdt";
    },

    filter_ios: function(list) {
        if(Array.isArray(list) && list.length > 0) {
            var info = list[0].info;
            info.adid = "sdk_gdt_test";
            info.isDisplay = 0;
            info.isSkip = 0;
            info.duration = 5;
            list[0].info = info;
            return [list[0]];
        }
        return [];
    },

    aid : function () {
        return 'sdk_gdt';
    }
}


var sdk_baidu = {

    adurl_ios: function() {
        return {
            url: "BaiduSDK",
            pos: "splash",
            data: {
                appId: "d654f7e6",
                placementId: "5826162"
            }
        }
    },

    sdkname: function() {
        return "sdk_baidu";
    },

    filter_ios: function(list) {
        if(Array.isArray(list) && list.length > 0) {
            var info = list[0].info;
            info.adid = "sdk_baidu_test";
            info.isDisplay = 0;
            info.isSkip = 0;
            info.duration = 5;
            list[0].info = info;
            return [list[0]];
        }
        return [];
    },

    aid : function () {
        return 'sdk_baidu';
    }
}

var sdk_toutiao = {

    adurl_ios: function() {
        return {
            url: "TOUTIAOSDK",
            pos: "splash",
            data: {
                "appId":"5001451",
                "placementId":"801451568"
            }
        }
    },

    sdkname: function() {
        return "sdk_toutiao";
    },

    filter_ios: function(list) {
        if(Array.isArray(list) && list.length > 0) {
            var info = list[0].info;
            info.adid = "sdk_toutiao_test";
            info.isDisplay = 0;
            info.isSkip = 0;
            info.duration = 5;
            list[0].info = info;
            return [list[0]];
        }
        return [];
    },

    aid : function () {
        return 'sdk_toutiao';
    }
}

var sdk_inmobi = {

    sdkname : function() {
        return "sdk_inmobi";
    },

    adurl_ios : function() {
        return {
            url:"InMobiSdk",
            type:"splash",
            data:{
                "appId":"f83af5e921de42cf813dc475c362aaf0",
                "placementId":"1522609003688"
            }
        }
    },
    
    filter_ios: function(list) {
        if(Array.isArray(list) && list.length > 0) {
            var info = list[0].info;
            info.adid = "sdk_inmobi_test";
            info.isDisplay = 0;
            info.isSkip = 0;
            info.duration = 5;
            list[0].info = info;
            return [list[0]];
        }
        return [];
    },
    
    aid : function () {
        return 'sdk_inmobi';
    },
    
    adStyle : function() {
        return 2;
    }
}

var sdk_voicead = {

    sdkname : function() {
        return "sdk_voicead";
    },
    
    adurl_ios : function() {
        return {
            url:"IFLYSDK",
            pos:"banner",
            data:{
                "appId":"5acf1d60",
                "placementId":"46232AB17BDA70BED71794AD4915D12A"
            }
        }
    },

    filter_ios: function(list) {
        if(Array.isArray(list) && list.length > 0) {
            var info = list[0].info;
            info.adid = "sdk_ifly_test";
            info.isDisplay = 0;
            info.isSkip = 0;
            info.duration = 5;
            list[0].info = info;
            return [list[0]];
        }
        return [];
    },
    
    aid : function () {
        return 'sdk_voicead';
    }
}

function ads() {

//var ads = [api_chelaile, sdk_inmobi, sdk_toutiao, sdk_gdt, sdk_voicead, sdk_baidu];
    return {
      traceInfo : {
          traceid: '${TRACEID}',
          pid: '04'
      },
        timeouts: ${TIMEOUTS},
        tasks: ${TASKS}
    }
}
console.log('splash loaded');

var getAds = require('./fetch');
function loadAds(userdata, callback) {
    if(getAds) {
        getAds(ads(), userdata, callback);
    }
}
module.exports = loadAds;

 
