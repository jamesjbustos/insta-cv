# AI-Powered Resume Builder – InstaCV

CodePath WEB103 Final Project

Designed and developed by: **James Bustos**
 
🔗 Link to deployed app: [https://wwwinstacv.jamesjbustos.com/ ](https://instacv.jamesjbustos.com/)

## About

### Description and Purpose

InstaCV, an AI-powered resume builder, seeks to reinvent the resume creation process. Using the capabilities of OpenAI's GPT and Whisper APIs, InstaCV offers users the flexibility to either narrate their professional journey or input their experiences manually. In either scenario, the platform employs AI to analyze, structure, and optimize the content into a polished, professional resume tailored to target roles. By providing this dual approach, InstaCV addresses the challenges many face in drafting impactful resumes and ensures a tailored, high-quality output.

### Inspiration

The idea of InstaCV arose from the often tedious and restrictive nature of traditional resume crafting. Recognizing the challenges faced during job applications – from constant revisions to impersonal templates – InstaCV was conceptualized to offer a seamless and personalized resume-building experience. The platform empowers users to convey their career narratives and have them adeptly translated into resumes that encapsulate both their professional caliber and personal nuances.

## Tech Stack

Frontend: React

Backend: Express, Passport

## Features

### ✅ Resume Builder Interface

Allow the user to create, edit, save, and delete their resume.

https://github.com/jamesjbustos/insta-cv/assets/45052719/98a056a4-7e66-41da-9fbe-b27c82c75972

### Voice-to-Text Resume Input

Utilizing the Whisper API, users can narrate their experiences, roles, and accomplishments. This feature is perfect for those who prefer speaking over typing, ensuring that no detail is left out in the process.

[gif goes here]

### AI-Powered Resume Structuring and Enhancement

Central to InstaCV is its GPT API-driven feature that takes either verbal or manual input and refines it into structured, professional resume points. To maximize relevance, users can supplement context, such as the targeted job role, empowering the AI to craft tailored content. Furthermore, the platform can intake existing resumes for a deep AI-driven evaluation, leading to precise feedback and enhancement suggestions, all in pursuit of a standout, role-specific resume.

[gif goes here]

### Job Listing Analyzer and Tailored Suggestions

By inputting a job listing link, InstaCV delves into the page, distilling vital keywords and requirements. Using this distilled data, it then suggests modifications to align the user's resume with the particular position. This feature ensures resume optimization for the role at hand, elevating its appeal to recruiters.

[gif goes here]

### Multiple Resume Versions and Editing

InstaCV recognizes that one size doesn't fit all when it comes to job applications. Therefore, users have the convenience of saving multiple versions of their resumes on the platform. This feature is particularly beneficial for those applying to diverse roles or industries, as it allows for easy retrieval and modification. Users can revisit and refine their resumes, ensuring each version is tailored and up-to-date for the targeted position.

[gif goes here]

### ✅ User Account Creation and Management

InstaCV integrates a streamlined user registration and login system, allowing users to create their own unique accounts. This feature is designed with both convenience and security in mind, enabling users to manage their resumes and preferences with ease.

https://github.com/jamesjbustos/insta-cv/assets/45052719/6fa0b8d7-9218-4486-b87a-499a84e92ea6

## Installation Instructions

To install and run InstaCV locally, please follow these steps:

1. Clone the repository to your local machine using the following command:
   ```
   git clone https://github.com/jamesjbustos/insta-cv.git
   ```

2. Navigate to the project server and client directory and install the required dependencies:
   ```
   cd client ; npm install
   ```
      ```
   cd server ; npm install
   ```

3. Go to root directory and run the following:
   ```
   npm start
   ```
