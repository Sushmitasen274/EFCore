using IIITS.Training.Web.Areas.Demo.Interfaces;
using IIITS.Training.Web.Areas.Demo.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddScoped<IDemo, DemoServices>();
builder.Services.AddScoped<ILeaveRequest, LeaveRequestServices>();
builder.Services.AddScoped<ILeaveRequestView, LeaveRequestViewService>();


// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
	app.UseExceptionHandler("/Home/Error");
	// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
	app.UseHsts();
}



app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.UseEndpoints(endpoints =>
{

    endpoints.MapAreaControllerRoute(
        name: "MasterModule",
        areaName: "MasterModule",
        pattern: "MasterModule/{controller=Home}/{action=GeneralLedgerReport}"
    );


    endpoints.MapControllerRoute(
        name: "areaRoute",
        pattern: "{area:exists}/{controller}/{action}"
    );

    //app.MapControllerRoute(
    //  name: "default",
    //  pattern: "{controller=Sample}/{action=Index}/{id?}");

    app.MapControllerRoute(
    name: "DemoRoute",
    pattern: "{area:exists}/{controller=LeaveRequest}/{action=LeaveRequestView}",
    defaults: new { area = "Demo" }
);

    endpoints.MapAreaControllerRoute(
         name: "Demo",
         areaName: "Demo",
         pattern: "Demo/{controller=Demo}/{action=Demo}/{id?}"
    );
    endpoints.MapDefaultControllerRoute();

});

app.Run();
