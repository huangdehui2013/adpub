


env = {
    wifi: true
}

var api_chelaile = {
    sdkname: function() {
        return 'api_chelaile'
    },

    adurl_ios: function() {
        return {
            type:"banner",
            url: 'https://api.chelaile.net.cn/adpub/adv!getRightTopAds.action',
            data:{
                ad_data : this.ad_data(),
                dataFormater:this.dataFormater
            }
        }
    },
    
    dataFormater : {
        parse:function(data) {
            var array = data.split("YGKJ");
            if (array.length < 2) {
                return null;
            }
            data = array[1];
            if (typeof data == 'string')
                data = eval("a=" + data);
            var rows = data.jsonr.data.ads;
            console.log("rows="+rows);
            return rows;
        }
    },
    
    
    filter_ios: function(list) {
        if(Array.isArray(list) && list.length > 0) {
            var info = list[list.length - 1].info;
            info.is_backup = 0;
            if(list.length > 1) {
                info.is_backup = 1;
            }
            info.adid = info.id;
            info.picsList = [info.pic];
            list[list.length - 1].info = info;
            return [list[list.length - 1]];
        }
        return [];
    },
    
    aid : function () {
        return 'api_chelaile';
    },

    ad_data: function() {
        return '${API_CHELAILE_DATA}'
    }
}

// sdk taks ===================
// ææºè°ç¨sdk

var sdk_gdt = {

    sdkname: function() {
        return "sdk_gdt";
    },
    
    adurl_ios: function() {
        return {
            url: "GDTSDK",
            pos: "banner",
            data: {
                "appId":"1105595946",
                "placementId":"6040730401958055"
            }
        }
    },

    filter_ios : function(list) {
        return list;
    },

    aid : function () {
        return 'sdk_gdt';
    },
    
    adStyle : function() {
        return 2;
    }
}

var sdk_baidu = {

    sdkname: function() {
        return "sdk_baidu";
    },
    
    adurl_ios: function() {
        return {
            url: "BaiduSDK",
            pos: "banner",
            data: {
                "appId":"d654f7e6",
                "placementId":"5827199"
            }
        }
    },
    
    filter_ios : function(list) {
        return list;
    },

    aid : function () {
        return 'sdk_baidu';
    },
    
    adStyle : function() {
        return 2;
    }
}

var sdk_toutiao = {

    adurl_ios: function() {
        return {
            url: "TOUTIAOSDK",
            pos: "banner",
            data: {
                "appId":"5001451",
                "placementId":"900673291"
            }
        }
    },

    sdkname: function() {
        return "sdk_toutiao";
    },

    filter_ios : function(list) {
        return list;
    },
    
    aid : function () {
        return 'sdk_toutiao';
    },
    
    adStyle : function() {
        return 1;
    }
}

var sdk_ifly = {

    sdkname : function() {
        return "sdk_ifly";
    },
    
    adurl_ios : function() {
        return {
            url:"IFLYSDK",
            pos:"banner",
            data:{
                "appId":"5acf1d60",
                "placementId":"2EC979D4F845F81DD899B62F497E3F67"
            }
        }
    },

    filter_ios : function(list) {
        return list;
    },
    
    aid : function () {
        return 'sdk_ifly';
    },
    
    adStyle : function() {
        return 2;
    }
}

// 手机sdk inmobi
var sdk_inmobi = {

    sdkname : function() {
        return "sdk_inmobi";
    },

    adurl_ios : function() {
        return {
            url:"InMobiSdk",
            type:"banner",
            pos:"homecell",
            data:{
                "appId":"f83af5e921de42cf813dc475c362aaf0",
                "placementId":"1526909972727"
            }
        }
    },

    filter_ios : function(list) {
        return list;
    },

    aid : function () {
        return 'sdk_inmobi';
    },
    
    adStyle : function() {
        return 2;
    }
}


var sdk_adview = {

    sdkname : function() {
        return "sdk_adview";
    },

    adurl_ios : function() {
        return {
            url:"AdViewSDK",
            type:"banner",
            data:{
                "appId":"SDK20181709050815opfx8spc79j5ria",
                "placementId":"POSIDcrkjtwf591fr"
            }
        }
    },

    filter_ios : function(list) {
        return list;
    },

    aid : function () {
        return 'sdk_adview';
    },
    
    adStyle : function() {
        return 2;
    }
}


function ads() {

//var ads = [api_chelaile, sdk_inmobi, sdk_toutiao, sdk_gdt, sdk_voicead, sdk_baidu];
    return {
      traceInfo : {
          traceid: '${TRACEID}',
          pid: '23',
          jsid: '${JSID}'
      },
      closeInfo: {
          closePic: '${closePic}'
      },
        timeouts: ${TIMEOUTS},
        tasks: ${TASKS}
    }
}



var getAds = require('./fetch');
function loadAds(userdata, callback) {
    if(getAds) {
        getAds(ads(), userdata, callback);
    }
}
module.exports = loadAds;
