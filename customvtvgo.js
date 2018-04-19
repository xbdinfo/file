var isMobile = false;
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
                || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;
 
var $j = jQuery.noConflict();

var ua = navigator.userAgent;
var checker = {
  iphone: ua.match(/(iPhone|iPod|iPad)/),
  blackberry: ua.match(/BlackBerry/),
  android: ua.match(/Android/),
  windowphone: ua.match(/Windows Phone/i)
};


$j(function (){
    "use strict";
    //ONE PAGE NAV...
    $j('.menu-scroll').onePageNav({
        currentClass: 'selected',
        filter: ':not(.external)',
        scrollSpeed: 750,
        scrollOffset: -10,
        scrollChange: fixMagicline
    });
    
    $j('.menu-store-scroll').onePageNav({
        currentClass: 'selected',
        filter: ':not(.external)',
        scrollSpeed: 750,
        scrollOffset: -10,
        scrollChange: fixMagicline
    });



    
    
    $j("a#hide").click(function(){
                $j("#sugguestDownLoadApp").toggle(1000);
            });

    $j(".btn-login > div.box-btn-login").hover(function(){
        $j("li.btn-login > a").addClass("active");
    });
    $j(".btn-login > div.box-btn-login").mouseleave(function(){
        $j("li.btn-login > a").removeClass("active");
    });

    $j(".search-form > div.box-search-form").hover(function(){
        $j("li.search-form > a").addClass("active");
    });
    $j(".search-form > div.box-search-form").mouseleave(function(){
        $j("li.search-form > a").removeClass("active");
    });


    var a_calendar = $j("li.isActive span p.title").text();
    $j("li.link.program").html(a_calendar);


 
  

    
    $j('.channel_list .items .item').on('click', function ()
    {
        window.location = $j(this).data('href');
    });
    $j('.btn-login').hover(function () {
        $j(this).find('.box-btn-login').first().stop(true, true).slideDown(250);
    }, function () {
        $j(this).find('.box-btn-login').first().stop(true, true).slideUp(150)
    });

    $j('.search-form').hover(function () {
        $j(this).find('.box-search-form').first().stop(true, true).slideDown(250);
    }, function () {
        $j(this).find('.box-search-form').first().stop(true, true).slideUp(150)
    });


    $j('.menu-more').hover(function () {
        $j(this).find('.box-menu-more').first().stop(true, true).slideDown(250);
    }, function () {
        $j(this).find('.box-menu-more').first().stop(true, true).slideUp(150)
    });
    if (!isMobile)
    {
        var newsHot = 100;
        /*$j(document).scroll(function () {
            var scrollheight = $j(this).scrollTop();
            if (scrollheight >= newsHot)
            {
                if (!$j('.box-img-hot').hasClass('off-class'))
                {
                    $j('.box-img-hot').toggleClass('off-class');
                    $j('.menu-scroll').toggleClass('menu-scroll-middle');
                }
            } else {
                $j('.box-img-hot').removeClass('off-class');
                $j('.menu-scroll').addClass('menu-scroll-top').removeClass('menu-scroll-middle');
            }
        });*/
    }
    
    
    if (!isMobile)
    {
        var newsHot = 100;
        /*$j(document).scroll(function () {
            var scrollheight = $j(this).scrollTop();
            if (scrollheight >= newsHot)
            {
                if (!$j('.box-img-hot').hasClass('off-class'))
                {
                    $j('.box-img-hot').toggleClass('off-class');
                    $j('.menu-store-scroll').toggleClass('menu-store-scroll-middle');
                }
            } else {
                $j('.box-img-hot').removeClass('off-class');
                $j('.menu-store-scroll').addClass('menu-store-scroll-top').removeClass('menu-store-scroll-middle');
            }
        });*/
    }
    $j(document).on('click', 'a.left.carousel-control', function(){
        $j(this).css('background-image', 'none');
    });
    $j(document).on('click', '.select_program p.title', function(event){
        event.preventDefault();
        var __title = $j(this).text();
        $j("li.link.program.active").html(__title);
        
    });
    $j(document).on('click', '.select_program', function (event)
    {
        event.preventDefault();   
        var _this = $j(this);
        var _id = _this.data('id');
        var _title = _this.data('title');
        var _url = _this.data('url');
        var _epg_id = _this.data('epgid');
        if(_this.hasClass('isActive'))
        {
            _epg_id = _id;
        }
        
        $j.ajax({
            type: 'get',
            url: BaseUrl + "/get-program-channel",
            data: ({epg_id: _epg_id, id: _id, type: _this.data('type')}),
            success: function (_dt)
            {
                var dt = JSON.parse(_dt);
                // /console.log(__title);
                if (dt.state == 200)
                {
                    $j('.box-list-play li').each(function (i)
                    {
                        $j(this).removeClass('isBroadCast');
                    });
                    _this.addClass('isBroadCast');
                    $j('.eror-content').html('');
                    $j('#player_player').css("display", "block");
                    addPlayer(dt.data, _id, _title, _url, dt.dfp_tags);
                    $j('#id_broadCast').val(_epg_id);
                    $j("meta[property='og:title']").attr("content", dt.title);
                    $j("meta[property='title']").attr("content", dt.title);
                    $j("title").text(dt.title);
                    $j("meta[property='og:description']").attr("content", dt.desc);
                    $j("meta[property='og:description']").attr("content", dt.desc);
                    $j("meta[property='description']").attr("content", dt.desc);
                    $j("meta[property='og:image']").attr("content", dt.image);
                    $j("link[rel='image_src']").attr("href", dt.image);
                    
                } else {
                    $j('#player_player').css("display", "none");
                    var myPlayer = videojs("my_video_1");
                    myPlayer.pause();
                    $j('.eror-content').html('<h2 style="text-align: center;">Chương trình chưa phát sóng hoặc không được lưu trữ</h2>');

                }
            },
            error: function ()
            {
                    $j('#player_player').css("display", "none");
                    var myPlayer = videojs("my_video_1");
                    myPlayer.pause();
                    $j('.eror-content').html('<h2 style="text-align: center;">Chương trình chưa phát sóng hoặc không được lưu trữ</h2>');
            }
        });
    });
});

