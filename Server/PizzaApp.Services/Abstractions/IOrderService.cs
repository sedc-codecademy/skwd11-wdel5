using PizzaApp.Dtos.OrderDtos;
using PizzaApp.Shared.Responses;

namespace PizzaApp.Services.Abstractions
{
    public interface IOrderService
    {
        Task<Response<List<OrderDto>>> GetAllOrders();
        Task<Response<OrderDto>> GetOrderById(int id);
        Task<Response<OrderDto>> CreateOrder(string userId, AddOrderDto orderDto);
        Task<Response<OrderDto>> UpdateOrder(string userId, int orderId, UpdateOrderDto updatedOrderDto);
        Task<Response> DeleteOrder(string userId, int orderId);
    }
}
