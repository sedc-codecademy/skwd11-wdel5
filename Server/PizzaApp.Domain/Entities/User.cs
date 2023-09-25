using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaApp.Domain.Entities
{
    public class User : IdentityUser
    {
        public bool FirstLogin { get; set; }
    }
}
