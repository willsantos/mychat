// const express = require('express');
// const cors = require('cors');

const koa = require('koa');
const socket = require('socket.io');
const http = require('http');

const app = new koa();
const server = http.createServer(app.callback());
const io = socket(server);

const SERVER_HOST = 'localhost';
const SERVER_PORT = 8080;

io.on('connection', (socket) => {
  console.log('[IO] Connection => Server has a new connection');
  socket.on('chat.message', (data) => {
    console.log('[SOCKET]', data);
    io.emit('chat.message', data);
  });
  socket.on('disconnect', () => {
    console.log('[SOCKET] Disconnected');
  });
});

server.listen(SERVER_PORT, SERVER_HOST, () => console.log('Servidor executando na porta 8080'));
