<p align="center"> 
  <img src="https://github.com/user-attachments/assets/29c77361-db25-41dd-a92c-e9ffa044ed0a" width="750px;" alt=""/>
</p>

<p align="center"> 
  A simple backend with microservice architecture where users can upload their attempts for specific songs
</p>

---

<p align="center">
 <a href="#routes">API Endpoints</a> •
 <a href="#requisitos">Prerequisites</a> • 
 <a href="#running">Running the Project</a> • 
 <a href="#env">Env</a> • 
 <a href="#techs">Technologies</a> • 
 <a href="#autor">Author</a>
</p>

<h3 id="requisitos">🪛 Prerequisites to run the project</h3>
Before starting, you will need to have the following tools installed on your machine:
<a href="https://git-scm.com">Git</a>, <a href="https://nodejs.org/en/">Node.js</a>, <a href="https://www.docker.com">Docker</a>. 

---

<h3 id="running">💻 Running the Project</h3>  

```bash

# Clone this repository

$ git clone <henriquemoreiraa/nestjs-microservices-sa>

# Access project folder in terminal/cmd

$ cd nestjs-microservices-sa

# Install the dependencies

$ docker-compose up --build

```
---

<h3 id="env">⚙️ .env enviroment variables</h3>   

```bash
# For each project

MONGODB_URI
RABBIT_MQ_URI
RABBIT_MQ_AUTH_QUEUE

# ./attempt/.env

PORT
RABBIT_MQ_ATTEMPT_QUEUE
RABBIT_MQ_AUTH_QUEUE

# ./auth/.env

PORT
JWT_SECRET

```

---

<h3 id="techs">🛠 Technologies</h3>    

The following tools were used in building the project:

- [TypeScript](https://www.typescriptlang.org)

- [Node.js](https://nodejs.org)

- [Nest.js](https://nestjs.com)

- [MongoDB](https://www.mongodb.com)

- [Mongoose](https://mongoosejs.com)
 
- [RabbitMQ](https://www.rabbitmq.com)
  
- [Docker](https://www.docker.com)
---

<h2 id="routes">📍 API Endpoints</h2>

Here you can list the main routes of your API, and what are their expected request bodies.
​
| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>POST /attempts</kbd>     | create new attempt [request details](#post-attempts-detail)
| <kbd>GET /attempts</kbd>     | retrieve all attempts [response details](#get-attempts-detail)
| <kbd>GET /attempts/:id</kbd>     | retrieve one attempt [response details](#get-attempt-detail)

<h3 id="post-attempts-detail">POST /attempts</h3>

**REQUEST**
```json
{
  "musicName": "abc",
  // "audioUrl": developing,
}
```

<h3 id="get-attempts-detail">GET /attempts</h3>

**RESPONSE**
```json
[
  {
    "musicName": "abc",
    // "audioUrl": developing,
  }
]
```

<h3 id="get-attempt-detail">GET /attempt/:id</h3>

**RESPONSE**
```json
{
  "musicName": "abc",
  // "audioUrl": developing,
}
```
---

<h3 id="autor">😎 Author</h3>     

 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/98126579?v=4" width="100px;" alt=""/>
<a href="https://github.com/henriquemoreiraa">
 <sub><b>Henrique Moreira</b></sub>
</a>
 <br />


Made with ❤️ by Henrique Moreira 👋🏽 Get in touch!


[![Twitter Badge](https://img.shields.io/badge/-@riqimoreiraa-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/riqimoreiraa)](https://twitter.com/riqimoreiraa) [![Linkedin Badge](https://img.shields.io/badge/-Henrique-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/henriquemoreirain/)](https://www.linkedin.com/in/henriquemoreirain/) 
[![Gmail Badge](https://img.shields.io/badge/-riqimoreiraa@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:riqimoreiraa@gmail.com)](mailto:riqimoreiraa@gmail.com)
