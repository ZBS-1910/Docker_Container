clean up the whole sys and del every img and container etc
```
docker system prune
or
docker system prune -a
```
build  a new dockerfile and create an image usig below cmd
```
docker build -t <tag_name> .
```
Run the container form the img
```
docker run -it --init -p <host_port>:<container_port> <image_name>
```

bind mount a local file or folder into the container, so that any changes you make to it on your host machine immediately reflect inside the running container—great for live development.
```
docker run -it -p 3002:3000 -v ${PWD}:/developers/nodejs/node-bind-mount-project app-bind-mount
```
