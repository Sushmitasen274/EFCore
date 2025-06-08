using IIITS.Training.DataEntities.DemoModel;
using IIITS.Training.DataEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IIITS.Training.RepoInterface
{
    public interface ILeaveRequestRepo
    {

        Task<IEnumerable<DropDownReadEntity>> GetDropDownListForEmpCode();
        Task<IEnumerable<DropDownReadEntity>> GetDropDownListForEmpName();
        Task<IEnumerable<DropDownReadEntity>> GetDropDownListForEmpDesignation();
        Task<LeaveRequestResponse> SaveLeaveRequestData(LeaveRequestMainModelEntity obj);
        Task<IEnumerable<LeaveRequestViewModelEntity>> GetLeaveRequestView();
        Task<LeaveRequestResponse> ApproveLeaveRequest(LeaveRequestModelEntity obj);

        Task<LeaveRequestResponse> GetLeaveRequestDetails(int empleaveId);
        Task<LeaveRequestResponse> LeaveRequestDelete(int empleaveId);


    }
}
