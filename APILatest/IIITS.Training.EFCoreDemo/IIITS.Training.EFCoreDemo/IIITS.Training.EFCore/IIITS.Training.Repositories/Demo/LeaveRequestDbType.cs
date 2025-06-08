using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IIITS.Training.Repositories.Demo
{
    [Table("leave_request_details")]
    public class LeaveRequestDbType
    {
        [Key]
        [Column("lr_pkid")]
        public int EmpId { get; set; }

        [Column("lr_empid")]
        public string? EmpCode { get; set; }

        [Column("lr_empname")]
        public string? EmpName { get; set; }

        [Column("lr_empdesignation")]
        public string? EmpDesignation { get; set; }

        [Column("lr_leavetype")]
        public string? EmpLeaveType { get; set; }

        [Column("lr_fromsession")]
        public string? FromSession { get; set; }

        [Column("lr_tosession")]
        public string? ToSession { get; set; }

        [Column("lr_todate")]
        public string? ToDate { get; set; }

        [Column("lr_fromdate")]
        public string? FromDate { get; set; }

        [Column("lr_totaldays")]
        public string TotalDays { get; set; }

        [Column("lr_desc")]
        public string? Description { get; set; }

        [Column("lr_status")]
        public string? EmpStatus { get; set; }
    }



}
