/* 3주차 과제 - 문제 1 */

/* 3주차 과제 - 문제 2 */
function solution(n) {
  var answer = 0;
    
  for (let i = 0; i <= n; i++) {
    if (n % i === 1) {
      return answer = i
    }
  }
}

solution(10);