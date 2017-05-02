class SidebarController {
  constructor($rootScope, $timeout) {
    this.$rootScope = $rootScope;
    this.$timeout = $timeout;
    this.isConnected = false;
    this.isWorking = false;
    this.updateConnectedStatus();
  }

  updateConnectedStatus() {
    this.$rootScope.$on('connectedStatus', (event, data) => {
      this.$timeout(() => {
        this.isWorking = false;
        this.isConnected = data.isConnected;
      });
    });
  }

  openChatWindow() {
    this.onOpenChat();
  }

  toggleConnect() {
    if (!this.isConnected) {
      this.isWorking = true;
      this.$rootScope.$broadcast('connection:on');
    } else {
      this.isWorking = true;
      this.$rootScope.$broadcast('connection:off');
    }
  }
}

SidebarController.$inject = ['$rootScope', '$timeout'];

export default SidebarController;
