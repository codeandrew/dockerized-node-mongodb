#!/bin/bash

PROJECT=`pwd`

mkdir ~/Mongo
cd ~/Mongo
mkdir data
cd data
mkdir petpal

cd $PROJECT
docker-compose build
docker-compose up
