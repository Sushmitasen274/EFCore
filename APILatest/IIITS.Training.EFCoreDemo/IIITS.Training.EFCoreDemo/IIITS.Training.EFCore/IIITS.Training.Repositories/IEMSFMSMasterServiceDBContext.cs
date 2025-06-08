using IEMS.CoreInfrastructure.DependencyInjection;
using IIITS.EFCore.Repositories.JVTransaction;
using IIITS.Training.Repositories.Demo;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace IIITS.EFCore.Repositories
{
    public class IEMSFMSMasterServiceDBContext : DbContext
    {
        private IConfiguration _configuration;
        private string _connectionString;
        private string _connectionStringNpg;
        private string _connectionStringWorkFlow;

        public IEMSFMSMasterServiceDBContext(IConfiguration config)
        {

            _configuration = config;
            //TODO
            _connectionString = _configuration["ConnectionStrings:OracleConnString"];
            _connectionStringNpg = _configuration["ConnectionStrings:PostgreSqlConnString"];


        }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //	int commandTimeout = int.Parse(_configuration.GetSection("APIDBContext:CommandTimeout").Value);
        //	optionsBuilder.UseOracle(_connectionString, options => options.CommandTimeout(commandTimeout))
        //		.LogTo(Console.WriteLine, new[] { DbLoggerCategory.Database.Command.Name }, LogLevel.Information); ;
        //	optionsBuilder.EnableSensitiveDataLogging(true);
        //	base.OnConfiguring(optionsBuilder);
        //}

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            int commandTimeout = int.Parse(_configuration.GetSection("APIDBContext:CommandTimeout").Value);
            optionsBuilder.UseNpgsql(_connectionStringNpg, options => options.CommandTimeout(commandTimeout))
                .LogTo(Console.WriteLine, new[] { DbLoggerCategory.Database.Command.Name }, LogLevel.Information);
            optionsBuilder.EnableSensitiveDataLogging(true);
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            string schemaNme = _configuration["APIDBContext:SchemaName"];
            //Master
            // modelBuilder.ApplyConfiguration(new BankEntityConfiguration(schemaNme));

            modelBuilder.ApplyConfiguration(new JVTransactionConfiguration(schemaNme));
            modelBuilder.ApplyConfiguration(new DemoModelConfiguration(schemaNme));

            modelBuilder.ApplyConfiguration(new LeaveRequestModelConfiguration(schemaNme));
            modelBuilder.ApplyConfiguration(new EmpMasModelConfiguration(schemaNme));



            base.OnModelCreating(modelBuilder);

        }
        public DbSet<JVTransactionDbType> JvTransactionMasters { get; set; }
        public DbSet<DemoModelDbType> DemoDbType { get; set; }
        public DbSet<LeaveRequestDbType> LeaveRequestDbType { get; set; }

        public DbSet<MasEmpDbType> MasEmpDbType { get; set; }



        // public DbSet<ChartOfAccountDbType> ChartOfAccounts{ get; set; }


    }
}
