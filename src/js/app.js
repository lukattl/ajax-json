var handleContent = function () {

    var preloader = $('.preloader');
    var ajaxLoader = '<img class="ajax-loader" src="/img/ajax-loader.gif" />';

    $('.btn').click(function(e) {
        e.preventDefault();

        $.ajax({
            url: "data/users.json",
            type: "GET",
            data: { "id" :1},
            beforeSend: function(){
                preloader.empty();
                preloader.append(ajaxLoader);
            },
            success: function(result){
                
            },
            error: function(xhr, status, error){
                if (error) {
                    preloader.empty();
                    preloader.text("An error occured while procssing your request! Your fault totaly!");
                    
                }
            },
            complete: function (){
               // preloader.empty();
            }
        });
    });
};

var App = function () {
    return {
        init: function (element) {
            handleContent();
        }
    }
}();