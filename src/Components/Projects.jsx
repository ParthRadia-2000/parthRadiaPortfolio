import React from "react";
import Navbar from "./Navbar";
import "../Styles/projects.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="projects_window">
        <div className="project_details">
          <Accordion className="accordian">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              <Typography className="accordian_title">
                C3 (Company Connects Customers)
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="accordian_details">
              <Typography className="typography">
                A Basic CRM solution for the company. <br />
                Companies manage their customers, sales, deals, employees,
                products, invoices, tasks, etc. <br />
                Project creation, submission and progress tracking, Analysis of
                sales and deals.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordian">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              <Typography className="accordian_title">
                Weather Searcher
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="accordian_details">
              <Typography className="typography">
                Weather app created with open weather API.
                <br /> Shows temperature, humidity, wind speed, etc. for a
                particular city.
                <br /> Weather forecast details for one day.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordian">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              <Typography className="accordian_title">
                Project Management Tool
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="accordian_details">
              <Typography className="typography">
                A tool for supporting the "WORK FROM HOME" concept. <br />
                Allows a company to create a project, sub-tasks of project,
                track progress of the project, etc.
                <br /> An employee can submit the solution of a task in a given
                time. <br />
                Notes facility to manage work.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordian">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              <Typography className="accordian_title">
                Career Impulsar
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="accordian_details">
              <Typography className="typography">
                web application for jobs/ internships and freelancing work.
                <br />
                Connects job posters with job seekers, Suggests the most
                suitable jobs based on skills.
                <br /> Skill tests for freshers to show case their skills.
                <br />
                Send time to time application updates to applicants, etc.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Projects;
