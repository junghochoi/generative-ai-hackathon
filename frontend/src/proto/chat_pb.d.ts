// package: 
// file: chat.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ChatRequest extends jspb.Message { 
    getPrompt(): string;
    setPrompt(value: string): ChatRequest;
    getModel(): string;
    setModel(value: string): ChatRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChatRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ChatRequest): ChatRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChatRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChatRequest;
    static deserializeBinaryFromReader(message: ChatRequest, reader: jspb.BinaryReader): ChatRequest;
}

export namespace ChatRequest {
    export type AsObject = {
        prompt: string,
        model: string,
    }
}

export class ChatResponse extends jspb.Message { 
    getText(): string;
    setText(value: string): ChatResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChatResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ChatResponse): ChatResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChatResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChatResponse;
    static deserializeBinaryFromReader(message: ChatResponse, reader: jspb.BinaryReader): ChatResponse;
}

export namespace ChatResponse {
    export type AsObject = {
        text: string,
    }
}
