using IEMS_WEB.Comman;
using IIITS.Training.Web.Areas.Demo.Interfaces;
using IIITS.Training.Web.Areas.Demo.Models;
using Microsoft.AspNetCore.Mvc.Rendering;


namespace IIITS.Training.Web.Areas.Demo.Services
{
    public class LeaveRequestViewService: ILeaveRequestView
    {        
         async Task<LeaveRequestListResponseModalView> ILeaveRequestView.GetLeaveRequestView()
        {
            LeaveRequestListResponseModalView obj = new LeaveRequestListResponseModalView();

            using (var client = new HttpClient())
            {
                try
                {
                    #region Call API 
                    string url = URLPORTServices.GetURL(URLPORT.Demo);
                    string req = url + String.Format("LeaveRequest/GetLeaveRequestView");
                    var response = await HttpClientHelper.GetAPI(req, "", "");
                    #endregion
                    if (response != null)
                    {
                        var data = await response.Content.ReadAsStringAsync();


                        List<LeaveRequestViewResponse> leaveRequests =
                       Newtonsoft.Json.JsonConvert.DeserializeObject<List<IIITS.Training.Web.Areas.Demo.Models.LeaveRequestViewResponse>>(data);

                        obj.lstEmpleaveList = leaveRequests;
                        //obj = Newtonsoft.Json.JsonConvert.DeserializeObject<LeaveRequestResponse>(data);


                    }
                }
                catch (Exception ex)
                {
                }

            }
            return obj;
        }
    }
}
