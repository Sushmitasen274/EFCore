using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace IIITS.EFCore.Repositories.JVTransaction
{
    public class JVTransactionConfiguration : IEntityTypeConfiguration<JVTransactionDbType>
    {
        private const string _tableName = "JV_TRANSACTION_MASTER";
        private string _schemaName;

        public JVTransactionConfiguration(string schemaName) => _schemaName = schemaName;

        public void Configure(EntityTypeBuilder<JVTransactionDbType> builder)
        {
            builder.ToTable(_tableName, _schemaName);
            builder.HasKey(b => b.TransId);
        }
    }
}
