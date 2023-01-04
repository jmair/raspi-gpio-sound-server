# Raspberry PI GPIO Control and Audio Server

A simple Express server that is desinged to run on a Raspberry Pi.
Connect your Raspberry Pi to your network, connect a relay and/or motors etc. to GPIOs and a speaker to your audio output.
Compressed air tanks attached to sprinkler valves and electric motors connected to the relay allow for automation fun.

\*Web interface will be served at the Raspberry Pi's IP address.

- ## Install Node on PI

- ## Allow access to /dev/mem for sound playback on PI

  `sudo chmod g+rw /dev/mem`

- ## Place .wav files in project /audio directory

- ## Install dependencies from project root

  `npm install`

- ## Start server from project root with

  `node server.js`

- ## Install PM2 as a Node runner on PI

  `sudo npm install -g pm2`

- ## Run server with runner

  `pm2 start server.js`

- ## Set PM2 to start on boot on PI

- `pm2 startup`

- Copy and run script that is returned
