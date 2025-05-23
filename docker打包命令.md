# Docker 命令构建镜像，不使用代理
docker build -f ./projects/app/Dockerfile -t crpi-jueydr7wjgyd9rso.cn-guangzhou.personal.cr.aliyuncs.com/mox_docker/fast_pojo:v4.9.9.5 . --build-arg name=app
# Make 命令构建镜像，不使用代理
make build name=app image=crpi-jueydr7wjgyd9rso.cn-guangzhou.personal.cr.aliyuncs.com/mox_docker/fast_pojo:v4.9.9.1

# Docker 命令构建镜像，使用代理
docker build -f ./projects/app/Dockerfile -t crpi-jueydr7wjgyd9rso.cn-guangzhou.personal.cr.aliyuncs.com/mox_docker/fast_pojo:v4.9.9.1 . --build-arg name=app --build-arg proxy=taobao
# Make 命令构建镜像，使用代理
make build name=app image=crpi-jueydr7wjgyd9rso.cn-guangzhou.personal.cr.aliyuncs.com/mox_docker/fast_pojo:v4.9.9.1 proxy=taobao

# 推送镜像
$ docker login --username=莫溪 mox crpi-jueydr7wjgyd9rso.cn-guangzhou.personal.cr.aliyuncs.com
$ docker tag [ImageId] crpi-jueydr7wjgyd9rso.cn-guangzhou.personal.cr.aliyuncs.com/mox_docker/fast_pojo：[镜像版本号]
$ docker push crpi-jueydr7wjgyd9rso.cn-guangzhou.personal.cr.aliyuncs.com/mox_docker/fast_pojo：[镜像版本号]

# 拉取镜像
docker pull crpi-jueydr7wjgyd9rso.cn-guangzhou.personal.cr.aliyuncs.com/mox_docker/fast_pojo：[镜像版本号]

# 镜像版本号：v4.9.9.2
# ImageId sha256:c1e6d639616931bc5c0966e66453d20ee5a6aca89409505427769ed46e6b6d48

docker login --username=莫溪 mox crpi-jueydr7wjgyd9rso.cn-guangzhou.personal.cr.aliyuncs.com
 docker tag sha256:ef6f8c4c827c416fd2829c7f99ae6ea72a06ef50f46a2722cc88b8e073546b5a crpi-jueydr7wjgyd9rso.cn-guangzhou.personal.cr.aliyuncs.com/mox_docker/fast_pojo:v4.9.9.0
 docker push crpi-jueydr7wjgyd9rso.cn-guangzhou.personal.cr.aliyuncs.com/mox_docker/fast_pojo:v4.9.9.0
 
docker pull crpi-jueydr7wjgyd9rso.cn-guangzhou.personal.cr.aliyuncs.com/mox_docker/fast_pojo:v4.9.9.0



docker stop sha256:41b0dac8ca8d7521bc9fda63d0a8db7ab18f6e1054c8e92adb234992dcb7f548 && docker rm 容器名
