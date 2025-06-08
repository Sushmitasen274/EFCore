using IIITS.Training.Web.Areas.Demo.Interfaces;
using IIITS.Training.Web.Areas.Demo.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Reflection;

namespace IIITS.Training.Web.Areas.Demo.Controllers
{

    [Area("Demo")]
    public class LeaveRequestController: Controller
    {

        public readonly ILeaveRequest _iLeaveRequest;
        public readonly ILeaveRequestView _iLeaveRequestView;

        public LeaveRequestController(ILeaveRequest iLeaveRequest, ILeaveRequestView iLeaveRequestView)
        {
            _iLeaveRequest = iLeaveRequest;
            _iLeaveRequestView = iLeaveRequestView;
        }


        //[HttpGet]
        //public async Task<IActionResult> LeaveRequest()
        //{
        //    LeaveRequestMainModelEntity obj = new LeaveRequestMainModelEntity();
        //    obj.lstEmpCode = await _iLeaveRequest.GetDropDownListForEmpCode();
        //    obj.lstEmpName = await _iLeaveRequest.GetDropDownListForEmpName();
        //    obj.lstEmpDesignation = await _iLeaveRequest.GetDropDownListForEmpDesignation();


        //    return View(obj);
        //}

        [HttpPost]
        public async Task<IActionResult> LeaveRequest(LeaveRequestMainModelEntity obj)
        {
            LeaveRequestResponse res = new LeaveRequestResponse();

            if (obj != null)
            {
                res = await _iLeaveRequest.SaveLeaveRequestData(obj);
                obj.EmpResponse = res.EmpResponse;
                obj.EmpId = res.EmpId;
                obj.lstEmpCode = await _iLeaveRequest.GetDropDownListForEmpCode();
                obj.lstEmpName = await _iLeaveRequest.GetDropDownListForEmpName();
                obj.lstEmpDesignation = await _iLeaveRequest.GetDropDownListForEmpDesignation();
                ViewBag.ResponseCode = res.EmpId;
                ViewBag.ResponseMessage = res.EmpResponse;
            }
            return View(obj);
        }

        [HttpGet]
        public async Task<IActionResult> LeaveRequest(int empleaveId)
        {
            LeaveRequestMainModelEntity obj = new LeaveRequestMainModelEntity();

                if (empleaveId > 0)
                {
                    obj = await _iLeaveRequest.GetLeaveRequestDetails(empleaveId);
                    obj.EmpId = empleaveId;
                obj.lstEmpCode = await _iLeaveRequest.GetDropDownListForEmpCode();
                obj.lstEmpName = await _iLeaveRequest.GetDropDownListForEmpName();
                obj.lstEmpDesignation = await _iLeaveRequest.GetDropDownListForEmpDesignation();
            }
                else
                {
                    obj.lstEmpCode = await _iLeaveRequest.GetDropDownListForEmpCode();
                    obj.lstEmpName = await _iLeaveRequest.GetDropDownListForEmpName();
                    obj.lstEmpDesignation = await _iLeaveRequest.GetDropDownListForEmpDesignation();
                }
            
            return View(obj);
        }
        #region LeaveRequestView

        [HttpGet]
        public async Task<IActionResult> LeaveRequestView(int empleaveId)
        {
            LeaveRequestMainModelEntity obj = new LeaveRequestMainModelEntity();
            obj = await _iLeaveRequest.LeaveRequestDelete(empleaveId);
            return View(obj);
        }

        //public Task<IActionResult> LeaveRequestDelete()
        //{
        //    LeaveRequestMainModelEntity obj = new LeaveRequestMainModelEntity();
        //    return Task.FromResult<IActionResult>(View(obj));
        //}

        public async Task<ActionResult> GetLeaveRequestView()
        {
            LeaveRequestListResponseModalView objList = new LeaveRequestListResponseModalView();

            objList = await _iLeaveRequestView.GetLeaveRequestView();
            
            return Json(new { data = objList.lstEmpleaveList });
        }

        #endregion

    }
}

