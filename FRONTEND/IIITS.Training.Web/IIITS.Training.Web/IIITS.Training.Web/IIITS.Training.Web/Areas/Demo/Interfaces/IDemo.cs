using IIITS.Training.Web.Areas.Demo.Models;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace IIITS.Training.Web.Areas.Demo.Interfaces
{
    public interface IDemo
    {
      public  Task<List<SelectListItem>> GetList();
        public Task<DemoResponse> PostDemoData(DemoModelEntity obj);
    }
}
