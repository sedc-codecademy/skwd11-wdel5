using PizzaApp.Dtos.PizzaDtos;
using PizzaApp.Shared.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaApp.Services.Abstractions
{
    public interface IPizzaService
    {
        Task<Response<List<PizzaDto>>> GetAllPizzas();
        Task<Response<PizzaDto>> GetPizzaById(int id);
        Task<Response<PizzaDto>> CreatePizza(string userId, AddPizzaDto pizzaDto);
        Task<Response<PizzaDto>> UpdatePizza(string userId, int pizzaId, UpdatePizzaDto updatePizzaDto);
        Task<Response> DeletePizza(string UserId, int pizzaId);
    }
}
