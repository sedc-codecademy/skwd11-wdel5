using PizzaApp.Dtos.UserDtos;
using PizzaApp.Shared.Requests;
using PizzaApp.Shared.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaApp.Services.UserServices.Abstractions
{
    public interface IUserService
    {
        Task<Response<RegisterUserResponse>> RegisterUserAsync(RegisterUserRequest request);
        Task<Response<LoginUserResponse>> LoginUserAsync(LoginUserRequest request);
        Task<Response> GetAllUsers();
        Task<Response<UserDto>> GetUserByIdAsync(string id);
        Task<Response<UserDto>> UpdateUserAsync(string id, UserDto updatedUser);
        Task<Response> DeleteUserAsync(string id);
    }
}
