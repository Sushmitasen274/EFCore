using IEMS.CoreInfrastructure.DependencyInjection;
using IIITS.Training.DataEntities.DemoModel;
using IIITS.Training.RepoInterface;
using IIITS.Training.ServiceInterfaces;
using Microsoft.AspNetCore.Mvc;

namespace IIITS.Training.EFCore.API.Controllers.V1
{
    [Route("api/[controller]")]
    [ApiController]
    public class DemoController : ControllerBase
    {
        private readonly IDemoService _Jvservice;

        public DemoController(IDemoService DemoTransaction)
        {
            _Jvservice = DemoTransaction;
        }


        [Route("getdropdownforjvtransaction")]
        [HttpGet]
        public async Task<IActionResult> GetDropDownListForJv()
        {
            var result = await _Jvservice.GetDropDownListForJv();

            if (result == null)
                return NotFound();

            return Ok(result);
        }


		[Route("postdemodata")]
		[HttpPost]
        public async Task<IActionResult> PostDemoData(DemoModelEntity obj)
        {
			var result = await _Jvservice.PostDemoData(obj);

			if (result == null)
				return NotFound();

			return Ok(result);
		}
    }
}
