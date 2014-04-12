exports.level = {
  "goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C4\",\"id\":\"master\"},\"bugFix\":{\"target\":\"C2\",\"id\":\"bugFix\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C2\",\"C3\"],\"id\":\"C4\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}",
  "solutionCommand": "git checkout -b bugFix;git commit;git checkout master;git commit;git merge bugFix",
  // "name": "Merging in Git",
  "name": "Git에서 브랜치 합치기(Merge)",
  // "hint": "Remember to commit in the order specified (bugFix before master)",
  "hint": "말씀드린 순서대로 커밋해주세요 (bugFix에 먼저 커밋하고 master에 커밋)",
  "disabledMap" : {
    "git revert": true
  },
  "startDialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            // "## Branches and Merging",
            // "",
            // "Great! We now know how to commit and branch. Now we need to learn some kind of way of combining the work from two different branches together. This will allow us to branch off, develop a new feature, and then combine it back in.",
            // "",
            // "The first method to combine work that we will examine is `git merge`. Merging in Git creates a special commit that has two unique parents. A commit with two parents essentially means \"I want to include all the work from this parent over here and this one over here, *and* the set of all their parents.\"",
            // "",
            // "It's easier with visuals, let's check it out in the next view"
            "## 브랜치와 합치기(Merge)",
            "",
            "좋습니다! 지금까지 커밋하고 브랜치를 만드는 방법을 알아봤습니다. 이제 두 별도의 브랜치를 합치는 몇가지 방법을 알아볼 차례입니다. 이제부터 배우는 방법으로 브랜치를 따고, 새 기능을 개발 한 다음 합칠 수 있게 될 것입니다.",
            "",
            "처음으로 살펴볼 방법은 `git merge`입니다. Git의 합치기(merge)는 두 개의 부모(parent)를 가리키는 특별한 커밋을 만들어 냅니다. 두개의 부모가 있는 커밋이라는 것은 \"한 부모의 모든 작업내역과 나머지 부모의 모든 작업, *그리고* 그 두 부모의 모든 부모들의 작업내역을 포함한다\"라는 의미가 있습니다. ",
            "",
            "그림으로 보는게 이해하기 쉬워요. 다음 화면을 봅시다."

          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            // "Here we have two branches; each has one commit that's unique. This means that neither branch includes the entire set of \"work\" in the repository that we have done. Let's fix that with merge.",
            // "",
            // "We will `merge` the branch `bugFix` into `master`"
            "여기에 브랜치가 두 개 있습니다. 각 브랜치에 독립된 커밋이 하나씩 있구요. 그 말은 이 저장소에 지금까지 작업한 내역이 나뉘어 담겨 있다는 얘기입니다. 두 브랜치를 합쳐서(merge) 이 문제를 해결해 볼까요?",
            "",
            "`bugFix` 브랜치를 `master` 브랜치에 합쳐(merge) 보겠습니다."
          ],
          "afterMarkdowns": [
            // "Woah! See that? First of all, `master` now points to a commit that has two parents. If you follow the arrows upstream from `master`, you will hit every commit along the way to the root. This means that `master` contains all the work in the repository now.",
            "보셨어요? 우선, `master`가 두 부모가 있는 커밋을 가리키고 있습니다. ",
            "",
            // "Also, see how the colors of the commits changed? To help with learning, I have included some color coordination. Each branch has a unique color. Each commit turns a color that is the blended combination of all the branches that contain that commit.",
            "또, 커밋들의 색이 바뀐 것을 눈치 채셨나요? 이해를 돕기위해 색상으로 구분해 표현했습니다. 각 브랜치는 그 브랜치만의 색상으로 그렸습니다. 브랜치가 합쳐지는 커밋의 경우에는, 그 브랜치들의 색을 조합한 색상으로 표시 했습니다.",
            "",
            // "So here we see that the `master` branch color is blended into all the commits, but the `bugFix` color is not. Let's fix that..."
            "그런식으로 여기에 `bugFix`브랜치 쪽을 제외한 나머지 커밋만 `master` 브랜치의 색으로 칠해져 있습니다. 이걸 고쳐보죠..."
          ],
          "command": "git merge bugFix master",
          "beforeCommand": "git checkout -b bugFix; git commit; git checkout master; git commit"
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            // "Let's merge `master` into `bugFix`:"
            "이제 `master` 브랜치에 `bugFix`를 합쳐(merge) 봅시다:"
          ],
          "afterMarkdowns": [
            // "Since `bugFix` was downstream of `master`, git didn't have to do any work; it simply just moved `bugFix` to the same commit `master` was attached to.",
            "`bugFix`가 `master`의 부모쪽에 있었기 때문에, git이 별다른 일을 할 필요가 없었습니다; 간단히 `bugFix`를 `master`가 붙어 있는 커밋으로 이동시켰을 뿐입니다.",
            "",
            // "Now all the commits are the same color, which means each branch contains all the work in the repository! Woohoo"
            "짜잔! 이제 모든 커밋의 색이 같아졌고, 이는 두 브랜치가 모두 저장소의 모든 작업 내역을 포함하고 있다는 뜻입니다."
          ],
          "command": "git merge master bugFix",
          "beforeCommand": "git checkout -b bugFix; git commit; git checkout master; git commit; git merge bugFix master"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            // "To complete this level, do the following steps:",
            // "",
            // "* Make a new branch called `bugFix`",
            // "* Checkout the `bugFix` branch with `git checkout bugFix`",
            // "* Commit once",
            // "* Go back to `master` with `git checkout`",
            // "* Commit another time",
            // "* Merge the branch `bugFix` into `master` with `git merge`",
            // "",
            // "*Remember, you can always re-display this dialog with \"help level\"!*"
            "아래 작업을 해서 이 레벨을 통과하세요:",
            "",
            "* `bugFix`라는 새 브랜치를 만듭니다",
            "* `git checkout bugFix`를 입력해 `bugFix` 브랜치로 이동(checkout)합니다.",
            "* 커밋 한 번 하세요",
            "* `git checkout` 명령어를 이용해 `master`브랜치로 돌아갑니다",
            "* 커밋 또 하세요",
            "* `git merge` 명령어로 `bugFix`브랜치를 `master`에 합쳐 넣습니다.",
            "",
            "*아 그리고, \"help level\" 명령어로 이 안내창을 다시 볼 수 있다는 것을 기억해 두세요!*"

          ]
        }
      }
    ]
  }
};
