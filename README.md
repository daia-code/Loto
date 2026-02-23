## Loto 6/49 Statistical Analysis Application  
## Research Software for the Study  
**Comparative Study of React, Astro and Eleventy Technologies in Developing a Lottery Statistical Analysis Application**

---

## 1. Description

This repository contains the research software developed to support a comparative study between three modern web technologies: **React**, **Astro**, and **Eleventy**.

The application simulates and analyzes *Loto 6/49* and *Joker* lottery draws, providing statistical computation, visualization, and historical tracking.  
Each implementation follows identical functional requirements to enable an objective evaluation of performance, scalability, and development complexity.

---

## 2. Abstract

This research compares React, Astro, and Eleventy technologies through the development of a web application for analyzing Loto 6/49 and Joker draws. The system includes result visualization, history storage, statistical frequency computation, and graphical representation.

The study evaluates performance, SEO optimization, ease of development, scalability, and interactivity. Results indicate that Astro provides a balance between performance and flexibility, React excels in interactivity, and Eleventy offers simplicity and fast static builds. The findings highlight the importance of choosing web technologies according to application-specific requirements.

---

## 3. Keywords

React, Astro, Eleventy, Lottery Application, Statistical Analysis, Web Framework Comparison, Static Site Generator, 6/49 Draw

---

## 4. Research Objectives

The objectives of this software are:

- Implement identical lottery analysis applications across three frameworks  
- Compare rendering models (CSR, SSG, Hybrid)  
- Evaluate performance, SEO, and scalability  
- Assess development complexity and maintainability  
- Provide reproducible experimental software for academic validation  

---

## 5. Functional Requirements

All implementations provide the same functionality:

- Generation of 6 unique numbers (range 1–49)  
- Optional Joker number (range 1–10)  
- Storage of last 10 draws  
- Statistical frequency computation  
- Chart-based visualization (Chart.js)  
- Persistent storage using LocalStorage  
- Responsive user interface  

---

## 6. Technologies Used

### Core Technologies
- JavaScript (ES6+)
- HTML5 / CSS3
- Chart.js
- LocalStorage API

### Framework Implementations
- React (Client-Side Rendering)
- Astro (Hybrid Rendering / Islands Architecture)
- Eleventy (Static Site Generator)

---

## 7. Evaluation Criteria

Frameworks are evaluated using:

- Runtime performance
- Build performance
- SEO optimization
- Interactivity capability
- Development complexity
- Maintainability
- Scalability
- Bundle size
- Deployment simplicity

---

## 8. Repository Structure

Each framework version is implemented separately while preserving identical logic and functionality.

Example structure:
/react
/astro
/eleventy
/shared
/docs


This structure ensures reproducibility and fairness in comparison.

---

## 9. Research Contribution

This project provides a reproducible platform for evaluating modern frontend technologies using a real-world statistical application.  
It contributes empirical insights into framework selection for interactive and data-driven web systems.

---

## 10. Reproducibility

To reproduce experiments:

1. Clone the repository  
2. Install dependencies for each framework  
3. Run development/build commands  
4. Measure performance using tools such as Lighthouse or WebPageTest  

Framework-specific instructions are included in their respective directories.

---

## 11. Citation

If you use this repository in academic work, please cite:

**Comparative Study of React, Astro and Eleventy Technologies in Developing a Lottery Statistical Analysis Application**

(Include authors, publication venue, and year.)

---

## 12. License

This software is provided for academic and educational purposes.  
See the `LICENSE` file for details.

---

## 13. Contact

For questions or collaboration proposals, please open an Issue in this repository.
