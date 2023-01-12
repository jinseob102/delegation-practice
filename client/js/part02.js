

const data = [
  {
    "id": 1,
    "src": "visual1.jpg",
    "alt": "모던한 테이블과 화분의 조화를 표현한 공간"
  },
  {
    "id": 2,
    "src": "visual2.jpg",
    "alt": "강렬한 의자의 색상과 따뜻한 느낌의 공간"
  },
  {
    "id": 3,
    "src": "visual3.jpg",
    "alt": "호텔 라운지 느낌의 편안한 의자가 있는 공간"
  },
  {
    "id": 4,
    "src": "visual4.jpg",
    "alt": "물방을 모양의 독특한 디자인의 의자들을 나열한 공간"
  }
]

// * 이벤트 위임 X_ 1번째
// * 차이점 : index를 부여하지 않고 하는 방법 + 제이쿼리

// $('.navigation > li').click(function(e){
//   //^ 하는 이유가 뭐랬지?
//   e.preventDefault();

//   let index = $(this).index();

//   $('.navigation > li').removeClass('is-active');

//   $(this).addClass('is-active')

  
//   $('.visual img').attr({
//     'src' : `./assets/part01/${data[index].src}`,
//     'src' : data[index].alt
//   })
// })

// * 이벤트 위임 - 제이쿼리
//^ on(제이쿼리 위임 메써드)을 쓰면 이벤트 위임이 된다.

$('.navigation').on('click',function(e){

  e.preventDefault();

  let index = $(this).attr('data-index');

  $('.navigation > li').removeClass('is-active');

  $(this).addClass('is-active')

  $('.visual img').attr({
    'src' : `./assets/part01/${data[index-1].src}`,
    'src' : data[index-1].alt
      })
});











