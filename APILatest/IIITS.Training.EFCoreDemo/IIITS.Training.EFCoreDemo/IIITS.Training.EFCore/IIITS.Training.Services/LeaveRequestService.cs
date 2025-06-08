using IIITS.Training.DataEntities.DemoModel;
using IIITS.Training.DataEntities;
using IIITS.Training.RepoInterface;
using IIITS.Training.ServiceInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IIITS.Training.Services
{
    public class LeaveRequestService : ILeaveRequestService
    {
        public readonly ILeaveRequestRepo _LeaveRequestRepo;


        public LeaveRequestService(ILeaveRequestRepo LeaveRequestRepo)
        {
            _LeaveRequestRepo = LeaveRequestRepo;
        }

        public async Task<IEnumerable<DropDownReadEntity>> GetDropDownListForEmpCode()
        {
            var result = await _LeaveRequestRepo.GetDropDownListForEmpCode();
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

        public async Task<IEnumerable<DropDownReadEntity>> GetDropDownListForEmpDesignation()
        {
            var result = await _LeaveRequestRepo.GetDropDownListForEmpDesignation();
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
        public async Task<IEnumerable<DropDownReadEntity>> GetDropDownListForEmpName()
        {
            var result = await _LeaveRequestRepo.GetDropDownListForEmpName();
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




        public async Task<LeaveRequestResponse> SaveLeaveRequestData(LeaveRequestMainModelEntity obj)
        {
            return await _LeaveRequestRepo.SaveLeaveRequestData(obj);
        }
        public async Task<LeaveRequestResponse> ApproveLeaveRequest(LeaveRequestModelEntity obj)
        {
            return await _LeaveRequestRepo.ApproveLeaveRequest(obj);
        }
        public async Task<IEnumerable<LeaveRequestViewModelEntity>> GetLeaveRequestView()
        {
            return await _LeaveRequestRepo.GetLeaveRequestView();
        }
        public async Task<LeaveRequestResponse> GetLeaveRequestDetails(int empleaveId)
        {
            return await _LeaveRequestRepo.GetLeaveRequestDetails(empleaveId);
        }
        public async Task<LeaveRequestResponse> LeaveRequestDelete(int empleaveId)
        {
            return await _LeaveRequestRepo.LeaveRequestDelete(empleaveId);
        }



    }
}
