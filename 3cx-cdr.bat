@echo off

:: Start backend server
cd /d E:\cdr-3cx\backend
start "" node server.js

:: Start React dev server
cd /d E:\cdr-3cx
start "" npm start

exit
