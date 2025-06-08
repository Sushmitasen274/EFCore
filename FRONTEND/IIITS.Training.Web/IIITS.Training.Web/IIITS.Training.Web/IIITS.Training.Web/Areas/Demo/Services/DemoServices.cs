using IEMS_WEB.Comman;
using IIITS.Training.Web.Areas.Demo.Interfaces;
using IIITS.Training.Web.Areas.Demo.Models;
using Microsoft.AspNetCore.Mvc.Rendering;
using Newtonsoft.Json;

namespace IIITS.Training.Web.Areas.Demo.Services
{
    public class DemoServices :IDemo
    { 
        public async Task<List<SelectListItem>> GetList()
        {
            DemoModelEntity obj=new DemoModelEntity();

            using (var client = new HttpClient())
            {
                try
                {
                    #region Call API 
                    string url = URLPORTServices.GetURL(URLPORT.Demo);
                    string req = url + String.Format("Demo/getdropdownforjvtransaction");
                    var response = await HttpClientHelper.GetAPI(req, "", "");
                    #endregion
                    if (response != null)
                    {
                        var data = await response.Content.ReadAsStringAsync();

                        obj.lstItems = Newtonsoft.Json.JsonConvert.DeserializeObject<List<SelectListItem>>(data);
                    }
                }
                catch (Exception ex)
                {
                }

            }
            return obj.lstItems;
        }

        public async Task<DemoResponse> PostDemoData(DemoModelEntity obj)
        {
			DemoResponse objRes= new DemoResponse();

            string serilaizeJson = JsonConvert.SerializeObject(obj, Formatting.None,
                new JsonSerializerSettings
                {
                    NullValueHandling = NullValueHandling.Ignore
                });


			using (var client=new HttpClient())
            {

                string url = URLPORTServices.GetURL(URLPORT.Demo);
                string req = url + string.Format("Demo/postdemodata");
                var response = await HttpClientHelper.POSTAPI(req, serilaizeJson,"");

                if (response !=null)
                {
					var data = await response.Content.ReadAsStringAsync();

                    objRes = Newtonsoft.Json.JsonConvert.DeserializeObject<DemoResponse>(data);
				}

			}
            return objRes;


		}

	}
}
