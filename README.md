# Medisen

Medisen is a web application that predicts the top 5 possible diseases based on the symptoms entered by the user. It utilizes a Random Forest Classifier for prediction and provides relevant symptoms associated with each predicted disease.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Backend Structure](#backend-structure)
- [Frontend Structure](#frontend-structure)
- [Disclaimer](#disclaimer)
- [License](#license)

## Project Overview
Medisen is designed to assist users by suggesting potential health conditions based on provided symptoms. This tool is not a replacement for professional medical advice and is intended for informational purposes only.

## Features
- Predicts top 5 possible diseases based on user-provided symptoms.
- Displays matching and relevant symptoms for each disease.
- Responsive design for desktop and mobile views.
- Provides a disclaimer to inform users of its intended use.

## Tech Stack
- **Frontend:** React, CSS, Axios
- **Backend:** Flask, Pandas, Scikit-learn, Random Forest Classifier
- **Others:** Flask-CORS for Cross-Origin Resource Sharing

## Getting Started

### Prerequisites
- Node.js and npm for frontend
- Python 3.8+ for backend
- Flask, Pandas, Scikit-learn, Flask-CORS libraries
# Project Setup Guide

## Backend Setup

### 1. Clone the Repository
```bash
git clone https://github.com/username/medisen.git
cd medisen/backend
```

### 2. Install Python Dependencies
```bash
pip install -r requirements.txt
```

### 3. Place Dataset in Backend Folder
- Ensure your dataset file is named `dis_sym_dataset_comb.csv` and place it in the `backend` folder.

### 4. Run the Flask Server
```bash
python server.py
```
- The backend server should now be running on [http://localhost:5000](http://localhost:5000).

---

## Frontend Setup

### 1. Navigate to the Frontend Directory
```bash
cd ../frontend
```

### 2. Install Frontend Dependencies
```bash
npm install
```

### 3. Start the React Development Server
```bash
npm run dev
```
---

## Screenshots
![Screenshot 2024-11-25 154911](https://github.com/user-attachments/assets/96e88caf-876a-4c15-adee-558ca5b8e91e)


<br> <br>
![Screenshot 2024-11-26 105926](https://github.com/user-attachments/assets/033d8472-8177-4da7-9c67-0c9d45a2be8a)

<br> <br>

![Screenshot 2024-11-26 105618](https://github.com/user-attachments/assets/85ac9ffe-b86c-42bb-a41b-15713d5524ed)

<br> <br>

![Screenshot 2024-11-26 110050](https://github.com/user-attachments/assets/fdd0a0d5-ac5a-4615-ba7e-cdcdc577352a)
