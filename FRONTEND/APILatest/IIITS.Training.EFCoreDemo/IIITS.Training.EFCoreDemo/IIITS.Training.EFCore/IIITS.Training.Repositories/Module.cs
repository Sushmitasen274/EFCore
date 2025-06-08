using IEMS.CoreInfrastructure.DependencyInjection.Abstractions;
using IIITS.EFCore.Repositories.JVTransaction;
using IIITS.Training.RepoInterface;
using Microsoft.Extensions.DependencyInjection;

namespace IIITS.EFCore.Repositories
{
    public class Module : IApplicationModule
	{
		public void RegisterTypes(IServiceCollection serviceCollection)
		{
			
			
			serviceCollection.AddTransient<IDemoRepo, JVTransactionRepository>();


			//Other
			//TODO
			//serviceCollection.AddTransient<IEMSFMSMasterServiceDBContext>();
		}

		public void Bootstrap()
		{
		}
	}
}
