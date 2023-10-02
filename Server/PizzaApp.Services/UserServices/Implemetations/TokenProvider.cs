using PizzaApp.Services.UserServices.Abstractions;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaApp.Services.UserServices.Implemetations
{
    public class TokenProvider<T> : ITokenProvider<T>
    {
        private readonly ConcurrentDictionary<string, T?> Tokens = new();
        public Task<T?> GetTokenAsync(string key)
        {
            if (Tokens.TryGetValue(key, out var token))
            
                    return Task.FromResult(token);
                return Task.FromResult(default(T));
            
        }

        public Task SetTokenAsync(string key, T value)
        {
            Tokens.TryAdd(key, value);
            return Task.CompletedTask;
        }
    }
}
