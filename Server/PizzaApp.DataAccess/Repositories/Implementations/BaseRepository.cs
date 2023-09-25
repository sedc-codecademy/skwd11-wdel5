using Microsoft.EntityFrameworkCore;
using PizzaApp.DataAccess.DbContext;
using PizzaApp.DataAccess.Repositories.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaApp.DataAccess.Repositories.Implementations
{
    public class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        private readonly PizzaAppDbContext _pizzaAppDbContext;

        public BaseRepository(PizzaAppDbContext pizzaAppDbContext)
        {
            _pizzaAppDbContext = pizzaAppDbContext;
        }

        public async Task Add(T entity)
        {
            try
            {
                _pizzaAppDbContext.Set<T>().Add(entity);
                await _pizzaAppDbContext.SaveChangesAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<T>> GetAll()
        {
            try
            {
                List<T> getall = await _pizzaAppDbContext.Set<T>().ToListAsync();
                return getall;
            }
            catch(Exception)
            {
                throw;
            }
        }

        public async Task<T> GetById(string id)
        {
            try
            {
                return _pizzaAppDbContext.Set<T>().Find(id);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<T> GetByIdInt(int id)
        {
            try
            {
                return _pizzaAppDbContext.Set<T>().Find(id);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task Remove(T entity)
        {
            try
            {
                _pizzaAppDbContext.Remove(entity);
                await _pizzaAppDbContext.SaveChangesAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task SaveChanges()
        {
            try
            {
                await _pizzaAppDbContext.SaveChangesAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task Update(T entity)
        {
            try
            {
                _pizzaAppDbContext.Set<T>().Update(entity);
                await _pizzaAppDbContext.SaveChangesAsync();
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
