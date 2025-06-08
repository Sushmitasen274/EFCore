using IIITS.EFCore.Repositories;
using IIITS.EFCore.Repositories.JVTransaction;
using IIITS.Training.RepoInterface;
using IIITS.Training.Repositories.Demo;
using IIITS.Training.ServiceInterfaces;
using IIITS.Training.Services;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IDemoRepo, JVTransactionRepository>();
builder.Services.AddScoped<IDemoService, DemoService>();
builder.Services.AddScoped<ILeaveRequestService, LeaveRequestService>();
builder.Services.AddScoped<ILeaveRequestRepo, LeaveRequestRepository>();
builder.Services.AddScoped<IEMSFMSMasterServiceDBContext>();
builder.Services.AddScoped<LeaveRequestDbType>();

builder.Services.Configure<ApiBehaviorOptions>(options => options.SuppressModelStateInvalidFilter = true);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
