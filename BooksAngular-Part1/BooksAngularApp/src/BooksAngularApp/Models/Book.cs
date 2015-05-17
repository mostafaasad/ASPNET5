using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace BooksAngularApp.Models
{
   /// <summary>
   /// The entity class with Book properties
   /// </summary>
    public class Book
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Type { get; set; }
        public DateTime DatePublished { get; set; }
        public decimal Price { get; set; }

    }

    

}
