# Evergarden Letters

A mini-message board inspired from [The Odin Project](https://www.theodinproject.com/lessons/nodejs-mini-message-board),
and themed after the anime [Violet Evergarden](https://violet-evergarden.jp/).

Project is complete, and I learned what I set out to learn. I'm happy with the result, and I'm moving on to the next project.
And, it turns out that deploying a NodeJS project is not free. After jumping through many PaaS and IaaS hoops, I decided to deploy
it on Glitch. You can view the live project [here](https://everlasting-prong-comb.glitch.me). Their free tier is limited, so the project
might not be available after a while. If that happens, you can always clone the project and run it locally.

## Running Locally

Clone the project, and run the following commands in the root of the project:

```bash
npm install
npm start # or npm run dev
```

The project will be available at `http://localhost:3000`.

## Things I Learned

In no particular order:

- Setting up a express project from scratch (without using express-generator). Why? Because at the time of development it had severe security vulnerabilities, and breaking updates.
- Using Pug for templating. It was a breeze to use, and I'm happy with the result.
- MVC pattern in NodeJS. I've used it before in Flask, and it was nice to see how it's done in NodeJS.
- Getting familiar with ExpressJS, and its core concepts like middleware, routing, etc.

---
![Violet Evergarden Banner](./public/banner.jpeg)
