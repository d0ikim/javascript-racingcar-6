**기능을 구현하기 전 `docs/README.md`에 구현할 기능 목록을 정리**해 추가한다.

- **Git의 커밋 단위는 앞 단계에서 `docs/README.md`에 정리한 기능 목록 단위**로 추가한다.

# 구현할 기능 목록

## 입출력 클래스 View.js (mission-utils.Console)

- [ ] 경주 할 자동차 이름(이름은 쉼표(,) 기준 구분) 입력받기
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
- [ ] 시도할 횟수(숫자) 입력받기 `Console.readLineAsync`
      "시도할 횟수는 몇 회인가요?"
- [ ] 각 차수별 실행 결과 출력($이름 : -? 형태) `Console.print`
      "실행 결과\n"
      pobi : -
      woni :
      jun : -

      pobi : --
      woni : -
      jun : --

      pobi : ---
      woni : --
      jun : ---

- [ ] 시도할 횟수만큼 게임 라운드 완료 시, 우승자 안내문구 출력
      최종 우승자 : pobi, jun
  - 단독 우승자(최종 우승자 : $누구)
  - 공동 우승자(최종 우승자 : $누구, $누구)

---

## 차 클래스 User.js

- name(String) :
- rollDice(숫자) : if(pickNumberInRange(0,9) >= 4)
- status(숫자)

## 게임진행 클래스 Race.js (mission-utils.Random)

- [ ] 시도할 횟수(숫자) round변수 만큼 게임진행시키는 전체감싸는 반복문
- [ ] 라운드마다, 자동차별 `Random.pickNumberInRange(0,9)`로 각각 전진(4이상시) or 멈춤(3이하시) `status`변수
