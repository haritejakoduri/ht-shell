# ht-shell
command line tool to run large commands with the help of user defined words
# how to use
if you want to run this code in your system you should have nodejs and npm installed
## step1: install nodejs
command for installing node js in linux systems is "sudo apt get install nodejs".
now run "node --version" if node is installed it will show "v15.2.1" or below version. any version is ok. same version is not needed.
on windows goto https://nodejs.org and install nodejs lts version.
## step2: install git and clone repo
command for installing git in linux is "sudo apt get install git".
now clone the repo "git clone https://github.com/haritejakoduri/ht-shell.git"
windows users can download git cli from https://git-scm.com/downloads 
## step3: make it executable from everyware
now change directory "cd ht-shell".
run this command "npm link".
now you can write "ht" in shell press enter it will open new commadline interface where you can enter your commands.
## how to short your commands
in ht-shell folder we have another folder called '.bin'. open that folder you can see command.json file you can edit that file to get new short commands that can trigger large commmands.
## what need to be implimented
for now it doesn't support "cd" and other commands which doesn't have proper interface to display.
## restrictions 
there are no restrictions.
