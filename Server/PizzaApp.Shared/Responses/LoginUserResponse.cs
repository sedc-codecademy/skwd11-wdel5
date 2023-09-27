using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaApp.Shared.Responses
{
    public class LoginUserResponse
    {
        public string Token { get; set; } = string.Empty;
        public DateTime ValidTo { get; set; }
    }
}
