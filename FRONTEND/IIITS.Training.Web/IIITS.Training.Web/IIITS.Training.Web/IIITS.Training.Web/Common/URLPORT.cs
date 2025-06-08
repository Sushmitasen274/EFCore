namespace IEMS_WEB.Comman
{
    public enum URLPORT
    {
		Demo
	}

    public static class URLPORTServices
    {
        public static IConfiguration getProperties = new ConfigurationBuilder().AddJsonFile("appsettings.json", optional: false, reloadOnChange: false).Build();

        public static string GetURL(URLPORT obj)
        {
            string URL = null;
            switch (obj)
            {
                case URLPORT.Demo:
                    URL = getProperties.GetSection("DemoAPIURL").Value;
                    break;
            }
            return URL;
        }
    }
}
