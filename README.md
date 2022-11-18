# Adstate Website in Angular <!-- omit in toc -->

# Table of content <!-- omit in toc -->

- [1. Motivation](#1-motivation)
- [2. Base architecture](#2-base-architecture)
  - [2.1. Folders](#21-folders)
  - [2.2. CSS Architecture](#22-css-architecture)
- [3. Case studies](#3-case-studies)
  - [3.1. Dropdown menu](#31-dropdown-menu)
  - [3.2. Custom buttons](#32-custom-buttons)
- [4. Things I learned](#4-things-i-learned)
  - [4.1. Typescript basics](#41-typescript-basics)
  - [4.2. Angular](#42-angular)

# 1. Motivation

1. Learning Angular and Typescript
2. Being prepared for an eventual Yes from Adstate
3. Showing another proof of motivation and proactivity to them
4. Testing once again how fast I can learn about an entirely new subject. I started on Monday 7th November.

# 2. Base architecture

## 2.1. Folders

I set myself for a structure that is a mix of what I am used to in React, and what seem to be the philosophy in Angular - this structure might be affected by further learning:

1. A `Components module` with all the base components for the UI: headers, hero text, base dropdown menu
2. A `Shared module` with features that can be used by several components: The dropdown shared component could be used by the dropdown menu, and the mobile header menu system.
3. A `pages module`, with landing page / contact / jobs, etc..
4. A `service` folder for Angular services
5. An `asset` folder with subfolders for fonts, graphics (icons and logos), images (illustrations and pictures)

## 2.2. CSS Architecture

1. A global style + CSS resets file: styles.scss
2. A global font file: fonts.scss
3. A global variables file: variables.scss
4. Rest of the styles are made by components, which are scoped in Angular

# 3. Case studies

## 3.1. Dropdown menu

It is a great feature to work on, as it includes many tricky aspect, using services.

1. We need to store somewhere whether a dropdown is open or not. Could be a thing if we want to persist it (I don't know yet how that works in Angular), or to include it in the adress bar with Routing (so that a person could send this link to a collaborator).
2. Multiple dropdowns can be opened at the same time.

## 3.2. Custom buttons

I created a buttons component that can accept an input "primary", "secondary", which changes the styling of the button.
![buttons](https://i.ibb.co/VQFfwDG/Screenshot-2022-11-18-at-10-39-29.png)

# 4. Things I learned

## 4.1. Typescript basics

1. Interfaces
2. type annotation, type inference, type assertion

## 4.2. Angular

1. Expressions
2. Property binding
3. Event binding
4. Input aliases
5. Emiting events
6. Content projection
7. Lifecycle functions
8. Scoped CSS
9. Pipes
10. Directives
11. Feature modules
12. Exporting components
13. Reusable components
14. Multi slot content projection
15. Services / dependency injection, Services injection
