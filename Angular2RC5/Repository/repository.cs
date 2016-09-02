using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Angular2RC5.DAL;
using Angular2RC5.Models;
using Angular2RC5.DTO;

namespace Angular2RC5.Repositories
{
    public class UserRepository
    {
        public IList<User> GetAllUsers()
        {
            using (var context = new appContext())
            {
                try
                {
                    var users = context.Users.ToList();
                    if (users.Count == 0)
                    {
                        throw new NullReferenceException("Error when getting all users!");
                    }
                    return users;
                }
                catch (Exception e)
                {
                    throw new Exception("All users' list is null. Exception: " + e.Message);
                }
            }
        }
       
   
                
               
        
             

        public User AddUser(AddUserDTO newUser)
        {
            using (var context = new appContext())
            {
                try
                {
                    User user = new User();
                    user.Id = GetNumberOfUsers() + 1;
                    user.Name = newUser.name;
                    user.Lastname = newUser.lastname;
                    user.Username = newUser.username;
                    user.Password = newUser.password;
                    user.RepeatedPassword = newUser.repeatPassword;
                    user.Email = newUser.email;


                    context.Users.Add(user);
                    context.SaveChanges();
                    return user;
                }
                catch (Exception e)
                {
                    throw new Exception("Could not add new user. Exception: " + e.Message);
                }
            }
        }

        public int GetNumberOfUsers()
        {
            using (var context = new appContext())
            {
                try
                {
                    var users = context.Users.ToList();
                    if (users.Count == 0)
                    {
                        throw new NullReferenceException("Error when getting all users!");
                    }
                    return users.Count;
                }
                catch (Exception e)
                {
                    throw new Exception("All users' list is null. Exception: " + e.Message);
                }
            }
        }


       
    }
}