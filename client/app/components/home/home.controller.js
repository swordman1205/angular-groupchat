class HomeController {
  constructor() {
    this.name = 'home';
    this.users = [];
    this.messages = [];
    this.isChatOpened = false;
  }

  addUser(user) {
    var index = this.users.findIndex((u) => {
      return u.id == user.id;
    });
    if (index > -1) {
      alert('User already exists!');
    } else {
      this.users.push(user);
    }
  }

  removeUser(user) {
    var index = this.users.findIndex((u) => {
      return u.id == user.id;
    });
    if (index == -1) {
      alert('User does not exist!');
    } else {
      this.users.splice(index, 1);
    }
  }

  sendMessage(messageInfo) {
    var index = this.users.findIndex((u) => {
      return u.id == messageInfo.id;
    });
    if (messageInfo.id && index == -1) {
      alert('Target user does not exist!');
    } else {
      this.messages.push(messageInfo);
    }
  }

  openChatWindow() {
    this.isChatOpened = true;
  }

  closeChatWindow() {
    this.isChatOpened = false;
  }
}

export default HomeController;
