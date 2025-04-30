const uplodedThumbnail = document.getElementById('uplod-thumbnail')
const uplodedProfile = document.getElementById('uplod-profile')
const uplodedVideoTitle = document.getElementById('uplod-videoTitle')
const uplodedChannelName = document.getElementById('uplod-channelName')
const uplodedVideoDuration = document.getElementById('uplod-videoDuration')
const submit = document.getElementById('submit')

let newDataBase =[
  {
    thumbnail: '010_thumbnail',
    profile: '010_profile',
    videoTitle: 'ভাইরাল টেকনোলজি নিউজ আপডেট',
    channelName: 'Traversy Media',
    videoDuration: '2:10:40'
  }
]
submit.addEventListener('click', ()=>{
  let title = uplodedVideoTitle.value;
  let name = uplodedChannelName.value;
  let duration = uplodedVideoDuration.value;

  let singleData = {
    thumbnail: '010_thumbnail',
    profile: '010_profile',
    videoTitle: title,
    channelName: name,
    videoDuration: duration,
  }
  newDataBase.push(singleData)
  localStorage.setItem('dataBase', JSON.stringify(newDataBase))
  let newdata = JSON.parse(localStorage.getItem('dataBase'))

  for(let i=0;i<newdata.length;i++){
    newRandom = Math.floor(Math.random()*newdata.length);
    videoGenerator(newDataBase, newRandom);
  }
 

})




