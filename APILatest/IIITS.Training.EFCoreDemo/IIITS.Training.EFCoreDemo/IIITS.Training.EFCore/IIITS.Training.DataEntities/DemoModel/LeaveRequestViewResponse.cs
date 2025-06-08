using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IIITS.Training.DataEntities.DemoModel
{
    public class LeaveRequestViewResponse
    {


        //public List<SelectListItem> lstEmpleaveList { get; set; }

        public int EmpId { get; set; }
        public string? EmpCode { get; set; }
        public string? EmpName { get; set; }
        public string? EmpLeaveType { get; set; }
        public int TotalDays { get; set; }
        public string? EmpStatus { get; set; }


    }

    public class LeaveRequestListResponseModalView
    {
        public LeaveRequestListResponseModalView()
        {
            lstEmpleaveList = new List<LeaveRequestViewResponse>();
        }
        public List<LeaveRequestViewResponse> lstEmpleaveList { get; set; }
    }
}
