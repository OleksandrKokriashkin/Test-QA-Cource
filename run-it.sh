#!/usr/bin/env bash
#   Use this script to run tests
npm install
npm run webdriver &
# Wait for port 4444 to be listening connections
sh ./wait-for-it.sh -t 60 127.0.0.1:4444 -- echo "driver is up"
npm run test
