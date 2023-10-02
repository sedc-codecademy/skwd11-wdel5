using PizzaApp.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaApp.Dtos.PizzaDtos
{
    public class UpdatePizzaDto
    {
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public int Price { get; set; }
        //public string UserId { get; set; } = string.Empty;
        public List<IngridientsEnum> Ingridients { get; set; } = new List<IngridientsEnum>();
        public int? OrderId { get; set; }
        //public Order? Order { get; set; }
    }
}
