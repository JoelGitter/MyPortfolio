import React from "react";
import { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Projects.scss";
import me from "../../assets/me.png";
import vtrends from "../../assets/volume-trends.png";
import dashboard from "../../assets/dashboard.png";
import surveyResults from "../../assets/survey-results.png";
import surveys from "../../assets/surveys.png";

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
                Markt POS is a Grocey Store management platform and Point of
                Sale system. It is made for mom and pop grocers including
                butchers, ethnic markets, and health food stores.
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
                with a few lines of code and is very customizeable with custom
                html and flows built in to the surveys.
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
      </div>
    </div>
  );
}

export default Projects;
