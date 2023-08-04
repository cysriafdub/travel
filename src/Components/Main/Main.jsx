import React from 'react'
import './main.css'

import img from '../../Assets/img (3).jpg'
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (5).jpg'
import img6 from '../../Assets/img (6).jpg'
import img7 from '../../Assets/img (7).jpg'
import img8 from '../../Assets/img (8).jpg'
import img9 from '../../Assets/img (9).jpg'
import img10 from '../../Assets/img (10).jpg'
import img11 from '../../Assets/img (11).jpg'


//import icons
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'

const Data = [
  
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Palawan',
    location: 'Palawan, Philippines',
    grade: 'CULTURAL RELAX',
    fees: '₱4000',
    description: `Discover the enchanting beauty of Palawan, home to the world-renowned Underground River, a UNESCO World Heritage Site. Explore the pristine beaches of El Nido, go island hopping in Coron, and be mesmerized by Palawan's breathtaking landscapes.`
  },
//   {
//   id:2,
//   imgSrc: img2,
//   destTitle: 'Cebu',
//   location: 'Cebu, Philippines',
//   grade: 'CULTURAL RELA',
//   fees: '₱3500',
//   description: `Experience the refreshing allure of Kawasan Falls in Cebu
//   a multi-tiered cascade surrounded by lush tropical greenery. Enjoy a refreshing dip
//   in its emerald waters and take a bamboo raft ride for an unforgettable nature retreat.`
//   },

