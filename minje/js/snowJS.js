const body = document.querySelector("body");
const MIN_DURATION = 10;

function makeSnowflake(){
    // html에 div 요소 만들기
    const snowflake = document.createElement("div");
    //눈송이 딜레이
    const delay = Math.random() * 10;
    //깊이감을 얻기 위해. 불투명도를 무작위
    const initialOpacity = Math.random(); 
    //다양하게 내리는 속도
    const duration = Math.random() * 20 + MIN_DURATION;

    //css에 설정한 애니메이션을 얻기 위해 클래스지정
    snowflake.classList.add("snowflake");

    //랜덤 함수와 화면의 너비값을 곱한다 (눈송이를 왼쪽으로 이동시킨다)
    snowflake.style.left = `${Math.random() * window.screen.width}px`;
    snowflake.style.animationDelay = `${delay}s`
    snowflake.style.opacity = initialOpacity;
    snowflake.style.animation = `fall ${duration}s linear`;

    //문서의 바디를 얻고 그 곳에 눈송이를 추가하기.
    body.appendChild(snowflake);

    //페이지 밖으로 떨어진 눈송이의 코드를 일정시간이 지나면 삭제하기
    setTimeout(() => {
        //눈송이를 지우고 새로운 눈송이를 생성한다
        body.removeChild(snowflake);
        makeSnowflake();
    }, 
    // 애니메이션이 언제 끝나는지 알기 위해 애니메이션의 
    //'기간'에 '지연'을 더한 값을 밀리초로 환산 후 1000곱하기
    (duration + delay) * 1000); 
}

for (let index = 0; index < 50; index++) {
    setTimeout(makeSnowflake, 500 * index);
}

// const body = document.querySelector("body");
  
//         const MIN_DURATION = 10;
  
//         function makeSnowflake() {
//           const snowflake = document.createElement("div");
//           const delay = Math.random() * 10;
//           const initialOpacity = Math.random();
//           const duration = Math.random() * 20 + MIN_DURATION;
  
//           snowflake.classList.add("snowflake");
//           snowflake.style.left = `${Math.random() * window.screen.width}px`;
//           snowflake.style.animationDelay = `${delay}s`;
//           snowflake.style.opacity = initialOpacity;
//           snowflake.style.animation = `fall ${duration}s linear`;
  
//           body.appendChild(snowflake);
  
//           setTimeout(() => {
//             body.removeChild(snowflake);
//             makeSnowflake();
//           }, (duration + delay) * 1000);
//         }
  
//         for (let index = 0; index < 50; index++) {
//           setTimeout(makeSnowflake, 500 * index);
//         }