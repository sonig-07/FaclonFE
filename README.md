# Falcon Frontend Assignment

## Project Overview

This project implements a reusable Angular chart component that dynamically renders multiple chart types using SVG and TypeScript, without any external chart libraries.

The component supports:

* Column Chart
* Line Chart
* Pie Chart

It is fully reusable and renders charts based on configuration input using the following component:

```html
<io-chart [chartOptions]="options"></io-chart>
```

---

## Technologies Used

* Angular
* TypeScript
* SVG
* HTML
* SCSS

---

## Features

* Reusable Angular chart component
* Dynamic chart rendering based on input configuration
* Supports Column, Line, and Pie charts
* Responsive design using SVG viewBox
* Clean Falcon Frontend UI theme
* Legend included
* Hover effects

---

## 📸 Screenshots

### Column Chart

 ![alt text](<Screenshot 2026-02-20 003348.png>)

### Pie Chart

  ![alt text](<Screenshot 2026-02-20 003421.png>)

### Line Chart

  ![alt text](<Screenshot 2026-02-20 003446.png>)

---

## Project Structure

```
src/
 └── app/
     └── chart/
         ├── chart.component.ts
         ├── chart.component.html
         └── chart.component.scss

screenshots/

README.md
```

---

## How to Run Project

Open terminal inside project folder and run:

```bash
npm install
npm start
```

Then open browser:

```
http://localhost:4200
```

---

## Assignment Requirements Covered

* Angular Component Usage
* TypeScript Chart Logic
* SVG Rendering
* Reusable Component Design
* Responsive Layout
* Clean Styling
* No External Chart Libraries Used

---

## Author

SoniG

Falcon Frontend Assignment Submission

Built as part of Frontend Intern Assignment.