//  {
//   id:3,
//   imgSrc: img3,
//   destTitle: 'Cebu',
//   location: 'Cebu, Philippines',
//   grade: 'CULTURAL RELA',
//   fees: '₱3500',
//   description: `Experience the refreshing allure of Kawasan Falls in Cebu
//   a multi-tiered cascade surrounded by lush tropical greenery. Enjoy a refreshing dip
//   in its emerald waters and take a bamboo raft ride for an unforgettable nature retreat.`
//  },

 {
  id: 4,
  imgSrc: img4,
  destTitle: 'Boracay',
  location: 'Aklan, Philippines',
  grade: 'CULTURAL RELAX',
  fees: '₱4200', 
  description: `Experience the breathtaking beauty of Boracay, known for its powdery white sand and crystal-clear waters. Relax under swaying palm trees, take a dip in the azure sea, and witness spectacular sunsets that will leave you in awe.`
},
{
  id: 5,
  imgSrc: img5,
  destTitle: 'Siargao',
  location: 'Surigao del Norte, Philippines',
  grade: 'CULTURAL RELAX',
  fees: '₱3800', 
  description: `Discover the enchanting island of Siargao, a surfer's paradise and nature lover's dream. Embrace the laid-back vibe, explore the lush mangrove forests, and ride the waves at Cloud 9.`
},
{
  id: 6,
  imgSrc: img6,
  destTitle: 'Palawan',
  location: 'Palawan, Philippines',
  grade: 'CULTURAL RELAX',
  fees: '₱4500', 
  description: `Embark on an unforgettable journey to Palawan, home to the world-renowned Puerto Princesa Underground River and the breathtaking limestone cliffs of El Nido. Immerse yourself in nature's wonders and experience pure bliss.`
},
{
  id: 7,
  imgSrc: img7,
  destTitle: 'El Nido',
  location: 'Palawan, Philippines',
  grade: 'CULTURAL RELAX',
  fees: '₱3900',
  description: `Explore the mesmerizing beauty of El Nido, where towering limestone cliffs meet turquoise waters. Discover hidden lagoons, go island hopping, and bask in the serenity of this tropical paradise.`
},
{
  id: 8,
  imgSrc: img8,
  destTitle: 'Coron',
  location: 'Palawan, Philippines',
  grade: 'CULTURAL RELAX',
  fees: '₱4100',
  description: `Indulge in the tranquility of Coron, famous for its crystal-clear lakes, stunning lagoons, and vibrant marine life. Snorkel through coral gardens and dive into the captivating shipwrecks beneath the sea.`
},
{
  id: 9,
  imgSrc: img9,
  destTitle: 'Bohol',
  location: 'Bohol, Philippines',
  grade: 'CULTURAL RELAX',
  fees: '₱3600',
  description: `Experience the wonders of Bohol, home to the famous Chocolate Hills and the adorable tarsiers. Cruise along the Loboc River, visit historic churches, and unwind on the pristine beaches of Panglao.`
},
{
  id: 10,
  imgSrc: img10,
  destTitle: 'Batanes',
  location: 'Batanes, Philippines',
  grade: 'CULTURAL RELAX',
  fees: '₱4800', 
  description: `Embark on a journey to Batanes, a remote and breathtakingly beautiful province in the Philippines. Be captivated by the rolling hills, rugged cliffs, and unique stone houses that give you a glimpse of a different world.`
},
{
  id: 11,
  imgSrc: img11,
  destTitle: 'Siquijor',
  location: 'Siquijor, Philippines',
  grade: 'CULTURAL RELAX',
  fees: '₱3200', 
  description: `Discover the mystic charm of Siquijor, known for its pristine beaches, mystical traditions, and captivating waterfalls. Embrace the island's enchanting atmosphere and unwind amidst its natural wonders.`
},
// {
//   id: 12,
//   imgSrc: 'img12',
//   destTitle: 'Pagudpud',
//   location: 'Ilocos Norte, Philippines',
//   grade: 'CULTURAL RELAX',
//   fees: '₱4200', 
//   description: `Experience the unspoiled beauty of Pagudpud, nestled in the northernmost part of the Philippines. Feel the soft sands between your toes, marvel at the Bangui Windmills, and swim in the azure waters of Saud Beach.`
// },
// {
//   id: 13,
//   imgSrc: 'img13',
//   destTitle: 'Camiguin',
//   location: 'Camiguin, Philippines',
//   grade: 'CULTURAL RELAX',
//   fees: '₱3800', 
//   description: `Uncover the charm of Camiguin, an island known as the "Island Born of Fire" due to its volcanoes and hot springs. Immerse yourself in its rich history, relax in the natural springs, and snorkel around its marine sanctuaries.`
// },
// {
//   id: 14,
//   imgSrc: 'img14',
//   destTitle: 'Bantayan',
//   location: 'Cebu, Philippines',
//   grade: 'CULTURAL RELAX',
//   fees: '₱3700',
//   description: `Escape to Bantayan Island, a tropical paradise off the coast of Cebu. Bask in the beauty of its powdery white sand beaches, savor fresh seafood, and relish in the island's laid-back ambiance.`
// }



  
  
]

const Main = () => {
  return (
   <section className='main container section'>
      <div className="secTitle">
        <h3 className="title">
          Most Visited Destinations
        </h3>
      </div>

      <div className="secContent grid">
            {
              Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                    return(
                      <div key={id} className="singleDestination">
                        {/* //return the single id from the map array */}
                        <div className="imageDiv">
                          <img src={imgSrc} alt={destTitle} />
                        </div>

                        <div className="cardInfo">
                          <h4 className="destTitle">{destTitle}</h4>
                          <span className="continent flex">
                            <HiOutlineLocationMarker className ='icon'/>
                            <span className="name">{location} </span>
                          </span>

                          <div className="fees flex">
                            <div className="grade">
                              <span>{grade}<small>+1</small> </span>
                            </div>
                            <div className="price">
                              <h5>{fees}</h5>
                            </div>
                          </div>

                          <div className="desc">
                            <p>{description}</p>
                          </div>

                          <button className="btn flex">
                            DETAILS <HiOutlineClipboardCheck className='icon'/>
                          </button>
                        </div>
                      </div>
                    )
              })
            }
      </div>
   </section>
  )
}

export default Main