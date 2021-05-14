import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/my_resume.pdf";

function Resume() {



  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Data Science/Quantitative Analyst Intern, IsmileTechnologies  Chicago, IL"
              date="June 2020 - August 2020"
              content={[
                "Predicted food freshness of food items by running multinomial logistic regression models using 1 million data points from 145 restaurants. Results were used by the restaurants stock management team to analyze the next stock order.",
                "Increased freshness accuracy prediction by 27% by incorporating features from IoT sensors.",
                "Improved model robustness by creating linear splines, using feature selection methods, by reducing multicollinearity."
              ]}
            />
          
            <Resumecontent
              title="Data Science Intern, Verif-y, Philadelphia"
              date="June 2020 - Sept 2020"
              content={[
                "Performed predictive analysis and anomaly detection to identify fraudulent behavior in KYC (Know your customer) process using Decision Trees and Naïve Bayesian Classifier in Python to decrease fraud in KYC by at least 25%.",
                "Automated the face verification process used for KYC thus reducing the manual work by 30 hrs./week. Designed interactive dashboards using Tableau to effectively portray insights on two year’s aggregated KYC process trends."
              ]}
            />
            <Resumecontent
              title="Data Analyst, Oracle, India"
              date="July 2018 - July 2019"
              content={[
                "Optimized report generation for various clients by designing personalized parameters and using advanced SQL queries in  Oracle BI. Reduced redundancy in the number of reports by 65%.",
                "Designed and developed interactive dashboards to help a client in analyzing and assessing their sale’s incentive compensation, thereby reducing manual work of calculating sale’s incentive by 50 hrs./week.",
                "Developed yearly compensation plans by speaking with the client’s key sales leaders regarding design, implementation and also model compensation plan designs against future sales metrics for cost estimations and financial accruals to accomplish the speeding of calculation of incentive’s process by 80%."
              ]}
            />
            <Resumecontent
              title="Data Analyst Intern| Electronics Corporation of India Limited (ECIL) INDIA"
              date="April-2017 to July-2017"
              content={[
                "Analyzed requirements and developed the data models (Conceptual, Logical and Physical), schema designs (Star and Snowflake) and loaded it into databases (Oracle) using Informatica as ETL tool and Erwin as Data Modeler.",
                "Designed and developed business intelligence dashboards, analytical reports and data visualizations using Tableau by creating multiple measures using LOD expressions for different user groups, operations and finance team needs.",
                "Cleaned unstructured data by processing the data using Python Pandas and NumPy, developed database objects, including tables, views, and materialized views to store data in a structured format using Oracle SQL."
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Drexel University"
              date="2019 - Present"
              content={["Masters in Data Science",`GPA: 3.9/4.0`, "TA: Introduction to data analytics, Applied Database technologies, Applied machine learning, Data mining, Database management system"]}
            />
            <Resumecontent
              title="Vellore Institute Of Technology, Vellore"
              date="2014 - 2018"
              content={["Bachelors in Computer Science","GPA: 3.8/4.0"]}
            />
            <h3 className="resume-title">Review Paper and Publication</h3>
            <Resumecontent
              title="Review Paper on Cricket Predictions Using Various Machine Learning Algorithms"
              content={[
                "International Journal for Research in Applied Science & Engineering Technology (IJRASET), (SYNERGY-2018 conference) ",
              ]}
              link="https://www.ijraset.com/fileserve.php?FID=17099"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
