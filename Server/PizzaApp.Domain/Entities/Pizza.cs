using PizzaApp.Domain.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaApp.Domain.Entities
{
    public class Pizza
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public int Price { get; set; }
        [ForeignKey("User")]
        public string UserId { get; set; } = string.Empty;
        public List<IngridientsEnum> Ingridients { get; set; } = new List<IngridientsEnum>();
        public int? OrderId { get; set; }
        public Order? Order { get; set; }
    }
}
