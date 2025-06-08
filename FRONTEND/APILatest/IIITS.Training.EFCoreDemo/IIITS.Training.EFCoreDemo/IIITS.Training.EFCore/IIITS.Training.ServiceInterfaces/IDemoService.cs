using IIITS.Training.DataEntities;
using IIITS.Training.DataEntities.DemoModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IIITS.Training.ServiceInterfaces
{
    public interface IDemoService
    {
        Task<IEnumerable<DropDownReadEntity>> GetDropDownListForJv();
        Task<DemoResponse> PostDemoData(DemoModelEntity obj);
    }
}
