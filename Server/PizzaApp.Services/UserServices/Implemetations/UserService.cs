using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using PizzaApp.Domain.Entities;
using PizzaApp.Dtos.UserDtos;
using PizzaApp.Services.UserServices.Abstractions;
using PizzaApp.Shared.CustomExceptions.UserExceptions;
using PizzaApp.Shared.Requests;
using PizzaApp.Shared.Responses;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaApp.Services.UserServices.Implemetations
{
    public class UserService : IUserService
    {

        private readonly ITokenService _tokenService;
        private readonly UserManager<User> _userManager;

        public UserService(ITokenService tokenService, UserManager<User> userManager)
        {
            _tokenService = tokenService;
            _userManager = userManager;
        }

        public async Task<Response> DeleteUserAsync(string id)
        {
            var user = await _userManager.FindByIdAsync(id);
            if (user == null)
                return new Response("User not found");

            var result = await _userManager.DeleteAsync(user);

            if (!result.Succeeded)
                return new Response(result.Errors.Select(x => x.Description));

            return new Response();
        }

        public async Task<Response> GetAllUsers()
        {
            var response = new Response<List<UserDto>>();
            var users = await _userManager.Users.ToListAsync();
            var userDtos = users.Select(user => new UserDto
            {
                Id = user.Id,
                UserName = user.UserName,
                Email = user.Email,
            }).ToList();
            response.Result = userDtos;
            response.IsSuccessfull = true;
            return response;
        }

        public async Task<Response<UserDto>> GetUserByIdAsync(string id)
        {
            var user = await _userManager.FindByIdAsync(id);
            if (user == null)
                return new Response<UserDto>("User not found");

            var userDto = new UserDto
            {
                Id = user.Id,
                UserName = user.UserName,
                Email = user.Email,
            };

            return new Response<UserDto>(userDto);
        }

        public async Task<Response<LoginUserResponse>> LoginUserAsync(LoginUserRequest request)
        {
            if(string.IsNullOrWhiteSpace(request?.Username)) 
                throw new UserDataException("username is a required field");

            if (string.IsNullOrWhiteSpace(request?.Password))
                throw new UserDataException("password is a required field");

            var user = await _userManager.FindByNameAsync(request.Username);
            if (user == null)
                return new("user doesnt exist");

            var passwordIsValid = await _userManager.CheckPasswordAsync(user, request.Password);
            if (!passwordIsValid)
                return new("invalid password");

            var token = await _tokenService.GenerateTokenAsync(user);

            return new Response<LoginUserResponse>(new LoginUserResponse
            {
                Token = new JwtSecurityTokenHandler().WriteToken(token),
                ValidTo = token.ValidTo
            });
        }

        public async Task<Response<RegisterUserResponse>> RegisterUserAsync(RegisterUserRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Username))
                throw new UserDataException("username is a required field and must not be empty");

            if (string.IsNullOrWhiteSpace(request.Email))
                throw new UserDataException("email is a required field");

            if (string.IsNullOrWhiteSpace(request.Password))
                throw new UserDataException("password is a required field");

            var user = new UserDto { UserName = request.Username, Email = request.Email };
            var result = await _userManager.CreateAsync(user, request.Password);

            if(!result.Succeeded) 
                return new(result.Errors.Select(x => x.Description));

            return new(new RegisterUserResponse
            {
                Id = user.Id,
                UserName = user.UserName,
                Email = user.Email
            });

        }

        public async Task<Response<UserDto>> UpdateUserAsync(string id, UserDto updatedUser)
        {
            var user = await _userManager.FindByIdAsync(id);
            if (user == null)
                return new Response<UserDto>("User not found");

            user.UserName = updatedUser.UserName;
            user.Email = updatedUser.Email;

            var result = await _userManager.UpdateAsync(user);

            if (!result.Succeeded)
                return new Response<UserDto>(result.Errors.Select(x => x.Description));

            return new Response<UserDto>(updatedUser);
        }
    }
}
