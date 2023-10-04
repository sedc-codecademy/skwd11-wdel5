using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaApp.Shared.CustomExceptions.OrderExceptions
{
    public class OrderDataException : Exception
    {
        public OrderDataException(string message) : base(message) { }
    }
}
