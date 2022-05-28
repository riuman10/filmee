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
            <Card genre = 'Docuserie'
                  image = "/posters/confessionKiller.webp"  
                  title = "Confession Killer"
                  rating = "9" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.2'>
            <Card genre = 'Inspiring'
                  image = "/posters/blindside.jpg"  
                  title = "The Blind Side"
                  rating = "7" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.3'>
            <Card genre = 'Comedy'
                  image = "/posters/think.jpeg"  
                  title = "Think like a man"
                  rating = "6" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.5'>
            <Card genre = 'Thriller'
                  image = "/posters/sonofsam.jpg"  
                  title = "Sons of Sam"
                  rating = "9" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown">
            <Card genre = 'Docuserie'
                  image = "/posters/themurderer.jpg"  
                  title = "The Women and the Muderer"
                  rating = "9.5" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.2'>
            <Card genre = 'Thriller'
                  image = "/posters/robot.jpg"  
                  title = "Mr. Robot"
                  rating = "8" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.3'>
            <Card genre = 'Comedy'
                  image = "/posters/seinfeld.webp"  
                  title = "Seinfeld"
                  rating = "7" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.5'>
            <Card genre = 'Thriller'
                  image = "/posters/adam.jpg"  
                  title = "The Adam Project"
                  rating = "9" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown">
            <Card genre = 'Docuserie'
                  image = "/posters/nightstalker.png"  
                  title = "Night Stalker"
                  rating = "9.5" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.2'>
            <Card genre = 'Thriller'
                  image = "/posters/darknight.jpeg"  
                  title = "The Dark Knight"
                  rating = "8.5" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.3'>
            <Card genre = 'Action'
                  image = "/posters/whitehouse.jpg"  
                  title = "White House Down"
                  rating = "7" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.5'>
            <Card genre = 'True Story'
                  image = "/posters/americanmurder.png"  
                  title = "American Murder"
                  rating = "9" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown">
            <Card genre = 'Docuserie'
                  image = "/posters/tedbundy.jpg"  
                  title = "Ted Bundy Tapes"
                  rating = "9.5" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.2'>
            <Card genre = 'Thriller'
                  image = "/posters/zodiac.jpeg"  
                  title = "Zodiac"
                  rating = "8.5" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.3'>
            <Card genre = 'Thriller'
                  image = "/posters/malang.webp"  
                  title = "Malang"
                  rating = "9" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.5'>
            <Card genre = 'Action'
                  image = "/posters/muhafiz.jpeg"  
                  title = "Muhafiz"
                  rating = "7" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown">
            <Card genre = 'Thriller'
                  image = "/posters/biohackers.webp"  
                  title = "Biohackers"
                  rating = "7" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.2'>
            <Card genre = 'Drama'
                  image = "/posters/narcos.jpeg"  
                  title = "Narcos"
                  rating = "9.5" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.3'>
            <Card genre = 'Thriller'
                  image = "/posters/enola.jpeg"  
                  title = "Enola Holmes"
                  rating = "6" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.5'>
            <Card genre = 'Action'
                  image = "/posters/underground.jpg"  
                  title = "6 Underground"
                  rating = "8" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown">
            <Card genre = 'Action'
                  image = "/posters/thehunt.jpeg"  
                  title = "The Hunt"
                  rating = "9" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.2'>
            <Card genre = 'Mystery'
                  image = "/posters/lincoln.jpg"  
                  title = "The Lincoln Lawyer"
                  rating = "9.5" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.3'>
            <Card genre = 'Thriller'
                  image = "/posters/dunkirk.jpg"  
                  title = "Dunkirk"
                  rating = "7" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" duration = '1.5'>
            <Card genre = 'True Crime'
                  image = "/posters/catchme.webp"  
                  title = "Catch me if you can"
                  rating = "9" />
            </AnimationOnScroll>





                  
          </div>
      <Footer />
    </div>
  )
}



ReactDOM.render(<Page />, document.getElementById('root'));




