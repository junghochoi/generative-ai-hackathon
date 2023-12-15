// package: 
// file: chat.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as chat_pb from "./chat_pb";

interface IChatService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    chat: IChatService_IChat;
}

interface IChatService_IChat extends grpc.MethodDefinition<chat_pb.ChatRequest, chat_pb.ChatResponse> {
    path: "/Chat/Chat";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_pb.ChatRequest>;
    requestDeserialize: grpc.deserialize<chat_pb.ChatRequest>;
    responseSerialize: grpc.serialize<chat_pb.ChatResponse>;
    responseDeserialize: grpc.deserialize<chat_pb.ChatResponse>;
}

export const ChatService: IChatService;

export interface IChatServer {
    chat: grpc.handleUnaryCall<chat_pb.ChatRequest, chat_pb.ChatResponse>;
}

export interface IChatClient {
    chat(request: chat_pb.ChatRequest, callback: (error: grpc.ServiceError | null, response: chat_pb.ChatResponse) => void): grpc.ClientUnaryCall;
    chat(request: chat_pb.ChatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.ChatResponse) => void): grpc.ClientUnaryCall;
    chat(request: chat_pb.ChatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.ChatResponse) => void): grpc.ClientUnaryCall;
}

export class ChatClient extends grpc.Client implements IChatClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public chat(request: chat_pb.ChatRequest, callback: (error: grpc.ServiceError | null, response: chat_pb.ChatResponse) => void): grpc.ClientUnaryCall;
    public chat(request: chat_pb.ChatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.ChatResponse) => void): grpc.ClientUnaryCall;
    public chat(request: chat_pb.ChatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.ChatResponse) => void): grpc.ClientUnaryCall;
}
