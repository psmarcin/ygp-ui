NAME=ygp-ui
PROJECT_ID=youtubegoespodcast

setProject:
	gcloud config set project $(PROJECT_ID)

build: setProject
	docker build -t $(NAME) .

run: setProject build
	npm run start

dev:
	npm run serve

deploy:
	gsutil rsync -R ./dist/ gs://yt.psmarcin.dev
