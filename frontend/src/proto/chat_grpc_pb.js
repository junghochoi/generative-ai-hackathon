// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var chat_pb = require('./chat_pb.js');

function serialize_ChatRequest(arg) {
  if (!(arg instanceof chat_pb.ChatRequest)) {
    throw new Error('Expected argument of type ChatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ChatRequest(buffer_arg) {
  return chat_pb.ChatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ChatResponse(arg) {
  if (!(arg instanceof chat_pb.ChatResponse)) {
    throw new Error('Expected argument of type ChatResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ChatResponse(buffer_arg) {
  return chat_pb.ChatResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChatService = exports.ChatService = {
  chat: {
    path: '/Chat/Chat',
    requestStream: false,
    responseStream: false,
    requestType: chat_pb.ChatRequest,
    responseType: chat_pb.ChatResponse,
    requestSerialize: serialize_ChatRequest,
    requestDeserialize: deserialize_ChatRequest,
    responseSerialize: serialize_ChatResponse,
    responseDeserialize: deserialize_ChatResponse,
  },
};

exports.ChatClient = grpc.makeGenericClientConstructor(ChatService);
