# PlanB Events

## Motive
1. Utilize and expand knowledge of Django Rest Framework and React
2. ????
3. ????

## What is PlanB Events?
PlanB Events is an app that connects event planners to vendors who offer products/services.With PlanB, the planner is able to keep track of multiple events, while keeping track of their budget and having a point of contact for the vendor.

### Installation Instructions

Clone planb-events-server repository (https://github.com/bpotts11/planb-events-server)
Clone planb-events-client repository (https://github.com/bpotts11/planb-events-client)

## Client
Run a json-server from the api 
```
npm install
npm start 
```
## Server
-[ ] Run virtual environment
-[ ] Run migrations
```
python3 manage.py loaddata ?????? maybe do chmod to seed database and run migrations
```

```
python3 manage.py runserver
```

login using fixture data

### Features
- login/registration 
- Event and Product features have full CRUD functionality
- Two user types: authenticated Vendot and authenticated Customer(planner)

### ERD
![PlanB ERD](./images/PlanBERD.png)

### Wireframe
(https://www.figma.com/file/f62kRtw9BQptjyxxGytDD3/PlanB-Events?node-id=16%3A54)

### Support
Fill out a support ticket if you discover any major bugs to address. 

### Roadmap
Planned features include: 
- A planner is able to seach and filter vendor's by category
- A vendor can create tags to better describe their products. 
- A SuperUser/admin can create categories
- ????
- ???
- ???
- ??

### Contributing
Feel free to fork the repository and make pull requests. That said, I have no plans to maintain this project.

### Authors & Acknowledgments
[Brittney Potts](https://github.com/bpotts11)
Special thanks to  
[Scott Silver](https://github.com/Scott47)
[Hannah Hall](https://github.com/hannahhall)
for all of the help and support on this project

## A Note About Authentication
The login and registration code I use is fake, completely insecure, and would never be implemented in a professional application. It is a simulation authentication using very simplistic tools, because authentication is not a learning objective of students at NSS.
