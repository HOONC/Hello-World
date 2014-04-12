exports.level = {
  "disabledMap" : {
    "git cherry-pick": true,
    "git revert": true
  },
  "compareOnlyMaster": true,
  "goalTreeString": "%7B%22branches%22%3A%7B%22master%22%3A%7B%22target%22%3A%22C3%27%27%22%2C%22id%22%3A%22master%22%7D%2C%22newImage%22%3A%7B%22target%22%3A%22C2%22%2C%22id%22%3A%22newImage%22%7D%2C%22caption%22%3A%7B%22target%22%3A%22C3%27%27%22%2C%22id%22%3A%22caption%22%7D%7D%2C%22commits%22%3A%7B%22C0%22%3A%7B%22parents%22%3A%5B%5D%2C%22id%22%3A%22C0%22%2C%22rootCommit%22%3Atrue%7D%2C%22C1%22%3A%7B%22parents%22%3A%5B%22C0%22%5D%2C%22id%22%3A%22C1%22%7D%2C%22C2%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%22%7D%2C%22C3%22%3A%7B%22parents%22%3A%5B%22C2%22%5D%2C%22id%22%3A%22C3%22%7D%2C%22C3%27%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C3%27%22%7D%2C%22C2%27%22%3A%7B%22parents%22%3A%5B%22C3%27%22%5D%2C%22id%22%3A%22C2%27%22%7D%2C%22C2%27%27%22%3A%7B%22parents%22%3A%5B%22C3%27%22%5D%2C%22id%22%3A%22C2%27%27%22%7D%2C%22C2%27%27%27%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%27%27%27%22%7D%2C%22C3%27%27%22%3A%7B%22parents%22%3A%5B%22C2%27%27%27%22%5D%2C%22id%22%3A%22C3%27%27%22%7D%7D%2C%22HEAD%22%3A%7B%22target%22%3A%22master%22%2C%22id%22%3A%22HEAD%22%7D%7D",
  "solutionCommand": "git rebase -i HEAD~2;git commit --amend;git rebase -i HEAD~2;git rebase caption master",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C1\",\"id\":\"master\"},\"newImage\":{\"target\":\"C2\",\"id\":\"newImage\"},\"caption\":{\"target\":\"C3\",\"id\":\"caption\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"}},\"HEAD\":{\"target\":\"caption\",\"id\":\"HEAD\"}}",
  // "name": "Juggling Commits",
  "name": "커밋들 갖고 놀기",
  // "hint": "The first command is git rebase -i HEAD~2",
  "hint": "첫번째 명령은 git rebase -i HEAD~2 입니다",
  "startDialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            // "## Juggling Commits",
            "## 커밋들 갖고 놀기",
            "",
            // "Here's another situation that happens quite commonly. You have some changes (`newImage`) and another set of changes (`caption`) that are related, so they are stacked on top of each other in your repository (aka one after another).",
            "이번에도 꽤 자주 발생하는 상황입니다. `newImage`와 `caption` 브랜치에 각각의 변경내역이 있고 서로 약간 관련이 있어서, 저장소에 차례로 쌓여있는 상황입니다.",
            "",
            // "The tricky thing is that sometimes you need to make a small modification to an earlier commit. In this case, design wants us to change the dimensions of `newImage` slightly, even though that commit is way back in our history!!"
            "때로는 이전 커밋의 내용을 살짝 바꿔야하는 골치아픈 상황에 빠지게 됩니다. 이번에는 디자인 쪽에서 우리의 작업이력(history)에서는 이미 한참 전의 커밋 내용에 있는 `newImage`의 크기를 살짝 바꿔달라는 요청이 들어왔습니다."
          ]
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            // "We will overcome this difficulty by doing the following:",
            "이 문제를 다음과 같이 풀어봅시다:",
            "",
            // "* We will re-order the commits so the one we want to change is on top with `git rebase -i`",
            "* `git rebase -i` 명령으로 우리가 바꿀 커밋을 가장 최근 순서로 바꾸어 놓습니다",
            // "* We will `commit --amend` to make the slight modification",
            "* `commit --amend` 명령으로 커밋 내용을 정정합니다",
            // "* Then we will re-order the commits back to how they were previously with `git rebase -i`",
            "* 다시 `git rebase -i` 명령으로 이 전의 커밋 순서대로 되돌려 놓습니다",
            // "* Finally, we will move master to this updated part of the tree to finish the level (via your method of choosing)",
            "* 마지막으로, master를 지금 트리가 변경된 부분으로 이동합니다. (편하신 방법으로 하세요)",
            "",
            // "There are many ways to accomplish this overall goal (I see you eye-ing cherry-pick), and we will see more of them later, but for now let's focus on this technique."
            "이 목표를 달성하기 위해서는 많은 방법이 있는데요(체리픽을 고민중이시죠?), 체리픽은 나중에 더 살펴보기로 하고, 우선은 위의 방법으로 해결해보세요."
          ]
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            // "Lastly, pay attention to the goal state here -- since we move the commits twice, they both get an apostrophe appended. One more apostrophe is added for the commit we amend, which gives us the final form of the tree "
            "최종적으로, 목표 결과를 눈여겨 보세요 -- 우리가 커밋을 두 번 옮겼기 때문에, 두 커밋 모두 따옴표 표시가 붙어있습니다. 정정한(amend) 커밋은 따옴표가 추가로 하나 더 붙어있습니다."
          ]
        }
      }
    ]
  }
};