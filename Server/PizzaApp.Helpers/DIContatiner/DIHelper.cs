using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using PizzaApp.DataAccess.DbContext;
using PizzaApp.DataAccess.Repositories.Abstractions;
using PizzaApp.DataAccess.Repositories.Implementations;
using PizzaApp.Services.UserServices.Abstractions;
using PizzaApp.Services.UserServices.Implemetations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaApp.Helpers.DIContatiner
{
    public static class DIHelper
    {
        public static void InjectDbContext( IServiceCollection services, string connectionString)
        {
            services.AddDbContext<PizzaAppDbContext>(x => x.UseNpgsql(connectionString));
        }

        public static void InjectRepositories(IServiceCollection services) 
        {
            services.AddTransient<IPizzaRepository, PizzaRepository>();
            services.AddTransient<IOrderRepository, OrderRepository>();
        }

        public static void InjectServices(IServiceCollection services)
        {
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<ITokenService, TokenService>();
        }
    }
}
