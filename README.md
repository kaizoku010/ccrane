# ccrane

clone repo
with
gh repo clone kaizoku010/ccrane

run npm install.

Lets Build our Docker image.

The tag(-t, --tag) is used to set the name of the image
and an optional tag in the format ‘ccrane:exc’. 
We’ll leave off the optional “tag” for now to help simplify things. 

run sudo docker build --tag ccrane .
next..

View all local images
run sudo docker images
among the list result ccrane shld be listed with tag exc

Run the image using -publish

sudo docker run -p 3000:3000 ccrane:exc

Since that we have a dockerized app, lets add it to kubernetes

Deploy it so..

kubectl apply -f ccrane.yaml
"the .yaml is already included in the app, so running the above cmd will deploy the entire app to kubernetes"

run..
kubectl get deployments
"they shld be listed, one as ccrane"

next,
run 
kubectl get services
"since all our pods are up and running open browser and point to localhost:30001"
