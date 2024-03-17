import React from 'react'
import Card from '../Components/Card.js'
function HomeHire() {
  const convertDateFormat = (dateString) => {
    const parts = dateString.split("/");
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  };

  return (
    <div className="card-container"  >
      <Card id="card-item" image='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' event="hackathon" description="this is a hackathon organized by the ieee student club of the pesu ec club.
      a 24 hour hackathon with a lot of fun and games." venue="MRD" date={convertDateFormat("20/03/2024")} />
      <Card id="card-item" image='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' event="hackathon" description="this is a hackathon organized by the ieee student club of the pesu ec club.
      a 24 hour hackathon with a lot of fun and games." venue="sem hall 1" date={convertDateFormat("21/03/2024")} />
      <Card id="card-item" image='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' event="hackathon" description="this is a hackathon organized by the ieee student club of the pesu ec club.
      a 24 hour hackathon with a lot of fun and games." venue="sem hall 2" date={convertDateFormat("22/03/2024")} />
      <Card id="card-item" image='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' event="hackathon" description="this is a hackathon organized by the ieee student club of the pesu ec club.
      a 24 hour hackathon with a lot of fun and games." venue="MRD" date={convertDateFormat("23/03/2024")} />
      <Card id="card-item" image='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' event="hackathon" description="this is a hackathon organized by the ieee student club of the pesu ec club.
      a 24 hour hackathon with a lot of fun and games." venue="MRD" date={convertDateFormat("24/03/2024")} />
      <Card id="card-item" image='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' event="hackathon" description="this is a hackathon organized by the ieee student club of the pesu ec club.
      a 24 hour hackathon with a lot of fun and games." venue="MRD" date={convertDateFormat("25/03/2024")} />
      <Card id="card-item" image='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' event="hackathon" description="this is a hackathon organized by the ieee student club of the pesu ec club.
      a 24 hour hackathon with a lot of fun and games." venue="MRD" date={convertDateFormat("26/03/2024")} />
      <Card id="card-item" image='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' event="hackathon" description="this is a hackathon organized by the ieee student club of the pesu ec club.
      a 24 hour hackathon with a lot of fun and games." venue="MRD" date={convertDateFormat("27/03/2024")} />
      

    </div>
  )
}

export default HomeHire