//CUSTOM FIX...
function fixMagicline() {
    var $magicLine = $j("#magic-line");
    $magicLine.stop().addClass('selected');
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1);
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return "";
}

function loadLiveChannel(id)
{
    //var epg_id = $j('#epg_id').val();
    $j.ajax({
        type: 'get',
        url: BaseUrl + "/get-live-channel",
        data: ({i: id, type: 1}),
        success: function (_dt)
        {
            var dt = JSON.parse(_dt);
            if (_dt.state == 200)
            {
            	console.log(dt);
                /*$j('.box-list-play li').each(function (i)
                 {
                 $(this).removeClass('isBroadCast');
                 });
                 $('#id_'+epg_id).addClass('isBroadCast');*/
                addPlayer(dt.link, dt.id, dt.title, dt.url_share);
            } else {
                $j('#player_box').html('<h2 style="text-align: center;">Chương trình chưa phát sóng</h2>');
            }
        },
        error: function ()
        {
            $j('#player_box').html('<h2 style="text-align: center;">Chương trình chưa phát sóng</h2>');
        }
    });
}

function addPlayer(link, id, title, url_share, dfp_tags)
{
    var base_url = window.location.origin;
    
    $j.getScript("https://imasdk.googleapis.com/js/sdkloader/ima3.js");
    $j.getScript(base_url+"/public/js/videojs.ads.js");
    $j.getScript(base_url+"/public/js/videojs.ima.js");
    $j.getScript(base_url+"/public/css/videojs.ima.css");
    var player = videojs('my_video_1');
    //console.log(player.ima);
    player.qualityPickerPlugin();
    var options = {
      id: 'my_video_1',
      adTagUrl: dfp_tags,
    };
    player.src({"type":"application/x-mpegURL", "src":link});
    //player.ima(options);
    //player.ima.requestAds();
    //player.play();
    
}

function bookMarkChannel(obj_id, obj_name, type)
{
    $j.ajax({
        type: 'get',
        url: BaseUrl + "/save-bookmark-channel",
        data: ({obj_id: obj_id, obj_name: obj_name}),
        success: function (ec)
        {
            if(type == "live")
            jAlert('Lưu kênh yêu thích thành công', 'Thông báo');
            else
            jAlert('Lưu video yêu thích thành công', 'Thông báo');
        }
    });
}

function updateLike(id, vod_type){
    $j.ajax({
        type: 'get',
        url: BaseUrl + "/update-like-object",
        data: ({id: id, vod_type: vod_type}),
        success: function(ec){
            console.log(ec);
        }
    });
}
function shareFacebookTs()
{
    window.open('http://www.facebook.com/sharer/sharer.php?u=' + BaseUrl + 'ts/' + $j('#id_broadCast').val(), 'facebook_share', 'height=320, width=640, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no')
}
function shareFacebookLive()
{
    window.open('http://www.facebook.com/sharer/sharer.php?u=' + BaseUrl + 'live/' + $j('#id_broadCast').val(), 'facebook_share', 'height=320, width=640, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no')
}
function shareFacebook(url)
{
    window.open('http://www.facebook.com/sharer/sharer.php?u=' + url, 'facebook_share', 'height=320, width=640, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no')
}

function goToByScroll(id) {
    $j('html,body').animate({scrollTop: $j(id).offset().top - 110}, 'fast');
}