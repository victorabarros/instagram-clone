APP_NAME?=instagram-clone-infra
APP_DIR=/root/home/amplify/${APP_NAME}
DOCKER_BASE_IMAGE=node:16.14.0
COMMAND?=bash

YELLOW=\e[1m\033[33m
COLOR_OFF=\e[0m

remove-containers:
ifneq ($(shell docker ps -a --filter "name=${APP_NAME}" -aq 2> /dev/null | wc -l | bc), 0)
	@echo "${YELLOW}Removing containers${COLOR_OFF}"
	@docker ps -a --filter "name=${APP_NAME}" -aq | xargs docker rm -f
endif

docker-command: remove-containers
	@docker run -it \
    -v $(shell pwd)/..:${APP_DIR} \
    -w ${APP_DIR} \
    --name ${APP_NAME} \
		${DOCKER_BASE_IMAGE} bash -c "${COMMAND}"

debug:
	@echo "${YELLOW}\nDebug mode${COLOR_OFF}"
	@make -s docker-command COMMAND="bash .infra/setup.sh"
