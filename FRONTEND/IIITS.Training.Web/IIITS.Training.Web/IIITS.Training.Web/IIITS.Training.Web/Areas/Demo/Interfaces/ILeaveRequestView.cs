using IIITS.Training.Web.Areas.Demo.Models;

namespace IIITS.Training.Web.Areas.Demo.Interfaces
{
    public interface ILeaveRequestView
    {
        public Task<LeaveRequestListResponseModalView> GetLeaveRequestView();

    }
}
