


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
            url: 'https://api.chelaile.net.cn/adpub/adv!getLineFeedAds.action?${QUERY_STRING}',
            data:{
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
            info.adid = info.id;
            list[list.length - 1].info = info;
            return [list[list.length - 1]];
        }
        return [];
    },
    
    aid : function () {
        return 'api_chelaile';
    }
}


var api_shunfei = {

	sdkname: function() {
	        return "api_chelaile";
	},

	adurl_ios: function() {
	    //var config = JsFixedConfig.getJsFixedConfig();
        var configInfoString = GetDeviceInfo();
        var configKVArray = configInfoString.split('&');
        var deviceInfo = {};
        configKVArray.forEach(function(itemString) {
            var itemArr = itemString.split('=');
            deviceInfo[itemArr[0]] = decodeURIComponent(itemArr[1]);
        });

        console.log('deviceInfo=' + JSON.stringify(deviceInfo));

	    //console.log("parseInt(deviceInfo.dct || '')=" + parseInt(deviceInfo.dct || ''));
	        var geolng = deviceInfo.geo_lng || '' ;
	        var geolat = deviceInfo.geo_lat || '';
	        var ts = (+new Date) + '';
	    
		
			ts = String(ts).slice(0,-3);
			 
            console.log("ts=" + ts);
				
			
	        var sv1 = deviceInfo.sv || '' + "";
			var sv = sv1.split(".");
	        var micro = 0;
	        if( sv.length == 3 ){
	        	micro = sv[2];
	        }
            
	        var net = deviceInfo.nw || '0G'; // network
            if (net=='WIFI') {
                net = 1;
            } else {
                net = parseInt(net.substring(1,2))
            }
			
			var sign = JsEncryptUtil.md5('177'+'zDczEwi)+(e1)6^YB)(s*WdPZy*Y0H6w'+ts)+'';
	        
	        var ret = {
	            url: 'http://i-mbv.biddingx.com/api/v1/bid',
	            data: {
	            	 "ip": '182.18.10.10',
	            	 "user_agent": deviceInfo.userAgent || ''+'',
	            	 "detected_time": parseInt(ts),
	            	 "time_zone": "+0800",
					 "detected_language": "en_",
					 
					 "geo": {
						"latitude":parseFloat(deviceInfo.geo_lat || ''+''), 
						"longitude":parseFloat(deviceInfo.geo_lng || ''+'') 
						},
	            	 
	            	 "mobile": {
	            		 "device_id": '',
	            		 "device_type":1,
	            		 "platform":1,
	            		 "os_version": {
	            			 "os_version_major": parseInt(sv[0]),
	            			 "os_version_minor": parseInt(sv[1]),
                             "os_version_micro": parseInt(micro)	 
	            			 },
	            		 
						 "brand":deviceInfo.vendor || ''+'',
						 "model":deviceInfo.deviceType || ''+'',
						 
	        	         "screen_width":parseInt(deviceInfo.screenWidth || ''+''),
	        	         "screen_height": parseInt(deviceInfo.screenHeight || ''+''),
	        	         "wireless_network_type":parseInt(net),
	        	         "for_advertising_id":deviceInfo.idfa || ''+'',
	        	         "mobile_app": {
	        	        	 "app_id":1987,
	        	        	 "sign":sign,
	        	        	 "app_bundle_id":'com.ygkj.chelaile.standard',
							 "first_launch": false
	        	         }
	            	 },
	            		 
	            	"adslot":[
	            			 {
	            				 "ad_block_key":1985,
	            				 "adslot_type":17,
	            				 "width":179,
	            			     "height":88
	            			 }
	            	],
	            	 
	            	 "api_version":"1.6",
	            	 "is_test":false,
	          
	            }
	        };
			
			var s = JSON.stringify(ret);
            var j = JSON.parse(s);
            //console.log("******** str " + s)
            //console.log("******** json " + j)
            return j;
    },

    dataFormater : {
        parse:function(data) {
            if('AsyncPostData' == data) {
                return [{"AsyncPostData":data}];
            }
            else {
                console.log('****' + JSON.stringify(data))
                if (typeof data == 'string')
	            data = eval("a=" + data);

	        var rows = data.batch_ma;
	        if (!rows || rows.length === 0)
	            return null;

	        for (var i = 0; i < rows.length; i++) {
	            var row = rows[i];

	            var ad = {
	                provider_id: '12',
	                ad_order: i,
	                adType: row.adType,
	                downloadType: row.download_type,
	                packageName: row.package_name,
	                head: row.title,
	                subhead: row.sub_title,
	                pic: row.image,
	                brandIcon: row.icon,
	                link: row.landing_url,
	                deepLink: row.deep_link,
	                unfoldMonitorLink: row.impr_url.join(";"),
	                clickMonitorLink: row.click_url.join(";"),
					picsList: row.img_urls
	            }
	            return [ad];
	        }
	        return [{}];
            }
        }
    },

    filter_ios: function(list) {
        return list;
    },

    aid : function () {
        return 'api_shunfei_2';
    },

    adStyle : function() {
        return "2";
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
                "placementId":"${sdk_gdt_placementId}"
            }
        }
    },

    filter_ios : function(list) {
        return list;
    },

    aid : function () {
        return 'sdk_gdt_${sdk_gdt_aid}';
    },
	
	adStyle : function() {
      return "${sdk_gdt_displayType}";
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
                "placementId":"${sdk_baidu_placementId}"
            }
        }
    },
    
    filter_ios : function(list) {
        return list;
    },

    aid : function () {
        return 'sdk_baidu_${sdk_baidu_aid}';
    },
	
	adStyle : function() {
      return "${sdk_baidu_displayType}";
    }
}

var sdk_toutiao = {

    adurl_ios: function() {
        return {
            url: "TOUTIAOSDK",
            pos: "banner",
            data: {
                "appId":"5001451",
                "placementId":"${sdk_toutiao_placementId}"
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
        return 'sdk_toutiao_${sdk_toutiao_aid}';
    },
	
	adStyle : function() {
      return "${sdk_toutiao_displayType}";
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
                "placementId":"${sdk_ifly_placementId}"
            }
        }
    },

    filter_ios : function(list) {
        return list;
    },

    aid : function () {
        return 'sdk_ifly_${sdk_ifly_aid}';
    },
	
	adStyle : function() {
      return "${sdk_ifly_displayType}";
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
                "placementId":"${sdk_inmobi_placementId}"
            }
        }
    },
    
    aid : function () {
        return 'sdk_inmobi_${sdk_inmobi_aid}';
    },
	
	adStyle : function() {
      return "${sdk_inmobi_displayType}";
    }
}


// 手机sdk inmobi no.2 。低价版inmobi
var sdk_inmobi_no2 = {

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
                "placementId":"${sdk_inmobi_no2_placementId}"
            }
        }
    },
    
    aid : function () {
        return 'sdk_inmobi_no2_${sdk_inmobi_no2_aid}';
    },
	
	adStyle : function() {
      return "${sdk_inmobi_no2_displayType}";
    }
}

function ads() {

//var ads = [api_chelaile, sdk_inmobi, sdk_toutiao, sdk_gdt, sdk_voicead, sdk_baidu];
    return {
      traceInfo : {
          traceid: '${TRACEID}',
          pid: '22'
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

