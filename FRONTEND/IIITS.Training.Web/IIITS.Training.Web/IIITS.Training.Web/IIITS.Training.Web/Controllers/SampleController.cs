using Microsoft.AspNetCore.Mvc;

namespace IIITS.Training.Web.Controllers
{
	public class SampleController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}
	}
}
