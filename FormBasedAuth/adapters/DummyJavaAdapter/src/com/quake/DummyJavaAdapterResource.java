/*
 *    Licensed Materials - Property of IBM
 *    5725-I43 (C) Copyright IBM Corp. 2015. All Rights Reserved.
 *    US Government Users Restricted Rights - Use, duplication or
 *    disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

package com.quake;

import java.io.IOException;
import java.util.List;
import java.util.logging.Logger;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.ibm.json.java.JSONObject;
import com.worklight.adapters.rest.api.MFPServerOperationException;
import com.worklight.adapters.rest.api.WLServerAPI;
import com.worklight.adapters.rest.api.WLServerAPIProvider;
import com.worklight.core.auth.OAuthSecurity;

@Path("/")
public class DummyJavaAdapterResource {
	/*
	 * For more info on JAX-RS see https://jsr311.java.net/nonav/releases/1.1/index.html
	 */
		
	//Define logger (Standard java.util.Logger)
	static Logger logger = Logger.getLogger(DummyJavaAdapterResource.class.getName());

    //Define the server api to be able to perform server operations
    WLServerAPI api = WLServerAPIProvider.getWLServerAPI();

	/* Path for method: "<server address>/FormBasedAuth/adapters/DummyJavaAdapter/getSecretData" */
    
	@GET
	@OAuthSecurity(scope="WASLTPARealm")
	@Path("/getSecretData")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getSecretData(){
//		SecurityAPI security = api.getSecurityAPI();
//		OAuthUserIdentity identity = security.getSecurityContext().getUserIdentity();	
//		JSONObject jsonAttributes = identity.getAttributes();
		//log userIdentity JSON before adding a custom attribute (t0)
//		logger.warning("[Java Adapter] - userIdentity@t0= " + jsonAttributes.toString());
//		//set custom attribute userProfile
////		jsonAttributes.put("userProfile", "profile#1");
//		//log userIdentity JSON after adding a custom attribute (t1)
//		logger.warning("[Java Adapter] - userIdentity@t1= " + jsonAttributes.toString());
//		//log message to server log
        logger.warning("[Java Adapter] - Executing getSecretData service...");
        Data myData = new Data("123456");
		return Response.ok(myData, MediaType.APPLICATION_JSON).build();
	}
		
	/* Path for method: "<server address>/FormBasedAuth/adapters/DummyJavaAdapter/users/{username}" */
	@GET
	@Path("/{username}")
	public String helloUser(@PathParam("username") String name){
		return "Hello " + name;
	}
	
	/* Path for method: "<server address>/FormBasedAuth/adapters/DummyJavaAdapter/users/helloUserQuery?name=value" */
	@GET
	@Path("/helloUserQuery")
	public String helloUserQuery(@QueryParam("username") String name){
		return "Hello " + name;
	}
	
	/* Path for method: "<server address>/FormBasedAuth/adapters/DummyJavaAdapter/users/prop" */
	@GET
	@Path("/prop")
	public Response getPropertyValue() throws MFPServerOperationException{
		
		//Get the value of the JNDI configuration property wl.analytics.url
		String analyticsURL = api.getConfigurationAPI().getMFPConfigurationProperty("wl.analytics.url");
		
		return Response.ok("Analytics URL is: "+analyticsURL).build();
	}
	
	/* Path for method: "<server address>/FormBasedAuth/adapters/DummyJavaAdapter/users/{first}/{middle}/{last}?age=value" */
	@POST
	@Path("/{first}/{middle}/{last}")
	public String enterInfo(@PathParam("first") String first, @PathParam("middle") String middle, @PathParam("last") String last,
			@QueryParam("age") int age, @FormParam("height") String height, @HeaderParam("Date") String date){
		return first +" "+ middle + " " + last + "\n" +
				"Age: " + age + "\n" +
				"Height: " + height + "\n" +
				"Date: " + date;
	}
	
	/* Path for method: "<server address>/FormBasedAuth/adapters/DummyJavaAdapter/users/newUsers" */
	@PUT
	@Path("/newUsers")
	public String newUsers(@FormParam("username") List<String> users){
		if(users!=null && users.size() != 0){
			String usersTemp = "";
			int index = 0;
			for (String user : users) {
				usersTemp += " " +user;
				if(index < users.size() - 1 && users.size() != 2) usersTemp += ",";
				if(++index == users.size() -1 && users.size() != 1) usersTemp += " and";
			}
			return "Hello" + usersTemp;
		}
		
		return "Hello";
	}
	
	/* Path for method: "<server address>/FormBasedAuth/adapters/DummyJavaAdapter/users/helloUserBody" */
	@POST
	@Consumes("application/json")
	@Path("/helloUserBody")
	public String testUser(@HeaderParam("Content-Type") String type,  JSONObject json) throws IOException{
		return "Hello " + json.get("first") + " " + json.get("middle") + " " + json.get("last");
	}
		
}
