using Microsoft.EntityFrameworkCore;


namespace IIITS.EFCore.Repositories
{
	public abstract class TransactionManager
	{
		private readonly IEMSFMSMasterServiceDBContext _dbContext;
		protected TransactionManager(IEMSFMSMasterServiceDBContext dbContext)
		{
			_dbContext = dbContext;
		}

		public async Task<TResult> ExecuteTransactionAsync<TResult>(Func<Task<TResult>> transactionFunc)
		{
			var executionStrategy = _dbContext.Database.CreateExecutionStrategy();
			return await executionStrategy.ExecuteAsync(async () =>
			{
				using (var transaction = await _dbContext.Database.BeginTransactionAsync())
				{
					try
					{
						var result = await transactionFunc();
						await transaction.CommitAsync();
						return result;
					}
					catch
					{
						await transaction.RollbackAsync();
						throw;
					}
				}
			});
		}

		public async Task ExecuteTransactionAsync(Func<Task> transactionFunc)
		{
			var executionStrategy = _dbContext.Database.CreateExecutionStrategy();
			await executionStrategy.ExecuteAsync(async () =>
			{
				using (var transaction = await _dbContext.Database.BeginTransactionAsync())
				{
					try
					{
						await transactionFunc();
						await transaction.CommitAsync();
					}
					catch
					{
						await transaction.RollbackAsync();
						throw;
					}
				}
			});
		}
	}

}
