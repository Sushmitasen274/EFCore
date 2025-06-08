using IIITS.Training.DataEntities;
using IIITS.Training.DataEntities.DemoModel;
using IIITS.Training.RepoInterface;
using IIITS.Training.ServiceInterfaces;


namespace IIITS.Training.Services
{
    public class DemoService: IDemoService
    {
        private readonly IDemoRepo _JvRepository;


        public DemoService(IDemoRepo DemoTransaction)
        {
            _JvRepository = DemoTransaction;
        }
        public async Task<IEnumerable<DropDownReadEntity>> GetDropDownListForJv()
        {
            var result = await _JvRepository.GetDropDownListForJv();
            var lstSelectDoctType = new List<DropDownReadEntity>();
            if (result.Any())
            {
                lstSelectDoctType.Add(new DropDownReadEntity { Text = "Select", Value = "0" });
                lstSelectDoctType.AddRange(result.Select(entity => new DropDownReadEntity
                {
                    Text = entity.Text,
                    Value = entity.Value.ToString()
                }));
            }
            return lstSelectDoctType;
        }

        public async Task<DemoResponse> PostDemoData(DemoModelEntity obj)
        {
            return await _JvRepository.PostDemoData(obj);
		}

	}
}
