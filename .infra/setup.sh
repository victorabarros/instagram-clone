YELLOW='\033[1;33m'
COLOR_OFF='\033[0m'
printf "${YELLOW}Installing AWS Amplify CLI${COLOR_OFF}\n"

# TODO move to Dockerfile
mkdir ~/.aws
cp .infra/.aws/* ~/.aws/

npm install -g @aws-amplify/cli

bash
