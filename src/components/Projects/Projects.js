import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import amazongo from "../../Assets/Projects/amazongo.jpg";
import student_grade_prediction from "../../Assets/Projects/student_grade_prediction.jpg";
import grocery from "../../Assets/Projects/grocery.jpg";
import heart from "../../Assets/Projects/heart.jpg";
import fire from "../../Assets/Projects/fire.jpg";

import covid from "../../Assets/Projects/covid.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazongo}
              isBlog={false}
              title="Amazon Go"
              description="Leveraged the TensorFlow object detection framework to detect human faces and images of the products such as coke, Evian
etc. with less than 0.1% error to accelerate the checkouts at the grocery store.
"
      description2="Developed an application using python shell to link the products to their corresponding prices to facilitate faster checkout’s
thereby saving customer’s time by 90% and also interaction of humans to bill the items in the cart is reduced to 0%."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={student_grade_prediction}
              isBlog={false}
              title="Student Grade’s Prediction" 
              description="Performed data wrangling, adjusted missing values, identified and dealt with outliers, anomalies to predict the grades."
 description2="Employed machine learning models such as support vector machine, linear regression, random forest regression and
performed feature engineering using backward elimination process to accurately model the student’s grades and achieved r2 score of 0.72 and RMSE of 2.09 by optimizing the models using GridSearch."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fire}
              isBlog={false}
              title="Image Detection using Deep Learning"
              description="Trained a CNN classifier using 6000 images with Keras and tensorflow. The classifier sucessfully predicts if theres fire explosion at a particular place or not. Highest accuracy acheived was 91%"
              description2="Optimized the model by tweaking the model parameters, Also compared the results with the results obtained from the tenserflow object detection API."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="COVID-19 Analysis"
              description="Explored and filtered data using Spark SQL to analyze the confirmed cases and fatalities of Covid-19 provided by John
Hopkin’s University and implemented exploratory data analysis by building multiple dashboards using Tableau."
description2="
 ̈Explored the range of regression models such as Linear Regression, Random Forest Regression and Decision Tree
Regression to achieve a r2 score of 0.85 and RMSE of 2.36, built the pipeline using PySpark, Spark ML."
            />
          </Col>

      <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grocery}
              isBlog={false}
              title="Identifying Customer Segments for a Grocery Store"
              description="Clustered the customer’s features using MiniBatchKMeans algorithm and PCA to identify potential customers and improve efficiency to structure their delivery service to meet the needs of each customer."
description2="Performed exploratory data analysis on the features and created visualizations on the clusters. Used Silhouette Coefficient
to evaluate the models."
            />
          </Col>

      <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heart}
              isBlog={false}
              title="Heart Stroke Predictions"
              description=" Performed data wrangling, adjusted missing values, identified and dealt with outliers, anomalies to predict, heart stroke"
description2="Employed machine learning models such as support vector machine, logistic regression, random forest, decision tree and
performed feature engineering using backward elimination process to accurately model if a person would have a heart
stroke or not and achieved accuracy score of 0.91 by optimizing the models using GridSearch."
            />
      </Col>
       
        </Row>
       
      </Container>
    </Container>
  );
}

export default Projects;
