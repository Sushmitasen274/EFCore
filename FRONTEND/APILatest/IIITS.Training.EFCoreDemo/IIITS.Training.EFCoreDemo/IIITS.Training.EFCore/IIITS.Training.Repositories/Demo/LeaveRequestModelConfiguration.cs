using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IIITS.Training.Repositories.Demo
{
    public class LeaveRequestModelConfiguration : IEntityTypeConfiguration<LeaveRequestDbType>
    {

        private const string _tableName = "leave_request_details";
        private string _schemaName;

        public LeaveRequestModelConfiguration(string schemaName) => _schemaName = schemaName;

        public void Configure(EntityTypeBuilder<LeaveRequestDbType> builder)
        {
            builder.ToTable(_tableName, _schemaName);
            builder.HasKey(b => b.EmpId);
        }

    }
    
}
