using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaApp.Shared.Responses
{
    //just for showing, no logic inmplemented in app
    public  class Response123<T>
    {
        public string username {  get; set; }
        public string password { get; set; }
        public bool IsOkayOrNot { get; set; } 
    
        public List<T> Data { get; set; }
    }
}
