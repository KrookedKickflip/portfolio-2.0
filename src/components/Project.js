import React from 'react';
import '../App.css'

const Project = () => {
  return (
    <div className="card-holder">
     <a href="https://krookedkickflip.github.io/prework-study-guide/" className='card-link'>
      <section id="first-site" className="card-sec">
        <h3>First Website</h3>
        
      </section>
     </a>
      <a href="https://krookedkickflip.github.io/Nixed-Info/" className='card-link'>
      <section id="nick" className="card-sec">
        <h3>Nixed Info</h3>
          <p></p>
      </section>
    </a>
    <a href="https://game-connoisseur.herokuapp.com/" className='card-link'>
      <section id="game-con" className="card-sec">
        <h3>Game-Connoisseur</h3>
          <p></p>
      </section>
      </a>
      <a href="https://task-tally.herokuapp.com/" className='card-link'>
      <section id="task-tally" className="card-sec">
        <h3>Task-Tally</h3>
          <p></p>
      </section>
    </a>
      <section className="card-sec">
        <h3>Placeholder Box</h3>
          <p></p>
      </section>
      <section className="card-sec">
        <h3>Placeholder Box</h3>
          <p></p>
      </section>
    </div>
  );
};

export default Project;
