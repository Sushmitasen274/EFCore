using IIITS.Training.Web.Areas.Demo.Models;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace IIITS.Training.Web.Areas.Demo.Interfaces
{
    public interface ILeaveRequest
    {
        Task<List<SelectListItem>> GetDropDownListForEmpCode();
        Task<List<SelectListItem>> GetDropDownListForEmpName();
        Task<List<SelectListItem>> GetDropDownListForEmpDesignation();
        Task<LeaveRequestResponse> SaveLeaveRequestData(LeaveRequestMainModelEntity obj);

        Task<LeaveRequestMainModelEntity> GetLeaveRequestDetails(int empleaveId);
        Task<LeaveRequestMainModelEntity> LeaveRequestDelete(int empleaveId);
    }
}
