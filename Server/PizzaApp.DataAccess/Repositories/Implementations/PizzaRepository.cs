using PizzaApp.DataAccess.DbContext;
using PizzaApp.DataAccess.Repositories.Abstractions;
using PizzaApp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaApp.DataAccess.Repositories.Implementations
{
    public class PizzaRepository : BaseRepository<Pizza>, IPizzaRepository 
    {
        private readonly PizzaAppDbContext _context;

        public PizzaRepository(PizzaAppDbContext context) : base(context)
        {
            _context = context;
        }
    }
}
