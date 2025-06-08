using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IIITS.Training.DataEntities.DemoModel
{
    public class LeaveRequestViewModelEntity
    {
        public int EmpId { get; set; }
        public string? EmpCode { get; set; }
        public string? EmpName { get; set; }
        public string? EmpLeaveType { get; set; }
        public string TotalDays { get; set; }
        public string? EmpStatus { get; set; }
    }
}
