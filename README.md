# Install all dependencies of the project
npm install

# Rename file ".env.example" to ".env"
Windows - ren .env.example .env
Linux   - mv .env.example .env

# Change the values of ".env" to values of your Postgres Database

# (OPTIONAL) Run Migrations if you don't have a Database with the tables necessaires
npm run migrate

# (OPTIONAL) Run Seeds to fill the table with the example content
npm run seed

# Run tests to chack the conection and query in the database
npm run test

# Finaly start the server
npm start

# Here's three example requests
# By character presents in "name"
http://localhost:3000/?search=ich
[{"id":1,"document":"442.213.782.30","documentType":"CPF","name":"Richard","street":"Example Street","state":"SP","country":"BR","createdAt":"2021-06-27T22:04:29.708Z","updatedAt":"2021-06-27T22:04:29.708Z"}]

# Another by a character presents in "name"
http://localhost:3000/?search=c
[{"id":1,"document":"442.213.782.30","documentType":"CPF","name":"Richard","street":"Example Street","state":"SP","country":"BR","createdAt":"2021-06-27T22:04:29.708Z","updatedAt":"2021-06-27T22:04:29.708Z"},{"id":3,"document":"97.576.425/0003-24","documentType":"CNPJ","name":"Jackson","street":"Example Street","state":"CT","country":"US","createdAt":"2021-06-27T22:04:29.726Z","updatedAt":"2021-06-27T22:04:29.726Z"},{"id":6,"document":"65.534.569/0120-17","documentType":"CNPJ","name":"Carlos","street":"Example Street","state":"SP","country":"BR","createdAt":"2021-06-27T22:04:29.738Z","updatedAt":"2021-06-27T22:04:29.738Z"}]

# By interger presents in "document"
http://localhost:3000/?search=97
[{"id":3,"document":"97.576.425/0003-24","documentType":"CNPJ","name":"Jackson","street":"Example Street","state":"CT","country":"US","createdAt":"2021-06-27T17:02:02.232Z","updatedAt":"2021-06-27T17:02:02.232Z"}]

# "search" parameter is required ever