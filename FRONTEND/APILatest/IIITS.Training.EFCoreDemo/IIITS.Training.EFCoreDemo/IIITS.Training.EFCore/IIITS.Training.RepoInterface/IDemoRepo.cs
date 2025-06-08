using IIITS.Training.DataEntities;
using IIITS.Training.DataEntities.DemoModel;
using System;


namespace IIITS.Training.RepoInterface
{
    public interface IDemoRepo
    {
        Task<IEnumerable<DropDownReadEntity>> GetDropDownListForJv();
        Task<DemoResponse> PostDemoData(DemoModelEntity obj);

	}
}
