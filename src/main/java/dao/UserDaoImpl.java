package dao;

import model.Login;
import model.User;

public class UserDaoImpl implements UserDao
{
	public void register(Login user) 
	{
		System.out.println("user has been registered");
	  if(user.getUsername().equals("monesh"))
		  System.out.println("username correct");
	  if(user.getPassword().equals("monesh"))
		  System.out.println("password correct");
	}


}
