var results = new Array("박새로이","조이서","마현이","최승권","토니"
                   ,"장근수","장대희","장근원","오수아","박부장"
                   ,"이호진","강민정","김희훈","오병헌") ;
// 이호진: 찡찡이, 강민정: 장가전무이사, 김희훈: 깡패두목, 오병헌: 형사
//폭력성X , 주인공 정도(나댐), 성공 가능성, 금수저, 정체성 문제, 착한정도
var ABB = 9 ;
var BAB = 7 ;
var BBA = 3 ;
var AAAA = 7 ;
var AAAB = 0 ;
var AABA = 5 ;
var AABB = 8 ;
var BAAA = 1 ;
var BBBA = 13 ;
var BBBB = 12 ;
var ABAAA = 4 ;
var ABAAB = 11 ;
var ABABA = 2 ;
var ABABB = 10 ;
var BAABAA = 0 ;
var BAABAB = 6 ;
var BAABBA = 0 ;
var BAABBB = 6 ;

var BAABB = new Array(BAABBA,BAABBB);
var BAABA = new Array(BAABAA,BAABAB);
var BAAB = new Array(BAABA,BAABB);
var ABAB = new Array(ABABA,ABABB);
var ABAA = new Array(ABAAA,ABAAB);
var BBB = new Array(BBBA,BBBB) ;
var BAA = new Array(BAAA,BAAB) ;
var ABA = new Array(ABAA,ABAB) ;
var AAB = new Array(AABA,AABB) ;
var AAA = new Array(AAAA,AAAB) ;
var BB = new Array(BBA,BBB);
var BA = new Array(BAA,BAB);
var AB = new Array(ABA,ABB);
var AA = new Array(AAA,AAB);
var B = new Array(BA,BB);
var A = new Array(AA,AB) ;
var map = new Array( A,B ) ;

// 페이지 로드시 바로 실행
$(document).ready(function(){
    showResult(); 
});

function makeResult(){
    var param = getParameter('answer') ;
    var tmp = map ;
    // 123456
    for(var i=1 ; i<7 ;i++){
        if(param.charAt(i)=='A'){
            //끝 판단
            if(!isNaN(tmp))
                return tmp ;
            
            tmp = tmp[0] ;
            
        }else{
            //끝 판단
            if(!isNaN(tmp))
                return tmp ;
            
            tmp = tmp[1] ;
        }
    }
    
    return tmp ;
}

function showResult(){
    var tmp = makeResult();
    var res = results[tmp] ;
    var back = document.getElementById('result') ;
    var background_img = "/itaewon/img/"+tmp+".png";
    back.style.backgroundImage = "url('" + background_img + "')";
}


// GET 파라미터 가져오기
function getParameter(param){
    var returnValue;
    var url = location.href;
    var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&');
    for (var i = 0; i < parameters.length; i++) {
        var varName = parameters[i].split('=')[0];
        if (varName.toUpperCase() == param.toUpperCase()) {
            returnValue = parameters[i].split('=')[1];
            return decodeURIComponent(returnValue);
        }
    }
}
//SNS 공유용 주소 연결 용
var url_default_ks = "https://story.kakao.com/share?url="; 
var url_default_fb = "https://www.facebook.com/sharer/sharer.php?u="; var url_default_tw_txt = "https://twitter.com/intent/tweet?text="; 
var url_default_tw_url = "&url="; var url_default_band = "http://band.us/plugin/share?body="; var url_route_band = "&route="; var url_default_naver = "http://share.naver.com/web/shareView.nhn?url="; var title_default_naver = "&title="; var url_this_page = location.href; var title_this_page = document.title; var url_combine_ks = url_default_ks + url_this_page; var url_combine_fb = url_default_fb + url_this_page; var url_combine_tw = url_default_tw_txt + document.title + url_default_tw_url + url_this_page; var url_combine_band = url_default_band + encodeURI(url_this_page)+ '%0A' + encodeURI(title_this_page)+'%0A' + '&route=tistory.com'; var url_combine_naver = url_default_naver + encodeURI(url_this_page) + title_default_naver + encodeURI(title_this_page);
