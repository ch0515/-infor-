//스크립트 새창으로 튕기는 것 방지
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//slick.js

$(function(){
    $('.visual .slide').slick({
        arrows: false,   //화살표
        dots: false, // 인디케이스 해제
        fade: true, //페이드 효과
        autoplay: true, //자동재생
        autoplaySpeed: 4000,//재생시간
        pauseOnHover: false,//마우스 호버시 정지
        pauseOnFocus: false // 포커스시 정지
    });
});

//탭메뉴
$(function(){
    $('.introduce .roomInfo .tab li a').on('click',function(){
        let num = $('.introduce .roomInfo .tab li a').index($(this)); // 자신의 인덱스를 변수num에 넣어라
        $('.introduce .roomInfo .tabBox').removeClass('on');
        $('.introduce .roomInfo .tabBox:eq('+num+')').addClass('on');
    });
})