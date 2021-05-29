!function(){var e=e||[];function t(){Date.prototype.format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var r in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),t)new RegExp("("+r+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[r]:("00"+t[r]).substr((""+t[r]).length)));return e};var t=function(e){var t=e;return chrome.runtime.onMessage.addListener(function(e,r,s){switch(e.cmd){case"popup_init":case"popup_reload":console.log(e.result),t.refresh(e.result.data),e.result.recognize_status&&t.start();break;case"popup_parse_result":t.show_new_result(e.result.data);break;case"popup_error_http":console.log(e.result);var a=e.result.msg;0!=e.result.status&&(a='Please <a url="https://extension.doreso.com/welcome_to_aha.html" href="#"> complete the security check to AHA</a>'),t.show_message(a,-1);break;case"popup_error":case"popup_update_version":console.log(e.result),t.show_message(e.result.msg,-1);break;case"popup_login":t.show_message('Please <a url="chrome://chrome-signin/" href="#"> login with your google account</a>',-1);break;case"popup_export":e.result.data.forEach((e,t,r)=>{e.detail_url="https://www.aha-music.com/"+e.acr_id+"?utm_source=chrome&utm_medium=extension"});var n=[{column:"acr_id",title:"ACR_ID"},{column:"title",title:"Title"},{column:"artist",title:"Artists"},{column:"timestamp",title:"Time",formatter:function(e){var t=new Date;return t.setTime(parseInt(e)),t.format("yyyy/MM/dd hh:mm:ss")}},{column:"tab_url",title:"Source_URL"},{column:"detail_url",title:"Detail_URL"}];_g_utils.save_csv(n,e.result.data,"aha_music_export.csv")}"popup_init"!=e.cmd&&t.stop(),t.refresh()}),{init:function(){chrome.runtime.sendMessage({cmd:"background_init"})},reload:function(){chrome.runtime.sendMessage({cmd:"background_reload"})},start:function(){this.cancel(),chrome.runtime.sendMessage({cmd:"background_start"}),t.start()},cancel:function(){t.reset(),chrome.runtime.sendMessage({cmd:"background_cancel"})},clear_history:function(){confirm("Do you want to clear history?")&&(chrome.runtime.sendMessage({cmd:"background_clear_history"}),t.clear_history())},export_history:function(){confirm("Do you want to export history?")&&chrome.runtime.sendMessage({cmd:"background_export_history"})}}}(function(){Handlebars.registerHelper("if_even",function(e,t){return(e+1)%2==0?t.fn(this):t.inverse(this)}),Handlebars.registerHelper("format_date",function(e,t){var r=new Date;return r.setTime(parseInt(e)),r.format("yyyy/MM/dd hh:mm:ss")});var t=$("#music_info_template").html(),r=Handlebars.compile(t);return{start:function(){$("#search_bar_start").hide(),$("#search_bar_running").show()},stop:function(){$("#search_bar_start").show(),$("#search_bar_running").hide()},show_message:function(e,t){var r="success";-1==t&&(r="error"),$("#search_result").hide(),$("#search_result").html("<div class='"+r+"'>"+e+"</div>"),$("#search_result").slideDown("slow")},refresh:function(t){if(void 0!==t){$("#history_music_info").html("");var s=r({music_infos:t});$("#history_music_info").html(s),$("#history_music_info").slideDown("slow")}$("a").each(function(){var t=$(this).attr("url"),r=$(this).attr("is_set_click");t&&!r&&($(this).attr("is_set_click","true"),$(this).click(function(){var r=$(this).attr("name");e.push(["_trackEvent",r,"clicked"]),chrome.tabs.create({url:t})}))})},reset:function(){$("#search_result").fadeOut(),$("#search_result").html("")},show_new_result:function(e){var t=r({music_infos:[e]}),s=$(t).addClass("success");$("#search_result").append(s),$("#search_result").slideDown("slow")},clear_history:function(){$("#search_result").html("")}}}());$("#search_bar_start").click(function(){e.push(["_trackEvent","search_bar_start","clicked"]),t.start()}),$("#clear_history").click(function(){e.push(["_trackEvent","recycle","clicked"]),t.clear_history()}),$("#export_history").click(function(){e.push(["_trackEvent","export_history","clicked"]),t.export_history()}),t.init(),t.start(),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://ssl.google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()}e.push(["_setAccount","UA-101242276-1"]),e.push(["_trackPageview"]),_g_utils={save_csv:function(e,t,r){if(Array.isArray(e)&&e.length>0){r&&"string"==typeof r||(fileName="export.csv");let s=function(e,t){let r=e.reduce((e,t)=>(e?e+",":"")+(t.title||t.column),"");if(Array.isArray(t)&&t.length>0){let s=e.map(e=>e.column);r=t.reduce((t,r)=>t+"\r\n"+s.reduce((t,s)=>{if(r.hasOwnProperty(s)){let a=r[s];if(null!=a){let r=e.find(e=>e.column==s);if(null!=r.formatter&&"function"==typeof r.formatter&&(a=r.formatter(a)),null!=a)return a=a.toString().replace(new RegExp("\r\n","g")," "),a=new RegExp(",").test(a)?`"${a}"`:a,t?t+","+a:t+a}return t?t+",":t+" "}return t?t+",":t+" "},""),r)}return new Blob(["\ufeff"+r],{type:"text/csv;charset=utf-8;"})}(e,t);if(navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(s,r);else{let e=URL.createObjectURL(s),t=document.createElement("a");t.href=e,t.download=r,document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(e)}}}},$(window).load(function(){var e=(new Date).getFullYear();$("#copyright_year").html(e),setTimeout(t,800)})}();