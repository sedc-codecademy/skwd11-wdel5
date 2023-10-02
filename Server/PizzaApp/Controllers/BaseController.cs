using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PizzaApp.Shared.Responses;

namespace PizzaApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseController : ControllerBase
    {
        protected IActionResult Response<TResult>(Response<TResult> response) where TResult : new()
        {
            if (!response.IsSuccessfull)
            //{
            //    return BadRequest(response);
            //}
                return BadRequest(response);
            return Ok(response.Result);
        }

        protected IActionResult Response(Response response)
        {
            if(!response.IsSuccessfull)
                return BadRequest(response);
            return Ok();
        }
    }
}
