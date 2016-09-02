using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Angular2RC5
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name{ get; set; }

        [Required]
        public string Lastname { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public string RepeatedPassword { get; set; }

        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
    }
}