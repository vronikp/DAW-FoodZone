using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(FoodZone.Startup))]
namespace FoodZone
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
