// Bootstrap validate自定义插件
(function(root, factory, plug){
    return factory(root.jQuery,plug)
})(window,function($, plug) {
    //默认参数
    let __DEFS__ = {
        trigger: "change"
    }
    //规则引擎
    let __RULES__ = {
        required: function() {
            return this.val()!=="";
        },
        regex: function() {
            return new RegExp(this.data("bv-regex")).test(this.val())
            // return true;
        },
        email: function() {
            let reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
            return reg.test(this.val())
        },
        url: function() {
            let reg = /(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/;
            return reg.test(this.val());
        },
        greaterthan: function() {
            return Number(this.val()) > Number(this.data("bv-greaterthan"));
        },
        lessthan: function() {
            return Number(this.val()) < Number(this.data("bv-lessthan"));
        }
    }
    //创建mValidator插件
    $.fn[plug] = function(options) {
        $.extend(this, __DEFS__, options)
        let $fileds = this.find("input").not("[type=button],[type=submit],[type=reset]");
        $fileds.on(this.trigger, function(){
            let $filed = $(this);//获取验证目标
            let result = true;//验证默认通过
            $fileds.next().remove();//每次验证前删除之前提示信息
            $.each(__RULES__, (rule, valider)=>{
                if($filed.data("bv-"+rule)) {
                    result = valider.call($filed)
                    if(!result) {
                        // console.log($filed.data("bv-"+rule+"-message"))
                        $filed.after("<p>"+$filed.data("bv-"+rule+"-message")+"</p>")
                    }
                    return result;
                }
            })
        })
    }
},"mValidator");