using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using BooksAngularApp.Models;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace BooksAngularApp.Controllers
{
    [Route("api/[controller]")]
    public class BooksController : Controller
    {


        [HttpGet]
        public IEnumerable<Book> Get()
        {
            return new List<Book>
                {
                    new Book {Id=1, Title="Wonders of the Sky", Author="Martin James", DatePublished=Convert.ToDateTime("1/1/2013"), Type="Science",Price=23.23m },
                    new Book {Id=2, Title="Secrets of the Mind ", Author="Allan Sue ", DatePublished=Convert.ToDateTime("2/1/2011"), Type="Psychology", Price=12.50m },
                    new Book {Id=3, Title="We are Alive", Author="Dick Smith", DatePublished=Convert.ToDateTime("2/11/2010"), Type="Science Fiction", Price=21.25m } ,
                    new Book {Id=4, Title="Last day of the world", Author="Martin James", DatePublished=Convert.ToDateTime("1/1/2013"), Type="History", Price=10.40m },

                };
        }
    }

}
