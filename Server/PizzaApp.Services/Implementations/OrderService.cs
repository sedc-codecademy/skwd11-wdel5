using AutoMapper;
using PizzaApp.DataAccess.Repositories.Abstractions;
using PizzaApp.Domain.Entities;
using PizzaApp.Dtos.OrderDtos;
using PizzaApp.Services.Abstractions;
using PizzaApp.Shared.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaApp.Services.Implementations
{
    public class OrderService : IOrderService
    {
        private readonly IMapper _mapper;
        private readonly IOrderRepository _repository;

        public OrderService(IMapper mapper, IOrderRepository orderRepository)
        {
            _mapper = mapper;
            _repository = orderRepository;
        }

        public async Task<Response<OrderDto>> CreateOrder(string userId, AddOrderDto orderDto)
        {
            var order = _mapper.Map<Order>(orderDto);
            order.UserId = userId;
            await _repository.Add(order);
            await _repository.SaveChanges();
            var orderDtoResult = _mapper.Map<OrderDto>(order);
            return new Response<OrderDto>(orderDtoResult);
        }

        public async Task<Response> DeleteOrder(string userId, int orderId)
        {
            var order = await _repository.GetByIdInt(orderId);
            if (order == null)
                return new Response("Order not found");
            if (order.UserId != userId)
                return new Response("You do not have permissioon to delete this order");

            await _repository.Remove(order);
            await _repository.SaveChanges();
            return new Response();

        }

        public async Task<Response<List<OrderDto>>> GetAllOrders()
        {
            var orders = await _repository.GetAll();
            var orderDtos = _mapper.Map<List<OrderDto>>(orders);
            return new Response<List<OrderDto>>(orderDtos);
        }

        public async Task<Response<OrderDto>> GetOrderById(int id)
        {
            var order = await _repository.GetByIdInt(id);
            if (order == null)
                return new Response<OrderDto>("Order not found");
            var orderDto = _mapper.Map<OrderDto>(order);
            return new Response<OrderDto>(orderDto);
        }

        public async Task<Response<OrderDto>> UpdateOrder(string userId, int orderId, UpdateOrderDto updatedOrderDto)
        {
            var order = await _repository.GetByIdInt(orderId);
            if (order == null)
                return new Response<OrderDto>("Order not found");

            if (order.UserId != userId)
                return new Response<OrderDto>("You do not have permissions to update this order");

            var updatedOrder = _mapper.Map(updatedOrderDto, order);
            updatedOrder.UserId = userId;
            updatedOrder.Id = orderId;
            await _repository.SaveChanges();
            var orderDtoResult = _mapper.Map<OrderDto>(order);
            return new Response<OrderDto>(orderDtoResult);
        }
    }
}
