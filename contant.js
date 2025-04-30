let data = [
  {
    thumbnail: '001_thumbnail',
    profile: '001_profile',
    videoTitle: 'বিশেষ লাইভ সেশন - গল্প golpo ,আড্ডা ,প্রশ্ন-উত্তর । Jhankar Mahbub',
    channelName: 'Jhankar Mahbub',
    videoDuration: '2:17:09'
  },
  {
    thumbnail: '002_thumbnail',
    profile: '002_profile',
    videoTitle: 'রাতের আড্ডা - মজার গল্প golpo ও স্মৃতি',
    channelName: 'Programming Hero',
    videoDuration: '1:45:12'
  },
  {
    thumbnail: '003_thumbnail',
    profile: '003_profile',
    videoTitle: 'ভ্রমণের গল্প golpo - পাহাড়, সাগর আর মজার স্মৃতি',
    channelName: 'Tech BD',
    videoDuration: '0:55:41'
  },
  {
    thumbnail: '004_thumbnail',
    profile: '004_profile',
    videoTitle: 'ইনস্পিরেশনাল গল্প - স্বপ্ন পূরণের কাহিনী',
    channelName: 'Learn With Sumit',
    videoDuration: '2:12:05'
  },
  {
    thumbnail: '005_thumbnail',
    profile: '005_profile',
    videoTitle: 'প্রশ্ন-উত্তর পর্ব - ক্যারিয়ার ও প্রোগ্রামিং',
    channelName: 'Anisul Islam',
    videoDuration: '1:23:59'
  },
  {
    thumbnail: '006_thumbnail',
    profile: '006_profile',
    videoTitle: 'ইংরেজি শেখার সহজ উপায়',
    channelName: 'freeCodeCamp.org',
    videoDuration: '0:49:36'
  },
  {
    thumbnail: '007_thumbnail',
    profile: '007_profile',
    videoTitle: 'মুভি রিভিউ - সাম্প্রতিক জনপ্রিয় সিনেমা',
    channelName: 'Ostad',
    videoDuration: '2:03:20'
  },
  {
    thumbnail: '008_thumbnail',
    profile: '008_profile',
    videoTitle: 'লাইভ কোডিং সেশন - জাভাস্ক্রিপ্ট মাস্টারি',
    channelName: 'Code With Harry',
    videoDuration: '1:17:47'
  },
  {
    thumbnail: '009_thumbnail',
    profile: '009_profile',
    videoTitle: 'কোডিং চ্যালেঞ্জ - সমস্যা সমাধান সেশন',
    channelName: 'Creative IT',
    videoDuration: '0:58:25'
  },
  {
    thumbnail: '010_thumbnail',
    profile: '010_profile',
    videoTitle: 'ভাইরাল টেকনোলজি নিউজ আপডেট',
    channelName: 'Traversy Media',
    videoDuration: '2:10:40'
  },

];

const videoArea = document.getElementById('main');

function search(){
  videoArea.innerHTML = "";
  let filterCount= [];
  const searchValues = document.getElementById('search').value;
  let lowerSearch = searchValues.toLowerCase();

  

  for(let i=0;i<data.length;i++){

    function filter(data){
      let lowerData = data.toLowerCase();
       let  valueMatch = lowerData.includes(lowerSearch);
      if (valueMatch == true){
        filterCount.push(i)
      }
      }

    let allDatofChannelName = data[i].channelName;
    filter(allDatofChannelName);
    let allDataOfvideoTitle = data[i].videoTitle;
    filter(allDataOfvideoTitle);
    
  }
  for(let i=0; i<=filterCount.length;i++){
    let finalFilter = filterCount[i];
    videoGenerator(data, finalFilter);
  }
}



function videoGenerator(database, ramdom) {
  let thumbnails = database[ramdom].thumbnail;
  let profile = database[ramdom].profile;
  let videoTitle = database[ramdom].videoTitle;
  let channelName = database[ramdom].channelName;
  let videoDuration = database[ramdom].videoDuration;
  let video =`<div class="videoContainer">
          <div class="img-container">
            <img src="images/${thumbnails}.jpg" alt="profile">
            <div class="duration">${videoDuration}</div>
         </div>
         <div class="video-description">
            <img src="images/${profile}.jpg" alt="profile">
            <div class="text">
              <div class="video-title">${videoTitle}</div>
            
            <div class="channel-name">${channelName}</div>
            <div class="video-publish-date">
              3.4K views • 1 day ago
            </div>
          </div>
        </div>
  
      </div>`
  
  
  videoArea.insertAdjacentHTML('beforeend',video);
}

for(let i=0;i<data.length;i++){
   ramdomNum = Math.ceil(Math.random()*data.length);
   videoGenerator(data, ramdom);
 }


 

