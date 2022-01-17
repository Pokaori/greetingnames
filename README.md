# Names Greetings
This is test task for the EVO program. This is a small [website](https://greetingnames.herokuapp.com/), which greets everyone using their names.
## Technologies
The following technologies were used for this project:
- Python 3.9
- Django
- PostgreSQL
- Gunicorn
- WhiteNoise (for serving static files as html, css and js)
- Github Actions 
- AJAX
- HTML
- CSS
## Project Structure
This project include one main app:
- Greeting

This application includes the following modules:
- Views - this module get requests and form responses using Models and html templates.
- Models - this module consists information about database model.

Database includes Trigger, which check up full name. Also, database includes hash index to speed up search process. 
