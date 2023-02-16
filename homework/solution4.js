/**
 * 반복문을 활용해서 해결
 * 첫번째 단어 이전의 단어가 없기 때문에 0 다음부터 시작
 * indexOf 활용하여 이전에 나왔던 단어인지 중복 체크
 * 이전 단어의 끝자리, 현재 단어의 앞자리 하나를 비교하여 이전 단어 끝자리로 시작하는 단어가 맞는지 체크
 * 문제가 발생하지 않으면 [0,0] 리턴
*/

function solution(n, words) {
  let answer = [];

  for (let i = 0; i < words.length; i++) {
    const beforeWord = words[i - 1]; // 이전 단어
    const currentWord = words[i]; // 현재 단어
    const people = i % n + 1; // 어떤 사람인지
    const turn = Math.ceil((i + 1) / n); // 몇 번째 턴인지

    if (i > 0) {
      if ((i !== words.indexOf(currentWord) || beforeWord.slice(-1) !== currentWord.slice(0, 1))) {
        answer = [people, turn]
        return answer;
      }
    }
  }
  answer = [0,0]
  
  return answer;
};

solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]);
solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]);
solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]);