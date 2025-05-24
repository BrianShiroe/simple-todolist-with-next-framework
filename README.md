## Requirements
1. Git
2. Node.js
3. MySQL / MySQL Workbench

## SETUP
1. clone repo
```bash
git clone https://github.com/BrianShiroe/simple-todolist-with-next-framework.git
```

2. Access project directory
```bash
cd simple-todolist-with-next-framework
```

3. Check for node version. If not exist, install on https://nodejs.org/en.
```bash
node -v
npm -v
```

4. Install project dependencies
```bash
npm install
```

5. Create a .env file in the main directory and put these mysql code
```bash
DB_HOST=localhost # MySQL database host (where your database server is running)
DB_USER=root # MySQL username to connect with
DB_PASS=passcode # Password for your MySQL user
DB_NAME=todolist # Name of the database to connect to
```

6. run development server
```bash
npm run dev
```