exports.level = {
  "compareOnlyMasterHashAgnostic": true,
  "disabledMap" : {
    "git revert": true
  },
  "goalTreeString": "%7B%22branches%22%3A%7B%22master%22%3A%7B%22target%22%3A%22C4%27%22%2C%22id%22%3A%22master%22%7D%2C%22debug%22%3A%7B%22target%22%3A%22C2%22%2C%22id%22%3A%22debug%22%7D%2C%22printf%22%3A%7B%22target%22%3A%22C3%22%2C%22id%22%3A%22printf%22%7D%2C%22bugFix%22%3A%7B%22target%22%3A%22C4%27%22%2C%22id%22%3A%22bugFix%22%7D%7D%2C%22commits%22%3A%7B%22C0%22%3A%7B%22parents%22%3A%5B%5D%2C%22id%22%3A%22C0%22%2C%22rootCommit%22%3Atrue%7D%2C%22C1%22%3A%7B%22parents%22%3A%5B%22C0%22%5D%2C%22id%22%3A%22C1%22%7D%2C%22C2%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%22%7D%2C%22C3%22%3A%7B%22parents%22%3A%5B%22C2%22%5D%2C%22id%22%3A%22C3%22%7D%2C%22C4%22%3A%7B%22parents%22%3A%5B%22C3%22%5D%2C%22id%22%3A%22C4%22%7D%2C%22C4%27%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C4%27%22%7D%7D%2C%22HEAD%22%3A%7B%22target%22%3A%22master%22%2C%22id%22%3A%22HEAD%22%7D%7D",
  "solutionCommand": "git checkout master;git cherry-pick C4",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C1\",\"id\":\"master\"},\"debug\":{\"target\":\"C2\",\"id\":\"debug\"},\"printf\":{\"target\":\"C3\",\"id\":\"printf\"},\"bugFix\":{\"target\":\"C4\",\"id\":\"bugFix\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C3\"],\"id\":\"C4\"}},\"HEAD\":{\"target\":\"bugFix\",\"id\":\"HEAD\"}}",
  // "name": "Grabbing Just 1 Commit",
  "name": "딱 한개의 커밋만 가져오기",
  // "hint": "Remember, interactive rebase or cherry-pick is your friend here",
  "hint": "대화식 리베이스(rebase -i)나 or 체리픽(cherry-pick)을 사용하세요",
  "startDialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            // "## Locally stacked commits",
            "## 로컬에 쌓인 커밋들",
            "",
            // "Here's a development situation that often happens: I'm trying to track down a bug but it is quite elusive. In order to aid in my detective work, I put in a few debug commands and a few print statements.",
            "개발중에 종종 이런 상황이 생깁니다: 잘 띄지 않는 버그를 찾아서 해결하려고, 어떤 부분의 문제인지를 찾기 위해 디버그용 코드와 화면에 정보를 프린트하는 코드 몇 줄 넣습니다. ",
            "",
            // "All of these debugging / print statements are in their own branches. Finally I track down the bug, fix it, and rejoice!",
            "디버깅용 코드나 프린트 명령은 그 브랜치에 들어있습니다. 마침내 버그를 찾아서 고쳤고, 원래 작업하는 브랜치에 합치면 됩니다!",
            "",
            // "Only problem is that I now need to get my `bugFix` back into the `master` branch! I could simply fast-forward `master`, but then `master` would get all my debug statements."
            "이제 `bugFix`브랜치의 내용을 `master`에 합쳐 넣으려 하지만, 한 가지 문제가 있습니다. 그냥 간단히 `master`브랜치를 최신 커밋으로 이동시킨다면(fast-forward) 그 불필요한 디버그용 코드들도 함께 들어가 버린다는 문제죠."
          ]
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            // "This is where the magic of Git comes in. There are a few ways to do this, but the two most straightforward ways are:",
            "여기에서 Git의 마법이 드러납니다. 이 문제를 해결하는 여러가지 방법이 있습니다만, 가장 간단한 두가지 방법 아래와 같습니다:",
            "",
            "* `git rebase -i`",
            "* `git cherry-pick`",
            "",
            // "Interactive (the `-i`) rebasing allows you to chose which commits you want to keep or discard. It also allows you to reorder commits. This can be helpful if you want to toss out some work.",
            "대화형 (-i 옵션) 리베이스(rebase)로는 어떤 커밋을 취하거나 버릴지를 선택할 수 있습니다. 또 커밋의 순서를 바꿀 수도 있습니다. 이 커맨드로 어떤 작업의 일부만 골라내기에 유용합니다.",
            "",
            // "Cherry-picking allows you to pick individual commits and plop them down on top of `HEAD`"
            "체리픽(cherry-pick)은 개별 커밋을 골라서 `HEAD`위에 떨어뜨릴 수 있습니다."
          ]
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            // "This is a later level so we will leave it up to you to decide, but in order to complete the level, make sure `master` receives the commit that `bugFix` references."
            "이번 레벨을 통과하기 위해 어떤 방법을 쓰시든 자유입니다만, `master`브랜치가 `bugFix` 브랜치의 커밋을 일부 가져오게 해주세요."
          ]
        }
      }
    ]
  }
};
