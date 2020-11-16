<p align="center"><a href="https://walidsj.github.io/toolujian/" target="_blank"><img src="https://walidsj.github.io/toolujian/img/apel.png" width="92"></a></p>

<p align="center">
<img src="https://user-images.githubusercontent.com/50021257/98807107-bfdd5500-244c-11eb-9c28-a51c1064d57c.png" alt="Build Status">
<img src="https://user-images.githubusercontent.com/50021257/98807147-cf5c9e00-244c-11eb-967c-8a6fa7f5a995.png" alt="License">
</p>

## About
This tool has usability for formatting and naming the exam answer sheets or files in accordance with applicable provisions that have been established by the educational institution of [PKN STAN](https://www.linkedin.com/school/politeknik-keuangan-negara-stan/) (State Finance Polytechnic of STAN). By using optimal html and javascript programing language, we finally can produce a simple program like this tool but very useful for student's exam lifes, especially in [campus of PKN STAN](https://pknstan.ac.id).

It uses Cookies as a central userdata storage (instead of using LocalStorage because its simplicity), so it can save user's default exam settings which filled-in by students, even though it doesn't use the server-side renderer at all. Because of its light approach in production, it is suitable for rapid-mass use and requires no strong connection.

##### Table of Contents
* [About](#about)
* [Features](#features)
* [Screenshots](#screenshots)

In the latest release, this tool includes update with an extensible and more modern javascript framework named Vue.js, replaces the former javascript library JQuery that implemented well before to this tool at earlier version. That replacement of course doesn't cause the application lose its functions because it is properly ported. It also includes a new notification feature using Toastify plugin (3rd party Vue.js plugin).

This tool currently supports Progressive Web App (PWA) so it can be installed via browser application (such as Chrome, Firefox, Opera, UC Browsers, etc) on various types of desktop and mobile OS systems. The PWA plugin (contain service worker and cache management) it uses is PWA Builder plugin which converted from the former plugin called UpUp.js as an alternative. The visual appearance has also been improved to be nicer and aesthetic by changing the navbar, header, and footer.

## Features

* Support Progressive Web App (PWA)
* Save the user's default exam data and settings to Cookies
* Automatic fill session of exam
* Full database of majors, semesters, courses, and exam sessions
* Input validation according to institutional provision and regulation

## Screenshots
![image](https://user-images.githubusercontent.com/50021257/98477190-e6bb4180-2228-11eb-83ca-b9510e919b30.jpg)
![image](https://user-images.githubusercontent.com/50021257/99181832-bb25e300-2763-11eb-8aaa-49b3e0c75698.png)
