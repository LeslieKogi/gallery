# Gallery App - CI/CD with Jenkins, Render & Slack

##  Overview
This project is a simple **Gallery web application** deployed on [Render](https://gallery-ed60.onrender.com/) and integrated with **Jenkins CI/CD pipelines**.  
The pipeline automates the process of:
- Pulling the latest code from GitHub
- Installing dependencies
- Running tests
- Deploying to Render
- Sending build notifications to Slack


---

## Features
- **Node.js application** (Gallery app with image upload support)
- **CI/CD pipeline** with Jenkins
- **Automated tests** (`npm test`)
- **Deployment to Render** with a webhook
- **Slack integration** for build notifications

---

## Technologies
- **Node.js 18**
- **Jenkins**
- **Render**
- **Slack**
- **Ngrok** (for exposing Jenkins to GitHub webhooks)
- **GitHub** (version control & source repo)

---

## Pipeline Workflow
1. **Trigger**: Push to `master` branch on GitHub → webhook notifies Jenkins.  
2. **Checkout**: Jenkins pulls the latest code from the repository.  
3. **Install Dependencies**: Runs `npm install`.  
4. **Tests**: Executes `npm test`. If tests fail → email notification is sent.  
5. **Deploy**: On success, triggers Render deploy via API.  
6. **Notify**: Posts a message to a Slack channel with build details & Render site link.

---

## Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/LeslieKogi/gallery.git
cd gallery
```
### 2. Install dependancies
```bash
npm install
```
### 3. Run locally
```bash 
node server
```
## Author
- Leslie Kogi
