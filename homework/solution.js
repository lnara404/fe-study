/* 1주차 과제 - 문제 1 */
function solution(message) {
  var answer = 0;

  answer = message.length * 2;

  return answer;
}
solution("happy birthday!");
solution("I love you~");

/*
function solution(message) {
  let answer = 0;
  const messageCheck = (message) => /^[a-zA-Z0-9!~\s]*$/g.test(message); // message 공백, 영문 소문자 & 대문자, 특수문자(!, ~)로만 이루어졌는지 체크
  const messageLength = message.length; // message 문자 길이 확인(공백 포함)

  if(messageCheck(message) && (messageLength >= 1 && messageLength <= 50)) { // message 길이가 1보다 크거나 같고, 50보다 작거나 같은지 그리고 정해진 문자들로만 이루어졌는지 확인
    answer = 2 * messageLength; // 한 글자당 2cm * 글자수
    console.log(answer);
    return answer;
  } else {
    console.log('message 조건에 맞지 않아요😢')
  }
}
*/

/* 1주차 과제 - 문제 2 */
function solution(strlist) {
  var answer = [];

  strlist.forEach((item) => { // 인자로 받은 배열을 순회하면서 배열 아이템의 길이를 구함
    answer.push(item.length);
  })
  
  return answer;
}
solution(["We", "are", "the", "world!"]);
solution(["I", "Love", "Programmers."]);