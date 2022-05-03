import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import Header from './Header';
import Card from './Card'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

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
            <AnimationOnScroll animateIn="animate__fadeInDown">
            <Card genre = 'Sci-fi'
                  image = "/posters/Interstellar.jpeg"
                  title = "Intersteller"
                  rating = "9.5" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.2'>
            <Card genre = 'Crime'
                  image = "/posters/seven.jpeg"
                  title = "Seven"
                  rating = "7.5" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.3'>
            <Card genre = "Thriller"
                  image = "/posters/mirage.jpeg"
                  title = "Mirage"
                  rating = "6.5" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.5'>
            <Card genre = 'Drama'
                  image = "/posters/manifest.jpeg"
                  title = "Manifest"
                  rating = "9" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown">
            <Card genre = 'Thriller'
                  image = "/posters/moneyheist.webp"
                  title = "La Casa De Papel"
                  rating = "9" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.2'>
            <Card genre = 'Thriller'
                  image = "/posters/fightclub.jpeg"  
                  title = "Fight Club"
                  rating = "9.9" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.3'>
            <Card genre = 'Comedy/Disaster'
                  image = "/posters/dontlookup.jpeg"  
                  title = "Don't Look Up"
                  rating = "7.5" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.5'>
            <Card genre = 'Action'
                  image = "/posters/rednotice.jpg"  
                  title = "Red Notice"
                  rating = "6" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown">
            <Card genre = 'Action'
                  image = "/posters/extraction.jpg"  
                  title = "Extraction"
                  rating = "7" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.2'>
            <Card genre = 'Mystery'
                  image = "/posters/shutterisland.jpg"  
                  title = "Shutter Island"
                  rating = "8" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.3'>
            <Card genre = 'Inspirational'
                  image = "/posters/theintern.jpeg"  
                  title = "The Intern"
                  rating = "9.5" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.5'>
            <Card genre = 'Inspirational'
                  image = "/posters/jobs.jpeg"  
                  title = "Jobs"
                  rating = "8" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown">
            <Card genre = 'Romance'
                  image = "/posters/luckyone.jpeg"  
                  title = "The Lucky One"
                  rating = "7" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.2'>
            <Card genre = 'Drama'
                  image = "/posters/suits.jpeg"  
                  title = "Suits"
                  rating = "9" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.3'>
            <Card genre = 'Drama'
                  image = "/posters/peaky.jpeg"  
                  title = "Peaky Blinders"
                  rating = "9" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.5'>
            <Card genre = 'Sci-fi'
                  image = "/posters/lucy.jpg"  
                  title = "Lucy"
                  rating = "7" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown">
            <Card genre = 'Medical Drama'
                  image = "/posters/house.jpeg"  
                  title = "House"
                  rating = "9" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.2'>
            <Card genre = 'Comedy'
                  image = "/posters/freshprince.jpg"  
                  title = "Fresh Prince of Bel Air"
                  rating = "9" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.3'>
            <Card genre = 'Thriller'
                  image = "/posters/v.jpeg"  
                  title = "V for Vendetta"
                  rating = "9.9" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.5'>
            <Card genre = 'Drama'
                  image = "/posters/himym.png"  
                  title = "How I met your Mother"
                  rating = "9" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown">
            <Card genre = 'Documentary'
                  image = "/posters/socialdillema.jpeg"  
                  title = "Social Dillema"
                  rating = "8" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.2'>
            <Card genre = 'Thriller'
                  image = "/posters/shawshank.jpeg"  
                  title = "Social Dillema"
                  rating = "9" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.3'>
            <Card genre = 'Mystery'
                  image = "/posters/imitation.jpg"  
                  title = "The Imitation Game"
                  rating = "7" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.5'>
            <Card genre = 'Drama'
                  image = "/posters/sully.jpeg"  
                  title = "Sully"
                  rating = "8.5" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown">
            <Card genre = 'Documentary'
                  image = "/posters/confessionKiller.webp"  
                  title = "Confession Killer"
                  rating = "9" />
            </AnimationOnScroll>
                  
          </div>
      <Footer />
    </div>
  )
}



ReactDOM.render(<Page />, document.getElementById('root'));




