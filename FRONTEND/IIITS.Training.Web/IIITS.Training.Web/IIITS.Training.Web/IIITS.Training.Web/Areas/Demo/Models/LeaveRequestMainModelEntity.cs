using Microsoft.AspNetCore.Mvc.Rendering;

namespace IIITS.Training.Web.Areas.Demo.Models
{
    public class LeaveRequestMainModelEntity
    {
        
        public List<SelectListItem> lstEmpCode { get; set; }
        public List<SelectListItem> lstEmpName { get; set; }
        public List<SelectListItem> lstEmpDesignation { get; set; }

        public int EmpId { get; set; }
        public string? EmpCode { get; set; }
        public string? EmpName { get; set; }
        public string? EmpDesignation { get; set; }
        public string? EmpLeaveType { get; set; }
        public int TotalDays { get; set; }
        public string? ToDate { get; set; }
        public string? FromDate { get; set; }
        public string? ToSession { get; set; }
        public string? FromSession { get; set; }
        public string? Description { get; set; }
        public string? EmpResponse { get; set; }
        
    }
}
