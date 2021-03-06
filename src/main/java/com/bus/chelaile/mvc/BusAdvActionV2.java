package com.bus.chelaile.mvc;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.bus.chelaile.common.AdvCache;
import com.bus.chelaile.common.Constants;
import com.bus.chelaile.common.TimeLong;
import com.bus.chelaile.kafka.thread.MaidianLogsHandle;
import com.bus.chelaile.model.ShowType;
import com.bus.chelaile.service.ServiceManager;
import com.bus.chelaile.service.StaticAds;
import com.bus.chelaile.third.ThirdAdData;
import com.bus.chelaile.third.kedaxunfei.KDXFService;
import com.bus.chelaile.third.youdao.YoudaoService;
import com.bus.chelaile.thread.Queue;
import com.bus.chelaile.thread.model.QueueObject;

/**
 * 广告相关接口
 * 
 * @author linzi
 * 2018-05-26 新版广告
 * 
 */

@Controller
@RequestMapping("")
public class BusAdvActionV2 extends AbstractController {

    @Resource
    private ServiceManager serviceManager;

    private static final Logger logger = LoggerFactory.getLogger(BusAdvActionV2.class);

    /*
     * 详情页下方广告（及之前的feed流顶部广告)
     */
    @ResponseBody
    @RequestMapping(value = "adv!getLineFeedAds.action", produces = "text/plain;charset=UTF-8")
    public String getLineFeedAds(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {

        AdvParam param = getActionParam(request);
        //        param.setIsTop(getInt(request, "isTop"));

        return serviceManager.getAdsResponseStr(param, "getLineFeedAds");
    }

    /*
     * 新版首页广告（既之前的首页单双栏位置广告)
     */
    @ResponseBody
    @RequestMapping(value = "adv!geColumntAds.action", produces = "text/plain;charset=UTF-8")
    public String geColumntAds(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {

        AdvParam advParam = getActionParam(request);
        advParam.setType(getInt(request, "type"));

        Object result = serviceManager.getColumntAds(advParam);
        return serviceManager.getClienSucMap(result, Constants.STATUS_REQUEST_SUCCESS);
    }

    /*
     * 新版开屏广告
     */
    @ResponseBody
    @RequestMapping(value = "adv!getCoopenAds.action", produces = "text/plain;charset=UTF-8")
    public String getCoopenAds(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
        AdvParam advParam = getActionParam(request);
        advParam.setStartMode(getInt(request, "startMode"));

        Object result = serviceManager.getCoopenAds(advParam);
        return serviceManager.getClienSucMap(result, Constants.STATUS_REQUEST_SUCCESS);
    }

    /*
     * 新版站点位置广告（从原来的详情页广告中拆分出来的）
     */
    @ResponseBody
    @RequestMapping(value = "adv!getStationAds.action", produces = "text/plain;charset=UTF-8")
    public String getStationAds(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
        AdvParam advParam = getActionParam(request);
        if(StringUtils.isBlank(advParam.getStnName()))
            advParam.setStnName(request.getParameter("stationName"));

        Object result = serviceManager.getStationAds(advParam);
        return serviceManager.getClienSucMap(result, Constants.STATUS_REQUEST_SUCCESS);
    }
    
    /*
     * 新版详情页右上角广告（从原来的详情页广告中拆分出来的）
     */
    @ResponseBody
    @RequestMapping(value = "adv!getRightTopAds.action", produces = "text/plain;charset=UTF-8")
    public String getRightTopAds(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
        AdvParam advParam = getActionParam(request);
        if(StringUtils.isBlank(advParam.getStnName()))
            advParam.setStnName(request.getParameter("stationName"));

        Object result = serviceManager.getRightAds(advParam);
        return serviceManager.getClienSucMap(result, Constants.STATUS_REQUEST_SUCCESS);
    }
    
    /*
     * 点击上报街接口
     */
    @ResponseBody
    @RequestMapping(value = "adv!ca.action", produces = "text/plain;charset=UTF-8")
    public String ca(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
        AdvParam advParam = getActionParam(request);
        
        if(StringUtils.isEmpty(advParam.getUdid())) {
            advParam.setUdid(request.getParameter("h5Id"));
        }
        
        String advId = request.getParameter("advId");
        
        // 存储广告点击次数到redis
        QueueObject queueobj = new QueueObject();
        queueobj.setRedisIncrKey(AdvCache.getTotalClickPV(advId));
        Queue.set(queueobj);
        // 存储用户点击广告到ocs中
        StaticAds.setClickToRecord(advId, advParam.getUdid());

        return serviceManager.getClienSucMap(new JSONObject(), Constants.STATUS_REQUEST_SUCCESS);
    }
    
    
    /*
     * 处理点击埋点
     */
    @ResponseBody
    @RequestMapping(value = "adv!handleClick.action", produces = "text/plain;charset=UTF-8")
    public String handleClick(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
//        AdvParam advParam = getActionParam(request);
//        
//        if(StringUtils.isEmpty(advParam.getUdid())) {
//            advParam.setUdid(request.getParameter("h5Id"));
//        }
        String str = IOUtils.toString(request.getInputStream());
        if(! str.contains("PARSE_SERVER_FAIL")) {
            TimeLong.info("读到点击埋点日志： str={}", str);
            MaidianLogsHandle.analysisMaidianClick(str);
        }
        
        return serviceManager.getClienSucMap(new JSONObject(), Constants.STATUS_REQUEST_SUCCESS);
    }
    
    
    /*
     * 处理点击埋点
     */
    @ResponseBody
    @RequestMapping(value = "adv!writeJ.action", produces = "text/plain;charset=UTF-8")
    public void writeJ(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
        AdvParam advParam = getActionParam(request);
//        String sitePlace = request.getParameter("sitePlace");
//        
        ThirdAdData data = YoudaoService.getYouDaoData(advParam, ShowType.OPEN_SCREEN, "");
        ThirdAdData data1 = KDXFService.getKDXF(advParam, ShowType.OPEN_SCREEN);
        
        logger.info("有道：data={}", JSONObject.toJSONString(data));
        logger.info("科大讯飞, data1={}", JSONObject.toJSONString(data1));
        
        logger.info("js_str={}", JSONObject.toJSONString(StaticAds.JS_FILE_STR));
        
//        String s ="";
//        if(sitePlace.equals("banner")) {
//            s = StaticAds.JS_FILE_STR.get("banner.js");
//        } else if(sitePlace.equals("coopen")){
//            s = StaticAds.JS_FILE_STR.get("splash.js");
//        }
//        
//        OutputStream ps = response.getOutputStream();
//        ps.write(s.getBytes("UTF-8"));
//        ps.flush();
//        ps.close();
//        return serviceManager.getClienSucMap(new JSONObject(), Constants.STATUS_REQUEST_SUCCESS);
    }
    
    
    @ResponseBody
    @RequestMapping(value = "adv!getTransfer.action", produces = "text/plain;charset=UTF-8")
    public String getTransfer(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    	String str = "**YGKJ{\"jsonr\":{\"data\":{\"ads\":[{\"apiType\":1,\"clickMonitorLink\":\"\",\"id\":10013305,\"imgsType\":0,\"link\":\"\",\"monitorType\":0,\"openType\":0,\"provider_id\":\"10\",\"showType\":24,\"targetType\":0,\"type\":3,\"unfoldMonitorLink\":\"\"}],\"autoInterval\":15000,\"unfoldFeed\":1,\"mixInterval\":5000,\"placementId\":\"18F4307EE781076E5FCB43DB0413C6FD\"},\"errmsg\":\"\",\"status\":\"00\",\"sversion\":\"\"}}YGKJ##";
        
        return str;
    }
    
    @ResponseBody
    @RequestMapping(value = "adv!getAllCar.action", produces = "text/plain;charset=UTF-8")
    public String getAllCar(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    	String str = "**YGKJ{\"jsonr\":{\"data\":{\"ads\":[{\"apiType\":1,\"clickMonitorLink\":\"\",\"id\":10013305,\"imgsType\":0,\"link\":\"\",\"monitorType\":0,\"openType\":0,\"provider_id\":\"10\",\"showType\":26,\"targetType\":0,\"type\":3,\"unfoldMonitorLink\":\"\"}],\"autoInterval\":15000,\"unfoldFeed\":1,\"mixInterval\":5000,\"placementId\":\"9B3FF3E3654C83C5063DB8A55A857304\"},\"errmsg\":\"\",\"status\":\"00\",\"sversion\":\"\"}}YGKJ##";
        
        return str;
    }
    
    
    @ResponseBody
    @RequestMapping(value = "adv!getStationLine.action", produces = "text/plain;charset=UTF-8")
    public String getStationLine(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    	String str = "**YGKJ{\"jsonr\":{\"data\":{\"ads\":[{\"apiType\":1,\"clickMonitorLink\":\"\",\"id\":10013305,\"imgsType\":0,\"link\":\"\",\"monitorType\":0,\"openType\":0,\"provider_id\":\"10\",\"showType\":25,\"targetType\":0,\"type\":3,\"unfoldMonitorLink\":\"\"}],\"autoInterval\":15000,\"unfoldFeed\":1,\"mixInterval\":5000,\"placementId\":\"1A3AFF2C97A22A174C6C75978C55B67D\"},\"errmsg\":\"\",\"status\":\"00\",\"sversion\":\"\"}}YGKJ##";
        
        return str;
    }
}
