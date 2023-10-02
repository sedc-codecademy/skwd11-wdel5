using AutoMapper;
using PizzaApp.Domain.Entities;
using PizzaApp.Dtos.PizzaDtos;
using PizzaApp.Dtos.UserDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaApp.Mappers.MappersConfig
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile() 
        {
            //userMapping
            CreateMap<User, LoginUserDto>().ReverseMap();
            CreateMap<User, RegisterUserDto>().ReverseMap();
            CreateMap<User, UserDto>().ReverseMap();

            //PizzaMappings
            CreateMap<Pizza, PizzaDto>().ReverseMap();
            CreateMap<Pizza, AddPizzaDto>().ReverseMap();
            CreateMap<Pizza, UpdatePizzaDto>().ReverseMap();
        }
    }
}
