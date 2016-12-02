package com.quake;

public class Data {
	
	private String secretData = new String();
	
	public Data(String myData){
		setSecretData(myData);
	}
	
	public String getSecretData() {
		return secretData;
	}
	public void setSecretData(String secretData) {
		this.secretData = secretData;
	}

}
