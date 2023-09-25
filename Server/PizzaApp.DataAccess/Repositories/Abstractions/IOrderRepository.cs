using PizzaApp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaApp.DataAccess.Repositories.Abstractions
{
    public interface IOrderRepository: IBaseRepository<Order>
    {
    }
}
