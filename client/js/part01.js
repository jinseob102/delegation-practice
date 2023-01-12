
//! 오늘할꺼다!
//! 이벤트 위임!!!!!!!!!!!!!!바닐라 자바스크립트!!!!!!!!!!!!!!!
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

// 네이게이션에게 이벤트를 건다
// 핸들러를 연결한다.
// 이벤트 객체에서 타겟을 찾는다.
const navigation = getNode('.navigation');
const visualImage = getNode('.visual img');
// const list = getNodes('.navigation > li');

//^ 배열로 만드는 함수
function makeArray(arrayLike) {
  return Array.from(arrayLike)
}


// console.log(navigation);

function handler(e){
  
  //^ 빈공간을 클릭하면 null이 나오게 되니 타겟의 변수를 만들어줌!
  let target = e.target.closest('li')
  if(!target) return;
  
  //^ 배열함수를 통해서 li를 배열로 만들어줌 -> forEach쓰려고!!
  let list = makeArray(navigation.children);
  let index = attr(target,'data-index')


  // Array.from(list)
  // Array. prototype.slice.call(list)
  //^ 배열로 만들어야 아래 forEach를 쓸 수 있다.
  //^ 모든 li의 is-active를 꺼준다!
  list.forEach(item => removeClass(item, 'is-active')) 

  //^ 이미지의 src로 접근해 인덱스별(51)로 비주얼 큰 사진을 바꿔준다.
  attr(visualImage,'src',`./assets/part01/${data[index-1].src}`)

  //^ 배열은 0부터 시작하고, 인덱스는 1부터 시작합니다.
  attr(visualImage,'alt',data[index-1].alt)

  //^ 타겟된(선택된)) 요소는 is-active 켜라
  addClass(target, 'is-active'); 
  
}


navigation.addEventListener('click',handler);



















