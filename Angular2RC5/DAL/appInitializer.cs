using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;
using Angular2RC5.Models;

namespace   Angular2RC5.DAL
{
    public class AppInitializer : DropCreateDatabaseAlways<appContext>
    {
        protected override void Seed(appContext context)
        {
            var user1 = new User() { Id = 0, Username = "User1", Password = "Pass1",RepeatedPassword="Pass1", Name = "Name1", Lastname = "Lastname1", Email = "user1@a.b" };
            var user2 = new User() { Id = 1, Username = "User2", Password = "Pass2", RepeatedPassword = "Pass2", Name = "Name2", Lastname = "Lastname2", Email = "user2@a.b" };
            var user3 = new User() { Id = 2, Username = "User3", Password = "Pass3", RepeatedPassword = "Pass3", Name = "Name3", Lastname = "Lastname3", Email = "user3@a.b" };


            context.Users.AddOrUpdate(user1);
            context.Users.AddOrUpdate(user2);
            context.Users.AddOrUpdate(user3);

            context.SaveChanges();
        }
    }
}