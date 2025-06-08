
using System.Net;
using System.Text;
namespace IEMS_WEB.Comman
{
    public static class APIURL
    {
        public static IConfiguration getProperties = new ConfigurationBuilder().AddJsonFile("appsettings.json", optional: false, reloadOnChange: false).Build();

        public static string BaseURL = getProperties.GetSection("APIURL").Value;

    }

    public static class Authentications
    {
        public static string accessToken { get; set; }
        public static void SetToken(string Token)
        {
            accessToken = Token;
        }
        public static string GetToken()
        {
            return accessToken;
        }
    }
    public static class HttpClientHelper
    {
        public static async Task<HttpResponseMessage> POSTAPI(string URL, string JsonModel, string Token = "")
        {
            using (var client = new HttpClient())
            {
                //string url = APIURL.BaseURL + URL;
                //string url = URLPORTServices.GetURL(URLPORT.Login) + URL;
                client.BaseAddress = new Uri(URL);
                client.DefaultRequestHeaders.Add("Authorization", "Bearer " + Token);
                var content = new StringContent(JsonModel, Encoding.UTF8, "application/json");

                // response.Result.IsSuccessStatusCode == true and no errors
                var response = await client.PostAsync(URL, content);

                //response.Wait();

                if ((int)response.StatusCode != (int)HttpStatusCode.OK)
                {
                    var msg = new HttpResponseMessage(HttpStatusCode.Unauthorized) { ReasonPhrase = "Oops!!!" };
                   // throw new HttpResponseException(msg.Content.ToString());
                }

                return response;
            }
        }

        //public static async Task<HttpResponseMessage> POSTAPI(string URL, string JsonModel, string Token="")
        //{
        //    using (var client = new HttpClient())
        //    {
        //        //string url = APIURL.BaseURL + URL;
        //        //string url = URLPORTServices.GetURL(URLPORT.Login) + URL;
        //        client.BaseAddress = new Uri(URL);
        //        //client.DefaultRequestHeaders.Add("Authorization", "Bearer " + Token);
        //        var content = new StringContent(JsonModel, Encoding.UTF8, "application/json");

        //        // response.Result.IsSuccessStatusCode == true and no errors
        //        var response = await client.PostAsync(URL, content);
        //        var responseMessage = response.Content.ReadAsStringAsync();
        //        var responseObj = Newtonsoft.Json.JsonConvert.DeserializeObject<APIResponseModel<string>>(responseMessage.Result);
        //        //response.Wait();

        //        if ((int)response.StatusCode != (int)HttpStatusCode.OK)
        //        {
        //            responseObj.Succeeded = false;
        //            //var msg = new HttpResponseMessage(HttpStatusCode.Unauthorized) { ReasonPhrase = responseObj?.Message };

        //            //throw new HttpResponseException(msg.Content.ToString());
        //        }

        //        return response;
        //    }
        //}
        public static async Task<HttpResponseMessage> GetAPI(string URL, string JsonModel, string Token="")
        {
            using (var client = new HttpClient())
            {
                // string url = APIURL.BaseURL + URL;
                // string url = URLPORTServices.GetURL(URLPORT.Login) + URL;
                client.BaseAddress = new Uri(URL);
                client.DefaultRequestHeaders.Add("Authorization", "Bearer " + Token);
                var content = new StringContent(JsonModel ?? "", Encoding.UTF8, "application/json");

                // response.Result.IsSuccessStatusCode == true and no errors
                var response = await client.GetAsync(URL);
                if ((int)response.StatusCode != (int)HttpStatusCode.OK)
                {
                    var msg = new HttpResponseMessage(HttpStatusCode.Unauthorized) { ReasonPhrase = "Oops!!!" };
                    //throw new HttpResponseException(msg.Content.ToString());
                }
                //response.Wait();
                return response;
            }
        }
        public static async Task<HttpResponseMessage> GetTnTAPI(string URL, string JsonModel, string Token)
        {
            using (var client = new HttpClient())
            {
                string url = URL;
                client.BaseAddress = new Uri(url);
                client.DefaultRequestHeaders.Add("Authorization", "Bearer " + Token);
                var content = new StringContent(JsonModel ?? "", Encoding.UTF8, "application/json");

                // response.Result.IsSuccessStatusCode == true and no errors
                var response = await client.GetAsync(url);
                if ((int)response.StatusCode != (int)HttpStatusCode.OK)
                {
                    var msg = new HttpResponseMessage(HttpStatusCode.Unauthorized) { ReasonPhrase = "Oops!!!" };
                    //throw new HttpResponseException(msg.Content.ToString());
                }
                //response.Wait();
                return response;
            }
        }
        public static Task<HttpResponseMessage> POSTSynchronousAPI(string URL, string JsonModel, string Token)
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(URL);
                client.DefaultRequestHeaders.Add("Authorization", "Bearer " + Token);
                var content = new StringContent(JsonModel, Encoding.UTF8, "application/json");

                // response.Result.IsSuccessStatusCode == true and no errors
                var response = client.PostAsync(URL, content);
                response.Wait();
                return response;
            }
        }
    }
}
