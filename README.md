# Falcon Frontend Assignment

## Overview

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

  ![Column](<Screenshots/Column.png>)

### Pie Chart

  ![Pie](<Screenshots/Pie.png>)

### Line Chart

  ![Line](<Screenshots/Line.png>)

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

## Approach

1. Created a reusable Angular component `<io-chart>` that accepts `chartOptions` as input to control chart type, title, and data.

2. Used Angular `*ngIf` to dynamically render Column, Line, or Pie chart based on the `type` property.

3. Implemented Column chart using SVG `<rect>` and calculated bar height and position in TypeScript.

4. Implemented Line chart using SVG `<polyline>` and `<circle>` with coordinates calculated from data values.

5. Implemented Pie chart using SVG `<path>` and calculated slice angles using data proportions.

6. Used SVG `viewBox` and percentage width to make the chart responsive.

7. Ensured reusability so different charts can be rendered by changing only the input configuration.


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
