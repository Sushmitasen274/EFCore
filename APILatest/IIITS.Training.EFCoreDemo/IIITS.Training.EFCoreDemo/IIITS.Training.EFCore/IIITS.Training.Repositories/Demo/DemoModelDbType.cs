using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IIITS.Training.Repositories.Demo
{
	[Table("TRANS_BILLS_ENTRY")]
	public class DemoModelDbType
	{
		[Key]
		[Column("DEMO_PKID")]
		public int DemoPkid { get; set; }

		[Column("DEMO_ITEM")]
		public string? DropDown { get; set; }

		[Column("DEMO_TEXT")]
		public string? TextField { get; set; }

		[Column("DEMO_NUMBER")]
		public int Number { get; set; }

		[Column("DEMO_STATUS")]
		public string? Status { get; set; }

	}
}
