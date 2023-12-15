import chat_pb2
import chat_pb2_grpc

class OpenAI(chat_pb2_grpc.ChatServicer):
    def Chat(self, request, context):
        return chat_pb2.HelloReply(message=f'Hello, {request.name}!')