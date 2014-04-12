exports.level = {
  "goalTreeString": "%7B%22branches%22%3A%7B%22master%22%3A%7B%22target%22%3A%22C3%22%2C%22id%22%3A%22master%22%7D%2C%22bugFix%22%3A%7B%22target%22%3A%22C2%27%22%2C%22id%22%3A%22bugFix%22%7D%7D%2C%22commits%22%3A%7B%22C0%22%3A%7B%22parents%22%3A%5B%5D%2C%22id%22%3A%22C0%22%2C%22rootCommit%22%3Atrue%7D%2C%22C1%22%3A%7B%22parents%22%3A%5B%22C0%22%5D%2C%22id%22%3A%22C1%22%7D%2C%22C2%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%22%7D%2C%22C3%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C3%22%7D%2C%22C2%27%22%3A%7B%22parents%22%3A%5B%22C3%22%5D%2C%22id%22%3A%22C2%27%22%7D%7D%2C%22HEAD%22%3A%7B%22target%22%3A%22bugFix%22%2C%22id%22%3A%22HEAD%22%7D%7D",
  "solutionCommand": "git checkout -b bugFix;git commit;git checkout master;git commit;git checkout bugFix;git rebase master",
  // "name": "Rebase Introduction",
  // "hint": "Make sure you commit from bugFix first",
  "name": "리베이스(rebase)의 기본",
  "hint": "bugFix 브랜치에서 먼저 커밋하세요",
  "disabledMap" : {
    "git revert": true
  },
  "startDialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            // "## Git Rebase",
            "## Git 리베이스(Rebase)",
            "",
            // "The second way of combining work between branches is *rebasing.* Rebasing essentially takes a set of commits, \"copies\" them, and plops them down somewhere else.",
            "브랜치끼리의 작업을 접목하는 두번째 방법은 *리베이스(rebase)*입니다. 리베이스는 기본적으로 커밋들을 모아서 복사한 뒤, 다른 곳에 떨궈 놓는 것입니다.",
            "",
            // "While this sounds confusing, the advantage of rebasing is that it can be used to make a nice linear sequence of commits. The commit log / history of the repository will be a lot cleaner if only rebasing is allowed.",
            "조금 어려게 느껴질 수 있지만, 리베이스를 하면 커밋들의 흐름을 보기 좋게 한 줄로 만들 수 있다는 장점이 있습니다. 리베이스를 쓰면 저장소의 커밋 로그와 이력이 한결 깨끗해집니다.",
            "",
            // "Let's see it in action..."
            "어떻게 동작하는지 살펴볼까요..."
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            // "Here we have two branches yet again; note that the bugFix branch is currently selected (note the asterisk)",
            "여기 또 브랜치 두 개가 있습니다; bugFix브랜치가 현재 선택됐다는 점 눈여겨 보세요 (별표 표시)",
            "",
            // "We would like to move our work from bugFix directly onto the work from master. That way it would look like these two features were developed sequentially, when in reality they were developed in parallel.",
            "bugFix 브랜치에서의 작업을 master 브랜치 위로 직접 옮겨 놓으려고 합니다. 그렇게 하면, 실제로는 두 기능을 따로따로 개발했지만, 마치 순서대로 개발한 것처럼 보이게 됩니다.",
            "",
            // "Let's do that with the `git rebase` command"
            "`git rebase` 명령어로 함께 해보죠."
          ],
          "afterMarkdowns": [
            // "Awesome! Now the work from our bugFix branch is right on top of master and we have a nice linear sequence of commits.",
            "오! 이제 bugFix 브랜치의 작업 내용이 master의 바로 위에 깔끔한 한 줄의 커밋으로 보이게 됐습니다.",
            "",
            // "Note that the commit C3 still exists somewhere (it has a faded appearance in the tree), and C3' is the \"copy\" that we rebased onto master.",
            "C3 커밋은 어딘가에 아직 남아있고(그림에서 흐려짐), C3'는 master 위에 올려 놓은 복사본입니다.",
            "",
            // "The only problem is that master hasn't been updated either, let's do that now..."
            "master가 아직 그대로라는 문제가 남아있는데요, 바로 해결해보죠..."
          ],
          "command": "git rebase master",
          "beforeCommand": "git commit; git checkout -b bugFix C1; git commit"
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            // "Now we are checked out on the `master` branch. Let's do ahead and rebase onto `bugFix`..."
            "우리는 지금 `master` 브랜치를 선택한 상태입니다. `bugFix` 브랜치쪽으로 리베이스 해보겠습니다..."
          ],
          "afterMarkdowns": [
            // "There! Since `master` was downstream of `bugFix`, git simply moved the `master` branch reference forward in history."
            "보세요! `master`가 `bugFix`의 부모쪽에 있었기 때문에, 단순히 그 브랜치를 더 앞쪽의 커밋을 가리키게 이동하는 것이 전부입니다."
          ],
          "command": "git rebase bugFix",
          "beforeCommand": "git commit; git checkout -b bugFix C1; git commit; git rebase master; git checkout master"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            // "To complete this level, do the following",
            "이하 작업을 하면 이번 레벨을 통과합니다",
            "",
            // "* Checkout a new branch named `bugFix`",
            "* `bugFix`라는 새 브랜치를 만들어 선택하세요",
            // "* Commit once",
            "* 커밋 한 번 합니다",
            // "* Go back to master and commit again",
            "* master로 돌아가서 또 커밋합니다",
            // "* Check out bugFix again and rebase onto master",
            "* bugFix를 다시 선택하고 master에 리베이스 하세요",
            "",
            // "Good luck!"
            "화이팅!"
          ]
        }
      }
    ]
  }
};
