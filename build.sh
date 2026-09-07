#!/bin/bash
echo "Installing Git LFS for Vercel deployment..."
yum install git-lfs -y || {
    echo "Yum install failed, trying manual installation..."
    curl -sLO https://github.com/git-lfs/git-lfs/releases/download/v3.4.1/git-lfs-linux-amd64-v3.4.1.tar.gz
    tar xzf git-lfs-linux-amd64-v3.4.1.tar.gz
    export PATH=$PATH:$(pwd)/git-lfs-3.4.1
}

git lfs install
git lfs pull
echo "LFS pull complete."
