/*
 * @Author: 伟龙-Willon qq:1061258787 
 * @Date: 2018-02-05 16:00:18 
 * @Last Modified by: 伟龙-Willon
 * @Last Modified time: 2018-09-03 21:25:27
 * MINI-MVP框架
 */

 /**
  * ~屏蔽后期压缩带来的错误
  */

~function (global){
    
    var MVP = function(pst,fn){

        if(MVP.P[pst]){

            console.log('该组件已经存在，无法重复添加');

            return
        }

        MVP.P[pst] = fn;

    };

    MVP.M = Model;

    MVP.V = View;

    MVP.P = {};

    MVP.init = function(){             //初始化每个在管理器里的组件

        for(var modules in MVP.P){

            MVP.P[modules] && MVP.P[modules](MVP.M,MVP.V);
            
        }
    }
    
    global.MVP = MVP              //向最顶层对象暴露MVP超级对象

}(this);

