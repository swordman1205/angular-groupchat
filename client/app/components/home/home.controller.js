class HomeController {
  constructor($timeout) {
    this.$timeout = $timeout;
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
      this.$timeout(() => {
        this.users.push(user);
      });
    }
  }

  removeUser(user) {
    var index = this.users.findIndex((u) => {
      return u.id == user.id;
    });
    if (index == -1) {
      alert('User does not exist!');
    } else {
      this.$timeout(() => {
        this.users.splice(index, 1);
      });
    }
  }

  sendMessage(messageInfo) {
    var index = this.users.findIndex((u) => {
      return u.id == messageInfo.id;
    });
    if (messageInfo.id && index == -1) {
      alert('Target user does not exist!');
    } else {
      this.$timeout(() => {
        this.messages.push(messageInfo);
      });
    }
  }

  openChatWindow() {
    this.isChatOpened = true;
  }

  closeChatWindow() {
    this.isChatOpened = false;
  }
}

HomeController.$inject = ['$timeout'];

export default HomeController;
