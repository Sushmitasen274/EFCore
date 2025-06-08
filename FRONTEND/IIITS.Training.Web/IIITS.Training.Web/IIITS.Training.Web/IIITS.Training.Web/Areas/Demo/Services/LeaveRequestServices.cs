using IEMS_WEB.Comman;
using IIITS.Training.Web.Areas.Demo.Interfaces;
using IIITS.Training.Web.Areas.Demo.Models;
using Microsoft.AspNetCore.Mvc.Rendering;
using Newtonsoft.Json;

namespace IIITS.Training.Web.Areas.Demo.Services
{
    public class LeaveRequestServices : ILeaveRequest
    {
        public async Task<List<SelectListItem>> GetDropDownListForEmpCode()
        {
            LeaveRequestMainModelEntity obj = new LeaveRequestMainModelEntity();

            using (var client = new HttpClient())
            {
                try
                {
                    #region Call API 
                    string url = URLPORTServices.GetURL(URLPORT.Demo);
                    string req = url + String.Format("LeaveRequest/GetDropDownListForEmpCode");
                    var response = await HttpClientHelper.GetAPI(req, "", "");
                    #endregion
                    if (response != null)
                    {
                        var data = await response.Content.ReadAsStringAsync();

                        obj.lstEmpCode = Newtonsoft.Json.JsonConvert.DeserializeObject<List<SelectListItem>>(data);
                    }
                }
                catch (Exception ex)
                {
                }

            }
            return obj.lstEmpCode;
        }
        public async Task<List<SelectListItem>> GetDropDownListForEmpName()
        {
            LeaveRequestMainModelEntity obj = new LeaveRequestMainModelEntity();

            using (var client = new HttpClient())
            {
                try
                {
                    #region Call API 
                    string url = URLPORTServices.GetURL(URLPORT.Demo);
                    string req = url + String.Format("LeaveRequest/GetDropDownListForEmpName");
                    var response = await HttpClientHelper.GetAPI(req, "", "");
                    #endregion
                    
                    if (response != null)
                    {
                        var data = await response.Content.ReadAsStringAsync();

                        obj.lstEmpName = Newtonsoft.Json.JsonConvert.DeserializeObject<List<SelectListItem>>(data);
                    }
                }
                catch (Exception ex)
                {
                }

            }
            return obj.lstEmpName;
        }
        public async Task<List<SelectListItem>> GetDropDownListForEmpDesignation()
        {
            LeaveRequestMainModelEntity obj = new LeaveRequestMainModelEntity();

            using (var client = new HttpClient())
            {
                try
                {
                    #region Call API 
                    string url = URLPORTServices.GetURL(URLPORT.Demo);
                    string req = url + String.Format("LeaveRequest/GetDropDownListForEmpDesignation");
                    var response = await HttpClientHelper.GetAPI(req, "", "");
                    #endregion
                    if (response != null)
                    {
                        var data = await response.Content.ReadAsStringAsync();

                        obj.lstEmpDesignation = Newtonsoft.Json.JsonConvert.DeserializeObject<List<SelectListItem>>(data);
                    }
                }
                catch (Exception ex)
                {
                }

            }
            return obj.lstEmpDesignation;
        }
        public async Task<LeaveRequestResponse> SaveLeaveRequestData(LeaveRequestMainModelEntity obj)
        {
            LeaveRequestResponse objRes = new LeaveRequestResponse();

            string serilaizeJson = JsonConvert.SerializeObject(obj, Formatting.None,
                new JsonSerializerSettings
                {
                    NullValueHandling = NullValueHandling.Ignore
                });


            using (var client = new HttpClient())
            {

                string url = URLPORTServices.GetURL(URLPORT.Demo);
                string req = url + string.Format("LeaveRequest/SaveLeaveRequestData");
                var response = await HttpClientHelper.POSTAPI(req, serilaizeJson, "");

                if (response != null)
                {
                    var data = await response.Content.ReadAsStringAsync();

                    objRes = Newtonsoft.Json.JsonConvert.DeserializeObject<LeaveRequestResponse>(data);
                }

            }
            return objRes;


        }
        public async Task<LeaveRequestMainModelEntity> GetLeaveRequestDetails(int empleaveId)
        {
            LeaveRequestMainModelEntity objleaveData = new LeaveRequestMainModelEntity();
            using (var client = new HttpClient { Timeout = TimeSpan.FromSeconds(300) })
            //using (var client = new HttpClient ())
            {
                try
                {
                    string url = URLPORTServices.GetURL(URLPORT.Demo);
                    string req = url + String.Format(String.Format("LeaveRequest/GetLeaveRequestDetails?empleaveId={0}", empleaveId));
                    var response = await HttpClientHelper.GetAPI(req, "", "");

                    if (response != null)
                    {
                        var data = await response.Content.ReadAsStringAsync();
                        objleaveData = Newtonsoft.Json.JsonConvert.DeserializeObject<LeaveRequestMainModelEntity>(data);
                    }
                }
                catch (Exception ex)
                {

                }
            }
            return objleaveData;
        }
        public async Task<LeaveRequestMainModelEntity> LeaveRequestDelete(int empleaveId)
        {
            LeaveRequestMainModelEntity objleaveData = new LeaveRequestMainModelEntity();
            using (var client = new HttpClient { Timeout = TimeSpan.FromSeconds(300) })
            //using (var client = new HttpClient ())
            {
                try
                {
                    string url = URLPORTServices.GetURL(URLPORT.Demo);
                    string req = url + String.Format(String.Format("LeaveRequest/LeaveRequestDelete?empleaveId={0}", empleaveId));
                    var response = await HttpClientHelper.GetAPI(req, "", "");

                    if (response != null)
                    {
                        var data = await response.Content.ReadAsStringAsync();
                        objleaveData = Newtonsoft.Json.JsonConvert.DeserializeObject<LeaveRequestMainModelEntity>(data);
                    }
                }
                catch (Exception ex)
                {

                }
            }
            return objleaveData;
        }
    }
}
