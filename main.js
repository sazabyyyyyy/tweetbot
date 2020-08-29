const twitter =require('twitter');
const fs = require('fs');
const bot = new twitter({
  consumer_key        : "☓☓☓☓☓☓☓☓",
  consumer_secret     : "☓☓☓☓☓☓☓☓",
  access_token_key    : "☓☓☓☓☓☓☓☓",
  access_token_secret : "☓☓☓☓☓☓☓☓"
});

const imgNum = Math.floor(Math.random()*(83-1)+1);
const imgPath ="path/to/image";

const data = fs.readFileSync(imgPath); //投稿する画像
const mes = '#猫bot'; //投稿するメッセージ

(async ()=>{
  const media = await bot.post('media/upload', {media: data});
  const status = {
    status: mes,
    media_ids: media.media_id_string // Pass the media id string
  }

  await bot.post('statuses/update', status, function(error, tweet, response) {
    if (!error) {
      console.log("success");
    }else{
      console.log("error");
    }
  });
})();


