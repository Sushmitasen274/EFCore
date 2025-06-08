using System.Formats.Asn1;
using IIITS.Training.DataEntities;
using IIITS.Training.DataEntities.DemoModel;
using IIITS.Training.RepoInterface;
using IIITS.Training.Repositories.Demo;
using Microsoft.EntityFrameworkCore;

namespace IIITS.EFCore.Repositories.JVTransaction
{
    public class JVTransactionRepository : IDemoRepo
    {
        private readonly IEMSFMSMasterServiceDBContext _dbContext;

        public JVTransactionRepository(IEMSFMSMasterServiceDBContext dBContext)
        {
            _dbContext = dBContext;
        }

        public async Task<IEnumerable<DropDownReadEntity>> GetDropDownListForJv()
        {
            var dbType = await _dbContext.JvTransactionMasters.Select(x => new DropDownReadEntity
            {
                Value = x.VoucherNo.ToString(),
                Text = x.VoucherNo
            })
                 .ToListAsync();
            return dbType;
        }

        public async Task<DemoResponse> PostDemoData(DemoModelEntity obj)
        {
            DemoResponse objres = new DemoResponse();

            var demoDataDbType = new DemoModelDbType();
            demoDataDbType.DropDown = obj.DropDown;
            demoDataDbType.TextField = obj.TextField;
            demoDataDbType.Number = obj.Number;
            demoDataDbType.Status = "C";

            await _dbContext.InsertArrayAsync(demoDataDbType);

            objres.Id = 1;
            objres.Response = "Save successfully";
            return objres;
        }
	}
}
