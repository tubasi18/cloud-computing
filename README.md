#Dont forget to run docker desktop 

# Bring up the services again (after making changes , if any)
docker-compose -f docker-compose-prod.yml up --build -d
docker-compose -f docker-compose.yml up --build -d    

# List all images to get their IDs
docker images 


docker tag <image-id> tubasi/cloud-computing:[] , ex docker tag 50adf8685415 tubasi/cloud-computing:backend-latest


# Push images to DockerHub
docker push tubasi/cloud-computing:backend-latest
docker push tubasi/cloud-computing:db-latest
docker push tubasi/cloud-computing:frontend-latest

# Bring down the services
docker-compose -f docker-compose-prod.yml down
docker-compose -f docker-compose.yml down    