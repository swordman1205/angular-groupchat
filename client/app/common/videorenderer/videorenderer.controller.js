class VideoRendererController {
  constructor($timeout) {
    this.$timeout = $timeout;

    this.loadVidyoClientLibrary();
    this.listenEvent();
  }

  listenEvent() {
    document.addEventListener('vidyoclient:ready', (e) => {
      this.renderVideo(e.detail);
    });
  }

  loadVidyoClientLibrary() {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://static.vidyo.io/4.1.11.4/javascript/VidyoClient/VidyoClient.js?onload=onVidyoClientLoaded';    
		document.getElementsByTagName('head')[0].appendChild(script);
	}

  renderVideo(VC) {
    this.$timeout(() => {
      VC.CreateVidyoConnector({
        viewId: "renderer",                            // Div ID where the composited video will be rendered, see VidyoConnector.html
        viewStyle: "VIDYO_CONNECTORVIEWSTYLE_Default", // Visual style of the composited renderer
        remoteParticipants: 16,                        // Maximum number of participants
        logFileFilter: "warning all@VidyoConnector info@VidyoClient",
        logFileName:"",
        userData:""
      }).then((vidyoConnector) => {
        vidyoConnector.Connect({
          host: "prod.vidyo.io",
          token: "cHJvdmlzaW9uAHNhY2hpbkBlOGQ5YTMudmlkeW8uaW8ANjM2NjE0NzY0OTQAADUwZjA5ZGUzZDRiNGUwMGU1NDI1YTY2YzAzMWFiYTNjM2UwOTUzMTczOTAxOTA2OGYzMWI4Mjg0ZDg5YjRmNmE5N2Y4ODliZTA5MTU1YjA4Y2UxZTM1M2QxZjVjMmViMA==",
          displayName: "test1",
          resourceId: "TestRoom",

          onSuccess: () => {
            /* Connected */
            console.log('connected!');
          },
          onFailure: (reason) => {
            /* Failed */
            console.log('failed! The reason: ', reason);
          },
          onDisconnected: (reason) => {
            /* Disconnected */
            console.log('disconnected! Reason: ', reason);
          }
        }).then((status) => {
            if (status) {
                alert("ConnectCall Success");
            } else {
                console.error("ConnectCall Failed");
            }
        }).catch(() => {
            console.error("ConnectCall Failed");
        });
      }).catch(() => {
        console.error("CreateVidyoConnector Failed");
      });
    });
  }
}

VideoRendererController.$inject = ['$timeout'];

export default VideoRendererController;
