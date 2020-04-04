
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"320",
  
  "macros":[{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],";switch(a){case \"start\":return\"Play\";case \"pause\":return\"Pause\";case \"seek\":return\"Seeking\";case \"progress\":return+",["escape",["macro",1],8,16],"+\"% Watched\";case \"complete\":return\"100% Watched\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=5;return function(a){a.set(\"dimension\"+b,a.get(\"clientId\"))}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(new Date).getTime()+\".\"+Math.random().toString(36).substring(5)})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){classNames=\"\";el=",["escape",["macro",5],8,16],";for(var a=0;5\u003Ea;a++)classNames+=el.className+\" \",el=el.parentElement;return classNames})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){classNames=\"\";el=",["escape",["macro",5],8,16],";for(var a=0;7\u003Ea;a++)classNames+=el.className+\" \",el=el.parentElement;return classNames})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){classNames=\"\";el=",["escape",["macro",5],8,16],";for(var a=0;10\u003Ea;a++)classNames+=el.className+\" \",el=el.parentElement;return classNames})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/\\\/.*\\\/cat\\\/([^\/]+)\/;return(a=document.URL.match(a))?a[1]:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/https:\\\/\\\/mdbootstrap.com\\\/[^\/]+\\\/([^\/]+)\\\/.*\/;return(a=document.URL.match(a))?a[1]:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/https:\\\/\\\/mdbootstrap\\.com\\\/products\\\/(?:[^-]+)-([^\/]+)\/;return(a=document.URL.match(a))?a[1]:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/https:\\\/\\\/mdbootstrap.com\\\/[^\/]+\\\/[^\/]+\\\/([^\/]+)\\\/.*\/;return(a=document.URL.match(a))?a[1]:null})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"firstSeen"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{if(",["escape",["macro",13],8,16],"){var a=(new Date).getTime();return a-=",["escape",["macro",13],8,16],"}}catch(b){}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"firstDownload"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{if(",["escape",["macro",15],8,16],"){var a=(new Date).getTime();return a-=",["escape",["macro",15],8,16],"}}catch(b){}})();"]
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",18],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":["macro",10],
      "vtp_map":["list",["map","key",".*\/.+\/cat\/.*","value",["macro",9]],["map","key",".*\/products\/.*","value",["macro",11]],["map","key",".*\/docs\/.*","value",["macro",12]]]
    },{
      "function":"__c",
      "vtp_value":"UA-60512242-3"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",20],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"gdpr_ga"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"name"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-switch-to"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",27],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"Download Direct",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*directDownload.*","value","Download Direct"],["map","key",".*gitDownload.*","value","Download Github"],["map","key",".*snippet-button-save.*","value","Download Snippet"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",18],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*getting-started.*","value","MDB Free"],["map","key",".*fluent-kit.*","value","FDB Free"],["map","key",".*freebies\\\/(.*)\\\/admin.*","value","Admin Template Free"],["map","key",".*freebies\\\/(.*)\\\/landing.*","value","Landing Template Free"],["map","key",".*freebies\\\/(.*)\\\/portfolio.*","value","Portfolio Template Free"],["map","key",".*freebies\\\/(.*)\\\/blog.*","value","Blog Template Free"],["map","key",".*freebies\\\/(.*)\\\/ecommerce.*","value","E-commerce Template Free"],["map","key",".*freebies\\\/(.*)\\\/magazine.*","value","Magazine Template Free"],["map","key",".*freebies\\\/(.*)\\\/saas.*","value","SAAS Template Free"],["map","key",".*freebies\\\/(.*)\\\/coming-soon.*","value","Coming Soon Template Free"],["map","key",".*freebies\\\/(.*)\\\/half-carousel.*","value","Half Carousel Template Free"],["map","key",".*freebies\\\/(.*)\\\/full-page-image.*","value","Full Page Image Template Free"],["map","key",".*freebies\\\/(.*)\\\/full-page-video.*","value","Full Page Video Template Free"],["map","key",".*freebies\\\/(.*)\\\/3-columns-listing.*","value","3 Colums Listing Template Free"],["map","key",".*freebies\\\/(.*)\\\/2-columns-listing.*","value","2 Columns Listing Template Free"],["map","key",".*freebies\\\/(.*)\\\/1-column-listing.*","value","1 Column Listing Template Free"],["map","key",".*freebies\\\/(.*)\\\/jumbotron.*","value","Jumbotron Template Free"],["map","key",".*freebies\\\/(.*)\\\/full-background-image.*","value","Full Background Image Template Free"],["map","key",".*snippets.*","value","MDB Free"],["map","key",".*boilerplate.*","value","Boilerplate Free"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",18],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"jQuery",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*jquery.*","value","jQuery"],["map","key",".*angular.*","value","Angular"],["map","key",".*react.*","value","React"],["map","key",".*vue.*","value","Vue"]]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"alt"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",7],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*navbar.*","value","Navigation"],["map","key",".*page-footer.*","value","Navigation"],["map","key",".*side-nav.*","value","Navigation"],["map","key",".*menu-item.*","value","Navigation"],["map","key",".*switch-to.*","value","Navigation"],["map","key",".*logo-sn.*ps--theme_default","value","Navigation"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",30],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":["template",["macro",37]," Click"],
      "vtp_map":["list",["map","key",".*mask.*","value",["template",["macro",37]," Image click"]],["map","key",".*img-fluid.*","value",["template",["macro",37]," Image click"]],["map","key",".*btn.*","value",["template",["macro",37]," Button click"]],["map","key",".*custom-select.*","value",["template",["macro",37]," Select click"]],["map","key",".*switch-to.*","value",["template",["macro",37]," Switch click"]],["map","key",".*font.*","value",["template",["macro",37]," Link click"]]]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.variant"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"MDBFreeUserCookie"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionProducts.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionTotal"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"cookieReferrer"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionCurrency"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"gdpr_fbp"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"firstConversion"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"firstDownloadTechnology"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionPromoCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionPaymentType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionTotal"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionProducts.0.category"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_name":"gtm.videoProvider",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoDuration",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoVisible",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoCurrentTime",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list",["map","index","4","group",["macro",19]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",3]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","4","dimension",["macro",4]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",20],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":1
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"YouTube Videos",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":["macro",2],
      "vtp_eventLabel":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":525
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Scroll Depth",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":["template",["macro",24],"%"],
      "vtp_eventLabel":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":526
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"979879318",
      "vtp_customParamsFormat":"NONE",
      "vtp_conversionLabel":"uIBJCPv423AQlouf0wM",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",26],
      "tag_id":815
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Goals",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Generated Link",
      "vtp_eventLabel":"Affiliate",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":816
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Add support",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":817
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Addons Tab",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":818
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Apply coupon",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":819
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Billing Tab",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":820
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["template","Billing: ",["macro",27]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":821
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Continue Shopping",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":822
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Coupon code",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":823
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Enter code",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":824
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["template","Switch to: ",["macro",31]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":825
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["template","Method: ",["macro",27]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":826
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Payment Tab",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":827
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Place Order Step",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":828
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Place Order Summary",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":829
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Privacy Policy",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":830
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Remove item",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":831
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Docs",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":832
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Goals",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":["macro",33],
      "vtp_eventLabel":["template",["macro",34]," ",["macro",35]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":833
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Dynamic content",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":["macro",38],
      "vtp_eventLabel":["macro",36],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":834
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Footer",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Navigation click",
      "vtp_eventLabel":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":838
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Homepage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Button click",
      "vtp_eventLabel":["template","News: ",["macro",36]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":839
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Homepage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Image click",
      "vtp_eventLabel":["template","News: ",["macro",36]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":840
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Homepage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Button click",
      "vtp_eventLabel":["template","Resources: ",["macro",36]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":841
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Homepage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Image click",
      "vtp_eventLabel":["template","Resources: ",["macro",36]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":842
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Homepage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Button click",
      "vtp_eventLabel":["template","Main: ",["macro",36]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":843
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Homepage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Image click",
      "vtp_eventLabel":["template","Main: ",["macro",36]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":844
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Snippets",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":["macro",38],
      "vtp_eventLabel":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":845
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"SideNav",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Navigation click",
      "vtp_eventLabel":"MDB logo",
      "vtp_trackingId":["macro",20],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":850
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Modals",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":["macro",38],
      "vtp_eventLabel":["macro",36],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":851
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Navbar category",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Navigation click",
      "vtp_eventLabel":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":852
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Navbar static",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Navigation click",
      "vtp_eventLabel":["macro",36],
      "vtp_trackingId":["macro",20],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":853
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Goals",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Subscription",
      "vtp_eventLabel":["macro",35],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":854
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Outbound links",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":["macro",28],
      "vtp_eventLabel":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":855
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Plugins",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":["macro",38],
      "vtp_eventLabel":["macro",36],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":856
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Product page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":["macro",38],
      "vtp_eventLabel":["macro",36],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":857
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Product page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["template","license ",["macro",40]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":858
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"ScrollSpy",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":859
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"SideNav",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Navigation click",
      "vtp_eventLabel":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":860
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"SideNav",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Navigation click",
      "vtp_eventLabel":["template","Head - ",["macro",32]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":861
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Switch",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Navigation click",
      "vtp_eventLabel":["macro",27],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":862
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Product page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["template",["macro",36]," - Preview Image"],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":863
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Product page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["template",["macro",32]," - Preview Link"],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":864
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"MDB 2019",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["macro",27],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":865
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",41],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Purchase",
      "vtp_eventLabel":["macro",42],
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_eventValue":["macro",43],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",20],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":866
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",44],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Purchase",
      "vtp_eventLabel":["macro",42],
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_eventValue":["macro",43],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",20],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":867
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Navbar dropdowns",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Navigation click",
      "vtp_eventLabel":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":869
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Docs",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["template","MDB ",["macro",35]," Pro Button"],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":870
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Ecommerce helper",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":["macro",45],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":873
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"About",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":["macro",38],
      "vtp_eventLabel":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":874
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",46],
      "vtp_conversionValue":["macro",43],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"979879318",
      "vtp_currencyCode":["macro",47],
      "vtp_conversionLabel":"2Xr8CJ7_qqIBEJaLn9MD",
      "vtp_url":["macro",26],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":884
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"1",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"979879318",
      "vtp_conversionLabel":"R3wxCIvirKIBEJaLn9MD",
      "vtp_url":["macro",26],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":885
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"25,50,75",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":true,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"2340190_699",
      "vtp_enableTriggerStartOption":true,
      "tag_id":887
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"2340190_702",
      "vtp_enableTriggerStartOption":true,
      "tag_id":888
    },{
      "function":"__ytl",
      "vtp_captureComplete":false,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":false,
      "vtp_capturePause":false,
      "vtp_captureProgress":false,
      "vtp_uniqueTriggerId":"2340190_908",
      "vtp_enableTriggerStartOption":true,
      "tag_id":889
    },{
      "function":"__cl",
      "tag_id":890
    },{
      "function":"__cl",
      "tag_id":891
    },{
      "function":"__cl",
      "tag_id":892
    },{
      "function":"__cl",
      "tag_id":893
    },{
      "function":"__cl",
      "tag_id":894
    },{
      "function":"__cl",
      "tag_id":895
    },{
      "function":"__cl",
      "tag_id":896
    },{
      "function":"__cl",
      "tag_id":897
    },{
      "function":"__cl",
      "tag_id":898
    },{
      "function":"__cl",
      "tag_id":899
    },{
      "function":"__cl",
      "tag_id":900
    },{
      "function":"__cl",
      "tag_id":901
    },{
      "function":"__cl",
      "tag_id":902
    },{
      "function":"__cl",
      "tag_id":903
    },{
      "function":"__cl",
      "tag_id":904
    },{
      "function":"__cl",
      "tag_id":905
    },{
      "function":"__cl",
      "tag_id":906
    },{
      "function":"__cl",
      "tag_id":907
    },{
      "function":"__cl",
      "tag_id":908
    },{
      "function":"__cl",
      "tag_id":909
    },{
      "function":"__cl",
      "tag_id":910
    },{
      "function":"__cl",
      "tag_id":911
    },{
      "function":"__cl",
      "tag_id":912
    },{
      "function":"__cl",
      "tag_id":913
    },{
      "function":"__cl",
      "tag_id":914
    },{
      "function":"__cl",
      "tag_id":915
    },{
      "function":"__cl",
      "tag_id":916
    },{
      "function":"__cl",
      "tag_id":917
    },{
      "function":"__cl",
      "tag_id":918
    },{
      "function":"__cl",
      "tag_id":919
    },{
      "function":"__cl",
      "tag_id":920
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2340190_1200",
      "tag_id":921
    },{
      "function":"__cl",
      "tag_id":922
    },{
      "function":"__cl",
      "tag_id":923
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2340190_1203",
      "tag_id":924
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2340190_1205",
      "tag_id":925
    },{
      "function":"__cl",
      "tag_id":926
    },{
      "function":"__cl",
      "tag_id":927
    },{
      "function":"__cl",
      "tag_id":928
    },{
      "function":"__cl",
      "tag_id":929
    },{
      "function":"__cl",
      "tag_id":930
    },{
      "function":"__cl",
      "tag_id":931
    },{
      "function":"__cl",
      "tag_id":932
    },{
      "function":"__cl",
      "tag_id":933
    },{
      "function":"__cl",
      "tag_id":934
    },{
      "function":"__cl",
      "tag_id":935
    },{
      "function":"__cl",
      "tag_id":936
    },{
      "function":"__cl",
      "tag_id":937
    },{
      "function":"__cl",
      "tag_id":938
    },{
      "function":"__cl",
      "tag_id":939
    },{
      "function":"__cl",
      "tag_id":940
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2340190_1255",
      "tag_id":941
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","2340190_1264_1182"],
      "vtp_uniqueTriggerId":"2340190_1264",
      "tag_id":942
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"2340190_1264_1182",
      "tag_id":943
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"289867067833087\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=289867067833087\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":836
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"289867067833087\");fbq(\"track\",\"mdbFreeDownload\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=289867067833087\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":837
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"289867067833087\");fbq(\"track\",\"newsletterSubscription\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=289867067833087\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":872
    },{
      "function":"__html",
      "teardown_tags":["list",["tag",122,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(b,c,d){var a=new Date;a.setTime(a.getTime()+864E5*d);document.cookie=b+\"\\x3d\"+c+\";path\\x3d\/;expires\\x3d\"+a.toGMTString()}var now=(new Date).getTime();setCookie(\"firstSeen\",now,365);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":877
    },{
      "function":"__html",
      "teardown_tags":["list",["tag",121,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(b,c,d){var a=new Date;a.setTime(a.getTime()+864E5*d);document.cookie=b+\"\\x3d\"+c+\";path\\x3d\/;expires\\x3d\"+a.toGMTString()}var now=(new Date).getTime();setCookie(\"firstDownload\",now,365);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":878
    },{
      "function":"__html",
      "teardown_tags":["list",["tag",120,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(b,c,d){var a=new Date;a.setTime(a.getTime()+864E5*d);document.cookie=b+\"\\x3d\"+c+\";path\\x3d\/;expires\\x3d\"+a.toGMTString()}var now=(new Date).getTime();setCookie(\"firstConversion\",now,365);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":879
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(b,c,d){var a=new Date;a.setTime(a.getTime()+864E5*d);document.cookie=b+\"\\x3d\"+c+\";path\\x3d\/;expires\\x3d\"+a.toGMTString()}setCookie(\"firstDownloadTechnology\",",["escape",["macro",35],8,16],",365);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":883
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"289867067833087\");fbq(\"track\",\"mdbPurchase\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=289867067833087\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":886
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",16],
      "vtp_eventCategory":"Conversions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"First conversion",
      "vtp_eventLabel":["macro",50],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":882
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",14],
      "vtp_eventCategory":"Conversions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"First download",
      "vtp_eventLabel":["macro",35],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":881
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Conversions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"First Seen",
      "vtp_eventLabel":["macro",35],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":880
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"(^$|((^|,)2340190_699($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"support"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"(^$|((^|,)2340190_702($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"0"
    },{
      "function":"_re",
      "arg0":["macro",17],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"affiliate-generate-link"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"add-support"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"tabCheckoutAddons"
    },{
      "function":"_eq",
      "arg0":["macro",29],
      "arg1":"apply_coupon"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"tabCheckoutBilling"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"billing_"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"wc-forward"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"coupon_code"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"showcoupon"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"btn-dark-green"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"tabCheckout"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"payment_method_"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"active"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"tabCheckoutPayment"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"place_order"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"checkout-summary-place-order-button"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"woocommerce-privacy-policy-link"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"checkout-cart-remove-item"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"docs-tab"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"directDownload"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"gitDownload"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"snippet-button-save"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"dynamic-content"
    },{
      "function":"_re",
      "arg0":["macro",36],
      "arg1":"^$"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"dynamic-content"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"footer-link"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"homepage-btn"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"news"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"homepage-img"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"resources"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"snippet-button"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"MDB-logo"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"\\smodal\\s"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"navbar"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"category"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"(^$|((^|,)2340190_1200($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"navbar-static"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"mc-embedded-subscribe"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"mdbootstrap.com"
    },{
      "function":"_sw",
      "arg0":["macro",28],
      "arg1":"http"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"(^$|((^|,)2340190_1203($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"side-nav"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"navbar"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"footer"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"\/plugins\/jquery\/"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"(^$|((^|,)2340190_1205($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"\/products\/"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"license_variations"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"custom-select"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"collapsible-header"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"navbar"
    },{
      "function":"_eq",
      "arg0":["macro",29],
      "arg1":"license_variations"
    },{
      "function":"_re",
      "arg0":["macro",17],
      "arg1":"gtm4wp.changeDetailViewEEC"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"teams_select"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"nav-link"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"smooth-scroll"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"link-menu-item"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"link"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"switch"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"template-preview-image"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"template-preview-link"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"2019-sale-"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"gtm4wp.orderCompletedEEC"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"dropdown-item"
    },{
      "function":"_cn",
      "arg0":["macro",32],
      "arg1":"MDB PRO COMPONENT"
    },{
      "function":"_re",
      "arg0":["macro",17],
      "arg1":"gtm4wp.addProductToCartEEC|gtm4wp.productClickEEC|gtm4wp.removeFromCartEEC|gtm4wp.checkoutOptionEEC|gtm4wp.changeDetailViewEEC|gtm4wp.checkoutStepEEC"
    },{
      "function":"_cn",
      "arg0":["macro",38],
      "arg1":"Navigation"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"\\\/docs\\\/.+\\\/"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"\\\/docs\\\/.+\\\/.+"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"(^$|((^|,)2340190_1255($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",48],
      "arg1":"0"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"download"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"freebies"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"gtm.triggerGroup"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"(^$|((^|,)2340190_1264($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"thank-you"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"undefined"
    }],
  "rules":[
    [["if",0],["add",0,3,112,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110]],
    [["if",1,2],["add",1]],
    [["if",4,5],["unless",3],["add",2]],
    [["if",8,9],["add",4]],
    [["if",9,10],["add",5]],
    [["if",9,11],["add",6]],
    [["if",9,12],["add",7]],
    [["if",9,13],["add",8]],
    [["if",9,14],["add",9]],
    [["if",9,15],["add",10]],
    [["if",9,16],["add",11]],
    [["if",9,17],["add",12]],
    [["if",9,18,19],["add",13]],
    [["if",9,20,21],["add",14]],
    [["if",9,22],["add",15]],
    [["if",9,23],["add",16]],
    [["if",9,24],["add",17]],
    [["if",9,25],["add",18]],
    [["if",9,26],["add",19]],
    [["if",9,27],["add",20]],
    [["if",9,28],["add",21,54,111,113]],
    [["if",9,29],["add",21,113]],
    [["if",9,30],["add",21]],
    [["if",9,31],["unless",32],["add",22]],
    [["if",9,33],["unless",32],["add",22]],
    [["if",9,34],["add",23]],
    [["if",9,35,36],["add",24]],
    [["if",9,36,37],["add",25]],
    [["if",9,35,38],["add",26]],
    [["if",9,37,38],["add",27]],
    [["if",9,35],["unless",36,38],["add",28]],
    [["if",9,37],["unless",36,38],["add",29]],
    [["if",9,39],["add",30]],
    [["if",9,40],["add",31]],
    [["if",9,41],["add",32]],
    [["if",42,43,44,45],["add",33]],
    [["if",9,46],["add",34]],
    [["if",9,47],["add",35,114]],
    [["if",44,49,50],["unless",48],["add",36]],
    [["if",44,54,55],["unless",51,52,53],["add",37]],
    [["if",9,56],["unless",57,58,59,60],["add",38]],
    [["if",56,61,62],["add",39]],
    [["if",9,56,63],["add",39]],
    [["if",9,64,65],["add",40]],
    [["if",9,66],["add",41]],
    [["if",9,59],["unless",67],["add",42]],
    [["if",9,68],["add",43]],
    [["if",9,69],["add",44]],
    [["if",9,70],["add",45]],
    [["if",9,71],["add",46]],
    [["if",72],["add",47,48,53,119]],
    [["if",9,52,73],["add",49]],
    [["if",9,74],["add",50]],
    [["if",75],["add",51]],
    [["if",44,77,79],["unless",76,78],["add",52]],
    [["if",9,81,82],["add",113]],
    [["if",0,83],["add",115]],
    [["if",84,85,86],["add",116,118]],
    [["if",0,87,88],["unless",84],["add",117]],
    [["if",6,7],["block",3]],
    [["if",7,80],["block",112,113,114,119]]]
},
"runtime":[
[],[]
]



};
var ba,ca=this||self,da=/^[\w+/_-]+[=]{0,2}$/,fa=null;var ha=function(){},ia=function(a){return"function"==typeof a},ja=function(a){return"string"==typeof a},ka=function(a){return"number"==typeof a&&!isNaN(a)},la=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},ma=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},na=function(a,b){if(a&&la(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},oa=function(a,b){if(!ka(a)||
!ka(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ra=function(a,b){for(var c=new pa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},sa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},ta=function(a){return Math.round(Number(a))||0},ua=function(a){return"false"==String(a).toLowerCase()?!1:!!a},va=function(a){var b=[];if(la(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},wa=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},xa=function(){return(new Date).getTime()},pa=function(){this.prefix="gtm.";this.values={}};pa.prototype.set=function(a,b){this.values[this.prefix+a]=b};pa.prototype.get=function(a){return this.values[this.prefix+a]};pa.prototype.contains=function(a){return void 0!==this.get(a)};
var ya=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},za=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Aa=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ba=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Da=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ea=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Fa=function(a){if(null==a)return String(a);var b=Ea.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ga=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ha=function(a){if(!a||"object"!=Fa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ga(a,"constructor")&&!Ga(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ga(a,b)},f=function(a,b){var c=b||("array"==Fa(a)?[]:{}),d;for(d in a)if(Ga(a,d)){var e=a[d];"array"==Fa(e)?("array"!=Fa(c[d])&&(c[d]=[]),c[d]=f(e,c[d])):Ha(e)?(Ha(c[d])||(c[d]={}),c[d]=f(e,c[d])):c[d]=e}return c};var v=window,A=document,Ia=navigator,Ja=A.currentScript&&A.currentScript.src,Ka=function(a,b){var c=v[a];v[a]=void 0===c?b:c;return v[a]},La=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Ma=function(a,b,c){var d=A.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;La(d,b);c&&(d.onerror=c);var e;if(null===fa)b:{var g=ca.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&da.test(k)){fa=k;break b}}fa=""}e=fa;e&&d.setAttribute("nonce",e);var l=A.getElementsByTagName("script")[0]||A.body||A.head;l.parentNode.insertBefore(d,l);return d},Na=function(){if(Ja){var a=Ja.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Oa=function(a,b){var c=A.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=A.body&&A.body.lastChild||
A.body||A.head;d.parentNode.insertBefore(c,d);La(c,b);void 0!==a&&(c.src=a);return c},Pa=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Qa=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ra=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},D=function(a){v.setTimeout(a,0)},Ua=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Va=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Wa=function(a){var b=A.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Xa=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},Ya=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Za=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var $a={},ab=function(a,b){$a[a]=$a[a]||[];$a[a][b]=!0},bb=function(a){for(var b=[],c=$a[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var cb=/:[0-9]+$/,db=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},hb=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=fb(a.protocol)||fb(v.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:v.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||v.location.hostname).replace(cb,"").toLowerCase());var g=b,h,k=fb(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=gb(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(cb,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||ab("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=ma(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=db(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},fb=function(a){return a?a.replace(":","").toLowerCase():""},gb=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
ib=function(a){var b=A.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||ab("TAGGING",1),c="/"+c);var d=b.hostname.replace(cb,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var jb=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},mb=function(a,b,c,d){var e=kb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=lb(e,function(g){return g.Cb},b);if(1===e.length)return e[0].id;e=lb(e,function(g){return g.Ua},c);return e[0]?e[0].id:void 0}};
function nb(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=jb(b,e).indexOf(c)}
var rb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var q=void 0,t=void 0,p;for(p in h)if(h.hasOwnProperty(p)){var r=h[p];if(null!=r)switch(p){case "secure":r&&(m+="; secure");break;case "domain":q=r;break;default:"path"==p&&(t=r),"expires"==p&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+p+"="+r}}if("auto"===q){for(var u=ob(),w=0;w<u.length;++w){var y="none"!=u[w]?u[w]:void 0;if(!qb(y,t)&&nb(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else q&&"none"!=q&&(m+="; domain="+q),k=!qb(q,t)&&nb(m,a,l)}return k};function lb(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function kb(a,b){for(var c=[],d=jb(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Cb:1*k[0]||1,Ua:1*k[1]||1}))}}return c}
var sb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,tb=/(^|\.)doubleclick\.net$/i,qb=function(a,b){return tb.test(document.location.hostname)||"/"===b&&sb.test(a)},ob=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var ub=[],vb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},wb=function(a){return vb[a]},xb=/[\x00\x22\x26\x27\x3c\x3e]/g;var Bb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Cb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Db=function(a){return Cb[a]};
ub[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Bb,Db)+"'"}};var Lb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Mb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Nb=function(a){return Mb[a]};ub[16]=function(a){return a};var Pb=[],Qb=[],Rb=[],Sb=[],Ub=[],Vb={},Wb,Xb,Yb,Zb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},$b=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Vb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Vb[c](e):(void 0)(c,e,b)},bc=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=ac(a[e],b,c));return d},
cc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Vb[b];return c?c.priorityOverride||0:0},ac=function(a,b,c){if(la(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(ac(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=Pb[g];if(!h||b.vc(h))return;c[g]=!0;try{var k=bc(h,b,c);k.vtp_gtmEventId=b.id;d=$b(k,b);Yb&&(d=Yb.pf(d,k))}catch(w){b.Md&&b.Md(w,Number(g)),d=!1}c[g]=!1;return d;
case "map":d={};for(var l=1;l<a.length;l+=2)d[ac(a[l],b,c)]=ac(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=ac(a[n],b,c);Xb&&(m=m||q===Xb.rb);d.push(q)}return Xb&&m?Xb.sf(d):d.join("");case "escape":d=ac(a[1],b,c);if(Xb&&la(a[1])&&"macro"===a[1][0]&&Xb.Uf(a))return Xb.dg(d);d=String(d);for(var t=2;t<a.length;t++)ub[a[t]]&&(d=ub[a[t]](d));return d;case "tag":var p=a[1];if(!Sb[p])throw Error("Unable to resolve tag reference "+p+".");return d={zd:a[2],index:p};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var u=dc(r,b,c);a[4]&&(u=!u);return u;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},dc=function(a,b,c){try{return Wb(bc(a,b,c))}catch(d){JSON.stringify(a)}return null};var ec=function(){var a=function(b){return{toString:function(){return b}}};return{Wc:a("convert_case_to"),Xc:a("convert_false_to"),Yc:a("convert_null_to"),Zc:a("convert_true_to"),$c:a("convert_undefined_to"),fa:a("function"),Ee:a("instance_name"),Fe:a("live_only"),Ge:a("malware_disabled"),He:a("metadata"),Ng:a("original_vendor_template_id"),Ie:a("once_per_event"),pd:a("once_per_load"),qd:a("setup_tags"),rd:a("tag_id"),sd:a("teardown_tags")}}();var fc=null,ic=function(a){function b(q){for(var t=0;t<q.length;t++)d[q[t]]=!0}var c=[],d=[];fc=gc(a);for(var e=0;e<Qb.length;e++){var g=Qb[e],h=hc(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<Sb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},hc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=fc(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=fc(e[g]);if(null===h)return null;
if(h)return!1}return!0},gc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=dc(Rb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var yc={},zc=null,Ac=Math.random();yc.h="GTM-W7MBMN";yc.vb="7a0";var Bc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Cc="www.googletagmanager.com/gtm.js";var Dc=Cc,Ec=null,Fc=null,Gc=null,Hc="//www.googletagmanager.com/a?id="+yc.h+"&cv=320",Ic={},Jc={},Kc=function(){var a=zc.sequence||0;zc.sequence=a+1;return a};var G=function(a,b,c,d){return(2===Lc()||d||"http:"!=v.location.protocol?a:b)+c},Lc=function(){var a=Na(),b;if(1===a)a:{var c=Dc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=A.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Mc=!1;
var Qc=function(){return"&tc="+Sb.filter(function(a){return a}).length},Zc=function(){Rc&&(v.clearTimeout(Rc),Rc=void 0);void 0===Sc||Tc[Sc]&&!Uc||(Vc[Sc]||Wc.Wf()||0>=Xc--?(ab("GTM",1),Vc[Sc]=!0):(Wc.og(),Pa(Yc()),Tc[Sc]=!0,Uc=""))},Yc=function(){var a=Sc;if(void 0===a)return"";var b=bb("GTM"),c=bb("TAGGING");return[$c,Tc[a]?"":"&es=1",ad[a],b?"&u="+b:"",c?"&ut="+c:"",Qc(),Uc,"&z=0"].join("")},bd=function(){return[Hc,"&v=3&t=t","&pid="+oa(),"&rv="+yc.vb].join("")},cd="0.005000">
Math.random(),$c=bd(),dd=function(){$c=bd()},Tc={},Uc="",Sc=void 0,ad={},Vc={},Rc=void 0,Wc=function(a,b){var c=0,d=0;return{Wf:function(){if(c<a)return!1;xa()-d>=b&&(c=0);return c>=a},og:function(){xa()-d>=b&&(c=0);c++;d=xa()}}}(2,1E3),Xc=1E3,ed=function(a,b){if(cd&&!Vc[a]&&Sc!==a){Zc();Sc=a;Uc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";ad[a]="&e="+c+"&eid="+a;Rc||(Rc=v.setTimeout(Zc,500))}},fd=function(a,b,c){if(cd&&!Vc[a]&&b){a!==Sc&&(Zc(),Sc=a);var d=String(b[ec.fa]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Uc=Uc?Uc+"."+e:"&tr="+e;Rc||(Rc=v.setTimeout(Zc,500));2022<=Yc().length&&Zc()}};var gd={},hd=new pa,id={},jd={},nd={name:"dataLayer",set:function(a,b){f(kd(a,b),id);ld()},get:function(a){return md(a,2)},reset:function(){hd=new pa;id={};ld()}},md=function(a,b){if(2!=b){var c=hd.get(a);if(cd){var d=od(a);c!==d&&ab("GTM",5)}return c}return od(a)},od=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:qd(d)},qd=function(a){for(var b=id,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var td=function(a,b){jd.hasOwnProperty(a)||(hd.set(a,b),f(kd(a,b),id),ld())},kd=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},ld=function(a){sa(jd,function(b,c){hd.set(b,c);f(kd(b,void 0),id);f(kd(b,c),id);a&&delete jd[b]})},ud=function(a,b,c){gd[a]=gd[a]||{};var d=1!==c?od(b):hd.get(b);"array"===Fa(d)||"object"===Fa(d)?gd[a][b]=f(d):gd[a][b]=d},vd=function(a,b){if(gd[a])return gd[a][b]};var wd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),xd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},yd={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},zd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Bd=function(a){var b=md("gtm.whitelist");b&&ab("GTM",9);var c=b&&Da(va(b),xd),d=md("gtm.blacklist");d||(d=md("tagTypeBlacklist"))&&ab("GTM",3);
d?ab("GTM",8):d=[];Ad()&&(d=va(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=ma(va(d),"google")&&ab("GTM",2);var e=d&&Da(va(d),yd),g={};return function(h){var k=h&&h[ec.fa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=Jc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>ma(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>
ma(c,l[q])){ab("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var p=0<=ma(e,k);if(p)t=p;else{var r=ra(e,l||[]);r&&ab("GTM",10);t=r}}var u=!m||t;u||!(0<=ma(l,"sandboxedScripts"))||c&&-1!==ma(c,"sandboxedScripts")||(u=ra(e,zd));return g[k]=u}},Ad=function(){return wd.test(v.location&&v.location.hostname)};var Cd={pf:function(a,b){b[ec.Wc]&&"string"===typeof a&&(a=1==b[ec.Wc]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(ec.Yc)&&null===a&&(a=b[ec.Yc]);b.hasOwnProperty(ec.$c)&&void 0===a&&(a=b[ec.$c]);b.hasOwnProperty(ec.Zc)&&!0===a&&(a=b[ec.Zc]);b.hasOwnProperty(ec.Xc)&&!1===a&&(a=b[ec.Xc]);return a}};var Dd={active:!0,isWhitelisted:function(){return!0}},Ed=function(a){var b=zc.zones;!b&&a&&(b=zc.zones=a());return b};var Fd=!1,Gd=0,Hd=[];function Id(a){if(!Fd){var b=A.createEventObject,c="complete"==A.readyState,d="interactive"==A.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Fd=!0;for(var e=0;e<Hd.length;e++)D(Hd[e])}Hd.push=function(){for(var g=0;g<arguments.length;g++)D(arguments[g]);return 0}}}function Jd(){if(!Fd&&140>Gd){Gd++;try{A.documentElement.doScroll("left"),Id()}catch(a){v.setTimeout(Jd,50)}}}var Kd=function(a){Fd?a():Hd.push(a)};var Ld={},Md={},Nd=function(a,b,c,d){if(!Md[a]||Bc[b]||"__zone"===b)return-1;var e={};Ha(d)&&(e=f(d,e));e.id=c;e.status="timeout";return Md[a].tags.push(e)-1},Od=function(a,b,c,d){if(Md[a]){var e=Md[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Pd(a){for(var b=Ld[a]||[],c=0;c<b.length;c++)b[c]();Ld[a]={push:function(d){d(yc.h,Md[a])}}}
var Sd=function(a,b,c){Md[a]={tags:[]};ia(b)&&Qd(a,b);c&&v.setTimeout(function(){return Pd(a)},Number(c));return Rd(a)},Qd=function(a,b){Ld[a]=Ld[a]||[];Ld[a].push(za(function(){return D(function(){b(yc.h,Md[a])})}))};function Rd(a){var b=0,c=0,d=!1;return{add:function(){c++;return za(function(){b++;d&&b>=c&&Pd(a)})},We:function(){d=!0;b>=c&&Pd(a)}}};var Td=function(){function a(d){return!ka(d)||0>d?0:d}if(!zc._li&&v.performance&&v.performance.timing){var b=v.performance.timing.navigationStart,c=ka(nd.get("gtm.start"))?nd.get("gtm.start"):0;zc._li={cst:a(c-b),cbt:a(Fc-b)}}};var Xd=!1,Yd=function(){return v.GoogleAnalyticsObject&&v[v.GoogleAnalyticsObject]},Zd=!1;
var $d=function(a){v.GoogleAnalyticsObject||(v.GoogleAnalyticsObject=a||"ga");var b=v.GoogleAnalyticsObject;if(v[b])v.hasOwnProperty(b)||ab("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);v[b]=c}Td();return v[b]},ae=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Yd();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var ce=function(){},be=function(){return v.GoogleAnalyticsObject||"ga"},de=!1;var ke=function(a){};function je(a,b){a.containerId=yc.h;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function le(a,b,c,d){var e=Sb[a],g=me(a,b,c,d);if(!g)return null;var h=ac(e[ec.qd],c,[]);if(h&&h.length){var k=h[0];g=le(k.index,{J:g,O:1===k.zd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function me(a,b,c,d){function e(){if(g[ec.Ge])k();else{var w=bc(g,c,[]),y=Nd(c.id,String(g[ec.fa]),Number(g[ec.rd]),w[ec.He]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var B=xa()-C;fd(c.id,Sb[a],"5");Od(c.id,y,"success",B);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var B=xa()-C;fd(c.id,Sb[a],"6");Od(c.id,y,"failure",B);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;fd(c.id,g,"1");var z=function(B){var E=xa()-C;ke(B);fd(c.id,g,"7");Od(c.id,y,"exception",E);x||(x=!0,k())};var C=xa();try{$b(w,c)}catch(B){z(B)}}}var g=Sb[a],h=b.J,k=b.O,l=b.terminate;if(c.vc(g))return null;var m=ac(g[ec.sd],c,[]);if(m&&m.length){var n=m[0],q=le(n.index,{J:h,O:k,terminate:l},c,d);if(!q)return null;h=q;k=2===n.zd?l:q}if(g[ec.pd]||g[ec.Ie]){var t=g[ec.pd]?Ub:c.zg,p=h,r=k;if(!t[a]){e=za(e);var u=ne(a,t,e);h=u.J;k=u.O}return function(){t[a](p,r)}}return e}
function ne(a,b,c){var d=[],e=[];b[a]=oe(d,e,c);return{J:function(){b[a]=pe;for(var g=0;g<d.length;g++)d[g]()},O:function(){b[a]=qe;for(var g=0;g<e.length;g++)e[g]()}}}function oe(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function pe(a){a()}function qe(a,b){b()};var te=function(a,b){for(var c=[],d=0;d<Sb.length;d++)if(a.Ta[d]){var e=Sb[d];var g=b.add();try{var h=le(d,{J:g,O:g,terminate:g},a,d);h?c.push({be:d,Ud:cc(e),Af:h}):(re(d,a),g())}catch(l){g()}}b.We();c.sort(se);for(var k=0;k<c.length;k++)c[k].Af();return 0<c.length};function se(a,b){var c,d=b.Ud,e=a.Ud;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.be,k=b.be;g=h>k?1:h<k?-1:0}return g}
function re(a,b){if(!cd)return;var c=function(d){var e=b.vc(Sb[d])?"3":"4",g=ac(Sb[d][ec.qd],b,[]);g&&g.length&&c(g[0].index);fd(b.id,Sb[d],e);var h=ac(Sb[d][ec.sd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var ue=!1,ve=function(a,b,c,d,e){if("gtm.js"==b){if(ue)return!1;ue=!0}ed(a,b);var g=Sd(a,d,e);ud(a,"event",1);ud(a,"ecommerce",1);ud(a,"gtm");var h={id:a,name:b,vc:Bd(c),Ta:[],zg:[],Md:function(n){ab("GTM",6);ke(n)}};h.Ta=ic(h);var k=te(h,g);"gtm.js"!==b&&"gtm.sync"!==b||ce();if(!k)return k;for(var l=0;l<h.Ta.length;l++)if(h.Ta[l]){var m=
Sb[l];if(m&&!Bc[String(m[ec.fa])])return!0}return!1};var H={Rb:"event_callback",Tb:"event_timeout"};var xe=/[A-Z]+/,ye=/\s/,ze=function(a){if(ja(a)&&(a=wa(a),!ye.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(xe.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],ia:d}}}}},Be=function(a){for(var b={},c=0;c<a.length;++c){var d=ze(a[c]);d&&(b[d.id]=d)}Ae(b);var e=[];sa(b,function(g,h){e.push(h)});return e};
function Ae(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.ia[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Ce={};var De=null,Ee={},Fe={},Ge,He=function(a,b){var c={event:a};b&&(c.eventModel=f(b),b[H.Rb]&&(c.eventCallback=b[H.Rb]),b[H.Tb]&&(c.eventTimeout=b[H.Tb]));return c};
var Oe={config:function(a){},event:function(a){var b=a[1];if(ja(b)&&!(3<a.length)){var c;
if(2<a.length){if(!Ha(a[2]))return;c=a[2]}var d=He(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];Ce[b]||(Ce[b]=[]);Ce[b].push(c)}},set:function(a){var b;2==a.length&&Ha(a[1])?b=f(a[1]):3==a.length&&ja(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=f(b),b.event="gtag.set",b._clear=!0,b}},Pe={policy:!0};var Qe=function(){var a=!1;return a};var Se=function(a){return Re?A.querySelectorAll(a):null},Te=function(a,b){if(!Re)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!A.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Ue=!1;if(A.querySelectorAll)try{var Ve=A.querySelectorAll(":root");Ve&&1==Ve.length&&Ve[0]==A.documentElement&&(Ue=!0)}catch(a){}var Re=Ue;var bf=function(a){if(af(a))return a;this.Gg=a};bf.prototype.Hf=function(){return this.Gg};var af=function(a){return!a||"object"!==Fa(a)||Ha(a)?!1:"getUntrustedUpdateValue"in a};bf.prototype.getUntrustedUpdateValue=bf.prototype.Hf;var cf=!1,df=[];function ef(){if(!cf){cf=!0;for(var a=0;a<df.length;a++)D(df[a])}}var ff=function(a){cf?D(a):df.push(a)};var gf=[],hf=!1,jf=function(a){return v["dataLayer"].push(a)},kf=function(a){var b=zc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},mf=function(a){var b=a._clear;sa(a,function(g,h){"_clear"!==g&&(b&&td(g,void 0),td(g,h))});Ec||(Ec=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Kc(),a["gtm.uniqueEventId"]=d,td("gtm.uniqueEventId",d));Gc=c;var e=lf(a);
Gc=null;switch(c){case "gtag.set":e&&ab("GTM",18);break;case "gtm.init":ab("GTM",19),e&&ab("GTM",20)}return e};function lf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=zc.zones;d=e?e.checkState(yc.h,c):Dd;return d.active?ve(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var nf=function(){for(var a=!1;!hf&&0<gf.length;){hf=!0;delete id.eventModel;ld();var b=gf.shift();if(null!=b){var c=af(b);if(c){var d=b;b=af(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=md(h,1);if(la(k)||Ha(k))k=f(k);jd[h]=k}}try{if(ia(b))try{b.call(nd)}catch(u){}else if(la(b)){var l=b;if(ja(l[0])){var m=
l[0].split("."),n=m.pop(),q=l.slice(1),t=md(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,q)}catch(u){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&ja(b[0])){var r=Oe[b[0]];if(r&&(!c||!Pe[b[0]])){b=r(b);break a}}b=void 0}if(!b){hf=!1;continue}}a=mf(b)||a}}finally{c&&ld(!0)}}hf=!1}
return!a},of=function(){var a=nf();try{var b=yc.h,c=v["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},pf=function(){var a=Ka("dataLayer",[]),b=Ka("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Kd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});ff(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<zc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new bf(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);gf.push.apply(gf,d);if(300<this.length)for(ab("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return nf()&&h};gf.push.apply(gf,a.slice(0));D(of)};var qf;var Mf={};Mf.rb=new String("undefined");
var Nf=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Mf.rb?b:a[d]);return c.join("")}};Nf.prototype.toString=function(){return this.resolve("undefined")};Nf.prototype.valueOf=Nf.prototype.toString;Mf.Je=Nf;Mf.cc={};Mf.sf=function(a){return new Nf(a)};var Of={};Mf.pg=function(a,b){var c=Kc();Of[c]=[a,b];return c};Mf.xd=function(a){var b=a?0:1;return function(c){var d=Of[c];if(d&&"function"===typeof d[b])d[b]();Of[c]=void 0}};Mf.Uf=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};Mf.dg=function(a){if(a===Mf.rb)return a;var b=Kc();Mf.cc[b]=a;return'google_tag_manager["'+yc.h+'"].macro('+b+")"};Mf.Yf=function(a,b,c){a instanceof Mf.Je&&(a=a.resolve(Mf.pg(b,c)),b=ha);return{sc:a,J:b}};var Pf=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Ua(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Qf=function(a){zc.hasOwnProperty("autoEventsSettings")||(zc.autoEventsSettings={});var b=zc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Rf=function(a,b,c){Qf(a)[b]=c},Sf=function(a,b,c,d){var e=Qf(a),g=ya(e,b,d);e[b]=c(g)},Tf=function(a,b,c){var d=Qf(a);return ya(d,b,c)};var Uf=function(){for(var a=Ia.userAgent+(A.cookie||"")+(A.referrer||""),b=a.length,c=v.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(xa()/1E3)].join(".")},Xf=function(a,b,c,d){var e=Vf(b);return mb(a,e,Wf(c),d)},Vf=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Wf=function(a){if(!a||
"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Yf(a,b){var c=""+Vf(a),d=Wf(b);1<d&&(c+="-"+d);return c};var Zf=["1"],$f={},dg=function(a,b,c,d){var e=ag(a);$f[e]||bg(e,b,c)||(cg(e,Uf(),b,c,d),bg(e,b,c))};function cg(a,b,c,d,e){var g;g=["1",Yf(d,c),b].join(".");rb(a,g,c,d,0==e?void 0:new Date(xa()+1E3*(void 0==e?7776E3:e)))}function bg(a,b,c){var d=Xf(a,b,c,Zf);d&&($f[a]=d);return d}function ag(a){return(a||"_gcl")+"_au"};var eg=function(){for(var a=[],b=A.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Pc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Pc]||(g[a[h].Pc]=[]),g[a[h].Pc].push({timestamp:k[1],Ef:k[2]}))}return g};function fg(){for(var a=gg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function hg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var gg,ig,jg=function(a){gg=gg||hg();ig=ig||fg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(gg[l],gg[m],gg[n],gg[q])}return b.join("")},kg=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=ig[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}gg=gg||hg();ig=ig||
fg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var lg;function mg(a,b){if(!a||b===A.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var qg=function(){var a=ng,b=og,c=pg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Qa(A,"mousedown",d);Qa(A,"keyup",d);Qa(A,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},pg=function(){var a=Ka("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var rg=/(.*?)\*(.*?)\*(.*)/,sg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,tg=/^(?:www\.|m\.|amp\.)+/,ug=/([^?#]+)(\?[^#]*)?(#.*)?/,vg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,xg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(jg(String(d))))}var e=b.join("*");return["1",wg(e),e].join("*")},wg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=lg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}lg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^lg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},zg=function(){return function(a){var b=ib(v.location.href),c=b.search.replace("?",""),d=db(c,"_gl",!0)||"";a.query=yg(d)||{};var e=hb(b,"fragment").match(vg);a.fragment=yg(e&&e[3]||
"")||{}}},yg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=rg.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===wg(k,n)){l=!0;break a}l=!1}if(l){for(var q={},t=k?k.split("*"):[],p=0;p<t.length;p+=2)q[t[p]]=kg(t[p+1]);return q}}}}catch(r){}};
function Ag(a,b,c){function d(m){var n=m,q=vg.exec(n),t=n;if(q){var p=q[2],r=q[4];t=q[1];r&&(t=t+p+r)}m=t;var u=m.charAt(m.length-1);m&&"&"!==u&&(m+="&");return m+l}c=void 0===c?!1:c;var e=ug.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function Bg(a,b,c){for(var d={},e={},g=pg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&mg(k.domains,b)&&(k.fragment?Aa(e,k.callback()):Aa(d,k.callback()))}if(Ba(d)){var l=xg(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],q=!1,t=0;t<n.length;t++){var p=n[t];if("_gl"===p.name){p.setAttribute("value",l);q=!0;break}}if(!q){var r=A.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var u=Ag(l,a.action);Za.test(u)&&(a.action=u)}}}else Cg(l,a,!1)}if(!c&&Ba(e)){var w=xg(e);Cg(w,a,!0)}}function Cg(a,b,c){if(b.href){var d=Ag(a,b.href,void 0===c?!1:c);Za.test(d)&&(b.href=d)}}
var ng=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||Bg(e,e.hostname,!1)}}catch(h){}},og=function(a){try{if(a.action){var b=hb(ib(a.action),"host");Bg(a,b,!0)}}catch(c){}},Dg=function(a,b,c,d){qg();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};pg().decorators.push(e)},Eg=function(){var a=A.location.hostname,b=sg.exec(A.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(tg,"")===e.replace(tg,"")},Fg=function(a,b){return!1===a?!1:a||b||Eg()};var Gg={};var Hg=/^\w+$/,Ig=/^[\w-]+$/,Jg=/^~?[\w-]+$/,Kg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function Lg(a){return a&&"string"==typeof a&&a.match(Hg)?a:"_gcl"}var Ng=function(){var a=ib(v.location.href),b=hb(a,"query",!1,void 0,"gclid"),c=hb(a,"query",!1,void 0,"gclsrc"),d=hb(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||db(e,"gclid",void 0);c=c||db(e,"gclsrc",void 0)}return Mg(b,c,d)};
function Mg(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(Ig))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==Gg.gtm_3pds?0:Gg.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function Og(a,b,c){function d(q,t){var p=Pg(q,e);p&&rb(p,t,h,g,l,!0)}b=b||{};var e=Lg(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Nd?7776E3:b.Nd;c=c||xa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(q){return["GCL",m,q].join(".")};a.aw&&(!0===b.mh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var Pg=function(a,b){var c=Kg[a];if(void 0!==c)return b+c},Qg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function Rg(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Sg=function(a,b,c,d,e){if(la(b)){var g=Lg(e);Dg(function(){for(var h={},k=0;k<a.length;++k){var l=Pg(a[k],g);if(l){var m=jb(l,A.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Tg=function(a){return a.filter(function(b){return Jg.test(b)})},Ug=function(a){for(var b=["aw","dc"],c=Lg(a&&a.prefix),d={},e=0;e<b.length;e++)Kg[b[e]]&&(d[b[e]]=Kg[b[e]]);sa(d,function(g,h){var k=jb(c+h,A.cookie);if(k.length){var l=k[0],m=Qg(l),n={};n[g]=[Rg(l)];Og(n,a,m)}})};var Vg=/^\d+\.fls\.doubleclick\.net$/;function Wg(a){var b=ib(v.location.href),c=hb(b,"host",!1);if(c&&c.match(Vg)){var d=hb(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Xg(a,b){if("aw"==a||"dc"==a){var c=Wg("gcl"+a);if(c)return c.split(".")}var d=Lg(b);if("_gcl"==d){var e;e=Ng()[a]||[];if(0<e.length)return e}var g=Pg(a,d),h;if(g){var k=[];if(A.cookie){var l=jb(g,A.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Rg(l[m]);n&&-1===ma(k,n)&&k.push(n)}h=Tg(k)}else h=k}else h=k}else h=[];return h}
var Yg=function(){var a=Wg("gac");if(a)return decodeURIComponent(a);var b=eg(),c=[];sa(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Ef);g=Tg(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},$g=function(a,b,c,d,e){dg(b,c,d,e);var g=$f[ag(b)],h=Ng().dc||[],k=!1;if(g&&0<h.length){var l=zc.joined_au=zc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var q="https://adservice.google.com/ddm/regclk",t=q=q+"?gclid="+h[n]+"&auiddc="+g;Ia.sendBeacon&&Ia.sendBeacon(t)||Pa(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var p=ag(b),r=$f[p];r&&cg(p,r,c,d,e)}};var ah;if(3===yc.vb.length)ah="g";else{var bh="G";ah=bh}
var ch={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:ah,OPT:"o"},dh=function(a){var b=yc.h.split("-"),c=b[0].toUpperCase(),d=ch[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===yc.vb.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+yc.vb+e};var ih=["input","select","textarea"],jh=["button","hidden","image","reset","submit"],kh=function(a){var b=a.tagName.toLowerCase();return!na(ih,function(c){return c===b})||"input"===b&&na(jh,function(c){return c===a.type.toLowerCase()})?!1:!0},lh=function(a){return a.form?a.form.tagName?a.form:A.getElementById(a.form):Xa(a,["form"],100)},mh=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(kh(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var ph=!!v.MutationObserver,qh=void 0,rh=function(a){if(!qh){var b=function(){var c=A.body;if(c)if(ph)(new MutationObserver(function(){for(var e=0;e<qh.length;e++)D(qh[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Qa(c,"DOMNodeInserted",function(){d||(d=!0,D(function(){d=!1;for(var e=0;e<qh.length;e++)D(qh[e])}))})}};qh=[];A.body?b():D(b)}qh.push(a)};
var Jh=function(){var a=A.body,b=A.documentElement||a&&a.parentElement,c,d;if(A.compatMode&&"BackCompat"!==A.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(g,h){return g&&h?Math.min(g,h):Math.max(g,h)};ab("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Kh=function(a){var b=Jh(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},Lh=function(a){if(A.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!v.getComputedStyle)return!0;var c=v.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),g=Math.min(h,g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=v.getComputedStyle(d,null))}return!1};
var Sh=function(a,b,c){function d(){var h=a();g+=e?(xa()-e)*h.playbackRate/1E3:0;e=xa()}var e=0,g=0;return{Db:function(h,k,l){var m=a(),n=m.yd,q=void 0!==l?Math.round(l):void 0!==k?Math.round(m.yd*k):Math.round(m.tf),t=void 0!==k?Math.round(100*k):0>=n?0:Math.round(q/n*100),p=A.hidden?!1:.5<=Kh(c);d();var r=Pf(c,"gtm.video",[b]);r["gtm.videoProvider"]="youtube";r["gtm.videoStatus"]=h;r["gtm.videoUrl"]=m.url;r["gtm.videoTitle"]=m.title;r["gtm.videoDuration"]=Math.round(n);r["gtm.videoCurrentTime"]=
Math.round(q);r["gtm.videoElapsedTime"]=Math.round(g);r["gtm.videoPercent"]=t;r["gtm.videoVisible"]=p;jf(r)},rg:function(){e=xa()},fc:function(){d()}}};var Th=v.clearTimeout,Uh=v.setTimeout,K=function(a,b,c){if(Qe()){b&&D(b)}else return Ma(a,b,c)},Vh=function(){return new Date},Wh=function(){return v.location.href},Xh=function(a){return hb(ib(a),"fragment")},Yh=function(a){return gb(ib(a))},Zh=null;
var $h=function(a,b){return md(a,b||2)},ai=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return jf(a)},bi=function(a,b){v[a]=b},L=function(a,b,c){b&&(void 0===v[a]||c&&!v[a])&&(v[a]=b);return v[a]},ci=function(a,b,c){return jb(a,b,void 0===c?!0:!!c)},di=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Nd:d},g=Ng();Og(g,e);Ug(e)},ei=function(a,b,c,d,e){var g=zg(),h=pg();h.data||(h.data={query:{},fragment:{}},g(h.data));var k={},l=h.data;l&&
(Aa(k,l.query),Aa(k,l.fragment));for(var m=Lg(b),n=0;n<a.length;++n){var q=a[n];if(void 0!==Kg[q]){var t=Pg(q,m),p=k[t];if(p){var r=Math.min(Qg(p),xa()),u;b:{for(var w=r,y=jb(t,A.cookie),x=0;x<y.length;++x)if(Qg(y[x])>w){u=!0;break b}u=!1}u||rb(t,p,c,d,0==e?void 0:new Date(r+1E3*(null==e?7776E3:e)),!0)}}}var z={prefix:b,path:c,domain:d};Og(Mg(k.gclid,k.gclsrc),z);},fi=function(a,b,c,d,e){Sg(a,b,c,d,e);},
gi=function(a,b){if(Qe()){b&&D(b)}else Oa(a,b)},hi=function(a){return!!Tf(a,"init",!1)},ii=function(a){Rf(a,"init",!0)},ji=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Dc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&sa(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});K(G("https://","http://",d))},ki=function(a,b){var c=a[b];return c};
var mi=Mf.Yf;var ni=new pa,oi=function(a,b){function c(h){var k=ib(h),l=hb(k,"protocol"),m=hb(k,"host",!0),n=hb(k,"port"),q=hb(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},pi=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&la(c)){for(var d=0;d<c.length;d++)if(pi({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(u){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=ma(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var t=a.ignore_case?"i":void 0;try{var p=String(c)+t,r=ni.get(p);r||(r=new RegExp(c,t),ni.set(p,r));q=r.test(b)}catch(u){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return oi(b,c)}return!1};var ri=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var si={},ti=encodeURI,Y=encodeURIComponent,ui=Pa;var vi=function(a,b){if(!a)return!1;var c=hb(ib(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var wi=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};si.Vf=function(){var a=!1;return a};var xi=function(){var a=!1;return a};var Xi=function(){var a=v.gaGlobal=v.gaGlobal||{};a.hid=a.hid||oa();return a.hid};var oj=function(a,b,c,d){this.n=a;this.t=b;this.p=c;this.d=d},pj=function(){this.c=1;this.e=[];this.p=null};function qj(a){var b=zc,c=b.gss=b.gss||{};return c[a]=c[a]||new pj}var rj=function(a,b){qj(a).p=b},sj=function(a){var b=qj(a),c=b.p;if(c){var d=b.e,e=[];b.e=[];var g=function(h){for(var k=0;k<h.length;k++)try{var l=h[k];l.d?(l.d=!1,e.push(l)):c(l.n,l.t,l.p)}catch(m){}};g(d);g(e)}};var Cj=window,Dj=document,Ej=function(a){var b=Cj._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Cj["ga-disable-"+a])return!0;try{var c=Cj.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=jb("AMP_TOKEN",Dj.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Dj.getElementById("__gaOptOutExtension")?!0:!1};var Lj=function(a,b,c){Kj(a);var d=Math.floor(xa()/1E3);qj(a).e.push(new oj(b,d,c,void 0));sj(a)},Mj=function(a,b,c){Kj(a);var d=Math.floor(xa()/1E3);qj(a).e.push(new oj(b,d,c,!0))},Kj=function(a){if(1===qj(a).c&&(qj(a).c=2,!Qe())){var b=encodeURIComponent(a);Ma(("http:"!=v.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},Oj=function(a,b){},Nj=function(a,
b){},Pj=function(a){return"_"===a.charAt(0)},Qj=function(a){sa(a,function(c){Pj(c)&&delete a[c]});var b=a[H.qb]||{};sa(b,function(c){Pj(c)&&delete b[c]})};var Z={a:{}};
Z.a.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var z=[],C=x.split(","),B=0;B<C.length;B++){var E=Number(C[B]);if(isNaN(E))return[];n.test(C[B])||z.push(E)}return z}function c(){var x=0,z=0;return function(){var C=Jh(),B=C.height;x=Math.max(u.scrollLeft+C.width,x);z=Math.max(u.scrollTop+B,z);return{vf:x,wf:z}}}function d(){p=L("self");
r=p.document;u=r.scrollingElement||r.body&&r.body.parentNode;y=c()}function e(x,z,C,B){var E=l(z),F={},P;for(P in E){F.na=P;if(E.hasOwnProperty(F.na)){var U=Number(F.na);x<U||(ai({event:"gtm.scrollDepth","gtm.scrollThreshold":U,"gtm.scrollUnits":C.toLowerCase(),"gtm.scrollDirection":B,"gtm.triggers":E[F.na].join(",")}),Sf("sdl",z,function(R){return function(T){delete T[R.na];return T}}(F),{}))}F={na:F.na}}}function g(){var x=y(),z=x.vf,C=x.wf,B=z/u.scrollWidth*100,E=C/u.scrollHeight*100;e(z,"horiz.pix",
q.tb,t.od);e(B,"horiz.pct",q.sb,t.od);e(C,"vert.pix",q.tb,t.td);e(E,"vert.pct",q.sb,t.td);Rf("sdl","pending",!1)}function h(){var x=250,z=!1;r.scrollingElement&&r.documentElement&&p.addEventListener&&(x=50,z=!0);var C=0,B=!1,E=function(){B?C=Uh(E,x):(C=0,g(),hi("sdl")&&!a()&&(Ra(p,"scroll",F),Ra(p,"resize",F),Rf("sdl","init",!1)));B=!1},F=function(){z&&y();C?B=!0:(C=Uh(E,x),Rf("sdl","pending",!0))};return F}function k(x,z,C){if(z){var B=b(String(x));Sf("sdl",C,function(E){for(var F=0;F<B.length;F++){var P=
String(B[F]);E.hasOwnProperty(P)||(E[P]=[]);E[P].push(z)}return E},{})}}function l(x){return Tf("sdl",x,{})}function m(x){D(x.vtp_gtmOnSuccess);var z=x.vtp_uniqueTriggerId,C=x.vtp_horizontalThresholdsPixels,B=x.vtp_horizontalThresholdsPercent,E=x.vtp_verticalThresholdUnits,F=x.vtp_verticalThresholdsPixels,P=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case q.tb:k(C,z,"horiz.pix");break;case q.sb:k(B,z,"horiz.pct")}switch(E){case q.tb:k(F,z,"vert.pix");break;case q.sb:k(P,
z,"vert.pct")}hi("sdl")?Tf("sdl","pending")||(w||(d(),w=!0),D(function(){return g()})):(d(),w=!0,u&&(ii("sdl"),Rf("sdl","pending",!0),D(function(){g();if(a()){var U=h();Qa(p,"scroll",U);Qa(p,"resize",U)}else Rf("sdl","init",!1)})))}var n=/^\s*$/,q={sb:"PERCENT",tb:"PIXELS"},t={td:"vertical",od:"horizontal"},p,r,u,w=!1,y;(function(x){Z.__sdl=x;Z.__sdl.b="sdl";Z.__sdl.g=!0;Z.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):ff(function(){m(x)})})}();

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=L("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0;Z.__sp.priorityOverride=0})(function(a){var b=a.vtp_gtmOnFailure;Td();K("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=L("google_trackConversion");if(ia(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=wi(a.vtp_customParams,"key","value"));var e={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(d.event=a.vtp_eventName),
a.vtp_eventValue&&(e.value=a.vtp_eventValue),a.vtp_eventItems&&(e.items=a.vtp_eventItems));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_gtag_event_data:e,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:dh()})||b()}else b()},b)})}();Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();

Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(vd(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=$h("gtm.referrer",1)||A.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?hb(ib(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Yh(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Pf(c,"gtm.click");ai(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!hi("cl")){var c=L("document");Qa(c,"click",a,!0);ii("cl")}D(b.vtp_gtmOnSuccess)})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0;Z.__k.priorityOverride=0})(function(a){return ci(a.vtp_name,$h("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0;Z.__r.priorityOverride=0})(function(a){return oa(a.vtp_min,a.vtp_max)})}();
Z.a.tg=["google"],function(){function a(k){h.push(k);1<h.length||D(function(){var l=h.join(",");h=[];ai({event:"gtm.triggerGroup","gtm.triggers":l})})}function b(k,l){var m=d[l],n=m.indexOf(k);-1!==n&&(m.splice(n,1),m.length||a(l))}function c(k){D(k.vtp_gtmOnSuccess);var l=k.vtp_uniqueTriggerId,m=k.vtp_triggerIds,n=k.vtp_firingId;if(k.vtp_isListeningTag){var q=e[n];q?b(n,q):g.push(n)}else{d[l]=m;for(var t=0,p;p=m[t];t++)e[p]=l;for(var r=0;r<g.length;r++)b(g[r],l)}}var d={},e={},g=[],h=[];Z.__tg=c;Z.__tg.b="tg";Z.__tg.g=!0;Z.__tg.priorityOverride=0}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:$h("gtm.url",1))||Wh();var d=b[a("vtp_component")];if(!d||"URL"==d)return Yh(String(c));var e=ib(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?la(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var q=hb(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){g=q;break a}}g=void 0}else g=hb(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=$h(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){var a,b=function(c){var d={},e={},g={},h={},k={},l=void 0;if(c.vtp_gaSettings){var m=c.vtp_gaSettings;f(wi(m.vtp_fieldsToSet,"fieldName","value"),e);f(wi(m.vtp_contentGroup,"index","group"),g);f(wi(m.vtp_dimension,"index","dimension"),h);f(wi(m.vtp_metric,"index","metric"),k);c.vtp_gaSettings=null;m.vtp_fieldsToSet=void 0;m.vtp_contentGroup=void 0;m.vtp_dimension=void 0;m.vtp_metric=void 0;var n=f(m);c=f(c,n)}f(wi(c.vtp_fieldsToSet,"fieldName","value"),e);f(wi(c.vtp_contentGroup,
"index","group"),g);f(wi(c.vtp_dimension,"index","dimension"),h);f(wi(c.vtp_metric,"index","metric"),k);var q=$d(c.vtp_functionName);if(ia(q)){var t="",p="";c.vtp_setTrackerName&&"string"==typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(p=c.vtp_trackerName,t=p+"."):(p="gtm"+Kc(),t=p+".");var r={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},u={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},w=function(V){var N=[].slice.call(arguments,0);N[0]=t+N[0];q.apply(window,N)},y=function(V,N){return void 0===N?N:V(N)},x=function(V,N){if(N)for(var aa in N)N.hasOwnProperty(aa)&&w("set",V+aa,N[aa])},z=function(){
var V=function(Sj,Zg,Tj){if(!Ha(Zg))return!1;for(var xc=ya(Object(Zg),Tj,[]),Je=0;xc&&Je<xc.length;Je++)w(Sj,xc[Je]);return!!xc&&0<xc.length},N;if(c.vtp_useEcommerceDataLayer){var aa=!1;aa||(N=$h("ecommerce",1))}else c.vtp_ecommerceMacroData&&(N=c.vtp_ecommerceMacroData.ecommerce);if(!Ha(N))return;N=Object(N);var qa=ya(e,"currencyCode",N.currencyCode);
void 0!==qa&&w("set","&cu",qa);V("ec:addImpression",N,"impressions");if(V("ec:addPromo",N[N.promoClick?"promoClick":"promoView"],"promotions")&&N.promoClick){w("ec:setAction","promo_click",N.promoClick.actionField);return}for(var Ca="detail checkout checkout_option click add remove purchase refund".split(" "),Sa="refund purchase remove checkout checkout_option add click detail".split(" "),Ta=0;Ta<Ca.length;Ta++){var eb=N[Ca[Ta]];if(eb){V("ec:addProduct",eb,"products");w("ec:setAction",Ca[Ta],eb.actionField);
if(cd)for(var pb=0;pb<Sa.length;pb++){var Tb=N[Sa[pb]];if(Tb){Tb!==eb&&ab("GTM",13);break}}break}}},C=function(V,N,aa){var qa=0;if(V)for(var Ca in V)if(V.hasOwnProperty(Ca)&&(aa&&r[Ca]||!aa&&void 0===r[Ca])){var Sa=u[Ca]?ua(V[Ca]):V[Ca];"anonymizeIp"!=Ca||Sa||(Sa=void 0);N[Ca]=Sa;qa++}return qa},B={name:p};C(e,B,!0);(function(){})();
q("create",c.vtp_trackingId||d.trackingId,B);w("set","&gtm",dh(!0));c.vtp_enableRecaptcha&&w("require","recaptcha","recaptcha.js");(function(V,N){void 0!==c[N]&&w("set",V,c[N])})("nonInteraction","vtp_nonInteraction");x("contentGroup",g);x("dimension",h);x("metric",k);var E={};C(e,E,!1)&&w("set",E);var F;c.vtp_enableLinkId&&w("require",
"linkid","linkid.js");w("set","hitCallback",function(){var V=e&&e.hitCallback;ia(V)&&V();c.vtp_gtmOnSuccess()});if("TRACK_EVENT"==c.vtp_trackType){c.vtp_enableEcommerce&&(w("require","ec","ec.js"),z());var P={hitType:"event",eventCategory:String(c.vtp_eventCategory||d.category),eventAction:String(c.vtp_eventAction||d.action),eventLabel:y(String,c.vtp_eventLabel||d.label),eventValue:y(ta,c.vtp_eventValue||d.value)};C(F,P,!1);w("send",
P);}else if("TRACK_SOCIAL"==c.vtp_trackType){}else if("TRACK_TRANSACTION"==c.vtp_trackType){}else if("TRACK_TIMING"==
c.vtp_trackType){}else if("DECORATE_LINK"==c.vtp_trackType){}else if("DECORATE_FORM"==c.vtp_trackType){}else if("TRACK_DATA"==c.vtp_trackType){}else{c.vtp_enableEcommerce&&(w("require","ec","ec.js"),z());if(c.vtp_doubleClick||"DISPLAY_FEATURES"==c.vtp_advertisingFeaturesType){var S=
"_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");w("require","displayfeatures",void 0,{cookieName:S})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==c.vtp_advertisingFeaturesType){var X="_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");w("require","adfeatures",{cookieName:X})}F?w("send","pageview",F):w("send","pageview");}if(!a){var W=c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";c.vtp_useInternalVersion&&!c.vtp_useDebugVersion&&(W="internal/"+W);a=!0;var ea=G("https:","http:","//www.google-analytics.com/"+W,e&&e.forceSSL);K(ea,function(){var V=Yd();V&&V.loaded||c.vtp_gtmOnFailure();},
c.vtp_gtmOnFailure)}}else D(c.vtp_gtmOnFailure)};Z.__ua=b;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();



Z.a.ytl=["google"],function(){function a(){var w=Math.round(1E9*Math.random())+"";return A.getElementById(w)?a():w}function b(w,y){if(!w)return!1;for(var x=0;x<t.length;x++)if(0<=w.indexOf("//"+t[x]+"/"+y))return!0;return!1}function c(w){var y=-1!==w.indexOf("?")?"&":"?";if(-1<w.indexOf("origin="))return w+y+"enablejsapi=1";if(!r){var x=L("document");r=x.location.protocol+"//"+x.location.hostname;x.location.port&&(r+=":"+x.location.port)}return w+y+"enablejsapi=1&origin="+encodeURIComponent(r)}function d(w,
y){var x=w.getAttribute("src");if(b(x,"embed/")){if(0<x.indexOf("enablejsapi=1"))return!0;if(y)return w.setAttribute("src",c(x)),!0}return!1}function e(w,y){if(!w.getAttribute("data-gtm-yt-inspected-"+y.Qc)&&(w.setAttribute("data-gtm-yt-inspected-"+y.Qc,"true"),d(w,y.Bd))){w.id||(w.id=a());var x=L("YT"),z=x.get(w.id);z||(z=new x.Player(w.id));var C=h(z,y),B={},E;for(E in C)B.Fa=E,C.hasOwnProperty(B.Fa)&&z.addEventListener(B.Fa,function(F){return function(P){return C[F.Fa](P.data)}}(B)),B={Fa:B.Fa}}}
function g(w){D(function(){function y(){for(var z=x.getElementsByTagName("iframe"),C=z.length,B=0;B<C;B++)e(z[B],w)}var x=L("document");y();rh(y)})}function h(w,y){var x,z;function C(){M=Sh(function(){return{url:Q,title:S,yd:J,tf:w.getCurrentTime(),playbackRate:X}},y.Qc,w.getIframe());J=0;S=Q="";X=1;return B}function B(N){switch(N){case p.PLAYING:J=Math.round(w.getDuration());Q=w.getVideoUrl();if(w.getVideoData){var aa=w.getVideoData();S=aa?aa.title:""}X=w.getPlaybackRate();y.lf?M.Db("start"):M.fc();
I=m(y.gg,y.fg,w.getDuration());return E(N);default:return B}}function E(){W=w.getCurrentTime();ea=Vh().getTime();M.rg();O();return F}function F(N){var aa;switch(N){case p.ENDED:return U(N);case p.PAUSED:aa="pause";case p.BUFFERING:var qa=w.getCurrentTime()-W;aa=1<Math.abs((Vh().getTime()-ea)/1E3*X-qa)?"seek":aa||"buffering";w.getCurrentTime()&&(y.kf?M.Db(aa):M.fc());T();return P;case p.UNSTARTED:return C(N);default:return F}}function P(N){switch(N){case p.ENDED:return U(N);case p.PLAYING:return E(N);
case p.UNSTARTED:return C(N);default:return P}}function U(){for(;z;){var N=x;Th(z);N()}y.jf&&M.Db("complete",1);return C(p.UNSTARTED)}function R(){}function T(){z&&(Th(z),z=0,x=R)}function O(){if(I.length&&0!==X){var N=-1,aa;do{aa=I[0];if(aa.la>w.getDuration())return;N=(aa.la-w.getCurrentTime())/X;if(0>N&&(I.shift(),0===I.length))return}while(0>N);x=function(){z=0;x=R;0<I.length&&I[0].la===aa.la&&(I.shift(),M.Db("progress",aa.Td,aa.Zd));O()};z=Uh(x,1E3*N)}}var M,I=[],J,Q,S,X,W,ea,V=C(p.UNSTARTED);
z=0;x=R;return{onStateChange:function(N){V=V(N)},onPlaybackRateChange:function(N){W=w.getCurrentTime();ea=Vh().getTime();M.fc();X=N;T();O()}}}function k(w){for(var y=w.split(","),x=y.length,z=[],C=0;C<x;C++){var B=parseInt(y[C],10);isNaN(B)||100<B||0>B||z.push(B/100)}z.sort(function(E,F){return E-F});return z}function l(w){for(var y=w.split(","),x=y.length,z=[],C=0;C<x;C++){var B=parseInt(y[C],10);isNaN(B)||0>B||z.push(B)}z.sort(function(E,F){return E-F});return z}function m(w,y,x){var z=w.map(function(E){return{la:E,
Zd:E,Td:void 0}});if(!y.length)return z;var C=y.map(function(E){return{la:E*x,Zd:void 0,Td:E}});if(!z.length)return C;var B=z.concat(C);B.sort(function(E,F){return E.la-F.la});return B}function n(w){w.vtp_triggerStartOption?q(w):Kd(function(){q(w)})}function q(w){var y=!!w.vtp_captureStart,x=!!w.vtp_captureComplete,z=!!w.vtp_capturePause,C=k(w.vtp_progressThresholdsPercent+""),B=l(w.vtp_progressThresholdsTimeInSeconds+""),E=!!w.vtp_fixMissingApi;if(y||x||z||C.length||B.length){var F={lf:y,jf:x,kf:z,
fg:C,gg:B,Bd:E,Qc:void 0===w.vtp_uniqueTriggerId?"":w.vtp_uniqueTriggerId},P=L("YT"),U=function(){g(F)};D(w.vtp_gtmOnSuccess);if(P)P.ready&&P.ready(U);else{var R=L("onYouTubeIframeAPIReady");bi("onYouTubeIframeAPIReady",function(){R&&R();U()});D(function(){for(var T=L("document"),O=T.getElementsByTagName("script"),M=O.length,I=0;I<M;I++){var J=O[I].getAttribute("src");if(b(J,"iframe_api")||b(J,"player_api"))return}for(var Q=T.getElementsByTagName("iframe"),S=Q.length,X=0;X<S;X++)if(!u&&d(Q[X],F.Bd)){K("https://www.youtube.com/iframe_api");
u=!0;break}})}}else D(w.vtp_gtmOnSuccess)}var t=["www.youtube.com","www.youtube-nocookie.com"],p={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},r,u=!1;Z.__ytl=n;Z.__ytl.b="ytl";Z.__ytl.g=!0;Z.__ytl.priorityOverride=0}();

Z.a.aev=["google"],function(){function a(p,r){var u=!1,w;var y=vd(p,"gtm");if(!y)return;u=!0;w=y[r];u||(w=$h("gtm."+r,1));return w}function b(p,r,u,w){w||(w="element");var y=p+"."+r,x;if(n.hasOwnProperty(y))x=n[y];else{var z=a(p,w);if(z&&(x=u(z),n[y]=x,q.push(y),35<q.length)){var C=q.shift();delete n[C]}}return x}function c(p,r,u){var w=a(p,t[r]);return void 0!==w?w:u}function d(p,r){if(!p)return!1;
var u=e(Wh());la(r)||(r=String(r||"").replace(/\s+/g,"").split(","));for(var w=[u],y=0;y<r.length;y++)if(r[y]instanceof RegExp){if(r[y].test(p))return!1}else{var x=r[y];if(0!=x.length){if(0<=e(p).indexOf(x))return!1;w.push(e(x))}}return!vi(p,w)}function e(p){m.test(p)||(p="http://"+p);return hb(ib(p),"HOST",!0)}function g(p,r,u){switch(p){case "SUBMIT_TEXT":return b(r,"FORM."+p,h,"formSubmitElement")||u;case "LENGTH":return b(r,"FORM."+p,k)||u;case "INTERACTED_FIELD_ID":return l(r,"id",u);case "INTERACTED_FIELD_NAME":return l(r,
"name",u);case "INTERACTED_FIELD_TYPE":return l(r,"type",u);case "INTERACTED_FIELD_POSITION":return a(r,"interactedFormFieldPosition")||u;default:return u}}function h(p){switch(p.tagName.toLowerCase()){case "input":return Ua(p,"value");case "button":return Va(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var r=0,u=0;u<p.elements.length;u++)kh(p.elements[u])&&r++;return r}}function l(p,r,u){var w=a(p,"interactedFormField");return w&&Ua(w,r)||u}var m=/^https?:\/\//i,
n={},q=[],t={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(p){var r=p.vtp_gtmEventId,u=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var y=
a(r,"element");return y&&y.tagName||u;case "TEXT":return b(r,w,Va)||u;case "URL":var x;a:{var z=String(a(r,"elementUrl")||u||""),C=ib(z),B=String(p.vtp_component||"URL");switch(B){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,p.vtp_affiliatedDomains);break a;default:x=hb(C,B,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===p.vtp_attribute)E=c(r,w,u);else{var F=p.vtp_attribute,P=a(r,"element");E=P&&Ua(P,F)||u||""}return E;case "MD":var U=p.vtp_mdValue,
R=b(r,"MD",Fh);return U&&R?Ih(R,U)||u:R||u;case "FORM":return g(String(p.vtp_component||"SUBMIT_TEXT"),r,u);default:return c(r,w,u)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(a){var b=f(a),c=b;c[ec.fa]=null;c[ec.Ee]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=L("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){Td();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:dh()},m=function(t){return function(p,r,u){var w="DATA_LAYER"==t?$h(u):k[r];w&&(l[p]=w)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(t){return{value:t.price,quantity:t.quantity,item_id:t.id}}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),
l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var q=!0;q&&b.push(l);a||(a=!0,K("//www.googleadservices.com/pagead/conversion_async.js",g(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0;Z.__awct.priorityOverride=0}();
Z.a.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.b="remm";Z.__remm.g=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[g].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();





Z.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=A.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,La(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];k.firstChild;)q.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,q,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){D(h)}}}var c=function(d){if(A.body){var e=
d.vtp_gtmOnFailure,g=mi(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.sc,k=g.J;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(A.body,Wa(h),k,e)()}else Uh(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();





Z.a.lcl=[],function(){function a(){var c=L("document"),d=0,e=function(g){var h=g.target;if(h&&3!==g.which&&(!g.timeStamp||g.timeStamp!==d)){d=g.timeStamp;h=Xa(h,["a","area"],100);if(!h)return g.returnValue;var k=g.defaultPrevented||!1===g.returnValue,l=Tf("lcl",k?"nv.mwt":"mwt",0),m;m=k?Tf("lcl","nv.ids",[]):Tf("lcl","ids",[]);if(m.length){var n=Pf(h,"gtm.linkClick",m);if(b(g,h,c)&&!k&&l&&h.href){var q=L((ki(h,"target")||"_self").substring(1)),t=!0;if(ai(n,kf(function(){t&&q&&(q.location.href=ki(h,
"href"))}),l))t=!1;else return g.preventDefault&&g.preventDefault(),g.returnValue=!1}else ai(n,function(){},l||2E3);return!0}}};Qa(c,"click",e,!1);Qa(c,"auxclick",e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var g=ki(d,"href"),h=g.indexOf("#"),k=ki(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=Yh(g),m=Yh(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=
0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,g=Number(c.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(g,m)};Sf("lcl","mwt",k,0);e||Sf("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};Sf("lcl","ids",l,[]);e||Sf("lcl","nv.ids",l,[]);hi("lcl")||(a(),ii("lcl"));D(c.vtp_gtmOnSuccess)})}();

var Rj={};Rj.macro=function(a){if(Mf.cc.hasOwnProperty(a))return Mf.cc[a]},Rj.onHtmlSuccess=Mf.xd(!0),Rj.onHtmlFailure=Mf.xd(!1);Rj.dataLayer=nd;Rj.callback=function(a){Ic.hasOwnProperty(a)&&ia(Ic[a])&&Ic[a]();delete Ic[a]};Rj.af=function(){zc[yc.h]=Rj;Aa(Jc,Z.a);Xb=Xb||Mf;Yb=Cd};
Rj.Qf=function(){Gg.gtm_3pds=!0;zc=v.google_tag_manager=v.google_tag_manager||{};if(zc[yc.h]){var a=zc.zones;a&&a.unregisterChild(yc.h)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Pb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Sb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)Rb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},t=0;t<n.length;t++)q[n[t][0]]=Array.prototype.slice.call(n[t],1);Qb.push(q)}Vb=Z;Wb=pi;Rj.af();pf();Fd=!1;Gd=0;if("interactive"==A.readyState&&!A.createEventObject||"complete"==A.readyState)Id();else{Qa(A,"DOMContentLoaded",Id);Qa(A,"readystatechange",Id);if(A.createEventObject&&A.documentElement.doScroll){var p=!0;try{p=!v.frameElement}catch(y){}p&&Jd()}Qa(v,"load",Id)}cf=!1;"complete"===A.readyState?ef():
Qa(v,"load",ef);a:{if(!cd)break a;v.setInterval(dd,864E5);}
Fc=(new Date).getTime();}};(0,Rj.Qf)();

})()
