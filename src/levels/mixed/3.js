exports.level = {
  "goalTreeString": "%7B%22branches%22%3A%7B%22master%22%3A%7B%22target%22%3A%22C3%27%22%2C%22id%22%3A%22master%22%7D%2C%22newImage%22%3A%7B%22target%22%3A%22C2%22%2C%22id%22%3A%22newImage%22%7D%2C%22caption%22%3A%7B%22target%22%3A%22C3%22%2C%22id%22%3A%22caption%22%7D%7D%2C%22commits%22%3A%7B%22C0%22%3A%7B%22parents%22%3A%5B%5D%2C%22id%22%3A%22C0%22%2C%22rootCommit%22%3Atrue%7D%2C%22C1%22%3A%7B%22parents%22%3A%5B%22C0%22%5D%2C%22id%22%3A%22C1%22%7D%2C%22C2%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%22%7D%2C%22C3%22%3A%7B%22parents%22%3A%5B%22C2%22%5D%2C%22id%22%3A%22C3%22%7D%2C%22C2%27%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%27%22%7D%2C%22C2%27%27%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%27%27%22%7D%2C%22C3%27%22%3A%7B%22parents%22%3A%5B%22C2%27%27%22%5D%2C%22id%22%3A%22C3%27%22%7D%7D%2C%22HEAD%22%3A%7B%22target%22%3A%22master%22%2C%22id%22%3A%22HEAD%22%7D%7D",
  "solutionCommand": "git checkout master;git cherry-pick C2;git commit --amend;git cherry-pick C3",
  "disabledMap" : {
    "git revert": true
  },
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C1\",\"id\":\"master\"},\"newImage\":{\"target\":\"C2\",\"id\":\"newImage\"},\"caption\":{\"target\":\"C3\",\"id\":\"caption\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"}},\"HEAD\":{\"target\":\"caption\",\"id\":\"HEAD\"}}",
  "compareOnlyMaster": true,
  // "name": "Juggling Commits #2",
  "name": "커밋 갖고 놀기 #2",
  // "hint": "Don't forget to forward master to the updated changes!",
  "hint": "master를 변경 완료한 커밋으로 이동(forward)시키는 것을 잊지 마세요!",
  "startDialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            // "## Juggling Commits #2",
            "## 커밋 갖고 놀기 #2",
            "",
            // "*If you haven't completed Juggling Commits #1 (the previous level), please do so before continuing*",
            "*만약 이전 레벨의 커밋 갖고 놀기 #1을 풀지 않으셨다면, 계속하기에 앞서서 꼭 풀어보세요*",
            "",
            // "As you saw in the last level, we used `rebase -i` to reorder the commits. Once the commit we wanted to change was on top, we could easily --amend it and re-order back to our preferred order.",
            "이전 레벨에서 보셨듯이 `rebase -i` 명령으로 커밋의 순서를 바꿀 수 있습니다. 정정할 커밋이 바로 직전(top)에 있으면 간단히 --amend로 수정할 수 있고, 그리고 나서 다시 원하는 순서로 되돌려 놓으면 됩니다.",
            "",
            // "The only issue here is that there is a lot of reordering going on, which can introduce rebase conflicts. Let's look at another method with `git cherry-pick`"
            "이번에 한가지 문제는 순서를 꽤 많이 바꿔야한다는 점인데요, 그러다가 리베이스중에 충돌이 날 수 있습니다. 이번에는 다른 방법인 `git cherry-pick`으로 해결해 봅시다."
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            // "Remember that git cherry-pick will plop down a commit from anywhere in the tree onto HEAD (as long as that commit isn't upstream).",
            "git cherry-pick으로 HEAD에다 어떤 커밋이든 떨어 뜨려 놓을 수 있다고 알려드린것 기억나세요? (단, 그 커밋이 현재 가리키고 있는 커밋이 아니어야합니다)",
            "",
            // "Here's a small refresher demo:"
            "간단한 데모로 다시 알려드리겠습니다:"
          ],
          "afterMarkdowns": [
            // "Nice! Let's move on"
            "좋아요! 계속할게요"
          ],
          "command": "git cherry-pick C2",
          "beforeCommand": "git checkout -b bugFix; git commit; git checkout master; git commit"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            // "So in this level, let's accomplish the same objective of amending `C2` once but avoid using `rebase -i`. I'll leave it up to you to figure it out! :D"
            "그럼 이번 레벨에서는 아까와 마찬가지로 `C2` 커밋의 내용을 정정하되, `rebase -i`를 쓰지 말고 해보세요. ^.~"
          ]
        }
      }
    ]
  }
};
