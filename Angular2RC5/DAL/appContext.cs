using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;
using Angular2RC5.Models;

namespace   Angular2RC5.DAL
{
    public class appContext : DbContext
    {
        public appContext() : base("appContext")
        {
        }

      
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

        
        }
    }
}