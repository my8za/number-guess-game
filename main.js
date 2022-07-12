// 로직정리
// 랜덤번호 지정
// 유저가 번호를 입력 후, go라는 버튼을 클릭
// 만약 유저가 랜덤번호르 맞추면, 맞췄습니다!
// 램덤번호 < 유저번호 Down!
// 랜덤번호 > 유저번호 Up!
// Reset버튼을 누르면 게임 리셋
// 5번의 기회를 다쓰면 게임이 끝난다 (더이상 추측 불가, 버튼이 disable)
// 유저가 1~100 범위 밖의 숫자를 입력하면 알려준다. 기회를 깎지않는다
// 유저가 이미 입력한 숫자를 또 입력하면 알려준다, 기회를 깎지않는다


let computerNum = 0
let playBtn = document.getElementById('play-btn')
let userInput = document.getElementById('user-input')
let resultArea = document.getElementById('result-area')
let chanceArea = document.getElementById('chance-area')
let resetBtn = document.getElementById('reset-btn')
let chances = 5   // 남은 기회
let history = []  // 유저가 입력한 값 리스트
let gameOver = false


playBtn.addEventListener('click', play)
resetBtn.addEventListener('click', reset)
userInput.addEventListener('focus', () => {userInput.value = ''})

// 랜덤숫자 뽑기
function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1
  console.log("정답", computerNum)
}


function play() {
  const userValue = userInput.value

  if(userValue < 1 || userValue > 100) {
    resultArea.textContent = '1과 100사이 숫자를 입력해주세요'
    return
  }

  if(history.includes(userValue)){
    resultArea.textContent = '이미 입력한 숫자입니다. 다른 숫자를 입력해주세요'
    return
  }

  chances -- 
  chanceArea.textContent = `남은기회 : ${chances}번`
  console.log('chance', chances)

  if(userValue < computerNum) {
    resultArea.textContent = 'UP!!'
  } else if(userValue > computerNum) {
    resultArea.textContent = 'DOWN!!'
  } else {
    resultArea.textContent = '정답입니다!!'
    gameOver = true
  }

  history.push(userValue)

  if(chances < 1) {
    gameOver = true
  }

  if(gameOver == true) {
    playBtn.disabled = true
  }
}

// reset
function reset() {
  userInput.value = ''
  pickRandomNum()

  resultArea.textContent = '결과값이 여기 나옵니다!!'
}

pickRandomNum()