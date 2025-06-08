using IIITS.Training.Web.Areas.Demo.Interfaces;
using IIITS.Training.Web.Areas.Demo.Models;
using Microsoft.AspNetCore.Mvc;

namespace IIITS.Training.Web.Areas.Demo.Controllers
{
    [Area("Demo")]
    public class DemoController : Controller
    {
        private readonly IDemo _iDemo;
        public DemoController(IDemo iDemo)
        {
            _iDemo = iDemo;
        }

        [Area("Demo")]
        [HttpGet]
        public async Task<IActionResult> Demo()
        {
            DemoModelEntity obj = new DemoModelEntity();
            obj.lstItems = await _iDemo.GetList();
            return View(obj);
        }

        [HttpPost]
        public async Task<IActionResult> Demo(DemoModelEntity obj)
        {
            DemoResponse res = new DemoResponse();

			if (obj != null)
            {
                res = await _iDemo.PostDemoData(obj);
				obj.Response = res.Response;
				obj.Id= res.Id;
				obj.lstItems = await _iDemo.GetList();
                ViewBag.ResponseCode = res.Id;
                ViewBag.ResponseMessage = res.Response;
            }
            return View(obj);
        }
    }
}
