function createPagePeelEffect() {    
    $("#pageflip").hover(function() {
        $("#pageflip img , .msg_block").stop()
        .animate({
            width: '307px',
            height: '319px'
        }, 500);
    } , function() {
        $("#pageflip img").stop()
            .animate({
                width: '80px',
                height: '83px'
            }, 220);
            $(".msg_block").stop()
                .animate({
                width: '80px',
                height: '80px'
            }, 200);
    });
} 
