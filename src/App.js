import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    let userNames = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    userNames = userNames.split(",");
    //MissionUtils.Console.print(userNames);  // userNames 분리 확인용

    let roundNum = Number(
      await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n")
    );
    try {
      if (typeof roundNum !== "number" || roundNum < 1)
        throw new Error("[ERROR] 잘못된 값을 입력하셨습니다.\n");
    } catch (e) {
      console.log(e);
    }

    MissionUtils.Console.print(roundNum); // roundNum 입력 확인용
  }
}

export default App;

// 위 만든 시작점 App클래스로 프로그램 실행시키는 코드
const app = new App();
app.play();
