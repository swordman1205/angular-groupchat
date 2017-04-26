class MessageviewController {
  constructor() {
    this.name = 'messageview';
    this.messageInfo = {};
  }

  closeChatWindow() {
    this.onCloseChat();
  }

  sendMessage() {
    this.onSendMessage(this.messageInfo);
    this.messageInfo = {};
  }
}

export default MessageviewController;
