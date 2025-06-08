using Microsoft.AspNetCore.Mvc.Rendering;

namespace IIITS.Training.Web.Areas.Demo.Models
{
    public class DemoModelEntity
    {
        public List<SelectListItem> lstItems { get; set; } 
        public string? DropDown { get; set; }
        public string? TextField { get; set; }
        public int Number { get; set; }

		public int Id { get; set; }
		public string? Response { get; set; }
	}
}
