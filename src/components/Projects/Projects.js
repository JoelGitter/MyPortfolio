import React from "react";
import { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Projects.scss";
import dashboard from "../../assets/dashboard.png";
import surveys from "../../assets/surveys.png";
import iphoneFlight from "../../assets/IPhoneFlight.png";

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="projects-container">
        <div className="project">
          <Card sx={{ width: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="160"
              image={dashboard}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Markt POS
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Markt POS is a comprehensive grocery store management platform
                and point-of-sale system designed specifically for small
                businesses, including butchers, ethnic markets, and health food
                stores.
              </Typography>
            </CardContent>
            <CardActions>
              <a href="/marktpos">
                <Button size="small">More</Button>
              </a>
              <a href="https://www.marktpos.com" target="_blank">
                <Button size="small">Website</Button>
              </a>
            </CardActions>
          </Card>
        </div>
        <div className="project">
          <Card sx={{ width: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="160"
              image={surveys}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                User Vista
              </Typography>
              <Typography variant="body2" color="text.secondary">
                User Vista is an in-app survey tool. It is easily implemented
                with a few lines of code and is very customizeable with 11
                different input types, custom code, and logic flows which users
                can build into the surveys.
              </Typography>
            </CardContent>
            <CardActions>
              <a href="/user-vista">
                <Button size="small">More</Button>
              </a>
              <a href="https://www.uservista.ai" target="_blank">
                <Button size="small">Website</Button>
              </a>
            </CardActions>
          </Card>
        </div>
        <div className="project">
          <Card sx={{ width: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="160"
              image={iphoneFlight}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                IPhone Flight Tracking
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is a feature improvement in the IPhone messaging app to
                make tracking flights of friends and family easier. I designed
                this using figma to solve the problem of constantly having to go
                back to texts to see the status of a flight.
              </Typography>
            </CardContent>
            <CardActions>
              <a href="/iphone-flight-feature">
                <Button size="small">More</Button>
              </a>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Projects;
