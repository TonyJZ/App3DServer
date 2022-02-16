App3D Server
===============

This repo contains 3D applications written on the "App3D" library. The source code for the App3D library is not included in this repo, but instead, a rolled-up and uglified build of the App3D library is included under the <repo>/libs/app3d directory.

Instructions on how to run the various applications in this repo are included below.

## Run Applications:

The various applications in this repo are organized under the <repo>/applications directory. To run any of these applications, follow these steps:

### Step 1: Install Node.js, npm, and nodemon

If you don't already have Node.js, npm, or nodemon installed on the destination machine, the follow these steps:

```
sudo apt-get install -y npm
sudo curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | sh
. ~/.profile
nvm ls-remote
nvm install 6.11.0
sudo ln -s /home/<home_directory_name>/.nvm/versions/node/v6.11.0/bin/node /usr/bin/nodejs
npm install -y npm@latest -g
sudo npm i -g nodemon
sudo apt-get install -y libtool pkg-config build-essential autoconf automake libzmq3-dev
```

### Step 2: Install Node.js dependencies:

```
cd <repo>/servers/expressServer
npm i
```

### Step 3: Run the Express.js server:

There are three ways to run the Express.js server:

1. As a tester
2. As a developer
3. For a production environment

To run the program as a tester:

```
cd <repo>/servers/expressServer
node server.js
```

To run the program as a developer:

```
cd <repo>/servers/expressServer
nodemon
```

The above will automatically restart server.js if any changes to the relevant files are detected; useful for during the development process.

To run the program for production:

If you're running the server for a formal test or prod environment used by multiple people, use the program `pm2` to run the program and ensure high-availability:

`pm2 start server.js --name app3dServer8000`

And then later if you need to stop or restart the application:

`pm2 stop app3dServer8000`
`pm2 restart app3dServer8000`

### Step 4: Finally, open a new internet browser tab and navigate to the URL in question

To get the URL for the application you want, open up the following file: <repo>/servers/expressServer/routes/router.js. Inside, you will find all of the endpoints for the various applications in this repo. To translate these route endpoints to the URL you want, simply copy-paste these endpoints on the end of your host machine + port number. E.g.:

* Host machine: localhost
* Port number (default): 8000
* Application endpoint: /demo2/anyue
* **Final URL: http://localhost:8000/demo2/anyue**

## Updating the 'app3d.js' library to the latest version:

From time to time, the 'app3d.js' library file must get updated to the latest version, bringing new features with it. To update the file to the latest version, follow these steps:

### Step 1: Go to the App3D repo and build and uglify the latest code into a new file (instructions for doing this are in the README.md file in that repo)

### Step 2: Copy-paste the final outputted app3d.js built file into <repo>/libs/app3d (replace the file that's in there)

### Step 3: Commit your changes to the repo and push them to remote

------------

## Internet Explorer Only:

If you wish to support IE (or a browser which uses the IE kernel), follow these additional steps below. These steps will be improved at some point in the future to remove the manual labour. But for now they are kept as is and documented here.

### Step 1: Install Babel 6:

If you don't already have Babel 6 cli installed as a dev dependency in your repo, run the following commands:

```
npm i -D babel-core babel-cli
npm i -D babel-preset-env babel-plugin-external-helpers
```

### Step 2: Manually transpile relevant folders

Next, manually transpile all relevant folders:

```
./node_modules/babel-cli/bin/babel.js --out-dir applications -- applications
./node_modules/babel-cli/bin/babel.js --out-dir features -- features
```

------------

## Development Guidelines:

* `Application.js` should handle all events, including key events, and all `onEvent` events. However `Application.js` can propagate these events to features.
* No feature file should use `app.queryForObject()`.Objects should be queried in `Application.js` and passed to the feature. 
* Each feature file is independent. Features should not directly refer to any field or method of the `Application.js` or other features. 
