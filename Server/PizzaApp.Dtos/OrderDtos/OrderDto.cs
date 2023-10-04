using PizzaApp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaApp.Dtos.OrderDtos
{
    public class OrderDto
    {
        public int Id { get; set; }
        public string UserId { get; set; } = string.Empty;
        public string AdressTo { get; set; } = string.Empty;
        public string? Description { get; set; }
        public int OrderPrice { get; set; }
        public List<Pizza>? Pizzas { get; set; } = new List<Pizza>();
    }
}
