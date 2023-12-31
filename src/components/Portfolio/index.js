import React from 'react';
import './index.scss';
import LogoS from '../../assets/images/mtm.png'
import LogoSubtitle from '../../assets/images/police.jpg'

// import React from 'react';
// import './App.scss';

class App extends React.Component {
  showAlert = () => {
    alert('This Project is under development.');
  };

  render() {
    return (
      <div className="port-container">
        <h1 className="title">PROJECT</h1>
        <div className="photo" onClick={this.showAlert}>
          <h2>MATTERS THAT MATTER</h2>
          <img src={LogoS} alt="Photo 1" />
        </div>
        <div className="photo" onClick={this.showAlert}>
          <h2>NATIONAL POLICE PORTAL</h2>
          <img src={LogoSubtitle} alt="Photo 2" />
        </div>
      </div>
    );
  }
}

export default App;



// class App extends React.Component {
//   handleClick = () => {
//     alert('This feature is under development.');
//   };

//   render() {
//     return (
//       <div className="container mt-5">
//         <h1 className="text-center">Under Development</h1>
//         <div className="row mt-4">
//           <div className="col-md-6">
//             <div className="card" onClick={this.handleClick}>
//               <img src={LogoS} className="card-img-top" alt="Image 1" />
//               <div className="card-body">
//                 <p className="card-text text-center"><strong>Click Me!</strong></p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="card" onClick={this.handleClick}>
//               <img src="image2.jpg" className="card-img-top" alt="Image 2" />
//               <div className="card-body">
//                 <p className="card-text text-center"><strong>Click Me!</strong></p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;





















// import React, { useEffect, useState } from "react";
// import Loader from "react-loaders";
// import AnimatedLetters from "../AnimatedLetters";
// import "./index.scss";
// import { getDocs, collection } from 'firebase/firestore';
// import { db } from '../../firebase';

// const Portfolio = () => { 
//     const [letterClass, setLetterClass] = useState('text-animate');
//     const [portfolio, setPortfolio] = useState([]);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setLetterClass('text-animate-hover');
//         }, 3000);

//         return () => {
//             clearTimeout(timer);
//         }
//     });

//     useEffect(() => {
//         getPortfolio();
//     }, []);

//     const getPortfolio = async () => {
//         const querySnapshot = await getDocs(collection(db, 'portfolio'));
//         setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
//     }

//     const renderPortfolio = (portfolio) => {
//         return (
//             <div className="images-container">
//                 {
//                     portfolio.map((port, idx) => {
//                         return (
//                             <div className="image-box" key={idx}>
//                                 <img 
//                                 src={port.image}
//                                 className="portfolio-image"
//                                 alt="portfolio" />
//                                 <div className="content">
//                                     <p className="title">{port.name}</p>
//                                     <h4 className="description">{port.description}</h4>
//                                     <button
//                                         className="btn"
//                                         onClick={() => window.open(port.url)}
//                                     >View</button>
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         );
//     }


//     return (
//         <>
//             <div className="container portfolio-page">
//                 <h1 className="page-title">
//                     <AnimatedLetters
//                         letterClass={letterClass}
//                         strArray={"Portfolio".split("")}
//                         idx={15}
//                     />
//                 </h1>
//                 <div>{renderPortfolio(portfolio)}</div>
//             </div>
//             <Loader type="pacman" />
//         </>
//     );
// }

// export default Portfolio;