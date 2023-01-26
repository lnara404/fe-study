/* 2주차 과제 - 문제 */

function solution(id_list, report, k) {
  var answer = [];
  let reportedCount = {}; // 신고 당한 횟수
  let reportedUser = {}; // 신고 한 사람
  let mailCount = {}; // k번 이상 신고 당한 id를 신고한 사람이 받을 메일 수

  // 중복 제거
  const newReport = [...new Set(report)];

  id_list.map((item) => {
    reportedCount[item] = 0;
    reportedUser[item] = [];
    mailCount[item] = 0;
  });
  // console.log(count, reportedBy, mailCount);

  newReport.map((item) => {
    const [id, reported] = item.split(" ");
    reportedCount[reported] += 1;
    reportedUser[reported].push(id);
  });

  for (const reportId in reportedCount) {
    if (reportedCount[reportId] >= k) {
      reportedUser[reportId].forEach((item) => {
        mailCount[item] += 1;
      })
    }
  }
  
  answer = Object.values(mailCount);

  return answer;
}

solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2)