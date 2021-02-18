---
date: "2020-02-18"
title: "Zsh alias with argument and autocompletion"
---
After trying different alias types (such as in [0] and [1]) I was unable to add an alias  with an argument that also worked with autocompletion. Perhaps I skimmed through too quickly. Regardless, I solved this issue as follows:

```
alias openb='openb(){ xdg-open $1 &! }; openb'
```

I went through the [Zsh docs on functions](http://zsh.sourceforge.net/Doc/Release/Functions.html) and tried different approaches and none of them worked with autocompletion.
If you could be kind enough to email (ej at this-site-dot-com) or message me in regards the reason of this working, I would appreciate it very much.

This worked on:
```
$ cat /etc/fedora-release
Fedora release 31 (Thirty One)
$ /bin/zsh --version
zsh 5.7.1 (x86_64-redhat-linux-gnu)
```
# References
0. [bash alias with argument and autocompletion](https://stackoverflow.com/questions/3778065/bash-alias-with-argument-and-autocompletion)
1. [5 Types Of ZSH Aliases You Should Know](https://thorsten-hans.com/5-types-of-zsh-aliases)
