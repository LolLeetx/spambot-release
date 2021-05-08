node ./bin/merge.js
./node_modules/ffmpeg-static/ffmpeg -f s16le -ar 48000 -ac 2 -i ./recordings/merge.pcm ./mp3/out.mp3
node clear.js