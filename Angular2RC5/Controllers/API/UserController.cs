using Angular2RC5.DTO;
using Angular2RC5.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Angular2RC5.Controllers.API
{
    [RoutePrefix("")]
    public class UserController : ApiController
    {
        private readonly UserRepository _userRepository;

        public UserController()
        {
            _userRepository = new UserRepository();
        }

        [Route("")]
        [HttpGet]
        public IHttpActionResult GetAllUsers()
        {
            try
            {
                var users = _userRepository.GetAllUsers();
                return Ok(users);
            }
            catch (Exception e)
            {
                return BadRequest("Error has occured. Exception: " + e.Message);
            }
        }


        [Route("add")]
        [HttpPost]
        public IHttpActionResult AddUser(AddUserDTO newUser)
        {
            try
            {
                var user = _userRepository.AddUser(newUser);
                return Ok(user);
            }
            catch (Exception e)
            {
                return BadRequest("Error has occured. Exception: " + e.Message);
            }
        }
      

    }
}
