using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaApp.Shared.CustomExceptions.PizzaExceptions
{
    public class PizzaDataException : Exception
    {
        public PizzaDataException(string message) : base(message) { }
    }
}
