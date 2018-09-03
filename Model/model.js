/*
 * @Author: 伟龙-Willon qq:1061258787 
 * @Date: 2018-02-05 17:34:16 
 * @Last Modified by: 伟龙-Willon
 * @Last Modified time: 2018-09-03 21:21:15
 */

 /**
  *  MVP_Model层的模块封装
  */
var Model = (function(){

    var M = {};
    
    M.URL = URL;

    M.data = {};

    M.config = {};

    /**
     * v1.0
     * @param {String} url-name 
     * 缺点：
     * 1、当前版本还没有进行函数复写
     * 2、还没有效解决callback hell
     * 3、post请求没封装，有空就会慢慢完善
     * 
     */
    M.initData = function(url){     

        if(M.URL[url]){

            var xhr = '';

            if(window.XMLHttpRequest){

                xhr = new XMLHttpRequest();//标准浏览器

            }else{

                try{

                  xhr = new ActiveXObject('Msxml2.XMLHTTP.6.0');

                }catch(e){

                  xhr = new ActiveXObject('Msxml2.XMLHTTP.3.0');

                }

            }

            xhr.open('GET',M.URL.projectName+M.URL[url],true);

            xhr.onreadystatechange = function(){

                if(xhr.readyState == 4 && xhr.status == 200){

                    res = JSON.parse(xhr.responseText);

                    var newData  = res.dataDescription ? res.dataDescription : res;
            
                    M.data[url] = newData ;  //填充新的数据

                    return M.data[url];
                }
            }
            
            xhr.send(null);

        }else{

            console.log('url不存在，请在URL.js文件中补充该url');

            return false;
        }
        
    }

    return {

        /**
         * 暴露GET SET
         * 下面由于ASI机制我就不写分号了
         */
        getData:function(which){

            return (M.data[which])?M.data[which]:M.initData(which);   //数据没被记录，那么我就初始化数据了，总之presenter一定要得到回应

        },
        setData:function(which,data){

            M.data[which]?'':M.data[which] = data

        },
        getConfig : function(name){

            return (M.config[name])?M.config[name]:false

        },
        setConfig : function(name,data){

            M.config[name]?'':M.config[name] = data

        },
        getURL : function(name){

            return (M.URL[name])?M.URL[name]:false

        },
        setURL:function(name,data){

            M.URL[name]?'':M.URL[name] = data

        },
    }

})();