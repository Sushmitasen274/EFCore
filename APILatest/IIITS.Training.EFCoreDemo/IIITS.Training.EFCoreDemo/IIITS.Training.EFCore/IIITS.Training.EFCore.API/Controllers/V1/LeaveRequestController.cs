using IIITS.Training.DataEntities.DemoModel;
using IIITS.Training.RepoInterface;
using IIITS.Training.ServiceInterfaces;
using Microsoft.AspNetCore.Mvc;

namespace IIITS.Training.EFCore.API.Controllers.V1
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeaveRequestController : ControllerBase
    {
        public readonly ILeaveRequestService _ILeaveRequest;

        public LeaveRequestController(ILeaveRequestService LeaveRequest)
        {
            _ILeaveRequest = LeaveRequest;
        }


        [HttpGet("GetDropDownListForEmpCode")]
        public async Task<IActionResult> GetDropDownListForEmpCode()
        {
            var result = await _ILeaveRequest.GetDropDownListForEmpCode();

            if (result == null)
                return NotFound();

            return Ok(result);
        }

        [HttpGet("GetDropDownListForEmpName")]
        public async Task<IActionResult> GetDropDownListForEmpName()
        {
            var result = await _ILeaveRequest.GetDropDownListForEmpName();

            if (result == null)
                return NotFound();

            return Ok(result);
        }

        [HttpGet("GetDropDownListForEmpDesignation")]
        public async Task<IActionResult> GetDropDownListForEmpDesignation()
        {
            var result = await _ILeaveRequest.GetDropDownListForEmpDesignation();

            if (result == null)
                return NotFound();

            return Ok(result);
        }
        [HttpGet("GetLeaveRequestDetails")]
        public async Task<IActionResult> GetLeaveRequestDetails(int empleaveId)
        {
            var result = await _ILeaveRequest.GetLeaveRequestDetails(empleaveId);

            if (result == null)
                return NotFound();

            return Ok(result);
        }
        //[HttpPost("SaveLeaveRequestData")]
        [Route("SaveLeaveRequestData")]
        [HttpPost]
        public async Task<IActionResult> SaveLeaveRequestData(LeaveRequestMainModelEntity obj)
        {
            var result = await _ILeaveRequest.SaveLeaveRequestData(obj);

            if (result == null)
                return NotFound();

            return Ok(result);
        }
        #region LeaveRequestView

        //[HttpGet("GetLeaveRequestView")]
        [Route("GetLeaveRequestView")]
        [HttpGet]
        public async Task<IActionResult> GetLeaveRequestView()
        {
            var result = await _ILeaveRequest.GetLeaveRequestView();

            if (result == null)
                return NotFound();

            return Ok(result);
        }
        [HttpPost("ApproveLeaveRequest")]
        public async Task<IActionResult> ApproveLeaveRequest(LeaveRequestModelEntity obj)
        {
            var result = await _ILeaveRequest.ApproveLeaveRequest(obj);

            if (result == null)
                return NotFound();

            return Ok(result);
        }
        [HttpGet("LeaveRequestDelete")]
        public async Task<IActionResult> LeaveRequestDelete(int empleaveId)
        {
            var result = await _ILeaveRequest.LeaveRequestDelete(empleaveId);

            if (result == null)
                return NotFound();

            return Ok(result);
        }
        #endregion
    }
}
