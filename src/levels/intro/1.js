exports.level = {
  "name": 'Git 커밋 소개',
  "goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C3\",\"id\":\"master\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}",
  "solutionCommand": "git commit;git commit",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C1\",\"id\":\"master\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}",
  "hint": "'git commit'이라고 두 번 치세요!",
  "disabledMap" : {
    "git revert": true
  },
  "startDialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Git 커밋",
            // "A commit in a git repository records a snapshot of all the files in your directory. It\'s like a giant copy and paste, but even better!",
            "커밋은 Git 저장소에 여러분의 디렉토리에 있는 모든 파일에 대한 스냅샷을 기록하는 것입니다. 디렉토리 전체에 대한 복사해 붙이기와 비슷하지만 훨씬 유용합니다!",
            "",
            // "Git wants to keep commits as lightweight as possible though, so it doesn't just copy the entire directory every time you commit. It actually stores each commit as a set of changes, or a \"delta\", from one version of the repository to the next. That\'s why most commits have a parent commit above them -- you\'ll see this later in our visualizations.",
            "Git은 커밋을 가능한한 가볍게 유지하고자 해서, 커밋할 때마다 디렉토리 전체를 복사하는 일은 하지 않습니다. 각 커밋은 저장소의 이전 버전과 다음 버전의 변경내역(\"delta\"라고도 함)을 저장합니다. 그래서 대부분의 커밋이 그 커밋 위에 부모 커밋을 가리키고 있게 되는 것입니다. -- 곧 그림으로 된 화면에서 살펴보게 될 것입니다.",
            "",
            //"In order to clone a repository, you have to unpack or \"resolve\" all these deltas. That's why you might see the command line output:",
            "저장소를 복제(clone)하려면, 그 모든 변경분(delta)를 풀어내야하는데, 그 때문에 명령행 결과로 아래와 같이 보게됩니다. ",
            "",
            "`resolving deltas`",
            "",
            //"when cloning a repo.",
            //"",
            //"It's a lot to take in, but for now you can think of commits as snapshots of the project. Commits are very light and switching between them is wicked fast!"
            "알아야할 것이 꽤 많습니다만, 일단은 커밋을 프로젝트의 각각의 스냅샷들로 생각하시는 걸로 충분합니다. 커밋은 매우 가볍고 커밋 사이의 전환도 매우 빠르다는 것을 기억해주세요!"
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            // "Let's see what this looks like in practice. On the right we have a visualization of a (small) git repository. There are two commits right now -- the first initial commit, `C0`, and one commit after that `C1` that might have some meaningful changes.",
            "연습할 때 어떻게 보이는지 확인해보죠. 오른쪽 화면에 git 저장소를 그림으로 표현해 놓았습니다. 현재 두번 커밋한 상태입니다 -- 첫번째 커밋으로 `C0`, 그 다음으로 `C1`이라는 어떤 의마있는 변화가 있는 커밋이 있습니다.",
            "",
            // "Hit the button below to make a new commit"
            "아래 버튼을 눌러 새로운 커밋을 만들어보세요"
          ],
          "afterMarkdowns": [
            // "There we go! Awesome. We just made changes to the repository and saved them as a commit. The commit we just made has a parent, `C1`, which references which commit it was based off of."
            "이렇게 보입니다! 멋지죠. 우리는 방금 저장소 내용을 변경해서 한번의 커밋으로 저장했습니다. 방금 만든 커밋은 부모는 `C1`이고, 어떤 커밋을 기반으로 변경된 것인지를 가리킵니다."
          ],
          "command": "git commit",
          "beforeCommand": ""
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            // "Go ahead and try it out on your own! After this window closes, make two commits to complete the level"
            "계속해서 직접 한번 해보세요! 이 창을 닫고, 커밋을 두 번 하면 다음 레벨로 넘어갑니다"
          ]
        }
      }
    ]
  }
};
