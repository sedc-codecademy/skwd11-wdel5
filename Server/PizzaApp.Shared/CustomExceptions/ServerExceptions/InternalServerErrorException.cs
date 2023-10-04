using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaApp.Shared.CustomExceptions.ServerExceptions
{
    public class InternalServerErrorException : Exception
    {
        public InternalServerErrorException() :base("An error has occured, contact the admin!") { }
    }
}
