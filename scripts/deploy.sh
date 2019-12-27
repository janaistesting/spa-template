#!/usr/bin/env bash

remote=18.184.46.63
user=bitnami
sshkey=~/.ssh/scp.pem

#Get Node version
echo Node Version: $(node --version)

# install nuxt to generate static content
npm install -g nuxt

npm run --prefix /app/ generate

echo Hello


#For gitbash
#scp -i $sshkey -r ../dist/ $user@$remote:/home/bitnami/stack/nginx/html/

