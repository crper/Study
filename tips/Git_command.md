#个人git基础配置(WIN)
个人喜欢方便,所以配置基本都是在全局下配置的,也就是global
至于系统级别[/etc/gitconfig]和目录级别的[.git/.config],小伙伴可以看需求配置

```git
git config --global user.name  "git账户的用户名"    #方便查看谁提交了更新
git config --global user.email "git账户邮箱"  #数据推送及方便他人联系
git config --global core.editor atom #使用atom编辑器作为内置编辑器,提交注释,diff什么的
git config --global core.ui true  #终端的内容着色，以便你可以凭直观进行快速、简单地分析
git config --global core.autocrlf  true #可以在你提交时自动地把行结束符CRLF转换成LF，而在签出代码时把LF转换成CRLF。

git config --global alias.        #
git config --global alias.st status    #简写状态命令
git config --global alias.co checkout   #简写切换分支命令
git config --global alais.cm "commit -m"  #提交且加注释
git config --global alias.cob "checkout -b"   #简写新建分支并切换到该分支的命令
git config --global alias.db "branch -d"   #简写删除分支命令
git config --global alias.gba "branch -a"   #加上-a参数可以查看远程分支，远程分支会用红色表示出来（如果你开了颜色支持的话）
git config --global alias.mg merge   #简写合并分支命令
git config --global alias.cfg "config --global" #简写配置命令
git config --global alias.cf l "config --list"  #简写列出用户配置的命令
git config --global alias.logp " log --pretty=oneline --graph --decorate --color=always  --all"   #简写美化日志且排序所有分支记录

```
**Tips**
Linux或Mac系统使用LF作为行结束符，因此你不想 Git 在签出文件时进行自动的转换；当一个以CRLF为行结束符的文件不小心被引入时你肯定想进行修正，把core.autocrlf设置成input来告诉 Git 在提交时把CRLF转换成LF，签出时不转换：

`$ git config --global core.autocrlf input`

这样会在Windows系统上的签出文件中保留CRLF，会在Mac和Linux系统上，包括仓库中保留LF。

Win下的别名不能做到如Linux那般强大....完整的重写命令...不过还是可以省掉很多时间

#个人常用git命令合集

```git
git clone <git项目地址,支持https,ssh>    #获取远程参考
git  init     #初始化git仓库
git add .    #添加仓库修改的文件到暂存区
git add *  #添加仓库所有文件到暂存区
git commit -m "comment"#添加注释提交暂存区的文件
git commit -a -m "comment"  #不需要git add直接提交...一般不推荐使用
git staus #查看仓库当前状态
git checkout <branch>  #单纯的新建分支
git checkout -b <branch>    #新建分支且切换到该分支
git branch -a    #显示所有分支,本地+远程
git branch -d <branch>   #删除本地分支
git remote rename <原远端别名> <新远端别名> 　＃重命名远端
git remote add  <远程仓库>  #添加远程参考
git remote -v　＃显示所有远程仓库
git push origin <branch>  #推送本地仓库到远端origin下的某个分支...若是远端别名更改了这里也改
git push origin --delete <branchName>   #删除远程分支
git tag   #查看
git push --tags #推送本地标签到远程
git push origin --delete tag <tagname> #删除远程标签
git pull # 抓取远程仓库所有分支更新并合并到本地
git remote rm <repository>       # 删除远程仓库
```


暂时就写那么多了... 这就是日常所用到的...
其他的再慢慢更新
