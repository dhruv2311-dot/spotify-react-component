import './Main/MainMenu.css'
function MainMenu(){
  const musicData = [
    {
      imgSrc: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true",
      title: "Liked Songs",
    },
    {
      imgSrc: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true",
      title: "Netflex Playlist",
    },
    {
      imgSrc: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true",
      title: "K/DA",
    },
    {
      imgSrc: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true",
      title: "Liked Songs",
    },
    {
      imgSrc: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true",
      title: "Dance/Electronic Mix",
    },
  ];
 
const showsData = [
  {
    imgSrc: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true",
    title: "Weekly Motivation",
  },
  {
    imgSrc: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true",
    title: "MEDITATION SELF",
  },
  {
    imgSrc: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true",
    title: "Words beyond act",
  },
  {
    imgSrc: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true",
    title: "The Alexa Show",
  },
  {
    imgSrc: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true",
    title: "The Stories of Ma",
  },
  {
    imgSrc: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true",
    title: "Motivational Daily",
  },
];
const filteredMusic = musicData.filter((music) => music.title === "Liked Songs");

  return (
    <>
  
      
    
     <div className="main">
        <div className="sidebar">
          <div className="first">
            <div className="logo">
              <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Spotify%20logo.png?raw=true" alt="" />
            </div>
            <div><img className='sideimg' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Home.png?raw=true" alt="" />Home</div>
            <div><img className='sideimg' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Search.png?raw=true" alt="" />Search</div>
            <div><img className='sideimg' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Your%20library.png?raw=true" alt="" />Your Library</div>
          </div>
          <div className="sec">
            <div><img className='sideimg' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Create.png?raw=true" alt="" />Create Playlist</div>
            <div><img className='sideimg' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/heart.png?raw=true" alt="" />Liked Songs</div>
            <div><img className='sideimg' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/your%20episodes.png?raw=true" alt="" />Your Episodes</div>
          </div>

          <div className="third">
            <div>FAV</div>
            <div>Daily Mix 1</div>
            <div>Discover Weekly</div>
            <div>Malayalam</div>
            <div>Dance/Electronix Mix</div>
            <div>EDM/Popular</div>
          </div>

          <div className="fourth"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/grommet-icons_install-option.png?raw=true" alt="" />Install App</div>
        </div>
        <div className="cont">
          <div className="top">
            <div className="arrows"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/top%20arrow%20navigation.png?raw=true" alt="" /></div>
            <div className="profile">
              <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/User.png?raw=true" alt="" />
            </div>
          </div>
          <p className="text">Good morning</p>
          {/* <div className="display">
      {musicData.map((music, index) => (
        <div className="music" key={index}>
          <img src={music.imgSrc} alt={music.title} />
          {music.title}
        </div>
      ))}
    </div> */}
{/* map function */}
<div className="display">
      {filteredMusic.map((music, index) => (
        <div className="music" key={index}>
          <img src={music.imgSrc} alt={music.title} />
          {music.title}
        </div>
      ))}
    </div>
          <p className="text">Shows you might like</p>
          <div className="shows">
      {showsData.map((show, index) => (
        <div key={index}>
          <img src={show.imgSrc} alt={show.title} />
          {show.title}
        </div>
      ))}
    </div>
          </div>
          </div>


    </>
  )
}
export default MainMenu