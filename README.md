# Adstate Website in Angular <!-- omit in toc -->

# Table of content <!-- omit in toc -->

- [1. Motivation](#1-motivation)
- [2. Process](#2-process)
  - [2.1. Redesign](#21-redesign)
  - [Performance issues](#performance-issues)
- [Base architecture](#base-architecture)
  - [Folders](#folders)
  - [CSS Architecture](#css-architecture)
- [Case study: the dropdown feature](#case-study-the-dropdown-feature)
- [Things I learned](#things-i-learned)
  - [Typescript basics](#typescript-basics)
  - [Angular](#angular)

# 1. Motivation

1. Learning Angular and Typescript
2. Being prepared for an eventual Yes from Adstate
3. Showing another proof of motivation and proactivity to them

# 2. Process

## 2.1. Redesign

I noticed a number of potential design/user experience concerns and accessibility issues on the website:

1. A bunch of unsufficient contrasts, for example the buttons:
   ![Buttons](https://i.postimg.cc/8z3PhXR8/Screenshot-2022-11-11-at-08-16-35.png)
2. Some weirdly aligned elements like on the mobile header, and elements not filling the space satisfyingly. Menu icon should be bigger for accessibility (Here it is 20px wide, should be 48+).
   ![Header](https://i.postimg.cc/GpcT55B4/Screenshot-2022-11-11-at-08-12-32.png)
3. In terms of user experience, i found that it was hard to have a good overview of all the digital solutions offered by the company. I tried myself for a possible solution where all the solutions are in dropdown menus that users can open and close (which was also a good feature to try to implement in Angular).
   ![Proposition](https://i.postimg.cc/w6PxGB1h/Screenshot-2022-11-11-at-08-46-44.png)

## Performance issues

I noticed with a brief check that a number of images where really big and costing a lot of bandwidth.
I set myself on instead turning them into SVGs, which both makes them weightless, and allow users to zoom infinitely!

Please note that I did not use much time doing them and that they can greatly be improved with some love :).
![SVG image](https://raw.githubusercontent.com/Gynko/learning-angular-ts/055483f55670b77eede4adbb80925bc60804707c/src/assets/pictures/Portal.svg)

# Base architecture

## Folders

I set myself for a structure that is a mix of what I am used to in React, and what seem to be the philosophy in Angular:

1. A Components module with all the base components for the UI: headers, hero text, base dropdown menu
2. A Shared module with features that can be used by several components: The dropdown shared component could be used by the dropdown menu, and the mobile header menu system.
3. A pages module, with landing page / contact / jobs, etc..
4. A service folder for Angular services
5. An asset folder with subfolders for fonts, graphics (icons and logos), images (illustrations and pictures)

## CSS Architecture

1. A global style + CSS resets file: styles.scss
2. A global font file: fonts.scss
3. A global variables file: variables.scss
4. Rest of the styles are made by components, which are scoped in Angular

# Case study: the dropdown feature

Used by both the menu icon of the header and the dropdown elements that present the digital solution.
It is a great feature to work on, as it includes many tricky aspects: dealing with several components, services / state, conditional rendering and styling.

1. We need to store somewhere whether a dropdown is open or not. Could be a thing if we want to persist it (I don't know yet how that works in Angular), or to include it in the adress bar with Routing (so that a person could send this link to a collaborator).
2. Multiple dropdowns can be opened at the same time.
3. The dropdown behaviour of the menu icon has an added specific behaviour: clicking / tapping outside of the dropdown can close it

# Things I learned

## Typescript basics

1. Interfaces
2. type annotation, type inference, type assertion

## Angular

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
