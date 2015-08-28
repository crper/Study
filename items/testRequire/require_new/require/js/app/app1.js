define(function(){
    return function(select,tiem){
        var _item = $(tiem);
        var time = 1000, overTimeFun, levelTimeFun;
        $('body').on('mouseover',select+':not(.stop)',function(){
            overTimeFun?clearTimeout(overTimeFun):'';
            levelTimeFun?clearTimeout(levelTimeFun):'';
            overTimeFun = setTimeout(function(){
                _show(tiem);
            },time)
        }).on('mouseover',_item,function(){
            levelTimeFun?clearTimeout(levelTimeFun):'';
        });

        $('body').on('mouseout',select+':not(.stop)',function(){
            overTimeFun?clearTimeout(overTimeFun):'';
            levelTimeFun?clearTimeout(levelTimeFun):'';
            levelTimeFun = setTimeout(function(){
                _hide(tiem);
            },time)
        }).on('mouseout',_item,function(){
            overTimeFun?clearTimeout(overTimeFun):'';
            levelTimeFun?clearTimeout(levelTimeFun):'';
            levelTimeFun = setTimeout(function(){
                _hide(tiem);
            },time)
        });

        function _show(tiem){
            $(tiem).show();
        }

        function _hide(tiem){
            $(tiem).hide();
        }
    }
});
