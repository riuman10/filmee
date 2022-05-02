import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import Header from './Header';
import Card from './Card'
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Footer() {
      return (
            <div className='footer'>
                  <small>&copy; Movie catalogue. Created | 2022</small>
            </div>
      )
};




function Page() {
  return(
    <div>
      <Navbar /> {/* Navigation Bar Component */}
      <Header /> {/* Header Component */}
          <div className='movies'>  {/* Movie Components */}
            <AnimationOnScroll animateIn="animate__bounceIn">
            <Card genre = 'Sci-fi'
                  image = "/posters/Interstellar.jpeg"
                  title = "Interstella"
                  rating = "9.5" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__bounceIn">
            <Card genre = 'Crime'
                  image = "/posters/seven.jpeg"
                  title = "Seven"
                  rating = "7.5" />
            </AnimationOnScroll>

            <Card genre = "Thriller"
                  image = "/posters/mirage.jpeg"
                  title = "Mirage"
                  rating = "6.5" />

            <Card genre = 'Drama'
                  image = "/posters/manifest.jpeg"
                  title = "Manifest"
                  rating = "9" />

            <Card genre = 'Thriller'
                  image = "/posters/moneyheist.webp"
                  title = "La Casa De Papel"
                  rating = "9" />

            <Card genre = 'Thriller'
                  image = "/posters/fightclub.jpeg"  
                  title = "Fight Club"
                  rating = "9.9" />

            <Card genre = 'Comedy/Disaster'
                  image = "/posters/dontlookup.jpeg"  
                  title = "Don't Look Up"
                  rating = "7.5" />

            <Card genre = 'Action'
                  image = "/posters/rednotice.jpg"  
                  title = "Red Notice"
                  rating = "6" />

            <Card genre = 'Action'
                  image = "/posters/extraction.jpg"  
                  title = "Extraction"
                  rating = "7" />

            <Card genre = 'Mystery'
                  image = "/posters/shutterisland.jpg"  
                  title = "Shutter Island"
                  rating = "8" />

            <Card genre = 'Inspirational'
                  image = "/posters/theintern.jpeg"  
                  title = "The Intern"
                  rating = "9.5" />

            <Card genre = 'Inspirational'
                  image = "/posters/jobs.jpeg"  
                  title = "Jobs"
                  rating = "8" />

            <Card genre = 'Romance'
                  image = "/posters/luckyone.jpeg"  
                  title = "The Lucky One"
                  rating = "7" />

            <Card genre = 'Drama'
                  image = "/posters/suits.jpeg"  
                  title = "Suits"
                  rating = "9" />

            <Card genre = 'Drama'
                  image = "/posters/peaky.jpeg"  
                  title = "Peaky Blinders"
                  rating = "9" />

            <Card genre = 'Sci-fi'
                  image = "/posters/lucy.jpg"  
                  title = "Lucy"
                  rating = "7" />

            <Card genre = 'Medical Drama'
                  image = "/posters/house.jpeg"  
                  title = "House"
                  rating = "9" />

            <Card genre = 'Comedy'
                  image = "/posters/freshprince.jpg"  
                  title = "Fresh Prince of Bel Air"
                  rating = "9" />

            <Card genre = 'Thriller'
                  image = "/posters/v.jpeg"  
                  title = "V for Vendetta"
                  rating = "9.9" />

            <Card genre = 'Drama'
                  image = "/posters/himym.png"  
                  title = "How I met your Mother"
                  rating = "9" />

            <Card genre = 'Documentary'
                  image = "/posters/socialdillema.jpeg"  
                  title = "Social Dillema"
                  rating = "8" />

            <Card genre = 'Thriller'
                  image = "/posters/shawshank.jpeg"  
                  title = "Social Dillema"
                  rating = "9" />

            <Card genre = 'Mystery'
                  image = "/posters/imitation.jpg"  
                  title = "The Imitation Game"
                  rating = "7" />

            <Card genre = 'Drama'
                  image = "/posters/sully.jpeg"  
                  title = "Sully"
                  rating = "8.5" />
                  
          </div>
      <Footer />
    </div>
  )
}



ReactDOM.render(<Page />, document.getElementById('root'));




