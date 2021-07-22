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
