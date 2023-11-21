# InstaCV

> AI Powered Resume Builder

## CodePath WEB103 Final Project

**Designed and developed by:** James Bustos
 
**Link to deployed app:** [https://wwwinstacv.jamesjbustos.com/ ](https://instacv.jamesjbustos.com/)

![resume-ui](https://github.com/jamesjbustos/insta-cv/assets/45052719/8024e2b8-3098-4a83-b8fa-a77ac3e08045)

## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Demos](#demos)
- [Installation Instructions](#installation-instructions)
- [Wireframes](#wireframes)
- [ER Diagram](#er-diagram)
- [Tables](#tables)
  - [`users`](#users)
  - [`resumes`](#resumes)
  - [`templates`](#templates)
  - [`tags`](#tags)
  - [`resume_tags`](#resume_tags)
- [License](#license)

## About

### Description and Purpose

InstaCV, an AI-powered resume builder, seeks to reinvent the resume creation process. Using the capabilities of OpenAI's GPT and Whisper APIs, InstaCV offers users the flexibility to either narrate their professional journey or input their experiences manually. In either scenario, the platform employs AI to analyze, structure, and optimize the content into a polished, professional resume tailored to target roles. By providing this dual approach, InstaCV addresses the challenges many face in drafting impactful resumes and ensures a tailored, high-quality output.

### Inspiration

The idea of InstaCV arose from the often tedious and restrictive nature of traditional resume crafting. Recognizing the challenges faced during job applications – from constant revisions to impersonal templates – InstaCV was conceptualized to offer a seamless and personalized resume-building experience. The platform empowers users to convey their career narratives and have them adeptly translated into resumes that encapsulate both their professional caliber and personal nuances.

## Tech Stack

- **Frontend**
  - **Languages:** JavaScript
  - **Frameworks:** React.js (Vite)
  - **UI Components:** ShadCN, TailwindCSS
  - **Icons:** Lucide Icons
- **Backend:**
  - **Languages:** Node.js
  - **Frameworks:** Express
  - **Authentication:** Passport, OAuth2
- **Database:** PostgreSQL
- **Hosting:** Railway

## Features

- **Resume Builder Interface:**

  - [x] Allow for user input to populate resume.
  - [x] Generate PDF dynamically with user input
  - [x] Allow users to download their resume in PDF format.
  - [x] Add clear resume to button to reset fields
  
- **Account management:**

  - [x] Save resumes to your account.
  - [x] Sign up and sign in with Github.

- **Resume management:**

  - [x] Create, update, and delete resumes.
  - [x] Locate saved resumes on your account.

## Demos

### Resume Builder Interface

https://github.com/jamesjbustos/insta-cv/assets/45052719/05a7c67c-55b7-47ad-8c0f-7f5e1b455af2

### User Account Creation and Management

https://github.com/jamesjbustos/insta-cv/assets/45052719/c73ce3c7-45ca-46bf-bf7a-c1ebb5d7ae41

### Resume management

https://github.com/jamesjbustos/insta-cv/assets/45052719/61e2df9b-6efa-4b56-9656-9324a93b2381

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

## ER Diagram

<img width="1066" alt="Screenshot 2023-11-21 at 3 37 37 AM" src="https://github.com/jamesjbustos/insta-cv/assets/45052719/8f74aa8b-3365-41a6-85ae-3824c18397c1">

## Tables

In this schema, we have the following relationships:

1. **One-to-Many Relationship:**

   - **users to resumes:** Each user can have multiple resumes, but each resume is linked to only one user.

2. **Many-to-Many Relationship (Products to Tags):**

   - **resumes to tags:** A resume can have multiple tags, and a tag can be associated with multiple resumes.

### `users`
| Column            | Type         | Properties                   |
|-------------------|--------------|------------------------------|
| id                | int          | pk, increment                |
| githubid          | varchar      | unique, not null             |
| username          | varchar      | not null                     |
| avatarurl         | text         |                              |
| accesstoken       | text         |                              |
| registration_date | timestamptz  | default: `now()`             |

### `resumes`
| Column           | Type        | Properties                  | Indexes |
|------------------|-------------|-----------------------------|---------|
| resumeID         | int         | pk, increment               | userID  |
| userID           | int         | ref: > users.id             |         |
| creation_date    | datetime    | default: `now()`            |         |
| content          | text        |                             |         |
| targeted_role    | varchar     |                             |         |
| templateID       | int         | ref: > templates.templateID |         |
| last_modified    | datetime    | default: `now()`            |         |

### `templates`
| Column       | Type     | Properties                   |
|--------------|----------|------------------------------|
| templateID   | int      | pk, increment                |
| name         | varchar  |                              |
| design       | varchar  | Refers to LaTeX template files |
| description  | varchar  |                              |

### `tags`
| Column    | Type     | Properties             |
|-----------|----------|------------------------|
| tagID     | int      | pk, increment          |
| tag_name  | varchar  |                        |

### `resume_tags`
| Column    | Type     | Properties              | Indexes         |
|-----------|----------|-------------------------|-----------------|
| resumeID  | int      | ref: > resumes.resumeID | (resumeID, tagID) [pk] |
| tagID     | int      | ref: > tags.tagID       |                 |

## Wireframes

### Homepage

![Homepage](https://github.com/jamesjbustos/web103_finalproject/assets/45052719/cfb1467f-2cbd-4a5d-a05e-f527ae3d4198)

### Dashboard

![Dashboard](https://github.com/jamesjbustos/web103_finalproject/assets/45052719/65562569-7eba-4c2a-8f80-01b2ebffc891)

### Resume Builder

![Resume Builder (1)](https://github.com/jamesjbustos/web103_finalproject/assets/45052719/23f089c7-cfb7-4f81-9a52-35f0665b979b)

## License

This project is licensed under the MIT License
