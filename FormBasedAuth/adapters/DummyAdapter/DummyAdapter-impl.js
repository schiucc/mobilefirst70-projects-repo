/*
 *
    COPYRIGHT LICENSE: This information contains sample code provided in source code form. You may copy, modify, and distribute
    these sample programs in any form without payment to IBM® for the purposes of developing, using, marketing or distributing
    application programs conforming to the application programming interface for the operating platform for which the sample code is written.
    Notwithstanding anything to the contrary, IBM PROVIDES THE SAMPLE SOURCE CODE ON AN "AS IS" BASIS AND IBM DISCLAIMS ALL WARRANTIES,
    EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY,
    FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND ANY WARRANTY OR CONDITION OF NON-INFRINGEMENT. IBM SHALL NOT BE LIABLE FOR ANY DIRECT,
    INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR OPERATION OF THE SAMPLE SOURCE CODE.
    IBM HAS NO OBLIGATION TO PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS OR MODIFICATIONS TO THE SAMPLE SOURCE CODE.

 */

function getSecretData(){
	var userIdentity = WL.Server.getActiveUser();
	if(userIdentity != null || userIdentity != undefined){
		//log userIdentity JSON before adding a custom attribute (t0)
		WL.Logger.warn("[JavaScript Adapter] - userIdentity@t0= " + JSON.stringify(userIdentity));
	}else{
		WL.Logger.warn("userIdentity is null!!");
	}
	//set custom attribute userProfile
	userIdentity.attributes.userProfile = "profile#1";
//	WL.Server.setActiveUser("WASLTPARealm", null);
//	WL.Server.setActiveUser("WASLTPARealm", userIdentity);
	//log userIdentity JSON after adding a custom attribute (t1)
	WL.Logger.warn("[JavaScript Adapter] - userIdentity@t1= " + JSON.stringify(userIdentity));
	//log message to server log
	WL.Logger.warn("[JavaScript Adapter] - Executing getSecretData procedure...");
	return {
		secretData: '123456'
	};
}