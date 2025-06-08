using System.ComponentModel.DataAnnotations.Schema;

namespace IIITS.EFCore.Repositories.JVTransaction
{
    public class JVTransactionDbType
    {
        [Column("JTM_TRANSID")]
        public int TransId { get; set; }

        [Column("JTM_UNITCODE")]
        public int UnitCode { get; set; }

        [Column("JTM_VOUCHERNO")]
        public string? VoucherNo { get; set; }

        [Column("JTM_JVNUMBER")]
        public int JvNumber { get; set; }

        [Column("JTM_MANUAL_JVNO")]
        public string? ManualNo { get; set; }

        [Column("JTM_YEARID")]
        public int YearId { get; set; }

        [Column("JTM_JVDATE")]
        public DateTime? JvDate { get; set; }

        [Column("JTM_MONTHID")]
        public int MonthId { get; set; }

        [Column("JTM_CRON")]
        public DateTime? Jv_Cron { get; set; }

        [Column("JTM_NARRATION")]
        public string? JvNarration { get; set; }

        [Column("JTM_TRANSAMOUNT")]
        public decimal? JvTransAmount { get; set; }

        [Column("JTM_TRANSOURCE")]
        public string? JvSource { get; set; }

        [Column("JTM_SOURCETRANSID")]
        public int JvTransSourceId { get; set; }

        [Column("JTM_STATUS")]
        public string? JvStatus { get; set; }

        [Column("JTM_CRBY")]
        public int JvCrby { get; set; }

        [Column("JTM_APPBY")]
        public int JvAppBy { get; set; }

        [Column("JTM_USERGENERATED")]
        public string? JvUserGenerated { get; set; }

        [Column("JTM_ISLEDGERUPDATED")]
        public string? JvIsLedgerUpdated { get; set; }

        [Column("JTM_APPON")]
        public DateTime? JvAppOn { get; set; }

        [Column("JTM_FILE_UPLOAD_TRANS_ID")]
        public int FileUploadTransId { get; set; }
    }
}
