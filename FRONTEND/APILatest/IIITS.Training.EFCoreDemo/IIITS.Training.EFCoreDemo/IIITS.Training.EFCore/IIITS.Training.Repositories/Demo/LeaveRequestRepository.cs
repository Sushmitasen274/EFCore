using AutoMapper;
using IIITS.EFCore.Repositories;
using IIITS.Training.DataEntities;
using IIITS.Training.DataEntities.DemoModel;
using IIITS.Training.RepoInterface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IIITS.Training.Repositories.Demo
{
    public class LeaveRequestRepository : ILeaveRequestRepo

    {
        public readonly IEMSFMSMasterServiceDBContext _dbContext;

        public LeaveRequestRepository(IEMSFMSMasterServiceDBContext dBContext)
        {
            _dbContext = dBContext;
        }

         public async Task<IEnumerable<DropDownReadEntity>> GetDropDownListForEmpCode()
        {
            var dbType = await _dbContext.MasEmpDbType.Select(x => new DropDownReadEntity
            {
                Value = x.Emp_pkId.ToString(),
                Text = x.Emp_Id
            })
                .ToListAsync();
            return dbType;
        }

        public async Task<IEnumerable<DropDownReadEntity>> GetDropDownListForEmpDesignation()
        {
            var dbType = await _dbContext.MasEmpDbType.Select(x => new DropDownReadEntity
            {
                Value = x.Emp_pkId.ToString(),
                Text = x.Emp_Designation
            })
                .ToListAsync();
            return dbType;
        }

      public async Task<IEnumerable<DropDownReadEntity>> GetDropDownListForEmpName()
        {
            var dbType = await _dbContext.MasEmpDbType.Select(x => new DropDownReadEntity
            {
                Value = x.Emp_pkId.ToString(),
                Text = x.Emp_Name
            })
               .ToListAsync();
            return dbType;
        }      
        public async Task<LeaveRequestResponse> SaveLeaveRequestData(LeaveRequestMainModelEntity obj)
        {
            LeaveRequestResponse objres = new LeaveRequestResponse();

            var leaveRequestDataDbType = new LeaveRequestDbType();
            if (obj.EmpId == 0)
            {
                leaveRequestDataDbType.EmpId = obj.EmpId;
                leaveRequestDataDbType.EmpCode = obj.EmpCode;
                leaveRequestDataDbType.EmpName = obj.EmpName;
                leaveRequestDataDbType.EmpDesignation = obj.EmpDesignation;
                leaveRequestDataDbType.EmpLeaveType = obj.EmpLeaveType;
                leaveRequestDataDbType.FromSession = obj.FromSession;
                leaveRequestDataDbType.ToSession = obj.ToSession;
                leaveRequestDataDbType.FromDate = obj.FromDate; ;
                leaveRequestDataDbType.ToDate = obj.ToDate;
                leaveRequestDataDbType.TotalDays = Convert.ToString(obj.TotalDays);
                leaveRequestDataDbType.Description = obj.Description;
                leaveRequestDataDbType.EmpStatus = "Created";
                await _dbContext.InsertArrayAsync(leaveRequestDataDbType);

                objres.Status = 1;
                objres.Response = "Save successfully";
            }
            else
            {
                //leaveRequestDataDbType.EmpId = obj.EmpId;
                //leaveRequestDataDbType.EmpCode = obj.EmpCode;
                //leaveRequestDataDbType.EmpName = obj.EmpName;
                //leaveRequestDataDbType.EmpDesignation = obj.EmpDesignation;
                //leaveRequestDataDbType.EmpLeaveType = obj.EmpLeaveType;
                //leaveRequestDataDbType.FromSession = obj.FromSession;
                //leaveRequestDataDbType.ToSession = obj.ToSession;
                //leaveRequestDataDbType.FromDate = obj.FromSession;
                //leaveRequestDataDbType.ToDate = obj.ToDate;
                //leaveRequestDataDbType.TotalDays = Convert.ToString(obj.TotalDays);
                //leaveRequestDataDbType.Description = obj.Description;
                //leaveRequestDataDbType.EmpStatus = "Updated";
                //await _dbContext.UpdateArrayAsync(leaveRequestDataDbType);

                //var itemToUpdate = await _dbContext.ItemMasters.FindAsync(obj.it_id);
                var itemToUpdate = await _dbContext.LeaveRequestDbType
                 .FirstOrDefaultAsync(x => x.EmpId == obj.EmpId);
                if (itemToUpdate != null)
                {
                    itemToUpdate.EmpId = obj.EmpId;
                    itemToUpdate.EmpCode = obj.EmpCode;
                    itemToUpdate.EmpName = obj.EmpName;
                    itemToUpdate.EmpDesignation = obj.EmpDesignation;
                    itemToUpdate.EmpLeaveType = obj.EmpLeaveType;
                    itemToUpdate.FromSession = obj.FromSession;
                    itemToUpdate.ToSession = obj.ToSession;
                    itemToUpdate.FromDate = obj.FromDate;
                    itemToUpdate.ToDate = obj.ToDate;
                    itemToUpdate.TotalDays = Convert.ToString(obj.TotalDays);
                    itemToUpdate.Description = obj.Description;
                    itemToUpdate.EmpStatus = "Updated";
                    _dbContext.Update(itemToUpdate);
                    await _dbContext.SaveChangesAsync();
                    //objres.ResponseId = 1;
                    //objres.Response = "Updated successfully";
                }


                objres.Status = 1;
                objres.Response = "Updated successfully";

            }

            return objres;
        }
        public async Task<LeaveRequestResponse> ApproveLeaveRequest(LeaveRequestModelEntity obj)
        {
            LeaveRequestResponse objres = new LeaveRequestResponse();

            var leaveRequestDataDbType = new LeaveRequestDbType();
            if (obj.EmpId == 0)
            {
                leaveRequestDataDbType.EmpId = obj.EmpId;
               // leaveRequestDataDbType.EmpStatus = obj.EmpStatus;         
                await _dbContext.InsertArrayAsync(leaveRequestDataDbType);

                objres.Status = 1;
                objres.Response = "Approved successfully";
            }
            return objres;
        }
        public async Task<IEnumerable<LeaveRequestViewModelEntity>> GetLeaveRequestView()
        {
            var leaveRequestDataDbSet = await _dbContext.LeaveRequestDbType.ToListAsync();
            if (leaveRequestDataDbSet.Count != 0)
            {
                return leaveRequestDataDbSet.Select(x => new LeaveRequestViewModelEntity()
                {
                    EmpId = x.EmpId,
                    EmpCode = x.EmpCode,
                    EmpName = x.EmpName,
                    EmpLeaveType = x.EmpLeaveType,
                    TotalDays = x.TotalDays,
                    EmpStatus = x.EmpStatus,
                }).ToList();
            }
            return null;
        }
        public async Task<LeaveRequestResponse> GetLeaveRequestDetails(int empleaveId)
        {
            try
            {
                LeaveRequestResponse objResult = new LeaveRequestResponse();

                LeaveRequestResponse LeaveRequestDbType= await _dbContext.LeaveRequestDbType
                                                            .Where(x => x.EmpId == empleaveId)
                                                            .Select(x => new LeaveRequestResponse
                                                            {
                                                                EmpId = x.EmpId,
                                                                EmpCode = x.EmpCode,
                                                                EmpName = x.EmpName,
                                                                EmpDesignation = x.EmpDesignation,
                                                                EmpLeaveType = x.EmpLeaveType,
                                                                FromSession = x.FromSession,
                                                                ToSession = x.ToSession,
                                                                FromDate = x.FromSession,
                                                                ToDate = x.ToDate,
                                                                TotalDays = x.TotalDays,
                                                                Description = x.Description,
                                                                EmpStatus = "Created"
                                                            }).FirstOrDefaultAsync();


     
               
                return LeaveRequestDbType;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
            return null;
        }
        //public async Task<LeaveRequestMainModelEntity> LeaveRequestDelete(int empleaveId)
        //{
            
        //}

        public async Task<LeaveRequestResponse> LeaveRequestDelete(int empleaveId)
        {
            LeaveRequestResponse objres = new LeaveRequestResponse();
            try
            {
                var leaveRequestDataDbSet = await _dbContext.LeaveRequestDbType.Where(x => x.EmpId == empleaveId).ToListAsync();
                if (leaveRequestDataDbSet != null)
                {
                    foreach (var detail in leaveRequestDataDbSet)
                    {
                        _dbContext.LeaveRequestDbType.Remove(detail);
                    }

                    await _dbContext.SaveChangesAsync();
                }

                objres.Status = 1;
                objres.Response = "Deleted successfully";

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
            return objres;
        }
    }
}
