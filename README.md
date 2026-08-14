# University Physics Teaching Platform

This repository contains the source code for a university project I developed as an interactive teaching platform for physics students.

The main goal of the project is to make some physics concepts easier to understand by combining normal explanations with interactive models and visual tools.

## What it includes

The platform contains several different sections for presenting physics concepts. Instead of relying only on text and static images, some topics are presented through interactive models that the student can interact with and explore.

Some of the main parts of the project are:

- Interactive 3D models
- Interactive physics visualizations
- A digital whiteboard
- Mathematical notation and equations
- Definitions and explanations
- Different views for different physics topics

## Technologies

### React

The main framework used for the project is React.

The application is divided into different components and views. React is also used to manage the application's state and control which content is currently being displayed.

### React Three Fiber / Three.js

I used React Three Fiber to create the interactive 3D parts of the application.

These models allow students to interact with objects rather than just looking at a static picture. For example, the project contains models and visualizations related to physics concepts that can be rotated, explored, and manipulated.

React Three Fiber was useful because it allows Three.js to be used within the React component structure.

### Context API

The Context API is used for state that needs to be shared between different parts of the application.

For example, different components need to know which view is currently active and whether certain parts of the interface, such as the whiteboard, are enabled.

Using Context avoids having to pass the same state through several layers of components.

### tldraw

The project uses tldraw to provide an interactive digital whiteboard.

The whiteboard can be used while studying the material, allowing students to write, draw, and work through problems directly inside the application.

I also used tldraw's persistence features so that the whiteboard state could be preserved instead of being completely reset whenever the component was removed.

### MathJax

MathJax is used to display mathematical equations and notation.

This is important for the project because physics explanations often require mathematical expressions that would be difficult to represent using normal HTML text.

## Project structure

The application is organized into components based on their purpose.

Some of the main parts include:

- `components/layout` — main layout components such as the sidebar, content area, and definition panel
- `components` — interactive models, whiteboards, and other application components
- `context` — shared application state using React Context
- Physics views — individual interactive visualizations for different topics

The project is still being developed and the structure may change as more features are added.

## Interactive Physics Models

One of the main ideas of the project is to use interactive models instead of presenting every concept as static content.

The application currently contains several interactive views, including:

- 3D globe visualization
- Platinum bar model
- Platinum cylinder model
- Repeating wave visualization
- Interactive whiteboard

The purpose of these models is not just to make the application look better, but to give students something they can interact with while learning the concept.

## Purpose

This project is being developed as a university teaching project.

The main idea is to combine physics explanations, mathematics, interactive visualizations, and tools such as a digital whiteboard into one application.

The project is still a work in progress, and more physics topics and interactive models can be added in the future.
