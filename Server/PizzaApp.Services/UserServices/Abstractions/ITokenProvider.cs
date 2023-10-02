using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaApp.Services.UserServices.Abstractions
{
    public interface ITokenProvider<T>
    {
        Task<T?> GetTokenAsync(string key);
        Task SetTokenAsync(string key, T value);
    }
}
