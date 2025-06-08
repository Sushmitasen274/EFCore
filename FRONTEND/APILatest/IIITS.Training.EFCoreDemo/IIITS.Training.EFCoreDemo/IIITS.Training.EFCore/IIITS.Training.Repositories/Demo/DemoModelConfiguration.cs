using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace IIITS.Training.Repositories.Demo
{
	public class DemoModelConfiguration : IEntityTypeConfiguration<DemoModelDbType>
	{
		private const string _tableName = "DEMO_TABLE";
		private string _schemaName;

		public DemoModelConfiguration(string schemaName) => _schemaName = schemaName;

		public void Configure(EntityTypeBuilder<DemoModelDbType> builder)
		{
			builder.ToTable(_tableName, _schemaName);
			builder.HasKey(b => b.DemoPkid);
		}
	}
}
