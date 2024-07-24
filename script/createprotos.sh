#!/usr/bin/env bash
set -e 

protos_dir="./.cache/protos"
cache_dir="./.cache/include"
vendor_dir="./vendor/github.com/cosmos/cosmos-sdk"
proto_dir="./proto"

rm -rf $protos_dir
mkdir -p $protos_dir/akash
mkdir -p $protos_dir/k8s.io/apimachinery/pkg/api/resource

cp -rv $cache_dir/google $protos_dir
cp $cache_dir/k8s.io/apimachinery/pkg/api/resource/generated.proto $protos_dir/k8s.io/apimachinery/pkg/api/resource

cp -rv $vendor_dir/proto/ $protos_dir
cp -rv $vendor_dir/third_party/proto/ $protos_dir

cp -rv $proto_dir/node/akash/ $protos_dir/akash
cp -rv $proto_dir/provider/akash/ $protos_dir/akash

echo "Successfully copied proto files to .cache/protos"