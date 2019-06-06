NAME=ygp-ui
PROJECT_ID=youtubegoespodcast

setProject:
	gcloud config set project $(PROJECT_ID)

build: setProject
	npm run build

run: setProject build
	npm run start

dev:
	npm run serve

deploy: build
	gsutil -m rsync -R ./dist/ gs://yt.psmarcin.dev
