

const contents = getNode('.contents');
const textField = getNode('#comment37');


function clearText(target) {
  target.value = "";
}

function handler(e){

  let target = e.target;
  //* 좋아요 엄지버튼(data-가 아님) 커졌다 꺼지도록 하는 것
  while(!attr(target,'data-name')){
    target = target.parentNode;

    if(target.nodeName === 'BODY'){
      target = null;
      return;
    }
  }
  //* 좋아요 누르면 커지고 꺼지는 기능
  if(target.dataset.name === 'like'){
    console.log('like!');
    toggleClass(target,'active');
  }

  //* 댓글을 누르면 댓글 입력창으로 이동
  if(target.dataset.name === 'comment'){
    textField.focus();
  }

  if(target.dataset.name === 'send'){
    
    //* 인풋의 값을 가져올땐 value!!!
    console.log(textField.value);

    let template = /* html */`
      <div class="id">
      <div class="profile_img border_over"><img src="./assets/part03/oh.png" alt=""></div>
      <div class="comment_field">
        <div class="text_container">
          <div class="name"><a href="#">김진섭</a></a></div>
            <div class="text_field">${textField.value}</div>
          </div>
        </div>
      </div>
      `

      insertLast('.comment_container',template)

      clearText(textField)
  }
}


contents.addEventListener('click',handler )



