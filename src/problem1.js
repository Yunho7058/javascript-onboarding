/*
포비와 크롱이 페이지 번호가 1부터 시작되는 400 페이지의 책을 주웠다. 
책을 살펴보니 왼쪽 페이지는 홀수, 
오른쪽 페이지는 짝수 번호이고 모든 페이지에는 번호가 적혀있었다. 
책이 마음에 든 포비와 크롱은 페이지 번호 게임을 통해 게임에서 이긴 사람이 책을 갖기로 한다. 페이지 번호 게임의 규칙은 아래와 같다.

  책을 임의로 펼친다.
  왼쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
  오른쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
  2~3 과정에서 가장 큰 수를 본인의 점수로 한다.
  점수를 비교해 가장 높은 사람이 게임의 승자가 된다.
  시작 면이나 마지막 면이 나오도록 책을 펼치지 않는다.

포비와 크롱이 펼친 페이지가 들어있는 배열 pobi와 crong이 주어질 때, 
포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0, 예외사항은 -1로 return 하도록 solution 메서드를 완성하라.

제한사항
pobi와 crong의 길이는 2이다.
pobi와 crong에는 [왼쪽 페이지 번호, 오른쪽 페이지 번호]가 순서대로 들어있다.

실행 결과 예시
pobi	      crong	      result
[97, 98]	  [197, 198]	0
[131, 132]	[211, 212]	1
[99, 102]	  [211, 212]	-1
72 // 72 무승부
6 // 5 포 승(1)
99 , 102 -> 페이지 차이? 예외사항 -1
1 시작 400 끝
*/
function problem1(pobi, crong) {
  var answer;
  if (exception(pobi) || exception(crong)) {
    return -1;
  } else {
    //문자열로 변경
    pobi = [String(pobi[0]), String(pobi[1])];
    crong = [String(crong[0]), String(crong[1])];
  }
  const pobiBigNum = process(pobi);
  const crongBigNum = process(crong);
  console.log(pobiBigNum, crongBigNum);
  answer = pobiBigNum === crongBigNum ? 0 : pobiBigNum > crongBigNum ? 1 : 2;

  return answer;
}

//예외사항 분리 함수 ( 페이지 차이,페이지 배열 3개,처음면과 끝면)
const exception = (arr) => {
  if (
    arr[1] - arr[0] !== 1 ||
    arr.length > 2 ||
    arr.includes(1) ||
    arr.includes(400)
  ) {
    return true;
  } else {
    return false;
  }
};

//계산과정 함수
const process = (arr) => {
  let firstBigNum = 0;
  let secondBigNum = 0;
  let finalBigNum = 0;
  for (let i = 0; i < 2; i++) {
    let multiply = 1;
    let add = 0;
    for (let j = 0; j < arr[i].length; j++) {
      add = add + Number(arr[i][j]);
      multiply = multiply * arr[i][j];
    }
    if (!firstBigNum) {
      firstBigNum = add > multiply ? add : multiply;
    } else {
      secondBigNum = add > multiply ? add : multiply;
      finalBigNum = firstBigNum > secondBigNum ? firstBigNum : secondBigNum;
    }
  }
  return finalBigNum;
};

let out = problem1([99, 102], [211, 212]);
console.log(out);

module.exports = problem1;
