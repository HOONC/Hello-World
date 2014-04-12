exports.level = {
  "goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C1\",\"id\":\"master\"},\"bugFix\":{\"target\":\"C1\",\"id\":\"bugFix\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"}},\"HEAD\":{\"target\":\"bugFix\",\"id\":\"HEAD\"}}",
  "solutionCommand": "git branch bugFix;git checkout bugFix",
  // "hint": "Make a new branch with \"git branch [name]\" and check it out with \"git checkout [name]\"",
  "hint": "\"git branch [브랜치명]\"으로 새 브랜치를 만들고, \"git checkout [브랜치명]\"로 그 브랜치로 이동하세요",
  "name": "Git에서 브랜치 쓰기",
  "disabledMap" : {
    "git revert": true
  },
  "startDialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            // "## Git Branches",
            "## Git 브랜치",
            "",
            // "Branches in Git are incredibly lightweight as well. They are simply references to a specific commit -- nothing more. This is why many Git enthusiasts chant the mantra:",
            "깃의 브랜치도 놀랍도록 가볍습니다. 브랜치는 특정 커밋에 대한 참조(reference)에 지나지 않습니다. 이런 사실 때문에 수많은 Git 애찬론자들이 자주 이렇게 말하곤 합니다:",
            "",
            "```",
            // "branch early, and branch often",
            "브랜치를 서둘러서, 그리고 자주 만드세요",
            "```",
            "",
            // "Because there is no storage / memory overhead with making many branches, it's easier to logically divide up your work than have big beefy branches.",
            "브랜치를 많이 만들어도 메모리나 디스크 공간에 부담이 되지 않기 때문에, 여러분의 작업을 커다른 브랜치로 만들기 보다, 작은 단위로 잘게 나누는 것이 좋습니다.",
            "",
            // "When we start mixing branches and commits, we will see how these two features combine. For now though, just remember that a branch essentially says \"I want to include the work of this commit and all parent commits.\""
            "브랜치와 커밋을 같이 쓸 때, 어떻게 두 기능이 조화를 이루는지 알아보겠습니다. 하지만 우선은, 단순히 브랜치를 \"하나의 커밋과 그 부모 커밋들을 포함하는 작업 내역\"이라고 기억하시면 됩니다."
          ]
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            // "Let's see what branches look like in practice.",
            "브랜치가 어떤 것인지 연습해보죠.",
            "",
            // "Here we will check out a new branch named `newImage`"
            "`newImage`라는 브랜치를 살펴보겠습니다."
          ],
          "afterMarkdowns": [
            // "There, that's all there is to branching! The branch `newImage` now refers to commit `C1`"
            "저 그림에 브랜치의 모든 것이 담겨있습니다! 브랜치 `newImage`가 커밋 `C1`를 가리킵니다"
          ],
          "command": "git branch newImage",
          "beforeCommand": ""
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            // "Let's try to put some work on this new branch. Hit the button below"
            "이 새로운 브랜치에 약간의 작업을 더해봅시다. 아래 버튼을 눌러주세요"
          ],
          "afterMarkdowns": [
            // "Oh no! The `master` branch moved but the `newImage` branch didn't! That's because we weren't \"on\" the new branch, which is why the asterisk (*) was on `master`"
            "앗! `master` 브랜치가 움직이고, `newImage` 브랜치는 이동하지 않았네요! 그건 우리가 새 브랜치 위에 있지 않았었기 때문입니다. 별표(*)가 `master`에 있었던 것이죠."
          ],
          "command": "git commit",
          "beforeCommand": "git branch newImage"
        }
      },
      {
        "type": "GitDemonstrationView",
        "options": {
          "beforeMarkdowns": [
            // "Let's tell git we want to checkout the branch with",
            // "",
            // "```",
            // "git checkout [name]",
            // "```",
            // "",
            // "This will put us on the new branch before committing our changes"
            "아래의 명령으로 새 브랜치로 이동해 봅시다.",
            "",
            "```",
            "git checkout [브랜치명]",
            "```",
            "",
            "이렇게 하면 변경분을 커밋하기 전에 새 브랜치로 이동하게 됩니다."

          ],
          "afterMarkdowns": [
            // "There we go! Our changes were recorded on the new branch"
            "이거죠! 이제 우리의 변경이 새 브랜치에 기록되었습니다!"
          ],
          "command": "git checkout newImage; git commit",
          "beforeCommand": "git branch newImage"
        }
      },
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            // "Ok! You are all ready to get branching. Once this window closes,",
            // "make a new branch named `bugFix` and switch to that branch"
            "좋아요! 이제 직접 브랜치 작업을 연습해봅시다. 이 창을 닫고,",
            "`bugFix`라는 새 브랜치를 만드시고, 그 브랜치로 이동해보세요"
          ]
        }
      }
    ]
  }
};