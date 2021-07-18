#!/bin/bash
# Name: Global.Node.Install
# Description: Will download, unzip and setup Xampp to be used as a server by our program
# Author: [_.V._] 
# Date: 20210611.05:44
echo "*********************************************"
echo "|| V.Tools STARTING  Node Globals Install"
echo "*********************************************"
sleep 1s

FILENAME="./system/build/node_globals.Vinf"
LINES=$(cat $FILENAME)

for LINE in $LINES; do echo $(npm install -g $LINE); done

echo "*********************************************"
echo "|| V.Tools FINISHED Installing Node Globals"
echo "*********************************************"
sleep 1s