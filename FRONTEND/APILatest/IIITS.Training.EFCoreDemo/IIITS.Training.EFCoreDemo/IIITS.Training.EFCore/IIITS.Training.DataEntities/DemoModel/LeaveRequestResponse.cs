using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IIITS.Training.DataEntities.DemoModel
{
    public class LeaveRequestResponse
    {
        public int Status { get; set; }
        public string? Response { get; set; }

        public int EmpId { get; set; }
        public string? EmpCode { get; set; }
        public string? EmpName { get; set; }
        public string? EmpDesignation { get; set; }
        public string? EmpLeaveType { get; set; }
        public string TotalDays { get; set; }
        public string? ToDate { get; set; }
        public string? FromDate { get; set; }
        public string? ToSession { get; set; }
        public string? FromSession { get; set; }
        public string? Description { get; set; }
        public string? EmpStatus { get; set; }
    }
}
