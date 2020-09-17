charset="UTF-8" ;
pageEncoding="UTF-8"

var questions = new Array( "다음 중 나의 평소 취미는 ?"
                          ,"친한 친구의 배신으로 화가난 당신의 행동은?"
                          ,"큰 무대위에 올라선 당신의 심리 상태는?"
                          ,"새로운 일을 앞둔 당신의 모습은?"
                          ,"두 인생중 하나를 당신이 선택할 수 있다면?"
                          ,"평소 자주하는 고민이 있다면?"
                          ,"당신은 다음중 어떤 사람에 가까운가요?"
                          ,"고민이 있을때 당신의 해결방법은?") ;

var answerAs = new Array(  "영화 보기, 책 읽기 등 \n문화활동"
                          ,"매우 화가나지만 대화로 해결하려고 애쓴다"
                          ,"많은 사람들 앞에서도 아무렇지않게 행동한다"
                          ,"최대한 성공에 다가가기위해 \n계획을 세우고 성실히 실천한다"
                          ,"부유한 집안에서 태어나\n남부럽지 않게 사는 인생"
                          ,"정체성에 대한 고민이 있다"
                          ,"도움이 필요한 사람을 \n적극적으로 도와주는 사람"
                          ,"인터넷이나 책을 이용한다") ;

var answerBs = new Array(  "축구, 농구 등 \n체육활동"
                          ,"화를 주체하지 못해 친구를 밀치며 소리를 지른다"
                          ,"매우 긴장한 모습을 보이며 불안해한다"
                          ,"남들이 하는 정도로 준비하며\n개인의 생활을 중요시한다"
                          ,"평범한 가정에서 태어나 자수성가하는 인생"
                          ,"인간 관계에 대한 고민이 있다"
                          ,"다른 이들을 이끌어가는 사람"
                          ,"잘 알것같은 사람에게 물어본다") ;

// 페이지 로드시 바로 실행
$(document).ready(function(){
    changeQuestion(getParameter('answer').length) ; 
});
        

function bt1(){  
    if(isEnd()){
        var result = getParameter('answer')+'A' ;
        location.href='resultPage.html?answer='+result ;
    }
    else{    
        location.href=location.href+'A' ;
    }
}

function bt2(){
    if(isEnd()){
        var result = getParameter('answer')+'B' ;
        location.href='resultPage.html?answer='+result ;
    }
    else{    
        location.href=location.href+'B' ;
    }
}

function isEnd(){
    return getParameter('answer').length==7 ;
}

function changeQuestion(num){
    var question = document.getElementById('q1') ;
    var answerA = document.getElementById('A');
    var answerB = document.getElementById('B');
    
    question.innerText = questions[num] ;
    answerA.innerText = answerAs[num] ;
    answerB.innerText = answerBs[num] ;
    
    
    
    
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
 