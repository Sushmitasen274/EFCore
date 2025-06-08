using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IIITS.Training.Repositories.Demo
{
    public class EmpMasModelConfiguration : IEntityTypeConfiguration<MasEmpDbType>
    {
        

            private const string _tableName = "mas_emp_details";
            private string _schemaName;

            public EmpMasModelConfiguration(string schemaName) => _schemaName = schemaName;

            public void Configure(EntityTypeBuilder<MasEmpDbType> builder)
            {
                builder.ToTable(_tableName, _schemaName);
                builder.HasKey(b => b.Emp_Id);
            }

        
    }
}
