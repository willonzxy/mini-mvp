/*
 * @Author: 伟龙-Willon qq:1061258787 
 * @Date: 2018-02-05 17:34:09 
 * @Last Modified by: 伟龙-Willon
 * @Last Modified time: 2018-09-03 21:28:00
 */

var View = (function(){

    var V = {};
    
    V.TPL = {};  // 缓存html模板

    V.init = function(tpl){ // 

        var html = '';

        try {

            var doc = parent.window.frames.TPL.document;   //因为vsc的emment插件书写模板够快所以我偷懒用这招了，后续mvp版本会优化

                // console.log(doc.getElementById(tpl));

                html = doc.getElementById(tpl).innerHTML;

                V.TPL[tpl] = html;           //填充新的模板
                
                return html;
            
        } catch (error) {

            console.log('获取模板元素失败');

            console.log(error);
        }
    }


    return{

        getTPL:function(tpl){

            return V.TPL[tpl]?V.TPL[tpl]:V.init(tpl);

        }

    }
    
})();

/**冻结对象 下个版本再完善*/
// Object.freeze(View);
