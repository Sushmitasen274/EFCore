using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IIITS.Training.Repositories.Demo
{
    [Table("mas_emp_details")]

    public class MasEmpDbType
    {
        
            [Key]
            [Column("emp_pkid")]
            public int Emp_pkId { get; set; }

            [Column("emp_id")]
            public string? Emp_Id { get; set; }

            [Column("emp_name")]
            public string? Emp_Name { get; set; }

            [Column("emp_designation")]
            public string? Emp_Designation { get; set; }

        
    }
}
