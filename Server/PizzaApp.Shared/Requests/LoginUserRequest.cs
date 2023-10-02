using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaApp.Shared.Requests
{
    public class LoginUserRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
