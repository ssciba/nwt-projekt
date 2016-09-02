using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular2RC5.DTO
{
    public class AddUserDTO
    {
        public int Id { get; set; }
        public string name { get; set; }
        public string lastname { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        public string repeatPassword { get; set; }
        public string email { get; set; }
        
    }
}