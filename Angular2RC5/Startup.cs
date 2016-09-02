using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Angular2RC5.Startup))]
namespace Angular2RC5
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
