function wlCommonInit(){
//	/*
//	 * Use of WL.Client.connect() API before any connectivity to a MobileFirst Server is required. 
//	 * This API should be called only once, before any other WL.Client methods that communicate with the MobileFirst Server.
//	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
//	 *    
//	 *    WL.Client.connect({
//	 *    		onSuccess: onConnectSuccess,
//	 *    		onFailure: onConnectFailure
//	 *    });
//	 *     
//	 */
//	
//	// Common initialization code goes here
//	
}
/*
(function(){
	var app = angular.module('TrainingApp', []);

	app.controller("MainNavigationController", function($scope){
		
		var l = WL.Logger.create({pkg:"MainNavigationController"});
		var _this = this;
		var currentPageId = 0;
		var authCanceled = false;
		var authFailed ="Wrong user/password, please retry!";
		
		this.secretData = "";
		
		this.changePage = function (pageId){
			currentPageId = pageId;
		};		
		this.shouldDisplay = function(pageId){
			return pageId === currentPageId;
		};
		this.isAuthCanceled = function(flagAC){
			authCanceled = flagAC;
		};
		this.setAuthFailed = function(){
			return authFailed;
		};
		this.onJavaScriptAdapterClicked = function(){
			var resourceRequest = new WLResourceRequest("/adapters/DummyAdapter/getSecretData", WLResourceRequest.GET);
			resourceRequest.send().then(
					getSecretData_CallbackOK,
					getSecretData_CallbackFail
			);
		};	
		this.onJavaAdapterClicked = function(){
			var resourceRequest = new WLResourceRequest("/adapters/DummyJavaAdapter/getSecretData", WLResourceRequest.GET);
			resourceRequest.send().then(
					getSecretData_CallbackOK,
					getSecretData_CallbackFail
			);
		};
		
		function getSecretData_CallbackOK(response){
			_this.secretData = JSON.stringify(response.responseJSON)
			_this.changePage(2);
			$scope.$apply();
		}

		function getSecretData_CallbackFail(response){
			_this.secretData = JSON.stringify(response.responseJSON)
			l.error("Adapter invocation failed: "  + _this.secretData);
			if (authCanceled) {
//				alert("authCanceled = " + authCanceled);
				_this.changePage(0);
			} else {
				_this.changePage(2);
			}
//			$("#ResponseDiv").html(JSON.stringify(response.responseJSON));
//			_this.changePage(2);
//			$scope.$apply();
		}	
		
		this.onLogoutClicked = function(){
			l.info("Logging out from the realm...");
			WL.Client.logout('WASLTPARealm', {onSuccess: logoutAndDestroyOAuthToken});
		};		
		
		function logoutAndDestroyOAuthToken(){
			l.info("Scratching the OAuth token...");
			WLAuthorizationManager.obtainAuthorizationHeader().then(
					function(header){resetPage(header)}, 
					function(error){alertOAuth(error)});
		}

		function resetPage(header){
			l.info("Back to the Home page");
			_this.changePage(0);
			$scope.username = "";
			$scope.password = "";
			$scope.$apply();
		}

		function alertOAuth(error){
			l.error("Problems scratching the OAuth token: " + error);
		}
		
		
//		this.onFeedItemClicked = function(feedId){
//			this.currentFeed = this.feeds[feedId];
//			currentPageId=2;
//		};
		
//		wlInitOptions.onSuccess = function(){
//			l.debug("wlInitOptions.onSuccess");
//			var invocationOptions = {
//					adapter: "NewsAdapter", 
//					procedure: "getStories",
//					parameters: []
//			};
//			
//			WL.Client.invokeProcedure(invocationOptions, {
//				onSuccess: onGetStoriesSuccess,
//				onFailure: onGetStoriesFailure
//			});
//			$scope.$apply();
//		};
		
		$scope.username="";
		$scope.password="";

		var challengeHandler = new WL.Client.createChallengeHandler("WASLTPARealm");
		
		challengeHandler.isCustomResponse = function(response){
		    if (!response || response.responseText === null) {
		        return false;
		    }
		    var indicatorIdx = response.responseText.search('j_security_check');
		    if (indicatorIdx >= 0){
		    	l.info("Security challenge received from a protected adapter");
				return true;
			}  
			return false;		      
		};
		
		challengeHandler.handleChallenge = function(response) {
			l.info("App reaction to security challenge - Login page is displayed");
			_this.changePage(1);
			$scope.username = "";
			$scope.password = "";
			$scope.$apply();
		};
				
		challengeHandler.submitLoginFormCallback = function(response) {
			
			var indicatorIdx = response.responseText.search('Login invalid');
		    if (indicatorIdx >= 0 || response.responseText == ''){
		    	l.info("Authentication failed - back to Login page");
				$scope.username = "";
				$scope.password = "";
//		    	challengeHandler.submitFailure();
//			}  
//			
//			
//		    var isLoginFormResponse = challengeHandler.isCustomResponse(response);
//		    alert("isLoginFormResponse = " + isLoginFormResponse + "\nresponse = " + response.responseText);
//		    if (isLoginFormResponse){
//		    	l.info("Authentication failed - back to Login page");
//		    	challengeHandler.handleChallenge(response);
		    } else {
		    	_this.secretData = "";
		    	_this.changePage(2);
		    	l.info("Authentication Succeded!");
				challengeHandler.submitSuccess();
		    }
		    $scope.$apply();
		};
					
		this.submitButtonClicked = function(){	
		    var reqURL = '/j_security_check';
		    var options = {};
		    options.parameters = {
		        j_username : $scope.username,
		        j_password : $scope.password
		    };
		    options.headers = {};
		    challengeHandler.submitLoginForm(reqURL, options, challengeHandler.submitLoginFormCallback);
		}
		
		this.cancelButtonClicked = function(){
//			challengeHandler.submitFailure();
			l.info("Authentication Canceled!");
			_this.isAuthCanceled(true);
//			_this.secretData = "";
//	    	_this.changePage(0);
//	    	$scope.$apply();
	    	challengeHandler.submitFailure();
		}		
				  
		WL.Client.init(wlInitOptions);
	});
	
	app.directive('homePage', function(){
		return {
			restrict: 'E', 
			templateUrl: 'home-page.html'
		};
	});
	
	app.directive('loginPage', function(){
		return {
			restrict: 'E', 
			templateUrl: 'login-page.html'
		};
	});

	app.directive('contentPage', function(){
		return {
			restrict: 'E', 
			templateUrl: 'content-page.html'
		};
	});
}());
*/